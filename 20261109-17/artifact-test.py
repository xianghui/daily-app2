import json,csv
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['records'])==4
for row,record in zip(rows,r['records']):
 assert row['id']==record['id'] and row['source']==record['text']
 assert int(row['cents'])==record['cents']
 assert row['reviewed_account']==record['selected'] and row['decision']==record['decision']
 assert row['note']==("'"+record['note'] if record['note'].startswith(('=','+','-','@','\t','\r')) else record['note'])
 assert json.loads(row['invoice_allocations'])==[a for a in r['allocations'] if a['payment']==record['id']]
 assert record['cents']==record['allocated']+record['credit']+record['held']
assert r['records'][0]['note']=='=1+1\nReviewed, "held" 🪷'
md=Path('export-reviewed.md').read_text()
for x in r['records']:assert x['id'] in md and x['text'] in md
for i in r['invoices']:
 assert i['id'] in md
 assert i['cents']==i['allocated']+i['remaining']
 assert i['allocated']==sum(a['cents'] for a in r['allocations'] if a['invoice']==i['id'])
assert r['originalInput']==json.loads(Path('export-Facilities.json').read_text())['originalInput']
print('PASS independently parsed JSON/CSV/MD, complete sources/invoices, multiline escaping and all allocation/receipt/invoice cent balances')
