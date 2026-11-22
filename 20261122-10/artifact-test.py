import csv,json,pathlib
p=pathlib.Path(__file__).parent
checks=[]
for f in p.glob('export-*-json.json'):
 r=json.loads(f.read_text()); src=r['originalInput']; rows=r['reviews']; assert len(src['tallies'])==len(rows)
 if r['analysis']['status']=='ready':
  an=r['analysis']; assert an['total']==sum(x['count'] for x in rows)
  assert [x['id'] for x in an['leaves']]==[x['id'] for x in src['destinations']]
  assert sum(x['weight']*x['depth'] for x in an['leaves'])==an['optimal']['cost']
  assert an['optimal']['cost']<=an['baseline']['cost']
  for i,leaf in enumerate(an['leaves']):
   for step in leaf['path']:assert (i<=step['split'])==(step['side']=='left')
 cf=f.with_name(f.name.replace('-json.json','-csv.csv'))
 if cf.exists():
  with cf.open(newline='') as h:records=list(csv.DictReader(h))
  assert len(records)==len(rows)
  for i,x in enumerate(records):
   safe=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
   assert x['tally']==safe(src['tallies'][i]['id']);assert x['original_subject']==safe(src['tallies'][i]['subject'])
   assert int(x['original_count'])==src['tallies'][i]['count'];assert int(x['reviewed_count'])==rows[i]['count'];assert x['note']==safe(rows[i]['note'])
  checks.append(cf.name)
 mf=f.with_name(f.name.replace('-json.json','-markdown.md'))
 if mf.exists():
  md=mf.read_text();audit=json.loads(md.split('## Complete original and reviewed audit\n',1)[1]);assert audit==r;checks.append(mf.name)
 checks.append(f.name)
assert json.loads((p/'export-reviewed-json.json').read_text())['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
(p/'artifact-validation.json').write_text(json.dumps({'independentlyParsedArtifacts':checks,'sourceConservation':True,'countsOrderRoutesAndCosts':True,'multilineFormulaSafeCSV':True},indent=2));print('PASS',len(checks),'downloaded artifacts')
