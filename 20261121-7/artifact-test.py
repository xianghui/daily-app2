from pathlib import Path
import csv,json,io,os
os.chdir(Path(__file__).resolve().parent)
out=[]
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-audit-csv.csv').read_text())));checks=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-check-csv.csv').read_text())))
 assert len(rows)==r['total']==12 and len(checks)==4
 assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for x,s in zip(rows,r['originalInput']['records']):assert float(x['original_x'])==s['x'] and float(x['original_y'])==s['y'] and x['original_text']==s['text']
 assert sum(x['joint_flag']=='true' for x in checks)==2 and all(x['marginal_flag']=='false' for x in checks)
 out.append({'fixture':i,'auditRows':len(rows),'checks':len(checks),'jointOnly':2})
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed-audit.csv').read_text())));assert len(rows)==12 and r['held']==1
assert rows[0]['note']=="'=SUM(1,2)\n\"inspect\", both axes";assert r['reviews'][0]['note']=='=SUM(1,2)\n"inspect", both axes';assert r['reviews'][0]['note'] in Path('export-reviewed.md').read_text()
assert json.loads(Path('export-max.json').read_text())['total']==48
Path('artifact-validation.json').write_text(json.dumps({'fixtures':out,'allRecordsAndNumericSignsPreserved':True,'multilineQuotesCommaAndFormulaEscape':True,'reviewedHoldSurvives':True,'maxRoundTrip':48},indent=2));print('PASS independent CSV/JSON/Markdown parsing and source preservation')
