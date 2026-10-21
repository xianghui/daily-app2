import Module from 'manifold-3d';
let api;
export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Rotor constant width',30,50,1],['thickness','Rotor thickness',5,9,.2],['wall','Frame wall',8,11,.5],['corner','Corner chamfer',3,6,.5],['texture','Edge scallop depth',0,.6,.1],['clearance','Running gap per side',.25,.7,.05],['fit','Lid peg interference',-.1,.15,.05]];
export const defaults={width:40,thickness:6,wall:9,corner:5,texture:.3,clearance:.4,fit:0};
export const presets={'Pocket':{...defaults,width:32,thickness:5},'Palm':defaults,'Loose PETG':{...defaults,width:46,clearance:.6,fit:-.05}};
export function validate(p){const e=[];for(const[k,l,a,b]of fields)if(!Number.isFinite(p[k])||p[k]<a||p[k]>b)e.push(`${l} must be ${a}–${b} mm.`);return e;}
export function rotorPoints(w){const v=Array.from({length:3},(_,i)=>[w/Math.sqrt(3)*Math.cos(i*2*Math.PI/3),w/Math.sqrt(3)*Math.sin(i*2*Math.PI/3)]);const pts=[];for(let i=0;i<3;i++){const c=v[i],a=v[(i+1)%3],b=v[(i+2)%3];let start=Math.atan2(a[1]-c[1],a[0]-c[0]);let end=Math.atan2(b[1]-c[1],b[0]-c[0]);while(end<start)end+=2*Math.PI;for(let j=0;j<48;j++){const t=start+(end-start)*j/48;pts.push([c[0]+w*Math.cos(t),c[1]+w*Math.sin(t)]);}}return pts;}
export function pose(points,angle){const c=Math.cos(angle),s=Math.sin(angle),ps=points.map(([x,y])=>[x*c-y*s,x*s+y*c]);const lo=[0,1].map(k=>Math.min(...ps.map(v=>v[k]))),hi=[0,1].map(k=>Math.max(...ps.map(v=>v[k])));return {offset:lo.map((v,k)=>-(v+hi[k])/2),span:hi.map((v,k)=>v-lo[k])};}
export function generate(p){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Geometry engine not ready');const {Manifold:M,CrossSection:C}=api,all=[];const keep=x=>(all.push(x),x);const cube=(x,y,z,tx=0,ty=0,tz=0)=>keep(keep(M.cube([x,y,z],true)).translate([tx,ty,tz+z/2]));const cyl=(r,h,x,y,z)=>keep(keep(M.cylinder(h,r,r,32)).translate([x,y,z]));const sub=(a,b)=>keep(a.subtract(b)),add=(a,b)=>keep(a.add(b));
const gap=p.clearance,W=p.width,side=W+2*gap+2*p.wall,H=p.thickness+2*gap+2,win=W*.60,r=side/2,k=p.corner;
const outline=keep(new C([[[-r+k,-r],[r-k,-r],[r,-r+k],[r,r-k],[r-k,r],[-r+k,r],[-r,r-k],[-r,-r+k]]]));
const shell=h=>keep(outline.extrude(h));let body=sub(shell(H),cube(W+2*gap,W+2*gap,H,0,0,2));body=sub(body,cube(win,win,H+2,0,0,-1));let lid=sub(shell(2),cube(win,win,4,0,0,-1));const pinXY=r-p.wall/2-1;
for(const x of [-pinXY,pinXY])for(const y of [-pinXY,pinXY]){body=sub(body,cyl(1.5,4.1,x,y,H-4));lid=add(lid,cyl(1.5+p.fit/2,3.5,x,y,1.99));}
if(p.texture>0)for(let i=-2;i<=2;i++)for(let d=0;d<4;d++){const t=i*(W/6),a=r+1.2-p.texture;const xy=d===0?[a,t]:d===1?[-a,t]:d===2?[t,a]:[t,-a];body=sub(body,cyl(1.2,H+2,...xy,-1));lid=sub(lid,cyl(1.2,4,...xy,-1));}
const points=rotorPoints(W),rotor=keep(keep(new C([points])).extrude(p.thickness));
const raw=[body,rotor,lid],names=['frame','rotor','lid'];const parts=raw.map((s,i)=>{if(s.status()!=='NoError')throw Error('Solid modeling failed: '+s.status());const m=s.getMesh();return {name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
for(const s of all.reverse())s.delete();
const rp=pose(points,0),layout=[[-side-6,0,0],[...rp.offset,0],[side+6,0,0]];return {parameters:{...p},parts,layout,points,side,height:H+2,dimensions:[side*3+12,side,Math.max(H,5.49)],assembled:[side,side,H+2],pinXY};}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}

export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
