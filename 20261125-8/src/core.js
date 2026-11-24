export const plans=[
 {id:'access',description:'Member portal access eligibility: current subscription together with either training completion or supervisor permission.',target:JSON.stringify({expression:'a & (b | c)',conditions:{a:'Subscription is current',b:'Training is complete',c:'Supervisor permission granted'},budget:4})},
 {id:'dispatch',description:'Parcel dispatch release: either courier booking or customer pickup, and the parcel has passed packing inspection.',target:JSON.stringify({expression:'(a | b) & c',conditions:{a:'Courier booked',b:'Customer pickup arranged',c:'Packing inspection passed'},budget:4})},
 {id:'publish',description:'Editorial publication release: editor signoff, or both factual verification and rights clearance are complete.',target:JSON.stringify({expression:'a | (b & c)',conditions:{a:'Editor signed off',b:'Facts verified',c:'Rights cleared'},budget:4})}
];
const batch=(name,contexts,raws,order)=>({name,expected:order.map(i=>plans[i].id),data:{plans:structuredClone(plans),records:order.map((j,i)=>({id:name+'-'+(i+1),context:contexts[i],raw:JSON.stringify(raws[i])}))}});
export const examples=[
 batch('Intake batch',[
 'Check the subscriber portal entry rule for this member.',
 'The shipping team needs a release decision for this parcel.',
 'This article needs the editorial publication gate checked.',
 'A second parcel shipping release case from the packing desk.',
 'Another subscriber entering the member access portal.',
 'The newsroom needs another article publication decision.'
 ],[{a:false,b:false,c:false},{a:true,b:true,c:true},{a:false,b:false,c:false},{a:false,b:false,c:false},{a:true,b:true,c:true},{a:true,b:true,c:true}],[0,1,2,1,0,2]),
 batch('Follow-up batch',[
 'Newsroom article publishing approval needs this truth combination.',
 'Membership portal entry eligibility after subscriber training.',
 'Courier shipment release after packing checks for the parcel.',
 'Another member portal entry and subscription eligibility test.',
 'Another article publication approval for the editorial team.',
 'Parcel release with collection arrangements and packing inspection.'
 ],[{a:false,b:true,c:true},{a:true,b:true,c:false},{a:true,b:false,c:true},{a:true,b:false,c:false},{a:false,b:false,c:true},{a:false,b:false,c:true}],[2,0,1,0,2,1])
];
const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v),text=(v,n)=>typeof v==='string'&&v.isWellFormed()&&v.trim().length>0&&v.length<=n;
// Deliberately not JavaScript evaluation. Small total Boolean grammar, each condition once.
export function compile(expression,conditions){
 if(typeof expression!=='string'||expression.length>128||!obj(conditions))throw Error('Expression ≤128 and a condition-description object required.');
 const names=Object.keys(conditions).sort();if(names.length<2||names.length>5||!names.every(k=>/^[a-e]$/.test(k)&&text(conditions[k],120)))throw Error('Use 2–5 condition keys a–e, each with a description ≤120.');
 const tokens=expression.match(/[a-e!&|()]|\S/g)||[];let pos=0;const used=[];
 function atom(){const t=tokens[pos++];if(t==='!')return{op:'!',x:atom()};if(t==='('){const x=or();if(tokens[pos++]!==')')throw Error('Unclosed expression parentheses.');return x}if(names.includes(t)){used.push(t);return{op:'var',key:t}}throw Error('Use only condition keys, !, &, | and parentheses.');}
 function and(){let x=atom();while(tokens[pos]==='&'){pos++;x={op:'&',x,y:atom()}}return x}
 function or(){let x=and();while(tokens[pos]==='|'){pos++;x={op:'|',x,y:and()}}return x}
 const tree=or();if(pos!==tokens.length||used.length!==names.length||new Set(used).size!==names.length||!names.every(k=>used.includes(k)))throw Error('Each described condition must occur exactly once in the expression.');
 function evaluate(node,v){if(node.op==='var')return v[node.key];if(node.op==='!')return !evaluate(node.x,v);const x=evaluate(node.x,v),y=evaluate(node.y,v);return node.op==='&'?x&&y:x||y}
 return{names,eval:v=>evaluate(tree,v)};
}
export function validatePlan(p){if(!obj(p)||!text(p.id,60)||!text(p.description,200)||typeof p.target!=='string'||p.target.length>1500)throw Error('Decisions need ID ≤60, description ≤200 and target JSON ≤1500.');let t;try{t=JSON.parse(p.target)}catch{throw Error('Decision target must be JSON.')}if(!obj(t)||!Number.isInteger(t.budget)||t.budget<0||t.budget>12)throw Error('Target needs an integer addition budget 0–12.');compile(t.expression,t.conditions);return p}
export function parse(s){if(typeof s!=='string'||s.length>50000)throw Error('Source JSON must be at most 50,000 characters.');let d;try{d=JSON.parse(s)}catch{throw Error('Enter valid source-envelope JSON or choose a synthetic example.')}if(!obj(d)||!Array.isArray(d.plans)||d.plans.length<2||d.plans.length>5||!Array.isArray(d.records)||!d.records.length||d.records.length>24)throw Error('Use 2–5 decision specs and 1–24 test cases.');let ids=new Set;for(const p of d.plans){validatePlan(p);if(ids.has(p.id))throw Error('Decision IDs must be unique.');ids.add(p.id)}ids=new Set;for(const r of d.records){if(!obj(r)||!text(r.id,80)||ids.has(r.id)||!text(r.context,200)||typeof r.raw!=='string'||!r.raw.isWellFormed()||r.raw.length>2500)throw Error('Cases need unique IDs ≤80, context ≤200 and truth JSON text ≤2500.');ids.add(r.id)}return structuredClone(d)}
export const texts=d=>[...d.plans.map(p=>p.description),...d.records.map(r=>r.context)];
export function suggest(d,v){if(!Array.isArray(v)||v.length!==texts(d).length||!v.every(a=>Array.isArray(a)&&a.length===384&&a.every(Number.isFinite)&&Math.abs(Math.hypot(...a)-1)<.02))throw Error('Malformed model vectors. Retry; no suggestions applied.');return d.records.map((r,i)=>{const evidence=d.plans.map((p,j)=>({system:p.id,similarity:v[j].reduce((s,x,k)=>s+x*v[d.plans.length+i][k],0)})).sort((a,b)=>b.similarity-a.similarity);return{id:r.id,system:evidence[0].system,raw:r.raw,decision:'pending',note:'',evidence}})}
export function inspect(raw,p){validatePlan(p);const target=JSON.parse(p.target),program=compile(target.expression,target.conditions);let values;try{values=JSON.parse(raw)}catch{throw Error('Truth values must be valid JSON.')}if(!obj(values)||Object.keys(values).length!==program.names.length||!program.names.every(k=>Object.hasOwn(values,k)&&typeof values[k]==='boolean'))throw Error('Supply exactly the described condition keys with JSON true/false values. No coercion.');
 // Reject duplicate keys instead of silently taking a last value in this flat boolean-only format.
 const members=raw.match(/"(?:[^"\\]|\\.)*"\s*:/g)||[];if(members.length!==program.names.length)throw Error('Duplicate/extra truth keys are not allowed.');
 return{target,values,mask:program.names.reduce((m,k,i)=>m+(values[k]?2**i:0),0),outcome:program.eval(values),reason:'Expected decision outcome computed from reviewed truth values; this is a test design, not an executed test.'};}
