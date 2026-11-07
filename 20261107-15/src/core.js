import Papa from 'papaparse';
export const examples={
 'Product summit':`id,title,text
A1,Passwordless access,Signing into accounts using passkeys instead of passwords.
B1,Accessible interfaces,Designing websites for blind users with screen readers and keyboard navigation.
C1,Fast databases,Optimizing SQL queries indexes and database performance.
B2,Inclusive web,Making web interfaces accessible to people with visual disabilities.
C2,Query tuning,Improving slow database queries with better indexing strategies.
A2,Modern login,Replacing account passwords with secure passkey authentication.`,
 'Community festival':`id,title,text
A1,City gardens,Growing vegetables in small urban spaces and community gardens.
B1,Repair corner,Repairing damaged clothing with sewing and patching techniques.
C1,Everyday bread,Baking bread with sourdough starter and kneading dough.
B2,Mend it,Fixing torn garments by stitching patches and sewing seams.
C2,Sourdough basics,Making homemade sourdough bread from flour starter and dough.
A2,Urban harvest,Cultivating vegetables in city allotments and rooftop gardens.`
};
export function inputs(text,slots,floor){
 if(typeof text!=='string'||new TextEncoder().encode(text).length>16000)throw Error('CSV must be at most 16 KB UTF-8.');
 if(!['2','3'].includes(String(slots)))throw Error('Choose 2 or 3 time blocks.');
 if(String(floor).trim()===''||!Number.isFinite(+floor)||+floor<.2||+floor>.95)throw Error('Similarity floor must be 0.20–0.95.');
 const a=Papa.parse(text,{skipEmptyLines:'greedy'});if(a.errors.length||a.data.length<3||a.data[0].join(',')!=='id,title,text')throw Error('Use CSV header id,title,text and at least two sessions.');
 if(a.data.length>13)throw Error('At most 12 sessions.');const ids=new Set();
 const sessions=a.data.slice(1).map((r,i)=>{if(r.length!==3||!r[0].trim()||r[0].length>60||ids.has(r[0])||!r[1].trim()||r[1].length>100||!r[2].trim()||r[2].length>300)throw Error('Row '+(i+1)+': unique ID (1–60), title (1–100) and description (1–300 characters) required.');ids.add(r[0]);return{id:r[0],title:r[1],text:r[2]};});
 if(sessions.length<+slots)throw Error('Need at least one session per time block.');
 return{sessions,slots:+slots,floor:+floor,capacity:Math.ceil(sessions.length/+slots)};
}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(r=>!Array.isArray(r)||r.length!==384||r.some(x=>!Number.isFinite(x))||Math.abs(r.reduce((s,x)=>s+x*x,0)-1)>.03))throw Error('Invalid AI output: expected finite normalized 384-dimensional vectors for every session.');}
export function score(matrix,assignment,floor){let cost=0,pairs=0;for(let i=0;i<assignment.length;i++)for(let j=0;j<i;j++)if(assignment[i]===assignment[j]&&matrix[i][j]>=floor){cost+=matrix[i][j];pairs++;}return{cost,pairs};}
export function optimize(matrix,slots,capacity,floor){const n=matrix.length,current=[],counts=Array(slots).fill(0);let best=null,bestCost=Infinity,visited=0;
 function visit(i,cost){if(cost>bestCost+1e-10)return;if(i===n){if(counts.some(x=>!x))return;visited++;if(cost<bestCost-1e-10){bestCost=cost;best=[...current];}return;}
 for(let block=0;block<slots;block++){if(counts[block]>=capacity)continue;if(block>0&&counts[block]===0&&counts[block-1]===0)break;let add=0;for(let j=0;j<i;j++)if(current[j]===block&&matrix[i][j]>=floor)add+=matrix[i][j];current[i]=block;counts[block]++;visit(i+1,cost+add);counts[block]--;}}
 visit(0,0);if(!best)throw Error('No feasible schedule.');return{assignment:best,visited};}
export function suggest(d,v){validateVectors(v,d.sessions.length);const matrix=v.map(a=>v.map(b=>Math.max(-1,Math.min(1,a.reduce((s,x,k)=>s+x*b[k],0)))));const result=optimize(matrix,d.slots,d.capacity,d.floor);return{matrix,visited:result.visited,rows:d.sessions.map((r,i)=>({id:r.id,block:result.assignment[i],suggested:result.assignment[i],reviewed:false,note:''}))};}
export function metrics(d,m,rows){const assignment=rows.map(r=>r.block),counts=Array.from({length:d.slots},(_,i)=>assignment.filter(x=>x===i).length);return{...score(m,assignment,d.floor),counts,valid:counts.every(x=>x>0&&x<=d.capacity),baseline:score(m,d.sessions.map((_,i)=>i%d.slots),d.floor)};}
export function artifact(d,m,rows){if(!Array.isArray(rows)||rows.length!==d.sessions.length||rows.some((r,i)=>r.id!==d.sessions[i].id||!Number.isInteger(r.block)||r.block<0||r.block>=d.slots||!r.reviewed||typeof r.note!=='string'||r.note.length>500))throw Error('Review every session and select a valid time block.');if(!Array.isArray(m)||m.length!==rows.length||m.some(r=>!Array.isArray(r)||r.length!==rows.length||r.some(x=>!Number.isFinite(x)||Math.abs(x)>1.001)))throw Error('Invalid similarity matrix.');const stats=metrics(d,m,rows);if(!stats.valid)throw Error('Every block must contain 1–'+d.capacity+' sessions. Move a session to fix the capacity conflict.');return{app:'Parallel Room',version:1,model:'Xenova/all-MiniLM-L6-v2 q8',original:structuredClone(d),similarity:structuredClone(m),rows:rows.map((r,i)=>({...r,source:{...d.sessions[i]},room:rows.slice(0,i+1).filter(x=>x.block===r.block).length})),metrics:stats,notice:'Topic-only planning. No dates, speakers or room equipment constraints are inferred. Room numbers are deterministic input-order assignments within each block.'};}
export function csvOutput(a){return Papa.unparse(a.rows.map(r=>({id:r.id,title:r.source.title,description:r.source.text,block:r.block+1,room:r.room,note:r.note})),{escapeFormulae:/^[=+\-@\t\r]/});}
