import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','First pivot span',22,30,1],['length','Second pivot span',24,36,1],['spring','Bob radius',7,10,.5],['gap','Bearing rim radius',5,6,.5],['corner','Palm thickness',3,5,.5],['texture','Palm dimple depth',0,.6,.1],['fit','Running clearance',.2,.5,.05],['seat','Static socket allowance',-.08,.08,.02]];
export const defaults={width:26,length:30,spring:8.5,gap:5.5,corner:4,texture:.3,fit:.3,seat:0};
export const presets={'Short Echo':{width:22,length:24,spring:7,gap:5,corner:3,texture:0,fit:.3,seat:0},'Afterglide':defaults,'Long Drift':{width:30,length:36,spring:10,gap:6,corner:5,texture:.6,fit:.35,seat:0}};
export const names=['palm-handle','first-link','weighted-link','root-cap','joint-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Five support-free printed parts, no hardware: palm handle, first link, weighted link and two caps. Print all parts bed-flat as exported, pins up and cap sockets down. PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls; inspect the 2.6 mm cap-roof bridges. First calibrate the handle, first link and root cap at full size. Radial and axial running clearance starts at 0.30 mm, not a universal fit. Clean bores and elephant foot. Put the first link onto the root spindle, seat its cap fully on the narrow tip against the shoulder, then fit the weighted link onto the distal spindle and seat the other cap. Each link needs axial play. Hold the palm handle in a vertical plane with both hinge axes horizontal. Nudge the links gently for compound gravity-driven swings; two serial free revolute joints permit independent motion. Do not use as a high-speed flail. Preview sliders pose the joints, not a dynamics simulation or prediction. Loose caps: tighten static socket allowance and reprint; binding: increase running clearance. Do not glue bearings. Lift caps evenly to disassemble. Imports are unioned into a recessed palm landing and cannot reach the moving layers. No physical print, force, retention, wear or fatigue tests were performed. Small removable parts; not a child’s toy. STL contains geometry, not selected preview colours.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh,CrossSection:CS}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=p.corner,A=p.width,D=p.length,R=p.spring,Q=p.gap,f=p.fit,T=3;
const firstZ=H+5+f,rootCapZ=firstZ+T+f,secondZ=rootCapZ+3+f,jointCapZ=secondZ+T+f,wellDepth=.8;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
function capsule(a,b,r,h){return add(add(move(cyl(r,h,64),[a,0,0]),move(cyl(r,h,64),[b,0,0])),box(b-a,2*r,h,[a,-r,0]));}
function post(base,top){return add(move(cyl(2,top-base+.1,64),[0,0,base-.1]),move(cyl(1.3,1.8,64),[0,0,top]));}
// Palm landing stays at origin; the spindle is 24 mm to its right.
let wheel=capsule(0,24,10.5,H);
wheel=sub(wheel,move(cyl(7.5,wellDepth+1,96),[0,0,H-wellDepth]));
wheel=add(wheel,move(post(H,rootCapZ),[24,0,0]));
if(p.texture>0)for(let i=0;i<20;i++){const a=i*2*Math.PI/20;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(a),9*Math.sin(a),H-p.texture]));}
let first=capsule(0,A,Q,T);
first=sub(first,move(cyl(2+f,T+2,64),[0,0,-1]));
first=add(first,move(cyl(Q,secondZ-firstZ-T-f+.1,64),[A,0,T-.1]));
first=add(first,move(post(T,jointCapZ-firstZ),[A,0,0]));
let second=capsule(0,D,Q,T);second=add(second,move(cyl(R,T,96),[D,0,0]));
second=sub(second,move(cyl(2+f,T+2,64),[0,0,-1]));
const cap=sub(cyl(3.3,3,64),move(cyl(1.3+p.seat,2.05,64),[0,0,-.1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-wellDepth-.15]));}


const solids=[wheel,first,second,cap,cap],parts=solids.map((s,i)=>{const cs=s.decompose(),count=cs.length;cs.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error(`${names[i]} must form one connected closed solid. Use a broad flat-bottom grip.`);const mesh=K(s.asOriginal()).getMesh(),part={name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};verifySolid(part);return part;});
let cursor=0;const layout=parts.map(part=>{const bb=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-bb.min[0],-bb.min[1],-bb.min[2]];cursor+=bb.max[0]-bb.min[0]+6;return pos;});
const model={parameters:{...p},parts,layout,H,A,D,R,Q,T,firstZ,rootCapZ,secondZ,jointCapZ,wellFloor:H-wellDepth,importSafeRadius:6.5};
model.mechanism=mechanismCheck(model);if(model.mechanism.minimumBearingWallMm<2.4||model.mechanism.importToMovingLayerMm<.9||model.mechanism.capRetentionOverlapMm<.79)throw Error('Bearing, retention or import-isolation constraint failed.');
const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=-1.1,second=-.25){const a=angle,b=second,j=[24+m.A*Math.cos(a),m.A*Math.sin(a)];return [{pos:[0,0,0],angle:0},{pos:[24,0,m.firstZ],angle:a},{pos:[...j,m.secondZ],angle:b},{pos:[24,0,m.rootCapZ],angle:0},{pos:[...j,m.jointCapZ],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}

// Independent final-mesh preflight runs in the worker for every edit, not only tests.
function verifySolid(part){const {vertices:v,indices:ix,stride}=part,edges=new Map(),ids=new Map();let volume=0;
const id=p=>{const key=p.map(x=>Math.round(x/1e-5)).join(',');if(!ids.has(key))ids.set(key,ids.size);return ids.get(key);};
for(let j=0;j<ix.length;j+=3){const vs=ix.slice(j,j+3).map(i=>v.slice(i*stride,i*stride+3));if(!vs.flat().every(Number.isFinite))throw Error('Nonfinite final geometry. Reset the import or reduce detail.');const[a,b,c]=vs,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
if(Math.hypot(...n)<=1e-8)throw Error('Final geometry has a degenerate face. Reduce detail or reset placement.');volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
const ids3=vs.map(id);if(new Set(ids3).size!==3)throw Error('Detail exceeds numerical resolution. Reset transforms.');for(let k=0;k<3;k++){const a=ids3[k],b=ids3[(k+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(':'),e=edges.get(key)||[0,0];e[0]++;e[1]+=a<b?1:-1;edges.set(key,e);}}
if(!ix.length||volume<=0||[...edges.values()].some(([count,dir])=>count!==2||dir!==0))throw Error('Final solid failed closed-manifold / winding validation. Reduce relief or center the import; no automatic repair is performed.');}

export function mechanismCheck(m){const p=m.parameters;return {minimumBearingWallMm:p.gap-2-p.fit,radialClearanceMm:p.fit,axialClearanceMm:p.fit,capRetentionOverlapMm:3.3-2-p.fit,staticSocketAllowanceMm:p.seat,capSocketRoofMm:1.05,tipEngagementMm:1.8,rootCapToUpperLinkMm:m.secondZ-(m.rootCapZ+3),importToMovingLayerMm:m.firstZ-(p.corner+4.05),firstPivotSpanMm:p.width,secondPivotSpanMm:p.length,degreesOfFreedom:2,physicalPrintTested:false};}
