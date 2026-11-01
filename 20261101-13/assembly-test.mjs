import fs from 'node:fs';import assert from 'node:assert/strict';import{init,generate,defaults,transformDefaults,binarySTL}from'./src/geometry.js';import{checkModel}from'./validate.mjs';
const api=await init(),{Manifold:M,Mesh}=api;
const n=20,pixels=Array.from({length:n*n},(_,i)=>{const d=Math.hypot(i%n-9.5,Math.floor(i/n)-9.5);return d>3&&d<7?0:255;}),source={kind:'image',pixels,n,mode:'threshold',threshold:130,depth:.6,style:'engraved'},model=generate(defaults,source),part=model.parts[3];
const rib=new M(new Mesh({numProp:part.stride,vertProperties:new Float32Array(part.vertices),triVerts:new Uint32Array(part.indices)}));
function sample(x,y,z){const d=.04,q=M.cube([d,d,d]).translate([model.W/2+model.markX+x-d/2,model.markY+y-d/2,z-d/2]),hit=rib.intersect(q),fraction=hit.volume()/(d*d*d);q.delete();hit.delete();return fraction;}
assert(sample(0,0,model.S-.2)>.999,'Bright centre hole must stay unengraved');assert(sample(5*6/19,0,model.S-.2)<.001,'Dark ring must cut actual solid');assert(sample(5*6/19,0,model.S-.7)>.999,'Engraving must preserve continuous backing');rib.delete();
const result=await checkModel(model,'ring-hole-probe');
for(const p of[{...defaults,width:144,reach:62,spacing:4},{...defaults,length:154,height:36,port:10,spacing:4}])assert.throws(()=>generate(p),/Card too (narrow|short)/);
// Both image and mesh transforms may exceed the protected engraving radius even when each scalar is in range.
assert.throws(()=>generate(defaults,source,{...transformDefaults,size:7,rotation:45,x:1.5,y:2}),/engraving zone/);
const report={...result,actualBrightHolePreserved:true,darkRingSubtracted:true,backingProbe:true,narrowAndShortPackingRejected:true,transformedArtOutsideSafeZoneRejected:true,physicalPrintTested:false};fs.writeFileSync('assembly-validation.json',JSON.stringify(report,null,2));console.log('Hole, backing, protected-zone and incompatible packing checks passed.');
