import json,csv,glob,math
from decimal import Decimal as D
checks=0
for path in glob.glob('*-fixture*.json')+glob.glob('*-reviewed.json')+glob.glob('*-hold.json')+glob.glob('*-max.json')+glob.glob('*-blocked.json')+glob.glob('*-corrected-challenge.json'):
 s=json.load(open(path)); src=s['source']; rows=s['review']; out=s['result']; assert len(rows)==len(src['records']); checks+=1
 allplans=[]; failed=0; unplanned=0; total=0; pieces=0
 for r in rows:
  if r['decision']!='approve':continue
  opts=[];base=[]
  for e in src['envelopes']:
   for rate in src['rates']:
    paper=D(str(r['widthMm']))*D(str(r['heightMm']))*D(str(r['gsm']))*r['sheets']/D(1000000)
    stack=D(str(r['caliperMm']))*r['sheets']; mass=paper+D(str(e['tareG']));thick=stack+D(str(e['wallMm']))
    fits=((r['widthMm']<=e['insideWidth'] and r['heightMm']<=e['insideHeight']) or (r['heightMm']<=e['insideWidth'] and r['widthMm']<=e['insideHeight'])) and stack<=D(str(e['capacityMm'])) and max(e['outsideWidth'],e['outsideHeight'])<=rate['maxLong'] and min(e['outsideWidth'],e['outsideHeight'])<=rate['maxShort']
    key=(e['priceCents']+rate['priceCents'],e['id'],rate['id']);checks+=1
    actual=fits and mass<=D(str(rate['maxGrams'])) and thick<=D(str(rate['maxThickness']))
    if actual:opts.append((key,float(mass),float(thick)))
    if fits and paper<=D(str(rate['maxGrams'])) and stack<=D(str(rate['maxThickness'])):base.append((key,actual))
  opts.sort();base.sort();p=next(x for x in out['items'] if x['id']==r['id']);pieces+=r['quantity']
  if base and not base[0][1]:failed+=1
  if not base:unplanned+=1
  if opts:
   key,mass,thick=opts[0]; q=p['chosen'];assert (q['unitCents'],q['envelopeId'],q['rateId'])==key;assert math.isclose(q['totalG'],mass,abs_tol=1e-9);assert math.isclose(q['thicknessMm'],thick,abs_tol=1e-9);assert q['batchCents']==key[0]*r['quantity'];total+=q['batchCents'];checks+=5
  else:assert p['chosen'] is None;checks+=1
 assert out['totalCents']==total and out['pieces']==pieces and out['baselineFailedJobs']==failed and out['baselineUnplanned']==unplanned;checks+=4
 stem=path[:-5]
 if glob.glob(stem+'.csv'):
  audit=list(csv.DictReader(open(stem+'.csv',newline='')));assert len(audit)==len(rows)
  for i,(r,a) in enumerate(zip(rows,audit)):
   assert a['id']==r['id'] and a['kit']==r['kitId'] and a['decision']==r['decision']; assert a['sourceNote']==src['records'][i]['note']; assert a['reviewerNote']==("'" if r['reviewerNote'][:1] in '=+-@\t\r\n' and r['reviewerNote'] else '')+r['reviewerNote']; checks+=3
 if glob.glob(stem+'.worksheet.csv'):
  ws=list(csv.DictReader(open(stem+'.worksheet.csv',newline='')));assert len(ws)==out['approved'];assert sum(int(x['batchCents']) for x in ws)==total;assert sum(int(x['quantity']) for x in ws)==pieces;checks+=3
print('PASS independent Decimal arithmetic, exhaustive pair costs, metrics, CSV round trips',checks)
json.dump({'assertions':checks,'result':'pass','method':'Independent Python Decimal evaluation of every offered pair and standard csv parser'},open('artifact-validation.json','w'),indent=2)
