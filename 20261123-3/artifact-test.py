import csv,json,hashlib
from pathlib import Path
p=Path.cwd();reports=[]
for f in sorted(p.glob('export-*-json.json')):
 r=json.loads(f.read_text());assert r['schema']=='chunk-harbor/1';assert len(r['reviews'])==len(r['originalInput']['records']);label=f.name[len('export-'):-len('-json.json')];source=r['originalInput'];reviews=r['reviews'];a=r['analysis'];audit=p/('export-'+label+'-csv.csv')
 if audit.exists():
  rows=list(csv.DictReader(audit.open(newline='')));assert len(rows)==len(reviews)
  for i,x in enumerate(rows):
   guard=lambda s:"'"+s if s and s[0]in'=+-@\t\r' else s
   assert x['record_id']==guard(source['records'][i]['id']);assert x['reviewed_file']==guard(reviews[i]['resource']);assert x['reviewer_note']==guard(reviews[i]['note']);assert int(x['start'])==source['records'][i]['start'];assert int(x['length'])==source['records'][i]['length'];assert int(x['end_exclusive'])==source['records'][i]['start']+source['records'][i]['length']
 md=p/('export-'+label+'-markdown.md')
 if md.exists():assert json.dumps(r,ensure_ascii=False,indent=2) in md.read_text() or json.loads(md.read_text()[md.read_text().index('{'):])==r
 if a['status']=='ready':
  assert a['uniqueBytes']+a['missingBytes']==a['expectedBytes'];assert a['uniqueBytes']+a['duplicateBytes']==a['loggedBytes'];assert sum(x['size']for x in source['files'])==a['expectedBytes'];assert sum(x['length']for x in source['records'])==a['loggedBytes']
  plan=p/('export-'+label+'-ranges-csv.csv')
  if plan.exists():
   rows=list(csv.DictReader(plan.open(newline='')));assert set(x['file_id']for x in rows)==set(x['id']for x in source['files']);assert sum(int(x['length'])for x in rows)==a['missingBytes']
   for x in rows:
    if x['status']=='MISSING':assert int(x['end_inclusive'])-int(x['start'])+1==int(x['length']);assert x['range_not_executed']=='bytes='+x['start']+'-'+x['end_inclusive']
  for file in a['files']:
   assert sum(g['length']for g in file['segments'])==file['size'];assert sum(g['length']for g in file['segments']if g['sources'])==file['uniqueBytes'];assert sum(g['length']for g in file['missing'])==file['missingBytes']
   parts=[x for i,x in enumerate(source['records'])if reviews[i]['resource']==file['id']]
   assert file['recordIds']==[x['id']for x in parts]
   for g in file['segments']:assert g['sources']==[x['id']for x in parts if x['start']<=g['start'] and x['start']+x['length']>=g['end']]
 if label=='reviewed':assert reviews[0]['note']=='=SUM(1,2)\nReviewed "ranges", preserved.'
 reports.append({'label':label,'records':len(reviews),'status':a['status'],'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
assert {'fixture0','fixture1','reviewed','held','max','identity-edit','before-edit','negation'}<=set(x['label']for x in reports)
(p/'artifact-validation.json').write_text(json.dumps({'parsedAudits':reports,'independentCsvJsonMarkdownParsing':True,'allRecordsRetained':True,'rangeAndByteConservation':True,'multilineFormulaEscaping':True},indent=2));print('PASS independent artifacts',len(reports))
