export const plans=[
{id:'search',description:'Web search engine indexing HTML pages and website articles for general search results.',agent:'SearchBot'},
{id:'images',description:'Image search crawler collecting photographs, thumbnails and picture files for visual search.',agent:'ImageBot'},
{id:'archive',description:'Historical web archive preserving snapshots and old versions for long term conservation.',agent:'ArchiveBot'}];
export const robots=`# Synthetic policy: not a live website
User-agent: *
Disallow: /drafts/
Allow: /drafts/public/
Disallow: /*.tmp$

User-agent: SearchBot
Disallow: /drafts/
Allow: /drafts/public/
Disallow: /assets/

User-agent: ImageBot
Disallow: /assets/
Allow: /assets/photos/
Disallow: /*.tmp$

User-agent: ArchiveBot
Disallow: /
Allow: /history/

User-agent: imagebot
Allow: /assets/thumbs/
`;
const raw=path=>JSON.stringify({path});
export const examples=[{name:'Editorial launch',data:{plans,robots,records:[
{id:'Public draft',context:'Index website articles and HTML pages in general web search results.',raw:raw('/drafts/public/welcome')},
{id:'Photo library',context:'Collect photographs and picture thumbnails for the visual image search engine.',raw:raw('/assets/photos/fern.jpg')},
{id:'Preserved history',context:'Preserve historical snapshots and old versions for the long term web archive.',raw:raw('/history/2020')},
{id:'Private draft',context:'Index HTML website articles for general web search results.',raw:raw('/drafts/private')}
]},expected:['search','images','archive','search']},
{name:'Media & archive review',data:{plans,robots,records:[
{id:'Thumbnail exception',context:'Crawl picture thumbnails and photographs for visual image search results.',raw:raw('/assets/thumbs/tiny.jpg')},
{id:'Current landing',context:'Collect old website snapshots for historical preservation in a web archive.',raw:raw('/welcome')},
{id:'Picture temp',context:'Collect photographs and image files for visual picture search.',raw:raw('/assets/photos/unfinished.tmp')},
{id:'Search assets',context:'Index HTML website pages and articles for general web search results.',raw:raw('/assets/site.css')}
]},expected:['images','archive','images','search']}];
const text=(s,n)=>typeof s==='string'&&s.trim().length>0&&s.length<=n;
export function validatePlan(p){if(!p||!text(p.id,60)||!text(p.description,200)||typeof p.agent!=='string'||!/[A-Za-z]/.test(p.agent)||!/^[-A-Za-z0-9_]{1,60}$/.test(p.agent))throw Error('Profiles need ID ≤60, description ≤200 and ASCII product token 1–60 characters (letters, digits, underscore or hyphen; at least one letter).');}
export function parsePolicy(policy){if(typeof policy!=='string'||policy.length>8000||policy.split('\n').length>80||/[^\x09\x0a\x0d\x20-\x7e]/.test(policy))throw Error('Policy requires ASCII robots text ≤8000 characters and ≤80 lines.');const groups=[];let group=null;for(const [i,source]of policy.split('\n').entries()){const line=source.split('#')[0].trim();if(!line)continue;const m=line.match(/^([A-Za-z-]+)\s*:\s*(.*?)\s*$/);if(!m)throw Error('Malformed policy line '+(i+1));const key=m[1].toLowerCase(),value=m[2];if(key==='user-agent'){if(value!=='*'&&!/^[-A-Za-z0-9_]{1,60}$/.test(value))throw Error('Invalid agent on line '+(i+1));if(!group||group.rules.length){group={agents:[],rules:[]};groups.push(group)}group.agents.push(value.toLowerCase());}else if(key==='allow'||key==='disallow'){if(!group)throw Error('Rules require a preceding User-agent.');if(value&&(!value.startsWith('/')||value.length>180||/[\s%\\]/.test(value)||value.slice(0,-1).includes('$')))throw Error('Rule line '+(i+1)+' requires an ASCII slash pattern ≤180, no whitespace, percent encoding or backslashes; $ only at end.');group.rules.push({type:key,pattern:value,line:i+1,specificity:value.replaceAll('*','').replace(/\$$/,'').length});}else throw Error('Unsupported directive '+m[1]+' on line '+(i+1)+'. Only User-agent, Allow and Disallow are supported.');}if(!groups.length)throw Error('Policy needs at least one User-agent group.');return groups;}
export function parse(s){if(typeof s!=='string'||s.length>50000)throw Error('Source JSON must be at most 50,000 characters.');let d;try{d=JSON.parse(s)}catch{throw Error('Enter valid JSON or choose a synthetic example.')}if(!d||!Array.isArray(d.plans)||d.plans.length<2||d.plans.length>5||!Array.isArray(d.records)||!d.records.length||d.records.length>24)throw Error('Use 2–5 crawler profiles and 1–24 cases.');parsePolicy(d.robots);let ids=new Set;for(const p of d.plans){validatePlan(p);if(ids.has(p.id))throw Error('Profile IDs must be unique.');ids.add(p.id)}ids.clear();for(const r of d.records){if(!r||!text(r.id,80)||ids.has(r.id)||!text(r.context,200)||typeof r.raw!=='string'||r.raw.length>1500)throw Error('Records need unique IDs ≤80, context ≤200 and path JSON ≤1500 characters.');ids.add(r.id)}return structuredClone(d)}
export function texts(d){return [...d.plans.map(p=>p.description),...d.records.map(r=>r.context)]}
export function suggest(d,v){if(!Array.isArray(v)||v.length!==d.plans.length+d.records.length||!v.every(a=>Array.isArray(a)&&a.length===384&&a.every(Number.isFinite)&&Math.abs(Math.hypot(...a)-1)<.02))throw Error('Malformed model vectors. Retry; no suggestions applied.');return d.records.map((r,i)=>{const evidence=d.plans.map((p,j)=>({system:p.id,similarity:v[j].reduce((s,x,k)=>s+x*v[d.plans.length+i][k],0)})).sort((a,b)=>b.similarity-a.similarity);return{id:r.id,system:evidence[0].system,raw:r.raw,decision:'pending',note:'',evidence}})}
function matches(pattern,path){if(!pattern)return false;const end=pattern.endsWith('$'),body=end?pattern.slice(0,-1):pattern;let previous=Array(path.length+1).fill(false);previous[0]=true;for(const c of body){const next=Array(path.length+1).fill(false);if(c==='*'){next[0]=previous[0];for(let j=1;j<=path.length;j++)next[j]=previous[j]||next[j-1];}else for(let j=1;j<=path.length;j++)next[j]=previous[j-1]&&c===path[j-1];previous=next;}return end?previous[path.length]:previous.some(Boolean)}
export function inspect(raw,p,policy){validatePlan(p);if(typeof raw!=='string'||raw.length>1500)throw Error('Path JSON must be ≤1500 characters.');let s;try{s=JSON.parse(raw)}catch{throw Error('Case must be valid JSON.')}if(!s||Array.isArray(s)||typeof s!=='object'||Object.keys(s).length!==1||typeof s.path!=='string'||!s.path.startsWith('/')||s.path.length>240||/[^\x21-\x7e]|[%#\\]/.test(s.path))throw Error('Exactly {"path":"/..."} required: ASCII unencoded path/query ≤240 characters; no spaces, percent escapes, fragments or backslashes.');const all=parsePolicy(policy),agent=p.agent.toLowerCase();const strengths=all.map(g=>Math.max(0,...g.agents.filter(a=>a!=='*'&&agent.includes(a)).map(a=>a.length))),best=Math.max(...strengths);const selectedGroups=all.filter((g,i)=>best?strengths[i]===best:g.agents.includes('*'));const rules=selectedGroups.flatMap(g=>g.rules).filter(r=>matches(r.pattern,s.path));const ranked=[...rules].sort((a,b)=>b.specificity-a.specificity||(a.type==='allow'?-1:1)-(b.type==='allow'?-1:1)||a.line-b.line);const win=ranked[0];const selected=win?.type||'allow',baseline=rules[0]?.type||'allow';return{agent:p.agent,path:s.path,selected,baseline,disagreement:selected!==baseline,groups:selectedGroups.map(g=>g.agents.join(' + ')),winner:win?`Line ${win.line} · ${win.type}: ${win.pattern}`:null,winningLine:win?.line||null,specificity:win?.specificity||0,matchedRules:rules,reason:win?'Longest literal matching directive; equal specificity favors Allow. Specific agent groups replace wildcard groups.':'No matching directive in selected groups; this subset permits crawling by default.'}}
export function analyze(d,rows){if(!d||!Array.isArray(rows)||rows.length!==d.records.length)throw Error('Review count does not match originals.');const checks=rows.map((r,i)=>{if(!r||r.id!==d.records[i].id||!d.plans.some(p=>p.id===r.system)||typeof r.raw!=='string'||r.raw.length>1500||typeof r.note!=='string'||r.note.length>2000||!['approve','hold'].includes(r.decision))throw Error('Approve or hold every record with valid profile, case and note.');const base={id:r.id,system:r.system,raw:r.raw};if(r.decision==='hold')return{...base,status:'held',reason:'Reviewer hold; no release.'};try{return{...base,...inspect(r.raw,d.plans.find(p=>p.id===r.system),d.robots),status:'ready'}}catch(e){return{...base,status:'blocked',reason:e.message}}});return{version:1,app:'Crawl Compass',originalInput:structuredClone(d),reviews:structuredClone(rows),checks,metrics:{records:checks.length,ready:checks.filter(c=>c.status==='ready').length,held:checks.filter(c=>c.status==='held').length,blocked:checks.filter(c=>c.status==='blocked').length,allowed:checks.filter(c=>c.status==='ready'&&c.selected==='allow').length,disallowed:checks.filter(c=>c.status==='ready'&&c.selected==='disallow').length,disagreements:checks.filter(c=>c.disagreement).length}}}
function cell(v){let s=String(v??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"'}
export function csv(r){return[['id','source_context','robots_policy','profile_description','original_case','reviewed_case','profile','decision','status','agent','path','crawl','first_match','winning_rule','reason','review_note'].map(cell).join(','),...r.checks.map((c,i)=>[c.id,r.originalInput.records[i].context,r.originalInput.robots,r.originalInput.plans.find(p=>p.id===c.system).description,r.originalInput.records[i].raw,c.raw,c.system,r.reviews[i].decision,c.status,c.agent,c.path,c.selected,c.baseline,c.winner,c.reason,r.reviews[i].note].map(cell).join(','))].join('\r\n')}
export function release(r){return{format:'crawl-compass-fixtures-v1',notice:'Offline QA fixtures for a bounded ASCII robots subset, not a live crawler or authorization check.',robots:r.originalInput.robots,cases:r.checks.filter(c=>c.status==='ready').map(c=>({id:c.id,profile:c.system,agent:c.agent,path:c.path,expected:c.selected,winningLine:c.winningLine}))}}
export function markdown(r){return '# Crawl Compass\n\nOFFLINE REVIEW ONLY — no website requests or policy changes.\n\nOriginal input: '+JSON.stringify(r.originalInput)+'\n\n'+r.checks.map((c,i)=>`${i+1}. ${JSON.stringify(c.id)} · ${c.status}\n   Source: ${JSON.stringify(r.originalInput.records[i])}\n   Review: ${JSON.stringify(r.reviews[i])}\n   Check: ${JSON.stringify(c)}`).join('\n\n')+'\n\nComputed counts: '+JSON.stringify(r.metrics)+'\n\nBaseline selects first matching directive within the correctly chosen agent groups, ignoring longest-rule precedence. Differences are computed decisions, not accuracy or time saved.'}
