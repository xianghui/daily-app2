import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['pairs'])==4
for c,p in zip(rows,r['pairs']):
 assert c['id']==p['id'] and c['source']==p['text'] and c['reviewedRight']==p['mapped'] and c['status']==p['status']
 assert c['reviewNote']==("'"+p['reviewNote'] if p['reviewNote'].startswith(('=','+','-','@','\t','\r')) else p['reviewNote'])
assert r['crosswalk'][0]['decision']=='hold'
assert r['crosswalk'][0]['note']=='=1+1\nReviewed, "scope"'
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'csvRows':len(rows),'originalsAndReviewedFieldsPreserved':True,'quotedMultilineFormulaSafety':True,'maxPairsRoundtrip':80},indent=2));print('PASS independently parsed CSV/JSON and edited multiline note')
