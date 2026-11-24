from pathlib import Path
import json,csv,os
prefix=os.environ.get('PREFIX',''); assertions=0
for name in ['fixture0','fixture1','reviewed','max']:
 base=prefix+'export-'+name
 r=json.loads(Path(base+'.json').read_text()); rows=list(csv.DictReader(Path(base+'.csv').open(newline=''))); md=Path(base+'.md').read_text();fixtures=json.loads(Path(base+'-fixtures.json').read_text())
 assert len(rows)==len(r['checks'])==r['metrics']['records'];assert len(fixtures['cases'])==r['metrics']['ready'];assert fixtures['rules']==r['originalInput']['rules'];assert json.loads(md.split('Original input: ',1)[1].split('\n\n',1)[0])==r['originalInput'];assertions+=4
 def safe(v):
  s=str(v or '')
  return "'"+s if s[:1] in '=+-@\t\r' and s else s
 for i,(row,c,review,source) in enumerate(zip(rows,r['checks'],r['reviews'],r['originalInput']['records'])):
  for field,val in [('id',c['id']),('source_context',source['context']),('original_property',source['raw']),('reviewed_property',review['raw']),('review_note',review['note']),('status',c['status']),('element',c['system']),('value',c.get('value',''))]:assert row[field]==safe(val),(name,field,row[field],val);assertions+=1
  if c['status']=='ready':
   candidates=c['matches'];win=max(candidates,key=lambda m:(m['important'],m['specificity'],m['ruleIndex']));assert c['value']==win['value'];assert c['ruleIndex']==win['ruleIndex'];assert c['baseline']==max(candidates,key=lambda m:m['ruleIndex'])['value'];assert c['disagreement']==(c['value']!=c['baseline']);assertions+=4
   f=next(f for f in fixtures['cases'] if f['id']==c['id']);assert f['property']==review['raw'];assert f['expected']==c['value'];assert f['element']['id']==review['system'];assertions+=3
 assert sum(c['disagreement'] for c in r['checks']if c['status']=='ready')==r['metrics']['disagreements'];assertions+=1
 if name=='reviewed':assert r['reviews'][1]['note']=='=SUM(1,2)\nReviewed "paper", exactly.';assert rows[1]['review_note'].startswith("'=SUM");assertions+=2
for name in ['held','blocked','undo','impact0','impact1']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());assert len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews']);assertions+=1
assert json.loads(Path(prefix+'export-impact0.json').read_text())['checks'][0]['value']!=json.loads(Path(prefix+'export-impact1.json').read_text())['checks'][0]['value'];assertions+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonAssertions':assertions,'allRecordsPreserved':True,'multilineAndFormulaEscaping':True,'currentReviewedFixtures':True},indent=2));print('PASS independent exported-artifact checks',assertions)
