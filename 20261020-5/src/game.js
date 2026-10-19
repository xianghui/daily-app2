export const SHAPES = [[6,6,6,6,6],[6,6,5,4,3],[6,5,5,3,2],[6,6,4,4,2],[6,5,4,3,2]];
export function bite(board,r,c){return board.map((n,i)=>i>=r?Math.min(n,c):n)}
export function moves(board){return board.flatMap((n,r)=>Array.from({length:n},(_,c)=>({r,c}))).filter(m=>m.r!==0||m.c!==0)}
const memo=new Map();
export function winning(board){const k=board.join(',');if(memo.has(k))return memo.get(k);const win=moves(board).some(({r,c})=>!winning(bite(board,r,c)));memo.set(k,win);return win}
export function choose(board,master=false,random=Math.random){const legal=moves(board);if(!legal.length)return {r:0,c:0};const good=legal.filter(({r,c})=>!winning(bite(board,r,c)));const pool=good.length&&(master||random()<.65)?good:legal;return pool[Math.floor(random()*pool.length)]}
export function pieces(board){return board.reduce((a,b)=>a+b,0)}