export function design(p,cases){const t=JSON.parse(p.target),program=compile(t.expression,t.conditions),{names}=program;
 const table=Array.from({length:2**names.length},(_,mask)=>{const values=Object.fromEntries(names.map((k,i)=>[k,!!(mask&2**i)]));return{mask,values,outcome:program.eval(values)}});
 const selected=new Set(cases.map(c=>c.mask)),owners=m=>cases.filter(c=>c.mask===m).map(c=>c.id);
 const allPairs=names.map((key,i)=>table.filter(x=>!(x.mask&2**i)&&x.outcome!==table[x.mask+2**i].outcome).map(x=>[x.mask,x.mask+2**i]));
 const witnesses=names.map((key,i)=>({key,label:t.conditions[key],pairs:allPairs[i].filter(([a,b])=>selected.has(a)&&selected.has(b)).map(([a,b])=>({left:owners(a),right:owners(b),masks:[a,b]}))}));
 const planned=new Set(selected),additions=[];const uncovered=()=>names.map((_,i)=>i).filter(i=>!allPairs[i].some(([a,b])=>planned.has(a)&&planned.has(b)));
 // Greedy gap repair: choose the source-order condition/pair needing fewest new rows.
 // Never claim a globally minimum suite. Budget applies independently per decision.
 while(uncovered().length){const choices=uncovered().flatMap(i=>allPairs[i].map(pair=>({i,pair,missing:pair.filter(m=>!planned.has(m))}))).filter(x=>x.missing.length&&additions.length+x.missing.length<=t.budget).sort((a,b)=>a.missing.length-b.missing.length||a.i-b.i||a.pair[0]-b.pair[0]);if(!choices.length)break;const best=choices[0];for(const mask of best.missing){planned.add(mask);additions.push({...table[mask],reason:'Planned independence pair for '+names[best.i],executed:false})}}
 const outcomes=new Set(cases.map(c=>c.outcome));return{system:p.id,expression:t.expression,conditions:t.conditions,caseIds:cases.map(c=>c.id),uniqueVectors:selected.size,branchOutcomes:outcomes.size,baselineBranchComplete:outcomes.size===2,witnesses,covered:witnesses.filter(w=>w.pairs.length).length,total:names.length,complete:witnesses.every(w=>w.pairs.length),additions,budget:t.budget,plannedCovered:names.length-uncovered().length,table};}
