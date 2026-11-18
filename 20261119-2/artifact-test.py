import json,csv
from pathlib import Path
for tag in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+tag+'.json').read_text());rows=list(csv.DictReader(Path('export-'+tag+'.csv').open(newline='')))
 assert len(rows)==len(d['reviews'])==d['total']
 for o,r,exported in zip(d['originalInput']['observations'],d['reviews'],rows):
  assert exported['id']==o['id']==r['id']
  assert json.loads(exported['original_counts_json'])==o['counts']
  assert json.loads(exported['reviewed_counts_json'])==r['counts']
  assert exported['reviewed_metric']==r['item']
  assert exported['review_note']==("'" if r['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+r['reviewNote']
 if d['status']=='ready':assert d['observations']==sum(sum(r['counts']) for r in d['reviews'])
assert json.loads(Path('export-max.json').read_text())['reviews'][-1]['reviewNote']=='last row\nkept'
print('PASS independent CSV/JSON parsing: all rows, originals, edited counts, multiline notes, escaping and conservation')
