import {defineConfig} from 'vite';import react from '@vitejs/plugin-react';
// The root publishing contract preserves the earlier app and its immutable, identical runtime.
const name='ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm';
const own='/daily-app2/20261113-10/assets/'+name,shared='/daily-app2/20261107-2/assets/'+name;
export default defineConfig({plugins:[react(),{name:'reuse-collection-wasm',generateBundle(_options,bundle){
 for(const [key,item] of Object.entries(bundle)){
  if(key==='assets/'+name){delete bundle[key];continue;}
  if(item.type==='chunk')item.code=item.code.replaceAll(own,shared);
  else if(key.endsWith('.js')&&typeof item.source==='string')item.source=item.source.replaceAll(own,shared);
 }
}}],base:'/daily-app2/20261113-10/'});
