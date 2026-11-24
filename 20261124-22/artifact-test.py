from pathlib import Path
import csv,io,json,os
from urllib.parse import urljoin,urlparse
prefix=os.environ.get('PREFIX','');count=0
for p in Path('.').glob(prefix+'export-*.json'):
 r=json.loads(p.read_text())
 if 'originalInput'not in r:continue
 assert len(r['originalInput']['records'])==len(r['reviews'])==len(r['checks'])==r['metrics']['records'];count+=1
 assert [x['id']for x in r['checks']]==[x['id']for x in r['originalInput']['records']];count+=1
 assert sum(r['metrics'][s]for s in ['ready','held','blocked'])==r['metrics']['records'];count+=1
 for i,c in enumerate(r['checks']):
  assert c['raw']==r['reviews'][i]['raw'];count+=1
  if c['status']=='ready':
   assert urljoin(c['base'],c['raw'])==c['resolved'];count+=1
   assert urlparse(c['resolved']).scheme in ['http','https'];count+=1
 manifest=p.with_name(p.stem+'-manifest.json')
 if manifest.exists():
  m=json.loads(manifest.read_text());ready=[x for x in r['checks']if x['status']=='ready'];assert len(m['links'])==len(ready);count+=1
  for a,b in zip(m['links'],ready):assert a['id']==b['id']and a['url']==b['resolved']and a['reference']==b['raw'];count+=1
 csvfile=p.with_suffix('.csv')
 if csvfile.exists():
  rows=list(csv.DictReader(io.StringIO(csvfile.read_text())));assert len(rows)==len(r['checks']);count+=1
  def safe(x):
   x=str(x)
   return "'"+x if x and x[0]in'=+-@\t\r'else x
  for i,x in enumerate(rows):
   assert x['id']==safe(r['checks'][i]['id']);assert x['reviewed_reference']==safe(r['reviews'][i]['raw']);assert x['original_reference']==safe(r['originalInput']['records'][i]['raw']);assert x['review_note']==safe(r['reviews'][i]['note']);count+=4
 if p.with_suffix('.md').exists():assert json.dumps(r['originalInput'],ensure_ascii=False,separators=(',',':')) in p.with_suffix('.md').read_text();count+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentArtifactAssertions':count,'parsers':['Python json','Python csv','urllib.parse URL resolution']},indent=2));print('PASS independent artifact assertions',count)
