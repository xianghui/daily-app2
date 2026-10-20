import assert from 'node:assert/strict'
import {makePuzzle,permutations,holds,points} from './src/game.js'
let seed=12421
const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32}
// Independent constraint evaluator; confirms exact solution counts, not just the hidden answer.
function valid(c,p){const a=p.indexOf(c.a),b=p.indexOf(c.b);switch(c.type){case 'before':return a<b;case 'near':return a===b+1||a===b-1;case 'gap':return a-b===c.gap||b-a===c.gap;case 'away':return a>b+1||b>a+1;case 'early':return a<p.length/2;case 'late':return a>=p.length/2;default:throw Error('unknown clue')}}
let maximum=0
for(let r=0;r<180;r++){
 const p=makePuzzle(r%6,random),all=permutations(p.ids)
 const solutions=all.filter(order=>p.clues.every(c=>valid(c,order)))
 assert.equal(solutions.length,1)
 assert.deepEqual(solutions[0],p.solution)
 for(const c of p.clues){assert.equal(holds(c,[]),null);for(const order of all)assert.equal(holds(c,order),valid(c,order))}
 maximum=Math.max(maximum,p.clues.length)
}
assert.equal(points(0,0),1000);assert.equal(points(1,2),600);assert.equal(points(100,100),100)
console.log(`PASS: 180 unique generated puzzles; independent exhaustive constraint checks; max ${maximum} clues; score limits.`)
