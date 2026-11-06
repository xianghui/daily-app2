import Papa from 'papaparse';
export const examples={
 'Product circle':`id,name,team,interests
A,Ada,Design,Accessible interfaces and screen reader usability
B,Ben,Engineering,Building inclusive websites for people using assistive technology
C,Cleo,Product,Customer interviews and qualitative user research
D,Dev,Research,Talking to customers to understand user needs
E,Eli,Operations,Vegetable gardening and growing tomatoes`,
 'Community circle':`id,name,team,interests
M,Maya,North,Baking bread with sourdough starter and fermentation
N,Nico,South,Making sourdough loaves and caring for a bread starter
O,Omar,East,Training for long distance running marathons
P,Pia,West,Marathon running endurance and distance training
Q,Quinn,North,Watercolor painting landscapes and trees
R,Rae,South,Painting outdoor scenery with watercolors`
};
export function inputs(text,threshold,cross){
 if(typeof text!=='string'||text.length>30000)throw Error('CSV must be at most 30 KB.');
 const parsed=Papa.parse(text.trim(),{header:true,skipEmptyLines:'greedy'});
 if(parsed.errors.length||['id','name','team','interests'].some(k=>!parsed.meta.fields?.includes(k))||parsed.meta.fields.length!==4)throw Error('Use valid CSV with exactly id,name,team,interests headers.');
 const people=parsed.data.map(r=>Object.fromEntries(Object.entries(r).map(([k,v])=>[k,typeof v==='string'?v.trim():v])));
 if(people.length<2||people.length>16)throw Error('Enter 2–16 participants.');
 if(people.some(r=>!r.id||r.id.length>40||!r.name||r.name.length>80||!r.team||r.team.length>80||!r.interests||r.interests.length>400)||new Set(people.map(r=>r.id)).size!==people.length)throw Error('Use unique IDs; names/teams 1–80 characters, IDs 1–40 and interests 1–400 characters.');
 if(!Number.isFinite(+threshold)||threshold<.2||threshold>.85||typeof cross!=='boolean')throw Error('Invalid constraints.');
 return {people,threshold:+threshold,cross};
}
export function optimize(people,edges){
 const memo=new Map();function solve(mask){if(!mask)return {count:0,score:0,pairs:[]};if(memo.has(mask))return memo.get(mask);let i=0;while(!(mask&(1<<i)))i++;const rest=mask&~(1<<i);let best=solve(rest);for(let j=i+1;j<people.length;j++)if((rest&(1<<j))&&edges[i][j]!==null){const sub=solve(rest&~(1<<j)),score=sub.score+edges[i][j],count=sub.count+1;if(count>best.count||(count===best.count&&score>best.score+1e-9))best={count,score,pairs:[{a:people[i].id,b:people[j].id,score:edges[i][j],accepted:true,note:''},...sub.pairs]};}memo.set(mask,best);return best;}return solve((1<<people.length)-1).pairs;
}
export function suggest(source,vectors){const n=source.people.length;if(!Array.isArray(vectors)||vectors.length!==n||vectors.some(v=>!Array.isArray(v)||v.length!==384||v.some(x=>!Number.isFinite(x))||Math.abs(v.reduce((s,x)=>s+x*x,0)-1)>.05))throw Error('Malformed AI vectors; expected normalized 384-dimensional embeddings.');
 const scores=vectors.map(a=>vectors.map(b=>Math.max(-1,Math.min(1,a.reduce((s,x,i)=>s+x*b[i],0)))));
 const edges=scores.map((r,i)=>r.map((s,j)=>i===j||(source.cross&&source.people[i].team.toLowerCase()===source.people[j].team.toLowerCase())||s<source.threshold?null:s));
 return {rows:optimize(source.people,edges),scores};}
export function artifact(rows,source,scores){
 const ids=new Set(source.people.map(p=>p.id)),used=new Set();if(!Array.isArray(rows)||rows.length>8)throw Error('Invalid reviewed pairs.');
 for(const r of rows){if(!ids.has(r.a)||!ids.has(r.b)||r.a===r.b||typeof r.accepted!=='boolean'||typeof r.note!=='string'||r.note.length>500)throw Error('Invalid review fields.');if(r.accepted){if(used.has(r.a)||used.has(r.b))throw Error('A participant cannot appear in two accepted pairs. Reject a conflicting pair first.');used.add(r.a);used.add(r.b);const a=source.people.find(p=>p.id===r.a),b=source.people.find(p=>p.id===r.b);if(source.cross&&a.team.toLowerCase()===b.team.toLowerCase())throw Error('Cross-team constraint: partners must be on different teams.');}}
 return {version:1,model:'Xenova/all-MiniLM-L6-v2 q8',constraints:{crossTeam:source.cross,threshold:source.threshold},original:structuredClone(source.people),pairs:rows.map(r=>({...r,score:scores[source.people.findIndex(p=>p.id===r.a)][source.people.findIndex(p=>p.id===r.b)]})),participants:source.people.map(p=>{const pair=rows.find(r=>r.accepted&&(r.a===p.id||r.b===p.id));return {...p,partner:pair?(pair.a===p.id?pair.b:pair.a):'',note:pair?.note||'',status:pair?'Paired':'Unpaired'}})};
}
export function baseline(source){const edges=source.people.map((a,i)=>source.people.map((b,j)=>i!==j&&(!source.cross||a.team.toLowerCase()!==b.team.toLowerCase())&&a.interests.toLowerCase()===b.interests.toLowerCase()?1:null));return optimize(source.people,edges).length;}
export function csvOutput(a){return Papa.unparse(a.participants,{escapeFormulae:/^[=+\-@\t\r]/});}
export function markdown(a){return '# Common Ground · reviewed peer learning plan\n\n'+a.participants.map(p=>`- ${p.id} (${p.name}): ${p.partner?'paired with '+p.partner:'unpaired'}${p.note?' — '+p.note:''}`).join('\n');}
