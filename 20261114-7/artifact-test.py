from pathlib import Path
import csv,json
from fractions import Fraction
reports=[]
for file in Path('.').glob('export-*.json'):
 r=json.loads(file.read_text());assert r['total']==len(r['originalInput']['records'])==len(r['reviews'])==len(r['lines'])
 assert [x['id'] for x in r['lines']]==[x['id'] for x in r['originalInput']['records']]
 assert r['total']==r['approved']+r['held'];assert r['netCents']+r['taxCents']==r['grossCents']
 for k in ['netCents','taxCents','grossCents']:
  assert sum(x[k] or 0 for x in r['lines'])==r[k]==sum(g[k] for g in r['groups'])
 for x in r['lines']:
  if x['decision']=='hold':assert all(x[k] is None for k in ['netCents','taxCents','grossCents'])
  else:
   raw=Fraction(x['amountCents']*x['rateBps'],10000+x['rateBps'] if x['basis']=='inclusive' else 10000)
   tax=(raw+Fraction(1,2)).numerator//(raw+Fraction(1,2)).denominator
   assert x['taxCents']==tax
 csvfile=file.with_suffix('.csv')
 if csvfile.exists():
  rows=list(csv.DictReader(csvfile.open(newline='')));assert len(rows)==r['total']
  for x,y in zip(rows,r['lines']):
   assert x['id']==y['id'];assert x['source_description']==r['originalInput']['records'][rows.index(x)]['description']
   for key in ['owner','review_note']:
    value=y['owner' if key=='owner' else 'reviewNote'];value="'"+value if value and value[0] in '=+-@\t\r' else value
    assert x[key]==value,(key,x[key],value)
   assert x['gross_cents']==('' if y['grossCents'] is None else str(y['grossCents']))
 reports.append({'artifact':str(file),'records':r['total'],'csvParsed':csvfile.exists(),'independentAmountsAndTotals':True})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['owner'];assert 'quoted' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS',len(reports),'JSON artifacts, CSV quoting/formula guards, held rows, reviewed totals and Markdown')
