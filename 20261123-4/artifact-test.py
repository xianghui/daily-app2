from pathlib import Path
import json,csv,io
p=Path.cwd();checks=[]
def guard(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
for f in sorted(p.glob('export-*-json.json')):
 r=json.loads(f.read_text());a=r['analysis'];original=r['originalInput']['records'];assert len(original)==len(r['reviews'])==len(a['messages']);assert sum(x['decision']=='hold'for x in a['messages'])==a['held'];assert a['baselineEligibleSegments']==sum(x['before']['segments']for x in a['messages']if x['decision']!='hold');assert a['reviewedEligibleSegments']==sum(x['after']['segments']for x in a['messages']if x['decision']!='hold');checks.append(f.name+' records/metrics')
 stem=f.name.removesuffix('-json.json');cf=p/(stem+'-csv.csv');mf=p/(stem+'-message-csv.csv');md=p/(stem+'-markdown.md')
 if cf.exists():
  rows=list(csv.DictReader(io.StringIO(cf.read_text())));assert len(rows)==len(original)
  for row,o,review in zip(rows,original,r['reviews']):
   assert row['record_id']==guard(o['id']);assert row['original_draft']==guard(o['draft']);assert row['reviewed_body']==guard(review['body']);assert row['reviewer_note']==guard(review['note']);assert json.loads(row['required_values_json'])==o['values']
  checks.append(cf.name+' independent CSV parse/escaping')
 if mf.exists():
  rows=list(csv.DictReader(io.StringIO(mf.read_text())));assert len(rows)==len(original)
  for row,o,m in zip(rows,original,a['messages']):
   assert row['record_id']==guard(o['id']);assert row['reviewed_message']==guard(m['body'])
   if m['decision']=='hold':assert row['status']=='HELD — DO NOT SEND'and row['reviewed_message']==''
   else:assert int(row['segments'])==m['after']['segments']and m['after']['segments']<=r['originalInput']['maxSegments']
  checks.append(mf.name+' all IDs/body/hold/segment round-trip')
 if md.exists():assert json.loads(md.read_text().split('## Complete original and review audit\n\n')[1])==r;checks.append(md.name+' complete audit parse')
r=json.loads((p/'export-reviewed-json.json').read_text());assert '\nReviewed "copy", kept.' in r['reviews'][0]['body'];assert r['reviews'][0]['note']=='=SUM(1,2)\nReview "complete", preserved.'
(p/'artifact-validation.json').write_text(json.dumps({'checks':checks,'allPassed':True},indent=2));print('PASS',len(checks),'independent artifact/invariant checks')
