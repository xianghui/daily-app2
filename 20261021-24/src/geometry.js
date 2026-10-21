import Module from 'manifold-3d';
let api;
export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Pivot spacing',38,46,1],['length','Orbit radius',18,26,1],['spring','Bridge thickness',3,5,.5],['gap','Running clearance',.25,.5,.05],['corner','Palm end radius',8,11,.5],['texture','Palm groove depth',0,.5,.1],['fit','Cap radial allowance',-.08,-.01,.01]];
export const defaults={width:42,length:22,spring:4,gap:.35,corner:9,texture:.3,fit:-.03};
export const presets={'Pebble':defaults,'Long sweep':{...defaults,width:46,length:26,spring:5,corner:11},'Pocket':{...defaults,width:38,length:18,spring:3,corner:8}};
export const names=['palm-base','left-crank','right-crank','thumb-bridge','cap-left-base','cap-right-base','cap-left-bridge','cap-right-bridge'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v));const cyl=(r,h,n=48)=>K(M.cylinder(h,r,r,n));
const box=(x,y,z)=>K(M.cube([x,y,z]));
const capsule=(span,r,h)=>add(add(move(cyl(r,h),[-span/2,0,0]),move(cyl(r,h),[span/2,0,0])),move(box(span,2*r,h),[-span/2,-r,0]));
try{const D=p.width,L=p.length,g=p.gap,armZ=4+g,bridgeZ=12+g,H=bridgeZ+p.spring;
let base=capsule(D,p.corner,4);
for(const x of [-D/2,D/2]){base=add(base,move(cyl(2,5.5+2*g),[x,0,3.9]));}
if(p.texture>0)for(let j=0;j<12;j++){const x=-D/2+j*D/11;base=sub(base,move(cyl(.8,5,16),[x,p.corner+.8-p.texture,-.5]));base=sub(base,move(cyl(.8,5,16),[x,-p.corner-.8+p.texture,-.5]));}
let arm=move(capsule(L,5,4),[L/2,0,0]);
arm=sub(arm,move(cyl(2+g,5),[0,0,-.5]));
arm=add(arm,move(cyl(2,H+g+1.4-armZ-3.9),[L,0,3.9]));
let bridge=capsule(D,6,p.spring);
for(const x of [-D/2,D/2])bridge=sub(bridge,move(cyl(2+g,p.spring+1),[x,0,-.5]));
bridge=move(bridge,[0,0,bridgeZ]);
// Thumb pad is isolated at the midpoint, far from all bearing interfaces.
bridge=add(bridge,move(cyl(7,p.spring),[0,0,bridgeZ]));
let cap=sub(cyl(4.5,2.5),move(cyl(2+p.fit,1.6),[0,0,-.1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves bridge safe zone. Reduce size, center placement, or reset transforms.');}
bridge=add(bridge,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));bridge=add(bridge,move(custom,[0,0,H-.15]));}


// Every part exported bed-down. Caps have blind sockets facing the bed and need a short 4 mm bridge.
bridge=move(bridge,[0,0,-bridgeZ]);
const solids=[base,arm,arm,bridge,cap,cap,cap,cap],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
const layout=[[D/2+p.corner,p.corner,0],[5,2*p.corner+12,0],[5,2*p.corner+28,0],[D/2+7,2*p.corner+44,0],[10,2*p.corner+62,0],[23,2*p.corner+62,0],[36,2*p.corner+62,0],[49,2*p.corner+62,0]];
const model={parameters:{...p},parts,layout,D,L,armZ,bridgeZ,H};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);model.assembled=[D+2*L+2*p.corner,2*L+2*p.corner,H+g+2.5];return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){const a=angle,c=Math.cos(a),s=Math.sin(a),D=m.D,L=m.L,g=m.parameters.gap;return [{pos:[0,0,0],angle:0},{pos:[-D/2,0,m.armZ],angle:a},{pos:[D/2,0,m.armZ],angle:a},{pos:[L*c,L*s,m.bridgeZ],angle:0},{pos:[-D/2,0,m.armZ+4+g],angle:0},{pos:[D/2,0,m.armZ+4+g],angle:0},{pos:[-D/2+L*c,L*s,m.H+g],angle:0},{pos:[D/2+L*c,L*s,m.H+g],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
