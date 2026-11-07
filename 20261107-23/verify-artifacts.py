import json,re,sys
from pathlib import Path
base=Path(sys.argv[1]) if len(sys.argv)>1 else Path('.')
for name in ['garden','workshop','max','reviewed','unlinked','manual','offline','roundtrip','budget']:
 a=json.loads((base/('export-'+name+'.json')).read_text());assert len(a['records'])==len(a['input']['anchors'])
 for r,o in zip(a['records'],a['input']['anchors']):
  for k,v in o.items():assert r[k]==v
  assert r['context'].count(r['anchor'])==1
md=(base/'export-reviewed.md').read_text();a=json.loads((base/'export-reviewed.json').read_text());links=re.findall(r'\[([^\]]+)\]\((https://[^)]+)\)',md);assert len(links)==sum(r['target']is not None for r in a['records'])
for r in a['records']:
 assert '## '+r['id']in md
 if r['target']:assert (r['anchor'],r['target']['url'])in links
 assert not r['note']or r['note']in md
(base/'artifact-validation.json').write_text(json.dumps({'independentParser':'Python json and Markdown link/section parser','allRowsOriginalFieldsPreserved':True,'reviewedLinksAndNotesSurvive':True,'datasets':9},indent=2))
print('Independent artifact parsing passed:',base)
