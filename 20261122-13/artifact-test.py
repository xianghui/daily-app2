from pathlib import Path
import csv,json,io
report=[]
def safe(v):
 s=str(v if v is not None else '')
 return "'"+s if s and s[0]in'=+-@\t\r'else s
for jp in Path('.').glob('export-*-json.json'):
 r=json.loads(jp.read_text());assert r['schema']=='cascade-folio/1';src=r['originalInput'];assert len(r['reviews'])==len(src['references'])
 prefix=str(jp).removesuffix('-json.json');cp=Path(prefix+'-csv.csv');tp=Path(prefix+'-plan-csv.csv');mp=Path(prefix+'-markdown.md')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.open(newline='').read())));assert len(rows)==len(r['reviews'])
  for actual,review,original in zip(rows,r['reviews'],src['references']):
   expected={'reference':original['id'],'original_child':original['child'],'original_parent':original['parent'],'original_action':original['action'],'reviewed_child':review['child'],'reviewed_parent':review['parent'],'reviewed_action':review['action'],'decision':review['decision'],'note':review['note']}
   assert actual=={k:safe(v)for k,v in expected.items()},(actual,expected)
 if tp.exists():
  actual=list(csv.DictReader(io.StringIO(tp.open(newline='').read())));assert len(actual)==len(src['records'])
  for line,record in zip(actual,src['records']):
   assert line['record']==safe(record['id'])and line['description']==safe(record['description']);retired=next((x for x in r['analysis']['retired']if x['id']==record['id']),None)
   assert line['candidate_status']==('seed retirement'if retired and retired['seed']else'cascade retirement'if retired else'retain');assert json.loads(line['cascade_witness_json'])==(retired['via']if retired else[])
   assert ('BLOCKED' in line['release_status'])==(r['analysis']['status']=='blocked')
 if mp.exists():assert json.loads(mp.read_text().split('## Complete source-linked audit\n\n')[1])==r
 if r['analysis']['status']not in['held']:
  assert len(r['analysis']['retired'])+len(r['analysis']['retained'])==len(src['records'])
  snap=r['analysis']['snapshot']
  if snap:assert all(x['parent']is None or x['parent']in[z['id']for z in snap['records']]for x in snap['references'])
 report.append({'artifact':str(jp),'references':len(r['reviews']),'auditCsv':cp.exists(),'planCsv':tp.exists(),'markdownFullAudit':mp.exists()})
assert json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
assert len(report)>=8
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'downloaded audit sets independently parsed')
