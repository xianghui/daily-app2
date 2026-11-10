import csv,json,io
from pathlib import Path
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])==12
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['source']==s['source']
 assert int(r['quantity'])==s['quantity'] and int(r['originalQuantity'])==s['originalQuantity']
 assert r['decision']==s['decision'] and r['item']==s['selected'] and r['week']==s['week']
 assert r['rationale']==("'"+s['rationale'] if s['rationale'].startswith(('=','+','-','@','\t','\r')) else s['rationale'])
 series=next(x for x in a['series'] if x['item']==s['selected'])
 assert int(r['replenish'])==series['replenish'] and r['forecastMethod']==series['forecast']['method']
assert '\nReviewed, "verified" 🪷' in rows[0]['rationale']
assert a['records'][0]['quantity']==7 and a['records'][0]['originalQuantity']==9
md=(p/'export-reviewed.md').read_text();assert 'Reviewed, "verified" 🪷' in md and '## Next-week worksheet' in md
for s in a['series']:
 assert 'replenish '+str(s['replenish']) in md
held=json.loads((p/'export-held.json').read_text());assert held['records'][11]['decision']=='hold' and not held['ready']
roundtrip=json.loads((p/'export-roundtrip.json').read_text());maximum=json.loads((p/'export-max.json').read_text());assert roundtrip['originalInput']==maximum['originalInput'];assert len(roundtrip['records'])==64
(p/'artifact-validation.json').write_text(json.dumps({'jsonRecords':len(rows),'csvRows':len(rows),'quotedMultilineUnicodePreserved':True,'formulaRationaleEscaped':True,'heldRecordPreservedAndForecastBlocked':True,'originalAndEditedQuantitiesPreserved':True,'forecastAndReplenishmentMatchCurrentReview':True,'maxAuditRoundtripRecords':64},indent=2))
print('PASS independently parsed JSON/CSV/Markdown and audit roundtrip')
