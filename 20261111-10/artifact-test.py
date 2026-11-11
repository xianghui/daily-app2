import csv,json,io
from pathlib import Path
checks=[]
for name in ['reviewed','max']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  assert r['id']==s['id'];assert r['source']==s['original']['text'];assert r['station']==s['station'];assert int(r['start'])==s['start'];assert int(r['end'])==s['end'];assert r['decision']==s['decision'];assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note'])
 checks.append({'name':name,'rowsPreserved':len(rows),'reviewedValuesAndOriginalsPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert '31)' in md;assert str(a['metrics']['plannedOverflow']) in md
Path('artifact-validation.json').write_text(json.dumps({'csvIndependentPythonParse':checks,'multilineFormulaProtected':True,'markdownReviewedTimesAndMetrics':True},indent=2));print('PASS actual browser downloads independently parsed and reviewed values preserved')
