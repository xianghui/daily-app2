import csv,json
from pathlib import Path
original=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(original['cards'])
for r,c in zip(rows,original['cards']):
 for k in ['id','prompt','accepted','misconception','response','decision','note']:
  text=c[k];expected="'"+text if text and text[:1] in '=+-@\t\r' else text
  assert r[k]==expected,(k,r[k],expected)
 assert int(r['grade'])==c['grade']
 assert r['due']==(c['next']['due'] if c['next'] else '')
 for old,new in [('interval','previousInterval'),('repetitions','previousRepetitions'),('ease','previousEase')]:assert float(r[new])==c[old]
 for old,new in [('interval','nextInterval'),('repetitions','nextRepetitions'),('ease','nextEase')]:assert (float(r[new])==c['next'][old]) if c['next'] else r[new]==''
assert rows[0]['note'].startswith("'=1+1\n")
Path('artifact-validation.json').write_text(json.dumps({'rows':len(rows),'allSourcesGradesDatesStatesSurvive':True,'multilineQuotesCommaEmojiAndFormulaEscaping':True,'heldRowPreserved':rows[1]['decision']=='hold'},indent=2))
print('PASS independent Python CSV parse, all records, current reviewed grades, dates, states and escaped fields')
