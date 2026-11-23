from pathlib import Path
import json,csv,io,os
import regex
prefix=os.environ.get('PREFIX','');n=0;files=[]
def ck(x):
 global n
 assert x
 n+=1
def lengths(s):return {'utf8':len(s.encode('utf-8')),'utf16':len(s.encode('utf-16-le'))//2,'grapheme':len(regex.findall(r'\X',s))}
for p in Path('.').glob(prefix+'export-*.json'):
 if p.name.endswith('.release.json'):continue
 r=json.loads(p.read_text());ck(r['app']=='Glyph Budget');ck(len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews']))
 for i,c in enumerate(r['checks']):
  ck(c['id']==r['originalInput']['records'][i]['id']==r['reviews'][i]['id']);ck(c['raw']==r['reviews'][i]['raw'])
  if 'length' in c:
   l=lengths(c['raw']);ck(all(l[k]==c[k] for k in l));ck(l[c['unit']]==c['length']);ck((c['status']=='ready')==(c['length']<=c['limit']));ck(c['baselinePass']==(l['utf16']<=c['limit']));ck(c['raw'].startswith(c['candidate']));ck(lengths(c['candidate'])[c['unit']]<=c['limit']);ck(not c['candidate'] or c['candidate'] in [''.join(regex.findall(r'\X',c['raw'])[:j]) for j in range(1,l['grapheme']+1)])
 ck(r['metrics']['records']==sum(r['metrics'][k] for k in ['ready','held','blocked']));ck(r['metrics']['baselineMismatch']==sum(c['baselinePass']!=c['within'] for c in r['checks'] if 'length'in c))
 rp=p.with_suffix('.release.json')
 if rp.exists():
  release=json.loads(rp.read_text());ck([x['id']for x in release['records']]==[x['id']for x in r['checks']if x['status']=='ready'])
  for x in release['records']:ck(x['text']==next(c['raw']for c in r['checks']if c['id']==x['id']));ck(lengths(x['text'])[x['unit']]<=x['limit'])
 cp=p.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.read_text())));ck(len(rows)==len(r['checks']))
  for i,row in enumerate(rows):
   for key,expected in [('id',r['checks'][i]['id']),('original_text',r['originalInput']['records'][i]['raw']),('reviewed_text',r['checks'][i]['raw']),('review_note',r['reviews'][i]['note'])]:
    if expected.startswith(('=','+','-','@','\t','\r')):expected="'"+expected
    ck(row[key]==expected)
 files.append(p.name)
assert files
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':n,'audits':files,'independent':'Python UTF encoders, regex grapheme segmentation and csv parser'},indent=2));print('PASS independent artifacts',n)
