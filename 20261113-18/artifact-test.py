import json,csv,io
from pathlib import Path
checked=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.load(open('export-'+name+'.json'));rows=list(csv.DictReader(open('export-'+name+'.csv',newline='')));assert len(rows)==r['total'];assert len(r['originalInput']['records'])==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for source,review,out in zip(r['originalInput']['records'],r['reviews'],rows):
  assert out['source']==source['note'];assert int(out['original_quantity100'])==source['quantity100'];assert int(out['reviewed_quantity100'])==review['quantity100'];assert out['component']==review['kind'];assert int(out['current_coefficient_milli'])==review['coefficientMilli'];assert int(out['scenario_coefficient_milli'])==review['upgradeMilli'];
  for k,field in [('owner','owner'),('review_note','reviewNote')]:
   expect=review[field];expect=("'"+expect) if expect.startswith(('=','+','-','@','\t','\r')) else expect
   assert out[k]==expect,(out[k],expect)
  assert out['unit']==next(p['unit'] for p in r['originalInput']['policies'] if p['id']==review['kind'])
 if r['plan']:
  assert abs(sum(float(x['current_watts']) for x in rows)-r['plan']['currentWatts'])<1e-8
  assert abs(sum(float(x['scenario_watts']) for x in rows)-r['plan']['scenarioWatts'])<1e-8
 checked.append({'name':name,'records':len(rows)})
r=json.load(open('export-reviewed.json'));md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify ΔT';assert r['reviews'][0]['owner']=='=Owner\n"second", line';assert r['reviews'][0]['reviewNote'] in md;assert r['reviews'][0]['owner'] in md
for name in ['held','all-held','challenge']:
 r=json.load(open('export-'+name+'.json'));assert r['plan'] is None;assert len(r['reviews'])==r['total'];assert r['blocked']
json.dump({'independentlyParsedCSVAndJSON':checked,'multilineFormulaEscaping':True,'completeMarkdown':True,'heldRecordsPreserved':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent CSV/JSON/Markdown reviewed records, units, multiline escaping and conservation')
