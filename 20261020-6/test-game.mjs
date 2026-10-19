import assert from 'node:assert/strict';
import {initial,moves,apply,winner,ranked,value} from './src/game.js';
assert.deepEqual(moves(initial(),1),[[9,6],[10,7],[11,8]]);
const capture=[0,0,0,-1,0,0,0,1,0,0,0,0];assert(moves(capture,1).some(m=>m[0]===7&&m[1]===3));assert(!moves(capture,1).some(m=>m[1]>7));
assert.equal(winner([1,0,0,0,0,0,0,0,0,0,-1,0],-1),1);
assert.equal(winner([0,0,0,0,0,0,0,0,0,-1,1,0],1),-1);
assert.equal(winner([0,0,0,-1,0,0,1,0,0,0,0,0],1),-1);
const seen=new Set();function visit(b,t){const key=b.join()+t;if(seen.has(key))return;seen.add(key);if(winner(b,t))return;const legal=moves(b,t);assert(legal.length);const best=ranked(b,t);assert(best.every((m,i)=>i===0||m.value<=best[i-1].value));for(const m of legal){const n=apply(b,m);assert.equal(n[m[0]],0);assert.equal(n[m[1]],t);assert.deepEqual(b.length,n.length);visit(n,-t);}}
visit(initial(),1);assert.equal(seen.size,987);assert.equal(value(initial(),1),-92);console.log('PASS: movement, diagonal capture, promotion, blocked loss, perfect solver and all 987 reachable positions.');
