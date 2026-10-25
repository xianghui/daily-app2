import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Palm diameter',22,28,1],['length','Fan outer radius',26,32,1],['spring','Crease lane width',2,3,.1],['gap','Inner relief radius',8,12,1],['corner','Living hinge thickness',.6,1,.1],['texture','Palm dimple depth',0,.6,.1],['fit','Facet thickness',2,3,.1]];
export const defaults={width:25,length:29,spring:2.5,gap:10,corner:.8,texture:.3,fit:2.5,route:'radial-accordion',shape:'round'};
export const presets={'Soft Pleats':defaults,'Pocket Fan':{...defaults,length:26,spring:3,corner:.6,shape:'hex',gap:12,texture:0,fit:2},'Broad Fan':{...defaults,width:28,length:32,spring:2,corner:1,shape:'oval',gap:8,fit:3}};
export const names=['pleat-pause'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="One-piece radial accordion fan. Print exactly bed-flat in flexible TPU 95A as a starting material. Six thick annular sectors are joined by five broad, thin radial living hinges. Hold the palm and progressively bring the free edge toward the fixed edge, manually alternating mountain and valley folds; reopen and repeat. This is a guided pleating ritual, not a predicted snap-through or self-return mechanism. Begin with less than 10 degrees per hinge. Only increase gently if the material returns without whitening or permanent set; never force fully stacked folds. Force and fatigue life are not simulated. The inner semicircular opening removes the singular crease vertex and makes all hinge edges accessible. Hinge thickness 0.6–1.0 mm, crease lane width 2–3 mm, facets 2–3 mm thick. Use Pocket Fan as a full-size material/fold calibration coupon first. 0.4 mm nozzle, 0.2 mm layers, fill the hinges with continuous lines and inspect layer bonding. No supports, hardware, assembly or release needed. PLA/PETG are not suitable for repeated folding here. Trim any brim without nicking hinge edges. There is no mechanical stop; keep fingers clear of closing pleats. Image relief and verified STL grips fuse only into the rigid isolated palm, never into the fan. Preview and export show the exact undeformed bed-flat solid, not simulated folds. STL stores no preview colours. No physical print testing performed.";
export function validate(p){return [...((p.route&&p.route!=='radial-accordion')?['Unknown accordion mechanism.']:[]),...(!['round','hex','oval'].includes(p.shape||'round')?['Unknown palm shape.']:[]),...fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`)];}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n));
try{const H=5,wellDepth=.8,R=p.length,C=p.width/2+4,cy=R-3;
const box=(sz,at)=>move(K(M.cube(sz)),at);
let palm=cyl(p.width/2,H,p.shape==='hex'?6:64);if(p.shape==='oval')palm=K(palm.scale([1,1.12,1]));
let wheel=palm;
const annulus=h=>sub(cyl(R,h,128),move(cyl(p.gap,h+2,128),[0,0,-1]));
const half=h=>K(annulus(h).intersect(box([R+2,2*R+4,h+2],[0,-R-2,-1])));
const sheet=half(p.corner);
let facets=half(p.fit);
// Remove five constant-width radial lanes from the raised facet layer.
// The underlying sheet remains continuous and is the actual living hinge.
for(const deg of [-60,-30,0,30,60]){
 const strip=K(box([R+4,p.spring,p.fit+2],[0,-p.spring/2,-1]).rotate([0,0,deg]));
 facets=sub(facets,strip);
}
let fan=add(sheet,facets);
fan=move(fan,[C,cy,0]);
wheel=add(wheel,box([C+5-(p.width/2-2),6,p.fit],[p.width/2-2,-3,0]));
wheel=add(wheel,fan);
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
const model={parameters:{...p},parts,layout,H,R,C,cy,wellFloor:H-wellDepth,importSafeRadius:6.5,minimumWallThickness:p.corner};
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
const q={mechanism:'Open radial accordion: six facets, five distributed living hinges',facetCount:6,hingeCount:5,hingeThicknessMm:p.corner,creaseWidthMm:p.spring,facetThicknessMm:p.fit,innerReliefMm:p.gap,minimumInnerFacetWidthMm:2*p.gap*Math.sin(Math.PI/12)-p.spring,neckOverlapMm:2,palmIsolationMm:m.C-6.5,physicalPrintTested:false,elasticSimulation:false,hardwareRequired:false,mechanicalTravelStop:false};
if(q.minimumInnerFacetWidthMm<1.1||q.hingeThicknessMm<.6||q.facetThicknessMm-q.hingeThicknessMm<1||q.palmIsolationMm<8)throw Error('Invalid facet root, hinge thickness or protected palm.');return q;}
