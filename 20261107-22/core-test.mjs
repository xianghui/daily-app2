import assert from 'node:assert/strict';import{parse,solve,checkCuts,artifact,chapters}from'./src/core.js';
for(let n=2;n<=9;n++)for(let k=1;k<=n;k++)for(let max=Math.ceil(n/k);max<=n;max++){
 const parts=Array.from({length:n},(_,i)=>'p'+i),vectors=parts.map((_,i)=>{const a=Array(384).fill(0);a[0]=Math.cos(i*.8);a[1]=Math.sin(i*.8);return a;});
 const plan=solve(parts,vectors,k,max);assert(checkCuts(parts,plan.cuts,k,max));let best=Infinity;function enumerate(cuts,start){if(cuts.length===k-1){if(checkCuts(parts,cuts,k,max))best=Math.min(best,cuts.reduce((s,x)=>s+plan.scores[x-1],0));return;}for(let i=start;i<n;i++)enumerate([...cuts,i],i+1);}enumerate([],1);assert(Math.abs(plan.cuts.reduce((s,x)=>s+plan.scores[x-1],0)-best)<1e-9);assert.deepEqual(chapters(parts,plan.cuts).flatMap(x=>x.paragraphs),parts);
}
assert.throws(()=>solve(['a','b'],[[1],[2]],1,2),/Malformed/);assert.throws(()=>parse('a\n\nb',1,1),/fit/);console.log('Exhaustive exact segmentation optimum + paragraph conservation passed, n=2..9, all feasible counts and lengths.');
