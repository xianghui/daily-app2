from pathlib import Path
import csv,json,os
prefix=os.environ.get('PREFIX','');checks=0;reports=[]
def verify(condition):
 global checks
 assert condition
 checks+=1
for path in sorted(Path('.').glob(prefix+'export-*.json')):
 if path.name.endswith('.catalog.json'):continue
 d=json.loads(path.read_text());verify(d['app']=='Plural Loom');verify(len(d['checks'])==len(d['originalInput']['records'])==len(d['reviews']))
 ready=[c for c in d['checks'] if c['status']=='ready'];verify(len(ready)==d['metrics']['ready'])
 verify(sum(len(c.get('previews',[])) for c in d['checks'])==d['metrics']['previewCounts']);verify(sum(c.get('baselineMismatch',0) for c in d['checks'])==d['metrics']['baselineMismatch'])
 for i,c in enumerate(d['checks']):
  verify(c['id']==d['reviews'][i]['id']==d['originalInput']['records'][i]['id']);verify(c['raw']==d['reviews'][i]['raw'])
  for v in c.get('previews',[]):
   n=v['count'];locale=c['locale']
   if locale=='ja':category='other'
   elif locale=='en':category='one' if n==1 else 'other'
   elif locale=='pl':category='other' if n%1 else 'one' if n==1 else 'few' if 2<=n%10<=4 and not 12<=n%100<=14 else 'many'
   else:category='zero' if n==0 else 'one' if n==1 else 'two' if n==2 else 'few' if n%1==0 and 3<=n%100<=10 else 'many' if n%1==0 and 11<=n%100<=99 else 'other'
   verify(v['category']==category);verify(v['englishCategory']==('one' if n==1 else 'other'))
 catalog=path.with_suffix('.catalog.json')
 if catalog.exists():
  release=json.loads(catalog.read_text());verify(release['format']=='plural-loom-catalog-v1');verify(release['selection']=={'type':'cardinal','maximumFractionDigits':3})
  verify(sum(len(v) for v in release['catalogs'].values())==len(ready))
  for c in ready:verify(release['catalogs'][c['locale']][c['key']]==c['forms']);verify(set(c['required'])==set(c['forms']));verify(all('{count}' in t for t in c['forms'].values()))
 cp=path.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));verify(len(rows)==len(d['checks']))
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for i,row in enumerate(rows):
   verify(row['id']==safe(d['checks'][i]['id']));verify(row['original_message']==safe(d['originalInput']['records'][i]['raw']));verify(row['reviewed_message']==safe(d['reviews'][i]['raw']));verify(row['review_note']==safe(d['reviews'][i]['note']));verify(row['status']==d['checks'][i]['status']);verify(json.loads(row['previews'])==d['checks'][i].get('previews',[]))
 md=path.with_suffix('.md')
 if md.exists():verify(md.read_text().startswith('# Plural Loom'));verify('Computed counts: '+json.dumps(d['metrics'],ensure_ascii=False,separators=(',',':')) in md.read_text())
 reports.append(path.name)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':checks,'artifacts':reports,'independentParser':'Python json and csv; independently coded CLDR integer and simple decimal golden cases'},indent=2));print('PASS artifacts',checks)
