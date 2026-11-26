from pathlib import Path
from fractions import Fraction as F
import json,csv,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0;files=[]
for p in sorted(Path('.').glob(prefix+'export-*.json')):
 r=json.loads(p.read_text());files.append(p.name);assert r['format']=='shareline-desk-v1';assert len(r['rows'])==len(r['review'])==len(r['original']['records']);checks+=2
 for orig,review,row in zip(r['original']['records'],r['review'],r['rows']):
  for k in ['id','note','date','quantity','numerator','denominator']:assert row[k]==orig[k];checks+=1
  for k,j in [('date','reviewedDate'),('quantity','reviewedQuantity'),('numerator','reviewedNumerator'),('denominator','reviewedDenominator')]:assert row[j]==review[k];checks+=1
  assert row['reviewerNote']==review['reviewerNote'];checks+=1
 if r['summary']:
  s=r['summary'];f=lambda v:F(int(v['numerator']),int(v['denominator']));assert sum(w['days'] for w in s['intervals'])==s['days'];assert sum((f(w['weightedContribution']) for w in s['intervals']),F(0))==f(s['weightedShares']);assert F(r['original']['profitMinor'],100)/f(s['weightedShares'])==f(s['eps']);checks+=3
  for a,b in zip(s['intervals'],s['intervals'][1:]):assert a['toExclusive']==b['from'];checks+=1
 else:assert r['status']=='blocked';checks+=1
 csvpath=p.with_suffix('.csv')
 if csvpath.exists():
  rows=list(csv.DictReader(csvpath.open(newline='')));assert len(rows)==len(r['rows']);checks+=1
  for actual,wanted in zip(rows,r['rows']):
   for k,v in actual.items():
    expect=str(wanted[k]);expect="'"+expect if isinstance(wanted[k],str) and expect.startswith(('=','+','-','@','\t','\r')) else expect
    assert v==expect,(p,k,v,expect);checks+=1
 mdpath=p.with_suffix('.md')
 if mdpath.exists():
  md=mdpath.read_text();assert r['original']['title'] in md
  for row in r['rows']:assert json.dumps(row['reviewerNote'],ensure_ascii=False) in md;checks+=1
 worksheet=p.with_name(p.stem+'-worksheet.csv')
 if worksheet.exists():
  rows=list(csv.DictReader(worksheet.open(newline='')));assert len(rows)==len(r['summary']['intervals']);checks+=1
  for actual,wanted in zip(rows,r['summary']['intervals']):
   for k,v in actual.items():
    expect=str(wanted[k]) if not isinstance(wanted[k],dict) else wanted[k]['numerator']+'/'+wanted[k]['denominator'];assert v==expect;checks+=1
json.dump({'jsonArtifacts':len(files),'assertions':checks,'files':files,'oracle':'Python csv + json + Fraction on actual browser downloads'},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',prefix,len(files),checks)
