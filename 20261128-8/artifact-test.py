import json,csv,sys,math
from fractions import Fraction as F
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'; assertions=0
for name in ['fixture0','fixture1','reviewed','max']:
 s=json.load(open(prefix+name+'.json'));rows=list(csv.DictReader(open(prefix+name+'.csv',newline='')))
 assert len(rows)==len(s['source']['records'])==len(s['review'])==len(s['jobs']);assertions+=1
 if name!='max':
  setup=list(csv.DictReader(open(prefix+name+'.setup.csv',newline='')));assert len(setup)==len(rows);assertions+=1
 for j,r,original in zip(s['jobs'],rows,s['source']['records']):
  assert j['id']==r['id']==original['id'];assertions+=1
  assert r['originalNote']==original['note'];assertions+=1
  note=j['reviewerNote'];assert r['reviewerNote']==("'"+note if note and note[0] in '=+-@\t\r' else note);assertions+=1
  for key in ['bandMaxHz','spacingMaxHz','maxWindowMs','channels','bytesPerSample','bufferCapBytes','baselineRateHz','baselineN']:
   assert float(r[key])==j[key];assertions+=1
  feasible=[]
  for fs in s['source']['hardware']['rates']:
   for n in s['source']['hardware']['sizes']:
    byte=n*j['channels']*j['bytesPerSample'];time=F(1000*n,fs);spacing=F(fs,n)
    if fs>=F(str(s['source']['hardware']['guardFactor']))*j['bandMaxHz'] and spacing<=F(str(j['spacingMaxHz'])) and time<=j['maxWindowMs'] and byte<=j['bufferCapBytes']:feasible.append((byte,time,fs,n))
  feasible.sort();assert feasible;assertions+=1
  chosen=j['chosen'];assert (chosen['bufferBytes'],F(1000*chosen['n'],chosen['rate']),chosen['rate'],chosen['n'])==feasible[0];assertions+=1
  for k in ['spacingHz','windowMs','bufferBytes']:assert float(r[k])==chosen[k];assertions+=1
  assert math.isclose(chosen['spacingHz'],chosen['rate']/chosen['n']);assertions+=1
 assert s['summary']['baselineViolations']==sum(not j['baseline']['feasible'] for j in s['jobs']);assertions+=1
 assert s['summary']['reviewedViolations']==sum(not j['ready'] for j in s['jobs']);assertions+=1
 assert s['summary']['chosenBufferBytes']==sum(j['chosen']['bufferBytes'] for j in s['jobs']);assertions+=1
s=json.load(open(prefix+'reviewed.json'));assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "window", approved';assertions+=1
assert '=SUM(1,2)\nCheck "window", approved' in open(prefix+'reviewed.md').read();assertions+=1
b=json.load(open(prefix+'base.json'));u=json.load(open(prefix+'undo.json'));assert b==u;assertions+=1
j=json.load(open(prefix+'infeasible.json'));assert not j['summary']['planReady'] and not j['jobs'][0]['ready'];assertions+=1
j=json.load(open(prefix+'relink.json'));assert j['review'][0]['profileId']=='VOICE' and j['jobs'][0]['bandMaxHz']==4000;assertions+=1
json.dump({'artifacts':['fixture0','fixture1','reviewed','max','undo','infeasible','relink'],'assertions':assertions,'method':'Python csv + JSON parser and exact Fraction enumeration of downloaded artifacts'},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independently parsed artifacts',assertions)
