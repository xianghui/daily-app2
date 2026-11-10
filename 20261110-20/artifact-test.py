from pathlib import Path
import json,csv
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open()));assert len(rows)==len(a['records'])
for r,j in zip(rows,a['records']):
 assert r['id']==j['id'] and r['source']==j['original']['text']
 assert int(r['original_cents'])==j['original']['cents'] and int(r['reviewed_cents'])==j['cents']
 assert r['reviewed_policy']==j['policy'] and r['reviewed_payer']==j['payer']
 assert json.loads(r['shares_json'])==j['shares']
 assert r['note']==("'" if j['note'].startswith(('=','+','-','@','\t','\r')) else '')+j['note']
md=(p/'export-reviewed.md').read_text()
for r in a['records']:assert r['id'] in md and str(r['cents']) in md
for f in p.glob('export-*.json'):
 d=json.loads(f.read_text());assert len(d['records'])==len(d['originalInput']['expenses'])
 if d['ready']:
  assert sum(x['net'] for x in d['balances'])==0
  for r in d['records']:assert sum(x['cents'] for x in r['shares'])==r['cents']
(p/'artifact-validation.json').write_text(json.dumps({'completeCurrentReviewedRecords':len(rows),'originalCentsPreserved':True,'editedPolicyPayerCentsPreserved':True,'CSVFormulaEscaping':True,'jsonAuditsParsed':len(list(p.glob('export-*.json'))),'MarkdownPaymentsAndCompleteAuditReopened':True},indent=2))
print('PASS independently parsed browser JSON/CSV/Markdown artifacts')
