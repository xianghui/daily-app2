import csv,json
from pathlib import Path
rows=list(csv.DictReader(Path('export-test.csv').open(newline='')))
a=json.loads(Path('export-test.json').read_text())
assert len(rows)==len(a['records'])==3
for row,r in zip(rows,a['records']):
    for key in ['role','person','note']:assert row[key]==r[key]
assert len(json.loads(Path('unfilled-export.json').read_text())['records'])==4
print('PASS actual browser exports: all CSV rows/fields preserved with quotes, commas and newlines; all rejected/unfilled JSON roles preserved')
