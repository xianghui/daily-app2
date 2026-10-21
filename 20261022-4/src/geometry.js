import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Rotor diameter',36,48,2],['length','Rotor thickness',6,8,.5],['spring','Axis offset',2,4,.5],['gap','Groove depth',2,3,.2],['corner','Cross disc thickness',2.4,3.6,.2],['round','Bridge socket allowance',-.08,.08,.02],['texture','Rim groove depth',0,.6,.1],['fit','Running clearance',.2,.5,.05]];
export const defaults={width:42,length:6,spring:3,gap:2.4,corner:3,round:0,texture:.3,fit:.3};
export const presets={'Balanced':defaults,'Wide orbit':{...defaults,width:48,spring:4,gap:3,texture:.6},'Pocket turn':{...defaults,width:36,spring:2,corner:2.4,length:6}};
export const names=['palm-frame','lower-rotor','floating-cross','upper-rotor','bridge-lid'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=96)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const R=p.width/2,gripX=-(R+24),B=4,f=p.fit,a=f/4,T=p.length,G=p.gap,H=p.corner,d=p.spring,S=R+11,lowerZ=B+a,lowerTop=lowerZ+T,crossZ=lowerTop+a,upperBottom=lowerTop+H+2*a,upperTop=upperBottom+T,bridgeUnder=upperTop+a;
function capsule(a,b,r,h){return add(add(move(cyl(r,h),[a,0,0]),move(cyl(r,h),[b,0,0])),move(box(b-a,2*r,h),[a,-r,0]));}
let wheel=capsule(0,d,R+7,B);
wheel=add(wheel,move(box(18,24,B),[-9,-R-30,0]));wheel=add(wheel,move(cyl(9,B,64),[0,gripX,0]));
wheel=add(wheel,cyl(3, B+2));
for(const y of [-S,S]){wheel=add(wheel,move(box(12,12,B),[d-6,y-6,0]));wheel=add(wheel,move(cyl(4,bridgeUnder),[d,y,0]));wheel=add(wheel,move(cyl(2.5,1.8),[d,y,bridgeUnder]));}
let rotor=sub(cyl(R,T),move(cyl(3+f,2.1),[0,0,-.1]));
rotor=sub(rotor,move(box(2*R+2,4+2*f,G+1),[-R-1,-2-f,T-G]));
if(p.texture>0)for(let i=0;i<32;i++){const a=i/32*2*Math.PI;rotor=sub(rotor,move(cyl(.9,T+2,16),[(R+.9-p.texture)*Math.cos(a),(R+.9-p.texture)*Math.sin(a),-1]));}
const tongue=G-f;let cross=move(cyl(R-4,H),[0,0,tongue]);
cross=add(cross,capsule(-R+8,R-8,2,tongue+.1));
cross=add(cross,move(K(capsule(-R+8,R-8,2,tongue+.1).rotate([0,0,90])),[0,0,tongue+H-.1]));
let bridge=move(box(9,2*S,3),[-4.5,-S,0]);for(const y of [-S,S])bridge=add(bridge,move(cyl(4.8,3),[0,y,0]));
bridge=add(bridge,move(cyl(3,2.1),[0,0,2.9]));for(const y of [-S,S])bridge=sub(bridge,move(cyl(2.5+p.round,2.1),[0,y,1.1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,B-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves palm tab safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,gripX,0]);wheel=add(wheel,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,gripX,B-.15]));}

const solids=[wheel,rotor,cross,rotor,bridge],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Each part must be one connected closed solid. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const model={parameters:{...p},parts,layout,R,gripX,B,S,lowerZ,lowerTop,crossZ,upperBottom,upperTop,bridgeUnder};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){const p=m.parameters,d=p.spring,c=Math.cos(angle),s=Math.sin(angle);return [{pos:[0,0,0],angle:0},{pos:[0,0,m.lowerZ],angle},{pos:[d*c*c,d*c*s,m.crossZ-(p.gap-p.fit)],angle},{pos:[d,0,m.upperTop],angle:angle+Math.PI/2,flip:true},{pos:[d,0,m.bridgeUnder+3],angle:0,flip:true}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
