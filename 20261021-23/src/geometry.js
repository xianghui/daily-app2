import Module from 'manifold-3d';
let api;
export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Ball diameter',22,28,1],['length','Stem extension',6,10,1],['spring','Thumb pad thickness',2,4,.5],['gap','Spherical running clearance',.25,.5,.05],['corner','Socket wall',3,5,.5],['texture','Palm groove depth',0,.5,.1],['fit','Collar radial allowance',-.08,.04,.01]];
export const defaults={width:24,length:8,spring:3,gap:.35,corner:4,texture:.3,fit:-.03};
export const presets={'FDM starting fit':defaults,'Loose running':{...defaults,gap:.5,fit:0},'Compact':{...defaults,width:22,length:6,spring:2}};
export const names=['socket-cup','ball-thumb','retaining-collar'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v));const cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n));
try{const R=p.width/2,Z=R+3,T=Z+R*.30,outer=R+p.corner+2, collarR=outer-2,collarInner=R+1.8,H=2*R+p.length+p.spring;
const sphere=(r)=>K(M.sphere(r,96));
let base=sub(cyl(outer,T),move(sphere(R+p.gap),[0,0,Z]));
// A 2 mm-deep annular socket seats the collar without entering the ball cavity.
const recess=sub(cyl(collarR+p.fit,2.1),cyl(collarInner-p.fit,2.1));
base=sub(base,move(recess,[0,0,T-2]));
if(p.texture>0)for(let j=0;j<24;j++){const a=j*Math.PI/12;base=sub(base,move(cyl(1.2,T+2,16),[(outer+1.2-p.texture)*Math.cos(a),(outer+1.2-p.texture)*Math.sin(a),-1]));}
// Ball is exported tangent to the bed; assembled sphere center is at Z.
let wheel=add(move(sphere(R),[0,0,R]),move(cyl(3,p.length+2),[0,0,2*R-2]));
wheel=add(wheel,move(K(M.cylinder(4,3,7,64)),[0,0,2*R+p.length-4]));
wheel=add(wheel,move(cyl(7,p.spring),[0,0,2*R+p.length]));
// Collar flat flange and downward annular locating lip; printable flipped over.
let stop=add(cyl(outer,3),move(sub(cyl(collarR,2),cyl(collarInner,2)),[0,0,-2]));
stop=sub(stop,move(sphere(R+p.gap),[0,0,Z-T]));
stop=sub(stop,move(cyl(R*.70,12),[0,0,-3]));
// Export collar flipped: flange lies on the bed, locating lip faces up.
stop=move(K(stop.rotate([180,0,0])),[0,0,3]);
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves paddle safe zone. Reduce size, center placement, or reset transforms.');}
wheel=add(wheel,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-.15]));}

const solids=[base,wheel,stop],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(solid.simplify(1e-5)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
const model={parameters:{...p},parts,layout:[[outer,outer,0],[2*outer+R+6,outer,0],[4*outer+2*R+12,outer,0]],R,Z,T,outer,travelY:15};
const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);model.assembled=[2*outer,2*outer,3+H+(source?(source.kind==='image'?source.depth+.25:t.height-.15):1.65)];return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(model,angle=0){const tilt=Math.sin(angle)*15*Math.PI/180;return[{pos:[0,0,0],angle:0},{pos:[-model.R*Math.sin(tilt),0,model.Z-model.R*Math.cos(tilt)],angle:0,tilt},{pos:[0,0,model.T+3],angle:0,flip:true}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
