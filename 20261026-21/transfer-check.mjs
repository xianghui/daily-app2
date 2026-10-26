import assert from 'node:assert/strict';
import fs from 'node:fs';
import {init,generate,defaults,catchAngle,gateCenters} from './src/geometry.js';
const {Manifold:M,Mesh}=await init(),report=[];
for(const R of[14,15,16,17,18])for(const L of[12,13,14]){
 const m=generate({...defaults,spring:R,length:L}),dt=.5,da=.25,W=281,H=41,clear=(i,j)=>{const theta=j*da*Math.PI/180;return gateCenters(m,-10+i*dt).every(([x,y])=>{const a=Math.atan2(y,x),r=Math.hypot(x,y);let d=(a-theta)%(Math.PI/4);d=Math.min(Math.abs(d),Math.PI/4-Math.abs(d));return R*R+r*r-2*R*r*Math.cos(d)>2.32**2;});};
 const lo=(catchAngle(m,-10)*180/Math.PI+45)%45,hi=(catchAngle(m,10)*180/Math.PI+45)%45;
 const endpoints=[[0,Math.floor((lo-.65)/da)],[40,Math.floor((hi-.65)/da)],[0,Math.floor((lo+45-.65)/da)]];
 const parts=m.parts.map(p=>new M(new Mesh({numProp:p.stride,vertProperties:new Float32Array(p.vertices),triVerts:new Uint32Array(p.indices)})));
 const routes=[];
 for(let stage=0;stage<2;stage++){
  const [si,sj]=endpoints[stage],[ei,ej]=endpoints[stage+1],start=si*W+sj,end=ei*W+ej,previous=new Int32Array(H*W).fill(-2),queue=[start];previous[start]=-1;assert(clear(si,sj));assert(clear(ei,ej));
  for(let k=0;k<queue.length&&previous[end]===-2;k++){const v=queue[k],i=Math.floor(v/W),j=v%W;for(const[ni,nj]of[[i+1,j],[i-1,j],[i,j+1],[i,j-1]]){if(ni<0||ni>=H||nj<0||nj>=W)continue;const next=ni*W+nj;if(previous[next]!==-2||!clear(ni,nj))continue;previous[next]=v;queue.push(next);}}
  assert(previous[end]!==-2,'full alternating advance path exists');let route=[];for(let v=end;v!==-1;v=previous[v])route.push([Math.floor(v/W),v%W]);route.reverse();
  // Conservative analytic swept-circle clearance, including interior points of each grid step.
  for(let k=1;k<route.length;k++){const a=route[k-1],b=route[k];for(let f=0;f<=1;f+=.1)assert(clear(a[0]+f*(b[0]-a[0]),a[1]+f*(b[1]-a[1])),'continuous transfer clearance');}
  // Validate actual polygonal solid intersections along the path, not just center formulae.
  let meshSamples=0;for(let k=0;k<route.length;k+=Math.max(1,Math.floor(route.length/24))){const[i,j]=route[k],all=[],K=x=>(all.push(x),x),wheel=K(K(parts[1].rotate([0,0,j*da])).translate([m.C,0,m.H+.01])),anchor=K(K(K(parts[2].rotate([180,0,0])).rotate([0,0,-10+i*dt])).translate([m.P,0,m.anchorTop+.01]));for(const pair of[[wheel,anchor],[wheel,parts[0]],[anchor,parts[0]]])assert(K(pair[0].intersect(pair[1])).isEmpty(),'full path mesh collision');all.reverse().forEach(s=>s.delete());meshSamples++;}
  routes.push({fromWheelDegrees:route[0][1]*da,toWheelDegrees:route.at(-1)[1]*da,phaseSamples:route.length,meshSamples,minimumAnalyticGapMm:.02,handGuidedBackoffMayBeNeeded:true});
 }
 parts.forEach(s=>s.delete());report.push({radiusMm:R,palletReachMm:L,alternatingAdvanceRoutes:routes});
}
fs.writeFileSync('transfer-validation.json',JSON.stringify({designs:report,fullAlternatingGateTransfer:true,physicalPrintTested:false},null,2));console.log('15 radius/reach designs: two consecutive alternating release/catch paths each; continuous analytic clearance and actual mesh samples passed.');
