import csv,json,io
from pathlib import Path
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])==4
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['source']==s['source']
 assert int(r['units'])==s['units'] and float(r['minutesPerUnit'])==s['minutesPerUnit']
 assert r['decision']==s['decision'] and r['owner']==s['owner'] and r['action']==s['action']
 assert r['rationale']==("'"+s['rationale'] if s['rationale'].startswith(('=','+','-','@','\t','\r')) else s['rationale'])
md=(p/'export-reviewed.md').read_text();assert 'Inspect slider, "teeth" and seam / Retain failed parts.' in md
assert a['records'][0]['units']==5 and a['records'][0]['originalUnits']==3
assert a['records'][3]['decision']=='hold' and a['metrics']['heldUnits']==2
roundtrip=json.loads((p/'export-roundtrip.json').read_text());maximum=json.loads((p/'export-max.json').read_text());assert roundtrip['originalInput']==maximum['originalInput'];assert len(roundtrip['records'])==64
(p/'artifact-validation.json').write_text(json.dumps({'jsonRecords':len(rows),'csvRows':len(rows),'quotedMultilineActionPreserved':True,'formulaRationaleEscaped':True,'heldRecordPreserved':True,'originalsAndReviewedCountsPreserved':True,'maxAuditRoundtripRecords':64},indent=2))
print('PASS independently parsed JSON/CSV/Markdown artifacts and full audit roundtrip')
