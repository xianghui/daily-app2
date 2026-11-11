import csv,json,io,pathlib
p=pathlib.Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])
for x,r in zip(rows,a['records']):
 assert x['id']==r['id'] and float(x['respondents'])==r['members'] and float(x['rating'])==r['rating']
 assert x['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
assert a['records'][0]['rating']==4.5 and a['originalInput']['records'][0]['rating']==5
assert '4.5' in (p/'export-reviewed.md').read_text()
z=json.loads((p/'export-max.json').read_text());r=json.loads((p/'export-roundtrip.json').read_text());assert z['originalInput']==r['originalInput'];assert len(z['records'])==24
assert len(list(csv.DictReader(io.StringIO((p/'export-max.csv').read_text()))))==24
for f in ['export-blocked.json','export-weightguard.json']:
 x=json.loads((p/f).read_text());assert not x['fit']['usable'] and x['fit']['mean'] is None
(p/'artifact-validation.json').write_text(json.dumps(dict(csvParsed=True,reviewedValues=True,formulaEscaped=True,multilinePreserved=True,originalsPreserved=True,maxRoundtrip=24,blockedEstimatesNull=True),indent=2))
print('PASS parsed actual artifacts and 24-row roundtrip')
