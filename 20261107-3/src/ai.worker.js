// Reuse the collection's byte-identical pinned ONNX Runtime binary; root deploy preserves this app.
const wasmAsset='/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';
import {MarianTokenizer,AutoModelForSeq2SeqLM,TranslationPipeline,env} from '@huggingface/transformers';
env.allowLocalModels=false;
env.backends.onnx.wasm.wasmPaths={mjs:import.meta.env.BASE_URL+'runtime/ort-wasm-simd-threaded.asyncify.mjs',wasm:new URL(wasmAsset,self.location.origin).href};
env.backends.onnx.wasm.numThreads=1;
let model;
async function cacheFactory(){
 const url=new URL(import.meta.env.BASE_URL+'runtime/ort-wasm-simd-threaded.asyncify.mjs',self.location.origin).href;
 // Importing directly relies on the HTTP cache, which is not guaranteed offline.
 // Explicitly bridge Cache API to a blob module for a reusable CPU factory.
 let cache;try{cache=await caches.open('notice-atelier-runtime-v1')}catch{}
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
 const modelId='Xenova/opus-mt-en-fr';
 const opts={revision:'28726206f80896b90035bd99cccd5cc1e151f916',device:'wasm',dtype:'q8',progress_callback:p=>self.postMessage({type:'progress',id:data.id,info:p})};
 // Explicit constructors avoid the generic registry's unpinned HEAD discovery on fresh offline workers.
 async function tokenizerJSON(file){
 const url='https://huggingface.co/'+modelId+'/resolve/'+opts.revision+'/'+file;
 let cache;try{cache=await caches.open('notice-atelier-tokenizer-v1')}catch{}
 let r=cache?await cache.match(url):null;
 if(!r){self.postMessage({type:'progress',id:data.id,info:{status:'Downloading tokenizer',file}});r=await fetch(url);if(!r.ok)throw Error('Tokenizer download failed: '+r.status);if(cache)await cache.put(url,r.clone());}
 return r.json();
 }
 const [vocab,config,weights]=await Promise.all([tokenizerJSON('tokenizer.json'),tokenizerJSON('tokenizer_config.json'),AutoModelForSeq2SeqLM.from_pretrained(modelId,opts)]);
 const tokenizer=new MarianTokenizer(vocab,config);
 model=new TranslationPipeline({task:'translation',tokenizer,model:weights});
 }
 const predictions=[];
 for(let i=0;i<data.texts.length;i++){
 if(model.tokenizer(data.texts[i]).input_ids.dims.at(-1)>192)throw Error('Source exceeds 192 model tokens. Shorten this notice.');
 const result=await model(data.texts[i],{max_new_tokens:192,num_beams:1,do_sample:false});
 predictions.push(result[0]);self.postMessage({type:'batch',id:data.id,done:i+1,total:data.texts.length});}
 self.postMessage({type:'result',id:data.id,predictions});
 }catch(e){self.postMessage({type:'error',id:data.id,error:e.message});}};
