import csv,json,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
def sanitize(x):
 s=str(x)
 return "'"+s if s and s[0] in '=+-@\t\r' else s
checks=[]
for path in Path('.').glob(prefix+'*.json'):
 a=json.loads(path.read_text())
 if not isinstance(a,dict) or a.get('schema')!='dewpointdock-v1':continue
 assert len(a['original']['records'])==len(a['review'])==len(a['jobs'])
 assert [r['id'] for r in a['review']]==[r['id'] for r in a['original']['records']]
 passed=0
 for r,j in zip(a['review'],a['jobs']):
  if r['decision']=='hold':assert j['status']=='held';continue
  gamma=math.log(r['rh']/100)+17.62*r['roomC']/(243.12+r['roomC']);dp=243.12*gamma/(17.62-gamma)
  assert math.isclose(dp,j['dewpointC'],abs_tol=1e-10)
  target=dp+a['original']['marginC'];assert math.isclose(target,j['targetC'],abs_tol=1e-10)
  def surface(t):return r['roomC']+(r['initialC']-r['roomC'])*math.exp(-t/r['tauMinutes'])
  assert math.isclose(j['baselineC'],surface(60),abs_tol=1e-10)
  assert j['baselineMeets']==(surface(60)>=target)
  passed+=int(j['baselineMeets'])
  if r['initialC']>r['roomC']:assert j['status']=='unsupported-cooling'
  elif r['initialC']<target and target>=r['roomC']:assert j['status']=='unreachable'
  else:
   # Independent bounded minute search, not inverse of the app's log formula.
   expected=next((m for m in range(100000) if surface(m)>=target),None)
   assert expected is not None and expected==j['waitMinutes']
   assert j['status']==('ready' if expected<=r['maxMinutes'] else 'wait-limit')
   assert math.isclose(surface(expected),j['predictedC'],abs_tol=1e-10)
 assert a['summary']['baselineMeets']==passed
 for suffix in ['audit.csv','waits.csv']:
  f=path.with_suffix('.'+suffix)
  if not f.exists():continue
  rows=list(csv.DictReader(f.open(newline='')));assert len(rows)==len(a['review'])
  for expected,row in zip(a['review'],rows):
   for k in ['id','profile','reviewerNote']:assert row[k]==sanitize(expected[k]),(f,k,row[k],expected[k])
   for k in ['roomC','rh','initialC','tauMinutes','maxMinutes']:assert float(row[k])==expected[k]
  if suffix=='waits.csv':
   assert a['summary']['manifestReady']
   for row,j in zip(rows,a['jobs']):assert int(row['waitMinutes'])==j['waitMinutes']
 md=path.with_suffix('.md')
 if md.exists():
  content=md.read_text()
  for r in a['review']:assert r['reviewerNote'] in content and r['id'] in content
 checks.append(path.name)
assert len(checks)>15
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonCsvJsonMarkdownChecks':checks,'method':'CSV DictReader; independent forward minute enumeration; Magnus forward calculation; exact edited text; conserved crate IDs/order'},indent=2))
print('PASS independent artifact round-trip/physical/metrics checks:',len(checks),'audits')
