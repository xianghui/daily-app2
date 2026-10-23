import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Square side',12,18,1],['length','Bridge free length',4,7,.5],['spring','Bridge bending width',.9,1.4,.1],['gap','Square starting angle',12,30,2],['corner','Plate height',2.4,3.6,.2],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:15,length:5.5,spring:1.1,gap:22,corner:3,texture:.3};
export const presets={'Open Petals':{width:18,length:7,spring:.9,gap:12,corner:2.4,texture:0},'Balanced Bloom':defaults,'Compact Bud':{width:12,length:4,spring:1.4,gap:30,corner:3.6,texture:.6}};
export const names=['square-bloom'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes='Hold the left palm landing and gently compress opposite outer square pads in the XY plane, then release. Four counter-rotating squares change the central opening through four short bending bridges: a rotating-square compliant cell, not a crossed-leaf pivot or reentrant chevron. Begin below 0.3 mm total compression; the undeformed preview does not simulate deformation or force. TPU 95A is a starting material; stiffness, fatigue and auxetic response have not been physically measured. Print the entire planar bottom at Z=0, no supports, hardware, assembly or release joints required. Start with Open Petals as a full-size material calibration. Use a 0.4 mm nozzle and 0.16 mm layers; inspect at least two extrusion paths across each 0.9–1.4 mm bridge. No universal stiffness or tolerance exists. Do not pull apart, fold out of plane or close the center aperture. Stop at whitening, cracks, permanent set or delamination. No physical print or force test has been performed. Imports fuse only into the rigid palm well, away from all four bridges.';
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} ${k==='gap'?'degrees':'mm'}.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const side=p.width,theta=p.gap*Math.PI/180,extent=side/2*(Math.cos(theta)+Math.sin(theta)),a=extent+p.length/2,H=4,C=18+2*extent+p.length/2,end=C+2*a,span=2*a,A=2*extent+p.length/2,low=0,high=0,total=p.corner;
const box=(sz,pos)=>move(K(M.cube(sz)),pos);
let wheel=cyl(10,H,96);
wheel=sub(wheel,move(cyl(7.5,1.8,96),[0,0,H-.8]));
// Checkerboard rotations align opposing corner tips. Four explicit narrow
// bridges join those tips, with 1.5 mm root penetration into each pad.
const centers=[];
for(const sx of [-1,1])for(const sy of [-1,1]){const angle=-sx*sy*p.gap;let q=box([side,side,p.corner],[-side/2,-side/2,0]);q=K(q.rotate([0,0,angle]));const x=C+sx*a,y=sy*a;centers.push({x,y,angle});wheel=add(wheel,move(q,[x,y,0]));}
const b=side/2*(Math.sin(theta)-Math.cos(theta)),horizontalY=a+b,verticalX=C+a-b;
const bridgeCenters=[[C,horizontalY,0],[C,-horizontalY,0],[verticalX,0,90],[2*C-verticalX,0,90]];
for(const[x,y,ang]of bridgeCenters){let q=box([p.length+3,p.spring,p.corner],[-(p.length+3)/2,-p.spring/2,0]);q=K(q.rotate([0,0,ang]));wheel=add(wheel,move(q,[x,y,0]));}
// Rigid palm arm attaches to the exterior of the upper-left square only.
const leftTip=C-a-extent,tipY=a-side/2*(Math.sin(theta)-Math.cos(theta));
wheel=add(wheel,box([leftTip+2,2.4,p.corner],[0,tipY-1.2,0]));
wheel=add(wheel,box([3,Math.abs(tipY)+3,p.corner],[-1.5,-1.5,0]));
if(p.texture>0)for(let i=0;i<12;i++){const a=i*2*Math.PI/12;wheel=sub(wheel,move(cyl(.5,p.texture+1,12),[8.6*Math.cos(a),8.6*Math.sin(a),H-p.texture]));}
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
const clean=K(K(wheel.asOriginal()).setTolerance(.001)),mesh=clean.getMesh();const parts=[{name:names[0],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp}],model={parameters:{...p},parts,layout:[[10,A,0]],H,C,end,span,A,low,high,total,centers,bridgeCenters,extent,halfSpacing:a,wellFloor:H-.8,importSafeRadius:6.5,minimumBendingThickness:p.spring,minimumPlateGap:p.length};verifySolid(parts[0]);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
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
