export const examples=[{name:'Data analyst',goals:`Write SQL queries to analyze sales data
Create charts and dashboards to communicate business insights`,courses:`SQL foundations | 4 | Learn database queries joins aggregation and sales analytics
Dashboard storytelling | 3 | Build visual charts dashboards and communicate business insights
Garden basics | 2 | Grow vegetables and manage soil irrigation
Secure accounts | 2 | Protect passwords and enable multifactor authentication`},{name:'Community garden',goals:`Grow healthy vegetables and care for garden soil
Save water with efficient irrigation`,courses:`SQL foundations | 4 | Learn database queries joins aggregation and sales analytics
Vegetable growing | 3 | Plant vegetables improve soil and grow healthy crops
Water wise gardening | 2 | Save water with drip irrigation and garden watering systems
Presentation skills | 2 | Speak confidently and design compelling business slides`}];
export function parse(goals,courses,budget){
 const gs=goals.split('\n').map(s=>s.trim()).filter(Boolean),lines=courses.split('\n').map(s=>s.trim()).filter(Boolean);
 if(!gs.length||gs.length>6||gs.some(s=>s.length>240))throw Error('Enter 1–6 goals, each at most 240 characters.');
 if(!lines.length||lines.length>20)throw Error('Enter 1–20 courses.');
 if(!Number.isInteger(+budget)||+budget<1||+budget>80)throw Error('Budget must be a whole number from 1 to 80 hours.');
 const cs=lines.map((line,i)=>{const parts=line.split('|').map(s=>s.trim());if(parts.length!==3||!parts[0]||parts[0].length>80||!parts[2]||parts[2].length>400||!Number.isInteger(+parts[1])||+parts[1]<1||+parts[1]>80)throw Error('Course '+(i+1)+': use Title | whole hours (1–80) | description (1–400 characters).');return{id:i+1,title:parts[0],hours:+parts[1],description:parts[2]}});
 return{goals:gs,courses:cs,budget:+budget};
}
export function validateVectors(v,n){if(!Array.isArray(v)||v.length!==n||v.some(x=>!Array.isArray(x)||x.length!==384||x.some(y=>!Number.isFinite(y))||Math.abs(x.reduce((s,y)=>s+y*y,0)-1)>.05))throw Error('Invalid AI embedding schema. Retry model loading.');}
export function similarities(input,v){validateVectors(v,input.goals.length+input.courses.length);return input.courses.map((c,i)=>input.goals.map((g,j)=>Math.max(-1,Math.min(1,v[j].reduce((s,x,k)=>s+x*v[input.goals.length+i][k],0)))))}
// Exact subset search, bounded at 20 courses. Weighted coverage is max relevance per goal.
export function optimize(courses,scores,budget,threshold){let best=0,mask=0,bestHours=0;const cover=Array(scores[0].length).fill(0);function visit(i,h,m){if(i===courses.length){const value=cover.reduce((s,x)=>s+(x>=threshold?x:0),0);if(value>best+1e-8||(Math.abs(value-best)<1e-8&&h<bestHours)){best=value;mask=m;bestHours=h}return;}visit(i+1,h,m);if(h+courses[i].hours<=budget){const old=cover.slice();for(let j=0;j<cover.length;j++)cover[j]=Math.max(cover[j],scores[i][j]);visit(i+1,h+courses[i].hours,m|(1<<i));cover.splice(0,cover.length,...old)}}visit(0,0,0);return courses.map((c,i)=>!!(mask&(1<<i)))}
export function baseline(input){let hours=0;return input.courses.map(c=>{if(hours+c.hours<=input.budget){hours+=c.hours;return true}return false})}
export function metrics(courses,scores,selected,threshold){return{hours:courses.reduce((s,c,i)=>s+(selected[i]?c.hours:0),0),covered:scores[0].filter((_,j)=>scores.some((r,i)=>selected[i]&&r[j]>=threshold)).length,selected:selected.filter(Boolean).length}}
export function artifact(input,scores,records,threshold){if(records.length!==input.courses.length||new Set(records.map(r=>r.id)).size!==records.length)throw Error('Record integrity error.');if(records.some(r=>!Number.isInteger(r.hours)||r.hours<1||r.hours>80))throw Error('Every duration must be a whole number from 1 to 80 hours.');const m=metrics(records,scores,records.map(r=>r.selected),threshold);if(m.hours>input.budget)throw Error('Selected courses exceed the hours budget. Deselect a course or undo your edit.');return{schema:'course-compass/v1',model:'Xenova/all-MiniLM-L6-v2 q8',budget:input.budget,threshold,goals:input.goals,metrics:m,records:records.map((r,i)=>({...r,relevance:scores[i],status:r.selected?'planned':'not planned'}))}}
export function csv(a){const keys=['id','title','hours','description','selected','note'];return[keys,...a.records.map(r=>keys.map(k=>r[k]??''))].map(r=>r.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n')}
export function markdown(a){return '# Learning plan\n\nHours: '+a.metrics.hours+' / '+a.budget+'\n\n'+a.records.map(r=>`- [${r.selected?'x':' '}] ${r.title} (${r.hours}h) — ${r.description} ${r.note?'Note: '+r.note:''}`).join('\n')}
