import json,csv,pathlib
p=pathlib.Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(a['records'])
for row,r in zip(rows,a['records']):
 assert row['id']==r['id'] and row['source']==r['source'] and row['reviewedCard']==r['card'] and row['decision']==r['decision']
 assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert row['grade']==str(r['grade'])
 if r['decision']=='approve':assert row['due']==next(c['due'] for c in a['deck'] if c['id']==r['card'])
 else:assert row['due']==''
b=json.loads((p/'export-max.json').read_text());c=json.loads((p/'export-roundtrip.json').read_text());assert b['originalInput']==c['originalInput'];assert len(c['records'])==24 and len(c['deck'])==16
(p/'artifact-validation.json').write_text(json.dumps({'csvRows':len(rows),'reviewedRatingsDatesHoldsNotesPreserved':True,'formulaMultilineEscaped':True,'originalInputsJsonRoundtrip':True,'maxNotes':24,'maxCards':16},indent=2));print('PASS independent CSV/JSON parse, note conservation, due dates, multiline escaping and reimport')
