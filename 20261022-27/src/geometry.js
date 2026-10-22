import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Neutral pin radius',22,24,1],['length','Slider length',8,10,1],['spring','Ring scallop depth',.4,1.2,.2],['gap','Running clearance',.25,.5,.05],['corner','Palm tab radius',7,9,.5],['texture','Palm groove depth',0,.5,.1],['fit','Socket radial allowance',-.08,-.01,.01]];
export const defaults={width:23,length:9,spring:.8,gap:.35,corner:8,texture:.3,fit:-.03};
export const presets={'Balanced':defaults,'Wide embrace':{...defaults,width:24,length:10,spring:1.2,corner:9},'Quiet miniature':{...defaults,width:22,length:8,spring:.4,corner:7}};
export const names=['palm-base','guide-lid','thumb-ring','radial-jaw-a','radial-jaw-b','radial-jaw-c','axle-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const g=p.gap,gripX=-52,R=p.width;
const turn=(s,a)=>K(s.rotate([0,0,a]));
const capsule=(len,radius,h)=>add(add(cyl(radius,h),move(cyl(radius,h),[len,0,0])),move(box(len,2*radius,h),[0,-radius,0]));
let base=cyl(41.5,6);base=add(base,move(box(52,10,3),[gripX,-5,0]));base=add(base,move(cyl(p.corner,3),[gripX,0,0]));
// Three open-topped radial guideways, with closed inner/outer stops.
for(let i=0;i<3;i++)base=sub(base,turn(move(box(29,8+2*g,5),[10,-4-g,2]),120*i));
base=add(base,cyl(3,11+2*g));base=add(base,move(cyl(1.8,2.4),[0,0,11+2*g-.1]));
let lid=sub(cyl(41.5,2),move(cyl(3+g,4),[0,0,-1]));
for(let i=0;i<3;i++){
 const a=120*i,b=a+60,r=37,rad=b*Math.PI/180,x=r*Math.cos(rad),y=r*Math.sin(rad);
 lid=sub(lid,turn(move(box(29,3.6+2*g,4),[10,-1.8-g,-1]),a));
 // Three broad, full-depth registration dowels on stationary lands.
 base=add(base,move(cyl(1.8,1.8),[x,y,5.95]));
 lid=sub(lid,move(cyl(1.8+p.fit,4),[x,y,-1]));
}
let rotor=sub(cyl(37,3,96),move(cyl(3+g,5),[0,0,-1]));
for(let i=0;i<3;i++){
 const slot=turn(move(turn(capsule(15*Math.SQRT2,1.8+g,5),45),[R-7.5,-7.5,-1]),120*i);
 rotor=sub(rotor,slot);
}
for(let i=0;i<24;i++){const a=i*Math.PI/12,rad=38.2-p.spring;rotor=sub(rotor,move(cyl(1.2,5,24),[rad*Math.cos(a),rad*Math.sin(a),-1]));}
let jaw=move(box(p.length,8,3),[-p.length/2,-4,0]);jaw=add(jaw,move(cyl(1.8,5.8),[0,0,2.9]));
const cap=sub(cyl(4.5,2.3),move(cyl(1.8+p.fit,4),[0,0,-.5]));
if(p.texture>0)for(const side of [-1,1])for(let i=-2;i<=2;i++)base=sub(base,move(cyl(.75,5,24),[gripX+i*2.2,side*(p.corner+.75-p.texture),-1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,3-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves thumb pad safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[gripX,0,0]);base=add(base,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));base=add(base,move(custom,[gripX,0,3-.15]));}
const solids=[base,lid,rotor,jaw,jaw,jaw,cap],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const cm=cap.getMesh(),coupon={parts:[{name:'socket-coupon',vertices:Array.from(cm.vertProperties),indices:Array.from(cm.triVerts),stride:cm.numProp}],layout:[[0,0,0]]};
const model={coupon,parameters:{...p},parts,layout,R,gripX};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
// Three tangentially inclined straight slots drive three independent radial sliders.
// In rotor coordinates every slot centerline satisfies x-y=R.
export function motion(m,angle=0){const theta=angle*12*Math.PI/180,r=m.R/(Math.cos(theta)+Math.sin(theta));return{theta,r,points:[0,1,2].map(i=>[r*Math.cos(i*2*Math.PI/3),r*Math.sin(i*2*Math.PI/3)])};}
export function placements(m,angle=0){const q=motion(m,angle),g=m.parameters.gap;const mat=(x,y,z,a=0)=>{const c=Math.cos(a),s=Math.sin(a);return{matrix:[c,s,0,0,-s,c,0,0,0,0,1,0,x,y,z,1]};};return[mat(0,0,0),mat(0,0,6),mat(0,0,8+g,q.theta),...q.points.map(([x,y],i)=>mat(x,y,2+g,i*2*Math.PI/3)),mat(0,0,11+2*g)];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
