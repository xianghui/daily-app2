import csv,json,io
from pathlib import Path
checks=[]
for kind in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+kind+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+kind+'.csv').read_text())))
 assert len(rows)==len(a['records'])
 for i,(r,s) in enumerate(zip(rows,a['records'])):
  for k,col in [('id','id'),('text','source'),('item','reviewedFamily'),('period','reviewedPeriod'),('decision','decision')]:assert r[col]==s[k]
  for k,col in [('inspected','reviewedInspected'),('failed','reviewedFailed')]:assert int(r[col])==s[k]
  note=s['note']; assert r['reviewerNote']==("'"+note if note and note[0] in '=+-@\t\r' else note)
  original=a['originalInput']['records'][i]; assert int(r['originalInspected'])==original['inspected'];assert int(r['originalFailed'])==original['failed']
 checks.append({'artifact':kind,'rows':len(rows),'allFieldsChecked':True})
a=json.loads(Path('export-reviewed.json').read_text());m=Path('export-reviewed.md').read_text();assert all(r['id'] in m for r in a['records']);assert 'second line' in m
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'checks':checks,'multilineQuotedFormulaEscaping':True,'markdownEveryRecord':True},indent=2));print('PASS independent Python CSV parse and JSON preservation')
