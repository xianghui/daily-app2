export const rotate = (a, turns=1) => {
  let b=[...a];
  for(let t=0;t<((turns%4)+4)%4;t++) b=b.map((_,i)=>b[(3-i%4)*4+Math.floor(i/4)]);
  return b;
};
export const blend=(a,b)=>a.map((v,i)=>v+2*b[i]);
export const same=(a,b)=>a.every((v,i)=>v===b[i]);
export function makePuzzle(round,random=Math.random){
  const shape=()=>{const a=Array(16).fill(0);while(a.reduce((s,v)=>s+v,0)<Math.min(5+Math.floor(round/3),8))a[Math.floor(random()*16)]=1;return a;};
  const a=shape(),b=shape();
  const target=blend(rotate(a,1+Math.floor(random()*3)),rotate(b,1+Math.floor(random()*3)));
  if(same(blend(a,b),target)) return makePuzzle(round,random);
  return {a,b,target};
}
export function solution(p,turns){
  let best=null;
  for(let a=0;a<4;a++)for(let b=0;b<4;b++)if(same(blend(rotate(p.a,a),rotate(p.b,b)),p.target)){
    const distance=[a,b].reduce((s,v,i)=>s+Math.min((v-turns[i]+4)%4,(turns[i]-v+4)%4),0);
    if(!best||distance<best.distance)best={turns:[a,b],distance};
  }
  return best;
}
