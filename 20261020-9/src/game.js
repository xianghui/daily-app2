export const treats = [
 {name:'Strawberry', icon:'🍓', color:'#f8d4cf'},
 {name:'Croissant', icon:'🥐', color:'#f6e0af'},
 {name:'Grapes', icon:'🍇', color:'#e0d9ef'},
 {name:'Cheese', icon:'🧀', color:'#f5e8ad'},
];
export function makeRound(n) {
 const order=[0,1,2,3].sort(()=>Math.random()-.5);
 const you=order.map((_,i)=>[2,3,5,7][order[i]]);
 const guest=you.map(v=>9-v);
 // Change the guest's tastes each day, while keeping a meaningful conflict.
 if(n%2) { const i=order[0],j=order[1]; [guest[i],guest[j]]=[guest[j],guest[i]]; }
 const items=Array.from({length:8},(_,i)=>i<4?i:Math.floor(Math.random()*4)).sort(()=>Math.random()-.5);
 return {you,guest,items};
}
export function evaluate(round,mask) {
 let ya=0,yb=0,ga=0,gb=0;
 round.items.forEach((t,i)=>{if(mask&(1<<i)){ya+=round.you[t];ga+=round.guest[t]}else{yb+=round.you[t];gb+=round.guest[t]}});
 const takeA=ga>gb || (ga===gb && ya>=yb);
 return {ya,yb,ga,gb,takeA,points:takeA?yb:ya};
}
export function optimum(round) {let best=0;for(let mask=1;mask<255;mask++)best=Math.max(best,evaluate(round,mask).points);return best;}
