import json,csv,io,glob,os
prefix=os.environ.get('PREFIX','');checks=0
for path in glob.glob(prefix+'export-*.json'):
 a=json.load(open(path));orig=a['original'];cases=a['cases'];assert len(cases)==len(orig['requests']);checks+=1
 for c,o,r in zip(cases,orig['requests'],a['review']):
  assert c['id']==o['id']==r['id'];assert c['context']==o['context'];assert c['note']==r['note'];assert c['date']==r['date'];assert c['quantity']==r['quantity'];checks+=5
  if c['decision']=='hold':assert c['status']=='held';assert 'total' not in c;checks+=2;continue
  book=next(b for b in orig['books'] if b['id']==c['book']);matches=[v for v in book['versions'] if v['from']<=c['date'] and (v['until'] is None or c['date']<v['until'])];assert c['matches']==[v['id'] for v in matches];checks+=1
  if len(matches)==1:assert c['status']=='ready';assert c['total']==matches[0]['cents']*c['quantity'];checks+=2
  else:assert c['total'] is None;assert c['status']==('gap' if not matches else 'overlap');checks+=2
 assert a['metrics']['totalCents']==sum(c.get('total') or 0 for c in cases);checks+=1
 csvpath=path[:-5]+'.csv'
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 if os.path.exists(csvpath):
  rows=list(csv.DictReader(open(csvpath,newline='')));vr=[r for r in rows if r['kind']=='version'];qr=[r for r in rows if r['kind']=='request'];assert len(vr)==sum(len(b['versions']) for b in orig['books']);assert len(qr)==len(cases);checks+=2
  for b in orig['books']:
   for v in b['versions']:
    x=next(r for r in vr if r['book']==b['id'] and r['id']==v['id']);assert x['from_or_date']==v['from'];assert x['until']==(v['until'] or '');assert int(x['rate_cents'])==v['cents'];checks+=3
  for x,c,o in zip(qr,cases,orig['requests']):
   assert x['note']==safe(c['note']);assert x['context']==safe(c['context']);assert x['original_date']==o['date'];assert int(x['original_quantity'])==o['quantity'];assert x['from_or_date']==c['date'];assert x['total_cents']==(str(c['total']) if c.get('total') is not None else '');checks+=6
 ready=path[:-5]+'.ready.csv'
 if os.path.exists(ready):
  rows=list(csv.DictReader(open(ready,newline='')));expected=[c for c in cases if c['status']=='ready'];assert len(rows)==len(expected);checks+=1
  for x,c in zip(rows,expected):assert x['request']==c['id'];assert int(x['total_cents'])==c['total'];assert int(x['unit_cents'])*int(x['quantity'])==int(x['total_cents']);assert x['reviewer_note']==safe(c['note']);checks+=4
print('PASS',checks,'independent artifact assertions')
json.dump(dict(assertions=checks,files=len(glob.glob(prefix+'export-*.json')),method='Independent Python JSON/CSV parsing, lineage, interval pricing, review and export conservation'),open(prefix+'artifact-validation.json','w'),indent=2)
