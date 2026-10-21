import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Outer frame width',64,80,2],['length','Center pad width',16,20,1],['spring','Torsion bar width',.8,1.2,.1],['gap','Torsion bar thickness',.8,1.2,.1],['corner','Middle cradle width',38,46,2],['round','Comfort corner radius',1,6,.5],['texture','Rim groove depth',0,.5,.1],['fit','Suggested tilt',2,4,.5]];
export const defaults={width:72,length:18,spring:1,gap:1,corner:42,round:3,texture:.3,fit:3};
export const presets={'Balanced':defaults,'Feather':{...defaults,width:80,length:16,spring:.8,gap:.8,corner:46,fit:4},'Grounded':{...defaults,width:64,length:20,spring:1.2,gap:1.2,corner:38,fit:2}};
export const names=['cardan-cradle'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b}${k==='fit'?' degrees':' mm'}.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=96)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const R=p.width/2,hub=p.length/2,inner=p.corner/2,outerFree=R-4-inner,innerFree=inner-4-hub,free=Math.min(outerFree,innerFree),h=4;
const centeredBox=(x,y,z)=>move(box(x,y,z),[-x/2,-y/2,0]);
const roundedBox=(w,r,z)=>{let a=add(centeredBox(w-2*r,w,z),centeredBox(w,w-2*r,z));for(const x of [-1,1])for(const y of [-1,1])a=add(a,move(cyl(r,z,32),[x*(w/2-r),y*(w/2-r),0]));return a;};
let outer=sub(roundedBox(p.width,p.round,h),move(roundedBox(p.width-8,Math.max(1,p.round-4),h+2),[0,0,-1]));
let middle=sub(roundedBox(p.corner,2,h),move(roundedBox(p.corner-8,1,h+2),[0,0,-1]));
let wheel=add(add(outer,middle),roundedBox(p.length,p.round/2,h));
// Outer X-axis torsion pair: both anchors overlap their rigid rings by 1 mm.
for(const sign of [-1,1]){
 let beam=move(box(outerFree+2,p.spring,p.gap),[inner-1,-p.spring/2,0]);
 if(sign<0)beam=K(beam.rotate([0,0,180]));wheel=add(wheel,beam);
 // Inner Y-axis torsion pair. The uncut 4 mm cradle separates orthogonal roots.
 beam=move(box(p.spring,innerFree+2,p.gap),[-p.spring/2,hub-1,0]);
 if(sign<0)beam=K(beam.rotate([0,0,180]));wheel=add(wheel,beam);
}
// Shallow edge scallops are confined to the outer rim, far from X-axis roots.
if(p.texture>0)for(const sign of [-1,1])for(let x=-R+7;x<=R-7;x+=4){wheel=sub(wheel,move(cyl(.8,h+1,16),[x,sign*(R+.8-p.texture),-.5]));}
// Witness mark records the advisory tilt without changing the load-bearing bars.
wheel=sub(wheel,move(box(2+p.fit,1,.35),[-1-p.fit/2,R-2.5,3.7]));
const gripX=0;
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,h-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center pad safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[gripX,0,0]);wheel=add(wheel,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[gripX,0,h-.15]));}
const solid=wheel,components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();const parts=[{name:names[0],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp}],layout=[[R,R,0]];
const strain=Math.max(p.spring,p.gap)*(p.fit*Math.PI/180)/free;if(strain>.02)throw Error('Torsion screening strain exceeds 2%. Reduce tilt or bar thickness.');
const model={parameters:{...p},parts,layout,R,hub,inner,free,outerFree,innerFree,strain};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m){return [{pos:[0,0,0],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
