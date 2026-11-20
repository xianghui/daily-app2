from pathlib import Path
import json,csv,math
p=Path('.');checks=[]
for stem in ['export-fixture0','export-fixture1','export-max']:
 d=json.loads((p/(stem+'.json')).read_text()); rows=list(csv.DictReader((p/(stem+'.csv')).open(newline=''))); t=list(csv.DictReader((p/(stem+'-table.csv')).open(newline='')))
 assert len(rows)==d['total']==len(d['originalInput']['records'])
 assert [x['id'] for x in rows]==[x['id'] for x in d['reviews']]
 for c,r,o in zip(rows,d['reviews'],d['originalInput']['records']):
  assert c['original_row_text']==o['rowText'] and c['original_column_text']==o['colText']
  assert math.isclose(float(c['original_value']),o['value']) and math.isclose(float(c['reviewed_value']),r['value'])
  assert c['decision']==r['decision'] and c['review_note']==r['reviewNote']
 assert len(t)==len(d['cells'])
 for c,x in zip(t,d['cells']):
  assert c['row']==x['row'] and c['column']==x['col']
  assert int(c['controlled_integer'])==x['rounded'] and float(c['exact_approved_sum'])==x['exact']
 for r in d['originalInput']['first']:assert sum(int(c['controlled_integer'])for c in t if c['row']==r['id'])==r['total']
 for r in d['originalInput']['second']:assert sum(int(c['controlled_integer'])for c in t if c['column']==r['id'])==r['total']
 if stem!='export-max':
  md=(p/(stem+'.md')).read_text()
  for r in d['reviews']:assert '### '+r['id']+'\n' in md
 checks.append({'artifact':stem,'records':len(rows),'allRosterCells':len(t),'marginsExactlyPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text()); c=list(csv.DictReader(Path('export-reviewed.csv').open(newline=''))); assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"reviewed", with newline'; assert c[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert json.loads(Path('export-max.json').read_text())['reviews'][-1]['reviewNote']=='last note\nkept'
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'jsonCSVMarkdownRoundTrips':checks,'formulaLikeMultilineQuotedNoteEscaped':True,'maxFinalRecordSurvives':True},indent=2));print('PASS artifacts independently parsed: records, margins, multiline/formula escaping')
