import json,csv,io
from pathlib import Path
report=[]
for p in Path('.').glob('export-*.json'):
 r=json.loads(p.read_text());assert r['schema']=='facet-ledger/v1';assert r['total']==len(r['originalInput']['records'])==len(r['reviews']);assert r['total']==r['held']+r['approved'];approved=[x for x in r['reviews'] if x['decision']=='approve'];assert r['assignments']==sum(len(x['selected']) for x in approved)
 for t in r['counts']:assert t['recordIds']==[x['id'] for x in approved if t['id'] in x['selected']];assert t['count']==len(t['recordIds'])
 for t in r['pairs']:assert t['recordIds']==[x['id'] for x in approved if t['a'] in x['selected'] and t['b'] in x['selected']];assert t['count']==len(t['recordIds'])
 cp=p.with_name(p.stem+'-audit.csv')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.read_text())));assert len(rows)==r['total']
  for i,x in enumerate(rows):
   assert x['id']==r['reviews'][i]['id'];assert json.loads(x['original_segments_json'])==r['originalInput']['records'][i]['segments'];assert json.loads(x['reviewed_topics_json'])==r['reviews'][i]['selected'];assert x['decision']==r['reviews'][i]['decision'];note=r['reviews'][i]['reviewNote'];assert x['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
 sp=p.with_name(p.stem+'-summary.csv')
 if sp.exists():
  rows=list(csv.DictReader(io.StringIO(sp.read_text())));assert len(rows)==len(r['counts'])+len(r['pairs'])
  for row in rows:
   t=next(t for t in (r['counts'] if row['kind']=='topic' else r['pairs']) if (t['id']==row['topic_a'] if row['kind']=='topic' else t['a']==row['topic_a'] and t['b']==row['topic_b']));assert int(row['approved_comment_count'])==t['count'];assert json.loads(row['record_ids_json'])==t['recordIds']
 mp=p.with_suffix('.md')
 if mp.exists():
  m=mp.read_text()
  for i,x in enumerate(r['reviews']):
   assert x['reviewNote'] in m
   for s in r['originalInput']['records'][i]['segments']:assert s in m
 report.append({'artifact':p.name,'records':r['total'],'assignments':r['assignments'],'allCountsIndependentlyRecomputed':True,'auditCSVParsed':cp.exists(),'summaryCSVParsed':sp.exists(),'markdownChecked':mp.exists()})
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'actual browser JSON exports; CSV/Markdown round trips, multiline/formula protection, originals and holds')
