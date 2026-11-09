import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['records'])==6
for a,b in zip(rows,r['records']):
 assert a['id']==b['id'] and a['description']==b['description'] and a['decision']==b['decision']
 assert a['reviewedRequirement']==b['requirement']
 assert int(a['unitCents'])==b['unitCents']
 assert a['note']==("'" if b['note'].startswith(('=','+','-','@','\t','\r')) else '')+b['note']
assert rows[0]['note']=='\'=1+1\nReviewed, "verified" 🪷'
selected=[x for x in rows if x['selected']=='true']
assert sum(int(x['lineCents']) for x in selected)==r['optimal']['subtotalCents']
assert {x['id'] for x in selected}=={x['id'] for x in r['optimal']['choices']}
assert 'PARTIAL PLAN' in Path('export-reviewed.md').read_text()
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
json.dump({'independentPythonCSVParsed':True,'allSixQuotesAndEditsSurvived':True,'formulaLikeMultilineEscaped':True,'selectedQuantitiesAndCentTotalsAgree':True,'jsonOriginalsRoundTrip24Quotes':True,'partialMarkdownExplicit':True},open('artifact-validation.json','w'),indent=2)
print('PASS downloaded CSV, JSON and Markdown artifacts independently parsed')
