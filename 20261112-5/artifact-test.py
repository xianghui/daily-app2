import csv,json,datetime
from pathlib import Path
checks=[]
for name in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text()); rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  assert r['id']==s['id'] and r['reviewedCustomer']==s['item']
  assert int(r['balanceCents'])==s['balanceCents'] and r['decision']==s['decision']
  prefix="'" if s['note'] and s['note'][0] in '=+-@\t\r' else ''
  assert r['note']==prefix+s['note']
 checks.append({'artifact':name,'rows':len(rows),'allReviewedValuesPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text()); customers=list(csv.DictReader(Path('export-customers.csv').open(newline='')))
assert sum(int(c['balanceCents']) for c in customers)==a['metrics']['balanceCents']
assert 'second line' in Path('export-reviewed.md').read_text()
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text()); asof=datetime.date.fromisoformat(a['originalInput']['asOf'])
 for r in a['records']:
  assert r['daysLate']==max(0,(asof-datetime.date.fromisoformat(r['due'])).days)
  assert r['balanceCents']==r['amountCents']-r['paidCents']
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks,'independentPythonCsvAndDatetime':True,'formulaMultilineNotes':True,'customerTotalsReconciled':True},indent=2))
print('PASS independent downloaded artifacts and calendar oracle')
