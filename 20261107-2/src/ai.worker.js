import wasmAsset from '../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm?url';
import {DistilBertTokenizer,AutoModelForSequenceClassification,TextClassificationPipeline,env} from '@huggingface/transformers';
env.allowLocalModels=false;
env.backends.onnx.wasm.wasmPaths={mjs:import.meta.env.BASE_URL+'runtime/ort-wasm-simd-threaded.asyncify.mjs',wasm:new URL(wasmAsset,self.location.origin).href};
env.backends.onnx.wasm.numThreads=1;
let model;
async function cacheFactory(){
 const url=new URL(import.meta.env.BASE_URL+'runtime/ort-wasm-simd-threaded.asyncify.mjs',self.location.origin).href;
 // Importing directly relies on the HTTP cache, which is not guaranteed offline.
 // Explicitly bridge Cache API to a blob module for a reusable CPU factory.
 let cache;try{cache=await caches.open('pulse-ledger-runtime-v1')}catch{}
 let response=cache?await cache.match(url):null;
 if(!response){response=await fetch(url);if(!response.ok)throw Error('Could not download the local WASM factory.');if(cache)await cache.put(url,response.clone());}
 env.backends.onnx.wasm.wasmPaths.mjs=URL.createObjectURL(new Blob([await response.text()],{type:'text/javascript'}));
 const wasmUrl=env.backends.onnx.wasm.wasmPaths.wasm;
 let wasm=cache?await cache.match(wasmUrl):null;
 if(!wasm){wasm=await fetch(wasmUrl);if(!wasm.ok)throw Error('Could not download local WASM binary.');if(cache)await cache.put(wasmUrl,wasm.clone());}
 env.backends.onnx.wasm.wasmPaths.wasm=URL.createObjectURL(await wasm.blob());
}
self.onmessage=async({data})=>{try{
 if(!self.WebAssembly)throw Error('WebAssembly is required. Use current Chrome, Edge, Firefox or Safari with WASM enabled.');
 if(!model)await cacheFactory();
 if(!model){
 const modelId='Xenova/distilbert-base-uncased-finetuned-sst-2-english';
 const opts={revision:'0b6928efcb76139cae2c6881d49cda67fe119f42',device:'wasm',dtype:'q8',progress_callback:p=>self.postMessage({type:'progress',id:data.id,info:p})};
 // Explicit constructors avoid the generic registry's unpinned HEAD discovery on fresh offline workers.
 async function tokenizerJSON(file){
 const url='https://huggingface.co/'+modelId+'/resolve/'+opts.revision+'/'+file;
 let cache;try{cache=await caches.open('pulse-ledger-tokenizer-v1')}catch{}
 let r=cache?await cache.match(url):null;
 if(!r){self.postMessage({type:'progress',id:data.id,info:{status:'Downloading tokenizer',file}});r=await fetch(url);if(!r.ok)throw Error('Tokenizer download failed: '+r.status);if(cache)await cache.put(url,r.clone());}
 return r.json();
 }
 const [vocab,config,weights]=await Promise.all([tokenizerJSON('tokenizer.json'),tokenizerJSON('tokenizer_config.json'),AutoModelForSequenceClassification.from_pretrained(modelId,opts)]);
 const tokenizer=new DistilBertTokenizer(vocab,config);
 model=new TextClassificationPipeline({task:'sentiment-analysis',tokenizer,model:weights});
 }
 const predictions=[];
 for(let i=0;i<data.texts.length;i+=4){const result=await model(data.texts.slice(i,i+4),{top_k:null,truncation:true,max_length:256});predictions.push(...result);self.postMessage({type:'batch',id:data.id,done:Math.min(i+4,data.texts.length),total:data.texts.length});}
 self.postMessage({type:'result',id:data.id,predictions});
 }catch(e){self.postMessage({type:'error',id:data.id,error:e.message});}};
