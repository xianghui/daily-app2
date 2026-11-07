export const examples={
 'Kitchen notebook':[
 'To bake sourdough bread, mix flour, water and starter into a dough.',
 'Allow the bread dough to rise overnight before baking in a hot oven.',
 'A crisp loaf needs steam during the first minutes of baking.',
 'For healthy tomato plants, enrich the garden soil with compost.',
 'Water tomato roots regularly and support the growing stems with stakes.',
 'Harvest ripe tomatoes from the vegetable garden when their skin turns red.',
 'To protect your online accounts, choose a unique password for every login.',
 'Enable two-factor authentication to secure your accounts against stolen passwords.',
 'Store login credentials in an encrypted password manager.'
 ].join('\n\n'),
 'Field notes':[
 'Train tickets can be purchased at the railway station before departure.',
 'Check the railway timetable and platform number before boarding the train.',
 'Keep your train ticket ready for inspection during the journey.',
 'An acoustic guitar needs regular tuning before playing music.',
 'Practice guitar chords slowly, then build speed while keeping a steady rhythm.',
 'Replace worn guitar strings to improve the sound of your instrument.',
 'A bicycle flat tire can be repaired by patching the punctured inner tube.',
 'Remove the bicycle wheel and inspect the tire for sharp objects.',
 'Inflate the repaired bicycle tire to the recommended pressure.'
 ].join('\n\n')};
export function parse(text,k,max){if(!text.trim())throw Error('Paste some notes first.');if(text.length>16000)throw Error('Limit: 16,000 characters.');const parts=text.trim().split(/\n\s*\n/).map(x=>x.trim());if(parts.length<2||parts.length>32)throw Error('Use 2–32 paragraphs separated by blank lines.');if(parts.some(x=>x.length>450))throw Error('Each paragraph must be at most 450 characters; split longer passages.');if(!Number.isInteger(k)||k<1||k>parts.length)throw Error('Chapter count must be between 1 and the paragraph count.');if(!Number.isInteger(max)||max<1||max>32||k*max<parts.length)throw Error('Maximum paragraphs × chapters must fit every paragraph (max 32).');return parts;}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(a=>!Array.isArray(a)||a.length!==384||a.some(x=>!Number.isFinite(x))||Math.abs(a.reduce((s,x)=>s+x*x,0)-1)>.05))throw Error('Malformed AI vectors; no recommendations applied. Retry the model.');}
export const similarity=(a,b)=>Math.max(-1,Math.min(1,a.reduce((s,x,i)=>s+x*b[i],0)));
export function solve(parts,v,k,max){validateVectors(v,parts.length);const scores=parts.slice(1).map((_,i)=>similarity(v[i],v[i+1]));const n=parts.length,dp=Array.from({length:k+1},()=>Array(n+1).fill(Infinity)),prev=Array.from({length:k+1},()=>[]);dp[0][0]=0;for(let c=1;c<=k;c++)for(let end=1;end<=n;end++)for(let start=Math.max(0,end-max);start<end;start++){const cost=dp[c-1][start]+(start?scores[start-1]:0);if(cost<dp[c][end]){dp[c][end]=cost;prev[c][end]=start;}}if(!Number.isFinite(dp[k][n]))throw Error('No feasible chapter plan.');let end=n,cuts=[];for(let c=k;c>0;c--){const start=prev[c][end];if(start)cuts.push(start);end=start;}cuts.sort((a,b)=>a-b);return{scores,cuts,baseline:Array.from({length:k-1},(_,i)=>Math.floor((i+1)*n/k))};}
export function chapters(parts,cuts,titles={}){const starts=[0,...cuts];return starts.map((s,i)=>({title:titles[s]||`Chapter ${i+1}`,start:s,end:starts[i+1]??parts.length,paragraphs:parts.slice(s,starts[i+1]??parts.length)}));}
export function checkCuts(parts,cuts,k,max){return cuts.length===k-1&&chapters(parts,cuts).every(c=>c.paragraphs.length<=max);}
export function artifact(original,parts,plan,cuts,titles,k,max){if(!checkCuts(parts,cuts,k,max))throw Error('Resolve chapter count/length constraints before applying.');return{schema:'chapter-cut/v1',original,paragraphs:parts,model:'Xenova/all-MiniLM-L6-v2 · q8 WASM',constraints:{chapters:k,maxParagraphs:max},cuts,suggestedCuts:plan.cuts,adjacentCosines:plan.scores,baselineCuts:plan.baseline,chapters:chapters(parts,cuts,titles)};}
export function markdown(a){return a.chapters.map(c=>`## ${c.title}\n\n${c.paragraphs.join('\n\n')}`).join('\n\n');}
