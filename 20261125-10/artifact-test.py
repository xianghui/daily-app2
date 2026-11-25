import csv,json,pathlib
report=[]
for p in pathlib.Path('.').glob('*export-*.json'):
 d=json.loads(p.read_text());assert d['schema']=='reply-canopy/v1';assert len(d['rows'])==len(d['originalInput']['messages']);assert [x['id'] for x in d['rows']]==[x['id'] for x in d['originalInput']['messages']]
 for row,original in zip(d['rows'],d['originalInput']['messages']):
  for k,v in original.items():assert row[k]==v
 c=p.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(c.open(newline='')));assert len(rows)==len(d['rows'])
  for row,expected in zip(rows,d['rows']):
   for k in row:
    v=str(expected[k]);v="'"+v if v and v[0] in '=+-@\t\r' else v;assert row[k]==v,(p,k,row[k],v)
 if 'reviewed' in p.name:assert d['rows'][0]['note']=='=SUM(1,2)\nReviewed "entry", exactly.'
 parents={r['id']:r['parent'] for r in d['rows']};times={r['id']:r['time'] for r in d['rows']}
 for r in d['rows']:
  if r['parent']:assert times[r['parent']]<r['time']
 report.append({'file':p.name,'messages':len(d['rows']),'csvParsed':c.exists()})
assert report
pathlib.Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS artifacts',len(report))
