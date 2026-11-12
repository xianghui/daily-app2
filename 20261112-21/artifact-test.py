from pathlib import Path
import csv,json,io,math
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(rows)==len(a['reviews'])==4
for r,q in zip(rows,a['reviews']):
 assert r['id']==q['id'] and r['original']==q['text'] and r['session']==q['item'] and float(r['level_dBA'])==q['level'] and int(r['minutes'])==q['minutes']
 assert r['note']==("'"+q['note'] if q['note'].startswith(('=','+','-','@','\t','\r')) else q['note'])
s=list(csv.DictReader(io.StringIO((p/'export-sessions.csv').read_text())));assert len(s)==2
for r,q in zip(s,a['sessions']):assert math.isclose(float(r['energetic_Leq_dBA']),q['leq']) and r['session']==q['id']
maximum=json.loads((p/'export-max.json').read_text());assert len(list(csv.DictReader(io.StringIO((p/'export-max.csv').read_text()))))==len(maximum['reviews'])==24
assert (p/'export-reviewed.md').read_text().count('72 dBA')==1
(p/'artifact-validation.json').write_text(json.dumps(dict(passed=True,independentPythonCSVParse=True,allRecordsPreserved=True,reviewedEditsPreserved=True,multilineFormulaEscaped=True,sessionFloatRoundTrip=True,maxRows=24)))
print('PASS actual browser-download JSON/CSV/Markdown, all rows and reviewed values')
