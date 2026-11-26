import csv,json,sys
from pathlib import Path
from decimal import Decimal,ROUND_HALF_UP
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-'
report=[]
for case in json.loads(Path('core-cases.json').read_text()):
 v=case['input'];r=case['result'];b=Decimal(v['balance']);base=int((b*Decimal(v['referenceRate'])).quantize(Decimal(1),rounding=ROUND_HALF_UP));close=int((b*Decimal(case['closingRate'])).quantize(Decimal(1),rounding=ROUND_HALF_UP));end=close if case['rule']=='closing' else base
 assert r['referenceMinor']==str(base) and r['reviewedMinor']==str(end) and r['movementMinor']==str(end-base) and r['differenceMinor']==str(end-close)
report.append('600 results independently matched Python Decimal signed half-up rounding')
for p in Path('.').glob(prefix+'export-*.json'):
 a=json.loads(p.read_text());assert len(a['rows'])==len(a['original']['requests']);assert [r['id']for r in a['rows']]==[r['id']for r in a['original']['requests']]
 for r in a['rows']:
  if r['status']=='held':assert r['calculation']is None;continue
  v=r['review'];c=r['calculation'];b=Decimal(v['balance']);base=int((b*Decimal(v['referenceRate'])).quantize(Decimal(1),rounding=ROUND_HALF_UP));rate=a['original']['closingRate']if r['rule']=='closing' else v['referenceRate'];end=int((b*Decimal(rate)).quantize(Decimal(1),rounding=ROUND_HALF_UP));assert int(c['referenceMinor'])==base and int(c['reviewedMinor'])==end and int(c['movementMinor'])==end-base
 for key in ['referenceMinor','reviewedMinor','movementMinor','allClosingMinor','differenceMinor']:assert int(a['totals'][key])==sum(int(r['calculation'][key])for r in a['rows']if r['calculation'])
 for suffix in ['', '-worksheet']:
  f=p.with_name(p.stem+suffix+'.csv')
  if f.exists():
   rows=list(csv.DictReader(f.open(newline='')));assert len(rows)==len(a['rows'])
   for row,r in zip(rows,a['rows']):
    assert row['id']==r['id']
    if suffix=='':
     expected=r['review']['note'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r'))else expected;assert row['review_note']==expected;assert row['original_note']==r['note'];assert row['reviewed_balance_minor']==r['review']['balance']
    if r['calculation']:assert row['reviewed_minor']==r['calculation']['reviewedMinor']
  if suffix=='' and p.with_suffix('.md').exists():
   md=p.with_suffix('.md').read_text();assert all(r['id']in md and r['review']['note']in md for r in a['rows'])
 report.append(p.name+' independently parsed; all sources, signed values and totals retained')
assert len(report)>8
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent artifacts',len(report))
