import csv,json,io
from pathlib import Path
checks=[]
for label in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+label+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+label+'.csv').read_text())));roster=list(csv.DictReader(io.StringIO(Path('export-'+label+'-roster.csv').read_text())))
 assert len(rows)==len(r['reviews'])==r['total'];assert len(roster)==len(r['roster'])==len(r['originalInput']['members'])
 for i,(source,x) in enumerate(zip(r['reviews'],rows)):
  assert x['id']==source['id'];assert x['from']==source['from'];assert x['to']==source['to'];assert x['decision']==source['decision']
  note=source['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert x['reviewNote']==expected
  for k in ['fromText','toText']:assert x[k]==r['originalInput']['records'][i][k]
 for source,x in zip(r['roster'],roster):
  assert x['member']==source['member'];assert int(x['weight'])==source['weight'];assert x['representative']==(source['representative'] or '');assert x['path']==source['path']
 assert sum(int(x['weight']) for x in roster)==r['totalWeight'];assert sum(int(x['weight']) for x in roster if x['representative'])==r['representedWeight'];checks.append(dict(label=label,proxyRows=len(rows),memberRows=len(roster),lossless=True))
review=json.loads(Path('export-reviewed.json').read_text());assert review['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify signed evidence';assert review['reviews'][0]['reviewNote'].replace('\n','\n  ') in Path('export-reviewed.md').read_text();assert json.loads(Path('export-max.json').read_text())['reviews'][-1]['reviewNote']=='last row\nkept'
Path('artifact-validation.json').write_text(json.dumps(dict(checks=checks,multilineFormulaSafe=True,markdownReviewedNoteSurvives=True),indent=2));print('PASS independently parsed actual browser downloads')
