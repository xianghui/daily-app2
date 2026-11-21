// Adapted from the collection's audited Mention Atlas exact BIO alignment.
export function align(d,predictions,scope){
 if(!Array.isArray(predictions)||predictions.length!==d.chunks.length)throw Error('Malformed AI output: wrong excerpt count.');
 const entities=[];
 predictions.forEach((tokens,ci)=>{
  if(!Array.isArray(tokens)||tokens.length===0||tokens.length>400)throw Error('Malformed AI output: invalid token count.');
  let cursor=0,lastIndex=0,open=null;
  for(const t of tokens){
   if(!t||typeof t.word!=='string'||!Number.isFinite(t.score)||t.score<0||t.score>1||!Number.isInteger(t.index)||t.index<=lastIndex||!/^O$|^[BI]-(PER|ORG|LOC|MISC)$/.test(t.entity))throw Error('Malformed AI output: invalid token schema.');
   const word=t.word.replace(/^##/,'');const start=d.chunks[ci].text.indexOf(word,cursor);
   if(!word||word==='[UNK]'||start<0||/\S/.test(d.chunks[ci].text.slice(cursor,start)))throw Error('AI tokens could not be aligned exactly. Try plain English text without unusual symbols; no cards were created.');
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
