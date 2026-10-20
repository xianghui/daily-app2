import assert from 'node:assert/strict';
import {TEAS,RULES,makeRound,roundScore} from './src/game.js';
const signature=r=>TEAS.map(t=>Number(r.test(t))).join('');
assert.equal(new Set(RULES.map(signature)).size,RULES.length);
for(let i=0;i<10000;i++){
 const r=makeRound(i%5);
 assert.equal(r.options.length,4);
 assert.equal(new Set(r.options.map(x=>x.id)).size,4);
 assert(r.options.includes(r.answer));
 assert(r.seen.length>=1&&r.seen.length<=2);
 const survivors=r.options.filter(rule=>r.seen.every(id=>rule.test(TEAS[id])===r.answer.test(TEAS[id])));
 assert(survivors.length>=2,'Initial evidence must leave a real deduction choice');
 assert.equal(r.options.filter(rule=>TEAS.every(t=>rule.test(t)===r.answer.test(t))).length,1);
}
assert.equal(roundScore({probes:0,wrong:[]}),150);
assert.equal(roundScore({probes:2,wrong:['x']}),80);
assert.equal(roundScore({probes:8,wrong:['x','y','z']}),20);
console.log('PASS: 10,000 rounds, unique truth tables, fair evidence, identifiable answers, score bounds');
