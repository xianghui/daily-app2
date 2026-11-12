import json,csv
from pathlib import Path
a=json.load(open('export-reviewed.json'));rows=list(csv.DictReader(open('export-reviewed.csv',newline='')))
assert len(rows)==len(a['records'])
for i,(r,z) in enumerate(zip(a['records'],rows)):
 assert z['id']==r['id'] and z['sourceText']==r['text'] and int(z['qty'])==r['qty']
 assert z['reviewedSource']==r['item'] and z['reviewedDestination']==r['toLot']
 assert z['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert z['originalDestination']==a['originalInput']['records'][i]['toLot']
md=Path('export-reviewed.md').read_text();assert '73' in md and 'v0 → v1 → v2 → v5' in md
m=json.load(open('export-max.json'));r=json.load(open('export-roundtrip.json'))
assert len(m['records'])==24 and m['originalInput']==r['originalInput'] and m['groups']==r['groups']
assert len(list(csv.DictReader(open('export-max.csv',newline=''))))==24
h=json.load(open('export-held.json'));assert not h['released'] and not h['groups'] and len(h['records'])==4
json.dump({'independentCSVParse':True,'editedQtyDestinationAndNotesPreserved':True,'formulaQuotedMultilineEscaped':True,'maximumBatchRoundTrip24Records':True,'originalsPreserved':True,'heldAuditHasNoReleasedChecklist':True},open('artifact-validation.json','w'),indent=2)
print('PASS artifact independent parse and roundtrip')
