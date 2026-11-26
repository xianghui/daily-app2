import csv,json,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
files=list(Path('.').glob(prefix+'export-*.json'));assert files
report=[]
for p in files:
 r=json.loads(p.read_text());assert r['original']['records'] and len(r['rows'])==len(r['original']['records'])==len(r['review'])
 for i,row in enumerate(r['rows']):
  assert {k:row[k] for k in ('unit','station','note')}==r['original']['records'][i]
  assert row['reviewerNote']==r['review'][i]['note'] and row['reviewedOutcome']==r['review'][i]['outcome']
 cp=p.with_suffix('.csv')
 if cp.exists():
  with cp.open(newline='') as f:rows=list(csv.DictReader(f))
  assert len(rows)==len(r['rows'])
  for row,expected in zip(rows,r['rows']):
   for ck,jk in [('unit','unit'),('station','station'),('original_note','note'),('reviewed_outcome','reviewedOutcome'),('decision','decision'),('reviewer_note','reviewerNote')]:
    value=expected[jk];safe="'"+value if value and value[0] in '=+-@\t\r' else value;assert row[ck]==safe
 if r['summary']:
  statuses={}
  for x in r['rows']:statuses.setdefault(x['unit'],[]).append(x['reviewedOutcome'])
  assert r['summary']['first']==sum(all(x=='first' for x in v) for v in statuses.values())
  assert r['summary']['final']==sum(all(x!='failed' for x in v) for v in statuses.values())
  assert all(s['first']+s['recovered']+s['failed']==len(statuses) for s in r['stations'])
 else:assert r['status']=='blocked' and not r['units']
 if 'reviewed' in p.stem:assert '\n' in r['review'][0]['note'] and '"attempt"' in r['review'][0]['note']
 if p.with_suffix('.md').exists():
  md=p.with_suffix('.md').read_text()
  for row in r['rows']:assert row['note'] in md and row['reviewerNote'] in md
 report.append({'file':p.name,'records':len(r['rows']),'csvParsed':cp.exists()})
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent artifact parsing',len(report))
