export const samples = {
 shelf: [
 {id:'returns',question:'How do I return an item for a refund?',answer:'Unused items can be returned within 30 days. Request a return label from the order page.'},
 {id:'delivery',question:'Where is my package and how do I track delivery?',answer:'Open your order confirmation and follow the tracking link. Tracking updates can take 24 hours.'},
 {id:'password',question:'How do I reset a forgotten password?',answer:'Select Forgot password on the sign-in page. A reset link expires after 30 minutes.'},
 {id:'invoice',question:'Can I get an invoice or receipt for my purchase?',answer:'Download your receipt from Orders → Billing documents.'},
 {id:'cancel',question:'How do I cancel my subscription membership?',answer:'Go to Account → Membership → Cancel renewal. Access continues until the end of the paid period.'}
 ],
 questions:'I cannot remember my login secret. How can I access my account again?\nThe parcel has not arrived. Can I see its shipping progress?\nI need proof of payment for our finance department.',
 second:'I want to send back these unused shoes and get my money back.\nPlease stop the recurring membership charges.\nDo you offer helicopter rides on Mars?'
};
export function parseInputs(text,shelfText){
 if(text.length>16000||shelfText.length>24000)throw Error('Input too large: questions ≤16,000 characters; shelf ≤24,000.');
 const questions=text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
 if(!questions.length||questions.length>24||questions.some(s=>s.length>600))throw Error('Enter 1–24 questions, one per line, each ≤600 characters.');
 let shelf;try{shelf=JSON.parse(shelfText)}catch{throw Error('Shelf must be a JSON array. Use the synthetic example for the format.');}
 if(!Array.isArray(shelf)||!shelf.length||shelf.length>16)throw Error('Shelf requires 1–16 approved answer records.');
 const ids=new Set();for(const s of shelf){if(!s||typeof s.id!=='string'||!s.id.trim()||s.id.length>60||ids.has(s.id)||typeof s.question!=='string'||!s.question.trim()||s.question.length>600||typeof s.answer!=='string'||!s.answer.trim()||s.answer.length>1200)throw Error('Each shelf record needs a unique id (≤60), question (≤600), and answer (≤1,200), all nonempty strings.');ids.add(s.id);}
 return {questions,shelf};
}
export function validateVectors(v,count){if(!Array.isArray(v)||v.length!==count||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))||Math.abs(a.reduce((s,x)=>s+x*x,0)-1)>.03))throw Error('Invalid AI embeddings. Retry the model; no results were applied.');return v;}
export function lexical(q,s){const words=x=>new Set(x.toLowerCase().match(/[a-z0-9]+/g)||[]);const a=words(q),b=words(s);return [...a].filter(x=>b.has(x)).length/(new Set([...a,...b]).size||1);}
export function match(questions,shelf,v,threshold){validateVectors(v,questions.length+shelf.length);return questions.map((question,i)=>{const rank=shelf.map((s,j)=>({id:s.id,score:v[i].reduce((sum,x,k)=>sum+x*v[questions.length+j][k],0)})).sort((a,b)=>b.score-a.score);const top=rank[0],source=shelf.find(s=>s.id===top.id);const baseline=[...shelf].sort((a,b)=>lexical(question,b.question)-lexical(question,a.question))[0].id;return {id:i+1,question,sourceId:top.id,similarity:top.score,alternatives:rank.slice(0,3),baseline,accepted:top.score>=threshold,answer:source.answer};});}
export function artifact(rows,shelf){return {format:'reply-shelf-v1',records:rows.map(r=>({id:r.id,question:r.question,status:r.accepted?'reviewed':'needs-human',sourceId:r.accepted?r.sourceId:null,answer:r.accepted?r.answer:'',suggestedSource:r.sourceId,similarity:r.similarity})),approvedShelf:shelf};}
export function csv(rows,shelf){const quote=x=>'"'+String(x??'').replaceAll('"','""')+'"';const a=artifact(rows,shelf);return [['id','question','status','sourceId','answer'],...a.records.map(r=>[r.id,r.question,r.status,r.sourceId,r.answer])].map(r=>r.map(quote).join(',')).join('\r\n');}
