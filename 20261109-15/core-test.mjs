import assert from 'node:assert/strict';import {parse,examples,tally,plan,suggest,texts} from './src/core.js';
const opts=examples[0].options;
// A=2 B=3 C=1 -> C transfers to A -> 3/3 tie, no manufactured result.
let t=tally(opts,[['A'],['A'],['B'],['B'],['B'],['C','A']]);assert.equal(t.winner,null);assert.equal(t.rounds[0].eliminated,'C');assert.deepEqual(t.rounds[1].counts,{A:3,B:3});
t=tally(opts,[['A'],['A'],['A'],['B','A'],['B'],['C','A']]);assert.equal(t.winner,'A');assert.equal(t.rounds.length,2);assert.equal(t.rounds[1].exhausted,0);
t=tally(opts,[['A'],['A'],['A'],['B'],['B'],['C']]);assert.equal(t.winner,'A');assert.equal(t.rounds[1].exhausted,1);assert.equal(t.rounds[1].continuing,5);
assert.equal(tally(opts,[]).status,'No continuing ballots');assert.equal(tally(opts,[['A'],['B'],['C']]).winner,null);
for(const round of t.rounds)assert.equal(Object.values(round.counts).reduce((s,n)=>s+n,0)+round.exhausted,6);
const d=parse(JSON.stringify(examples[0]));assert.throws(()=>suggest(d,[[NaN]]),/Malformed/);const v=texts(d).map(()=>Array(384).fill(0));const rows=suggest(d,v);assert.throws(()=>plan(d,rows),/Review every/);rows.forEach(b=>b.decision='approve');assert.throws(()=>plan(d,rows),/distinct/);rows.forEach(b=>b.decision='hold');assert.equal(plan(d,rows).metrics.held,4);console.log('PASS IRV transfers, exhaustion denominator, majority, tie stop, empty tally, conservation, duplicate and review gates');
