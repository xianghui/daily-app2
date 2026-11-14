import csv,json,io
from pathlib import Path
checks=[]
for p in Path('.').glob('export-*.json'):
 d=json.loads(p.read_text());assert len(d['reviews'])==len(d['originalInput']['records'])==d['total'];assert d['total']==d['approved']+d['held'];assert [r['id']for r in d['reviews']]==[r['id']for r in d['originalInput']['records']];checks.append(p.name)
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.load(open('export-'+name+'.json'));r=list(csv.DictReader(open('export-'+name+'.csv',newline='')));assert len(r)==d['total'];
 for i,x in enumerate(r):
  assert x['id']==d['reviews'][i]['id'];assert float(x['value'])==d['reviews'][i]['value'];assert json.loads(x['original'])==d['originalInput']['records'][i]
  expected=d['reviews'][i]['reviewNote'];expected=("'"+expected)if expected.startswith(('=','+','-','@','\t','\r'))else expected;assert x['review_note']==expected
r=list(csv.DictReader(open('export-reviewed.csv',newline='')));assert r[0]['owner']=='\'=Owner\n"second", line';assert '\n"quoted", investigate' in r[0]['review_note'];assert 'quoted' in Path('export-reviewed.md').read_text();json.dump(dict(jsonArtifacts=checks,csvRowsOriginalsReviewedFieldsPreserved=True,formulaLikeMultilineEscaped=True),open('artifact-validation.json','w'),indent=2);print('PASS independent JSON/CSV/Markdown artifact parsing')
