import csv,json,pathlib,sys,re
from decimal import Decimal
prefix=sys.argv[1] if len(sys.argv)>1 else ''
checks=[]
def esc(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
for label in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(pathlib.Path(prefix+'export-'+label+'.json').read_text());rows=list(csv.DictReader(pathlib.Path(prefix+'export-'+label+'.csv').open(newline='')))
 assert len(rows)==len(r['originalInput']['records'])==len(r['reviews'])==r['metrics']['records']
 for i,(row,c) in enumerate(zip(rows,r['checks'])):
  assert row['id']==esc(c['id']);assert row['review_note']==esc(r['reviews'][i]['note']);assert row['original_pair']==esc(r['originalInput']['records'][i]['value']);assert row['reviewed_pair']==esc(r['reviews'][i]['value'])
  if c['status']=='ready':
   parts=[x.strip() for x in c['value'].split('|')]
   if c['system']=='dms':
    vals={}
    for part in parts:
     d,m,s,h=part.split();v=Decimal(d)+Decimal(m)/60+Decimal(s)/3600;vals['lat' if h.upper() in 'NS' else 'lon']=v*(-1 if h.upper() in 'SW' else 1)
    expected=[float(vals['lon']),float(vals['lat'])]
   else:expected=[float(parts[1]),float(parts[0])] if c['system']=='latlon' else list(map(float,parts))
   assert all(abs(a-b)<1e-9 for a,b in zip(c['coordinates'],expected));assert float(row['longitude'])==c['coordinates'][0];assert float(row['latitude'])==c['coordinates'][1]
 release=list(csv.DictReader(pathlib.Path(prefix+'export-'+label+'.release.csv').open(newline='')))
 assert len(release)==r['metrics']['ready'];assert all(row['status']=='ready' and row['decision']=='approve' for row in release)
 gj=json.loads(pathlib.Path(prefix+'export-'+label+'.geojson').read_text());assert gj['type']=='FeatureCollection';assert len(gj['features'])==r['metrics']['ready'];assert len(gj['withheld'])==r['metrics']['held']+r['metrics']['blocked']
 for feature,c in zip(gj['features'],[c for c in r['checks'] if c['status']=='ready']):
  assert feature['type']=='Feature' and feature['geometry']['type']=='Point';assert feature['geometry']['coordinates']==c['coordinates'];assert feature['id']==c['id'];assert -180<=c['coordinates'][0]<=180 and -90<=c['coordinates'][1]<=90
  idx=next(i for i,x in enumerate(r['checks']) if x['id']==c['id']);assert feature['properties']['review_note']==r['reviews'][idx]['note']
 if label=='reviewed':assert rows[0]['review_note']=='\'=SUM(1,2)\nReviewed "source", exactly.';assert gj['features'][0]['geometry']['coordinates']==[151.2,-33.85]
 checks.append({'label':label,'records':len(rows),'features':len(gj['features']),'independentDecimalDMSOracle':True,'csvAndGeoJSONParsed':True})
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent artifacts',len(checks))
