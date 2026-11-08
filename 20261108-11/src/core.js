import Papa from 'papaparse';
const record=(id,label,group,text,split='train')=>({id,label,group,text,split});
export const examples={
'Service intents':{maxNegativeReuse:2,records:[
record('A1','password','user1','I forgot my password and need to reset it.'),
record('B1','email','user2','I need to update the email address on my account.'),
record('C1','refund','user3','Please return the money for my last purchase.'),
record('A2','password','user4','Help me recover access by choosing a new password.'),
record('B2','email','user5','Change my registered email to a different address.'),
record('C2','refund','user6','I want a refund for the order I bought yesterday.'),
record('H1','password','reserved','My password was forgotten; how do I reset it?','holdout')]},
'Library topics':{maxNegativeReuse:2,records:[
record('L1','gardening','reader1','How to grow tomatoes and vegetables in a small garden.'),
record('M1','baking','reader2','A guide to baking bread with sourdough starter.'),
record('N1','cycling','reader3','Repair a bicycle puncture and replace a damaged tire.'),
record('L2','gardening','reader4','Planting and caring for backyard vegetable crops.'),
record('M2','baking','reader5','Make a homemade sourdough loaf in the oven.'),
record('N2','cycling','reader6','Fixing a flat bike tyre with a patch and pump.'),
record('H2','baking','reserved','Instructions for making a sourdough bread loaf.','holdout')]}
};
const fail=m=>{throw Error(m)},norm=s=>s.trim().toLowerCase().replace(/\s+/g,' ');
export function parse(s){if(typeof s!=='string'||!s.trim()||s.length>50000)fail('Enter JSON, at most 50,000 characters.');let d;try{d=JSON.parse(s);d=d?.input||d}catch{fail('Invalid JSON. Load an example or import an audit JSON.')}
if(!d||!Number.isInteger(d.maxNegativeReuse)||d.maxNegativeReuse<1||d.maxNegativeReuse>8)fail('maxNegativeReuse must be an integer from 1 to 8.');
if(!Array.isArray(d.records)||d.records.length<3||d.records.length>48)fail('Provide 3–48 labeled records.');const ids=new Set(),groups=new Map(),seen=new Map();
for(const r of d.records){if(!r||typeof r.id!=='string'||!/^[-\w]{1,40}$/.test(r.id)||ids.has(r.id))fail('Unique IDs: 1–40 ASCII letters, digits, underscores or hyphens.');ids.add(r.id);for(const k of ['label','group','text'])if(typeof r[k]!=='string'||!r[k].trim()||r[k].length>(k==='text'?500:80))fail('Text must be 1–500 characters; label/group 1–80.');if(!['train','holdout'].includes(r.split))fail('split must be train or holdout.');if(groups.has(r.group)&&groups.get(r.group)!==r.split)fail('A source group cannot span train and holdout.');groups.set(r.group,r.split);const n=norm(r.text);if(seen.has(n)&&seen.get(n)!==r.split)fail('Identical normalized text cannot cross train/holdout.');seen.set(n,r.split);}
return {maxNegativeReuse:d.maxNegativeReuse,records:d.records.map(({id,label,group,text,split})=>({id,label,group,text,split}))};}
export const texts=d=>d.records.map(r=>r.text);
const dot=(a,b)=>a.reduce((s,x,k)=>s+x*b[k],0);
export function candidates(d,a,type){return d.records.filter(b=>a.split==='train'&&b.split==='train'&&a.id!==b.id&&a.group!==b.group&&(type==='positive'?a.label===b.label:a.label!==b.label));}
export function suggest(d,v){if(!Array.isArray(v)||v.length!==d.records.length||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))||Math.abs(Math.hypot(...a)-1)>.05))fail('Malformed AI vectors. Retry the real model.');const indices=new Map(d.records.map((r,i)=>[r.id,i])),uses=Object.create(null),baseUses=Object.create(null);
return d.records.map((a,i)=>{const rank=type=>candidates(d,a,type).map(b=>({...b,score:dot(v[i],v[indices.get(b.id)])})).sort((x,y)=>y.score-x.score||indices.get(x.id)-indices.get(y.id));const positives=rank('positive'),negatives=rank('negative');let positive='',negative='',baselineNegative='';if(positives.length){positive=positives[0].id;negative=negatives.find(b=>b.group!==positives[0].group&&(uses[b.id]||0)<d.maxNegativeReuse)?.id||'';if(negative)uses[negative]=(uses[negative]||0)+1;baselineNegative=candidates(d,a,'negative').find(b=>b.group!==positives[0].group&&(baseUses[b.id]||0)<d.maxNegativeReuse)?.id||'';if(baselineNegative)baseUses[baselineNegative]=(baseUses[baselineNegative]||0)+1;}
return {...a,positive,negative,suggestedPositive:positive,suggestedNegative:negative,baselineNegative,positives,negatives,decision:'pending',note:'',reason:a.split==='holdout'?'Holdout: excluded from training.':!positives.length?'No same-label positive in a different source group.':!negative?'No differently labeled candidate within reuse cap.':'Nearest eligible positive and capped hard negative; review labels and meaning.'};});}
export function apply(d,rows){if(!d||!Array.isArray(rows)||rows.length!==d.records.length)fail('Missing original records.');const uses=Object.create(null);for(let i=0;i<rows.length;i++){const r=rows[i],a=d.records[i];if(['id','text','label','group','split'].some(k=>r[k]!==a[k])||!['accept','hold'].includes(r.decision))fail('Review every anchor: approve or hold.');if(typeof r.note!=='string'||r.note.length>500)fail('Notes: at most 500 characters.');if(r.decision==='accept'){const p=candidates(d,a,'positive').find(b=>b.id===r.positive),n=candidates(d,a,'negative').find(b=>b.id===r.negative);if(!p||!n||p.group===n.group)fail('Approved triplets require train-only, distinct source groups, matching positive label and different negative label.');uses[n.id]=(uses[n.id]||0)+1;if(uses[n.id]>d.maxNegativeReuse)fail('Negative reuse cap exceeded. Hold a triplet or select another eligible negative.');}}
const accepted=rows.filter(r=>r.decision==='accept'),get=id=>d.records.find(r=>r.id===id),avg=a=>a.length?a.reduce((s,x)=>s+x,0)/a.length:null;
const triplets=accepted.map(r=>({anchor:r.text,positive:get(r.positive).text,negative:get(r.negative).text,anchor_id:r.id,positive_id:r.positive,negative_id:r.negative}));
const ai=rows.filter(r=>r.suggestedNegative),base=rows.filter(r=>r.baselineNegative);return {version:1,model:'Xenova/all-MiniLM-L6-v2 q8',input:structuredClone(d),records:structuredClone(rows),triplets,negativeUse:uses,metrics:{total:rows.length,holdout:rows.filter(r=>r.split==='holdout').length,approved:accepted.length,held:rows.length-accepted.length,baselineCount:base.length,aiCount:ai.length,baselineSimilarity:avg(base.map(r=>r.negatives.find(n=>n.id===r.baselineNegative).score)),aiSimilarity:avg(ai.map(r=>r.negatives.find(n=>n.id===r.suggestedNegative).score)),reviewedSimilarity:avg(accepted.map(r=>r.negatives.find(n=>n.id===r.negative).score)),overrides:accepted.filter(r=>r.positive!==r.suggestedPositive||r.negative!==r.suggestedNegative).length}};}
export const csv=a=>Papa.unparse(a.records.map(r=>({id:r.id,text:r.text,label:r.label,group:r.group,split:r.split,decision:r.decision,positive_id:r.positive,negative_id:r.negative,ai_negative_id:r.suggestedNegative,note:r.note})),{escapeFormulae:/^[=+\-@\t\r]/});
export const jsonl=a=>a.triplets.map(({anchor,positive,negative})=>JSON.stringify({anchor,positive,negative})).join('\n')+(a.triplets.length?'\n':'');
