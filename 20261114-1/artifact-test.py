import json,csv
from pathlib import Path
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(r['reviews'])
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id'] and int(x['minutes'])==y['minutes'] and x['family']==y['kind'] and int(x['deadline'])==y['deadline']
  original=next(z for z in r['originalInput']['records'] if z['id']==x['id']);assert x['source']==original['note']
  p=next(j for j in r['plan']['jobs'] if j['id']==x['id']);assert int(x['position'])==r['plan']['jobs'].index(p)+1
  for key in ['setup_start','setup_minutes','start','end']:
   target={'setup_start':'setupStart','setup_minutes':'setup'}.get(key,key);assert int(x[key])==p[target]
  for key in ['owner','review_note']:
   expected=y['reviewNote' if key=='review_note' else key];expected=("'"+expected) if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert x[key]==expected
 if name=='reviewed':
  assert '\n' in rows[0]['owner'] and '\n' in rows[0]['review_note'] and rows[0]['review_note'].startswith("'=SUM")
  assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'batches':4,'allJobsAndReviewedTimesPreserved':True,'csvFormulaEscapingAndMultiline':True,'sequencePositionsAndTimesMatched':True,'reviewedMarkdownMatched':True}))
print('PASS independently parsed actual JSON/CSV/Markdown artifacts')
