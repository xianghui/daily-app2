import json,csv,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
def ck(x):
 global checks
 assert x
 checks+=1
def close(a,b):ck(math.isclose(a,b,rel_tol=1e-10,abs_tol=1e-10))
for name in ['fixture0','fixture1','reviewed','hold','max','blocked','undo']:
 s=json.loads(Path(prefix+name+'.json').read_text());d=s['source']
 ck(len(s['review'])==len(d['records'])==len(s['results']))
 baseline=miss=0
 for r,v,original in zip(s['review'],s['results'],d['records']):
  ck(r['id']==v['id']==original['id']);valid=[];allpairs=[]
  for R in d['resistors']:
   for C in d['capacitors']:
    tau=R['ohm']*C['nf']/1e9;fc=1/(math.tau*tau)
    loss=20*math.log10(math.hypot(1,r['passHz']/fc));reject=20*math.log10(math.hypot(1,r['rejectHz']/fc));settle=-math.log(.01)*tau*1000
    allpairs.append((abs(math.log(fc/r['passHz'])),R['id']+' / '+C['id'],loss,reject,settle,R['ohm']))
    if loss<=r['maxLossDb']+1e-9 and reject>=r['minRejectDb']-1e-9 and settle<=r['settleMs']+1e-9 and R['ohm']<=r['maxOhm']:valid.append((R['ohm'],C['nf'],R['id']+' / '+C['id'],fc,loss,reject,settle))
  ck(bool(valid)==v['ready'])
  if valid:
   best=sorted(valid,key=lambda x:(-x[0],x[1],x[2]))[0];e=v['choice'];ck(e['id']==best[2]);close(e['cutoffHz'],best[3]);close(e['lossDb'],best[4]);close(e['rejectDb'],best[5]);close(e['settleMs'],best[6]);ck(not e['violations'])
  base=sorted(allpairs)[0];ck(v['baseline']['id']==base[1]);baseMiss=base[2]>r['maxLossDb']+1e-9 or base[3]<r['minRejectDb']-1e-9 or base[4]>r['settleMs']+1e-9 or base[5]>r['maxOhm'];ck(bool(v['baseline']['violations'])==baseMiss)
  if v['included']:
   baseline+=baseMiss;miss+=not v['ready']
 ck(s['summary']['baselineMisses']==baseline);ck(s['summary']['correctedMisses']==miss)
 f=Path(prefix+name+'.csv')
 if f.exists():
  rows=list(csv.DictReader(f.open(newline='')));ck(len(rows)==len(s['review']))
  for r,rr in zip(s['review'],rows):
   ck(rr['id']==r['id']);ck(rr['profileId']==r['setupId']);note=r['reviewerNote'];ck(rr['reviewerNote']==("'"+note if note[:1] in '=+-@\t\r' and note else note))
 f=Path(prefix+name+'.worksheet.csv')
 if f.exists():
  rows=list(csv.DictReader(f.open(newline='')));ck(len(rows)==s['summary']['approved']);ck([r['id'] for r in rows]==[r['id'] for r in s['review'] if r['decision']=='approve'])
 if name=='reviewed':ck(s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "geometry", approved');ck(s['review'][0]['reviewerNote'] in Path(prefix+name+'.md').read_text())
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentAssertions':checks,'checks':'Python math RC replay, exhaustive catalog optimum, record conservation, computed baseline, independent CSV parse, multiline formula escaping and approved-only worksheet'},indent=2));print('PASS',checks,'independent assertions')
