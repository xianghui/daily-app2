from pathlib import Path
import json,csv,io
p=Path(__file__).resolve().parent
checks=[]
for stem in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads((p/('export-'+stem+'.json')).read_text()); rs=list(csv.DictReader(io.StringIO((p/('export-'+stem+'.csv')).read_text()))); manifest=list(csv.DictReader(io.StringIO((p/('export-'+stem+'-manifest.csv')).read_text())))
 assert len(rs)==len(r['originalInput']['first'])+len(r['reviews'])
 assert len(manifest)==len(r['manifest'])
 def safe(v):return "'"+v if v and v[0] in '=+-@\t\r' else v
 for i,s in enumerate(r['originalInput']['first']):assert rs[i]['id']==s['id'] and rs[i]['original_text']==safe(s['text'])
 for row,s,review in zip(rs[len(r['originalInput']['first']):],r['originalInput']['records'],r['reviews']):
  assert row['id']==s['id'];assert row['original_text']==safe(s['text']);assert row['reviewed_first_id']==review['target'];assert row['review_note']==safe(review['reviewNote']);assert row['decision']==review['decision']
 for row,s in zip(manifest,r['manifest']):
  assert row['shortlisted']==('yes' if s['selected'] else 'no');assert row['fused_rank']==str(s['fusedRank'] or '');assert row['rank_a']==str(s['rankA'] or '') and row['rank_b']==str(s['rankB'] or '');assert row['key']==s['key'] and row['description']==safe(s['text']) and row['first_id']==s['firstId'] and row['second_id']==s['secondId'] and row['status']==s['status']
 checks.append({'fixture':stem,'allOriginalRecords':len(rs),'manifestRecords':len(manifest),'parsedIndependently':True})
for i in range(2):
 r=json.loads((p/f'export-fixture{i}.json').read_text());md=(p/f'export-fixture{i}.md').read_text();assert 'Reading shortlist' in md
 for s in r['originalInput']['first']+r['originalInput']['records']:assert s['text'] in md
assert json.loads((p/'export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
(p/'artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown artifacts, formulas/newlines/quotes, complete inventories and held originals')
