import csv,json,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
count=0
for name in ['fixture0','fixture1','reviewed','held','max']:
 a=json.loads(Path(prefix+name+'.json').read_text());assert len(a['original']['records'])==len(a['review']);count+=1
 assert [r['id'] for r in a['original']['records']]==[r['id'] for r in a['review']];count+=1
 audit=list(csv.DictReader(open(prefix+name+'.audit.csv',newline='')));field=list(csv.DictReader(open(prefix+name+'.field.csv',newline='')))
 assert len(audit)==len(a['review']);assert len(field)==len(a['trace']);count+=2
 for i,r in enumerate(a['review']):
  def escaped(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  assert audit[i]['shot_id']==escaped(r['id']);assert audit[i]['source_note']==escaped(a['original']['records'][i]['note']);count+=2
  for key in ['meterSeconds','ndStops','exponent','thresholdSeconds']:assert float(audit[i][key])==r[key];count+=1
  assert audit[i]['reviewerNote']==escaped(r['reviewerNote']);assert audit[i]['decision']==r['decision'];count+=2
  if r['decision']=='hold':assert all(t['id']!=r['id'] for t in a['trace']);count+=1;continue
  t=next(t for t in a['trace'] if t['id']==r['id']);f=next(t for t in field if t['id']==escaped(r['id']))
  linear=r['meterSeconds']*2**r['ndStops'];corrected=linear if linear<=r['thresholdSeconds'] else r['thresholdSeconds']*(linear/r['thresholdSeconds'])**r['exponent']
  assert math.isclose(t['linearSeconds'],linear,rel_tol=1e-12);assert math.isclose(t['correctedSeconds'],corrected,rel_tol=1e-12);assert t['fieldSeconds']==math.ceil(corrected);assert t['withinLimit']==(math.ceil(corrected)<=a['original']['maxSeconds']);count+=4
  for k in ['linearSeconds','correctedSeconds','fieldSeconds','extraSeconds']:assert math.isclose(float(f[k]),t[k],rel_tol=1e-12,abs_tol=1e-10);count+=1
 assert a['summary']['held']+a['summary']['approved']==a['summary']['shots'];count+=1
 assert a['summary']['overLimit']==sum(not t['withinLimit'] for t in a['trace']);count+=1
 assert a['summary']['reciprocityChanges']==sum(t['extraSeconds']>1e-9 for t in a['trace']);count+=1
 assert a['summary']['totalFieldSeconds']==sum(t['fieldSeconds'] for t in a['trace']);count+=1
 md=Path(prefix+name+'.md').read_text();assert all(r['id'] in md and r['reviewerNote'] in md for r in a['review']);count+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonCSVJSONMarkdownChecks':count,'cases':5,'noLostShots':True,'formulaEscaping':True,'multilineReviewPreserved':True},indent=2));print('PASS independent artifact assertions',count)
