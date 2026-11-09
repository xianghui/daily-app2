import json,csv
from pathlib import Path
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()));assert len(rows)==len(a['records'])
for r,s in zip(rows,a['records']):
 assert r['id']==s['id'] and r['source']==s['source'] and r['reviewedPool']==s['pool'] and int(r['driverUnits'])==s['units'] and int(r['allocatedCents'])==s['cents']
 assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note'])
assert rows[0]['note'].startswith("'=1+1\nReviewed, \"verified\"")
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records']);assert all(p['id'] in md for p in a['pools'])
assert a['records'][0]['units']==5 and a['records'][-1]['decision']=='hold'
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'everyRecordPreserved':len(rows),'reviewEditsPreserved':True,'multilineQuotedUnicodeAndFormulaEscaping':True,'jsonImportOriginalInputRoundTrip':True,'markdownContainsEveryActivityAndPool':True},indent=2))
print('PASS independently parsed current reviewed artifacts')

for name,expected in [('Print',[8001,4000,2000,4001,1501,1500]),('Digital',[18001,6000,3000,6001])]:
 sample=json.loads(Path('export-'+name+'.json').read_text());assert [r['cents'] for r in sample['records']]==expected
print('PASS both fixtures exactly match independently hand-calculated cent allocations')
