import Papa from 'papaparse';
export const examples={
 'Customer help':{source:'id,split,text\nT1,train,Customers may return a product within thirty days for a full refund.\nT2,train,Reset your forgotten password by clicking the recovery link in the sign in page.\nT3,train,Shipping is free for orders over fifty dollars.\nE1,eval,You can get all your money back if you send the item back within thirty days.\nE2,eval,Shipping is free for orders over fifty dollars.\nE3,eval,The botanical garden opens a new orchid exhibition on Saturday.'},
 'Workplace safety':{source:'id,split,text\nT1,train,Wear protective goggles to shield your eyes when handling chemical substances.\nT2,train,In case of fire leave the building using the nearest emergency exit.\nT3,train,Wash your hands with soap before preparing food.\nE1,eval,Put on safety glasses to protect your eyes while working with chemicals.\nE2,eval,If a fire breaks out evacuate through the closest emergency door.\nE3,eval,The jazz trio performs at the riverside festival this evening.'}
};
const normalize=s=>s.trim().toLowerCase().replace(/\s+/gu,' ');
export function inputs(text,threshold){
 if(typeof text!=='string'||new TextEncoder().encode(text).length>40000)throw Error('CSV must be at most 40 KB UTF-8.');
 threshold=Number(threshold);if(!Number.isFinite(threshold)||threshold<.5||threshold>.95)throw Error('Similarity threshold must be 0.50–0.95.');
 const p=Papa.parse(text,{skipEmptyLines:'greedy'});if(p.errors.length||p.data.length<3||p.data[0].join(',')!=='id,split,text')throw Error('Use CSV header id,split,text with at least one train and one eval row.');
 if(p.data.length>81)throw Error('At most 80 total rows per audit.');const ids=new Set();
 const rows=p.data.slice(1).map((r,i)=>{if(r.length!==3||!r[0].trim()||r[0].length>80||!['train','eval'].includes(r[1])||!r[2].trim()||r[2].length>300)throw Error('Row '+(i+1)+': unique ID (1–80 chars), split train/eval, text (1–300 chars) required.');if(ids.has(r[0]))throw Error('IDs must be unique across both splits.');ids.add(r[0]);return {id:r[0],split:r[1],text:r[2]};});
 if(!rows.some(r=>r.split==='train')||!rows.some(r=>r.split==='eval'))throw Error('Both train and eval splits are required.');
 return {rows,threshold};
}
const dot=(a,b)=>a.reduce((s,n,i)=>s+n*b[i],0);
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(r=>!Array.isArray(r)||r.length!==384||r.some(x=>!Number.isFinite(x))||Math.abs(r.reduce((s,x)=>s+x*x,0)-1)>.03))throw Error('Invalid AI vector schema: expected normalized finite 384-dimensional vectors for every row.');}
export function suggest(d,v){validateVectors(v,d.rows.length);const train=d.rows.map((r,i)=>r.split==='train'?i:-1).filter(i=>i>=0);
 const findings=d.rows.map((r,i)=>{if(r.split==='train')return null;const ranked=train.map(j=>({index:j,score:dot(v[i],v[j])})).sort((a,b)=>b.score-a.score||a.index-b.index);const best=ranked[0];return {match:d.rows[best.index].id,score:best.score,exact:train.some(j=>normalize(d.rows[j].text)===normalize(r.text)),flag:best.score>=d.threshold};});
 return {findings,review:d.rows.map((r,i)=>({id:r.id,decision:findings[i]?.flag?'quarantine':'keep',reviewed:false,note:''}))};}
export function artifact(d,review,findings){
 if(!Array.isArray(review)||review.length!==d.rows.length||!Array.isArray(findings)||findings.length!==d.rows.length)throw Error('All original rows and findings must survive.');
 const train=d.rows.filter(r=>r.split==='train');
 review.forEach((r,i)=>{if(r.id!==d.rows[i].id||!['keep','quarantine'].includes(r.decision)||typeof r.reviewed!=='boolean'||typeof r.note!=='string'||r.note.length>500||d.rows[i].split==='train'&&r.decision!=='keep')throw Error('Invalid review schema. Training records must remain unchanged and kept.');const f=findings[i];if(d.rows[i].split==='eval'&&(!f||!Number.isFinite(f.score)||f.score>1.001||f.score< -1.001||!train.some(t=>t.id===f.match)||typeof f.exact!=='boolean'||f.flag!==(f.score>=d.threshold)))throw Error('Invalid match schema.');});
 const ev=d.rows.filter(r=>r.split==='eval').length;
 return {app:'Split Sentinel',version:1,model:'Xenova/all-MiniLM-L6-v2 q8',threshold:d.threshold,metrics:{trainingRows:train.length,evaluationRows:ev,pairsCompared:train.length*ev,exactBaselineFlags:findings.filter(f=>f?.exact).length,semanticFlags:findings.filter(f=>f?.flag).length,additionalSemanticFlags:findings.filter(f=>f?.flag&&!f.exact).length,quarantined:review.filter(r=>r.decision==='quarantine').length,keptEvaluation:review.filter((r,i)=>d.rows[i].split==='eval'&&r.decision==='keep').length,reviewedEvaluation:review.filter((r,i)=>d.rows[i].split==='eval'&&r.reviewed).length},rows:d.rows.map((r,i)=>({...r,...review[i],finding:findings[i]}))};
}
const safe={escapeFormulae:/^[=+\-@\t\r]/};
export function csvOutput(a){return Papa.unparse(a.rows.map(r=>({id:r.id,split:r.split,text:r.text,decision:r.decision,reviewed:r.reviewed,closest_train_id:r.finding?.match||'',similarity_not_confidence:r.finding?.score??'',exact_baseline:r.finding?.exact??'',ai_flag:r.finding?.flag??'',note:r.note})),safe);}
export function cleanCSV(a){return Papa.unparse(a.rows.filter(r=>r.decision==='keep').map(r=>({id:r.id,split:r.split,text:r.text})),safe);}
export function markdown(a){return '# Split Sentinel review\n\nSimilarity threshold: '+a.threshold+' (not confidence).\n\n'+a.metrics.quarantined+' evaluation rows quarantined; '+a.metrics.keptEvaluation+' kept. '+a.metrics.reviewedEvaluation+'/'+a.metrics.evaluationRows+' explicitly reviewed.\n\n'+a.rows.filter(r=>r.split==='eval').map(r=>'## '+r.id+' — '+r.decision+' ('+(r.reviewed?'reviewed':'not explicitly reviewed')+')\n\n'+r.text+'\n\nClosest training record: '+r.finding.match+'; cosine '+r.finding.score.toFixed(4)+'.\n\nReviewer note: '+(r.note||'—')).join('\n\n')+'\n';}
