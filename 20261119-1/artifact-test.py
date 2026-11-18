import csv,json,pathlib
checks=[]
for p in pathlib.Path('.').glob('export-*.json'):
 r=json.loads(p.read_text());assert len(r['reviews'])==len(r['originalInput']['observations'])==r['total'];assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['observations']]
 if r['status']=='ready':
  assert len(r['plans'])==r['total']
  for x in r['plans']:assert x['fullPools']*x['poolSize']+x['remainder']==x['samples']
 checks.append(p.name)
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(pathlib.Path(stem+'.json').read_text());rows=list(csv.DictReader(pathlib.Path(stem+'.csv').open(newline='')));assert len(rows)==r['total']
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id'];assert x['reviewed_protocol']==y['item'];assert float(x['reviewed_positive_rate'])==y['positiveRate'];assert int(x['reviewed_samples'])==y['samples'];assert x['review_note']==("'"+y['reviewNote'] if y['reviewNote'].startswith(('=','+','-','@','\t','\r')) else y['reviewNote'])
 checks.append(stem+'.csv independently parsed')
pathlib.Path('artifact-validation.json').write_text(json.dumps({'passed':checks,'allRecordsPreserved':True,'multilineAndFormulaEscaping':True},indent=2));print('PASS artifacts',len(checks))
