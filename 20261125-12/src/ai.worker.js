import {pipeline,env} from '@huggingface/transformers';
env.allowLocalModels=false;
env.backends.onnx.wasm.numThreads=1;
const assets={mjs:'/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs',wasm:'/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm'};
async function runtime(){const cache=await caches.open('clip-scribe-runtime-v1');for(const[k,path]of Object.entries(assets)){const url=new URL(path,self.location.origin).href;let r=await cache.match(url);if(!r){r=await fetch(url);if(!r.ok)throw Error('Runtime download failed: '+k);await cache.put(url,r.clone())}assets[k]=URL.createObjectURL(await r.blob())}env.backends.onnx.wasm.wasmPaths=assets}
self.onmessage=async({data:d})=>{try{
 if(!self.WebAssembly)throw Error('WebAssembly is required');
 await runtime();
 const model=await pipeline('automatic-speech-recognition','Xenova/whisper-tiny.en',{device:'wasm',dtype:'q8',progress_callback:info=>self.postMessage({id:d.id,type:'progress',info})});
 const results=[];for(let i=0;i<d.clips.length;i++){const audio=d.clips[i];if(!(audio instanceof Float32Array)||audio.length<1600||audio.length>320000||!audio.every(Number.isFinite))throw Error('Invalid bounded audio');
 const r=await model(audio,{max_new_tokens:128,do_sample:false,return_timestamps:false});
 if(!r||typeof r.text!=='string'||r.text.length>4000)throw Error('Malformed model transcript');
 results.push(r.text.trim());self.postMessage({id:d.id,type:'batch',done:i+1,total:d.clips.length})}
 self.postMessage({id:d.id,type:'result',results});
}catch(e){self.postMessage({id:d.id,type:'error',error:e.message})}};
