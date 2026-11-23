import csv,json,pathlib,sys,re
from fractions import Fraction
prefix=sys.argv[1] if len(sys.argv)>1 else ''
checks=[]
for label in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(pathlib.Path(prefix+'export-'+label+'.json').read_text());rows=list(csv.DictReader(pathlib.Path(prefix+'export-'+label+'.csv').open(newline='')))
 assert len(rows)==len(r['originalInput']['records'])==len(r['reviews'])==r['metrics']['records']
 def esc(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for i,(row,c) in enumerate(zip(rows,r['checks'])):
  assert row['id']==esc(c['id']);assert row['review_note']==esc(r['reviews'][i]['note']);assert row['original_label']==esc(r['originalInput']['records'][i]['value'])
  assert row['reviewed_label']==esc(r['reviews'][i]['value'])
  if c['status']=='ready':
   h,m,s,f=map(int,re.split('[:;]',c['value']));rate={'film24':24,'pal25':25,'video30':30,'ntscDF':30}[c['system']]
   # Independent count: enumerate each skipped minute rather than use the app's closed formula.
   omitted=sum(2 for minute in range(1,h*60+m+1) if minute%10) if c['system']=='ntscDF' else 0
   frames=((h*60+m)*60+s)*rate+f-omitted
   assert frames==c['frames']==int(row['frame_offset']);assert c['nominal']-frames==omitted
   seconds=Fraction(frames*1001,30000) if c['system']=='ntscDF' else Fraction(frames,rate)
   assert Fraction(c['secondsNumerator'],c['secondsDenominator'])==seconds
   assert abs(c['elapsedSeconds']-float(seconds))<1e-8
 release=list(csv.DictReader(pathlib.Path(prefix+'export-'+label+'.release.csv').open(newline='')))
 assert len(release)==r['metrics']['ready'];assert all(row['status']=='ready' and row['decision']=='approve' for row in release)
 if label=='reviewed':assert rows[0]['review_note']=='\'=SUM(1,2)\nReviewed "source", exactly.';assert r['checks'][0]['frames']==108030
 checks.append({'label':label,'records':len(rows),'release':len(release),'independentMinuteEnumerationAndRationalOracle':True,'csvParsed':True})
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent artifacts',len(checks))
