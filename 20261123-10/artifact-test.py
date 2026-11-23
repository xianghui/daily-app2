import csv,json,os
from pathlib import Path
prefix=os.environ.get('PREFIX','');report=[]
def safe(s):return "'"+s if isinstance(s,str) and s and s[0] in '=+-@\t\r' else s
for path in Path('.').glob(prefix+'export-*.json'):
 r=json.loads(path.read_text());orig=r['originalInput']['records'];reviews=r['reviews'];checks=r['analysis']['checks'];assert len(orig)==len(reviews)==len(checks)
 assert [o['id'] for o in orig]==[c['id'] for c in checks]
 assert len({c['id'] for c in checks})==len(orig)
 cp=path.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));assert len(rows)==len(orig)
  for o,s,c,row in zip(orig,reviews,checks,rows):
   for k,v in {'record_id':o['id'],'original_value':o['value'],'original_context':o['note'],'reviewed_value':s['value'],'normalized':c['normalized'],'reviewer_note':s['note']}.items():assert row[k]==safe(v),(k,row[k],v)
 rp=path.with_suffix('.release.csv')
 if rp.exists():
  rows=list(csv.DictReader(rp.open(newline='')));expected=[c for c in checks if c['status']=='valid'];assert len(rows)==len(expected)
  assert len(set((row['namespace'],row['normalized_key']) for row in rows))==len(rows)
  for row,c in zip(rows,expected):assert row=={'record_id':safe(c['id']),'namespace':safe(c['profile']),'normalized_key':safe(c['normalized'])}
 md=path.with_suffix('.md')
 if md.exists():assert json.loads(md.read_text().split('```json\n')[-1].split('\n```')[0])==r
 report.append({'artifact':str(path),'records':len(orig),'csv':cp.exists(),'release':rp.exists(),'markdown':md.exists()})
assert len(report)>=7
r=json.loads(Path(prefix+'export-reviewed.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\nChecked "source", not identity.';assert r['reviews'][0]['value']=='AB-99';assert r['originalInput']['records'][0]['value']=='ＡＢ-１２'
assert json.loads(Path(prefix+'export-control.json').read_text())['reviews'][0]['value']=='value\nline'
Path(prefix+'artifact-validation.json').write_text(json.dumps({'pass':True,'independentPythonCSVJSONParsers':True,'artifacts':report},indent=2));print('PASS independently parsed artifacts',len(report))
