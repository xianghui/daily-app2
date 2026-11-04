import fs from 'node:fs';import assert from 'node:assert/strict';import{init,generate,defaults,binarySTL,transformDefaults,kitData}from'./src/geometry.js';import{checkSTL,collisionCheck}from'./validate.mjs';
const{Manifold:M,Mesh}=await init();const records=[];
function probe(m,x,y,z){const part=m.parts[1],solid=new M(new Mesh({numProp:part.stride,vertProperties:new Float32Array(part.vertices),triVerts:new Uint32Array(part.indices)})),tool=M.cube([.08,.08,.08]).translate([x-.04+m.printOrigins[0][0],y-.04+m.printOrigins[0][1],z-.04]),cut=solid.intersect(tool);const v=cut.volume();[solid,tool,cut].forEach(s=>s.delete());return v;}
const ring=JSON.parse(fs.readFileSync('evidence/browser-ring.design.json'));const m=generate(ring.p,ring.source,ring.t),y=kitData(ring.p).artY;
// The white interior of the actual browser-rasterized ring must retain floor to the top;
// a dark arc must remove material near the floor top, not just alter a texture.
const center=probe(m,0,y,.15),arc=probe(m,2,y,.15);assert(center>.0004,'bright image hole remains backed');assert(arc<1e-6,'dark ring really engraves');records.push({case:'actual browser ring SVG',centerSolidVolume:center,arcSolidVolume:arc,assembly:await collisionCheck(m),mesh:checkSTL(binarySTL(m),m)});
for(const mode of['threshold','relief']){const n=20,pixels=Array.from({length:n*n},(_,i)=>i%n>5&&i%n<14&&Math.floor(i/n)>5&&Math.floor(i/n)<14?20:255),model=generate(defaults,{kind:'image',n,pixels,mode,threshold:130,depth:.6,style:'engraved'},transformDefaults);records.push({case:mode+' backing probe',mesh:checkSTL(binarySTL(model),model),assembly:await collisionCheck(model)});}
// A valid but too-small card is explicitly rejected; no clipped/shrunken layout.
assert.throws(()=>generate({...defaults,width:200,length:240,chamber:70,reach:60,height:90,sheet:2.4,spacing:5}),/Card too small/);
fs.writeFileSync('extra-validation.json',JSON.stringify({actualImageHolePreserved:true,actualDarkArcCut:true,impossiblePackingRejected:true,physicalPrintTested:false,records},null,2));console.log('Actual SVG hole/backing and dark-arc boolean probes passed.');
