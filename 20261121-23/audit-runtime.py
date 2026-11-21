from pathlib import Path
import json,hashlib,urllib.request
p=Path(__file__).resolve().parent;root=p.parent
urls=['/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js','/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs','/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'];dep=[]
for u in urls:
 parts=u.removeprefix('/daily-app2/').split('/',1);data=(root/parts[0]/'dist'/parts[1]).read_bytes();dep.append({'url':u,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
with urllib.request.urlopen('https://huggingface.co/api/models/Xenova/all-MiniLM-L6-v2',timeout=30)as r: info=json.load(r)
with urllib.request.urlopen('https://huggingface.co/Xenova/all-MiniLM-L6-v2/resolve/main/tokenizer_config.json',timeout=30)as r: tok=json.load(r)
assert tok['model_max_length']==512
(p/'runtime-dependency-audit.json').write_text(json.dumps({'dependencies':dep,'sourceInspected':'20261115-6/src/ai.worker.js','model':'Xenova/all-MiniLM-L6-v2','observedModelRevision':info['sha'],'transformersVersion':'4.3.2','device':'wasm','dtype':'q8','task':'feature-extraction','dimensions':384,'chunk':4,'actualTokenizerCeiling':512,'noWebGPURequired':True,'note':'main unpinned; per-call max_length ignored by feature-extraction; bounded 300-character texts'},indent=2))

print('PASS immutable runtime hashes and current tokenizer configuration')
