import csv,json,io
from pathlib import Path
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])==6
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['source']==s['source']
 assert int(r['score'])==s['score'] and int(r['originalScore'])==s['originalScore']
 assert r['decision']==s['decision'] and r['option']==s['option'] and r['criterion']==s['selected']
 assert r['rationale']==("'"+s['rationale'] if s['rationale'].startswith(('=','+','-','@','\t','\r')) else s['rationale'])
assert '\nReviewed, "verified" 🪷' in rows[0]['rationale']
assert a['records'][0]['score']==7 and a['records'][0]['originalScore']==9
md=(p/'export-reviewed.md').read_text();assert 'Reviewed, "verified" 🪷' in md and 'Leave-one-criterion-out' in md
held=json.loads((p/'export-held.json').read_text());assert held['records'][5]['decision']=='hold' and held['weighted'] is None
roundtrip=json.loads((p/'export-roundtrip.json').read_text());maximum=json.loads((p/'export-max.json').read_text());assert roundtrip['originalInput']==maximum['originalInput'];assert len(roundtrip['records'])==64
(p/'artifact-validation.json').write_text(json.dumps({'jsonRecords':len(rows),'csvRows':len(rows),'quotedMultilineUnicodePreserved':True,'formulaRationaleEscaped':True,'heldRecordPreservedAndRankingBlocked':True,'originalAndEditedScoresPreserved':True,'maxAuditRoundtripRecords':64},indent=2))
print('PASS independently parsed JSON/CSV/Markdown and audit roundtrip')
