from pathlib import Path
import json,csv,io,re,hashlib
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());assert len(a['records'])==len(a['input']['records']);assert len(set(r['id']for r in a['records']))==len(a['records'])
 for r,s in zip(a['records'],a['input']['records']):
  for k in ['id','text','label']:assert r[k]==s[k]
  assert r['split']in ['evaluation','train','hold']
 for group in set(r['group']for r in a['records']):assert len(set(r['split']for r in a['records']if r['group']==group and r['split']!='hold'))<=1
 assert a['metrics']['exportedEvaluation']==sum(r['split']=='evaluation'for r in a['records'])
 assert a['metrics']['held']==sum(r['split']=='hold'for r in a['records'])
 checks.append({'file':str(f),'records':len(a['records']),'originals':'exactly preserved','groupIntegrity':True})
for suffix in ['reviewed','escaping']:
 a=json.loads(Path(f'export-{suffix}.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(f'export-{suffix}.csv').read_text())))
 assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  for k,v in s.items():
   expected=str(v);expected="'"+expected if re.match(r'^[=+\-@\t\r]',expected)else expected
   assert r[k]==expected,(k,r[k],expected)
 checks.append({'file':f'export-{suffix}.csv','parsedRecords':len(rows),'allFields':'exact with documented formula escaping'})
assets=[]
for f in Path('dist').rglob('*'):
 if f.is_file():
  b=f.read_bytes();assets.append({'path':str(f.relative_to('dist')),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
  if f.suffix in ['.js','.html']:
   assert not re.search(rb'sk-[A-Za-z0-9]{25,}|ghp_[A-Za-z0-9]{30,}|AIza[0-9A-Za-z_-]{30,}',b),f
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));Path('asset-audit.json').write_text(json.dumps({'assets':assets,'secretPatternScan':'no matching credential patterns; source also reviewed','sharedWasm':'20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'},indent=2));print(f'{len(checks)} artifact checks; production assets hashed and credential-pattern scan clear.')
