import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Chamber width',22,30,1],['length','Chamber length',28,40,1],['spring','Clapper diameter',8,12,.5],['gap','Lid seating clearance',.12,.3,.02],['corner','Chamber wall height',10,16,1],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:26,length:34,spring:10,gap:.2,corner:13,texture:.3};
export const presets={'Soft Hex':{width:22,length:28,spring:8,gap:.2,corner:10,texture:0},'Hush Chamber':defaults,'Long Echo':{width:30,length:40,spring:12,gap:.24,corner:16,texture:.6}};
export const names=['chamber','clapper','lid'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Hold the isolated palm landing, gently shake or tilt, and let a loose hexagonal clapper knock against the chamber walls. This is a free inertial clatter mechanism, not a captive track or bearing. Sound depends on material and infill; no loudness prediction. Print all three parts separately with their flat Z=0 faces on the bed, no supports. PLA/PETG chamber and lid; TPU 95A clapper for muted taps, PLA clapper for harder taps. Place clapper in chamber, turn lid over so the seating skirt faces down and press skirt into the opening. Clearance is per side: 0.12–0.30 mm is only a starting range. A clearance seat alone is not a lock: wrap an elastic band around lid and chamber for secure closure, or use removable tape; one band/tape strip is required during shaking. Hardware-free fallback: keep upright and hold lid with your thumb while gently tilting; do not shake an unsecured lid. Start with Soft Hex, print lid and chamber first, inspect slicer paths and test seating; increase clearance if tight. No physical print, acoustic or retention testing performed. Each 3 mm vent is smaller than the 5 mm clapper thickness. Keep small parts away from children. Imports union only into the isolated palm landing. STL contains geometry, not preview colours.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh,CrossSection:CS}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const W=p.width,L=p.length,H=2.4,T=2,C=24+W/2,R=W/2,wellDepth=.8;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
let wheel=add(cyl(10.5,H),box(C-W/2-1,10,H,[0,-5,0]));
const rounded=(w,l,h,r,at=[0,0,0])=>move(K(K(K(CS.square([w-2*r,l-2*r],true)).offset(r,'Round',2,32)).extrude(h)),at);
let chamber=rounded(W+4,L+4,p.corner,2,[C,0,0]);
chamber=sub(chamber,rounded(W,L,p.corner+1,1,[C,0,2]));
// Four narrow vents in the long side walls. Openings cannot pass 5 mm clapper thickness.
for(const y of [-L/4,L/4])for(const side of [-1,1])chamber=sub(chamber,box(4,3,3,[C+side*(W/2+1)-2,y-1.5,4]));
wheel=add(wheel,chamber);
wheel=sub(wheel,move(cyl(7.5,wellDepth+1,96),[0,0,H-wellDepth]));
if(p.texture>0)for(let i=0;i<20;i++){const a=i*2*Math.PI/20;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(a),9*Math.sin(a),H-p.texture]));}
const clapper=cyl(p.spring/2,5,6);
let lid=rounded(W+4,L+4,2,2);
let skirt=rounded(W-2*p.gap,L-2*p.gap,2.5,1,[0,0,2]);
skirt=sub(skirt,rounded(W-2*p.gap-3,L-2*p.gap-3,4,.5,[0,0,1.9]));
lid=add(lid,skirt);
for(const y of [-6,0,6])lid=sub(lid,move(cyl(1.5,3,32),[0,y,-.1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-wellDepth-.15]));}


const components=wheel.decompose(),count=components.length;components.forEach(c=>c.delete());if(wheel.status()!=='NoError'||wheel.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');
const parts=[wheel,clapper,lid].map((s,i)=>{const clean=K(s.asOriginal()),mesh=clean.getMesh();return {name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0],[C+W+12,0,0],[C,L+12,0]],H,R,L,T,C,wellFloor:H-wellDepth,importSafeRadius:6.5,minimumWallThickness:1.5};
parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);
const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0,lift=0){const p=m.parameters,a=angle*Math.PI/180;return [{pos:[0,0,0],angle:0},{pos:[m.C+Math.sin(a)*(p.width-p.spring-1)/2,Math.cos(a)*(p.length-p.spring-1)/2,2.1],angle:a},{pos:[m.C,0,p.corner+2+lift],angle:0,rotX:Math.PI}];}
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

export function mechanismCheck(m){const p=m.parameters;return {sideWallMm:2,floorMm:2,lidSkirtWallMm:1.5,ventWidthMm:3,clapperThicknessMm:5,ventRetentionMarginMm:2,clapperSideTravelMm:p.width-p.spring,clapperLongTravelMm:p.length-p.spring,minimumVerticalTravelMm:p.corner-2-2.5-5,lidSeatClearancePerSideMm:p.gap,importToChamberMarginMm:m.C-p.width/2-2-6.5,physicalPrintTested:false};}
