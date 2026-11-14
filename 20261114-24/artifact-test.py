import json,csv,io
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text()))); assert len(rows)==r['total']; assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
assert rows[0]['reviewNote']=="'"+r['reviews'][0]['reviewNote']; assert rows[0]['owner']=="'"+r['reviews'][0]['owner'];assert '\n' in rows[0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text().replace('\n  ','\n')
r=json.loads(Path('export-max.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-max.csv').read_text())));assert len(rows)==32;assert rows[-1]['reviewNote']=='last row\nkept';assert r['total']==32
Path('artifact-validation.json').write_text(json.dumps({'jsonCsvMarkdownRoundTrip':True,'formulaEscaping':True,'multilineQuotesCommasPreserved':True,'all32RowsPreserved':True},indent=2));print('PASS independent artifact parsing')
