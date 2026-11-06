export const examples={
checkout:`I cannot finish my purchase because my card payment is declined.
The checkout rejects my credit card when I try to pay.
Please let me download an invoice as a PDF.
I need a printable receipt for my accountant.
I want to use the app at night without a bright screen.
A dark theme would be easier on my eyes.`,
workplace:`I forgot my password and cannot sign in.
How do I reset my password to access my account?
Can I invite colleagues to collaborate on a project?
I need to add teammates to our shared workspace.
Please allow me to export my records into a spreadsheet.
I want to download my data as a CSV file.`};
export function parse(text){if(typeof text!=='string'||text.length>20000)throw Error('Input must be text up to 20,000 characters.');const rows=text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);if(!rows.length||rows.length>32)throw Error('Enter 1–32 nonempty feedback lines.');if(rows.some(s=>s.length>500))throw Error('Each feedback line must be at most 500 characters. Split long notes first.');return rows.map((text,i)=>({id:i+1,text}));}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(r=>!Array.isArray(r)||r.length!==384||r.some(x=>!Number.isFinite(x))||Math.abs(r.reduce((a,x)=>a+x*x,0)-1)>.02))throw Error('Invalid model output: expected normalized 384-dimensional vectors. Retry model loading.');return v;}
export const cosine=(a,b)=>Math.max(-1,Math.min(1,a.reduce((sum,x,i)=>sum+x*b[i],0)));
export function cluster(rows,v,threshold){validateVectors(v,rows.length);let groups=rows.map((_,i)=>[i]);while(true){let best=threshold,pair=null;for(let a=0;a<groups.length;a++)for(let b=a+1;b<groups.length;b++){let score=Math.min(...groups[a].flatMap(i=>groups[b].map(j=>cosine(v[i],v[j]))));if(score>=best){best=score;pair=[a,b]}}if(!pair)break;const[a,b]=pair;groups[a].push(...groups[b]);groups.splice(b,1)}return groups.flatMap(g=>g.map(i=>({...rows[i],group:Math.min(...g)+1,reason:g.length===1?'No complete-link group meets the threshold.':`All source pairs in this suggested group meet cosine ≥ ${threshold.toFixed(2)}.`,nearest:rows.length>1?Math.max(...rows.filter((_,j)=>j!==i).map(r=>cosine(v[i],v[r.id-1]))):null}))).sort((a,b)=>a.id-b.id);}
export function artifact(rows,reviewed,labels,threshold){if(reviewed.length!==rows.length||new Set(reviewed.map(r=>r.id)).size!==rows.length||reviewed.some((r,i)=>r.id!==rows[i].id||r.text!==rows[i].text||!Number.isInteger(r.group)||r.group<1||r.group>rows.length))throw Error('Invalid review: every original record must occur once with a valid group.');return {app:'Signal Fold',model:'Xenova/all-MiniLM-L6-v2 q8',threshold,records:reviewed.map(r=>({...r,theme:labels[r.group]||`Theme ${r.group}`})),metrics:{records:rows.length,themes:new Set(reviewed.map(r=>r.group)).size,exactTextBaseline:new Set(rows.map(r=>r.text.toLowerCase())).size}};}
export function csv(a){const cell=x=>'"'+String(x??'').replaceAll('"','""')+'"';return [['id','original_feedback','theme_id','theme','reason','nearest_cosine'],...a.records.map(r=>[r.id,r.text,r.group,r.theme,r.reason,r.nearest])].map(r=>r.map(cell).join(',')).join('\r\n');}
