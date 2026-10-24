import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Palm width',14,22,1],['length','Palm length',36,52,1],['spring','Foot diameter',1.6,2.4,.2],['gap','Foot vertical rise',8,14,1],['corner','Foot forward lean',3,6,.5],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:18,length:44,spring:2,gap:11,corner:4.5,texture:.3};
export const presets={'Short Step':{width:14,length:36,spring:2.4,gap:8,corner:3,texture:0},'Bristle Step':defaults,'Long Reach':{width:22,length:52,spring:1.6,gap:14,corner:6,texture:.6}};
export const names=['walker'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Print one piece in TPU 95A, flat plate Z=0 on the bed, inclined feet upward. No assembly or hardware. Turn it feet-down on a clean dry table, gently press the plate over the six feet, then release. Inclined legs bend and recover; changing foot friction can produce small directional stick-slip steps. This experimental walking response depends on material and surface and is not guaranteed. Alternatively rock gently in place and feel the oblique spring return. The six legs have 1.6\u20132.4 mm diameter, 8\u201314 mm vertical rise and 3\u20136 mm lean. Never use PLA for the flexing version. Start with Short Step as a full-size material coupon, inspect continuous shaft toolpaths and root bonding, then test only tiny deflections (start below 0.5 mm). Stop for permanent set, whitening or tearing. Shafts incline at most 37 degrees from vertical; rounded tips have small local overhangs. Designed for support-free TPU printing, but inspect your slicer and use removable support if needed. 0.4 mm nozzle and 0.2 mm layers are starting points, not universal settings. There are no moving mating surfaces, captive parts or fit tolerances. The exposed feet flex without touching each other within the conservative 0.5 mm test envelope. Imports are robustly unioned only into the isolated palm tab, outside all leg roots and the foot contact plane. Keep fingertips away from feet while pressing; do not use sharp or abrasive surfaces. Preview shows undeformed geometry flipped feet-down, not simulated motion. STL always exports flat plate down with feet upward. No physical print, load, stepping, friction or fatigue tests performed. All source files stay local. STL stores geometry only, not preview colours.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=2.4,wellDepth=.8,C=8+p.length/2;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
// Rounded rigid board, joined to the palm disc with positive overlap.
let wheel=cyl(10.5,H);
let track=add(box(p.length-4,p.width,H,[10,-p.width/2,0]),box(p.length,p.width-4,H,[8,-p.width/2+2,0]));
for(const x of [10,p.length+6])for(const y of [-p.width/2+2,p.width/2-2])track=add(track,move(cyl(2,H,32),[x,y,0]));
wheel=add(wheel,track);
const footRoots=[],r=p.spring/2,theta=Math.atan2(p.corner,p.gap)*180/Math.PI;
for(let i=0;i<3;i++)for(const sign of [-1,1]){
 const x=15+i*(p.length-16)/2,y=sign*(p.width/2-3);footRoots.push([x,y]);
 const shaft=K(M.cylinder(Math.hypot(p.corner,p.gap)+.3,r,r,32));
 const lean=K(shaft.rotate([0,theta,0]));
 wheel=add(wheel,move(lean,[x-.15*Math.sin(theta*Math.PI/180),y,H-.15*Math.cos(theta*Math.PI/180)]));
 wheel=add(wheel,move(K(M.sphere(r,32)),[x+p.corner,y,H+p.gap]));
}
wheel=sub(wheel,move(cyl(7.5,wellDepth+1,96),[0,0,H-wellDepth]));
if(p.texture>0)for(let i=0;i<20;i++){const a=i*2*Math.PI/20;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(a),9*Math.sin(a),H-p.texture]));}
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-wellDepth-.15]));}



const parts=[wheel].map((s,i)=>{const components=s.decompose();const count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');const clean=K(s.asOriginal()),mesh=clean.getMesh();return {name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0]],H,C,wellFloor:H-wellDepth,footRoots,importSafeRadius:6.5,minimumWallThickness:1.6};
parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m){return [{pos:[0,0,m.H+m.parameters.gap+m.parameters.spring/2],rotX:Math.PI,angle:0}];}
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

export function mechanismCheck(m){const p=m.parameters,r=p.spring/2;const q={footCount:6,footDiameterMm:p.spring,verticalRiseMm:p.gap,forwardLeanMm:p.corner,shaftLengthMm:Math.hypot(p.corner,p.gap),inclinationDegrees:Math.atan2(p.corner,p.gap)*180/Math.PI,rootPitchMm:(p.length-16)/2,rowCenterGapMm:p.width-6,betweenFeetClearanceMm:Math.min((p.length-16)/2-p.spring,p.width-6-p.spring),importToRootMarginMm:15-r-6.5,importToContactPlaneMarginMm:p.gap+r-4.05,conservativeDeflectionMm:.5,hardwareRequired:false,material:'TPU 95A',physicalPrintTested:false};
if(q.betweenFeetClearanceMm<5.5||q.importToRootMarginMm<7||q.importToContactPlaneMarginMm<4||q.inclinationDegrees>37)throw Error('Insufficient leg separation, print angle or protected import margin. Reset dimensions.');return q;}
