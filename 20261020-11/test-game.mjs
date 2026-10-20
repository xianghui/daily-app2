import assert from 'node:assert/strict'
import { makeRound, evaluate, optimal, roundScore } from './src/game.js'
// Independent subset DP: time for a subset is invariant, so keep best tips for each subset.
function dp(orders) {
  const size = 1 << orders.length, points = Array(size).fill(-Infinity), times = Array(size).fill(0)
  points[0] = 0
  for (let mask = 1; mask < size; mask++) for (let i = 0; i < orders.length; i++) if (mask & (1 << i)) { times[mask] = times[mask ^ (1 << i)] + orders[i].duration; break }
  for (let mask = 0; mask < size; mask++) for (let i = 0; i < orders.length; i++) if (!(mask & (1 << i))) {
    const next = mask | (1 << i)
    points[next] = Math.max(points[next], points[mask] + (times[next] <= orders[i].deadline ? orders[i].value : 0))
  }
  return points[size - 1]
}
let seed = 601020
function random() { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296 }
for (let r = 0; r < 600; r++) {
  const orders = makeRound(r % 6, random), best = optimal(orders)
  assert.equal(best.tips, dp(orders)); assert.equal(evaluate(orders, best.queue).tips, best.tips)
  assert.equal(new Set(best.queue).size, orders.length)
  assert.ok(best.tips > 0 && best.tips < orders.reduce((s,o) => s + o.value, 0))
  assert.equal(roundScore(best.tips, best.tips), 1000)
}
const fixture = [{id:0,duration:3,deadline:3,value:20},{id:1,duration:2,deadline:4,value:70}]
assert.equal(evaluate(fixture,[0,1]).tips,20)
assert.equal(evaluate(fixture,[1,0]).tips,70)
assert.equal(evaluate(fixture,[]).time,0)
assert.equal(optimal(fixture).tips,70)
assert.equal(roundScore(0,70),0)
console.log('PASS: 600 generated puzzles match independent subset DP; deadline equality, tradeoff, empty queue, scoring verified.')
