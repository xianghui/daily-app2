import json,csv,xml.etree.ElementTree as ET,re
from pathlib import Path
checks=[]
for prefix in ['', 'public-']:
 if not Path(prefix+'export-fixture0.json').exists():continue
 for label in ['fixture0','fixture1','reviewed','max','max-ready']:
  j=json.loads(Path(prefix+'export-'+label+'.json').read_text());rows=list(csv.DictReader(Path(prefix+'export-'+label+'.csv').open(newline='')))
  assert len(rows)==len(j['reviews'])==len(j['originalInput']['records'])
  for i,r in enumerate(rows):
   orig=j['originalInput']['records'][i];rev=j['reviews'][i]
   guard=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
   assert r['card_id']==guard(orig['id']);assert r['original_copy']==guard(orig['copy']);assert r['reviewed_copy']==guard(rev['copy']);assert r['reviewer_note']==guard(rev['note'])
   assert json.loads(r['wrapped_lines'])==j['analysis']['cards'][i]['lines']
  md=Path(prefix+'export-'+label+'.md').read_text();embedded=md.split('```json\n',1)[1].rsplit('\n```',1)[0];assert json.loads(embedded)==j
  if label!='max':
   root=ET.parse(prefix+'export-'+label+'.svg').getroot();groups=root.findall('{*}g');ready=[c for c in j['analysis']['cards'] if c['status']=='ready'];assert len(groups)==len(ready)
   for g,c in zip(groups,ready):assert [(x.text or '') for x in g.findall('{*}text')][1:]==c['lines']
  checks.append(prefix+label)
 for label in ['held','unbreakable']:
  j=json.loads(Path(prefix+'export-'+label+'.json').read_text());root=ET.parse(prefix+'export-'+label+'.svg').getroot();assert len(root.findall('{*}g'))==j['analysis']['ready']==2
 print(prefix+'artifacts: JSON/CSV/Markdown lossless review round trips, all SVG text lines, held/blocked excluded')
Path('artifact-validation.json').write_text(json.dumps({'parsedArtifactSets':checks,'csvFormulaGuard':True,'xmlParsed':True,'wordAndSourceConservation':True},indent=2))
