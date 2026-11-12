import csv,json,io
from pathlib import Path
checks=[]
for stem in ['Repair','Course','reviewed','max']:
 d=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==d['total']==len(d['originalInput']['records'])
 for i,(v,r) in enumerate(zip(d['reviews'],rows)):
  assert r['id']==v['id'];assert r['source_note']==d['originalInput']['records'][i]['note'];assert int(r['reviewed_days'])==v['days'];assert r['decision']==v['decision'];assert r['reviewed_group']==v['group'];assert r['reviewed_status']==v['state']
  raw=v['note'];safe="'"+raw if raw.startswith(('=','+','-','@','\t','\r')) else raw
  assert r['review_note']==safe
  assert r['follow_up']==('yes' if any(f['id']==v['id'] for f in d['followUps']) else 'no')
 checks.append({'artifact':stem,'recordsPreserved':len(rows)})
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\n"quoted", follow-up';assert r['reviews'][0]['days']==5;assert r['originalInput']['records'][0]['days']==1;assert '\\n' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'checks':checks,'multilineFormulaTextProtected':True,'originalsUnchanged':True},indent=2));print('PASS independent CSV/JSON/Markdown artifact checks',checks)
