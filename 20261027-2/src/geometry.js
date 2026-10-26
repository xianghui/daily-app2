import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Palm diameter',22,28,1],['length','Slider stroke',12,18,1],['span','Yoke half length',24,28,1],['gap','Running clearance',.3,.6,.1],['corner','Yoke thickness',2.6,3.2,.2],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:25,length:16,span:26,gap:.4,corner:3,texture:.3,shape:'round'};
export const presets={'Easy Exchange':{...defaults,width:22,length:12,span:28,gap:.6,corner:2.6,texture:0,shape:'hex'},'Quadrature Glide':defaults,'Wide Orbit':{...defaults,width:28,length:18,span:24,gap:.3,corner:3.2,texture:.6,shape:'oval'}};
export const names=['palm-frame','eccentric-crank','x-yoke','y-yoke'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Quadrature Glide: alternate two perpendicular thumb strokes through one eccentric pin, with X=e cos(theta) and Y=e sin(theta). At one yoke’s dead center use the other; never force a locked direction. Four separately printed PLA/PETG solids, no hardware, magnets or bearings. Print each with Z=0 down, 0.4 mm nozzle, 0.20 mm layers and three walls as starting settings. Drop the crank bore onto the base post, then place the X yoke over its eccentric pin on the lower guide ledges and the Y yoke on the upper ledges. The long pin passes both slots. Disassemble by lifting Y, X, then crank vertically. Open guides are deliberately NOT captive: keep level and do not invert. Stroke 12–18 mm, yoke half length 24–28 mm, thickness 2.6–3.2 mm. Clearance 0.3–0.6 mm is radial at bores/slots and per side at guides, not a universal printer tolerance. Easy Exchange is a full-size calibration set: deburr elephant foot, verify full travel with both thumbs and adjust fit before printing preferred settings. Crank thickness 3 mm; palm floor 4 mm; ledge vertical air gap 0.15 mm in unloaded explanatory preview. Real parts rest on ledges after settling. All four parts intended support-free, separately bed-flat. Palm image/SVG relief or verified flat-bottom convex STL grip is unioned in a protected well away from the mechanism. Image conversion is sampled 2D relief, not 3D photo reconstruction. STL has no unit or colour metadata. All dimensions mm. Computational checks are not physical print, friction or strength tests. No physical print tests performed. Loose parts: not for children.";
export function validate(p){return [...(!['round','hex','oval'].includes(p.shape)?['Unknown palm shape.']:[]),...fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`)];}
export function joints(m,fraction=0,offset=0){const theta=(fraction+1)*Math.PI+offset;return {theta,x:m.e*Math.cos(theta),y:m.e*Math.sin(theta)};}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=4,wellDepth=.8,e=p.length/2,r=2.5,C=64,T=p.corner,g=p.gap,A=p.span,W=e+5.5,R=e+3,lowZ=H+3.5,highZ=lowZ+T+.4;
const box=(sz,at)=>move(K(M.cube(sz)),at);
let wheel=cyl(p.width/2,H,p.shape==='hex'?6:64);if(p.shape==='oval')wheel=K(wheel.scale([1,1.12,1]));
// Wide open workbench with guide ledges: no bridges or support-dependent roofs.
const B=A+e+5;
wheel=add(wheel,box([C+B,2*B,H],[0,-B,0]));
wheel=add(wheel,move(cyl(r,3.3,64),[C,0,H-.1]));
for(const sign of [-1,1]){
 const y=sign*W;
 wheel=add(wheel,box([2*B,1.2,lowZ-.15-H],[C-B,sign>0?y-.8:y-.4,H-.05]));
 wheel=add(wheel,box([2*B,2,H+3.5+T-H],[C-B,sign>0?W+g:-W-g-2,H-.05]));
 // Upper Y guides are split around the lower X-yoke keepout.
 for(const side of [-1,1]){
  const y0=side>0?W+3:-B,dy=B-W-3;
  wheel=add(wheel,box([1.2,dy,highZ-.15-H],[C+(sign>0?W-.8:-W-.4),y0,H-.05]));
  wheel=add(wheel,box([2,dy,highZ+T-H],[C+(sign>0?W+g:-W-g-2),y0,H-.05]));
 }
}
wheel=sub(wheel,move(cyl(7.5,wellDepth+1),[0,0,H-wellDepth]));
if(p.texture>0)for(let i=0;i<20;i++){const theta=i*2*Math.PI/20;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(theta),9*Math.sin(theta),H-p.texture]));}
let disc=sub(cyl(R,3,96),move(cyl(r+g,5,64),[0,0,-1]));
disc=add(disc,move(cyl(2,highZ+T+.5-(H+.1)-2.9,64),[e,0,2.9]));
// The Y-oriented slot in the lower yoke constrains X; the upper is rotated 90 degrees.
const slot=()=>{const bar=box([2*(2+g),2*e,T+2],[-2-g,-e,-1]);return add(add(bar,move(cyl(2+g,T+2,64),[0,-e,-1])),move(cyl(2+g,T+2,64),[0,e,-1]));};
let lower=sub(box([2*A,2*W,T],[-A,-W,0]),slot());
// Raised end pads stay outside both slot and crossing-yoke sweep.
// Flat yoke ends remain clear of the crossing yoke throughout the full stroke.
let upper=K(lower.rotate([0,0,90]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
const engraved=source.kind==='image'&&source.style==='engraved';if(engraved){if(source.depth>.6)throw Error('Engraving depth must be 0.4–0.6 mm to preserve the floor.');custom=K(custom.scale([1,1,-1]));}custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth+(engraved?.4:source.kind==='image'?-.4:-.15)]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=engraved?sub(wheel,custom):add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-wellDepth-.15]));}

const solids=[wheel,disc,lower,upper];
const parts=solids.map((s,i)=>{const components=s.decompose(),count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error(names[i]+': Integration must form one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(s.asOriginal()).simplify(.0001)),mesh=clean.getMesh();return{name:names[i],material:'PLA/PETG',vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
let x=0;const layout=parts.map(part=>{const b=bounds(triangles({parts:[part],layout:[[0,0,0]]}));const pos=[x-b.min[0],-b.min[1],-b.min[2]];x+=b.max[0]-b.min[0]+7;return pos;});
const model={parameters:{...p},parts,layout,H,C,r,R,T,e,A,W,B,lowZ,highZ,wellFloor:H-wellDepth};parts.forEach(verifySolid);parts.forEach((part,i)=>verifySolid({...part,vertices:part.vertices.map((v,j)=>j%part.stride<3?Math.fround(v+layout[i][j%part.stride]):v)}));model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,fraction=-1,offset=0){const {theta,x,y}=joints(m,fraction,offset);return [{pos:[0,0,0]},{pos:[m.C,0,m.H+.1],angle:theta},{pos:[m.C+x,0,m.lowZ]},{pos:[m.C,y,m.highZ]}];}
export function mechanismCheck(m){const p=m.parameters,q={mechanism:'Orthogonal quadrature double Scotch yoke',partCount:4,radialBoreClearanceMm:p.gap,slotRadialClearanceMm:p.gap,guideSideClearanceMm:p.gap,strokeMm:2*m.e,yokeThicknessMm:p.corner,floorThicknessMm:m.H,importIsolationMm:m.C-m.B-6.5,minimumEngravedPalmFloorMm:2.6,captive:false,release:'Lift Y yoke, X yoke and crank vertically in that order',hardwareRequired:false,supportsRequired:false,physicalPrintTested:false,phaseOffsetDegrees:90,minimumEndWebMm:m.A-m.e-2-p.gap,upperLedgeLowerYokeGapMm:3,ledgeRadialDiscGapMm:m.W-.8-m.R,pinEngagementMm:p.corner,verticalYokeSeparationMm:.4};if(q.importIsolationMm<15||q.minimumEndWebMm<10||q.ledgeRadialDiscGapMm<1)throw Error('Unsafe guide, slot end wall or import isolation.');return q;}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection).map(tri=>tri.map(v=>v.map(Math.fround))),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}

// Independent final-mesh preflight runs in the worker for every edit, not only tests.
function verifySolid(part){const {vertices:v,indices:ix,stride}=part,edges=new Map(),ids=new Map();let volume=0;
const id=p=>{const key=p.map(x=>Math.round(x/1e-5)).join(',');if(!ids.has(key))ids.set(key,ids.size);return ids.get(key);};
for(let j=0;j<ix.length;j+=3){const vs=ix.slice(j,j+3).map(i=>v.slice(i*stride,i*stride+3));if(!vs.flat().every(Number.isFinite))throw Error('Nonfinite final geometry. Reset the import or reduce detail.');const[a,b,c]=vs,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
if(Math.hypot(...n)<=1e-8)throw Error('Final geometry has a degenerate face. Reduce detail or reset placement.');volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
const ids3=vs.map(id);if(new Set(ids3).size!==3)throw Error('Detail exceeds numerical resolution. Reset transforms.');for(let k=0;k<3;k++){const a=ids3[k],b=ids3[(k+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(':'),e=edges.get(key)||[0,0];e[0]++;e[1]+=a<b?1:-1;edges.set(key,e);}}
if(!ix.length||volume<=0||[...edges.values()].some(([count,dir])=>count!==2||dir!==0))throw Error('Final '+part.name+' failed closed-manifold / winding validation. Reduce relief or center the import; no automatic repair is performed.');}
