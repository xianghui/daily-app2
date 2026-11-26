from fractions import Fraction
from pathlib import Path
import random,json,subprocess
random.seed(271106)
def ceil(x):return -(-x.numerator//x.denominator)
def oracle(r,p):
 width=ceil(Fraction(r['widthMm']*10000,10000-p['widthShrinkBps']))
 raw=ceil(Fraction(width*p['endsPer100mm'],100));body=ceil(Fraction(raw,r['repeat']))*r['repeat'];ends=body+r['selvedgeEnds']
 length=ceil(Fraction(r['pieces']*r['lengthMm']*(10000+p['takeupBps']),10000-p['lengthShrinkBps']))+r['pieces']*2*r['fringeMm']+r['wasteMm']
 bbody=ceil(Fraction(ceil(Fraction(r['widthMm']*p['endsPer100mm'],100)),r['repeat']))*r['repeat'];bend=bbody+r['selvedgeEnds'];blen=r['pieces']*(r['lengthMm']+2*r['fringeMm'])+r['wasteMm']
 return dict(id=r['id'],profile=p['id'],loomWidthMm=width,rawBodyEnds=raw,bodyEnds=body,ends=ends,reedWidthMm=ceil(Fraction(ends*100,p['endsPer100mm'])),lengthPerEndMm=length,totalMm=ends*length,baselineEnds=bend,baselinePerEndMm=blen,baselineMm=bend*blen,allowanceMm=ends*length-bend*blen)
cases=[]
for i in range(300):
 profiles=[dict(id='p'+str(j),description='Synthetic yarn '+str(j),endsPer100mm=random.randint(1,200),widthShrinkBps=random.choice([0,5000,random.randint(0,5000)]),lengthShrinkBps=random.choice([0,5000,random.randint(0,5000)]),takeupBps=random.choice([0,5000,random.randint(0,5000)]),stockM=random.randint(0,1000000)) for j in range(random.randint(2,8))]
 records=[dict(id='r'+str(j),note='Synthetic handoff',widthMm=random.randint(1,3000),lengthMm=random.randint(1,20000),pieces=random.randint(1,100),fringeMm=random.randint(0,1000),repeat=random.randint(1,64),selvedgeEnds=random.randint(0,40),wasteMm=random.randint(0,3000)) for j in range(random.randint(1,12))]
 original=dict(title='Oracle '+str(i),loomWidthMm=random.randint(1,4000),maxEnds=random.randint(1,10000),profiles=profiles,records=records)
 review=[dict(r,profile=random.choice(profiles)['id'],decision=random.choice(['approve','approve','hold']),reviewerNote='') for r in records]
 cases.append(dict(original=original,review=review))
Path('oracle-cases.json').write_text(json.dumps(cases))
script="import fs from 'node:fs';import{calculate}from './src/core.js';fs.writeFileSync('oracle-results.json',JSON.stringify(JSON.parse(fs.readFileSync('oracle-cases.json')).map(x=>calculate(x.original,x.review))));"
subprocess.run(['node','--input-type=module','-e',script],check=True)
checks=0
for c,a in zip(cases,json.load(open('oracle-results.json'))):
 d=c['original']; rev=c['review']; assert a['review']==rev and a['original']==d;checks+=2
 ps=[]
 for r in rev:
  if r['decision']!='approve':continue
  p=next(p for p in d['profiles'] if p['id']==r['profile']);w=oracle(r,p);w.update(widthOk=w['reedWidthMm']<=d['loomWidthMm'],endsOk=w['ends']<=d['maxEnds']);ps.append(w)
  assert w['bodyEnds']%r['repeat']==0;assert w['bodyEnds']>=w['rawBodyEnds'];assert w['totalMm']>=w['baselineMm'];checks+=3
 assert a['plans']==ps;checks+=1
 stocks=[]
 for p in d['profiles']:
  group=[w for w in ps if w['profile']==p['id']];total=sum(w['totalMm'] for w in group);baseline=sum(w['baselineMm'] for w in group);stock=p['stockM']*1000
  stocks.append(dict(profile=p['id'],stockMm=stock,requiredMm=total,baselineMm=baseline,shortfallMm=max(0,total-stock),baselineShortfallMm=max(0,baseline-stock)))
 assert a['stock']==stocks;checks+=1
 summary=dict(approved=len(ps),held=len(rev)-len(ps),totalMm=sum(w['totalMm'] for w in ps),baselineMm=sum(w['baselineMm'] for w in ps),shortfallMm=sum(s['shortfallMm'] for s in stocks),baselineShortfallMm=sum(s['baselineShortfallMm'] for s in stocks))
 feasible=all(w['widthOk'] and w['endsOk'] for w in ps) and all(s['shortfallMm']==0 for s in stocks);complete=summary['held']==0
 assert a['summary']==summary;assert a['complete']==complete;assert a['feasible']==feasible;assert a['releaseReady']==(complete and bool(ps) and feasible);checks+=4
Path('independent-validation.json').write_text(json.dumps(dict(cases=len(cases),assertions=checks,method='Independent Python Fraction ceilings, dimensions, motif multiples, shared-stock totals, baseline and release gates',passed=True),indent=2));print('PASS independent fraction oracle',len(cases),checks)
