import json,csv,glob,io,sys
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=[]
for file in glob.glob(prefix+'export-*.json'):
 r=json.load(open(file));assert len(r['rows'])==len(r['original']['records']);assert [x['id']for x in r['rows']]==[x['id']for x in r['original']['records']]
 for i,x in enumerate(r['rows']):assert x['original']==r['original']['records'][i]
 if r['summary']:
  total=r['original']['profitMinor']
  for x in r['rows']:
   expected=x['openingMinor']-x['closingMinor'] if x['type']=='asset' else x['closingMinor']-x['openingMinor'] if x['type']=='liability' else x['amountMinor'] if x['type']=='addback' else -x['amountMinor'] if x['type']=='deduct' else 0
   assert int(x['effectMinor'])==expected;total+=expected
  assert int(r['summary']['operatingCashMinor'])==total
  assert int(r['summary']['baselineGapMinor'])==total-r['original']['profitMinor']
 for kind in ['.csv','-worksheet.csv']:
  path=file[:-5]+kind
  if not glob.glob(path):continue
  rows=list(csv.DictReader(open(path,newline='')))
  if kind=='.csv':
   assert len(rows)==len(r['rows'])
   for x,y in zip(r['rows'],rows):
    assert x['id']==y['id'];assert x['original']['note']==y['original_note']
    n=x['reviewerNote'];assert y['reviewer_note']==("'"+n if n.startswith(('=','+','-','@','\t','\r'))else n)
    if x['effectMinor'] is not None:assert int(y['effect_minor'])==int(x['effectMinor'])
  else:
   assert r['summary'];assert len(rows)==len(r['rows'])+1
   for x in rows:assert int(x['before_minor'])+int(x['effect_minor'])==int(x['after_minor'])
   assert int(rows[-1]['after_minor'])==int(r['summary']['operatingCashMinor'])
 checks.append(file)
assert len(checks)>=15
report={'auditsIndependentlyParsed':len(checks),'csvParser':'Python csv.DictReader','arithmetic':'Python integer independent signed-effect reconciliation','fixtures':[]}
for i,expected in enumerate([950000,-100000]):
 r=json.load(open(prefix+'export-fixture'+str(i)+'.json'));assert int(r['summary']['operatingCashMinor'])==expected;report['fixtures'].append(expected)
json.dump(report,open(prefix+'artifact-validation.json','w'),indent=2);print(report)
