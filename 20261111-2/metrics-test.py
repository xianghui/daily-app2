import json
from pathlib import Path
count=0
for p in Path('.').glob('export-*.json'):
 a=json.loads(p.read_text());d=a['originalInput'];m=a['metrics'];assert m['records']==len(d['observations']);assert m['approved']+m['held']==m['records'];assert m['literalTitleMatches']==sum(any(x['title'].lower() in o['text'].lower() for x in d['items']) for o in d['observations'])
 for s in a['summaries']:
  rs=[r for r in a['records'] if r['item']==s['id'] and r['decision']=='approve'];assert s['recipients']==sum(r['award']>0 for r in rs);assert s['baselineRecipients']==sum(r['baselineAward']>0 for r in rs)
  claims=[r['quantity'] for r in rs];left=s['budget'];first=[]
  for c in claims:
   award=min(c,left);left-=award;first.append(award)
  assert first==s['baseline'];assert s['spent']==min(s['budget'],sum(claims));assert s['totalClaim']==sum(claims)
 count+=1
Path('metric-validation.json').write_text(json.dumps({'auditsChecked':count,'literalTitleCountsRecomputed':True,'recipientCountsRecomputed':True,'independentFirstComeBaseline':True},indent=2));print('PASS independently recomputed displayed metrics and first-come comparisons:',count,'audits')
