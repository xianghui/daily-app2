import fs from 'node:fs';import assert from 'node:assert/strict';import{init,generate,defaults,transformDefaults,binarySTL,placements}from'./src/geometry.js';import{checkModel}from'./validate.mjs';
const api=await init(),{Manifold:M,Mesh}=api,n=20;
const pixels=Array.from({length:n*n},(_,i)=>{const r=Math.hypot(i%n-9.5,Math.floor(i/n)-9.5);return r>4&&r<8?0:255;});
const source={kind:'image',pixels,n,mode:'threshold',threshold:130,depth:.5,style:'engraved'},m=generate(defaults,source),p=m.parts[1],solid=new M(new Mesh({numProp:p.stride,vertProperties:new Float32Array(p.vertices),triVerts:new Uint32Array(p.indices)}));
const origin=m.printOrigins[0];function volumeAt(x,y,z){const a=M.cube([.05,.05,.05]),b=a.translate([origin[0]+x-.025,origin[1]+y-.025,z-.025]),c=solid.intersect(b),v=c.volume();[a,b,c].forEach(q=>q.delete());return v;}
assert(volumeAt(0,0,m.S-.2)>.00012,'Bright center hole preserves original full-thickness sole');assert(volumeAt(1.9,0,m.S-.2)<1e-8,'Dark ring is truly engraved');assert(volumeAt(1.9,0,.5)>.00012,'Ring engraving preserves continuous backing');solid.delete();
const report={ringModel:await checkModel(m,'ring-hole-probe'),probes:{brightHoleRetainsTop:true,darkRingRemovesMaterial:true,continuousBacking:true},dynamicArtworkKeepOut:[]};
assert.throws(()=>generate(defaults,source,{...transformDefaults,size:7,x:1.5,y:2,rotation:45}),/engraving zone/);
fs.writeFileSync('personalization-validation.json',JSON.stringify(report,null,2));console.log('Actual ring hole/backing probes and protected sole keep-in passed.');
