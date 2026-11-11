const make=(prefix,baskets)=>baskets.flatMap((items,i)=>items.map((text,j)=>({id:prefix+(i+1)+'-'+(j+1),basket:prefix+(i+1),text})));
export const examples=[{
 name:'Cafe receipts',minSupport:2,minLift:1.1,catalog:[
 {id:'coffee',title:'Espresso coffee',description:'Espresso coffee, black coffee, hot roasted coffee beverage'},
 {id:'oat',title:'Oat drink',description:'Oat milk, dairy free oat beverage, plant based oat drink'},
 {id:'croissant',title:'Butter croissant',description:'Butter croissant, flaky French pastry crescent'},
 {id:'tea',title:'Green tea',description:'Green tea, brewed green tea leaves, hot tea beverage'},
 {id:'scone',title:'Fruit scone',description:'Fruit scone, baked raisin scone, British scone cake'}],
 records:make('C',[
 ['Black espresso from roasted coffee beans.','Dairy free oat milk beverage.','Flaky butter croissant pastry.'],
 ['Hot black coffee espresso.','Plant based oat drink.'],
 ['Roasted espresso coffee.','French butter croissant crescent.'],
 ['Brewed green tea leaves.','Baked raisin fruit scone.'],
 ['Hot green tea beverage.','British fruit scone cake.'],
 ['Black coffee brewed as espresso.']])
},{name:'Garden receipts',minSupport:2,minLift:1.1,catalog:[
 {id:'seeds',title:'Tomato seeds',description:'Tomato vegetable seeds for sowing, tomato seed packet'},
 {id:'compost',title:'Potting compost',description:'Potting compost, growing soil mix for plant containers'},
 {id:'gloves',title:'Gardening gloves',description:'Gardening gloves, protective work gloves for garden hands'},
 {id:'twine',title:'Jute twine',description:'Jute twine, natural string for tying climbing garden plants'}],records:make('G',[
 ['Packet of tomato vegetable seeds.','Growing soil compost for pots.'],
 ['Tomato seeds ready for sowing.','Potting soil compost mixture.'],
 ['Vegetable tomato seed packet.'],
 ['Gloves to protect hands while gardening.','Jute string to tie climbing plants.'],
 ['Garden protective work gloves.','Natural jute garden twine.'],
 ['Potting compost for containers.']])}];
