import csv,json,pathlib,sys
prefix=sys.argv[1] if len(sys.argv)>1 else '';reports=[]
for name in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(pathlib.Path(prefix+'export-'+name+'.json').read_text());rows=list(csv.DictReader(open(prefix+'export-'+name+'.csv',newline='')));release=list(csv.DictReader(open(prefix+'export-'+name+'.release.csv',newline='')))
 assert len(rows)==len(r['originalInput']['records']);assert len(release)==r['metrics']['ready']
 for i,row in enumerate(rows):
  original=r['originalInput']['records'][i];c=r['checks'][i];review=r['reviews'][i]
  for field,value in [('id',original['id']),('source_context',original['context']),('review_note',review['note'])]:
   expected="'"+value if value and value[0] in '=+-@\t\r' else value
   assert row[field]==expected,(name,i,field)
  assert int(row['original_quantity'])==original['quantity'];assert int(row['original_billed_cents'])==original['billedCents']
  if c['status']=='ready':
   # Independent marginal-unit oracle on exported plan, not exported slabs.
   p=next(p for p in r['originalInput']['plans'] if p['id']==c['system']);q=c['quantity'];total=p['fixedCents']
   for unit in range(1,q+1):total+=next(t['rateCents'] for t in p['tiers'] if t['upto'] is None or unit<=t['upto'])
   assert int(row['graduated_cents'])==total==c['totalCents'];assert int(row['billed_minus_graduated_cents'])==c['billedCents']-total
 md=pathlib.Path(prefix+'export-'+name+'.md').read_text();assert 'Slab Ledger' in md
 reports.append({'artifact':name,'rows':len(rows),'released':len(release),'originalsAndReviewsPreserved':True,'independentChargeOracle':True})
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independently parsed actual downloads',len(reports))
