export const initial = () => [-1,-1,-1,0,0,0,0,0,0,1,1,1];
export function moves(board,side){
 const out=[];
 board.forEach((v,i)=>{if(v!==side)return;const r=Math.floor(i/3),c=i%3,nr=r-side;if(nr<0||nr>3)return;
 if(board[nr*3+c]===0)out.push([i,nr*3+c]);
 for(const dc of [-1,1])if(c+dc>=0&&c+dc<3&&board[nr*3+c+dc]===-side)out.push([i,nr*3+c+dc]);});return out;
}
export function apply(b,[from,to]){const n=[...b];n[to]=n[from];n[from]=0;return n;}
export function winner(b,turn){if(b.slice(0,3).includes(1))return 1;if(b.slice(9).includes(-1))return -1;if(!moves(b,turn).length)return -turn;return 0;}
const memo=new Map();
export function value(b,turn){const win=winner(b,turn);if(win)return win===turn?100:-100;
 const key=b.join(',')+':'+turn;if(memo.has(key))return memo.get(key);
 const best=Math.max(...moves(b,turn).map(m=>{const v=-value(apply(b,m),-turn);return v>0?v-1:v+1;}));memo.set(key,best);return best;
}
export function ranked(b,side){return moves(b,side).map(m=>({move:m,value:-value(apply(b,m),-side)})).sort((a,b)=>b.value-a.value);}
