from pathlib import Path
import json,csv,io,ipaddress
reports=[]
for p in sorted(Path('.').glob('export-*-json.json')):
 r=json.loads(p.read_text());d=r['originalInput'];assert len(r['reviews'])==len(d['routes'])
 stem=p.name.removesuffix('-json.json');cp=Path(stem+'-csv.csv')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.open(newline='').read())));assert len(rows)==len(d['routes'])
  for row,rv,route in zip(rows,r['reviews'],d['routes']):
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   assert row['route_id']==safe(route['id']);assert row['reviewer_note']==safe(rv['note']);assert row['reviewed_gateway']==safe(rv['resource']);assert row['cidr']==route['cidr'];assert int(row['metric'])==route['metric']
 if r['analysis']['status']=='ready':
  seg=r['analysis']['segments'];assert sum(x['addresses']for x in seg)==2**32;end=-1
  for s in seg:
   start=int(ipaddress.IPv4Address(s['start']));stop=int(ipaddress.IPv4Address(s['end']));assert start==end+1;assert stop-start+1==s['addresses'];end=stop
  assert end==2**32-1;assert len(r['analysis']['probes'])==len(d['probes']);assert len(r['analysis']['coverage'])==len(d['routes'])
  sp=Path(stem+'-segments-csv.csv')
  if sp.exists():
   rows=list(csv.DictReader(io.StringIO(sp.read_text())));assert len(rows)==len(seg)
   for row,s in zip(rows,seg):assert row['start_ipv4']==s['start'] and row['end_ipv4']==s['end'] and int(row['addresses'])==s['addresses'] and json.loads(row['winning_routes'])==s['routeIds']
 mp=Path(stem+'-markdown.md')
 if mp.exists():assert json.loads(mp.read_text().split('## Complete original and review audit\n\n')[1])==r
 reports.append({'file':str(p),'routes':len(d['routes']),'probes':len(d['probes']),'status':r['analysis']['status']})
r=json.loads(Path('export-reviewed-json.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "gateway", preserved.'
assert any(x['file']=='export-max-json.json'and x['routes']==32 for x in reports)
Path('artifact-validation.json').write_text(json.dumps({'independentParsers':reports,'reviewedMultilineAndFormulaProtection':True,'completeIPv4PartitionReopened':True},indent=2));print('PASS',len(reports),'downloaded JSON/CSV/Markdown artifact sets')
