import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Long beam radius',30,34,1],['length','Diamond side',20,22,1],['spring','Thumb ring radius',4.8,6,.2],['gap','Running clearance',.25,.5,.05],['corner','Palm tab radius',7,9,.5],['texture','Palm groove depth',0,.5,.1],['fit','Socket radial allowance',-.08,-.01,.01]];
export const defaults={width:32,length:21,spring:5.4,gap:.35,corner:8,texture:.3,fit:-.03};
export const presets={'Balanced':defaults,'Broad diamond':{...defaults,width:30,length:22,spring:6,corner:9},'Long reach':{...defaults,width:34,length:20,spring:4.8,corner:7}};
export const names=['palm-base','upper-radius','lower-radius','upper-inner','lower-inner','upper-outer','lower-outer','origin-cap','upper-cap','lower-cap','inner-cap','outer-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const R=p.width,r=p.length,g=p.gap,B=3,zA=3+g,zB=zA+5+g,zC=zB+5+g,zD=zC+5+g,zE=zD+5+g,zF=zE+5+g,gripX=-15;
const capsule=(len,radius,h)=>add(add(cyl(radius,h),move(cyl(radius,h),[len,0,0])),move(box(len,2*radius,h),[0,-radius,0]));
let base=cyl(5,B);base=add(base,move(box(15,10,B),[gripX,-5,0]));base=add(base,move(cyl(p.corner,B),[gripX,0,0]));
const pin=(a,x,height)=>{a=add(a,move(cyl(2.5,height),[x,0,0]));return add(a,move(cyl(1.8,2.4),[x,0,height-.1]));};
base=pin(base,0,zB+3+g);
if(p.texture>0)for(const side of [-1,1])for(let i=-2;i<=2;i++)base=sub(base,move(cyl(.75,5,24),[gripX+i*2.2,side*(p.corner+.75-p.texture),-1]));
const hole=(a,x)=>sub(a,move(cyl(2.5+g,5),[x,0,-1]));
const upper=pin(hole(capsule(R,4.8,3),0),R,zE-zA+3+g);
const lower=pin(hole(capsule(R,4.8,3),0),R,zF-zB+3+g);
const innerU=pin(hole(capsule(r,4.8,3),0),r,zD-zC+3+g);
const ringLink=()=>hole(hole(add(capsule(r,4.8,3),move(cyl(p.spring,3),[r,0,0])),0),r);
const innerL=ringLink();
const outerU=pin(hole(capsule(r,4.8,3),0),r,zF-zE+3+g);
const outerL=ringLink();
const cap=sub(cyl(4.5,2.3),move(cyl(1.8+p.fit,4),[0,0,-.5]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,3-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves thumb pad safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[gripX,0,0]);base=add(base,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));base=add(base,move(custom,[gripX,0,3-.15]));}
const solids=[base,upper,lower,innerU,innerL,outerU,outerL,cap,cap,cap,cap,cap],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const cm=cap.getMesh(),coupon={parts:[{name:'socket-coupon',vertices:Array.from(cm.vertProperties),indices:Array.from(cm.triVerts),stride:cm.numProp}],layout:[[0,0,0]]};
const model={coupon,parameters:{...p},parts,layout,R,r,zA,zB,zC,zD,zE,zF,gripX};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
// Peaucellier inversion cell: O,A,C,B,D form two equal-radius arms and a rhombus.
// OC * OD = R²-r²; ray heading and inverse extension are independent freedoms.
export function motion(m,angle=0,lift=0){const beta=lift*12*Math.PI/180,k=m.R*m.R-m.r*m.r,c=Math.sqrt(k)*(.65+.07*angle),d=k/c,a=(c+d)/2,h=Math.sqrt(m.R*m.R-a*a),rot=([x,y])=>[x*Math.cos(beta)-y*Math.sin(beta),x*Math.sin(beta)+y*Math.cos(beta)];return{O:[0,0],A:rot([a,h]),B:rot([a,-h]),C:rot([c,0]),D:rot([d,0]),c,d,k,h,beta};}
export function placements(m,angle=0,lift=0){const q=motion(m,angle,lift),g=m.parameters.gap;const mat=(v,z,a=0)=>{const c=Math.cos(a),s=Math.sin(a);return{matrix:[c,s,0,0,-s,c,0,0,0,0,1,0,...v,z,1]};},link=(a,b,z)=>mat(a,z,Math.atan2(b[1]-a[1],b[0]-a[0]));return[mat(q.O,0),link(q.O,q.A,m.zA),link(q.O,q.B,m.zB),link(q.A,q.C,m.zC),link(q.B,q.C,m.zD),link(q.A,q.D,m.zE),link(q.B,q.D,m.zF),mat(q.O,m.zB+3+g),mat(q.A,m.zE+3+g),mat(q.B,m.zF+3+g),mat(q.C,m.zD+3+g),mat(q.D,m.zF+3+g)];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
