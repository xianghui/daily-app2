import csv,json,io
from pathlib import Path
p=json.loads(Path('export-reviewed.json').read_text());rr=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rr)==len(p['records'])==8
for row,r in zip(rr,p['records']):
 assert row['id']==r['id'] and row['source']==r['source'] and row['sample']==r['sample'] and row['reviewed_method']==r['selected'] and float(row['value'])==r['value'] and float(row['original_value'])==r['originalValue'] and row['decision']==r['decision']
 assert row['note']==("'"+r['rationale'] if r['rationale'].startswith(('=','+','-','@','\t','\r')) else r['rationale'])
assert rr[0]['note']=='\'=1+1\nReviewed, "verified" 🪷'
a=json.loads(Path('export-max.json').read_text());assert len(a['records'])==64;assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==a['originalInput'];md=Path('export-reviewed.md').read_text();assert all(r['source'] in md for r in p['records']);assert 'candidate minus reference' in md
Path('artifact-validation.json').write_text(json.dumps({'parsedBrowserCSVRows':len(rr),'currentEditPreserved':p['records'][0]['value']==21,'originalValuePreserved':p['records'][0]['originalValue']==20,'multilineQuotesUnicodeFormulaEscaping':True,'json64ReadingsRoundtrip':True,'markdownAllSources':True},indent=2));print('PASS independently parsed current JSON, CSV, Markdown and 64-row roundtrip')
