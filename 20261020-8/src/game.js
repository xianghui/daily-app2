export const TEAS = Array.from({length:8},(_,id)=>({id,rose:!!(id&1),hot:!!(id&2),sweet:!!(id&4)}));
const rule=(id,label,test)=>({id,label,test});
export const RULES=[
 rule('rose','Rose tea only',t=>t.rose),rule('mint','Mint tea only',t=>!t.rose),
 rule('hot','Hot tea only',t=>t.hot),rule('iced','Iced tea only',t=>!t.hot),
 rule('sweet','Sweet tea only',t=>t.sweet),rule('plain','Plain tea only',t=>!t.sweet),
 rule('rh','Rose AND hot',t=>t.rose&&t.hot),rule('rs','Rose AND sweet',t=>t.rose&&t.sweet),
 rule('hs','Hot AND sweet',t=>t.hot&&t.sweet),rule('mi','Mint AND iced',t=>!t.rose&&!t.hot),
 rule('ro','Rose OR hot (or both)',t=>t.rose||t.hot),rule('so','Sweet OR hot (or both)',t=>t.sweet||t.hot),
 rule('rx','Rose OR hot, but not both',t=>t.rose!==t.hot),rule('sx','Sweet OR hot, but not both',t=>t.sweet!==t.hot),
 rule('same','Rose and hot, OR mint and iced',t=>t.rose===t.hot),
 rule('two','At least two: rose, hot, sweet',t=>Number(t.rose)+Number(t.hot)+Number(t.sweet)>=2),
 rule('one','Exactly one: rose, hot, sweet',t=>Number(t.rose)+Number(t.hot)+Number(t.sweet)===1),
 rule('except','Anything EXCEPT sweet rose',t=>!(t.rose&&t.sweet))
];
export function shuffle(a,rng=Math.random){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
export function makeRound(index,rng=Math.random){
 const pool=index<2?RULES.slice(0,12):RULES;
 const answer=shuffle(pool,rng)[0];
 const compatible=RULES.filter(r=>r!==answer && TEAS.some(t=>answer.test(t)&&r.test(t)) && TEAS.some(t=>!answer.test(t)&&!r.test(t)));
 const anchor=shuffle(compatible,rng)[0];
 const options=shuffle([answer,anchor,...shuffle(RULES.filter(r=>r!==answer&&r!==anchor),rng).slice(0,2)],rng);
 const pairs=[];
 for(const a of TEAS.filter(answer.test))for(const b of TEAS.filter(t=>!answer.test(t))){
  const survivors=options.filter(r=>r.test(a)===answer.test(a)&&r.test(b)===answer.test(b));
  if(survivors.length>=2)pairs.push([a.id,b.id]);
 }
 const seen=pairs.length?shuffle(pairs,rng)[0]:[TEAS.find(answer.test).id];
 return {answer,options,seen,probes:0,wrong:[],solved:false};
}
export const roundScore=r=>Math.max(20,150-r.probes*15-r.wrong.length*40);
export const teaName=t=>`${t.hot?'Hot':'Iced'} ${t.rose?'rose':'mint'}, ${t.sweet?'sweet':'plain'}`;
