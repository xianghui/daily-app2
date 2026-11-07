import json,csv
from pathlib import Path
for stem in ['edited','quoted']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 for c,tid in zip(rows,a['order']):
  r=next(t for t in a['rows'] if t['id']==tid)
  for k,val in dict(id=r['id'],task=r['source']['task'],produces=r['source']['produces'],needs=r['source']['needs'],depends_on=r['parent'],note=r['note']).items():
   safe="'"+val if val and val[0] in '=+-@\t\r' else val
   assert c[k]==safe,(k,c[k],safe)
  assert int(c['stage'])==r['stage']
artifact_files=[p for p in Path('.').glob('export-*.json') if p.name!='export-roundtrip-validation.json']
for f in artifact_files:
 a=json.loads(f.read_text());assert set(a['order'])=={r['id'] for r in a['original']}=={r['id'] for r in a['rows']}
 pos={tid:i for i,tid in enumerate(a['order'])}
 for r in a['rows']:
  if r['parent']:assert pos[r['parent']]<pos[r['id']]
Path('export-roundtrip-validation.json').write_text(json.dumps({'independentParser':'Python csv + json','csvFiles':2,'jsonFiles':len(artifact_files),'recordsPreserved':True,'topologicalConstraints':True,'reviewedEditsEscaping':True},indent=2))
print('PASS independently parsed CSV/JSON, records preserved, parents precede tasks')
