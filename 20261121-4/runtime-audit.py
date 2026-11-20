from pathlib import Path
import hashlib,json,urllib.request
root=Path('..');paths=['20261115-6/assets/ai.worker-lkOoPoq8.js','20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'];out=[]
for p in paths:
 parts=p.split('/',1);b=(root/parts[0]/'dist'/parts[1]).read_bytes();out.append({'url':'/daily-app2/'+p,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
u='https://huggingface.co/Xenova/all-MiniLM-L6-v2/resolve/main/tokenizer_config.json';resp=urllib.request.urlopen(u);config=json.load(resp);assert config['model_max_length']==512
version=json.loads((root/'20261115-6/node_modules/@huggingface/transformers/package.json').read_text())['version'];assert version=='4.3.2'
info=json.load(urllib.request.urlopen('https://huggingface.co/api/models/Xenova/all-MiniLM-L6-v2'));report={'dependencies':out,'sourceInspected':'20261115-6/src/ai.worker.js','model':'Xenova/all-MiniLM-L6-v2','observedModelRevision':info['sha'],'hostRevisionRecheckedThisRun':True,'transformersVersion':version,'device':'wasm','dtype':'q8','task':'feature-extraction','dimensions':384,'chunk':4,'actualTokenizerCeiling':config['model_max_length'],'noWebGPURequired':True,'note':'main unpinned; per-call max_length ignored by feature-extraction pipeline; 512-token tokenizer ceiling applies; text separately bounded to 300 chars'}
Path('runtime-dependency-audit.json').write_text(json.dumps(report,indent=2));print('PASS',version,config['model_max_length'],info['sha'])
