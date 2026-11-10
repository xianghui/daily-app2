from pathlib import Path
import csv,json
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(j['records'])==10
for c,r in zip(rows,j['records']):
 assert c['id']==r['id'] and c['source']==r['source'] and c['stream']==r['selected'] and c['decision']==r['decision']
 assert float(c['value'])==r['value'] and float(c['originalValue'])==r['originalValue']
 assert int(c['sequence'])==r['sequence'] and c['unit']==r['unit']
 assert c['rationale']==("'"+r['rationale'] if r['rationale'].startswith(('=','+','-','@','\t','\r')) else r['rationale'])
assert rows[0]['rationale']=='\'=1+1\nReviewed, "verified" 🪷'
md=Path('export-reviewed.md').read_text();assert '\n\n## Frozen-baseline charts\n' in md and 'BLOCKED' in md
for r in j['records']:assert r['id'] in md
assert j['records'][0]['value']==52 and j['records'][0]['originalValue']==50
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParse':True,'reviewedAndHeldRecordsRetained':10,'reviewedValue':52,'originalValue':50,'formulaEscapingMultilineUnicodeQuotes':True,'markdownActualMultiline':True,'jsonOriginalInputRoundTrip':True},indent=2));print('PASS downloaded JSON/CSV/Markdown parse, current review and originals retained')
