import json,csv,io,sys,math
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
for p in Path('.').glob(prefix+'*.json'):
 r=json.loads(p.read_text())
 if not isinstance(r,dict) or r.get('schema')!='compost-v1':continue
 assert len(r['review'])==len(r['original']['records']);checks+=1
 for old,v in zip(r['original']['records'],r['review']):assert old['id']==v['id'] and old['note']==v['note'];checks+=1
 active=[v for v in r['review'] if v['decision']=='approve'];assert len(r['worksheet'])==len(active);checks+=1
 c=n=wet=water=0
 for v,w in zip(active,r['worksheet']):
  profile=next(p for p in r['original']['profiles'] if p['id']==v['profile'])
  dry=v['wetKg']*(1-v['moisture']);assert math.isclose(w['dryKg'],dry,abs_tol=1e-9);checks+=1
  wet+=v['wetKg'];water+=v['wetKg']*v['moisture'];c+=dry*profile['carbonDry'];n+=dry*profile['nitrogenDry']
 for k,val in [('wetKg',wet),('waterKg',water),('carbonKg',c),('nitrogenKg',n)]:assert math.isclose(r['base'][k],val,abs_tol=1e-8);checks+=1
 if r['recipe']['feasible']:
  for added,ref in zip(r['recipe']['additions'],r['original']['amendments']):
   assert -1e-8<=added['kg']<=ref['maxKg']+1e-8;checks+=1
   wet+=added['kg'];water+=added['kg']*ref['moisture'];dry=added['kg']*(1-ref['moisture']);c+=dry*ref['carbonDry'];n+=dry*ref['nitrogenDry']
  for k,val in [('wetKg',wet),('waterKg',water),('carbonKg',c),('nitrogenKg',n)]:assert math.isclose(r['recipe']['total'][k],val,abs_tol=1e-8);checks+=1
  x=r['original'];assert x['minCN']-1e-6<=c/n<=x['maxCN']+1e-6;assert x['minMoisture']-1e-8<=water/wet<=x['maxMoisture']+1e-8;checks+=2
 stem=str(p)[:-5]
 cp=Path(stem+'.audit.csv')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.read_text())));assert len(rows)==len(r['review']);checks+=1
  for row,v,old in zip(rows,r['review'],r['original']['records']):
   for k in ['id','profile','decision','reviewerNote']:
    val=str(v[k]);expected="'"+val if val.startswith(('=','+','-','@','\t','\r')) else val;assert row[k]==expected;(checks:=checks+1)
   assert row['originalNote']==old['note'];assert float(row['wetKg'])==v['wetKg'];assert float(row['moisture'])==v['moisture'];checks+=3
 rp=Path(stem+'.recipe.csv')
 if rp.exists():
  rows=list(csv.DictReader(io.StringIO(rp.read_text())));assert len(rows)==len(r['worksheet'])+2;checks+=1
  for key in ['wetKg','waterKg','dryKg','carbonKg','nitrogenKg']:assert math.isclose(sum(float(row[key]) for row in rows),r['recipe']['total'][key],abs_tol=1e-8);checks+=1
 mp=Path(stem+'.md')
 if mp.exists():
  md=mp.read_text()
  for v in r['review']:assert v['reviewerNote'] in md and v['note'] in md;checks+=2
# Every reviewer edit changes the applied numbers; undo returns original complete state.
original=json.load(open(prefix+'fixture1.json'))
for name in ['wetKg-0','moisture-0','profile-0']:
 edited=json.load(open(prefix+name+'.json'));undo=json.load(open(prefix+name+'-undo.json'))
 assert edited['base']!=original['base'];assert undo['base']==original['base'];checks+=2
json.dump(dict(assertions=checks,parser='Python json/csv; independently recomputed wet/dry/carbon/nitrogen balances and constraint bands',allPassed=True),open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independent artifact parsing',checks)
