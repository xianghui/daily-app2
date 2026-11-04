import assert from 'node:assert/strict';import fs from 'node:fs';import{init,generate,defaults,presets,kitData}from './src/geometry.js';
const {Manifold,Mesh}=await init();
// Independent 7-bit numeral truth table. Probe actual exported-section contours.
const masks=[0b0111111,0b0000110,0b1011011,0b1001111,0b1100110,0b1101101,0b1111101,0b0000111,0b1111111,0b1101111];
function inside(loops,x,y){let crossings=0;for(const pts of loops)for(let i=0,j=pts.length-1;i<pts.length;j=i++){const a=pts[i],b=pts[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])crossings++;}return crossings%2===1;}
const report=[];
for(const[label,p]of Object.entries({default:defaults,...presets})){const m=generate(p),q=kitData(p);let probes=0;for(let digit=0;digit<10;digit++){const part=m.parts[digit+2],solid=new Manifold(new Mesh({numProp:part.stride,vertProperties:new Float32Array(part.vertices),triVerts:new Uint32Array(part.indices)})),section=solid.slice(p.sheet-.2),loops=section.toPolygons(),origin=m.printOrigins[digit+1],scale=.8,w=2.7*scale,h=4.8*scale,t=.52*scale,xy=[[0,h/2-t/2],[w/2-t/2,h/4],[w/2-t/2,-h/4],[0,-h/2+t/2],[-w/2+t/2,-h/4],[-w/2+t/2,h/4],[0,0]];
for(let row=1;row<=9;row++){const product=row*digit,cy=q.rodH/2-2-(row-.5)*p.altitude;for(const[n,cx,dy]of[[Math.floor(product/10),-p.span*.23,p.altitude*.20],[product%10,p.span*.23,-p.altitude*.20]])for(let k=0;k<7;k++){const [x,y]=xy[k],material=inside(loops,origin[0]+cx+x,origin[1]+cy+dy+y);assert.equal(material,(masks[n]&(1<<k))===0,`${label} digit ${digit} row ${row} numeral ${n} segment ${k}`);probes++;}}
section.delete();solid.delete();}report.push({label,actualContourProbes:probes,products:90,splitDigits:180,allEngravingsMatchArithmetic:true});}
fs.writeFileSync('arithmetic-mesh-validation.json',JSON.stringify({report,physicalReadabilityTested:false},null,2));console.log('5040 actual-mesh segment probes verified all multiplication numerals across default and presets.');
