import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Palm track width',18,24,1],['length','Coupler pin span',32,48,2],['spring','Rocker thickness',3,5,.5],['gap','Running clearance',.25,.5,.05],['corner','Palm tab radius',7,9,.5],['texture','Palm groove depth',0,.5,.1],['fit','Socket radial allowance',-.08,-.01,.01]];
export const defaults={width:21,length:40,spring:4,gap:.35,corner:8,texture:.3,fit:-.03};
export const presets={'Balanced':defaults,'Long sweep':{...defaults,width:24,length:48,spring:5,corner:9},'Pocket stroke':{...defaults,width:18,length:32,spring:3,corner:7}};
export const names=['palm-base','half-rocker','straight-coupler','track-slider','under-keeper','pivot-cap','midpoint-cap','slider-cap'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh,CrossSection:C}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=96)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const L=p.length,g=p.gap,B=3,H=p.spring,R=p.width/2,gripX=-R-10;
// Scott Russell exact geometry: O=(0,0), A=(L cos theta,0),
// M=(L/2 cos theta,L/2 sin theta), B=(0,L sin theta).
// Sliding stem meets rounded slot ends at theta=30 and 65 degrees.
const xmin=L*Math.cos(65*Math.PI/180),xmax=L*Math.cos(30*Math.PI/180),rockerZ=B+g,rodZ=rockerZ+H+g,pinTop=rodZ+2.8+g,baseTop=rockerZ+H+g;
const capsule=(a,b,r,h)=>add(add(move(cyl(r,h),[a,0,0]),move(cyl(r,h),[b,0,0])),move(box(b-a,2*r,h),[a,-r,0]));
let base=capsule(0,xmax+5,R,B);
// Account for stem/slot radial clearance so end contact has the specified travel.
base=sub(base,move(capsule(xmin+g,xmax-g,2.5+g,B+2),[0,0,-1]));
base=add(base,move(box(14,12,B),[gripX,-6,0]));base=add(base,move(cyl(p.corner,B),[gripX,0,0]));base=add(base,cyl(3,baseTop));base=add(base,move(cyl(2,2.4),[0,0,baseTop-.1]));
if(p.texture>0)for(const side of [-1,1])for(let i=-2;i<=2;i++)base=sub(base,move(cyl(.75,5,24),[gripX+i*2.2,side*(p.corner+.75-p.texture),-1]));
let rocker=capsule(0,L/2,5,H);rocker=sub(rocker,move(cyl(3+g,H+2),[0,0,-1]));rocker=add(rocker,move(cyl(2.5,pinTop-rockerZ-H+.1),[L/2,0,H-.1]));rocker=add(rocker,move(cyl(2,2.4),[L/2,0,pinTop-rockerZ-.1]));
let rod=capsule(0,L,5,2.8);rod=add(rod,move(cyl(7,2.8),[L,0,0]));for(const x of [0,L/2])rod=sub(rod,move(cyl(2.5+g,5),[x,0,-1]));
// Slider is a broad upper flange; keeper has the guide stem and lower flange.
const sliderH=rodZ-rockerZ;
let slider=sub(cyl(6,sliderH),move(cyl(2.5+p.fit,1.5),[0,0,-.1]));slider=add(slider,move(cyl(2.5,pinTop-rockerZ-sliderH+.1),[0,0,sliderH-.1]));slider=add(slider,move(cyl(2,2.4),[0,0,pinTop-rockerZ-.1]));
let keeper=add(cyl(6,2.4),move(cyl(2.5,B+2*g+1.3+.1),[0,0,2.3]));
const cap=()=>sub(cyl(4.4,2.3),move(cyl(2+p.fit,4),[0,0,-.5]));
const cap0=cap(),cap1=cap(),cap2=cap();
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,3-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves thumb pad safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[gripX,0,0]);base=add(base,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));base=add(base,move(custom,[gripX,0,3-.15]));}
const solids=[base,rocker,rod,slider,keeper,cap0,cap1,cap2],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const couponSolid=sub(cyl(6,2.3),move(cyl(2+p.fit,4),[0,0,-.5])),cm=couponSolid.getMesh(),coupon={parts:[{name:'socket-coupon',vertices:Array.from(cm.vertProperties),indices:Array.from(cm.triVerts),stride:cm.numProp}],layout:[[0,0,0]]};
const model={coupon,parameters:{...p},parts,layout,L,R,xmin,xmax,rockerZ,rodZ,pinTop,baseTop,gripX};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){const theta=(30+35*(Math.max(-1,Math.min(1,angle))+1)/2)*Math.PI/180,L=m.L,g=m.parameters.gap,x=L*Math.cos(theta),mx=L/2*Math.cos(theta),my=L/2*Math.sin(theta),mat=(x,y,z,a)=>({matrix:[Math.cos(a),Math.sin(a),0,0,-Math.sin(a),Math.cos(a),0,0,0,0,1,0,x,y,z,1]});return [mat(0,0,0,0),mat(0,0,m.rockerZ,theta),mat(x,0,m.rodZ,Math.PI-theta),mat(x,0,m.rockerZ,0),mat(x,0,-g-2.4,0),mat(0,0,m.baseTop,0),mat(mx,my,m.pinTop,0),mat(x,0,m.pinTop,0)];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
