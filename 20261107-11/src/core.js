export const examples={
 'Newsroom': 'My name is Sarah and I live in London. I work for Microsoft.\n\nJohn Smith joined Google in Berlin. He prefers working from home.',
 'Science desk': 'Marie Curie worked in Paris. Albert Einstein moved to Princeton.\n\nApple is based in California. Tim Cook visited London.'
};
export function parse(source){
 if(typeof source!=='string'||!source.trim())throw Error('Enter at least one non-empty excerpt.');
 if(new TextEncoder().encode(source).length>8000)throw Error('Input exceeds 8 KB. Use a smaller batch.');
 const parts=source.split(/(\r?\n[ \t]*\r?\n)/);const chunks=[];let offset=0;
 for(let i=0;i<parts.length;i++){if(i%2===0&&parts[i].trim()){if(parts[i].length>400)throw Error('Each excerpt must be at most 400 characters. Split longer excerpts with a blank line.');chunks.push({id:chunks.length+1,text:parts[i],offset})}offset+=parts[i].length}
 if(chunks.length>12)throw Error('At most 12 excerpts per batch.');
 return {source,chunks};
}
const kinds=['PER','ORG','LOC','MISC','MANUAL'];
// All model tokens, including O labels, must align with literal source text.
// No approximate/fuzzy mapping: abort instead of masking the wrong span.
export function align(d,predictions,scope){
 if(!Array.isArray(predictions)||predictions.length!==d.chunks.length)throw Error('Malformed AI output: wrong excerpt count.');
 const entities=[];
 predictions.forEach((tokens,ci)=>{
  if(!Array.isArray(tokens)||tokens.length===0||tokens.length>400)throw Error('Malformed AI output: invalid token count.');
  let cursor=0,lastIndex=0,open=null;
  for(const t of tokens){
   if(!t||typeof t.word!=='string'||!Number.isFinite(t.score)||t.score<0||t.score>1||!Number.isInteger(t.index)||t.index<=lastIndex||!/^O$|^[BI]-(PER|ORG|LOC|MISC)$/.test(t.entity))throw Error('Malformed AI output: invalid token schema.');
   const word=t.word.replace(/^##/,'');const start=d.chunks[ci].text.indexOf(word,cursor);
   if(!word||word==='[UNK]'||start<0||/\S/.test(d.chunks[ci].text.slice(cursor,start)))throw Error('AI tokens could not be aligned exactly. Try plain English text without unusual symbols; no index was created.');
   const end=start+word.length;cursor=end;lastIndex=t.index;
   if(t.entity==='O'){open=null;continue}
   const kind=t.entity.slice(2);
   if(open&&t.entity[0]==='I'&&open.kind===kind){open.end=end;open.original=d.chunks[ci].text.slice(open.start,end);open.canonical=open.original}
   else {open={id:'e'+entities.length,chunk:ci,start,end,kind,original:d.chunks[ci].text.slice(start,end),selected:scope.includes(kind),canonical:d.chunks[ci].text.slice(start,end),note:'',origin:'neural token classification'};entities.push(open)}
  }
  if(/\S/.test(d.chunks[ci].text.slice(cursor)))throw Error('AI did not cover the complete excerpt. Shorten the input and retry.');
 });
 return {entities,reviewed:d.chunks.map(()=>false)};
}
export function manual(d,state,phrase,kind='MANUAL'){
 if(!phrase||phrase.length>100)throw Error('Enter an exact phrase of 1–100 characters.');
 const next=structuredClone(state);let added=0;
 d.chunks.forEach((c,ci)=>{let cursor=0,start;while((start=c.text.indexOf(phrase,cursor))>=0){const end=start+phrase.length;cursor=end;if(next.entities.some(e=>e.chunk===ci&&e.start<end&&e.end>start))continue;next.entities.push({id:'m'+ci+'-'+start,chunk:ci,start,end,kind,original:phrase,selected:true,canonical:phrase,note:'',origin:'manual exact phrase'});next.reviewed[ci]=false;added++}});
 if(!added)throw Error('No new non-overlapping exact occurrence found. Edit an existing span instead.');
 return next;
}
export function baseline(d,terms){let n=0;for(const term of new Set(terms.split('\n').map(x=>x.trim()).filter(Boolean)))for(const c of d.chunks){let at=0;while((at=c.text.indexOf(term,at))>=0){n++;at+=term.length}}return n}
export function artifact(d,state,terms=''){
 if(!state||!Array.isArray(state.entities)||state.reviewed.length!==d.chunks.length||state.reviewed.some(x=>typeof x!=='boolean'))throw Error('Invalid review state.');
 const mentions=state.entities.map(e=>{const c=d.chunks[e.chunk];if(!c||!kinds.includes(e.kind)||!Number.isInteger(e.start)||!Number.isInteger(e.end)||e.start<0||e.end<=e.start||e.end>c.text.length||c.text.slice(e.start,e.end)!==e.original||typeof e.selected!=='boolean'||typeof e.canonical!=='string'||!e.canonical.trim()||e.canonical.length>100||typeof e.note!=='string'||e.note.length>300)throw Error('Invalid mention: use a nonempty canonical label up to 100 characters and note up to 300.');return {...e,canonical:e.canonical.trim(),excerpt:c.id,globalStart:c.offset+e.start,globalEnd:c.offset+e.end}});
 const map=new Map();for(const e of mentions.filter(e=>e.selected)){const key=JSON.stringify([e.kind,e.canonical]);if(!map.has(key))map.set(key,{kind:e.kind,canonical:e.canonical,aliases:[],references:[]});const row=map.get(key);if(!row.aliases.includes(e.original))row.aliases.push(e.original);row.references.push({mention:e.id,excerpt:e.excerpt,start:e.start,end:e.end,note:e.note})}
 const index=[...map.values()].sort((a,b)=>a.canonical.localeCompare(b.canonical));
 return {schema:'mention-atlas/1',model:'Xenova/bert-base-NER q8',original:d.source,chunks:d.chunks,reviewed:state.reviewed,mentions,index,baselineTerms:terms.split('\n').map(x=>x.trim()).filter(Boolean),metrics:{excerpts:d.chunks.length,reviewed:state.reviewed.filter(Boolean).length,neuralCandidates:mentions.filter(e=>e.origin==='neural token classification').length,literalBaseline:baseline(d,terms),accepted:mentions.filter(e=>e.selected).length,indexEntries:index.length,rejected:mentions.filter(e=>!e.selected).length}};
}
export function markdown(a){const esc=s=>s.replace(/[\\`*_{}\[\]<>#|]/g,'\\$&').replace(/\r?\n/g,' ');return '# Mention Atlas — reviewed fact-check index\n\nModel suggestions, not verified facts or identity resolution.\n\n'+a.index.map(r=>'## '+esc(r.canonical)+' ('+r.kind+')\n\nAliases: '+r.aliases.map(esc).join(', ')+'\n\n'+r.references.map(x=>'- Excerpt '+x.excerpt+', characters ['+x.start+', '+x.end+'): '+(esc(x.note)||'Verification pending')).join('\n')).join('\n\n')+'\n\n# Source excerpts\n\n'+a.chunks.map(c=>'## Excerpt '+c.id+'\n\n'+esc(c.text)).join('\n\n')+'\n'}
