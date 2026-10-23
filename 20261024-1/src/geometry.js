import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Sleeve corner radius',14,18,.5],['length','Flexible sleeve height',24,32,1],['spring','Radial membrane thickness',1.8,2.2,.1],['gap','Top tangential offset',5,8,.5],['corner','Raised facet relief',.6,1,.1],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:16,length:28,spring:2,gap:6.5,corner:.8,texture:.3};
export const presets={'Gentle Turn':{width:14,length:24,spring:1.8,gap:5,corner:.6,texture:0},'Palm Helix':defaults,'Tall Spiral':{width:18,length:32,spring:2.2,gap:8,corner:1,texture:.6}};
export const names=['facet-drift'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes='Hold the flat palm landing and the upper hexagonal rim. Gently shorten the triangulated sleeve while allowing a small turn, then guide it back. This Kresling-inspired continuous TPU membrane has twelve raised triangular facets separated by thin flexible corridors. It is not a bistable latch or a rigid-origami solver: snap, force and automatic return are not promised. TPU 95A only; start with Gentle Turn as a full-size material trial, using at most a 0.5 mm exploratory squeeze and about 2 degrees of gentle turn. The 1 mm / 3 degree digital envelope is only a geometric check, not safe travel or fatigue certification. Radial membranes are 1.8–2.2 mm with additional 0.6–1 mm facet relief. No sliding fits, hardware or assembly. Print the flat Z=0 base down, 0.4 mm nozzle, 0.15–0.2 mm layers, solid membranes and at least three perimeter lines. No supports are designed into the open sleeve; inspect a slicer for bridging at the upper collar. Do not scale in the slicer, flatten closed or forcibly twist. Stop for whitening, splitting, permanent set or poor return. Imports fuse only into the stationary palm landing, far from the shell. Geometry checks are not FEA or physical print testing.';
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh,CrossSection:CS}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=4,R=p.width,L=p.length,T=p.spring,twist=p.gap/R,CY=34+R,z0=3,facets=[];
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
const makeMesh=(v,ix)=>K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v.flat()),triVerts:new Uint32Array(ix)})));
const ring=(radius,z,angle)=>Array.from({length:6},(_,i)=>[radius*Math.cos(i*Math.PI/3+angle),CY+radius*Math.sin(i*Math.PI/3+angle),z]);
const ob=ring(R,z0,0),ot=ring(R,z0+L,twist),ib=ring(R-T,z0,0),it=ring(R-T,z0+L,twist),v=[...ob,...ot,...ib,...it],ix=[];
for(let i=0;i<6;i++){const j=(i+1)%6;ix.push(i,j,6+j,i,6+j,6+i,12+i,18+j,12+j,12+i,18+i,18+j,i,12+j,j,i,12+i,12+j,6+i,6+j,18+j,6+i,18+j,18+i);facets.push([ob[i],ob[j],ot[j]],[ob[i],ot[j],ot[i]]);}
let shell=makeMesh(v,ix),minNormalThickness=Infinity;
// A shallow triangular prism reinforces each face. Insets preserve compliant diagonal corridors.
for(const tri of facets){const [a,b,c]=tri,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n),normal=n.map(x=>x/len),center=[0,1,2].map(k=>(a[k]+b[k]+c[k])/3),small=tri.map(p=>p.map((x,k)=>center[k]+.74*(x-center[k]))),base=small.map(p=>p.map((x,k)=>x-.08*normal[k])),top=small.map(pt=>pt.map((x,k)=>x+p.corner*normal[k]));

const prism=makeMesh([...base,...top],[0,2,1,3,4,5,0,1,4,0,4,3,1,2,5,1,5,4,2,0,3,2,3,5]);shell=add(shell,prism);
// radial inset projects onto each outward face normal; conservative lower bound over all its vertices
for(const point of tri){const radial=[point[0],point[1]-CY,0];minNormalThickness=Math.min(minNormalThickness,T*(normal[0]*radial[0]+normal[1]*radial[1])/R);}
}
const bottom=move(cyl(R+.7,3.25,96),[0,CY,0]);
const collar=move(sub(cyl(R+.4,2,6),cyl(R-T-.3,2,6)),[0,CY,z0+L-1.7]);
// Collar is rotated to meet the twisted upper ring, about its own center.
const upper=move(K(K(collar.translate([0,-CY,0])).rotate([0,0,twist*180/Math.PI])),[0,CY,0]);
let wheel=add(add(add(add(cyl(12,H),box(8,CY-8,2.8,[-4,8,0])),bottom),shell),upper);
wheel=sub(wheel,move(cyl(7.5,1.8,96),[0,0,H-.8]));
if(p.texture>0)for(let i=0;i<18;i++){const a=i*2*Math.PI/18;if(9*Math.sin(a)>6.8)continue;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(a),9*Math.sin(a),H-p.texture]));}
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-.8-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-.8-.15]));}


const components=wheel.decompose(),count=components.length;components.forEach(c=>c.delete());if(wheel.status()!=='NoError'||wheel.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');
const clean=K(K(K(wheel.asOriginal()).setTolerance(.001)).simplify(.002)),mesh=clean.getMesh();const parts=[{name:names[0],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp}],model={parameters:{...p},parts,layout:[[0,0,0]],H,R,L,T,twist,CY,z0,facets,wellFloor:H-.8,importSafeRadius:6.5,minimumWallThickness:minNormalThickness};if(minNormalThickness<=.7)throw Error('Membrane too thin. Increase radial thickness or reduce twist.');verifySolid(parts[0]);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){return [{pos:[0,0,0],angle:0}];}
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
