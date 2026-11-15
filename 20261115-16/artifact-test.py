import json,csv,io
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));routes=list(csv.DictReader(io.StringIO(Path('export-'+name+'-routes.csv').read_text())))
 assert len(rows)==r['total'];assert len(routes)==len(r['originalInput']['cards'])
 for i,(s,x) in enumerate(zip(rows,r['reviews'])):
  assert s['id']==x['id'] and s['description']==r['originalInput']['records'][i]['description']
  assert s['card']==x['card'] and int(s['count'])==x['count'] and s['decision']==x['decision']
  note=x['reviewNote']; expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert s['reviewNote']==expected
 for s,x in zip(routes,r['routes']):
  for k in ['id','label','description','path','baselinePath']:assert s[k]==x[k]
  for k in ['count','depth','baselineDepth']:assert int(s[k])==x[k]
 assert sum(int(x['count']) for x in routes)==r['optimized']['totalCount']
 assert sum(int(x['count'])*int(x['depth']) for x in routes)==r['optimized']['weightedSteps']
 checks.append(dict(name=name,notes=len(rows),topics=len(routes),count=r['optimized']['totalCount'],everyRecordAndReviewedFieldPreserved=True))
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'];assert '"quoted", verify topic' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(dict(independentPythonCsvAndJsonParser=checks,multilineEscapingAndFormulaProtection=True,markdownReviewedNotePresent=True),indent=2));print('PASS independent downloaded artifact round-trips')
