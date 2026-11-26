import csv,json,sys,glob
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=[]
for f in glob.glob(prefix+'export-*.json'):
 r=json.load(open(f));assert len(r['rows'])==len(r['original']['records'])==len(r['review'])
 cf=f[:-4]+'csv'
 if not __import__('os').path.exists(cf):continue
 rows=list(csv.DictReader(open(cf,newline='')));assert len(rows)==len(r['rows'])
 for a,b in zip(rows,r['rows']):
  assert a['id']==b['id'];assert a['original_note']==b['note'];assert int(a['reviewed_quantity'])==b['reviewedQuantity'];assert a['material']==b['material']
  expected=b['reviewerNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert a['reviewer_note']==expected
 checks.append(f)
assert len(checks)>=5
json.dump({'roundTrips':checks,'checks':'Python csv parser; every row, reviewed field, formula escape and multiline note preserved'},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS artifacts',len(checks))
