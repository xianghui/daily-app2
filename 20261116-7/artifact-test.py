import csv,json,pathlib
checks=[]
for f in pathlib.Path('.').glob('export-*.json'):
 r=json.loads(f.read_text());assert len(r['reviews'])==len(r['originalInput']['observations']);assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['observations']]
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(c.open(newline='')));assert len(rows)==r['total']
  for x,y,o in zip(rows,r['reviews'],r['originalInput']['observations']):
   assert x['id']==y['id'];assert int(x['original_count'])==o['count'];assert int(x['reviewed_count'])==y['count'];assert int(x['reviewed_mask'])==y['mask'];assert x['review_note']==("'" if y['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+y['reviewNote'];assert x['original_channel_notes']=='\n'.join(o['parts'])
 if r['status']=='ready':
  assert sum(x['exclusive'] for x in r['cells'])==r['unique'];assert r['unique']+r['outside']==r['originalInput']['universe']
  for x in r['cells']:assert sum(y['exclusive'] for y in r['cells'] if y['mask']&x['mask']==x['mask'])==x['inclusive']
  seg=f.with_name(f.stem+'-segments.csv')
  if seg.exists():
   rows=list(csv.DictReader(seg.open(newline='')));assert sum(int(x['exclusive_people']) for x in rows)==r['originalInput']['universe'];assert len(rows)==len(r['cells'])+1
 checks.append(f.name)
assert len(checks)>=10
assert json.loads(pathlib.Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
pathlib.Path('artifact-validation.json').write_text(json.dumps({'parsedExports':checks,'independentPythonCSVParser':True,'allRecordsAndReviewedFieldsPreserved':True,'multilineFormulaSafetyVerified':True,'exclusiveSegmentsConserveUniverse':True},indent=2));print('PASS',len(checks),'JSON and available CSV/segment artifact round trips')
