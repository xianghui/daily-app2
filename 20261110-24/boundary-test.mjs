import {solve,plan,schedule} from './src/core.js';import assert from 'node:assert/strict';import fs from 'node:fs';
const t=(id,days,after=[])=>({id,title:id,description:id,days,after}),o=(id,task,daysSaved,costCents)=>({id,task,daysSaved,costCents});const checks=[];
const parallel=[t('A',5),t('B',5),t('C',2,['A','B'])],ops=[o('rushA','A',1,100),o('rushB','B',1,200)];assert.equal(schedule(parallel,[ops[0]]).days,7);assert.equal(schedule(parallel,[ops[1]]).days,7);let r=solve(parallel,ops,6);assert.deepEqual(r.best.selected,['rushA','rushB']);assert.equal(r.best.costCents,300);checks.push('parallel-path trap requires both branch reductions');
r=solve([t('A',5)],[o('one','A',1,10),o('other','A',1,10),o('two','A',2,100)],3);assert.deepEqual(r.best.selected,['two']);assert.equal(r.best.costCents,100);checks.push('mutually exclusive alternatives never stacked');
r=solve(parallel,ops,7);assert.equal(r.best.costCents,0);assert.equal(r.best.selected.length,0);checks.push('already-feasible baseline buys no positive-cost offer');
r=solve([t('A',5)],[o('one','A',1,0),o('two','A',2,0)],5);assert.equal(r.best.days,3);assert.deepEqual(r.best.selected,['two']);checks.push('zero-cost ties prefer earlier finish');
assert.deepEqual(schedule([parallel[2],parallel[1],parallel[0]]).days,schedule(parallel).days);checks.push('arbitrary source task order preserves finish');
r=solve(parallel,ops,1);assert.equal(r.best,null);assert.equal(r.fastest.days,6);checks.push('impossible deadline retains diagnostic fastest without a feasible plan');
fs.writeFileSync('boundary-validation.json',JSON.stringify({checks},null,2));console.log('PASS',checks.length,'critical boundary cases');
