import assert from'node:assert/strict';import fs from'node:fs';import{init,generate,defaults,transformDefaults,binarySTL,tilePolygons}from'./src/geometry.js';import{parseSTL}from'./src/imports.js';import{collisionCheck,checkSTL}from'./validate.mjs';
const{Manifold:M,Mesh}=await init();const report={};
// Independently verify the ideal seven-piece tessellation before clearance offsets.
const areas=tilePolygons.map(poly=>Math.abs(poly.reduce((v,a,i)=>{const b=poly[(i+1)%poly.length];return v+a[0]*b[1]-a[1]*b[0];},0))/2);
assert.deepEqual(areas,[.25,.25,.125,.125,.0625,.0625,.125]);
const {CrossSection}=await init();const sections=tilePolygons.map(poly=>new CrossSection([poly],'EvenOdd'));
let union=sections[0];const intermediates=[];for(let i=1;i<sections.length;i++){union=union.add(sections[i]);intermediates.push(union);}
assert(Math.abs(union.area()-1)<1e-8,'ideal tiles cover exactly the full square');
for(let i=0;i<sections.length;i++)for(let j=0;j<i;j++){const both=sections[i].intersect(sections[j]);assert(Math.abs(both.area())<1e-8,'ideal polygons do not overlap');both.delete();}
for(const q of [...sections,...intermediates])q.delete();report.idealTileAreas=areas;report.exactUnitSquareTessellation=true;

const convert=s=>{const m=s.getMesh();return binarySTL({parts:[{vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp}],layout:[[0,0,0]]})};
const a=M.cube([10,10,3]),b=M.cube([7,7,5]).translate([4,4,-1]),c=a.subtract(b);const concave=convert(c);fs.writeFileSync('/tmp/tangramtuck-concave.stl',Buffer.from(concave));assert.throws(()=>parseSTL(concave),/concave/);report.concaveRejected=true;
const src={kind:'image',n:20,pixels:Array.from({length:400},(_,i)=>{const x=i%20,y=Math.floor(i/20),r=Math.hypot(x-9.5,y-9.5);return r>4&&r<8?0:255}),mode:'threshold',threshold:130,depth:1.5};
const model=generate(defaults,src,transformDefaults),part=model.parts[1],solid=new M(new Mesh({numProp:part.stride,vertProperties:new Float32Array(part.vertices),triVerts:new Uint32Array(part.indices)}));
const probe=(x,y,z)=>{const q=M.cube([.08,.08,.08]).translate([x-.04,y-.04,z-.04]),t=solid.intersect(q),v=t.volume();q.delete();t.delete();return v;};
assert(probe(model.markX,model.markY,model.H+.4)<1e-8,'ring hole remains unraised');assert(probe(model.markX+1.9,model.markY,model.H+.4)>.0004,'ring raised band exists');report.imageRingHolePreserved=true;report.imageMesh=checkSTL(binarySTL(model),model);report.assembly=await collisionCheck(model,10);
// Explicitly preserve a sloping imported source, not a hull or generic substituted primitive.
const raw=fs.readFileSync('public/samples/wedge-ascii.stl'),mesh=parseSTL(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.byteLength));const imported=generate(defaults,{kind:'stl',mesh,confirmed:true},transformDefaults);report.importedMesh=checkSTL(binarySTL(imported),imported);report.importedAssembly=await collisionCheck(imported,10);
for(const q of[a,b,c,solid])q.delete();fs.writeFileSync('extra-validation.json',JSON.stringify(report,null,2));console.log('Concavity rejection, real ring-hole probes, source integration and assembly checks passed.');
