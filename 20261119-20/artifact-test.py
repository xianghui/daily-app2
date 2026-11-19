from pathlib import Path
import csv,json,math
report=[]
for f in ['fixture0','fixture1','reviewed','held','undo','chain','outside','length','max','challenge']:
 r=json.loads(Path('export-'+f+'.json').read_text());assert len(r['reviews'])==len(r['originalInput']['logs']);assert r['total']==r['approved']+r['held'];assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['logs']]
 cf=Path('export-'+f+'.csv')
 if cf.exists():
  rows=list(csv.DictReader(cf.open(newline='')));assert len(rows)==r['total']
  for i,(row,rev) in enumerate(zip(rows,r['reviews'])):
   assert row['id']==rev['id'];assert row['original_from']==r['originalInput']['logs'][i]['fromText'];assert float(row['reviewed_rise_mm'])==rev['riseMm'];note=rev['reviewNote'];assert row['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
   if r['status']=='ready':assert math.isclose(float(row['adjusted_end_mm']),r['plan'][i]['adjustedEndMm'],abs_tol=1e-8)
   else:assert row['adjusted_end_mm']==''
 if r['status']=='ready':
  assert len(r['plan'])==r['total'];assert abs(sum(x['correctionMm'] for x in r['plan'])+r['summary']['closureMm'])<1e-8;assert abs(r['plan'][-1]['adjustedEndMm']-r['originalInput']['elevationMm'])<1e-8
 else:assert r['plan']==[]
 report.append({'artifact':f,'records':r['total'],'status':r['status'],'jsonParsed':True,'csvParsed':cf.exists()})
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent JSON/CSV parsing:',len(report),'audit sets')
