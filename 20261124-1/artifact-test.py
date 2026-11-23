from pathlib import Path
from decimal import Decimal
import json,csv,os,re
prefix=os.environ.get('PREFIX','');checks=0
for stem in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(Path(prefix+'export-'+stem+'.json').read_text());table=list(csv.DictReader(Path(prefix+'export-'+stem+'.csv').open(newline='')));manifest=json.loads(Path(prefix+'export-'+stem+'.manifest.json').read_text());md=Path(prefix+'export-'+stem+'.md').read_text()
 assert len(table)==len(r['checks'])==r['metrics']['records'];checks+=1
 assert len(manifest)==r['metrics']['ready'];checks+=1
 ready=[];total=0
 for i,(row,c) in enumerate(zip(table,r['checks'])):
  rr=r['reviews'][i];orig=r['originalInput']['records'][i]
  def escaped(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  assert row['id']==escaped(c['id']);assert row['source_context']==escaped(orig['context']);assert row['original_duration']==escaped(orig['raw']);assert row['reviewed_duration']==escaped(rr['raw']);assert row['review_note']==escaped(rr['note']);assert row['status']==c['status'];checks+=6
  if c['status']=='ready':
   ms=c['milliseconds'];assert Decimal(c['seconds'])*1000==ms;assert sum(p['milliseconds'] for p in c['parts'])==ms
   m=re.fullmatch(r'PT(\d+(?:\.\d{1,3})?)S',c['canonical']);assert m and Decimal(m[1])*1000==ms
   assert row['seconds']==c['seconds'];assert int(row['milliseconds'])==ms
   ready.append({'id':c['id'],'seconds':c['seconds'],'milliseconds':ms,'isoDuration':c['canonical']});total+=ms;checks+=5
 assert ready==manifest;assert Decimal(r['metrics']['totalSeconds'])*1000==total;assert len(md.split('   Source: '))-1==len(table);checks+=3
 # Original inputs survive the JSON audit envelope independently.
 assert all(c['id']==orig['id'] for c,orig in zip(r['checks'],r['originalInput']['records']));checks+=1
 if stem=='reviewed':assert table[0]['review_note']=="'=SUM(1,2)\nReviewed \"source\", exactly.";assert manifest[0]['seconds']=='123.5';checks+=2
 if stem=='max':assert len(table)==24 and all('\nnext' in row['id'] for row in table);checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonChecks':checks,'csvParser':'Python csv.DictReader','exactSeconds':'decimal.Decimal','allRowsPreserved':True,'reviewedNewlinesAndFormulaEscaping':True,'manifestMatchesReviewedResults':True},indent=2));print('PASS independent artifacts',checks)
