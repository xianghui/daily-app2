export const LINES = [...Array.from({length:4},(_,r)=>[0,1,2,3].map(c=>r*4+c)), ...Array.from({length:4},(_,c)=>[0,1,2,3].map(r=>r*4+c)), [0,5,10,15],[3,6,9,12]];
export const traits = [['coral','mint'],['round','diamond'],['hollow','solid'],['one dot','two dots']];
export const describe = p => traits.map((t,b)=>t[(p>>b)&1]).join(', ');
export function winning(board){for(const cells of LINES){const ps=cells.map(i=>board[i]);if(ps.includes(null))continue;for(let bit=0;bit<4;bit++)if(ps.every(p=>((p>>bit)&1)===((ps[0]>>bit)&1)))return {cells,trait:traits[bit][(ps[0]>>bit)&1]};}return null;}
export const empty = b => b.flatMap((v,i)=>v===null?[i]:[]);
export const remaining = b => Array.from({length:16},(_,i)=>i).filter(p=>!b.includes(p));
export function winningSpots(b,p){return empty(b).filter(i=>{const n=[...b];n[i]=p;return winning(n)});}
export function chooseGift(b){const pool=remaining(b);const ranks=pool.map(p=>({p,risk:winningSpots(b,p).length}));const min=Math.min(...ranks.map(x=>x.risk));const safe=ranks.filter(x=>x.risk===min);return safe[Math.floor(Math.random()*safe.length)].p;}
export function chooseSpot(b,p){const wins=winningSpots(b,p);if(wins.length)return wins[0];const ranked=empty(b).map(i=>{const n=[...b];n[i]=p;const safe=remaining(n).filter(g=>!winningSpots(n,g).length).length;return {i,score:safe+Math.random()*.5}}).sort((a,b)=>b.score-a.score);return ranked[0].i;}
