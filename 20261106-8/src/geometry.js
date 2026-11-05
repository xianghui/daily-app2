import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Card width',100,180,1],['length','Card height',85,140,1],['tail','Handle length',25,45,1],['overlap','Tail reach',10,18,1],['taper','Flank angle',8,16,1,'°'],['breadth','Panel breadth',24,34,1],['clearance','Shoulder gap',.1,.3,.05],['fit','Socket diametric allowance',.1,.5,.05],['sheet','Sheet thickness',1.8,3.2,.2],['spacing','Part spacing',3,5,.5],['tabWidth','Breakaway tab width',.8,1.2,.1],['tabHeight','Breakaway tab thickness',.4,.6,.2]];
export const defaults={width:120,length:95,tail:35,overlap:14,taper:12,breadth:28,clearance:.2,fit:.3,sheet:2.4,spacing:3.5,tabWidth:1,tabHeight:.6,shape:'round'};
export const presets={'Pocket dovetail':{...defaults,tail:25,overlap:10,breadth:24,taper:8,shape:'angular'},'Lift-out study':{...defaults},'Broad flare':{...defaults,tail:45,overlap:18,breadth:34,taper:16,sheet:3.2,width:150,length:115,shape:'scallop'}};
export const names=['connected-card','signature-tail','socket-panel'];
export const transformDefaults={size:6,height:.5,rotation:0,x:0,y:0};
export function validate(p){return [...fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`),...(!['round','angular','scallop'].includes(p.shape)?['Unknown outline.']:[])];}
export function kitData(p){if(validate(p).length)throw Error('Kit parameters outside supported ranges.');const neck=p.breadth*.25,head=neck+2*p.overlap*Math.tan(p.taper*Math.PI/180);return{artX:-p.tail*.55,artY:0,partCount:2,W:2*p.tail+p.overlap,H:p.breadth,outer:[2*p.tail+p.overlap,p.breadth,p.sheet],neck,head,axialPlay:p.fit/(2*Math.sin(p.taper*Math.PI/180)),slot:head+p.fit*(1/Math.cos(p.taper*Math.PI/180)+Math.tan(p.taper*Math.PI/180)),cheek:(p.breadth-head-p.fit*(1/Math.cos(p.taper*Math.PI/180)+Math.tan(p.taper*Math.PI/180)))/2,engagement:p.overlap-p.clearance};}
export function pose(p,degrees=0){return{angle:degrees*Math.PI/180};}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const{Manifold:M,Mesh,CrossSection:CS}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=48)=>K(M.cylinder(h,r,r,n));
try{const S=p.sheet,F=2.4,q=kitData(p),markX=q.artX,actualMarkY=q.artY;
const box=(size,pos)=>move(K(M.cube(size)),pos),cross=pts=>K(new CS([pts],'EvenOdd'));
const O=p.overlap,T=p.tail,B=p.breadth;
const slab=(left,right)=>{let shape;
if(p.shape==='round'){const pts=[],r=3;for(const [cx,cy,start]of[[right-r,-B/2+r,-90],[right-r,B/2-r,0],[left+r,B/2-r,90],[left+r,-B/2+r,180]])for(let i=0;i<=10;i++){const a=(start+i*9)*Math.PI/180;pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)]);}shape=cross(pts);}
else if(p.shape==='angular')shape=cross([[left+3,-B/2],[right-3,-B/2],[right,-B/2+3],[right,B/2-3],[right-3,B/2],[left+3,B/2],[left,B/2-3],[left,-B/2+3]]);
else shape=cross([[left,-B/2],[right,-B/2],[right,B/2],[left,B/2]]);
let s=K(shape.extrude(S));if(p.shape==='scallop')for(const x of[left+5,right-5])for(const y of[-B/2,B/2])s=sub(s,move(cyl(.8,S+2,24),[x,y,-1]));return s;};
// An original planar dovetail: lower into a true offset through-socket, never force axially.
const tailOutline=cross([[-.2,-q.neck/2],[0,-q.neck/2],[O,-q.head/2],[O,q.head/2],[0,q.neck/2],[-.2,q.neck/2]]);
let beamA=add(slab(-T,0),K(tailOutline.extrude(S)));
const socket=K(tailOutline.offset(p.fit/2,'Miter',2));
let beamB=sub(slab(p.clearance,O+T),move(K(socket.extrude(S+2)),[0,0,-1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.4,.6],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(source.style!=='engraved'||depth>.6)throw Error('This protected tail panel accepts engraved art, 0.4–0.6 mm.');if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[(n-1-y)*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported engraving becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),(t.height+.02)/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
const engraved=true;custom=K(custom.scale([1,1,-1]));custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,source.kind==='image'?S+.4:S+.02]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.hypot(x,y)>5.8)throw Error('Artwork leaves the safe tail-panel engraving zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[markX,actualMarkY,0]);beamA=engraved?sub(beamA,custom):add(beamA,custom);
}else{// Default recessed maker mark on apron.
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));beamA=sub(beamA,move(K(custom.scale([1,1,.3])),[markX,actualMarkY,S-.53]));}


const originals=[beamA,beamB],specs=originals.map(solid=>{const bb=solid.boundingBox(),origin=[-bb.min[0],-bb.min[1],0];return{solid:move(solid,origin),w:bb.max[0]-bb.min[0],h:bb.max[1]-bb.min[1],origin};});
const xmin=-p.width/2+F,xmax=p.width/2-F,ymin=-p.length/2+F,ymax=p.length/2-F;
const centers=[],bays=[],tabs=[];
const needed=specs.reduce((n,q)=>n+q.h+2*p.spacing,0)+F;
if(needed>ymax-ymin||specs.some(q=>q.w+2*p.spacing>xmax-xmin))throw Error('Card too small. Enlarge card or reduce beam breadth/spacing.');
let carrier=sub(box([p.width,p.length,S],[-p.width/2,-p.length/2,0]),box([p.width-2*F,p.length-2*F,S+5],[xmin,ymin,-1]));
const extra=(ymax-ymin-needed)/2;let top=ymax;
specs.forEach((sp,i)=>{const bottom=top-sp.h-2*p.spacing-extra;bays[i]={left:xmin,right:xmax,bottom,top};centers[i]=[-sp.w/2,(top+bottom-sp.h)/2,0];if(i<1)carrier=add(carrier,box([xmax-xmin+.2,F,S],[xmin-.1,bottom-F,0]));top=bottom-F;});
for(let i=0;i<specs.length;i++){const sp=specs[i],pos=centers[i],bay=bays[i];
const anchors=i===0?[T*.35,T*.65]:[O+T*.35,O+T*.65];
for(const xLocal of anchors)for(const side of[-1,1]){const x=pos[0]+xLocal,yEdge=pos[1]+(side<0?0:sp.h),start=side<0?bay.bottom-.15:yEdge-.7,end=side<0?yEdge+.7:bay.top+.15;
carrier=add(carrier,box([p.tabWidth,end-start,p.tabHeight],[x-p.tabWidth/2,start,0]));tabs.push({axis:'y',x,cutY:yEdge+side*1.6,part:i+1});}}
let card=carrier;specs.forEach((q,i)=>card=add(card,move(q.solid,centers[i])));
const parts=[card,...specs.map(q=>q.solid)].map((solid,i)=>{const pcs=solid.decompose(),count=pcs.length;pcs.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error(names[i]+': expected one closed solid; got '+count);const mesh=K(K(K(solid.asOriginal()).setTolerance(.001)).simplify(.001)).getMesh();return{name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0],...centers],centers,tabs,S,markX,markY:actualMarkY,printOrigins:specs.map(q=>q.origin),kit:q,engravingDepth:source?(source.kind==='image'?source.depth:t.height):.53};parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const solid of new Set(all.reverse()))solid.delete();}}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection==='all'?(model.parameters?i!==0:false):selection==='loose'?i===0:selection!==part.name)return;const off=selection==='loose'||selection==='all'&&!model.parameters?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection).map(tri=>tri.map(v=>v.map(Math.fround))),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}

// Independent final-mesh preflight runs in the worker for every edit, not only tests.
function verifySolid(part){const {vertices:v,indices:ix,stride}=part,edges=new Map(),ids=new Map();let volume=0;
const id=p=>{const key=p.map(x=>Math.round(x/1e-5)).join(',');if(!ids.has(key))ids.set(key,ids.size);return ids.get(key);};
for(let j=0;j<ix.length;j+=3){const vs=ix.slice(j,j+3).map(i=>v.slice(i*stride,i*stride+3));if(!vs.flat().every(Number.isFinite))throw Error('Nonfinite final geometry. Reset the import or reduce detail.');const[a,b,c]=vs,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
if(Math.hypot(...n)<=1e-8)throw Error('Degenerate '+part.name+' face '+j+' '+JSON.stringify(vs));volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
const ids3=vs.map(id);if(new Set(ids3).size!==3)throw Error(part.name+' has detail below numerical resolution. Reduce detail or reset transforms.');for(let k=0;k<3;k++){const a=ids3[k],b=ids3[(k+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(':'),e=edges.get(key)||[0,0];e[0]++;e[1]+=a<b?1:-1;edges.set(key,e);}}
if(!ix.length||volume<=0||[...edges.values()].some(([count,dir])=>count!==2||dir!==0))throw Error('Final '+part.name+' failed closed-manifold / winding validation. Reduce detail or reset transforms; no automatic repair is performed.');}








export function placements(m,degrees=0,exploded=false){const o=m.printOrigins;return[{pos:[0,0,0]},{pos:[-o[0][0],-o[0][1],exploded?m.S+8:0]},{pos:[-o[1][0],-o[1][1],0]}];}
export function mechanismCheck(m){const p=m.parameters,q=m.kit,backing=p.sheet-m.engravingDepth;if(backing<1.2-1e-6)throw Error('Insufficient engraving backing.');if(q.cheek<3.5)throw Error('Dovetail cheeks must be at least 3.5 mm. Reduce flare or enlarge breadth.');return{partCount:2,cardComponents:1,tabCount:8,sourceSheetMm:1.6,sourceSocketMm:[4.5,1.7],flankAngleDegrees:p.taper,neckMm:q.neck,headMm:q.head,flankNormalGapMm:p.fit/2,shoulderGapMm:p.clearance,cheekWidthMm:q.cheek,engravingBackingMm:backing,axialFreePlayMm:q.axialPlay,verticalRetention:false,physicalPrintTested:false};}
export const printNotes=`1. Print connected card OR two clean panels bed-flat Z=0. PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended. STL has no colour. Physical printing, fit and strength UNTESTED.
2. Snip eight runners, four per panel. Trim scars on outer handle edges. Discard connected carrier/crossbar. Never cut the dovetail flanks.
3. Place socket panel bed-face down on a table. Hold signature tail panel above it with the same printed face upwards. Align the widening tail over the through-socket and LOWER VERTICALLY until both bed faces rest on the table. Do not force the tail through the narrow mouth horizontally.
4. The trapezoid flanks resist in-plane separation after clearance play (allowance / twice sine of flank angle); this is a lift-out demonstration, not a structural joint. Lift the tail vertically to release. There is NO vertical capture or press-fit force claim. No hardware/glue needed. Not a clamp, toy for young children or load-rated connector.
5. Socket is the true 2D outward offset of the tail by HALF the selected diametric allowance. Flank angle is 8–16 degrees; neck is 25% of panel breadth. Shoulder gap is independently .10–.30 mm. Proposed .30 mm allowance PLA / .40 mm PETG are starting points only. Print the two clean panels as the calibration set; change fit and reprint rather than forcing.
6. Reference: White Cat Kit Card / Mike Kasberg https://github.com/mkasberg/white-cat-kit-card, CC BY 4.0. Re-parsed actual mesh: 1.60 mm sheet, 4.50×1.70 mm sockets, .21–.22 mm low runners. Adapted thin-sheet removable carrier, clearance relationship and through-socket assembly, NOT source cat geometry. Dovetail, thicker sheet and runners are original redesigns. Source has 57 edge anomalies; no raw source triangles copied, repaired or bundled.
7. PNG/JPEG/simple SVG, text and six searchable icons become a bounded 20×20 threshold/grayscale closed height cutter, Boolean-engraved .4–.6 mm into protected tail handle. Bright holes remain unengraved with backing. Fit/crop, threshold, background, depth, footprint, rotation and offsets alter exported geometry. Sampled 2D-to-relief, NOT 3D photo reconstruction. Raised art unavailable to keep the bed-flat sheet envelope.
8. ASCII/binary STL <=2 MB/1,500 triangles, .2–250 assumed mm per axis. Confirm millimeters, select up-axis, scale/rotate/place exact verified source into engraving. One outward closed convex broad-flat-bottom solid without overhang supported. Concave/hollow/open/disconnected meshes rejected, never replaced with a convex hull. XY proportional scale and independent Z depth protect the joint and >=1.2 mm backing.
9. All files remain local; portable JSON/named designs carry bounded payloads. Missing payloads require reattachment. Invalid/building edits disable exports. Preview/export share current solid. Export always bed-flat, never assembled overlap.
10. Computational mesh, clearance, snip-connectivity and vertical insertion checks are not physical print, strength or friction tests. No physical tests performed.`;
export function assemblyMap(m){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 210"><rect width="660" height="210" fill="white"/><g font-family="sans-serif" fill="#1f2233"><text x="15" y="25">Dovetail &amp; Lift · two-panel lift-out joint</text><text x="15" y="60">1. Snip eight runners; trim outer handle scars.</text><text x="15" y="90">2. Keep both printed top faces up. Align above socket.</text><text x="15" y="120">3. Lower tail vertically; never force through mouth axially.</text><text x="15" y="155">Flank angle ${m.parameters.taper} deg; normal gap ${(m.parameters.fit/2).toFixed(2)} mm.</text><text x="15" y="185">Lift out to release. No vertical lock or load rating. Physical fit untested.</text></g></svg>`;}
