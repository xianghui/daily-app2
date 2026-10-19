// Signed prefix reversal: each fold reverses the bundle and turns every face.
export const flip = (stack, count) => [...stack.slice(0, count).reverse().map(v => -v), ...stack.slice(count)]
export const key = stack => stack.join(',')
export const solved = stack => stack.every((v, i) => v === i + 1)
const cache = new Map()
export function atlas(size) {
  if (cache.has(size)) return cache.get(size)
  const target = Array.from({length:size}, (_,i) => i+1)
  const map = new Map([[key(target), {distance:0, move:0}]])
  const queue = [target]
  for (let head=0; head<queue.length; head++) {
    const state=queue[head], distance=map.get(key(state)).distance
    for(let count=1; count<=size; count++) {
      const next=flip(state,count), id=key(next)
      if (!map.has(id)) { map.set(id,{distance:distance+1,move:count}); queue.push(next) }
    }
  }
  const result={map,queue}; cache.set(size,result); return result
}
export function commission(round) {
  const size=[3,3,4,4,5,6][round]
  const {map,queue}=atlas(size)
  const minimum=[3,4,5,6,7,8][round]
  const candidates=queue.filter(s => map.get(key(s)).distance===minimum)
  const stack=[...candidates[Math.floor(Math.random()*candidates.length)]]
  return {stack,par:minimum}
}
export const award = (moves,par,hints) => Math.max(40,200-Math.max(0,moves-par)*15-hints*25)
