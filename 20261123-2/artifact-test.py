from pathlib import Path
import json,csv,io
p=Path.cwd();report=[]
for label in ['fixture0','fixture1','reviewed','max','held','negation','identity-edit']:
 f=p/('export-'+label+'-json.json');d=json.loads(f.read_text());n=len(d['originalInput']['records']);assert len(d['reviews'])==n
 if d['analysis']['status']=='ready':
  a=d['analysis'];assert len(a['records'])==n;assert a['deliveredPayloadBytes']+a['blockedPayloadBytes']==a['inputPayloadBytes']
  for r in a['records']:
   if r['blocked']:assert r['dontFragment'] and r['payloadBytes']+20>r['mtu'];continue
   offset=0
   for i,t in enumerate(r['fragments']):
    assert t['index']==i and t['offsetBytes']==offset and t['offsetUnits']*8==offset and t['totalBytes']==t['payloadBytes']+20<=r['mtu']
    assert t['moreFragments']==(i<len(r['fragments'])-1)
    if t['moreFragments']:assert t['payloadBytes']%8==0
    offset+=t['payloadBytes']
   assert offset==r['payloadBytes'] and r['wireBytesPerDatagram']==r['payloadBytes']+20*len(r['fragments'])
 for kind in ['csv','fragments-csv','markdown']:
  q=p/('export-'+label+'-'+kind+('.md'if kind=='markdown'else'.csv'))
  if not q.exists():continue
  if kind=='markdown':assert json.dumps(d,ensure_ascii=False,indent=2) in q.read_text();continue
  rows=list(csv.DictReader(io.StringIO(q.open(newline='').read())))
  if kind=='csv':
   assert len(rows)==n
   for r,v in zip(rows,d['reviews']):
    s=v['note'];expected="'"+s if s and s[0]in'=+-@\t\r'else s
    assert r['reviewer_note']==expected
    assert r['reviewed_path']==v['resource'] and r['decision']==v['decision']
    assert int(r['payload_bytes'])==d['originalInput']['records'][v['index']]['payloadBytes']
   if label=='reviewed':assert rows[0]['reviewer_note']=="'=SUM(1,2)\nReviewed \"bytes\", preserved."
  else:
   assert len(rows)==sum(max(1,len(r['fragments']))for r in d['analysis']['records'])
   assert len(set(r['record_id']for r in rows))==n
   for r in d['analysis']['records']:
    key=("'"if r['id'][0]in'=+-@\t\r'else'')+r['id'];ts=[t for t in rows if t['record_id']==key]
    assert all(int(t['datagram_quantity'])==r['count']for t in ts)
    if r['blocked']:assert ts[0]['status']=='DF_BLOCKED' and int(ts[0]['blocked_payload_per_datagram'])==r['payloadBytes']
    else:assert sum(int(t['payload_bytes'])for t in ts)==r['payloadBytes']
 report.append({'artifact':label,'records':n,'schemaAndConservation':True})
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent JSON/CSV/Markdown parsing, byte/quantity conservation, offsets, holds and multiline formula guards')
