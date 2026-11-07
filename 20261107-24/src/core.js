export const MODEL='Xenova/all-MiniLM-L6-v2';
const bank=rows=>rows.map(([term,definition],i)=>({id:`c${i+1}`,term,definition}));
export const examples={
 'Earth science':bank([
 ['Evaporation','Liquid water changes into water vapor when it gains heat.'],['Condensation','Water vapor cools and changes into liquid water droplets.'],
 ['Erosion','Flowing water or wind carries rock and soil away to another place.'],['Deposition','Water or wind drops the sediment it has carried at a new location.'],
 ['Rotation','Earth spins around its axis, causing day and night.'],['Revolution','Earth travels around the Sun in an orbit once each year.'],
 ['Conduction','Heat transfers through direct contact between neighboring particles.'],['Convection','Heat transfers as warmer fluid rises and cooler fluid sinks.']]),
 'Software systems':bank([
 ['Stack','A collection where the most recently added item is removed first.'],['Queue','A collection where the earliest added item is removed first.'],
 ['Encryption','Transforms readable data into unreadable ciphertext using a key.'],['Decryption','Transforms unreadable ciphertext back into readable data using a key.'],
 ['Compression','Encodes data using fewer bytes to reduce storage size.'],['Decompression','Restores data from a compressed representation to its original form.'],
 ['Authentication','Verifies the identity of a user trying to access a system.'],['Authorization','Determines which resources a verified user is permitted to access.']])};
export function parse(raw,count){
 if(raw.length>20000)throw Error('Input exceeds 20,000 characters.');
 let data;try{data=JSON.parse(raw)}catch{throw Error('Use a JSON array of concepts, or a previously exported review JSON.');}
 if(data?.schema==='distractor-desk/v1')data=data.input;
 if(!Array.isArray(data)||data.length<5||data.length>24)throw Error('Provide 5–24 concepts.');
 if(!Number.isInteger(count)||count<2||count>4)throw Error('Choose 2–4 wrong answers.');
 const input=data.map(c=>{
 for(const [field,max]of[['id',40],['term',100],['definition',450]])if(typeof c[field]!=='string'||!c[field].trim()||c[field].length>max||/[\u0000-\u0008]/.test(c[field]))throw Error(`${field}: required text, maximum ${max} characters.`);
 return {id:c.id,term:c.term,definition:c.definition};
 });
 for(const key of ['id','term','definition'])if(new Set(input.map(x=>x[key].trim().toLowerCase())).size!==input.length)throw Error(`Duplicate ${key}; each concept must be distinct.`);
 return input;
}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(r=>!Array.isArray(r)||r.length!==384||r.some(x=>!Number.isFinite(x))||Math.abs(Math.hypot(...r)-1)>.02))throw Error('Malformed AI embeddings; retry the real model.');return v;}
export const cosine=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
export function suggest(input,v,count){validateVectors(v,input.length);return input.map((c,i)=>({id:c.id,include:true,stem:`Which term matches this definition?\n${c.definition}`,note:'',choices:input.map((x,j)=>({id:x.id,index:j,score:cosine(v[i],v[j])})).filter(x=>x.id!==c.id).sort((a,b)=>b.score-a.score||a.index-b.index).slice(0,count).map(x=>x.id)}));}
export function validateReview(input,review,count){
 if(!Array.isArray(review)||review.length!==input.length||new Set(review.map(r=>r.id)).size!==input.length)throw Error('Review must preserve every concept.');
 for(let i=0;i<input.length;i++){const r=review[i];if(r.id!==input[i].id||typeof r.include!=='boolean'||typeof r.stem!=='string'||!r.stem.trim()||r.stem.length>1000||typeof r.note!=='string'||r.note.length>500)throw Error('Invalid question text or review schema.');if(!Array.isArray(r.choices)||r.choices.length!==count||new Set(r.choices).size!==count||r.choices.some(id=>id===r.id||!input.some(c=>c.id===id)))throw Error('Wrong answers must be unique, valid concepts and never the correct answer.');}
 if(!review.some(r=>r.include))throw Error('Include at least one question before applying.');return true;
}
export function metrics(input,v,review,count){
 const avg=list=>list.length?list.reduce((a,b)=>a+b,0)/list.length:0;
 const scores=[],base=[];let replaced=0;
 review.forEach((r,i)=>{if(!r.include)return;const baseline=input.filter(c=>c.id!==r.id).slice(0,count).map(c=>c.id);for(const id of r.choices){scores.push(cosine(v[i],v[input.findIndex(c=>c.id===id)]));if(!baseline.includes(id))replaced++;}for(const id of baseline)base.push(cosine(v[i],v[input.findIndex(c=>c.id===id)]));});
 return {reviewedMeanCosine:avg(scores),inputOrderBaselineMeanCosine:avg(base),differentSlots:replaced,included:review.filter(r=>r.include).length,total:input.length};
}
// GIFT reserved characters must be escaped in titles, stems and answer strings.
export const giftEscape=s=>s.replace(/\\/g,'\\\\').replace(/([~=#{}:])/g,'\\$1').replace(/\r?\n/g,'\\n');
export function artifact(input,review,count,v){validateReview(input,review,count);return {schema:'distractor-desk/v1',model:MODEL,input:structuredClone(input),wrongAnswers:count,review:structuredClone(review),metrics:metrics(input,v,review,count)};}
export function gift(doc){return doc.review.filter(r=>r.include).map(r=>{const correct=doc.input.find(c=>c.id===r.id);return `::${giftEscape(correct.id)}::[plain]${giftEscape(r.stem)} {\n=${giftEscape(correct.term)}\n${r.choices.map(id=>'~'+giftEscape(doc.input.find(c=>c.id===id).term)).join('\n')}\n}`;}).join('\n\n')+'\n';}
