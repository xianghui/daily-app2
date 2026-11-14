import json,csv
from pathlib import Path
checks=[]
for f in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 d=json.loads(Path(f+'.json').read_text());rows=list(csv.DictReader(open(f+'.csv',newline='')))
 assert len(rows)==d['total'];assert [r['id'] for r in rows]==[r['id'] for r in d['reviews']]
 for r,z in zip(rows,d['reviews']):
  for k in ['shape','scale','minAge','maxAge','step','currentAge','plannedCost','failureCost']:assert float(r[k])==z[k]
  for k in ['owner','reviewNote']:
   v=z[k];expected="'"+v if v and v[0] in '=+-@\t\r' else v;assert r[k]==expected
  assert r['decision']==z['decision'];assert r['originalDescription']==next(x['description'] for x in d['originalInput']['records'] if x['id']==z['id'])
  calc=next((x for x in d['calculations'] if x['id']==z['id']),None)
  if calc:
   assert float(r['bestAge'])==calc['best']['age'];assert float(r['bestRate'])==calc['best']['rate'];assert float(r['baselineRate'])==calc['baseline']['rate']
 checks.append({'artifact':f,'retainedRows':len(rows)})
d=json.loads(Path('export-reviewed.json').read_text());assert d['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", recheck';md=Path('export-reviewed.md').read_text();assert '"quoted", recheck' in md
for r in d['reviews']:assert r['id'] in md
json.dump({'parsedWith':'Python csv/json independent parsers','checks':checks,'multilineFormulaEscapingAndCurrentEdits':True,'markdownRecordsPreserved':True},open('artifact-validation.json','w'),indent=2)
print('PASS downloaded artifacts')
