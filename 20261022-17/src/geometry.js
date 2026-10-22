import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Cross half-span',9,11,1],['length','Fork height',16,20,1],['corner','Palm thickness',3,5,.5],['texture','Grip groove depth',0,.6,.2],['fit','Running clearance',.2,.5,.05],['round','Press seat allowance',-.04,.08,.02]];
export const defaults={width:10,length:18,corner:4,texture:.4,fit:.3,round:0};
export const presets={'Open breeze':defaults,'Long reach':{...defaults,width:11,length:20,corner:5,texture:.6},'Pocket cross':{...defaults,width:9,length:16,corner:3,texture:0,fit:.4}};
export const names=['input-yoke','output-yoke','cross-spider','pin-x-positive','pin-x-negative','pin-y-positive','pin-y-negative'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-9||p[k]>b+1e-9).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=48)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z])),rot=(s,v)=>K(s.rotate(v));
try{const L=p.width,H=p.length,B=p.corner,f=p.fit,W=3,gripY=-22;
const rect=(x,y,z,pos)=>move(box(x,y,z),pos);
let wheel=rect(2*(L+f+W),8,B,[-L-f-W,-4,0]);
wheel=add(wheel,rect(16,22,B,[-8,gripY,0]));wheel=add(wheel,move(cyl(8,B),[0,gripY,0]));
for(const sign of [-1,1]){const x=sign>0?L+f:-L-f-W;let ear=rect(W,8,H+4, [x,-4,0]);const bore=move(rot(cyl(2+p.round,W+2),[0,90,0]),[x-1,0,H]);ear=sub(ear,bore);wheel=add(wheel,ear);}
if(p.texture>0)for(let i=0;i<5;i++)wheel=sub(wheel,rect(12,.6,p.texture+.1,[-6,gripY-4+i*2,B-p.texture]));
let other=wheel;
let spider=add(rect(2*L,8,8,[-L,-4,-4]),rect(8,2*L,8,[-4,-L,-4]));
for(const sign of [-1,1]){spider=sub(spider,move(rot(cyl(2+f,4.4),[0,sign>0?-90:90,0]),[sign*(L+.1),0,0]));spider=sub(spider,move(rot(cyl(2+f,4.4),[sign>0?90:-90,0,0]),[0,sign*(L+.1),0]));}
let pin=add(cyl(3.2,1.5),move(cyl(2,W+f+3.5),[0,0,1.4]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,B-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves palm tab safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,gripY,0]);wheel=add(wheel,custom);
}else{custom=K(cyl(2.7,1.8+p.texture).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,gripY,B-.15]));}
const solids=[wheel,other,spider,pin,pin,pin,pin],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error(`${names[i]}: each part must be one connected closed solid. Use a broad flat-bottom grip.`);const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const couponSolid=sub(cyl(5,3),move(cyl(2+p.round,4),[0,0,-.5])),cm=couponSolid.getMesh(),coupon={parts:[{name:'socket-coupon',vertices:Array.from(cm.vertProperties),indices:Array.from(cm.triVerts),stride:cm.numProp}],layout:[[0,0,0]]};
const model={coupon,parameters:{...p},parts,layout,L,H,B,f,W,gripY};const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
const ident=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
export function multiply(a,b){const c=Array(16).fill(0);for(let j=0;j<4;j++)for(let i=0;i<4;i++)for(let k=0;k<4;k++)c[j*4+i]+=a[k*4+i]*b[j*4+k];return c;}
const tr=(x,y,z)=>{const m=ident();m[12]=x;m[13]=y;m[14]=z;return m;};
const rx=a=>[1,0,0,0,0,Math.cos(a),Math.sin(a),0,0,-Math.sin(a),Math.cos(a),0,0,0,0,1];
const ry=a=>[Math.cos(a),0,-Math.sin(a),0,0,1,0,0,Math.sin(a),0,Math.cos(a),0,0,0,0,1];
const rz=a=>[Math.cos(a),Math.sin(a),0,0,-Math.sin(a),Math.cos(a),0,0,0,0,1,0,0,0,0,1];
const chain=(...ms)=>ms.reduce(multiply,ident());
export function placements(m,angle=0,stroke=0){const a=Math.max(-1,Math.min(1,angle))*Math.PI/9,b=stroke*Math.PI/9,{L,H,f,W}=m,center=tr(0,0,H),cross=chain(center,rx(a)),output=chain(cross,ry(b),rz(Math.PI/2),rx(Math.PI),tr(0,0,-H));const pinPose=sign=>chain(tr(sign*(L+f+W+1.4),0,H),ry(sign>0?-Math.PI/2:Math.PI/2));return [ident(),output,cross,pinPose(1),pinPose(-1),multiply(output,pinPose(1)),multiply(output,pinPose(-1))].map(matrix=>({matrix}));}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,-Math.min(...part.vertices.filter((_,j)=>j%part.stride===2))];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
