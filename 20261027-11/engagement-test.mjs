import assert from 'node:assert/strict';
import fs from 'node:fs';
import{init,generate,defaults,presets,placements}from'./src/geometry.js';
const{Manifold:M,Mesh}=await init();const report={};
for(const[label,p]of Object.entries({default:defaults,...presets,minimum:{...defaults,length:12,span:4,gap:.5,corner:.6},maximum:{...defaults,length:14,span:6,gap:.3,corner:1.2}})){
 const m=generate(p),all=[],K=x=>(all.push(x),x),ss=m.parts.map(p=>K(new M(new Mesh({numProp:p.stride,vertProperties:new Float32Array(p.vertices),triVerts:new Uint32Array(p.indices)}))));
 const pose=(i,a,f)=>{const t=placements(m,f)[i];return K(K(ss[i].rotate([0,0,(t.angle+a)*180/Math.PI])).translate(t.pos));};
 try{let contact=Infinity;for(let j=0;j<12;j++)for(const [a,b]of[[1,2],[2,3]])for(const sign of[-1,1]){const v=Math.abs(K(pose(a,sign*.065,j/12).intersect(pose(b,0,j/12))).volume());assert(v>.001,'actual opposed flank engagement '+label+' stage '+a+' phase '+j+' volume '+v);contact=Math.min(contact,v);}
 report[label]={twoStageFlankContactBothDirections:true,phases:12,minimumDeliberateBlockedRotationIntersectionMm3:contact,axialGap:p.corner,ratio:4,physicalPrintTested:false};
 }finally{for(const s of new Set(all.reverse()))s.delete();}
}
fs.writeFileSync('engagement-validation.json',JSON.stringify(report,null,2));console.log('Two-stage positive tooth engagement and reverse engagement passed');
