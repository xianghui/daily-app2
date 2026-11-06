import csv,json
from pathlib import Path
a=json.loads(Path('export-test.json').read_text())
rows=list(csv.DictReader(Path('export-test.csv').open(newline='')))
assert len(rows)==len(a['records'])==4
for row,r in zip(rows,a['records']):
 for k in ['id','title','hours','description','note']: assert row[k]==str(r[k])
assert rows[0]['note']=='Owner, "review"'
b=json.loads(Path('export-reviewed.json').read_text());assert b['records'][0]['selected']==False and b['records'][0]['note']=='Changed'
print('All records and reviewed edits survive JSON/CSV; commas/quotes round-trip.')
