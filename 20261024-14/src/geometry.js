import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Rotor radius',18,24,1],['length','Cone depth',3,5,.5],['spring','Radial bearing gap',.2,.45,.05],['gap','Release lift',.6,1.4,.1],['corner','Cap peg interference',.04,.12,.02],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:21,length:4,spring:.3,gap:1,corner:.06,texture:.3};
export const presets={'Small Pair':{width:18,length:3,spring:.25,gap:.8,corner:.04,texture:0},'Cone Accord':defaults,'Wide Chorus':{width:24,length:5,spring:.4,gap:1.4,corner:.08,texture:.6}};
export const names=['palm-spindle','cup-rotor','cone-rotor','retaining-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Print four separate parts flat-side down in PLA or PETG, 0.4 mm nozzle / 0.2 mm layers as starting settings. No supports or bought hardware required. The top cone prints pointing up, then flips for assembly; do not print the assembled view. First print Small Pair as a full-size fit calibration: slide each rotor freely on the spindle and check the cap peg before final seating. Radial bearing gap 0.2–0.45 mm and cap peg radial interference 0.04–0.12 mm are starting ranges, not universal tolerances. Lightly deburr stringing; do not lubricate the cone faces. Seat the cup rotor over the palm spindle with its open cavity up. Flip the cone rotor, cone down into the cup. Press the cap peg into the spindle bore only if its calibrated fit holds firmly; never force an oversize peg. Cap retention is friction-fit, not a positive snap: tug-check before use and stop if it loosens. Hold the lower rotor rim; gently press the upper rotor against its conical seat and turn to feel friction coupling, then manually lift to turn independently. Gravity is not a spring; there is no automatic return or detent. The base shoulder supports the lower rotor when released. Preview lift 0 shows a 0.06 mm near-contact gap to avoid faceted-surface intersections; physical engagement occurs with that gap closed. Two equally tapered 45-degree cones provide broad contact; actual friction torque, wear and cap holding force require physical calibration. Never force seized surfaces. Avoid excessive thrust, heat or face damage. Small parts: not for children. Imported decoration is robustly unioned only into the stationary palm well, far outside both rotor sweeps. All moving bodies export separately. Computational solid and sampled mechanical checks are not physical print testing. No physical print, friction torque, wear or fatigue tests performed. STL stores geometry only, not preview colours. All files stay local.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=2.4,wellDepth=.8,C=2*p.width+18,T=2.4,D=p.length,R=p.width,B=H+.35;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
let wheel=add(cyl(10.5,H),box(C,10,H,[0,-5,0]));
wheel=add(wheel,move(cyl(R-1,H),[C,0,0]));
const axleTop=B+2*T+D+p.gap+.25;
let spindle=sub(cyl(3,axleTop),move(cyl(1.8,axleTop+1),[0,0,H]));
wheel=add(wheel,move(spindle,[C,0,0]));
// A broad annular thrust shoulder gives a real release gap above the palm plate.
wheel=add(wheel,move(sub(cyl(6,H+.35),cyl(3.6,H+1)),[C,0,0]));
let lower=sub(cyl(R,T+D),move(K(M.cylinder(D+.02,8.0001,8+D+.0201,128)),[0,0,T]));
lower=sub(lower,move(cyl(3+p.spring,T+D+2),[0,0,-1]));
let upper=add(cyl(R-1,T),move(K(M.cylinder(D,8+D,8,128)),[0,0,T]));
upper=sub(upper,move(cyl(3+p.spring,T+D+2),[0,0,-1]));
// Flat cap with an upward plug. Flip the cap on assembly; controlled interference is fixed, not a moving joint.
let cap=add(cyl(6.5,T),move(cyl(1.8+p.corner,4),[0,0,T]));
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



const parts=[wheel,lower,upper,cap].map((s,i)=>{const components=s.decompose();const count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');const clean=K(s.asOriginal()),mesh=clean.getMesh();return {name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0],[C,2*R+8,0],[C,4*R+16,0],[0,2*R+8,0]],H,C,T,D,R,B,axleTop,wellFloor:H-wellDepth,importSafeRadius:6.5,minimumWallThickness:1.2};
parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0,lift=0){const a=Math.max(0,Math.min(m.parameters.gap,lift));return [{pos:[0,0,0],angle:0},{pos:[m.C,0,m.B],angle:0},{pos:[m.C,0,m.B+2*m.T+m.D+.06+a],angle:angle,rotX:Math.PI},{pos:[m.C,0,m.axleTop+m.T],rotX:Math.PI,angle:0}];}
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

export function mechanismCheck(m){const p=m.parameters;
const q={mechanism:'Axially engaged conical friction clutch',coneHalfAngleDegrees:45,radialBearingGapMm:p.spring,releaseLiftMm:p.gap,capPegRadialInterferenceMm:p.corner,shaftWallMm:1.2,rotorFloorMm:m.T,minimumCupWallMm:m.R-(8+m.D),retentionOverlapMm:6.5-(3+p.spring),nearContactPreviewGapMm:.06,upperToCapGapAtMaxLiftMm:.19,importSweepMarginMm:m.C-m.R-6.5,coneRadialReleaseMm:p.gap,physicalPrintTested:false,retention:'Calibrated friction plug, tug-check required',elasticReturn:false};
if(q.minimumCupWallMm<5||q.retentionOverlapMm<3||q.importSweepMarginMm<29||q.upperToCapGapAtMaxLiftMm<.18||q.shaftWallMm<1.19)throw Error('Invalid clutch walls, retention or import isolation.');return q;}
