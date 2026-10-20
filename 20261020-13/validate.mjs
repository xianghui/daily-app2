import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {defaults,fields,validate,generate,binarySTL} from './src/geometry.js';
export function checkSTL(buffer,p){
 const b=Buffer.from(buffer),n=b.readUInt32LE(80);assert(n>0);assert.equal(b.length,84+50*n);
 let volume=0;const edges=new Map(),min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
 for(let i=0;i<n;i++){
 const vertices=Array.from({length:3},(_,j)=>Array.from({length:3},(_,k)=>b.readFloatLE(84+50*i+12+12*j+4*k)));
 for(const v of vertices)for(let k=0;k<3;k++){assert(Number.isFinite(v[k]));min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}
 const [a,c,d]=vertices,u=c.map((x,k)=>x-a[k]),v=d.map((x,k)=>x-a[k]),cross=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
 assert(Math.hypot(...cross)>1e-7,'degenerate face');
 const normal=[0,1,2].map(k=>b.readFloatLE(84+50*i+4*k));assert(normal.reduce((s,x,k)=>s+x*cross[k],0)>0,'normal agrees with winding');
 volume+=(a[0]*(c[1]*d[2]-c[2]*d[1])+a[1]*(c[2]*d[0]-c[0]*d[2])+a[2]*(c[0]*d[1]-c[1]*d[0]))/6;
 const keys=vertices.map(v=>v.map(x=>Math.round(x/1e-5)).join(','));
 for(let j=0;j<3;j++){const x=keys[j],y=keys[(j+1)%3];assert.notEqual(x,y);const key=[x,y].sort().join('|'),entry=edges.get(key)||[0,0];entry[0]++;entry[1]+=x<y?1:-1;edges.set(key,entry);}
 }
 for(const [n,direction] of edges.values()){assert.equal(n,2,'closed manifold');assert.equal(direction,0,'consistent winding');}
 assert(volume>0,'positive volume');for(let k=0;k<3;k++){assert(Math.abs(min[k])<1e-4);assert(Math.abs(max[k]-[p.length,p.width,p.height][k])<1e-4,'expected mm bounds');}
 const analytic=p.width*(p.length*(p.toe+p.height)/2-(p.grooves?p.length*.65*.25*p.depth:0));assert(Math.abs(volume-analytic)<analytic*1e-5,'exact extrusion volume; no hidden faces');
 return {triangles:n,volumeMM3:volume,bounds:max,edges:edges.size};
}
if(process.argv[1]?.endsWith('validate.mjs')){
 let valid=0,blocked=0;
 for(let mask=0;mask<64;mask++){
 const p=Object.fromEntries(fields.map(([key,,min,max],i)=>[key,mask&(1<<i)?max:min]));
 if(validate(p)){blocked++;assert.throws(()=>generate(p));continue;}const g=generate(p);checkSTL(binarySTL(g),p);g.dispose();valid++;
 }
 for(const p of [defaults,{...defaults,grooves:0},{...defaults,length:NaN},{...defaults,width:0},{...defaults,grooves:1.5}]){if(validate(p)){assert.throws(()=>generate(p));blocked++;}else{checkSTL(binarySTL(generate(p)),p);valid++;}}
 const result={validCombinations:valid,blockedCombinations:blocked,default:checkSTL(binarySTL(generate(defaults)),defaults)};writeFileSync('geometry-validation.json',JSON.stringify(result,null,2));console.log(result);
}
