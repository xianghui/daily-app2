import csv,json,io
from pathlib import Path
checks=[]
for name in ['Event','Equipment','reviewed','formula','max']:
 a=json.loads(Path('export-'+name+'.json').read_text())
 actual=list(csv.reader(io.StringIO(Path('target-'+name+'.csv').read_text())))
 assert actual[0]==[f['id'] for f in a['originalInput']['schema']]
 expected=[[r[f['id']] for f in a['originalInput']['schema']] for r in a['output']]
 safe=lambda x:"'"+x if x and x[0] in '=+-@\t\r' else x
 assert actual[1:]==[[x if a['originalInput']['schema'][i]['type'] in ['integer','decimal'] else safe(x) for i,x in enumerate(r)] for r in expected]
 assert len(actual)-1==a['originalRows']
 checks.append({'artifact':name,'rows':len(expected),'exactReviewedValuesWithDocumentedFormulaProtection':True})
a=json.loads(Path('export-reviewed.json').read_text());m=list(csv.DictReader(io.StringIO(Path('mapping-reviewed.csv').read_text())));assert m[0]['note']=="'"+a['reviews'][0]['note'];assert len(m)==5
assert '199.95' in Path('target-reviewed.csv').read_text();assert 'Storage note' in a['originalInput']['csv'];assert len(list(csv.reader(io.StringIO(a['originalInput']['csv']))))==3
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent Python CSV parse: all rows, edited cells, formula-like multiline content, mapping notes and source-only originals survive')
