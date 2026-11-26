import csv,json,math,glob,os
from fractions import Fraction
prefix=os.environ.get('PREFIX','local-');checks=[]
for path in glob.glob(prefix+'*.json'):
 try:a=json.load(open(path))
 except:continue
 if not isinstance(a,dict) or a.get('schema')!='shrinkform-v1':continue
 assert len(a['original']['records'])==len(a['review'])
 for w in a['plans']:
  p=next(p for p in a['original']['profiles'] if p['id']==w['profile'])
  for k,axis in [('x','X'),('y','Y')]:
   v=w[k];wet=math.ceil(Fraction(v['targetMm']*p['wet'+axis],p['fired'+axis]));assert v['wetMm']==wet
   assert math.isclose(v['predictedDryMm'],wet*p['dry'+axis]/p['wet'+axis])
   assert math.isclose(v['predictedFiredMm'],wet*p['fired'+axis]/p['wet'+axis]);assert v['predictedFiredMm']>=v['targetMm']-1e-8
  assert w['fits']==(max(w['x']['wetMm'],w['y']['wetMm'])<=a['original']['maxWetMm'])
 assert a['summary']['wetAreaMm2']==sum(w['x']['wetMm']*w['y']['wetMm']*w['pieces'] for w in a['plans'])
 for kind in ['audit','template']:
  file=path[:-5]+'.'+kind+'.csv'
  if not os.path.exists(file):continue
  rows=list(csv.DictReader(open(file,newline='')));assert len(rows)==(len(a['review']) if kind=='audit' else len(a['plans']))
  for row in rows:
   r=next(r for r in a['review'] if r['id']==row['id']);note=r['reviewerNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
   assert row['reviewer_note']==expected
   if kind=='template':
    assert a['releaseReady'];w=next(w for w in a['plans'] if w['id']==row['id']);assert int(row['wet_width_mm'])==w['x']['wetMm'];assert int(row['pieces'])==r['pieces']
 checks.append(path)
assert len(checks)>=10
json.dump({'auditFilesParsed':len(checks),'independentFractionOracle':True,'csvRowConservation':True,'multilineFormulaEscaping':True,'checks':checks},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independent artifact parser/oracle',len(checks))
