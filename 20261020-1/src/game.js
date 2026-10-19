export const cards = () => Array.from({length:9},(_,i)=>i+1)
export function shuffle(a) {const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
export function newGame() {
 const lots=shuffle(cards()); return {hand:cards(),rival:cards(),lots,round:0,you:0,them:0,pot:0,result:null,history:[]}
}
export function resolveBid(s,bid,random=Math.random) {
 if(s.result || !s.hand.includes(bid) || s.round>=9)return s
 // The rival only sees the prize and its OWN cards, never the player's choice.
 const desire=(s.lots[s.round]-1)/8
 const rank=Math.max(0,Math.min(s.rival.length-1,Math.round(desire*(s.rival.length-1)+(random()-.5)*3)))
 const other=s.rival[rank], stake=s.pot+s.lots[s.round], tie=bid===other, last=s.round===8
 const gain=tie?(last?stake/2:0):bid>other?stake:0
 const loss=tie?(last?stake/2:0):other>bid?stake:0
 return {...s,hand:s.hand.filter(n=>n!==bid),rival:s.rival.filter(n=>n!==other),you:s.you+gain,them:s.them+loss,pot:tie&&!last?stake:0,result:{bid,other,stake,tie,gain,loss,last},history:[...s.history,{bid,other,stake,tie,gain,loss}]}
}
export function advance(s){return s.result?{...s,round:s.round+1,result:null}:s}
