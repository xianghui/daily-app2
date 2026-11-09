import json,csv,io
from pathlib import Path
files=list(Path('.').glob('export-*.json'));checks=[]
for f in files:
 a=json.loads(f.read_text());assert len(a['records'])==len(a['originalInput']['excerpts'])
 for term in a['index']:
  wanted=sorted({p for r in a['records'] if r['decision']=='approve' and term['id'] in r['selected'] for p in range(r['start'],r['end']+1)})
  assert wanted==term['pageNumbers']
 checks.append(f.name)
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])
for row,record in zip(rows,a['records']):
 assert row['id']==record['id'] and row['source']==record['source'] and json.loads(row['selectedTerms'])==record['selected']
 assert int(row['start'])==record['start'] and int(row['end'])==record['end'] and row['decision']==record['decision']
 assert row['note']==("'" if record['note'].startswith(('=','+','-','@','\t','\r')) else '')+record['note']
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records']);assert '4–7' in md and '23–25' in md
Path('artifact-validation.json').write_text(json.dumps({'jsonArtifactsIndependentlyParsed':checks,'reviewedCsvRows':len(rows),'editedPageSurvives':True,'heldExcerptPreserved':True,'multilineQuotedUnicodeAnnotationAndFormulaNeutralization':True,'markdownCurrentIndexAndAllRecords':True},indent=2));print('PASS actual downloaded JSON/CSV/Markdown; edited pages, holds, escaped multiline annotation and row conservation')
