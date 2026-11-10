from pathlib import Path
import csv,json
j=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(j['records'])==4
for c,r in zip(rows,j['records']):
 assert c['id']==r['id'] and c['source']==r['source'] and c['stage']==r['selected'] and c['decision']==r['decision']
 assert int(c['reviewedSeconds'])==r['seconds'] and int(c['originalSeconds'])==r['originalSeconds']
 assert c['rationale']==("'"+r['rationale'] if r['rationale'].startswith(('=','+','-','@','\t','\r')) else r['rationale'])
assert rows[0]['rationale']=='\'=1+1\nReviewed, "verified" 🪷'
md=Path('export-reviewed.md').read_text(); assert '\n\n## Capacity worksheet\n' in md and 'Process capacity: blocked' in md
for r in j['records']:assert r['id'] in md
assert j['records'][0]['seconds']==250 and j['records'][0]['originalSeconds']==200
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParse':True,'everyReviewedAndHeldRecordRetained':True,'reviewedSeconds':250,'originalSeconds':200,'formulaEscapingMultilineUnicodeQuotes':True,'markdownIsActualMultiline':True,'jsonOriginalInputRoundTrip':True},indent=2))
print('PASS downloaded JSON/CSV/Markdown, reviewed/held preservation and original-input round trip')
