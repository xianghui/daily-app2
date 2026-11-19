import csv,json,math
from pathlib import Path
checks=[]
for j in range(2):
 r=json.loads(Path(f'export-fixture{j}.json').read_text()); rows=list(csv.DictReader(open(f'export-fixture{j}.csv',newline='')));targets=list(csv.DictReader(open(f'export-fixture{j}-targets.csv',newline='')))
 assert len(rows)==len(r['originalInput']['logs'])==4
 assert len(targets)==len(r['originalInput']['targets'])==2
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id'] and x['reviewed_anchor']==y['anchor']
 for x,y in zip(targets,r['targets']):
  assert x['id']==y['id'] and float(x['output_x'])==y['outputX'] and float(x['output_y'])==y['outputY']
 assert 'not independent accuracy guarantees' in Path(f'export-fixture{j}.md').read_text()
 checks.append({'fixture':j,'auditRows':len(rows),'targetRows':len(targets),'allCoordinatesPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv',newline='')))
assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote']
assert len(list(csv.DictReader(open('export-max.csv',newline=''))))==16
assert len(list(csv.DictReader(open('export-eight-targets.csv',newline=''))))==8
for f in ['export-held.json','export-duplicate.json','export-residual.json']:
 q=json.loads(Path(f).read_text());assert q['status']!='ready' and len(q['reviews'])==4 and not q.get('targets')
Path('artifact-validation.json').write_text(json.dumps({'fixtures':checks,'multilineQuotesCommasAndFormulaEscaping':True,'maxBatchAuditRows':16,'maxTargets':8,'blockedOutputsRetainOriginals':True},indent=2))
print('PASS independently parsed JSON/CSV/Markdown, reviewed multiline escapes, complete audit and target coordinates')
