import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Palm diameter',22,28,1],['length','Outer ring radius',26,32,1],['spring','Bridge width',1.2,1.8,.1],['gap','Annular slot clearance',1.5,2.5,.1],['corner','Flexible ring thickness',1.2,1.8,.1],['texture','Palm dimple depth',0,.6,.1],['fit','Ring band width',2,3,.1]];
export const defaults={width:25,length:29,spring:1.4,gap:2,corner:1.4,texture:.3,fit:2.5,route:'kirigami-lift',shape:'round'};
export const presets={'Gentle Lift':defaults,'Pocket Unfurl':{...defaults,length:26,spring:1.2,corner:1.2,shape:'hex',gap:1.5,texture:0,fit:2},'Broad Bloom':{...defaults,width:28,length:32,spring:1.8,corner:1.8,shape:'oval',gap:2.5,fit:3}};
export const names=['unfurl-lift'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="One-piece concentric kirigami lift fidget. Print the exact flat exported orientation, bed down, flexible TPU 95A as a starting point. PLA/PETG are unsuitable for these out-of-plane bending bridges. Hold the rigid palm and outer rim, gently lift the small center knob perpendicular to the flat sheet, then lower and release. Four annular slots open through alternating orthogonal bridge pairs, so the nested rings tilt and lift instead of sliding or turning on a bearing. Begin below 0.5 mm lift, inspect the bridges and layer adhesion, and only progress gently toward 3 mm total lift if the material returns without whitening or permanent set. There is no mechanical travel stop: do not pull, stretch, invert or twist the center hard. Force, safe elastic travel and fatigue life are not predicted or universal. Ring and bridge thickness 1.2–1.8 mm; bridge width 1.2–1.8 mm; annular clearance 1.5–2.5 mm. Use Pocket Unfurl as a full-size material and slot calibration coupon first. Start with 0.4 mm nozzle, 0.2 mm layers and enough perimeters to fill the bridges; avoid slicer gap-fill voids and elephant-foot slot closure. No supports, hardware, assembly or print-in-place release required. Remove any bed brim from the slots without nicking bridges. Keep fingers out of closing slots. Image relief / verified STL grips are unioned only into the isolated thick palm tab, never the flexible rings. Viewer shows the exact undeformed printable mesh; it does not simulate flex, spring force or fatigue. STL contains no preview colour. No physical print testing performed.";
export function validate(p){return [...((p.route&&p.route!=='kirigami-lift')?['Unknown kirigami mechanism.']:[]),...(!['round','hex','oval'].includes(p.shape||'round')?['Unknown palm shape.']:[]),...fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`)];}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n));
try{const H=p.corner+4,wellDepth=.8,R=p.length,band=p.fit,step=band+p.gap,C=R+p.width/2+5,coreR=R-4*step;
const box=(sz,at)=>move(K(M.cube(sz)),at);
let palm=cyl(p.width/2,H,p.shape==='hex'?6:64);if(p.shape==='oval')palm=K(palm.scale([1,1.12,1]));
let wheel=palm;
// The palm neck meets the fixed outer ring, never crosses an annular slot.
wheel=add(wheel,box([7+band/2,8,p.corner],[p.width/2-2,-4,0]));
const bands=[];
for(let i=0;i<4;i++){
 const ro=R-i*step,ri=ro-band;
 const ring=sub(cyl(ro,p.corner,128),move(cyl(ri,p.corner+2,128),[0,0,-1]));
 wheel=add(wheel,move(ring,[C,0,0]));bands.push({outer:ro,inner:ri});
 // Two bridge pairs alternate X and Y: concentric ring kirigami, not a torsion spiral.
 const nextOuter=ro-step,mid=(ri+nextOuter)/2;
 for(const sign of [-1,1]){
  const dims=i%2===0?[p.gap+.8,p.spring,p.corner]:[p.spring,p.gap+.8,p.corner];
  const xy=i%2===0?[C+sign*mid,0]:[C,sign*mid];
  wheel=add(wheel,box(dims,[xy[0]-dims[0]/2,xy[1]-dims[1]/2,0]));
 }
}
wheel=add(wheel,move(cyl(coreR,p.corner,128),[C,0,0]));
wheel=add(wheel,move(cyl(2.5,3,48),[C,0,p.corner-.15]));
wheel=sub(wheel,move(cyl(7.5,wellDepth+1),[0,0,H-wellDepth]));
if(p.texture>0)for(let i=0;i<20;i++){const a=i*2*Math.PI/20;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(a),9*Math.sin(a),H-p.texture]));}
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
const engraved=source.kind==='image'&&source.style==='engraved';if(engraved){if(source.depth>.6)throw Error('Engraving depth must be 0.4–0.6 mm to preserve the floor.');custom=K(custom.scale([1,1,-1]));}custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth+(engraved?.15:-.15)]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=engraved?sub(wheel,custom):add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-wellDepth-.15]));}

const solids=[wheel];
const parts=solids.map((s,i)=>{const components=s.decompose();const count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');const clean=K(K(s.asOriginal()).simplify(.0001)),mesh=clean.getMesh();return{name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const layout=[[0,0,0]];
const model={parameters:{...p},parts,layout,H,R,C,band,step,coreR,bands,wellFloor:H-wellDepth,importSafeRadius:6.5,minimumWallThickness:p.corner};
parts.forEach(verifySolid);parts.forEach((part,i)=>verifySolid({...part,vertices:part.vertices.map((v,j)=>j%part.stride<3?Math.fround(v+model.layout[i][j%part.stride]):v)}));model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m){return m.parts.map(()=>({pos:[0,0,0],angle:0}));}
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
if(!ix.length||volume<=0||[...edges.values()].some(([count,dir])=>count!==2||dir!==0))throw Error('Final solid failed closed-manifold / winding validation. Reduce relief or center the import; no automatic repair is performed.');}

export function mechanismCheck(m){const p=m.parameters;
const q={mechanism:'Concentric annular kirigami with alternating orthogonal bridge pairs, out-of-plane lift',ringCount:4,bridgeCount:8,bridgeWidthMm:p.spring,ringThicknessMm:p.corner,bandWidthMm:p.fit,slotClearanceMm:p.gap,centerPadRadiusMm:m.coreR,minimumBridgeOverlapMm:.4-(p.spring*p.spring/(8*m.coreR)),palmIsolationMm:m.C-m.R-6.5,physicalPrintTested:false,elasticSimulation:false,hardwareRequired:false,mechanicalTravelStop:false};
if(q.centerPadRadiusMm<3.9||q.minimumBridgeOverlapMm<.29||q.palmIsolationMm<9||q.slotClearanceMm<1.5)throw Error('Invalid ring core, bridge overlap, slot clearance or protected palm.');return q;}
