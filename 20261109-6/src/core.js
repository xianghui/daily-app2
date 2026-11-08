import Papa from 'papaparse';
export const examples=[{
 name:'Support onboarding',schema:'privilege-quilt/v1',maxExtra:0,forbidden:['delete'],
 permissions:[{id:'read',text:'Read customer support tickets and conversations'},{id:'reply',text:'Write replies to customer support tickets'},{id:'export',text:'Export financial billing reports and invoices'},{id:'delete',text:'Permanently delete customer accounts'}],
 roles:[{id:'reader',permissions:['read']},{id:'responder',permissions:['read','reply']},{id:'finance',permissions:['export']},{id:'admin',permissions:['read','reply','export','delete']}],
 needs:[{id:'N1',text:'Look up incoming helpdesk cases and read the conversation.'},{id:'N2',text:'Send an answer to a customer asking for help.'},{id:'N3',text:'Download a spreadsheet of billing invoices for month end.'}]
},{name:'Publishing onboarding',schema:'privilege-quilt/v1',maxExtra:0,forbidden:['erase'],
 permissions:[{id:'draft',text:'Create and edit draft blog articles'},{id:'publish',text:'Publish approved blog articles to the public website'},{id:'stats',text:'Read website traffic analytics and visitor reports'},{id:'erase',text:'Permanently erase the entire website'}],
 roles:[{id:'author',permissions:['draft']},{id:'editor',permissions:['draft','publish']},{id:'analyst',permissions:['stats']},{id:'owner',permissions:['draft','publish','stats','erase']}],
 needs:[{id:'N1',text:'Write unpublished posts and revise article drafts.'},{id:'N2',text:'Make an approved blog post live on the site.'},{id:'N3',text:'Inspect visitor counts and traffic dashboards.'}]
}];
function bounded(s,n=300){return typeof s==='string'&&s.trim().length>0&&s.length<=n}
function ids(a){return new Set(a.map(r=>r.id)).size===a.length&&a.every(r=>bounded(r.id,40))}
export function parse(s){if(s.length>50000)throw Error('Input exceeds 50 KB.');let d;try{d=JSON.parse(s)}catch{throw Error('Paste valid JSON.')}d=d?.originalInput??d;if(!d||d.schema!=='privilege-quilt/v1')throw Error('Use privilege-quilt/v1 JSON or its audit export.');
 for(const [k,max] of [['needs',16],['permissions',12],['roles',12]])if(!Array.isArray(d[k])||!d[k].length||d[k].length>max||!ids(d[k]))throw Error(`${k}: use 1–${max} records with unique nonempty IDs (max 40 characters).`);
 if(![...d.needs,...d.permissions].every(r=>bounded(r.text)))throw Error('Each need/permission requires text, at most 300 characters.');
 const allowed=new Set(d.permissions.map(p=>p.id));if(!d.roles.every(r=>Array.isArray(r.permissions)&&r.permissions.length>0&&new Set(r.permissions).size===r.permissions.length&&r.permissions.every(p=>allowed.has(p))))throw Error('Roles must contain unique, known permission IDs.');
 if(!Number.isInteger(d.maxExtra)||d.maxExtra<0||d.maxExtra>12||!Array.isArray(d.forbidden)||!d.forbidden.every(p=>allowed.has(p)))throw Error('maxExtra must be an integer 0–12; forbidden must contain known permission IDs.');
 return structuredClone(d)}
export const texts=d=>[...d.needs,...d.permissions].map(r=>r.text);
export function suggest(d,v){const n=texts(d).length;if(!Array.isArray(v)||v.length!==n||!v.every(a=>Array.isArray(a)&&a.length===384&&a.every(Number.isFinite)&&Math.abs(a.reduce((s,x)=>s+x*x,0)-1)<.02))throw Error('Malformed AI embeddings. Retry the real model.');
 return d.needs.map((r,i)=>{const candidates=d.permissions.map((p,j)=>({id:p.id,score:v[i].reduce((s,x,k)=>s+x*v[d.needs.length+j][k],0)})).sort((a,b)=>b.score-a.score);return {...r,candidates,proposed:candidates[0].id,permission:candidates[0].id,decision:'pending',note:''}})}
export function bundle(d,required){const need=new Set(required),blocked=new Set(d.forbidden);let best=null;
 for(let mask=0;mask<(1<<d.roles.length);mask++){const roles=d.roles.filter((_,i)=>mask&(1<<i)),granted=[...new Set(roles.flatMap(r=>r.permissions))];if(granted.some(p=>blocked.has(p))||[...need].some(p=>!granted.includes(p)))continue;const extras=granted.filter(p=>!need.has(p));if(extras.length>d.maxExtra)continue;const candidate={roles:roles.map(r=>r.id),granted,extras};if(!best||extras.length<best.extras.length||(extras.length===best.extras.length&&roles.length<best.roles.length))best=candidate;}
 return best}
export function plan(d,rows){if(!d||rows.length!==d.needs.length||rows.some((r,i)=>r.id!==d.needs[i].id||!['approve','hold'].includes(r.decision)||!d.permissions.some(p=>p.id===r.permission)||typeof r.note!=='string'||r.note.length>500))throw Error('Review every need: approve a verified mapping or hold it.');const approved=rows.filter(r=>r.decision==='approve'),required=[...new Set(approved.map(r=>r.permission))],chosen=bundle(d,required);if(!chosen)throw Error('No role bundle satisfies your reviewed needs, forbidden permissions and extra-access cap. Hold a need or revise the catalog/constraints.');
 const baseline=d.needs.filter(r=>d.permissions.some(p=>p.text.trim().toLowerCase()===r.text.trim().toLowerCase())).length;
 return {schema:'privilege-quilt-audit/v1',originalInput:structuredClone(d),needs:structuredClone(rows),required,bundle:chosen,metrics:{total:rows.length,approved:approved.length,held:rows.length-approved.length,exactBaseline:baseline,aiSuggested:rows.length,extraPermissions:chosen.extras.length,roleCount:chosen.roles.length}}}
export function csv(a){return Papa.unparse(a.needs.map(r=>({id:r.id,source:r.text,aiProposal:r.proposed,reviewedPermission:r.permission,decision:r.decision,note:r.note,topSimilarity:r.candidates[0].score})),{escapeFormulae:/^[=+\-@\t\r]/})}
const clean=s=>String(s).replace(/[\\`*_{}\[\]<>#|]/g,'\\$&').replace(/\r?\n/g,' ');
export function markdown(a){return ['# Privilege Quilt — reviewed access plan','Manual implementation only. This is not an authorization decision or account change.',`Roles: ${a.bundle.roles.map(clean).join(', ')||'none'}`,`Required permissions: ${a.required.map(clean).join(', ')||'none'}`,`Extra permissions: ${a.bundle.extras.map(clean).join(', ')||'none'}`,...a.needs.map(r=>`- [${r.decision==='approve'?'x':' '}] ${clean(r.id)}: ${clean(r.text)} → ${clean(r.permission)} (${r.decision}). ${clean(r.note)}`),'','Similarity is not entitlement. Verify identities, policy, separation of duties and real role definitions.'].join('\n')}
