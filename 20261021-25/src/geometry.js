import Module from 'manifold-3d';
let api;
export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Barrel diameter',20,26,1],['length','Axial travel',5,9,1],['spring','Collar height',8,10,.5],['gap','Running clearance',.25,.5,.05],['corner','Palm radius',20,23,.5],['texture','Palm groove depth',0,.5,.1],['fit','Follower radial allowance',-.08,-.01,.01]];
export const defaults={width:22,length:7,spring:9,gap:.35,corner:21,texture:.3,fit:-.03};
export const presets={'Pebble':defaults,'Long rise':{...defaults,width:26,length:9,spring:10,corner:23},'Pocket':{...defaults,width:20,length:5,spring:8,corner:20}};
export const names=['barrel-base','thumb-collar','follower-pin'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v));const cyl=(r,h,n=96)=>K(M.cylinder(h,r,r,n));
try{const R=p.width/2,g=p.gap,Ro=R+g+4,H=p.spring,padX=Ro+4,baseZ=4+g,centerZ=baseZ+H/2,postH=centerZ+p.length+H/2+2;
let base=add(cyl(p.corner,4),move(cyl(R,postH-3.9),[0,0,3.9]));
// Closed parametric radial band: sloping ceilings/floors and radial end stops.
// Width accounts for the cam slope at the deepest radius, plus polygon chord error.
const inner=R-2.5,outer=R+1,half=(1.5+g)*Math.sqrt(1+(p.length/(Math.PI*inner))**2)+.05;
const vs=[],ix=[],N=100,start=-.18,end=Math.PI+.18;
for(let j=0;j<=N;j++){const a=start+(end-start)*j/N,z=centerZ+p.length*a/Math.PI;for(const [r,dz]of [[inner,-half],[outer,-half],[outer,half],[inner,half]])vs.push(r*Math.cos(a),r*Math.sin(a),z+dz);}
for(let j=0;j<N;j++)for(let k=0;k<4;k++){const a=4*j+k,b=4*j+(k+1)%4,c=b+4,d=a+4;ix.push(a,b,c,a,c,d);}
ix.push(0,2,1,0,3,2);const q=4*N;ix.push(q,q+1,q+2,q,q+2,q+3);
for(let i=0;i<ix.length;i+=3){[ix[i+1],ix[i+2]]=[ix[i+2],ix[i+1]];}
const cutter=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(vs),triVerts:new Uint32Array(ix)})));
if(cutter.status()!=='NoError')throw Error('Cam band could not be formed');base=sub(base,cutter);
if(p.texture>0)for(let j=0;j<28;j++){const a=j*Math.PI*2/28;base=sub(base,move(cyl(.8,5,16),[(p.corner+.8-p.texture)*Math.cos(a),(p.corner+.8-p.texture)*Math.sin(a),-.5]));}
let collar=sub(cyl(Ro,H),move(cyl(R+g,H+1),[0,0,-.5]));
// The thumb pad projects away from the follower bore and all bearing surfaces.
collar=add(collar,move(cyl(7,H),[-padX,0,0]));
const hole=move(K(cyl(2+p.fit,8).rotate([0,-90,0])),[Ro+1,0,H/2]);collar=sub(collar,hole);
// Printed head-down: 2 mm head, 3.75 mm friction shaft, narrower cam follower nose.
let pin=add(cyl(3.5,2),move(cyl(2,3.85),[0,0,1.9]));
pin=add(pin,move(cyl(1.5,g+1.95),[0,0,5.7]));
// Custom geometry is fused only on the outboard pad opposite the follower.
const gripX=-padX;
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves collar pad safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[gripX,0,0]);collar=add(collar,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));collar=add(collar,move(custom,[gripX,0,H-.15]));}


const solids=[base,collar,pin],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
const layout=[[p.corner,p.corner,0],[padX+7,2*p.corner+Ro+12,0],[2*p.corner+14,5,0]];
const model={parameters:{...p},parts,layout,R,Ro,H,padX,baseZ,centerZ,postH,grooveHalf:half};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){const a=Math.max(0,Math.min(Math.PI,angle)),c=Math.cos(a),s=Math.sin(a),z=m.baseZ+m.parameters.length*a/Math.PI;return [{pos:[0,0,0],angle:0},{pos:[0,0,z],angle:a},{pos:[(m.Ro+2)*c,(m.Ro+2)*s,z+m.H/2],angle:a,tilt:-Math.PI/2}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
