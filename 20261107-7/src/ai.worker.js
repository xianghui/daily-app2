import wasmAsset from '../node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.asyncify.wasm?url';
import {pipeline,env} from '@huggingface/transformers';
env.allowLocalModels=false;
env.backends.onnx.wasm.wasmPaths={mjs:import.meta.env.BASE_URL+'runtime/ort-wasm-simd-threaded.asyncify.mjs',wasm:new URL(wasmAsset,self.location.origin).href};
env.backends.onnx.wasm.numThreads=1;
let model;
async function cacheFactory(){
 const url=new URL(import.meta.env.BASE_URL+'runtime/ort-wasm-simd-threaded.asyncify.mjs',self.location.origin).href;
 // Importing directly relies on the HTTP cache, which is not guaranteed offline.
 // Explicitly bridge Cache API to a blob module for a reusable CPU factory.
 let cache;try{cache=await caches.open('veil-desk-runtime-v1')}catch{}
 let response=cache?await cache.match(url):null;
 if(!response){response=await fetch(url);if(!response.ok)throw Error('Could not download the local WASM factory.');if(cache)await cache.put(url,response.clone());}
 env.backends.onnx.wasm.wasmPaths.mjs=URL.createObjectURL(new Blob([await response.text()],{type:'text/javascript'}));
 const wasmUrl=env.backends.onnx.wasm.wasmPaths.wasm;
 let wasm=cache?await cache.match(wasmUrl):null;
 if(!wasm){wasm=await fetch(wasmUrl);if(!wasm.ok)throw Error('Could not download local WASM binary.');if(cache)await cache.put(wasmUrl,wasm.clone());}
 env.backends.onnx.wasm.wasmPaths.wasm=URL.createObjectURL(await wasm.blob());
}
self.onmessage=async({data})=>{try{
 if(!self.WebAssembly)throw Error('WebAssembly is required. Use a current desktop browser.');
 if(!model)await cacheFactory();
 model??=await pipeline('token-classification','Xenova/bert-base-NER',{device:'wasm',dtype:'q8',progress_callback:p=>self.postMessage({type:'progress',id:data.id,info:p})});
 const predictions=[];
 for(let i=0;i<data.texts.length;i++){
  predictions.push(await model(data.texts[i],{ignore_labels:[],aggregation_strategy:'none'}));
  self.postMessage({type:'batch',id:data.id,done:i+1,total:data.texts.length});
 }
 self.postMessage({type:'result',id:data.id,predictions});
 }catch(e){self.postMessage({type:'error',id:data.id,error:e.message});}};
