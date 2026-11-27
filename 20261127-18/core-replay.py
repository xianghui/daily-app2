import json,math
from fractions import Fraction as F
checks=0
for c in json.load(open('core-cases.json')):
 r,o,j=c['r'],c['outputRate'],c['result'];tb=r['bars']*r['beatsPerBar'];reps=F(tb,r['beats']);target=F(60*tb,r['targetBpm']);src=F(r['frames'],r['rate']);ratio=target/(src*reps);frames=math.floor(target*o+F(1,2));valid=reps.denominator==1 and 1<=reps<=32;pitch=-12*math.log2(float(ratio));status='beat-mismatch' if not valid else 'ratio-limit' if not F(1,2)<=ratio<=2 else 'pitch-limit' if r['mode']=='varispeed' and abs(pitch)>r['maxPitch']+1e-12 else 'ready'
 assert j['status']==status,(r,j,status)
 assert j['targetFrames']==frames
 assert abs(j['ratio']-float(ratio))<1e-10
 assert abs(j['roundingMs'])<=500/o+1e-9
 assert abs(j['pitchSemitones']-(pitch if r['mode']=='varispeed' else 0))<1e-10
 assert abs(j['sourceBpm']-float(F(60*r['beats'])/src))<1e-8
 if valid:assert abs(j['baselineDriftMs']-float((src*reps-target)*1000))<1e-6
 else:assert j['baselineDriftMs'] is None
 checks+=7
json.dump({'cases':603,'independentAssertions':checks,'method':'Python Fraction duration/repetition/frame rounding and independent logarithmic pitch replay'},open('core-replay.json','w'),indent=2)
print('PASS independent',checks)
