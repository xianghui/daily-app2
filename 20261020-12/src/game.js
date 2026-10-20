export const cast = [
  {name:'Fox',icon:'🦊',color:'#f6a36c',act:'Violin'},
  {name:'Owl',icon:'🦉',color:'#d7b5ed',act:'Poetry'},
  {name:'Bear',icon:'🐻',color:'#d4b28c',act:'Cello'},
  {name:'Frog',icon:'🐸',color:'#b8d68d',act:'Tap dance'},
  {name:'Rabbit',icon:'🐰',color:'#f2c2d4',act:'Magic'},
  {name:'Mouse',icon:'🐭',color:'#abd6e3',act:'Piano'},
]
export function permutations(a) {
  if (!a.length) return [[]]
  return a.flatMap((v,i)=>permutations(a.filter((_,j)=>j!==i)).map(t=>[v,...t]))
}
export function holds(c, order) {
  const a=order.indexOf(c.a), b=order.indexOf(c.b)
  if(a<0 || (c.b!==undefined && b<0)) return null
  if(c.type==='before') return a<b
  if(c.type==='near') return Math.abs(a-b)===1
  if(c.type==='gap') return Math.abs(a-b)===c.gap
  if(c.type==='away') return Math.abs(a-b)>1
  return c.type==='early' ? a<order.length/2 : a>=order.length/2
}
export function describe(c) {
  const a=cast[c.a].name, b=cast[c.b]?.name
  if(c.type==='before') return `${a} performs before ${b}.`
  if(c.type==='near') return `${a} and ${b} perform next to each other.`
  if(c.type==='gap') return `Exactly ${c.gap-1} act${c.gap===2?'':'s'} between ${a} and ${b}.`
  if(c.type==='away') return `${a} is not next to ${b}.`
  return `${a} performs in the ${c.type==='early'?'first':'second'} half.`
}
export function makePuzzle(round, random=Math.random) {
  const n=round<2?5:6, ids=Array.from({length:n},(_,i)=>i)
  const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  const solution=shuffle(ids), pool=[]
  for(const a of ids) {
    // Half clues are only used for even-sized casts.
    if(n%2===0) pool.push({type:solution.indexOf(a)<n/2?'early':'late',a})
    for(const b of ids) if(a!==b) {
      if(solution.indexOf(a)<solution.indexOf(b)) pool.push({type:'before',a,b})
      if(a<b) {
        const gap=Math.abs(solution.indexOf(a)-solution.indexOf(b))
        pool.push({type:gap===1?'near':'gap',a,b,gap})
        if(gap>1) pool.push({type:'away',a,b})
      }
    }
  }
  let candidates=permutations(ids), clues=[]
  for(const c of shuffle(pool)) {
    const kept=candidates.filter(p=>holds(c,p))
    if(kept.length<candidates.length) {clues.push(c);candidates=kept}
    if(candidates.length===1) break
  }
  // Remove redundant clues for a compact, genuinely deductive puzzle.
  for(let i=clues.length-1;i>=0;i--) {
    const trial=clues.filter((_,j)=>i!==j)
    if(permutations(ids).filter(p=>trial.every(c=>holds(c,p))).length===1) clues=trial
  }
  return {ids,solution,clues}
}
export const points=(mistakes,hints)=>Math.max(100,1000-mistakes*100-hints*150)
