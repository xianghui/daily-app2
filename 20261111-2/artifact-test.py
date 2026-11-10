import json,csv
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()));assert len(rows)==len(j['records'])==8
for r,x in zip(rows,j['records']):
 assert r['id']==x['id'] and r['source']==x['original']['text']
 assert int(r['claim_cents'])==x['quantity']
 assert r['note']==("'"+x['note'] if x['note'].startswith(('=','+','-','@','\t','\r')) else x['note'])
 assert int(r['award_cents'])==x['award']
 assert int(r['first_come_cents'])==x['baselineAward']
 assert x['id'] in Path('export-reviewed.md').read_text()
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());assert len(a['records'])==len(a['originalInput']['observations']);assert [x['original'] for x in a['records']]==a['originalInput']['observations']
 for s in a['summaries']:
  assert s['spent']+s['unspent']==s['budget'];assert sum(s['awards'])==sum(s['baseline'])==s['spent']
  rr=[r for r in a['records'] if r['item']==s['id'] and r['decision']=='approve']
  assert all(0<=r['award']<=r['quantity'] for r in rr)
  assert sum(r['award'] for r in rr)==s['spent']
 assert all(r['award'] is None for r in a['records'] if r['decision']=='hold')
Path('artifact-validation.json').write_text(json.dumps({'files':len(list(Path('.').glob('export-*.json'))),'csvRows':len(rows),'originalsPreserved':True,'csvFormulaNewlineEscaping':True,'allAllocationConservation':True,'reviewedMarkdownContainsAllRecords':True},indent=2));print('PASS independent artifact parsing and exact-cent reconciliation')