export function analyze(d,rows){if(!d||!Array.isArray(rows)||rows.length!==d.records.length)throw Error('Review count does not match originals.');for(let i=0;i<rows.length;i++){const r=rows[i];if(!r||r.id!==d.records[i].id||!d.plans.some(p=>p.id===r.system)||typeof r.raw!=='string'||!r.raw.isWellFormed()||r.raw.length>2500||typeof r.note!=='string'||!r.note.isWellFormed()||r.note.length>2000||!['approve','hold'].includes(r.decision))throw Error('Approve or hold every case with valid decision, text and note.');}
 const checks=rows.map(r=>{const base={id:r.id,system:r.system,raw:r.raw};if(r.decision==='hold')return{...base,status:'held',reason:'Reviewer hold; not included in input-design coverage.'};try{return{...base,...inspect(r.raw,d.plans.find(p=>p.id===r.system)),status:'ready'}}catch(e){return{...base,status:'blocked',reason:e.message}}});
 const suites=d.plans.map(p=>design(p,checks.filter(c=>c.system===p.id&&c.status==='ready')));return{version:1,app:'Decision Pair',originalInput:structuredClone(d),reviews:structuredClone(rows),checks,suites,metrics:{records:checks.length,ready:checks.filter(c=>c.status==='ready').length,held:checks.filter(c=>c.status==='held').length,blocked:checks.filter(c=>c.status==='blocked').length,branchComplete:suites.filter(s=>s.baselineBranchComplete).length,independent:suites.reduce((n,s)=>n+s.covered,0),conditions:suites.reduce((n,s)=>n+s.total,0),branchOnlyGaps:suites.filter(s=>s.baselineBranchComplete&&!s.complete).length,proposed:suites.reduce((n,s)=>n+s.additions.length,0)}};}
function cell(v){let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'}
export function csv(r){return[['id','source_context','original_truth_json','reviewed_truth_json','decision_spec','review','status','expected_outcome','reason','review_note'].map(cell).join(','),...r.checks.map((c,i)=>[c.id,r.originalInput.records[i].context,r.originalInput.records[i].raw,c.raw,c.system,r.reviews[i].decision,c.status,c.outcome,c.reason,r.reviews[i].note].map(cell).join(','))].join('\r\n')}
export function release(r){return JSON.stringify({app:r.app,scope:'INPUT DESIGN ONLY. Expected outcomes are mathematical; no tests executed or certification claimed. Proposed additions are unexecuted and separate from reviewed cases.',decisions:r.suites.map(s=>({id:s.system,expression:s.expression,conditions:s.conditions,reviewedCases:r.checks.filter(c=>c.system===s.system&&c.status==='ready').map(c=>({id:c.id,values:c.values,expected:c.outcome})),witnesses:s.witnesses,proposedUnexecuted:s.additions}))},null,2)}
export function markdown(r){return '# Decision Pair\n\nINPUT DESIGN ONLY — no executed coverage or certification claims.\n\n'+r.checks.map((c,i)=>`${i+1}. ${JSON.stringify(c.id)} · ${c.status}\n   Source: ${JSON.stringify(r.originalInput.records[i])}\n   Review: ${JSON.stringify(r.reviews[i])}\n   Check: ${JSON.stringify(c)}`).join('\n\n')+'\n\n## Independence witnesses and unexecuted additions\n\n'+r.suites.map(s=>JSON.stringify(s)).join('\n\n')+'\n\nComputed counts: '+JSON.stringify(r.metrics)+'\n\nBranch-outcome design coverage alone does not establish unique-cause independence. Similarity is not confidence. Greedy proposed additions are not a globally minimal suite.'}
