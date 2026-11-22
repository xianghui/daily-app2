import csv,json,ipaddress
from pathlib import Path
checks=[]
for p in Path('.').glob('export-*-json.json'):
 r=json.loads(p.read_text());assert r['schema']=='address-quilt/1';assert len(r['reviews'])==len(r['originalInput']['ranges']);a=r['analysis']
 if a['status']=='ready':
  for g in a['groups']:
   intervals=sorted((int(ipaddress.IPv4Address(x['start'])),int(ipaddress.IPv4Address(x['end']))) for x in r['reviews'] if x['purpose']==g['purpose'])
   merged=[]
   for lo,hi in intervals:
    if merged and lo<=merged[-1][1]+1:merged[-1][1]=max(merged[-1][1],hi)
    else:merged.append([lo,hi])
   expected=[str(net) for lo,hi in merged for net in ipaddress.summarize_address_range(ipaddress.IPv4Address(lo),ipaddress.IPv4Address(hi))]
   assert [x['cidr'] for x in g['cidrs']]==expected
   assert sum(ipaddress.IPv4Network(c).num_addresses for c in expected)==g['addresses']
   assert all(x['sourceIds'] for x in g['cidrs'])
  assert a['addresses']==sum(g['addresses']for g in a['groups']);assert a['baselineExtraAddresses']==sum(g['extraAddresses']for g in a['groups'])
 checks.append({'artifact':p.name,'recordsPreserved':len(r['reviews']),'status':a['status'],'independentPythonIPv4Oracle':a['status']=='ready'})
for p in Path('.').glob('export-*-csv.csv'):
 with p.open(newline='')as f:rows=list(csv.DictReader(f))
 assert rows and all(None not in row for row in rows),p
 if 'plan-csv'not in p.name:
  expected=32 if 'max-'in p.name else 4;assert len(rows)==expected
 if 'reviewed-csv' in p.name:assert rows[0]['reviewer_note']=='\'=SUM(1,2)\nReviewed "source", preserved.'
 if 'max-csv' in p.name:assert rows[0]['id']=='\'=range\n"0"'
for p in Path('.').glob('export-*-markdown.md'):assert 'address-quilt/1'in p.read_text()
assert len(checks)>=9
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS',len(checks),'downloaded JSONs and all CSV/Markdown / independent IPv4 oracle')
