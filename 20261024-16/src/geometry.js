import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Palm board width',24,32,1],['length','Weaving board length',36,52,1],['spring','Ribbon thickness',.8,1.2,.1],['gap','Slot throat width',3,4,.2],['corner','Ribbon width',6,9,.5],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:28,length:44,spring:1,gap:3.4,corner:8,texture:.3};
export const presets={'Easy Thread':{width:24,length:36,spring:.8,gap:4,corner:6,texture:0},'Lace Pause':defaults,'Long Ritual':{width:32,length:52,spring:1.2,gap:3,corner:9,texture:.6}};
export const names=['weaving-board','flexible-ribbon'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Print two separate parts flat-side down. Use dry TPU 95A for the ribbon; the palm board may be TPU 95A for a soft feel or PLA/PETG for a firmer guide. No supports, hardware or print-in-place release. With the board lying flat, feed the tapered ribbon tip up through slot one, down through slot two, and up through slot three. Leave generous loose loops; gently draw the ribbon forward, then reverse and unweave. The wide end is a handling stop, NOT a positive captive lock: flexible TPU can deform, so do not force it into a slot. Ribbon thickness is 0.8–1.2 mm (4–6 layers at 0.2 mm); ribbon width is 6–9 mm. Slot throat is 3–4 mm, slot length is ribbon width + 2 mm; each mouth has a 0.6 mm chamfer to reduce sharp contact. Do not pull the ribbon taut across a bridge or crease sharply at a slot. Start with loose bends of at least 6 mm inside radius (nominal outer-fiber bending strain ≤10% by t/(2R+t)); this geometric screen is not a fatigue, force or material guarantee. There are no bearings, universal fit settings or claimed clicks. Choose Easy Thread as a full-size calibration specimen; tune throat, width, thickness and loop slack to your printer and material. The ribbon is intentionally removable and no locked assembly is implied. Inspect both slot mouths and ribbon layer bonding before threading; smooth burrs without thinning bridges. Import geometry is robustly unioned into the board palm only, outside the slot zone; the ribbon is unchanged by imports. Preview/export show the actual two-part flat print layout, not an assembled weaving or deformation simulation. Individual STL downloads and a ZIP with both parts are available. Use 0.4 mm nozzle, 0.2 mm layers, slow TPU speeds, and three perimeters on the board. Do not use PLA for the bending ribbon. All sizes are millimeters. No physical print, friction, bend, force, return or fatigue tests performed. Stop for tears, whitening, permanent creases or layer separation. Not for children. STL stores geometry only, not preview colours. Files remain local.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=2.4,wellDepth=.8,C=16+p.length;
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
const capsule=(x,y,z,at)=>{const r=Math.min(x,y)/2;let s=box(Math.max(.001,x-2*r),Math.max(.001,y-2*r),z,[at[0]+r,at[1]+r,at[2]]);const pts=[];for(const dx of [r,x-r])for(const dy of [r,y-r])pts.push(move(cyl(r,z,32),[at[0]+dx,at[1]+dy,at[2]]));return K(M.hull(pts));};
let wheel=cyl(10.5,H);
wheel=add(wheel,capsule(C-7,p.width,H,[7,-p.width/2,0]));
const stations=Array.from({length:3},(_,i)=>22+i*(p.length-12)/2);
const slotLength=p.corner+2,bevel=.6;
for(const x of stations){const core=capsule(p.gap,slotLength,H+2,[x-p.gap/2,-slotLength/2,-1]);
// Convex hull of coaxial capsules provides a genuine 45 degree mouth chamfer.
const smallTop=capsule(p.gap,slotLength,.01,[x-p.gap/2,-slotLength/2,H-bevel]);
const bigTop=capsule(p.gap+2*bevel,slotLength+2*bevel,.01,[x-p.gap/2-bevel,-slotLength/2-bevel,H]);
const smallBottom=capsule(p.gap,slotLength,.01,[x-p.gap/2,-slotLength/2,bevel-.01]);
const bigBottom=capsule(p.gap+2*bevel,slotLength+2*bevel,.01,[x-p.gap/2-bevel,-slotLength/2-bevel,-.01]);
wheel=sub(wheel,core);wheel=sub(wheel,K(M.hull([smallTop,bigTop])));wheel=sub(wheel,K(M.hull([smallBottom,bigBottom])));}
const ribbonLength=p.length*2+40;
let ribbon=capsule(ribbonLength,p.corner,p.spring,[0,-p.corner/2,0]);
// Broad handling stop, intentionally not a flexible-material locking claim.
ribbon=add(ribbon,capsule(12,p.corner+8,p.spring,[0,-(p.corner+8)/2,0]));
// A narrowed lead-in tip is convex and smooth enough for first threading.
const tip=K(M.hull([move(cyl(p.corner/2,p.spring,32),[ribbonLength-p.corner/2,0,0]),move(cyl(1.2,p.spring,24),[ribbonLength+4,0,0])]));
ribbon=add(ribbon,tip);
wheel=sub(wheel,move(cyl(7.5,wellDepth+1,96),[0,0,H-wellDepth]));
if(p.texture>0)for(let i=0;i<20;i++){const a=i*2*Math.PI/20;wheel=sub(wheel,move(cyl(.55,p.texture+1,12),[9*Math.cos(a),9*Math.sin(a),H-p.texture]));}
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth-.15]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves center well safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[0,0,0]);wheel=add(wheel,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[0,0,H-wellDepth-.15]));}



