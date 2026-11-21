from pathlib import Path
import csv,json,io,math
p=Path.cwd(); checks=[]
for i in range(2):
 r=json.loads((p/f'export-fixture{i}.json').read_text());rows=r['reviews'];a=r['analysis'];assert len(rows)==len(a['trace'])==6;assert sum(x['tested']for x in rows)==a['totalTested']==60
 for kind in ['audit','trace']:
  cs=list(csv.DictReader(io.StringIO((p/f'export-fixture{i}-{kind}-csv.csv').read_text())));assert [x['id']for x in cs]==[x['id']for x in rows]
  assert sum(int(x['tested'])for x in cs)==60
 assert [s['observedDifference']for s in a['streams']]==([10,20]if i==0 else[20,10])
 checks.append({'fixture':i,'rows':6,'totalsConserved':True,'observedObservationDifferences':[s['observedDifference']for s in a['streams']]})
r=json.loads((p/'export-reviewed-json.json').read_text());assert r['reviews'][0]['defective']==2;assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
cs=list(csv.DictReader(io.StringIO((p/'export-reviewed-audit-csv.csv').read_text())));assert cs[0]['note']=="'"+r['reviews'][0]['note'];assert cs[0]['defective']=='2';assert 'Reviewed "source", preserved.' in (p/'export-reviewed-markdown.md').read_text();assert list(csv.DictReader(io.StringIO((p/'export-reviewed-trace-csv.csv').read_text())))[0]['defective']=='2'
r=json.loads((p/'export-held.json').read_text());assert r['held']==1 and r['analysis']is None and len(r['reviews'])==6
r=json.loads((p/'export-max.json').read_text());assert len(r['reviews'])==len(r['analysis']['trace'])==32;assert sum(x['tested']for x in r['reviews'])==320
(p/'artifact-validation.json').write_text(json.dumps({'fixtureChecks':checks,'multilineQuoteCommaFormulaEscape':True,'editedCountSurvives':True,'heldRowsPreserved':True,'max32RowRoundTrip':True},indent=2));print('PASS independent Python JSON/CSV parses, reviewed edits, arithmetic totals and all records')
