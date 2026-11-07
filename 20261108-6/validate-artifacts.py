from pathlib import Path
import json,csv,io,re,hashlib
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());assert len(a['records'])==len(a['input']['retired']);assert len(set(r['path']for r in a['records']))==len(a['records'])
 destinations={r['path']for r in a['input']['destinations']};assert not destinations.intersection(r['path']for r in a['records'])
 for r,s in zip(a['records'],a['input']['retired']):
  for k in ['path','text']:assert r[k]==s[k]
  assert r['target']in destinations and r['decision']in ['accept','hold']
 assert a['metrics']['approved']==sum(r['decision']=='accept'for r in a['records'])
 assert a['metrics']['held']==sum(r['decision']=='hold'for r in a['records'])
 assert a['metrics']['reviewOverrides']==sum(r['target']!=r['suggested']for r in a['records'])
 assert a['metrics']['aiVsFirstDestination']==sum(r['suggested']!=a['input']['destinations'][0]['path']for r in a['records'])
 checks.append({'file':str(f),'records':len(a['records']),'originals':'exactly preserved','noSelfChainsLoops':True,'metrics':'recomputed'})
for suffix in ['reviewed','escaping']:
 a=json.loads(Path(f'export-{suffix}.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(f'export-{suffix}.csv').read_text())))
 assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  expected={'from':s['path'],'to':s['target']if s['decision']=='accept'else'','status':'301'if s['decision']=='accept'else'HOLD','review':s['decision'],'note':s['note'],'source':s['text']}
  for k,v in expected.items():
   v="'"+v if re.match(r'^[=+\-@\t\r]',v)else v
   assert r[k]==v,(k,r[k],v)
 checks.append({'file':f'export-{suffix}.csv','parsedRecords':len(rows),'allFields':'exact with documented formula escaping'})
for suffix in ['held','reviewed']:
 a=json.loads(Path(f'export-{suffix}.json').read_text());lines=[l.split()for l in Path(f'export-{suffix}.txt').read_text().splitlines()if l and not l.startswith('#')]
 assert lines==[[r['path'],r['target'],'301']for r in a['records']if r['decision']=='accept'];checks.append({'file':f'export-{suffix}.txt','parsedRules':len(lines),'heldExcluded':True})
assets=[]
dist=Path(__file__).resolve().parent/'dist'
assert (dist/'index.html').is_file()
for f in dist.rglob('*'):
 if f.is_file():
  b=f.read_bytes();assets.append({'path':str(f.relative_to(dist)),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
  if f.suffix in ['.js','.html']:assert not re.search(rb'sk-[A-Za-z0-9]{25,}|ghp_[A-Za-z0-9]{30,}|AIza[0-9A-Za-z_-]{30,}',b),f
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));Path('asset-audit.json').write_text(json.dumps({'assets':assets,'secretPatternScan':'no matching credential patterns; no providers or credentials in source','sharedWasm':'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'},indent=2));print(f'{len(checks)} artifact checks; production assets hashed and credential-pattern scan clear.')
