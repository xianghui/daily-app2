import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Strip width',14,22,1],['length','Station pitch',12,18,1],['spring','Stud neck diameter',3,4,.2],['gap','Radial snap interference',.15,.35,.05],['corner','Socket strip thickness',1.2,1.8,.1],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:18,length:15,spring:3.6,gap:.25,corner:1.5,texture:.3};
export const presets={'Soft Start':{width:14,length:12,spring:3,gap:.15,corner:1.2,texture:0},'Peel Cadence':defaults,'Deep Hold':{width:22,length:18,spring:4,gap:.35,corner:1.8,texture:.6}};
export const names=['stud-strip','socket-strip'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Print two parts in TPU 95A, flat strip faces down. No hardware. Four sockets press sequentially over four mushroom studs; pull the plain socket-strip end tab upward to peel them off one by one. This is a compliant press-and-peel zipper, not a sliding zipper or a print-in-place hinge. Rounded chamfered stud heads provide retention while an undersized circular opening stretches over each head. Radial interference is 0.15–0.35 mm, not a universal tolerance: begin with Soft Start as a full-size calibration coupon and test one station first. If too tight reduce interference and socket thickness; do not force or use brittle PLA. Neck diameter is 3–4 mm; socket strip is 1.2–1.8 mm thick. Use 0.4 mm nozzle, 0.2 mm layers as starting points. Head lower chamfers rise 0.9 mm over 0.9 mm radial growth (45 degrees); inspect slicer overhangs and use removable support if required. Print layout separates the parts by at least 8 mm. Working preview shows relaxed sockets seated around the narrower necks, below the retaining heads, with 0.2 mm axial clearance above the base. It does not simulate insertion or elastic deformation. Seat sockets gently after printing; neck clearance allows free seated movement and larger heads resist pull-off. During insertion and release the sockets intentionally elastically deform. Imports are robustly unioned only into the isolated palm disc at least 11.5 mm from a stud root. No physical print, insertion force, retention strength or fatigue tests performed. Stop for tears, whitening or permanent set. Keep away from children; small parts and pinch points. All files stay local. STL stores geometry only, not preview colours.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=2.4,wellDepth=.8,C=20+3*p.length,r=p.spring/2,headR=r+.9,holeR=headR-p.gap;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
// Closed strips and four 45-degree chamfered snap heads; all unions are exact CSG.
let wheel=cyl(10.5,H);
const roundedStrip=(start,end,h)=>{const radius=3;let s=add(box(end-start-2*radius,p.width,h,[start+radius,-p.width/2,0]),box(end-start,p.width-2*radius,h,[start,-p.width/2+radius,0]));for(const x of [start+radius,end-radius])for(const y of [-p.width/2+radius,p.width/2-radius])s=add(s,move(cyl(radius,h,32),[x,y,0]));return s;};
wheel=add(wheel,roundedStrip(8,C+7,H));
let socket=roundedStrip(12,C+12,p.corner);
const stations=[];
for(let i=0;i<4;i++){
 const x=20+i*p.length;stations.push(x);
 wheel=add(wheel,move(cyl(r,2.5,48),[x,0,H-.05]));
 wheel=add(wheel,move(K(M.cylinder(.9,r,headR,64)),[x,0,H+2.4]));
 wheel=add(wheel,move(K(M.cylinder(1,headR,r,64)),[x,0,H+3.3]));
 socket=sub(socket,move(cyl(holeR,p.corner+2,64),[x,0,-1]));
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



const parts=[wheel,socket].map((s,i)=>{const components=s.decompose();const count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');const clean=K(s.asOriginal()),mesh=clean.getMesh();return {name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0],[0,p.width+8,0]],H,C,wellFloor:H-wellDepth,stations,importSafeRadius:6.5,minimumWallThickness:Math.min(1.6,p.corner)};
parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m){return [{pos:[0,0,0],angle:0},{pos:[0,0,m.H+.2],angle:0}];}
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

export function mechanismCheck(m){const p=m.parameters,r=p.spring/2,headR=r+.9,holeR=headR-p.gap;
const q={stationCount:4,pitchMm:p.length,neckRadiusMm:r,headRadiusMm:headR,socketRadiusMm:holeR,radialInterferenceMm:headR-holeR,seatedNeckClearanceMm:holeR-r,socketEdgeWallMm:p.width/2-holeR,betweenHeadsMm:p.length-2*headR,importToRootMarginMm:20-r-6.5,printLayoutGapMm:8,explodedVerticalGapMm:1,axialSeatedFreedomMm:2.4-.2-p.corner,headChamferDegrees:45,hardwareRequired:false,material:'TPU 95A',physicalPrintTested:false};
if(q.seatedNeckClearanceMm<.54||q.socketEdgeWallMm<4||q.betweenHeadsMm<6||q.axialSeatedFreedomMm<.39||q.radialInterferenceMm<.149||q.radialInterferenceMm>.351)throw Error('Unsafe snap dimensions. Reset parameters.');return q;}
