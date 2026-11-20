import json,csv,io
from pathlib import Path
p=Path(__file__).resolve().parent
for i,total in [(0,74),(1,20)]:
 r=json.loads((p/f'export-fixture{i}.json').read_text());register=list(csv.DictReader(io.StringIO((p/f'export-fixture{i}-Register-CSV.csv').read_text(encoding='utf-8-sig'))));audit=list(csv.DictReader(io.StringIO((p/f'export-fixture{i}-Audit-CSV.csv').read_text(encoding='utf-8-sig'))));assert len(register)==len(audit)==2;assert sum(int(x['count']) for x in register)==total
 for x,y in zip(audit,r['reviewed']):
  for k in ['id','name','item','location','count','decision','note','ocr']:assert x[k]==y[k]
r=json.loads((p/'export-reviewed.json').read_text());a=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text(encoding='utf-8-sig'))));assert a[0]['note']=="'"+r['reviewed'][0]['note'];assert '\n' in a[0]['note'];assert '"reviewed", with newline' in a[0]['note'];assert r['metrics']['approvedUnits']==25
r=json.loads((p/'export-max.json').read_text());a=list(csv.DictReader(io.StringIO((p/'export-max-audit.csv').read_text(encoding='utf-8-sig'))));reg=list(csv.DictReader(io.StringIO((p/'export-max-register.csv').read_text(encoding='utf-8-sig'))));assert len(a)==len(reg)==8;assert sum(int(x['count']) for x in reg)==108;assert [x['id']for x in a]==[x['id']for x in r['originals']]
assert json.loads((p/'export-restored.json').read_text())['reviewed']==json.loads((p/'export-reviewed.json').read_text())['reviewed']
(p/'artifact-validation.json').write_text(json.dumps({'independentPythonCSVParse':True,'fixtureTotals':[74,20],'reviewedTotal':25,'maxCards':8,'maxTotal':108,'quotesNewlinesFormulaEscaping':True,'reimportReviewedFieldsPreserved':True},indent=2));print('PASS artifact round trips')
