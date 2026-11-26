import csv,json,sys,io
from pathlib import Path
from fractions import Fraction as F
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;count=0
ceil=lambda x:-(-x.numerator//x.denominator)
def eq(a,b):
 global checks
 assert a==b,(a,b);checks+=1
for path in sorted(Path('.').glob(prefix+'*.json')):
 a=json.loads(path.read_text())
 if not isinstance(a,dict) or a.get('schema')!='warpwise-v1':continue
 count+=1;d=a['original'];review=a['review'];eq([r['id'] for r in review],[r['id'] for r in d['records']]);eq(len(a['plans']),sum(r['decision']=='approve' for r in review));eq(len(a['stock']),len(d['profiles']))
 for w in a['plans']:
  r=next(r for r in review if r['id']==w['id']);p=next(p for p in d['profiles'] if p['id']==r['profile'])
  width=ceil(F(r['widthMm']*10000,10000-p['widthShrinkBps']));raw=ceil(F(width*p['endsPer100mm'],100));body=ceil(F(raw,r['repeat']))*r['repeat'];ends=body+r['selvedgeEnds'];length=ceil(F(r['pieces']*r['lengthMm']*(10000+p['takeupBps']),10000-p['lengthShrinkBps']))+2*r['pieces']*r['fringeMm']+r['wasteMm']
  for key,value in dict(loomWidthMm=width,bodyEnds=body,ends=ends,lengthPerEndMm=length,totalMm=ends*length,reedWidthMm=ceil(F(ends*100,p['endsPer100mm']))).items():eq(w[key],value)
  eq(w['bodyEnds']%r['repeat'],0);eq(w['widthOk'],w['reedWidthMm']<=d['loomWidthMm']);eq(w['endsOk'],w['ends']<=d['maxEnds']);assert w['totalMm']>=w['baselineMm'];checks+=1
 for s in a['stock']:
  eq(s['requiredMm'],sum(w['totalMm'] for w in a['plans'] if w['profile']==s['profile']));eq(s['shortfallMm'],max(0,s['requiredMm']-s['stockMm']))
 eq(a['summary']['totalMm'],sum(w['totalMm'] for w in a['plans']));eq(a['summary']['baselineMm'],sum(w['baselineMm'] for w in a['plans']));eq(a['summary']['shortfallMm'],sum(s['shortfallMm'] for s in a['stock']));eq(a['releaseReady'],a['complete'] and bool(a['plans']) and a['feasible'])
 stem=str(path)[:-5]
 audit=Path(stem+'.audit.csv')
 if audit.exists():
  rows=list(csv.DictReader(io.StringIO(audit.open(newline='').read())));eq(len(rows),len(review))
  for row,r,orig in zip(rows,review,d['records']):
   for k,v in {'id':r['id'],'original_note':orig['note'],'reviewed_profile':r['profile'],'decision':r['decision'],'reviewer_note':r['reviewerNote'],**{k:r[k] for k in ['widthMm','lengthMm','pieces','fringeMm','repeat','selvedgeEnds','wasteMm']}}.items():
    expected=str(v)
    if isinstance(v,str) and v.startswith(('=','+','-','@','\t','\r')):expected="'"+v
    eq(row[k],expected)
 warp=Path(stem+'.warp.csv')
 if warp.exists():
  assert a['releaseReady'];checks+=1;rows=list(csv.DictReader(warp.open(newline='')));eq(len(rows),len(review));eq([r['project_id'] for r in rows],[w['id'] for w in a['plans']])
  for row,w in zip(rows,a['plans']):
   for k,field in dict(allowance_width_mm='loomWidthMm',reed_width_mm='reedWidthMm',body_ends='bodyEnds',total_ends='ends',length_per_end_mm='lengthPerEndMm',total_warp_mm='totalMm',unadjusted_baseline_mm='baselineMm').items():eq(int(row[k]),w[field])
   note=next(r['reviewerNote'] for r in review if r['id']==w['id']);eq(row['reviewer_note'],("'" if note.startswith(('=','+','-','@','\t','\r')) else '')+note)
 md=Path(stem+'.md')
 if md.exists():
  s=md.read_text();assert ('REVIEWED WARP WORKSHEET' if a['releaseReady'] else 'DRAFT / NOT RELEASED') in s;checks+=1
  for r,o in zip(review,d['records']):
   assert json.dumps(o['note'],ensure_ascii=False)[1:-1] in s;checks+=1
   if r['reviewerNote']:assert r['reviewerNote'] in s;checks+=1
 eq(json.loads(json.dumps(a)),a)
assert count>=14,count
result=dict(auditArtifacts=count,assertions=checks,passed=True,parsers='Python json/csv + independent Fraction replay',prefix=prefix)
Path(prefix+'artifact-validation.json').write_text(json.dumps(result,indent=2));print('PASS actual artifact parses',count,checks)
