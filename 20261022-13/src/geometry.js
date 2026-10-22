import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Lower arm length',16,24,1],['length','Upper arm length',30,40,1],['corner','Palm thickness',3,5,.5],['texture','Tactile groove depth',0,.6,.2],['fit','Running clearance',.2,.5,.05],['round','Cap socket allowance',-.04,.08,.02]];
export const defaults={width:20,length:34,corner:4,texture:.4,fit:.3,round:0};
export const presets={'Even drift':defaults,'Long cascade':{...defaults,width:24,length:40,corner:5,texture:.6},'Short flutter':{...defaults,width:16,length:30,corner:3,texture:0,fit:.4}};
export const names=['palm-frame','upper-arm','lower-arm','pivot-cap','elbow-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-9||p[k]>b+1e-9).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const r=p.width,d=p.length,B=p.corner,f=p.fit,T=3,gripX=-18,crankZ=B+6+f,crankTop=crankZ+T,leverZ=crankTop+2*f+1.5,leverTop=leverZ+T;
const rect=(x,y,z,pos)=>move(box(x,y,z),pos);
function capsule(a,b,rad,h){return add(add(move(cyl(rad,h),[0,a,0]),move(cyl(rad,h),[0,b,0])),rect(2*rad,b-a,h,[-rad,a,0]));}
let wheel=capsule(gripX,0,9,B);
wheel=add(wheel,move(cyl(2.4,crankTop+f-B+.1),[0,0,B-.1]));
wheel=sub(wheel,move(cyl(.7+p.round,2.1),[0,0,crankTop+f-2]));
let crank=capsule(0,d,5.5,T);
crank=sub(crank,move(cyl(2.4+f,T+2),[0,0,-1]));
const driveH=leverTop+f-crankZ;
crank=add(crank,move(cyl(2.4,driveH-T+.1),[0,d,T-.1]));
crank=sub(crank,move(cyl(.7+p.round,2.1),[0,d,driveH-2]));
let lever=add(capsule(0,r,5.5,T),move(cyl(7,T),[0,r,0]));
lever=sub(lever,move(cyl(2.4+f,T+2),[0,0,-1]));
if(p.texture>0)for(let y=7;y<r-3;y+=2.5)lever=sub(lever,rect(18,.7,p.texture,[-9,y,T-p.texture]));
function cap(rad){return add(cyl(rad,1.2),move(cyl(.7,1.9),[0,0,1.1]));}
const caps=[cap(4.2),cap(4.2)];
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,B-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves palm tab safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,gripX,0]);wheel=add(wheel,custom);
}else{custom=K(cyl(2.7,1.8+p.texture).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,gripX,B-.15]));}
const solids=[wheel,crank,lever,...caps],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error(`${names[i]}: each part must be one connected closed solid. Use a broad flat-bottom grip.`);const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const couponSolid=sub(box(12,12,4),move(cyl(.7+p.round,2.1),[6,6,2])),cm=couponSolid.getMesh(),coupon={parts:[{name:'socket-coupon',vertices:Array.from(cm.vertProperties),indices:Array.from(cm.triVerts),stride:cm.numProp}],layout:[[0,0,0]]};
const model={coupon,parameters:{...p},parts,layout,r,d,B,f,T,crankZ,crankTop,leverZ,leverTop,gripX};const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0,lower=0){const a=angle,b=lower,x=-m.d*Math.sin(a),y=m.d*Math.cos(a);return [{pos:[0,0,0],angle:0},{pos:[0,0,m.crankZ],angle:a},{pos:[x,y,m.leverZ],angle:b},{pos:[0,0,m.crankTop+m.f+1.2],angle:0,flip:true},{pos:[x,y,m.leverTop+m.f+1.2],angle:0,flip:true}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
