import assert from 'node:assert/strict';import fs from 'node:fs';import {examples,parse,suggest,texts,size,analyze,csv,bandCSV,markdown} from './src/core.js';
let seed=24116;const rand=n=>{seed=(1664525*seed+1013904223)>>>0;return seed%n};let cases=0;
// Independent rational BigInt oracle, with exact ceiling and exhaustive minimality check.
for(let i=0;i<3000;i++){
 const d=structuredClone(examples[i%2]);d.volume=1+rand(1000);d.targetMs=100+rand(3000);d.maxPanels=rand(300);
 d.panelSabinsMilli=Array.from({length:3},()=>1+rand(12000));
 const rows=d.records.map(r=>({...r,area:1+rand(100),alphaMilli:Array.from({length:3},()=>rand(1001))}));
 const a=size(d,rows);const A=[0,1,2].map(j=>rows.reduce((v,r)=>v+BigInt(r.area)*BigInt(r.alphaMilli[j]),0n));
 const N=161000n*BigInt(d.volume),T=BigInt(d.targetMs);const needs=A.map((v,j)=>{const gap=N-T*v,den=T*BigInt(d.panelSabinsMilli[j]);return gap<=0n?0:Number((gap+den-1n)/den)});
 const needed=Math.max(...needs);assert.equal(a.requiredPanels,needed);assert.equal(a.baselinePanels,needs[1]);assert.equal(a.appliedPanels,Math.min(needed,d.maxPanels));assert.equal(a.feasible,needed<=d.maxPanels);
 const ok=n=>A.every((v,j)=>T*(v+BigInt(n)*BigInt(d.panelSabinsMilli[j]))>=N);
 assert(ok(needed));if(needed>0)assert(!ok(needed-1));assert.equal(a.bandResults.every(b=>b.afterPass),a.feasible);
 a.bandResults.forEach((b,j)=>{assert.equal(b.absorption,Number(A[j])/1000);if(A[j]>0n)assert(Math.abs(b.beforeSeconds-.161*d.volume/(Number(A[j])/1000))<1e-8)});cases++;
}
for(const ex of examples){const d=parse(JSON.stringify(ex)),rows=d.records.map((r,i)=>({...r,item:d.catalog[i].id,proposed:d.catalog[i].id,alphaMilli:d.catalog[i].alphaMilli,decision:'approve',note:''}));const a=analyze(d,rows);assert(a.released);assert.deepEqual(parse(JSON.stringify(a)),d);assert(a.baselineMisses>=1);rows[0].decision='hold';assert.equal(analyze(d,rows).released,false);rows[0].decision='pending';assert.throws(()=>analyze(d,rows));}
const d=structuredClone(examples[0]);d.maxPanels=0;const zero=d.records.map(r=>({...r,alphaMilli:[0,0,0]}));assert(size(d,zero).bandResults.every(b=>b.beforeSeconds===null&&b.afterSeconds===null));
for(const mutate of[d=>d.catalog[0].alphaMilli=[0,0],d=>d.records.push({...d.records[0]}),d=>d.panelSabinsMilli=[0,1,1],d=>d.volume=0,d=>d.targetMs=NaN,d=>d.records[0].area=1.5,d=>d.catalog[0]=null,d=>d.records=Array(25).fill(d.records[0])]){const x=structuredClone(examples[0]);mutate(x);assert.throws(()=>parse(JSON.stringify(x)))}
for(const v of[[],[[NaN]],Array(texts(d).length).fill(Array(384).fill(0))])assert.throws(()=>suggest(d,v));
fs.writeFileSync('core-validation.json',JSON.stringify({independentBigIntCases:cases,minimalCountAndCapacity:true,zeroAbsorptionNullNotInfinity:true,strictSchemasAndMalformedVectors:true},null,2));console.log('PASS',cases,'independent exact sizing cases, schema/hold/zero guards');
