import csv,json,io,math
from pathlib import Path
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])==6
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['text']==s['text']
 assert int(r['reviewed_rating'])==s['rating'] and int(r['original_rating'])==s['originalRating']
 assert r['decision']==s['decision'] and r['reviewed_branch']==s['selected'] and r['AI_branch']==s['proposed']
 assert math.isclose(float(r['weight']),s['appliedWeight'])
 assert r['verification']==("'"+s['rationale'] if s['rationale'].startswith(('=','+','-','@','\t','\r')) else s['rationale'])
assert '\nReviewed, "verified" 🪷' in rows[0]['verification']
assert a['records'][0]['rating']==3 and a['records'][0]['originalRating']==5
assert math.isclose(sum(float(r['weight']) for r in rows),a['metrics']['population'])
assert math.isclose(sum(float(r['weight'])*int(r['reviewed_rating']) for r in rows)/sum(float(r['weight']) for r in rows),a['metrics']['weightedMean'])
md=(p/'export-reviewed.md').read_text();assert 'Reviewed, "verified" 🪷' in md and '## Branch worksheet' in md and f"{a['metrics']['weightedMean']:.4f}" in md
for s in a['records']:assert s['id'] in md
held=json.loads((p/'export-held.json').read_text());assert held['records'][5]['decision']=='hold' and not held['ready']
roundtrip=json.loads((p/'export-roundtrip.json').read_text());maximum=json.loads((p/'export-max.json').read_text());assert roundtrip['originalInput']==maximum['originalInput'];assert len(roundtrip['records'])==64
(p/'artifact-validation.json').write_text(json.dumps({'jsonRecords':len(rows),'csvRows':len(rows),'quotedMultilineUnicodePreserved':True,'formulaVerificationEscaped':True,'heldRecordPreservedAndWeightingBlocked':True,'originalAndEditedRatingsPreserved':True,'weightsAndMeansIndependentlyRecomputed':True,'maxAuditRoundtripRecords':64},indent=2))
print('PASS independently parsed JSON/CSV/Markdown, weights and audit roundtrip')
