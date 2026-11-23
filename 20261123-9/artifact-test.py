import json,csv,io,pathlib,sys
p=pathlib.Path(__file__).parent
prefix=sys.argv[1] if len(sys.argv)>1 else ''
def valid(s,k):
 if k=='isbn10':return len(s)==10 and sum((10 if c=='X' else int(c))*(i+1) for i,c in enumerate(s))%11==0
 if k=='gtin13':return len(s)==13 and int(s[-1])==(-sum(int(c)*(1 if i%2==0 else 3) for i,c in enumerate(s[:-1])))%10
 total=0
 for i,c in enumerate(s):
  n=int(c)
  if i%2==len(s)%2:n=[0,2,4,6,8,1,3,5,7,9][n]
  total+=n
 return total%10==0
cases=json.loads((p/'core-validation.json').read_text())['cases']
for c in cases:
 assert valid(c['complete'],c['scheme'])
 at=c['missing'].index('?'); opts=[]
 for d in ('0123456789X' if c['scheme']=='isbn10' and at==9 else '0123456789'):
  v=c['missing'][:at]+d+c['missing'][at+1:]
  if valid(v,c['scheme']):opts.append(v)
 assert opts==c['result']['candidates']
checks=[]
for f in p.glob(prefix+'export-*.json'):
 r=json.loads(f.read_text()); assert len(r['originalInput']['records'])==len(r['reviews'])==len(r['analysis']['checks'])
 for c in r['analysis']['checks']:
  if c['status']=='valid':assert valid(c['normalized'],c['scheme'])
 checks_all=r['analysis']['checks']; ar=r['analysis']
 assert ar['ready']==sum(c['status']=='valid' for c in checks_all)
 assert ar['blocked']==sum(c['status']=='blocked' for c in checks_all)
 assert ar['held']==sum(c['status']=='held' for c in checks_all)
 assert ar['ready']+ar['blocked']+ar['held']==len(r['reviews'])
 approved=[c for c,review in zip(checks_all,r['reviews']) if review['decision']=='approve']
 assert ar['shapeOnlyPass']==sum(c['shapePass'] for c in approved)
 assert ar['shapeOnlyMisses']==sum(c['shapePass'] and c['status']=='blocked' for c in approved)
 assert ar['checksumPass']==ar['ready']
 base=f.with_suffix(''); cf=base.with_suffix('.csv'); rel=p/(f.stem+'.release.csv')
 if cf.exists():
  rows=list(csv.DictReader(io.StringIO(cf.read_text())))
  assert len(rows)==len(r['reviews'])
  for i,row in enumerate(rows):
   assert row['original_value']==r['originalInput']['records'][i]['value']
   note=r['reviews'][i]['note'];safe="'"+note if note and note[0] in '=+-@\t\r' else note
   assert row['reviewer_note']==safe
 if rel.exists():
  rows=list(csv.DictReader(io.StringIO(rel.read_text())))
  expected=[c for c in r['analysis']['checks'] if c['status']=='valid'];assert len(rows)==len(expected)
  for row,c in zip(rows,expected):assert row['identifier']==c['normalized'] and valid(row['identifier'],row['scheme'])
 md=base.with_suffix('.md')
 if md.exists():assert json.loads(md.read_text().split('```json\n',1)[1].rsplit('\n```',1)[0])==r
 checks.append(f.name)
assert checks,'Browser artifacts are required'
(p/(prefix+'artifact-validation.json')).write_text(json.dumps({'independentChecks':len(cases),'artifacts':checks,'csvJSONMarkdownAndReleasePass':True},indent=2))
print('PASS independent checksum oracle and artifacts',len(cases),len(checks))
