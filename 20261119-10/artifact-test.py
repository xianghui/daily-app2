import os
from pathlib import Path
os.chdir(Path(__file__).resolve().parent)
from pathlib import Path
import csv,json,itertools
reports=[]
for j in range(2):
 p='export-fixture'+str(j);d=json.loads(Path(p+'.json').read_text());rows=list(csv.DictReader(Path(p+'.csv').open(newline='')));matrix=list(csv.DictReader(Path(p+'-matrix.csv').open(newline='')))
 assert len(rows)==len(d['reviews'])==6
 for a,b,o in zip(rows,d['reviews'],d['originalInput']['observations']):
  assert a['id']==b['id']==o['id'] and a['original_description']==o['description'] and a['reviewed_level']==b['item']
 assert len(matrix)==len(d['plan']['selected'])
 for a,b in zip(matrix,d['plan']['selected']):
  assert a['test_id']==b['id'] and [a[f['id']] for f in d['originalInput']['factors']]==b['levels']
  assert int(a['new_pairs'])==b['newPairs'] and a['suite_status']==d['status']
 assert str(d['plan']['covered'])+'/'+str(d['plan']['pairTotal']) in Path(p+'.md').read_text()
 reports.append({'fixture':j,'auditRows':len(rows),'testRows':len(matrix),'allIdentitiesAndReviewedLevelsPreserved':True})
x=json.loads(Path('export-reviewed.json').read_text());c=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')));assert x['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify';assert c[0]['review_note']=="'"+x['reviews'][0]['reviewNote']
x=json.loads(Path('export-max.json').read_text());c=list(csv.DictReader(Path('export-max.csv').open(newline='')));m=list(csv.DictReader(Path('export-max-matrix.csv').open(newline='')));assert len(c)==len(x['reviews'])==24;assert c[-1]['review_note']=='last note\nkept';assert len(m)==len(x['plan']['selected']);assert x['plan']['pairTotal']==160
x=json.loads(Path('export-budget.json').read_text());m=list(csv.DictReader(Path('export-budget-matrix.csv').open(newline='')));assert len(m)==1 and m[0]['suite_status']=='budget-limited';assert len(x['plan']['uncovered'])==9
Path('artifact-validation.json').write_text(json.dumps({'fixtures':reports,'maxBatchRows':24,'maximumPairs':160,'multilineQuoteCommaFormulaEscaping':True,'budgetStatusPreserved':True,'independentPythonCSVJSONParsing':True},indent=2));print('PASS downloaded JSON/audit CSV/matrix CSV/Markdown, maximum batch, edited multiline field and incomplete-suite status')
