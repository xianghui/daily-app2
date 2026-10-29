import assert from'node:assert/strict';import fs from'node:fs';import{init,generate,defaults,fields,transformDefaults,binarySTL,fingerprint}from'./src/geometry.js';import{parseSTL}from'./src/imports.js';import{collisionCheck,checkSTL}from'./validate.mjs';
const{Manifold:M,Mesh}=await init(),report={mixed:[]};
const convert=s=>{const m=s.getMesh();return binarySTL({parts:[{vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp}],layout:[[0,0,0]]})};
const a=M.cube([10,10,3]),b=M.cube([7,7,5]).translate([4,4,-1]),c=a.subtract(b);const concave=convert(c);fs.writeFileSync('/tmp/tunnelsight-concave.stl',Buffer.from(concave));assert.throws(()=>parseSTL(concave),/concave/);report.concaveRejected=true;
for(const style of['raised','engraved']){const src={kind:'image',n:20,pixels:Array.from({length:400},(_,i)=>{const x=i%20,y=Math.floor(i/20),r=Math.hypot(x-9.5,y-9.5);return r>4&&r<8?0:255}),mode:'threshold',threshold:130,depth:style==='engraved'?.6:1.5,style};
const m=generate(defaults,src,transformDefaults),part=m.parts[1],solid=new M(new Mesh({numProp:part.stride,vertProperties:new Float32Array(part.vertices),triVerts:new Uint32Array(part.indices)}));const o=m.printOrigins[0];
const probe=(x,y,z)=>{const q=M.cube([.08,.08,.08]).translate([x+o[0]-.04,y+m.markY+o[1]-.04,z-.04]),t=solid.intersect(q),v=t.volume();q.delete();t.delete();return v;};
if(style==='raised'){assert(probe(0,0,m.H+.4)<1e-8,'ring hole remains unraised');assert(probe(1.9,0,m.H+.4)>.0004,'ring band raised');}
else{assert(probe(0,0,m.H-.4)>.0004,'ring hole remains unengraved');assert(probe(1.9,0,m.H-.4)<1e-8,'band engraved');assert(probe(1.9,0,.5)>.0004,'continuous backing preserved');}
report[style+'RingHolePreserved']=true;solid.delete();}
for(let i=0;i<16;i++){const p={...defaults,...Object.fromEntries(fields.map(([k,,lo,hi,step],j)=>[k,+(lo+Math.round(((hi-lo)/step)*((i*7+j*3)%17)/16)*step).toFixed(3)])),width:250,length:200,shape:['round','hex','oval'][i%3]},m=generate(p);report.mixed.push({signature:fingerprint(binarySTL(m)),mesh:checkSTL(binarySTL(m),m),assembly:await collisionCheck(m,12)});}
assert.throws(()=>generate({...defaults,width:214,length:160,span:66,spacing:7}),/Card width/);report.insufficientCardRejected=true;
for(const q of[a,b,c])q.delete();fs.writeFileSync('extra-validation.json',JSON.stringify(report,null,2));console.log('Ring-hole raised/engraved probes, concave input rejection, 16 mixed configurations and insufficient-card rejection passed.');
