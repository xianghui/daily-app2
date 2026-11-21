import csv,json,re
from pathlib import Path
out=[]
for label in ['fixture0','fixture1','reviewed']:
 r=json.loads(Path('export-'+label+'.json').read_text());assert len(r['reviews'])==r['total']==6
 f=Path('export-'+label+('-audit-csv.csv' if label.startswith('fixture') else '-audit.csv'))
 rows=list(csv.DictReader(f.open(newline='')));assert len(rows)==6
 for x,y,z in zip(rows,r['reviews'],r['originalInput']['records']):
  assert x['id']==y['id'] and x['original_text']==z['text'] and x['reviewed_package']==y['selected'] and x['reviewed_lower_inclusive']==y['lower'] and x['reviewed_upper_exclusive']==y['upper'] and x['decision']==y['decision']
  note=y['note'];assert x['note']==("'"+note if re.match(r'^[=+\-@\t\r]',note) else note)
 if label.startswith('fixture'):
  ps=list(csv.DictReader(open('export-'+label+'-package-csv.csv',newline='')));assert len(ps)==len(r['packages'])==3
  for x,y in zip(ps,r['packages']):assert x['selected']==(y.get('selected') or '') and json.loads(x['requirement_ids_json'])==y['requirements']
 md=Path('export-'+label+('-markdown.md' if label.startswith('fixture') else '.md')).read_text()
 assert all(x['text'] in md for x in r['originalInput']['records'])
 out.append({'artifact':label,'auditRecords':6,'markdownSourcesPreserved':True})
for label,jlabel in [('fixture0-pins','fixture0'),('reviewed-pins','reviewed')]:
 r=json.loads(Path('export-'+jlabel+'.json').read_text());pins=[x for x in Path('export-'+label+'.txt').read_text().splitlines() if x and not x.startswith('#')]
 assert len(pins)==len(r['packages'])==3
 parsed={}
 for line in pins:
  m=re.fullmatch(r'([a-z][a-z0-9]*(?:-[a-z0-9]+)*)==((?:0|[1-9]\d{0,4})\.(?:0|[1-9]\d{0,4})\.(?:0|[1-9]\d{0,4}))',line);assert m
  parsed[m[1]]=m[2]
 assert parsed=={p['package']:p['selected'] for p in r['packages']}
 for row in r['reviews']:
  cv=lambda x:tuple(map(int,x.split('.')))
  assert cv(row['lower'])<=cv(parsed[row['selected']])<cv(row['upper'])
 out.append({'artifact':label,'pins':3,'allReviewedBoundsSatisfied':True})
assert json.loads(Path('export-held.json').read_text())['held']==1
assert len(json.loads(Path('export-max.json').read_text())['reviews'])==48
Path('artifact-validation.json').write_text(json.dumps(out,indent=2));print('PASS independent CSV/JSON/Markdown/pin-draft parsing and bounds')
