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
 let cache;try{cache=await caches.open('sample-balance-runtime-v1')}catch{}
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
 model??=await pipeline('feature-extraction','Xenova/all-MiniLM-L6-v2',{device:'wasm',dtype:'q8',progress_callback:p=>self.postMessage({type:'progress',id:data.id,info:p})});
 const vectors=[];
 for(let i=0;i<data.texts.length;i+=4){const t=await model(data.texts.slice(i,i+4),{pooling:'mean',normalize:true,truncation:true,max_length:256});vectors.push(...t.tolist());self.postMessage({type:'batch',id:data.id,done:Math.min(i+4,data.texts.length),total:data.texts.length});}
 self.postMessage({type:'result',id:data.id,vectors});
 }catch(e){self.postMessage({type:'error',id:data.id,error:e.message+' Check internet for model downloads, enable WebAssembly SIMD, and retry. No content was uploaded.'});}};
