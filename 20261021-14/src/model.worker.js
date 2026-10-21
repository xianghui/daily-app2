import {init,generate} from './geometry';
import wasm from 'manifold-3d/manifold.wasm?url';
const ready=init({locateFile:()=>wasm});
onmessage=async({data})=>{try{await ready;postMessage({id:data.id,model:generate(data.p)});}catch(e){postMessage({id:data.id,error:e.message});}};
