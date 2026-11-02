import {init,generate} from './geometry';
import {parseSTL} from './imports';
import wasm from 'manifold-3d/manifold.wasm?url';
const ready=init({locateFile:()=>wasm});
onmessage=async({data})=>{try{await ready;if(data.type==='parse')postMessage({id:data.id,type:'parsed',mesh:parseSTL(data.buffer,data.axis)});else postMessage({id:data.id,model:generate(data.p,data.source,data.t),key:JSON.stringify([data.p,data.source,data.t])});}catch(e){postMessage({id:data.id,type:data.type==='parse'?'parsed':'model',error:e.message});}};
