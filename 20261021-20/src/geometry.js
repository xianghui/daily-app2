import Module from 'manifold-3d';
let api;
export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Thumb pad width',18,24,1],['length','Leaf reach',26,34,1],['spring','Leaf thickness',2.4,3.2,.1],['gap','Running clearance',.25,.5,.05],['corner','Pad corner radius',2,4,.5],['texture','Grip groove depth',0,.5,.1],['fit','Cap radial allowance',-.08,.04,.01]];
export const defaults={width:22,length:30,spring:2.8,gap:.35,corner:4,texture:.3,fit:-.03};
export const presets={'FDM starting fit':defaults,'Loose running':{...defaults,gap:.5,fit:0},'Compact':{...defaults,width:18,length:26,spring:2.4}};
export const names=['palm-spine','lower-leaf','middle-leaf','upper-leaf','retaining-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,CrossSection:C,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v));const cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n));const box=(x,y,z)=>K(M.cube([x,y,z]));
try{const H=p.spring,D=p.length,R=D+p.width/2+3,postTop=2+3*(H+.8)+4*p.gap,L=2*R,W=2*R;
function rounded(x,y,r,h){const points=[];for(const [cx,cy,start]of [[x/2-r,y/2-r,0],[-x/2+r,y/2-r,90],[-x/2+r,-y/2+r,180],[x/2-r,-y/2+r,270]])for(let j=0;j<=10;j++){const a=(start+j*9)*Math.PI/180;points.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}return K(K(new C([points])).extrude(h));}
let base=add(cyl(10,2),move(rounded(26,18,p.corner,2),[-15,0,0]));
let post=move(cyl(3,postTop-2),[0,0,2]);post=sub(post,move(cyl(1.5,4),[0,0,postTop-3.5]));base=add(base,post);
let wheel=rounded(p.width,16,p.corner,H);
if(p.texture>0)for(let j=-1;j<=1;j++)wheel=sub(wheel,move(cyl(1,5,20),[j*5,9-p.texture,-1]));
const plainWheel=wheel;
let cap=add(cyl(6.5,2),move(cyl(1.5-p.fit,3),[0,0,2]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>p.width/2-4||Math.abs(y)>8)throw Error('Grip leaves paddle safe zone. Reduce size, center placement, or reset transforms.');}
wheel=add(wheel,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-.15]));}

function leaf(pad){let arm=add(cyl(7,H+.8),move(box(D,10,H),[0,-5,0]));arm=add(arm,move(pad,[D,0,0]));return sub(arm,move(cyl(3+p.gap,H+2),[0,0,-1]));}
const lower=leaf(plainWheel),middle=leaf(plainWheel),upper=leaf(wheel);
const solids=[base,lower,middle,upper,cap],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(solid.simplify(1e-5)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
const pitch=H+.8+p.gap;
const model={parameters:{...p},parts,layout:[[30,16,0],[10,40,0],[10,40+p.width+6,0],[10,40+2*(p.width+6),0],[12,40+3*(p.width+6),0]],L,W,R,postTop,pitch};
const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);model.assembled=[2*R,2*R,Math.max(postTop+2,2+p.gap+2*pitch+Math.max(...parts[3].vertices.filter((_,i)=>i%parts[3].stride===2)))];return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(model,angle=Math.PI/4,lift=0){const z=2+model.parameters.gap;return[{pos:[0,0,0],angle:0},...Array.from({length:3},(_,i)=>({pos:[0,0,z+i*model.pitch],angle:angle*(i+1)})),{pos:[0,0,model.postTop+2],angle:0,flip:true}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
