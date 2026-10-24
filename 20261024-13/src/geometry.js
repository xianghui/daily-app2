import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Finger width',14,22,1],['length','Segment length',12,18,1],['spring','Hinge thickness',1,1.6,.1],['gap','Free hinge span',3,4,.2],['corner','Segment height',5.2,6,.2],['texture','Palm dimple depth',0,.6,.1]];
export const defaults={width:18,length:15,spring:1.2,gap:3.6,corner:5.4,texture:.3};
export const presets={'Soft Start':{width:14,length:12,spring:1,gap:4,corner:5.2,texture:0},'Curl Current':defaults,'Broad Arc':{width:22,length:18,spring:1.6,gap:3,corner:6,texture:.6}};
export const names=['tendon-finger'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export const printNotes="Print one continuous TPU 95A finger flat-side down, relaxed and straight. Three thin bottom webs join rigid segments; a cord routed above their neutral plane turns a gentle pull into a serial curling motion. Thread one 1 mm braided polyester cord, 250 mm long, through the three diamond tunnels from the tip, then through the raised palm guide. Tie a double stopper knot outside the tip tunnel (finished knot wider than 2.9 mm); do not glue the cord into a tunnel. Pull the free palm end gently while holding the palm disc; release to allow elastic return. No bearings, magnets or fasteners. Hardware-free alternative: omit the cord and curl the segments directly with your fingers. Do not wrap cord around fingers; small parts and entanglement risk, not for children. Start with Soft Start as a full-size calibration specimen. Check cord slides freely in the 2 mm diamond tunnels and test one hinge gently before routing the cord. Use a 0.4 mm nozzle and 0.2 mm layers as starting points. Tunnel roofs are 45 degrees and web thickness is 1–1.6 mm (5–8 layers); all segments contact the bed. Inspect the slicer and clear stringing, never force a blocked tunnel. Flex only about 15 degrees per hinge initially; no hard travel stop is provided. Computational checks limit estimated outer-fiber strain to 7% at that angle and verify rigid-block separation; TPU grade and print direction determine actual fatigue life. Imports are robustly unioned into the isolated palm well, away from all hinges and cord paths. Preview shows the actual relaxed export geometry, not an unverified deformation simulation. No physical print, bending-force, return-force, cord-wear or fatigue tests performed. Stop for tears, whitening or permanent set. STL stores geometry only, not preview colours. All files stay local.";
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=128)=>K(M.cylinder(h,r,r,n));
try{const H=2.4,wellDepth=.8,C=20+3*(p.length+p.gap);
const box=(x,y,z,at)=>move(K(M.cube([x,y,z])),at);
const roundedBlock=(start,end,h)=>{const radius=2;let s=add(box(end-start-2*radius,p.width,h,[start+radius,-p.width/2,0]),box(end-start,p.width-2*radius,h,[start,-p.width/2+radius,0]));for(const x of [start+radius,end-radius])for(const y of [-p.width/2+radius,p.width/2-radius])s=add(s,move(cyl(radius,h,24),[x,y,0]));return s;};
// Diamond-section longitudinal tunnels: 45-degree roof, 2 mm maximum span.
const cordZ=p.corner/2+.4;
const tunnel=(start,end)=>{let s=K(M.cylinder(end-start,1,1,4));s=K(s.rotate([0,90,0]));return move(s,[start,0,cordZ]);};
let wheel=add(cyl(10.5,H),roundedBlock(8,20,H));
let guide=roundedBlock(14,20,p.corner);guide=sub(guide,tunnel(13,21));wheel=sub(add(wheel,guide),tunnel(13,21));
const stations=[];
for(let i=0;i<3;i++){
 const root=20+i*(p.length+p.gap),start=root+p.gap,end=start+p.length;stations.push({root,start,end});
 const web=box(p.gap+1,p.width*.65,p.spring,[root-.5,-p.width*.65/2,0]);
 let segment=roundedBlock(start,end,p.corner);segment=sub(segment,tunnel(start-1,end+1));
 wheel=add(add(wheel,web),segment);
}
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



const parts=[wheel].map((s,i)=>{const components=s.decompose();const count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error('Integration must form one connected closed solid. Use a broad flat-bottom grip.');const clean=K(s.asOriginal()),mesh=clean.getMesh();return {name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0]],H,C,cordZ,wellFloor:H-wellDepth,stations,importSafeRadius:6.5,minimumWallThickness:Math.min(1.6,p.spring,p.corner/2-1.4)};
parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m){return [{pos:[0,0,0],angle:0}];}
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

export function mechanismCheck(m){const p=m.parameters,theta=Math.PI/12,z=p.spring/2;
// Conservative inner-corner approach at +/-15 degrees, pivot at the web midplane.
const cornerApproach=2*(p.corner-z)*Math.sin(theta/2);
const q={hingeCount:3,hingeThicknessMm:p.spring,freeHingeSpanMm:p.gap,hingeWidthMm:p.width*.65,cordDiameterMm:1,tunnelDiagonalMm:2,tunnelInscribedDiameterMm:Math.SQRT2,cordRadialClearanceMm:(Math.SQRT2-1)/2,tunnelRoofMm:p.corner/2-1.4,tunnelFloorMm:m.cordZ-1,cordMomentArmMm:m.cordZ-z,cordLeadAbovePalmMm:m.cordZ-.5-m.H,recommendedStageAngleDegrees:15,recommendedTotalAngleDegrees:45,estimatedOuterFiberStrain:p.spring*theta/(2*p.gap),conservativeCornerGapMm:p.gap-cornerApproach,estimatedPullMm:3*(m.cordZ-z)*theta,importToHingeMarginMm:20-6.5,hardwareRequired:'Optional 1 mm cord, 250 mm; direct finger curling works without hardware',material:'TPU 95A',physicalPrintTested:false};
if(q.cordLeadAbovePalmMm<.099||q.tunnelRoofMm<.99||q.tunnelFloorMm<p.spring+.19||q.conservativeCornerGapMm<1.5||q.estimatedOuterFiberStrain>.071||q.cordMomentArmMm<1.99)throw Error('Unsafe tendon routing or hinge geometry. Reset parameters.');return q;}
