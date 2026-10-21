import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Puck diameter',8,10,1],['length','Half-run length',16,24,2],['spring','Lane pitch',16,20,2],['gap','Puck thickness',2.4,3.6,.2],['corner','Palm thickness',3,5,1],['round','Lid thickness',2,3,.5],['texture','Palm groove depth',0,.6,.2],['fit','Running clearance',.25,.5,.05],['seat','Lid socket allowance',-.08,.04,.02]];
export const defaults={width:9,length:20,spring:18,gap:3,corner:3,round:2,texture:.4,fit:.35,seat:-.04};
export const presets={'Quiet meander':defaults,'Long passage':{...defaults,width:10,length:24,spring:20,gap:3.6,corner:4,round:3,texture:.6},'Pocket trace':{...defaults,width:8,length:16,spring:16,gap:2.4,corner:3,round:2.5,texture:0}};
export const names=['palm-frame','slotted-lid','captive-puck'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-9||p[k]>b+1e-9).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=96)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const D=p.width,A=p.length,P=p.spring,B=p.corner,C=p.gap+p.fit,T=p.round,r=D/2+p.fit,slot=(D-3.5)/2,X=2*(A+P/2+r+6),Y=2*(P+r+6),gripX=-Y/2-10;
function rect(x,y,z,pos){return move(box(x,y,z),pos);}
function rounded(h){const cs=[];for(const x of [-X/2+4,X/2-4])for(const y of [-Y/2+4,Y/2-4])cs.push(move(cyl(4,h,32),[x,y,0]));return K(M.hull(cs));}
// Exact circular U-bends join three straight runs. Channel and lid share the same centerline.
function path(radius,h){const pieces=[];for(const y of [-P,0,P])pieces.push(rect(2*A,2*radius,h,[-A,y-radius,0]));
for(const [x,y]of [[-A,-P],[A,P]])pieces.push(move(cyl(radius,h,96),[x,y,0]));
for(const [sign,cy]of [[1,-P/2],[-1,P/2]]){const ring=sub(cyl(P/2+radius,h,128),move(cyl(P/2-radius,h+2,128),[0,0,-1]));const half=rect(P+2*radius,2*(P+radius),h+2,[sign>0?0:-P-2*radius,-P-radius,-1]);pieces.push(move(K(ring.intersect(half)),[sign*A,cy,0]));}return K(M.union(pieces));}
let tray=sub(rounded(B+C),move(path(r,C+1),[0,0,B]));tray=add(tray,rect(12,15,B,[-6,-Y/2-11,0]));tray=add(tray,move(cyl(9,B),[0,gripX,0]));
const pins=[];for(const x of [-X/2+5,X/2-5])for(const y of [-Y/2+5,Y/2-5])pins.push([x,y]);
for(const [x,y]of pins)tray=sub(tray,rect(2.4+p.seat,2.4+p.seat,2.3,[x-(2.4+p.seat)/2,y-(2.4+p.seat)/2,B+C-2.2]));
// Printable lid is inverted: its top face sits on the bed and pegs point up.
let lid=sub(rounded(T),move(K(path(slot,T+2).scale([1,-1,1])),[0,0,-1]));
for(const [x,y]of pins)lid=add(lid,rect(2.4,2.4,2.05,[x-1.2,y-1.2,T-.05]));
let puck=cyl(D/2,p.gap,128);
if(p.texture>0)for(const x of [-5,0,5])tray=sub(tray,move(cyl(.8,14,24),[x,gripX-7,B-p.texture]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,B-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves palm tab safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,gripX,0]);tray=add(tray,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));tray=add(tray,move(custom,[0,gripX,B-.15]));}

const solids=[tray,lid,puck],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error(`${names[i]}: ${count} components; each part must be one connected closed solid. Use a broad flat-bottom grip.`);const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
let cursor=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]})),pos=[cursor-b.min[0],-b.min[1],-b.min[2]];cursor+=b.max[0]-b.min[0]+6;return pos;});
const model={parameters:{...p},parts,layout,D,A,P,B,C,T,r,slot,X,Y,gripX,pins};const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function pathPoint(m,u){const {A,P}=m,straight=2*A,arc=Math.PI*P/2,total=3*straight+2*arc;let d=Math.max(0,Math.min(1,u))*total;
if(d<=straight)return[-A+d,-P];d-=straight;
if(d<=arc){const a=-Math.PI/2+d/(P/2);return[A+P/2*Math.cos(a),-P/2+P/2*Math.sin(a)];}d-=arc;
if(d<=straight)return[A-d,0];d-=straight;
if(d<=arc){const a=-Math.PI/2-d/(P/2);return[-A+P/2*Math.cos(a),P/2+P/2*Math.sin(a)];}d-=arc;return[-A+d,P];}
export function placements(m,angle=0){const u=(1-Math.cos(angle))/2,xy=pathPoint(m,u);return [{pos:[0,0,0],angle:0},{pos:[0,0,m.B+m.C+m.T],angle:0,flip:true},{pos:[...xy,m.B+.015],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
