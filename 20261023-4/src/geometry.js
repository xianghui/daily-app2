import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Anchor span',44,64,2],['length','Ribbon pitch',8,11,1],['spring','Ribbon width',.8,1.2,.1],['gap','Ribbon height',2.4,4,.2],['corner','Ribbon count',2,4,1],['texture','Palm groove depth',0,.6,.1]];
export const defaults={width:54,length:9,spring:1,gap:3,corner:3,texture:.3};
export const presets={'Duet':{width:44,length:8,spring:.8,gap:2.4,corner:2,texture:0},'Trio':defaults,'Quartet':{width:64,length:11,spring:1.2,gap:4,corner:4,texture:.6}};
export const names=['chord-frame'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes='One fixed-fixed flexure instrument, not an audio instrument: gently brush a ribbon sideways and feel its elastic return. Both ends are anchored, unlike a cantilever comb. No moving joints, bearings, retention caps or hardware. Print flat at Z=0, 0.4 mm nozzle, 0.16–0.2 mm layers, three or more walls; inspect thin-wall toolpaths so each 0.8–1.2 mm ribbon prints continuously. PETG is the starting material; PLA is stiffer and can fatigue. Keep lateral plucks within 0.5 mm, do not pull upward or sharply crease the roots. Print the Duet preset as a material calibration specimen before increasing stiffness. No physical print or fatigue test has been performed. This is not a child-safe or chew toy.';
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b}${k==='corner'?' ribbons':' mm'}.`).concat(Number.isInteger(p.corner)?[]:['Ribbon count must be an integer.']);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const R=p.width/2,B=14+(p.corner-1)*p.length+7,H=p.gap;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
// Rigid palm rail, side anchors and end bridge. Every feature is boolean-unioned.
let wheel=box(p.width+8,16,H,[-R-4,-8,0]);
for(const x of [-R-4,R])wheel=add(wheel,box(4,B+8,H,[x,-8,0]));
wheel=add(wheel,box(p.width+8,4,H,[-R-4,B-4,0]));
for(let i=0;i<p.corner;i++){
 const y=14+i*p.length,w=p.spring;
 wheel=add(wheel,box(p.width+.4,w,H,[-R-.2,y-w/2,0]));
 // Tapered, broad roots reduce the sharp width step at each anchor.
 for(const sign of [-1,1]){const pts=[[sign*R,y-1.6,0],[sign*R,y+1.6,0],[sign*(R-4),y-w/2,0],[sign*(R-4),y+w/2,0]];
 const root=K(M.hull(pts.concat(pts.map(v=>[v[0],v[1],H]))));wheel=add(wheel,root);}
 wheel=add(wheel,move(cyl(1.3,H,32),[0,y,0]));
}
// A three-millimeter comfort radius rounds the external frame corners only.
const outer=[];for(const x of [-R-1,R+1])for(const y of [-5,B-3])outer.push(move(cyl(3,H,48),[x,y,0]));
const comfort=K(M.hull(outer));wheel=K(wheel.intersect(comfort));
// Recess for image or mesh payload is restricted to the rigid palm rail.
wheel=sub(wheel,move(cyl(7.5,1.8,96),[0,0,H-.8]));
if(p.texture>0)for(const sign of [-1,1])for(let y=-5;y<=5;y+=2.5)wheel=sub(wheel,move(cyl(.5,p.texture+1,16),[sign*(R-6),y,H-p.texture]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-.8-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=add(wheel,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-.8-.15]));}


const components=wheel.decompose(),count=components.length;components.forEach(c=>c.delete());if(wheel.status()!=='NoError'||wheel.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');
const clean=K(K(wheel.asOriginal()).setTolerance(.001)),mesh=clean.getMesh();const parts=[{name:names[0],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp}],model={parameters:{...p},parts,layout:[[R+4,8,0]],R,B,H,wellFloor:H-.8,importSafeRadius:6.5,ribbonYs:Array.from({length:p.corner},(_,i)=>14+i*p.length),freeSpan:p.width-8,maxPluck:.5};const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){return [{pos:[0,0,0],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
