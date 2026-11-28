import json,csv,sys
from pathlib import Path
from decimal import Decimal
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
count=0
for path in Path('.').glob(prefix+'*.json'):
 try:s=json.loads(path.read_text())
 except:continue
 if not isinstance(s,dict) or s.get('format')!='headroom-folio-v1':continue
 ids=[r['id'] for r in s['source']['records']]
 assert ids==[r['id'] for r in s['review']]==[r['id'] for r in s['jobs']]
 for j in s['jobs']:
  if j['gainDb'] is not None:
   D=lambda v:Decimal(str(v))
   assert D(j['integratedLufs'])+D(j['gainDb'])==D(j['outputLufs'])
   assert D(j['truePeakDbtp'])+D(j['gainDb'])==D(j['outputPeakDbtp'])<=D(j['ceilingDbtp'])
   lo=-int(D(s['source']['maxCutDb'])*10);hi=int(D(s['source']['maxBoostDb'])*10)
   gains=[Decimal(g)/10 for g in range(lo,hi+1) if D(j['truePeakDbtp'])+Decimal(g)/10<=D(j['ceilingDbtp'])]
   assert abs(D(j['targetLufs'])-D(j['outputLufs']))==min(abs(D(j['targetLufs'])-D(j['integratedLufs'])-g) for g in gains)
 for ext in ['.csv','.gain.csv']:
  cp=path.with_suffix(ext)
  if not cp.exists():continue
  rows=list(csv.DictReader(cp.open(newline='')));assert len(rows)==len(ids);assert [r['id'] for r in rows]==ids
  for i,r in enumerate(rows):
   j=s['jobs'][i];src=s['source']['records'][i]['note'];note=j['reviewerNote']
   escape=lambda x:"'"+x if x and x[0] in '=+-@\t\r' else x
   assert r['originalNote']==escape(src)
   assert r['reviewerNote']==escape(note)
   for k in ['integratedLufs','truePeakDbtp','targetLufs','ceilingDbtp','gainDb','outputLufs','outputPeakDbtp']:
    if j[k] is not None:assert Decimal(r[k])==Decimal(str(j[k]))
   if ext=='.gain.csv':assert s['summary']['planReady'] and j['ready'] and j['decision']=='approve'
 if 'reviewed' in path.name:
  assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "peaks", approved'
  assert s['review'][0]['reviewerNote'] in path.with_suffix('.md').read_text()
 count+=1
assert count>=9
Path(prefix+'artifact-validation.json').write_text(json.dumps({'auditFilesParsed':count,'checks':'Python csv/JSON/Decimal: all rows/order/originals, exact reviewed numbers, peak limits, closest bounded gain, multiline quotes/formula escaping, gated artifacts'},indent=2))
print('PASS independently parsed',count,'downloaded audits')
