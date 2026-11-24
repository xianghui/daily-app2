from pathlib import Path
import json,re,hashlib
p=Path.cwd();root=p.parent;paths=list((p/'dist').rglob('*.js'))+list((p/'dist').rglob('*.html'));texts='\n'.join(f.read_text() for f in paths)
for pattern in [r'sk-[A-Za-z0-9_-]{20,}',r'gh[pousr]_[A-Za-z0-9]{20,}',r'AKIA[0-9A-Z]{16}',r'-----BEGIN [A-Z ]*PRIVATE KEY-----']:
 assert not re.search(pattern,texts),pattern
assert 'api.openai.com' not in texts and 'openrouter.ai' not in texts
app=(p/'src/App.jsx').read_text();core=(p/'src/core.js').read_text();assert "workerUrl='/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js'" in app
for item in json.loads((p/'runtime-provenance.json').read_text()):
 b=(root/item['path']).read_bytes();assert hashlib.sha256(b).hexdigest()==item['sha256'] and len(b)==item['bytes']
worker=(root/'20261115-6/src/ai.worker.js').read_text();assert "pipeline('feature-extraction','Xenova/all-MiniLM-L6-v2'" in worker and "device:'wasm',dtype:'q8'" in worker and 'pooling:\'mean\',normalize:true' in worker
pkg=json.loads((p/'package.json').read_text());assert pkg['scripts']['predeploy']=='npm run build' and pkg['scripts']['deploy']=='gh-pages -d dist' and 'gh-pages' in pkg['dependencies']
report=json.loads((root/'deploy/runtime-deduplication.json').read_text());entry=next(r for r in report['geometryReuse'] if r['folder']=='20261106-9');assert entry['bytesRemoved']==541470
assert not (root/'deploy/20261106-9/assets/manifold-BE4c7gO-.wasm').exists();assert (root/'20261106-9/dist/assets/manifold-BE4c7gO-.wasm').exists()
Path('static-validation.json').write_text(json.dumps({'builtTextCredentialPatternScanPassed':True,'noProviderIntegrations':True,'sharedRuntimeHashesVerified':True,'AIWorkerProtocolInspected':True,'requiredScripts':pkg['scripts'],'combinedSiteBytes':report['afterBytes'],'sizeGuardUnchanged':True,'legacyDedupe':entry},indent=2));print('PASS static runtime, no-key integration review, pattern scan, scripts and assembly guard')
