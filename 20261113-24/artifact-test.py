import json,csv
from pathlib import Path
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(r['reviews'])
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id'] and int(x['pages'])==y['pages'] and x['section']==y['kind']
  for key in ['owner','review_note']:
   expected=y['reviewNote' if key=='review_note' else key];expected=("'"+expected) if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert x[key]==expected
 if name=='reviewed':
  assert '\n' in rows[0]['owner'] and '\n' in rows[0]['review_note']
  assert rows[0]['review_note'].startswith("'=SUM")
  sheets=list(csv.DictReader(Path('export-reviewed.sheets.csv').open(newline='')))
  assert [{k:int(v) for k,v in s.items()} for s in sheets]==r['plan']['sheets']
  assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'batches':4,'allDocumentsPreserved':True,'csvFormulaEscapingAndMultiline':True,'sheetCsvParsed':True,'reviewedMarkdownMatched':True}))
print('PASS independently parsed actual JSON/CSV/Markdown/sheet artifacts')
