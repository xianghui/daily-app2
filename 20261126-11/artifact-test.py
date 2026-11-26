import json,csv,sys,io
from pathlib import Path
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-'
count=0
for f in Path('.').glob(prefix+'export-*.json'):
 d=json.loads(f.read_text());assert len(d['rows'])==len(d['original']['requests'])
 totals=dict(costMinor=0,nrvMinor=0,carryingMinor=0,writeDownMinor=0)
 for i,row in enumerate(d['rows']):
  assert row['id']==d['original']['requests'][i]['id'];v=row['review'];x=row['calculation']
  if v['decision']=='hold':assert x is None;continue
  q=int(v['quantity']);cost=q*int(v['cost']);nrv=q*max(0,int(v['sale'])-int(v['completion'])-int(v['selling']));carry=min(cost,nrv)
  for k,n in [('costMinor',cost),('nrvMinor',nrv),('carryingMinor',carry),('writeDownMinor',cost-carry)]:assert int(x[k])==n;totals[k]+=n
 for k,n in totals.items():assert int(d['totals'][k])==n
 baseline=min(totals['costMinor'],totals['nrvMinor']);assert int(d['totals']['aggregateBaselineMinor'])==baseline;assert int(d['totals']['hiddenWriteDownMinor'])==baseline-totals['carryingMinor']
 cf=f.with_suffix('.csv')
 if cf.exists():
  rows=list(csv.DictReader(io.StringIO(cf.read_text())));assert len(rows)==len(d['rows'])
  for row,source in zip(rows,d['rows']):
   assert row['id']==source['id'];note=source['review']['note'];assert row['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note);assert row['original_note']==source['note'];assert row['review_quantity']==str(source['review']['quantity'])
 mf=f.with_suffix('.md')
 if mf.exists():
  md=mf.read_text()
  for row in d['rows']:assert row['id'] in md;assert row['note'] in md;assert row['review']['note'] in md
 count+=1
assert count>=8
Path(prefix+'artifact-validation.json').write_text(json.dumps({'artifactsParsed':count,'independentIntegerArithmetic':True,'allRecordsAndEditsPreserved':True}));print('PASS artifacts',count)
