import Papa from 'papaparse';
export const MODEL='Xenova/opus-mt-en-fr';
export const examples={
 'Visitor notices':'id,english\nV1,The museum is closed on Monday.\nV2,Please wash your hands before entering.\nV3,The guided tour starts at 10 and lasts 45 minutes.',
 'Service updates':'id,english\nS1,Your order is ready for collection.\nS2,Please do not park in front of the door.\nS3,The library has 20 computers and 3 meeting rooms.'
};
export function parseInput(text,terms=''){
 if(typeof text!=='string'||new TextEncoder().encode(text).length>24000)throw Error('Use at most 24 KB of CSV.');
 if(terms.length>200)throw Error('Protected terms must be at most 200 characters.');
 const protectedTerms=terms.split(',').map(s=>s.trim()).filter(Boolean);if(protectedTerms.length>10)throw Error('Use at most 10 protected terms.');
 const p=Papa.parse(text,{skipEmptyLines:'greedy'});if(p.errors.length||p.data.length<2||p.data[0].join(',')!=='id,english')throw Error('Use CSV header id,english and at least one notice.');
 const rows=p.data.slice(1);if(rows.length>12)throw Error('Use 1–12 notices.');const seen=new Set();
 return {protectedTerms,source:rows.map((r,i)=>{if(r.length!==2||!r[0].trim()||r[0].length>80||!r[1].trim()||r[1].length>350)throw Error('Row '+(i+1)+': ID needs 1–80 characters; English notice needs 1–350 characters.');if(seen.has(r[0]))throw Error('IDs must be unique.');seen.add(r[0]);return {id:r[0],english:r[1]};})};
}
export function warnings(source,target,terms){
 const nums=t=>(t.match(/\d+(?:[.,:]\d+)*/g)||[]).sort();const out=[];
 if(JSON.stringify(nums(source))!==JSON.stringify(nums(target)))out.push('Numeric tokens differ: check times, amounts and quantities.');
 const missing=terms.filter(t=>source.includes(t)&&!target.includes(t));if(missing.length)out.push('Protected terms changed or missing: '+missing.join(', '));
 if(!target.trim())out.push('No French draft.');return out;
}
export function suggestions(d,p){if(!Array.isArray(p)||p.length!==d.source.length||p.some(r=>!r||typeof r.translation_text!=='string'||!r.translation_text.trim()||r.translation_text.length>1500))throw Error('Malformed translation output; no draft applied.');return p.map((r,i)=>({id:d.source[i].id,suggested:r.translation_text,french:r.translation_text,status:'pending',note:''}));}
export function artifact(d,rows){if(rows.length!==d.source.length||rows.some((r,i)=>r.id!==d.source[i].id||!['pending','approved','rejected'].includes(r.status)||typeof r.french!=='string'||r.french.length>1500||typeof r.note!=='string'||r.note.length>500||typeof r.suggested!=='string'))throw Error('Invalid review schema. Preserve every source row.');
 const all=rows.map((r,i)=>({source:{...d.source[i]},...r,warnings:warnings(d.source[i].english,r.french,d.protectedTerms)}));
 if(all.some(r=>r.status==='approved'&&r.warnings.length))throw Error('Approved notices must preserve numbers and protected terms. Edit the draft or mark it pending/rejected.');
 return {app:'Notice Atelier',version:1,model:MODEL+' q8 WASM',direction:'en → fr',protectedTerms:d.protectedTerms,metrics:{total:rows.length,approved:rows.filter(r=>r.status==='approved').length,pending:rows.filter(r=>r.status==='pending').length,flagged:all.filter(r=>r.warnings.length).length,changedFromCopyBaseline:all.filter(r=>r.french!==r.source.english).length},rows:all};
}
export function csvOutput(a){return Papa.unparse({fields:['id','original_english','ai_french_draft','reviewed_french','status','review_note','validation_flags'],data:a.rows.map(r=>[r.id,r.source.english,r.suggested,r.status==='rejected'?'':r.french,r.status,r.note,r.warnings.join(' | ')])},{escapeFormulae:/^[=+\-@\t\r]/});}
