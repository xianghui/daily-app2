import csv,json,io
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rows)==len(r['records'])
for out,rec in zip(rows,r['records']):
 assert out['id']==rec['id'] and out['policy']==rec['policy'] and int(out['watts'])==rec['watts']
 assert out['note']==("'"+rec['note'] if rec['note'].startswith(('=','+','-','@','\t','\r')) else rec['note'])
 assert int(out['currentWattMinutes'])==rec['energy']['currentWm']
m=json.loads(Path('export-max.json').read_text());mr=list(csv.DictReader(io.StringIO(Path('export-max.csv').read_text())));assert len(mr)==len(m['records'])==24
for row,rec in zip(mr,m['records']):assert row['id']==rec['id'] and int(row['savedWattMinutes'])==rec['energy']['savedWm']
a=json.loads(Path('export-roundtrip.json').read_text());assert a['originalInput']==m['originalInput'] and a['metrics']==m['metrics']
Path('artifact-validation.json').write_text(json.dumps({'csvIndependentParserRows':len(rows),'multilineQuoteFormulaEscaping':True,'maxRows':24,'jsonOriginalsRoundtrip':True,'reviewedWattagePreserved':rows[0]['watts']},indent=2));print('PASS independent CSV/JSON artifacts')
for name in ['office','room','reviewed','held','max','roundtrip']:
 a=json.loads(Path('export-'+name+'.json').read_text());m=a['metrics'];approved=[r for r in a['records'] if r['decision']=='approve']
 current=sum(r['watts']*r['units']*r['minutes']*a['settings']['days'] for r in approved)
 proposed=sum(r['watts']*r['units']*r['planned']*a['settings']['days'] for r in approved)
 assert (current,proposed,current-proposed)==(m['currentWm'],m['plannedWm'],m['savedWm'])
 assert m['currentCostCents']==current*a['settings']['tariff']/60000
 assert m['plannedCostCents']==proposed*a['settings']['tariff']/60000
 assert a['priorities']==[r['id'] for r in sorted(approved,key=lambda r:-r['energy']['savedWm'])]
 assert m['aiReviewAgreement']==sum(r['policy']==r['proposed'] for r in approved)
 assert m['firstProfileAgreement']==sum(r['policy']==a['originalInput']['policies'][0]['id'] for r in approved)
print('PASS independent energy/cost/priority/agreement calculations across six artifacts')
