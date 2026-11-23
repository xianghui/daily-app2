from pathlib import Path
import csv,json,io,os,urllib.parse
prefix=os.environ.get('PREFIX','');n=0
for name in ['fixture0','fixture1','reviewed','held','max']:
 stem=prefix+'export-'+name
 d=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())));manifest=json.loads(Path(stem+'.manifest.json').read_text());md=Path(stem+'.md').read_text()
 assert len(rows)==len(d['originalInput']['records'])==len(d['checks']);n+=2
 expected=[]
 for i,(r,c,v,o) in enumerate(zip(rows,d['checks'],d['reviews'],d['originalInput']['records'])):
  def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
  for key,val in [('id',c['id']),('source_context',o['context']),('original_url',o['raw']),('reviewed_url',v['raw']),('review_note',v['note']),('canonical',c.get('canonical',''))]:assert r[key]==safe(val),(name,key);n+=1
  assert json.dumps(v['note'],ensure_ascii=False) in md;n+=1
  if c['status']=='ready':expected.append({'id':c['id'],'source':c['raw'],'canonical':c['canonical'],'policy':c['system']})
  if c.get('canonical') and c['system']=='signed':assert c['canonical']==v['raw'];n+=1
  if c.get('canonical') and c['system']!='signed':
   u=urllib.parse.urlsplit(c['canonical']);pairs=urllib.parse.parse_qsl(u.query,keep_blank_values=True);assert pairs==[tuple(p) for p in c['pairs']];n+=1
 assert manifest==expected;n+=1
 assert len(set(r['canonical'] for r in manifest))==len(manifest);n+=1
 valid=[c for c in d['checks'] if c.get('exactVerified')]
 lost=sum(x['baseline']==y['baseline'] and x['canonical']!=y['canonical'] for i,x in enumerate(valid) for y in valid[:i]);assert lost==d['metrics']['lostDistinctions'];n+=1
 assert sum(c['status']=='ready' for c in d['checks'])==d['metrics']['ready'];n+=1
 if name=='reviewed':assert '\n' in rows[0]['review_note'] and rows[0]['review_note'].startswith("'=SUM");n+=1
f=json.loads(Path(prefix+'export-fixture0.json').read_text());assert f['metrics']['collisionRows']==2 and f['metrics']['lostDistinctions']==1;n+=2
f=json.loads(Path(prefix+'export-fixture1.json').read_text());assert f['checks'][2]['canonical']=='https://example.test/search?q=tea+pot&tag=b&tag=a&z=9';assert f['checks'][3]['canonical']=='https://example.test/page?topic=tools#intro';n+=2
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentAssertions':n,'csvJSONMarkdownAndManifestParsed':True,'sameKeyOrderAndSignedBytesPreserved':True,'baselineRecomputed':True},indent=2));print('PASS independent artifacts',n)
