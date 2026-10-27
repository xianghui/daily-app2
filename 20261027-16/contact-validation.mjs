import assert from 'node:assert/strict';import fs from 'node:fs';import * as G from './src/geometry.js';
const api=await G.init(),report={cases:[],description:'Undeformed external silicone tube is a test-only contact probe, never printable output or a force/deformation simulation.'};
for(const [label,p]of Object.entries(G.presets)){
const m=G.generate(p),objects=[],K=x=>(objects.push(x),x);try{
const part=m.parts[1],rotor=K(new api.Manifold(new api.Mesh({numProp:part.stride,vertProperties:new Float32Array(part.vertices),triVerts:new Uint32Array(part.indices)})));
// A short, hollow, 4 OD / 2 ID mm tube segment at the back of the C wall.
const outer=K(api.CrossSection.circle(2,48)),inner=K(api.CrossSection.circle(1,48)),section=K(K(outer.subtract(inner)).translate([m.inner-2,0])),tube=K(K(K(section.revolve(288,8)).rotate([0,0,176])).translate([m.C,0,m.H+2]));
const volumeAt=degrees=>{const r=K(K(rotor.rotate([0,0,degrees])).translate([m.C,0,m.H+p.gap]));return Math.abs(K(r.intersect(tube)).volume())};
const contact=[60,180,300].map(volumeAt),released=[0,120,240].map(volumeAt);contact.forEach(v=>assert(v>.01,'rounded lobe must actually contact undeformed tube shell'));released.forEach(v=>assert(v<1e-7,'tube segment releases between successive lobes'));
const radii=[];for(let i=0;i<part.vertices.length;i+=part.stride)radii.push(Math.hypot(part.vertices[i],part.vertices[i+1]));assert(Math.abs(Math.max(...radii)-(p.length+3.5))<1e-4,'actual exported lobe reach matches radial fit equation');
report.cases.push({label,contactVolumesMm3:contact,releasedVolumesMm3:released,pulsesPerRevolution:3,actualLobeRadiusMm:Math.max(...radii),physicalTest:false});
}finally{for(const x of new Set(objects.reverse()))x.delete();}}
fs.writeFileSync('contact-validation.json',JSON.stringify(report,null,2));console.log('Three actual lobe/tube-shell contacts and three intervening releases per revolution verified for all presets.');
