import json,csv
from pathlib import Path
for tag in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+tag+'.json').read_text());rows=list(csv.DictReader(Path('export-'+tag+'.csv').open(newline='')))
 assert len(rows)==len(d['reviews'])==d['total']
 for o,r,e in zip(d['originalInput']['observations'],d['reviews'],rows):
  assert e['id']==o['id']==r['id']
  assert float(e['original_time'])==o['time'] and int(e['original_amount'])==o['amount']
  assert float(e['reviewed_time'])==r['time'] and int(e['reviewed_amount'])==r['amount']
  assert e['reviewed_stream']==r['item']
  assert e['review_note']==("'" if r['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+r['reviewNote']
 assert d['units']==sum(r['amount'] for r in d['reviews'])
 for g in d['groups']:assert g['total']==g['accepted']+g['rejected'] and g['proposedRejected']==0
assert json.loads(Path('export-max.json').read_text())['reviews'][-1]['reviewNote']=='last row\nkept'
print('PASS independent CSV/JSON parsing: all rows, originals, reviewed numbers, multiline escaping and conservation')