const text=(s,n=400)=>typeof s==='string'&&s.trim().length>0&&s.length<=n;
export function validate(d){
 if(!d||!text(d.name,80)||!Array.isArray(d.catalog)||d.catalog.length<2||d.catalog.length>6||!Array.isArray(d.records)||d.records.length<1||d.records.length>24)throw Error('Need a name, 2–6 catalog products and 1–24 receipt lines.');
 if(!Number.isInteger(d.minSupport)||d.minSupport<1||d.minSupport>24||!Number.isFinite(d.minLift)||d.minLift<0||d.minLift>24)throw Error('Minimum support: integer 1–24 baskets. Minimum lift: number 0–24.');
 for(const a of[d.catalog,d.records])if(a.some(x=>!x||!text(x.id,40))||new Set(a.map(x=>x.id)).size!==a.length)throw Error('Use unique nonempty IDs of at most 40 characters.');
 if(d.catalog.some(c=>!text(c.title,80)||!text(c.description))||new Set(d.catalog.map(c=>c.title.trim().toLowerCase())).size!==d.catalog.length)throw Error('Distinct catalog titles ≤80 and descriptions ≤400 characters required.');
 if(d.records.some(r=>!text(r.text)||!text(r.basket,40)))throw Error('Every line needs a basket ID ≤40 and product text ≤400 characters.');
 return d;
}
export function parse(s){if(typeof s!=='string'||!s.trim()||s.length>1000000)throw Error('Paste JSON; input ≤18 KB, audit import ≤1 MB.');let a;try{a=JSON.parse(s)}catch{throw Error('Invalid JSON. Load an example or repair the JSON.')}const d=a?.originalInput??a;if(JSON.stringify(d).length>18000)throw Error('Original input exceeds 18,000 characters.');return validate(d)}
export const texts=d=>[...d.catalog.map(c=>c.description),...d.records.map(r=>r.text)];
export function suggest(d,v){
 if(!Array.isArray(v)||v.length!==texts(d).length||v.some(x=>!Array.isArray(x)||x.length!==384||x.some(n=>!Number.isFinite(n))||Math.abs(x.reduce((s,n)=>s+n*n,0)-1)>.05))throw Error('Malformed AI embeddings. Retry real inference.');
 return d.records.map((r,i)=>{const candidates=d.catalog.map((c,j)=>({item:c.id,similarity:v[j].reduce((s,n,k)=>s+n*v[d.catalog.length+i][k],0)})).sort((a,b)=>b.similarity-a.similarity);return {...r,item:candidates[0].item,proposed:candidates[0].item,exact:d.catalog.find(c=>c.title.trim().toLowerCase()===r.text.trim().toLowerCase())?.id??null,candidates,decision:'pending',note:''}});
}
export function analyze(d,rows){
 validate(d);
 if(!Array.isArray(rows)||rows.length!==d.records.length||rows.some((r,i)=>!r||r.id!==d.records[i].id||r.text!==d.records[i].text||!text(r.basket,40)||!d.catalog.some(c=>c.id===r.item)||!['approve','hold'].includes(r.decision)||typeof r.note!=='string'||r.note.length>400))throw Error('Review every line: choose a product, verify basket ID, then approve or hold.');
 const basketIDs=[...new Set(rows.map(r=>r.basket))];
 const baskets=basketIDs.map(id=>{const lines=rows.filter(r=>r.basket===id),complete=lines.every(r=>r.decision==='approve');return{id,lines:lines.map(r=>r.id),complete,products:complete?[...new Set(lines.map(r=>r.item))].sort():[]}});
 const complete=baskets.filter(b=>b.complete),n=complete.length;
 const counts=d.catalog.map(c=>({item:c.id,count:complete.filter(b=>b.products.includes(c.id)).length}));
 const pairs=[];
 for(let i=0;i<counts.length;i++)for(let j=i+1;j<counts.length;j++){
 const a=counts[i],b=counts[j],hits=complete.filter(x=>x.products.includes(a.item)&&x.products.includes(b.item)).map(x=>x.id),count=hits.length;
 pairs.push({a:a.item,b:b.item,count,n,aCount:a.count,bCount:b.count,support:n?count/n:null,lift:a.count&&b.count?count*n/(a.count*b.count):null,aToB:a.count?count/a.count:null,bToA:b.count?count/b.count:null,baskets:hits,qualifies:count>=d.minSupport&&a.count>0&&b.count>0&&count*n>=d.minLift*a.count*b.count});
 }
 const rules=pairs.filter(p=>p.qualifies).sort((a,b)=>b.lift-a.lift||b.count-a.count||a.a.localeCompare(b.a)||a.b.localeCompare(b.b));
 const popular=[...counts].sort((a,b)=>b.count-a.count||a.item.localeCompare(b.item)).slice(0,2).map(c=>c.item);
 const baseline=pairs.find(p=>popular.includes(p.a)&&popular.includes(p.b))??null;
 return{schema:'basket-signal/v1',originalInput:structuredClone(d),records:structuredClone(rows),baskets,counts,pairs,rules,baseline,metrics:{lines:rows.length,totalBaskets:baskets.length,completeBaskets:n,excludedBaskets:baskets.length-n,heldLines:rows.filter(r=>r.decision==='hold').length,deduplicatedLines:complete.reduce((s,b)=>s+b.lines.length-b.products.length,0),qualifyingPairs:rules.length,exactResolved:rows.filter(r=>r.exact!==null).length,aiReviewAgreement:rows.filter(r=>r.decision==='approve'&&r.item===r.proposed).length,approved:rows.filter(r=>r.decision==='approve').length}};
}
const cell=v=>{if(typeof v==='number')return String(v);let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'};
const table=rs=>rs.map(r=>r.map(cell).join(',')).join('\r\n');
export const csv=a=>table([['id','originalBasket','source','aiProposed','reviewedProduct','reviewedBasket','decision','note','basketIncluded'],...a.records.map((r,i)=>[r.id,a.originalInput.records[i].basket,r.text,r.proposed,r.item,r.basket,r.decision,r.note,a.baskets.find(b=>b.id===r.basket).complete?'yes':'no'])]);
export const pairCsv=a=>table([['productA','productB','togetherBaskets','completeBaskets','aBaskets','bBaskets','supportShare','lift','bGivenAShare','aGivenBShare','meetsThresholds','sourceBaskets'],...a.pairs.map(p=>[p.a,p.b,p.count,p.n,p.aCount,p.bCount,p.support,p.lift,p.aToB,p.bToA,p.qualifies?'yes':'no',JSON.stringify(p.baskets)])]);
const md=s=>String(s).replaceAll('\\','\\\\').replaceAll('|','\\|').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('\n','<br>');
export function markdown(a){return '# Basket Signal — reviewed pairing worksheet\n\n'+md(a.originalInput.name)+'\n\nDescriptive associations, not sales predictions or causal recommendations. Complete baskets only; a held line excludes its entire reviewed basket. Repeated products count once per basket. Minimum '+a.originalInput.minSupport+' co-occurring baskets, lift ≥'+a.originalInput.minLift+'.\n\n'+a.metrics.completeBaskets+' complete / '+a.metrics.totalBaskets+' total baskets. '+a.metrics.heldLines+' held lines. '+a.rules.length+' qualifying pairs.\n\n## Pairing shortlist\n\n| Product A | Product B | Together | Lift | Source baskets |\n|---|---|---|---|---|\n'+a.rules.map(p=>'| '+[p.a,p.b,p.count,p.lift.toFixed(3),p.baskets.join(', ')].map(md).join(' | ')+' |').join('\n')+'\n\n## Popularity baseline\n\n'+(a.baseline?md(a.baseline.a)+' + '+md(a.baseline.b)+': '+a.baseline.count+' together; lift '+(a.baseline.lift?.toFixed(3)??'undefined'):'No pair')+'\n\n## Every source line\n\n| ID | Source | Original basket | Reviewed basket | Product | Decision | Note |\n|---|---|---|---|---|---|---|\n'+a.records.map((r,i)=>'| '+[r.id,r.text,a.originalInput.records[i].basket,r.basket,r.item,r.decision,r.note].map(md).join(' | ')+' |').join('\n')+'\n'}
