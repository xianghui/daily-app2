import csv,json,os
from pathlib import Path
prefix=os.environ.get('PREFIX','');report=[]
def safe(v):
 s=str(v)
 return "'"+s if isinstance(v,str) and s and s[0] in '=+-@\t\r' else s
for path in Path('.').glob(prefix+'export-*.json'):
 r=json.loads(path.read_text());orig=r['originalInput']['records'];reviews=r['reviews'];checks=r['analysis']['checks'];assert len(orig)==len(reviews)==len(checks)
 assert [o['id'] for o in orig]==[c['id'] for c in checks];assert len({c['id'] for c in checks})==len(orig)
 # Independent signed circular-distance oracle and both state transitions.
 for stream in r['originalInput']['profiles']:
  selected=[(s,c) for s,c in zip(reviews,checks) if s['resource']==stream['id']];held=any(s['decision']=='reject' for s,c in selected);ref=stream['start'];raw=ref;m=1<<stream['bits']
  for s,c in selected:
   assert c['reference']==ref
   if held:assert c['status'] in ['held','withheld'];continue
   v=s['value']
   if not 0<=v<m:assert c['status']=='invalid';continue
   signed=((v-ref+m//2)%m)-m//2
   status='duplicate' if signed==0 else 'ambiguous' if signed==-m//2 else 'newer' if signed>0 else 'stale'
   assert c['status']==status
   assert c['rawAccepted']==(v>raw)
   if v>raw:raw=v
   if status=='newer':ref=v
  actual=next(s for s in r['analysis']['streams'] if s['id']==stream['id']);assert actual['end']==ref
 assert r['analysis']['accepted']==sum(c['status']=='newer' for c in checks)
 cp=path.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));assert len(rows)==len(orig)
  for o,s,c,row in zip(orig,reviews,checks,rows):
   for k,v in {'record_id':o['id'],'original_value':o['value'],'source_context':o['note'],'reviewed_value':s['value'],'status':c['status'],'reviewer_note':s['note']}.items():assert row[k]==safe(v),(k,row[k],v)
 rp=path.with_suffix('.replay.csv')
 if rp.exists():
  rows=list(csv.DictReader(rp.open(newline='')));expected=[c for c in checks if c['status']=='newer'];assert len(rows)==len(expected)
  for row,c in zip(rows,expected):assert row=={'record_id':safe(c['id']),'stream':safe(c['profile']),'bits':str(c['bits']),'sequence':str(c['value']),'reference_before':str(c['reference']),'modular_delta':str(c['delta']),'wrap':str(c['wrap']).lower()}
 md=path.with_suffix('.md')
 if md.exists():assert json.loads(md.read_text().split('```json\n')[-1].split('\n```')[0])==r
 report.append({'artifact':str(path),'records':len(orig),'csv':cp.exists(),'replay':rp.exists(),'markdown':md.exists()})
assert len(report)>=7
r=json.loads(Path(prefix+'export-reviewed.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\nChecked "source", not reset.';assert r['reviews'][0]['value']==251;assert r['originalInput']['records'][0]['value']==122
assert json.loads(Path(prefix+'export-invalid-width.json').read_text())['analysis']['checks'][0]['status']=='invalid'
Path(prefix+'artifact-validation.json').write_text(json.dumps({'pass':True,'independentPythonCSVJSONParsers':True,'independentSignedDistanceReplay':True,'artifacts':report},indent=2));print('PASS independently parsed artifacts and replay',len(report))
