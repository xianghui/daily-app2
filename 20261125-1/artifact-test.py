import csv,json,io,glob,os
prefix=os.environ.get('PREFIX','');checks=0
for name in ['fixture0','fixture1','reviewed','max']:
 base=prefix+'export-'+name
 r=json.load(open(base+'.json')); rows=list(csv.DictReader(open(base+'.csv',newline='')));fixtures=json.load(open(base+'-fixtures.json'))['cases'];md=open(base+'.md').read()
 assert len(rows)==len(r['originalInput']['records'])==r['metrics']['records'];checks+=3
 assert len(fixtures)==r['metrics']['ready'];checks+=1
 for i,row in enumerate(rows):
  c=r['checks'][i];original=r['originalInput']['records'][i];review=r['reviews'][i]
  def cell(s):return "'"+s if s.startswith(('=','+','-','@','\t','\r')) else s
  assert row['id']==cell(c['id']);assert row['source_context']==cell(original['context']);assert row['original_patch']==cell(original['raw']);assert row['reviewed_patch']==cell(review['raw']);assert row['review_note']==cell(review['note']);assert row['status']==c['status'];assert json.loads(row['target_json'])==c['target'];assert json.loads(row['result_json'])==c['result'];checks+=8
  assert json.dumps(original,ensure_ascii=False,separators=(',',':')) in md;checks+=1
  f=fixtures[i];assert f['id']==c['id'] and f['target']==c['target'] and f['patch']==c['patch'] and f['expected']==c['result'];checks+=1
 if name=='reviewed':
  assert r['reviews'][1]['note']=='=SUM(1,2)\nReviewed "paper", exactly.';assert r['checks'][1]['result']['notes']=='Edited < & "note"\nnext line';checks+=2
for name,metric,n in [('held','held',1),('blocked','blocked',1),('undo','ready',3)]:
 r=json.load(open(prefix+'export-'+name+'.json'));assert r['metrics'][metric]==n;assert len(r['checks'])==3;checks+=2
r0=json.load(open(prefix+'export-impact0.json'));r1=json.load(open(prefix+'export-impact1.json'));assert r0['originalInput']['records'][0]['raw']==r1['originalInput']['records'][0]['raw'];assert r0['checks'][0]['result']!=r1['checks'][0]['result'];checks+=2
json.dump({'assertions':checks,'parser':'Python csv/json; exact all-record, reviewed multiline/formula/quote conservation','contextOnlyInterventionChangesActualResult':True},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independent artifact parsing',checks)
