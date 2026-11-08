import assert from 'node:assert/strict';
import {parse,examples,validDate,schedule,suggest,plan,calendar,fold} from './src/core.js';
const d=parse(JSON.stringify(examples[0]));assert(!validDate('2026-02-30'));assert(validDate('2028-02-29'));
assert.deepEqual(schedule(d.cards[0],4,'2026-11-09'),{interval:1,repetitions:1,ease:2.5,due:'2026-11-10'});
assert.deepEqual(schedule({...d.cards[0],interval:1,repetitions:1},5,'2026-11-09'),{interval:6,repetitions:2,ease:2.6,due:'2026-11-15'});
assert.equal(schedule(d.cards[2],4,'2026-11-09').due,'2026-11-24');assert.equal(schedule(d.cards[2],1,'2026-11-09').repetitions,0);
assert.equal(schedule({...d.cards[2],interval:365,ease:5},5,'2028-02-29').due,'2029-02-28');assert.equal(schedule({...d.cards[2],ease:1.3},0,'2026-12-31').ease,1.3);
for(let grade=0;grade<=5;grade++)for(let reps=0;reps<=8;reps++){const s=schedule({...d.cards[2],repetitions:reps},grade,'2026-11-09');assert(s.interval>=1&&s.interval<=365);assert(s.ease>=1.3&&s.ease<=5)}
assert.throws(()=>suggest(d,[[NaN]]),/Malformed/);for(const s of ['','null','{}','not JSON',JSON.stringify({...d,attemptDate:'2026-02-30'}),JSON.stringify({...d,cards:[...d.cards,d.cards[0]]})])assert.throws(()=>parse(s));
const rows=d.cards.map(r=>({...r,positive:.8,negative:.2,margin:.6,proposed:'good',decision:'approve',grade:4,note:''}));assert.throws(()=>plan(d,rows.slice(1)));assert.throws(()=>plan(d,rows.map(r=>({...r,decision:'pending'}))));let a=plan(d,rows.map((r,i)=>({...r,decision:i===1?'hold':'approve'})));assert.equal(a.metrics.approved,2);assert.equal(a.cards.length,3);assert.equal((calendar(a).match(/BEGIN:VEVENT/g)||[]).length,2);assert.deepEqual(parse(JSON.stringify(a)),d);
for(const line of fold('SUMMARY:'+('漢🙂,;\\\n'.repeat(100))).split('\r\n'))assert(Buffer.byteLength(line)<=75);
console.log('PASS scheduling formula, leap/year boundaries, caps, holds, record conservation, schema, UTF-8 folds and roundtrip');
