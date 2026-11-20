import json,csv,io,math
from pathlib import Path
from fractions import Fraction
report=[]
for name in ['fixture0','fixture1','reviewed','held','undo','max','semantic-change','challenge']:
 d=json.loads(Path('export-'+name+'.json').read_text());assert d['total']==len(d['originalInput']['records'])==len(d['reviews']);assert d['approved']+d['held']==d['total'];assert [x['id'] for x in d['reviews']]==[x['id'] for x in d['originalInput']['records']]
 for q in d['plan']:
  rr=[r for r in d['reviews'] if r['decision']=='approve' and r['target']==q['id']];assert [r['id'] for r in rr]==q['recordIds']
  aa=sorted((r['value'],r['count']) for r in rr if r['period']=='reference');bb=sorted((r['value'],r['count']) for r in rr if r['period']=='current')
  if not aa or not bb:assert not q['complete'];continue
  # Independent quantile coupling, rational probability mass, not app's CDF-area algorithm.
  wa=sum(n for v,n in aa);wb=sum(n for v,n in bb);i=j=0;left=Fraction(aa[0][1],wa);right=Fraction(bb[0][1],wb);distance=0
  while i<len(aa) and j<len(bb):
   take=min(left,right);distance+=float(take)*abs(aa[i][0]-bb[j][0]);left-=take;right-=take
   if not left:
    i+=1
    if i<len(aa):left=Fraction(aa[i][1],wa)
   if not right:
    j+=1
    if j<len(bb):right=Fraction(bb[j][1],wb)
  assert math.isclose(distance,q['distance'],abs_tol=1e-10)
 p=Path('export-'+name+'.csv')
 if p.exists():
  rows=list(csv.DictReader(io.StringIO(p.read_text())));assert len(rows)==d['total']
  for i,row in enumerate(rows):
   r=d['reviews'][i];assert row['id']==r['id'];assert row['reviewed_queue']==r['target'];note=r['reviewNote'];assert row['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
 p=Path('export-'+name+'-segments.csv')
 if p.exists():
  rows=list(csv.DictReader(io.StringIO(p.read_text())));assert len(rows)==sum(len(q['segments']) for q in d['plan'])
  for q in d['plan']:assert math.isclose(sum(float(x['area_duration_units']) for x in rows if x['queue']==q['id']),q['distance'] or 0,abs_tol=1e-10)
 report.append({'artifact':name,'records':d['total'],'allRowsPreserved':True,'independentTransportDistanceMatches':True})
assert '\n"reviewed", with newline' in json.loads(Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote'];assert json.loads(Path('export-max.json').read_text())['reviews'][-1]['reviewNote']=='last note\nkept'
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independently parsed artifacts, rational quantile-transport oracle, edited multiline escaping, all originals')
