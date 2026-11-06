import csv,json
from decimal import Decimal
from pathlib import Path
for name in ['test','refund']:
 a=json.loads(Path(f'export-{name}.json').read_text());rows=list(csv.DictReader(Path(f'export-{name}.csv').open(newline='')))
 assert len(rows)==len(a['records'])
 for row,r in zip(rows,a['records']):
  assert row['id']==r['id'] and row['description']==r['description']
  assert int(Decimal(row['amount'])*100)==r['cents']
  assert row['account']==(r['code'] or 'UNASSIGNED')
  assert row['note']==("'"+r['note'] if r['note'].startswith('=') else r['note'])
 assert sum(int(Decimal(row['amount'])*100) for row in rows)==a['totalCents']
 assert sum(a['accountTotalsCents'].values())==a['totalCents']
print('Browser-downloaded artifacts parsed; every row, reviewed code/note and total preserved, including refund and formula escaping.')