const parts=[wheel,ribbon].map((s,i)=>{const components=s.decompose();const count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');const clean=K(s.asOriginal()),mesh=clean.getMesh();return {name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0],[0,p.width/2+(p.corner+8)/2+10,0]],H,C,wellFloor:H-wellDepth,stations,ribbonLength,slotLength,bevel,importSafeRadius:6.5,minimumWallThickness:Math.min(1.6,p.spring)};
parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m){return m.layout.map(pos=>({pos,angle:0}));}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}

// Independent final-mesh preflight runs in the worker for every edit, not only tests.
function verifySolid(part){const {vertices:v,indices:ix,stride}=part,edges=new Map(),ids=new Map();let volume=0;
const id=p=>{const key=p.map(x=>Math.round(x/1e-5)).join(',');if(!ids.has(key))ids.set(key,ids.size);return ids.get(key);};
for(let j=0;j<ix.length;j+=3){const vs=ix.slice(j,j+3).map(i=>v.slice(i*stride,i*stride+3));if(!vs.flat().every(Number.isFinite))throw Error('Nonfinite final geometry. Reset the import or reduce detail.');const[a,b,c]=vs,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
if(Math.hypot(...n)<=1e-8)throw Error('Final geometry has a degenerate face. Reduce detail or reset placement.');volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
const ids3=vs.map(id);if(new Set(ids3).size!==3)throw Error('Detail exceeds numerical resolution. Reset transforms.');for(let k=0;k<3;k++){const a=ids3[k],b=ids3[(k+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(':'),e=edges.get(key)||[0,0];e[0]++;e[1]+=a<b?1:-1;edges.set(key,e);}}
if(!ix.length||volume<=0||[...edges.values()].some(([count,dir])=>count!==2||dir!==0))throw Error('Final solid failed closed-manifold / winding validation. Reduce relief or center the import; no automatic repair is performed.');}

export function mechanismCheck(m){const p=m.parameters;
const q={mechanism:'Removable three-slot ribbon weave',slotCount:3,slotThroatMm:p.gap,ribbonThicknessMm:p.spring,threadingClearanceMm:p.gap-p.spring,slotLengthMm:m.slotLength,ribbonWidthMm:p.corner,lateralClearanceMm:2,mouthChamferMm:.6,boardThicknessMm:2.4,remainingThroatDepthMm:1.2,slotBridgeMm:(p.length-12)/2-p.gap-1.2,sideRimMm:(p.width-m.slotLength-1.2)/2,tipEndMarginMm:m.C-m.stations[2]-p.gap/2-.6,stopSpanMm:p.corner+8,stopExcessOverSlotMm:6,exportPartGapMm:10,looseBendRadiusMm:6,screenedBendingStrain:p.spring/(12+p.spring),ribbonLengthMm:m.ribbonLength+5.2,screenedThreadingPathMm:p.length-12+4*Math.PI*6,importToSlotMarginMm:22-p.gap/2-.6-6.5,material:'TPU 95A ribbon',physicalPrintTested:false,positiveCaptiveLock:false,assembledSimulation:false};
if(q.threadingClearanceMm<1.8-1e-8||q.slotBridgeMm<6||q.sideRimMm<5||q.tipEndMarginMm<3||q.exportPartGapMm<5||q.screenedBendingStrain>.1||q.importToSlotMarginMm<12||q.ribbonLengthMm<q.screenedThreadingPathMm+10)throw Error('Unsafe threading clearance, bridge, bend screen, ribbon length or import isolation.');return q;}
