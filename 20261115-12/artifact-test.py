import csv,json
from pathlib import Path
report=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')));assert len(rows)==d['total']
 for x,r,o in zip(rows,d['reviews'],d['originalInput']['records']):
  assert x['id']==r['id'];assert x['originalDescription']==o['description'];assert float(x['probability'])==r['probability'];assert x['event']==r['event'];assert x['decision']==r['decision'];assert float(x['originalProbability'])==o['probability'];assert x['reviewNote']==("'" if r['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+r['reviewNote']
 if stem!='max':
  sets=list(csv.DictReader(Path('export-'+stem+'-cutsets.csv').open(newline='')));assert [json.loads(x['eventIDs']) for x in sets]==d['calculation']['cutsets']
 report.append(dict(artifact=stem,rows=len(rows),passed=True))
assert not list(csv.DictReader(open('export-all-held-cutsets.csv')))
assert '"quoted", recheck' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/JSON/Markdown parsing and all records retained')
