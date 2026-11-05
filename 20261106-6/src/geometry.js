import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Card width',110,180,1],['length','Card height',100,150,1],['tail','Full beam length',35,55,1],['overlap','Scarf overlap',18,28,1],['breadth','Beam breadth',16,22,1],['clearance','Scarf Z clearance',.1,.3,.05],['fit','Sleeve sliding gap',.2,.6,.05],['sheet','Beam thickness',3.2,4,.2],['spacing','Part spacing',3,5,.5],['tabWidth','Breakaway tab width',.8,1.2,.1],['tabHeight','Breakaway tab thickness',.4,.6,.2]];
export const defaults={width:130,length:110,tail:42,overlap:24,breadth:18,clearance:.2,fit:.4,sheet:3.6,spacing:3.5,tabWidth:1,tabHeight:.6,shape:'round'};
export const presets={'Short scarf':{...defaults,tail:35,overlap:18,shape:'angular'},'Sliding study':{...defaults},'Broad scarf':{...defaults,tail:55,overlap:28,breadth:22,sheet:4,width:150,length:125,shape:'scallop'}};
export const names=['connected-card','signature-lower-beam','upper-beam','sliding-sleeve'];
export const transformDefaults={size:6,height:.5,rotation:0,x:0,y:0};
export function validate(p){return [...fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`),...(!['round','angular','scallop'].includes(p.shape)?['Unknown outline.']:[])];}
export function kitData(p){if(validate(p).length)throw Error('Kit parameters outside supported ranges.');return{artX:-p.overlap/2-p.tail*.55,artY:0,partCount:3,tip:1.2,wall:2.4,W:2*p.tail+p.overlap,H:p.breadth,outer:[2*p.tail+p.overlap,p.breadth,p.sheet+p.clearance],slope:Math.atan((p.sheet-2.4)/p.overlap)*180/Math.PI,sleeveInner:[p.breadth+p.fit,p.sheet+p.clearance+p.fit],lap:p.clearance};}
export function pose(p,degrees=0){return{angle:degrees*Math.PI/180};}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const{Manifold:M,Mesh,CrossSection:CS}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=48)=>K(M.cylinder(h,r,r,n));
try{const S=p.sheet,F=2.4,q=kitData(p),markX=q.artX,actualMarkY=q.artY;
const box=(size,pos)=>move(K(M.cube(size)),pos),cross=pts=>K(new CS([pts],'EvenOdd'));
const O=p.overlap,T=p.tail,B=p.breadth,x0=-O/2-T,x1=O/2;
// XZ polygon: bed-flat scarf with supported 1.2 mm tip and complementary incline.
let section=cross([[x0,0],[x1,0],[x1,q.tip],[-O/2,S-q.tip],[-O/2,S],[x0,S]]);
let beamA=move(K(K(section.extrude(B)).rotate([90,0,0])),[0,B/2,0]);
let outline;
if(p.shape==='round'){const pts=[];for(const[cx,cy,a]of[[x1,-B/2,-90],[x1,B/2,0],[x0+3,B/2-3,90],[x0+3,-B/2+3,180]]){if(cx===x1){pts.push([cx,cy]);continue;}for(let j=0;j<=10;j++){const a2=(a+j*9)*Math.PI/180;pts.push([cx+3*Math.cos(a2),cy+3*Math.sin(a2)]);}}outline=cross(pts);}
else if(p.shape==='angular')outline=cross([[x0+3,-B/2],[x1,-B/2],[x1,B/2],[x0+3,B/2],[x0,B/2-3],[x0,-B/2+3]]);
else outline=cross([[x0,-B/2],[x1,-B/2],[x1,B/2],[x0,B/2]]);
beamA=K(beamA.intersect(K(outline.extrude(S+1))));
if(p.shape==='scallop')for(const x of[x0+5,x0+10])for(const y of[-B/2,B/2])beamA=sub(beamA,move(cyl(.8,S+2,24),[x,y,-1]));
// The upper scarf prints bed down too, and is flipped about Y only after release.
let beamB=beamA;
const iw=q.sleeveInner[0],ih=q.sleeveInner[1],w=q.wall;
const sleeve=sub(box([iw+2*w,ih+2*w,S],[0,0,0]),box([iw,ih,S+2],[w,w,-1]));
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.4,.6],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(source.style!=='engraved'||depth>.6)throw Error('This protected tail accepts engraved art, 0.4–0.6 mm.');if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[(n-1-y)*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported engraving becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),(t.height+.02)/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
const engraved=true;custom=K(custom.scale([1,1,-1]));custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,source.kind==='image'?S+.4:S+.02]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.hypot(x,y)>5.8)throw Error('Artwork leaves the safe lower-tail engraving zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[markX,actualMarkY,0]);beamA=engraved?sub(beamA,custom):add(beamA,custom);
}else{// Default recessed maker mark on apron.
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));beamA=sub(beamA,move(K(custom.scale([1,1,.3])),[markX,actualMarkY,S-.53]));}


const originals=[beamA,beamB,sleeve],specs=originals.map(solid=>{const bb=solid.boundingBox(),origin=[-bb.min[0],-bb.min[1],0];return{solid:move(solid,origin),w:bb.max[0]-bb.min[0],h:bb.max[1]-bb.min[1],origin};});
const xmin=-p.width/2+F,xmax=p.width/2-F,ymin=-p.length/2+F,ymax=p.length/2-F;
const centers=[],bays=[],tabs=[];
const needed=specs.reduce((n,q)=>n+q.h+2*p.spacing,0)+2*F;
if(needed>ymax-ymin||specs.some(q=>q.w+2*p.spacing>xmax-xmin))throw Error('Card too small. Enlarge card or reduce beam breadth/spacing.');
let carrier=sub(box([p.width,p.length,S],[-p.width/2,-p.length/2,0]),box([p.width-2*F,p.length-2*F,S+5],[xmin,ymin,-1]));
const extra=(ymax-ymin-needed)/3;let top=ymax;
specs.forEach((sp,i)=>{const bottom=top-sp.h-2*p.spacing-extra;bays[i]={left:xmin,right:xmax,bottom,top};centers[i]=[-sp.w/2,(top+bottom-sp.h)/2,0];if(i<2)carrier=add(carrier,box([xmax-xmin+.2,F,S],[xmin-.1,bottom-F,0]));top=bottom-F;});
for(let i=0;i<specs.length;i++){const sp=specs[i],pos=centers[i],bay=bays[i];
const anchors=i<2?[T*.35,T*.65]:[sp.w*.3,sp.w*.7];
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








export function placements(m,degrees=0,exploded=false){const q=m.kit,S=m.S,o=m.printOrigins,d=exploded?12:0;return[{pos:[0,0,0]},
{pos:[-o[0][0]-d,-o[0][1],0]},
{pos:[o[1][0]+d,-o[1][1],S+m.parameters.clearance+(exploded?12:0)],rotY:Math.PI},
{pos:[-S/2,-q.sleeveInner[0]/2-q.wall,-m.parameters.fit/2-q.wall+(exploded?25:0)],basis:[[0,1,0],[0,0,1],[1,0,0]]}];}
export function mechanismCheck(m){const p=m.parameters,q=m.kit,backing=p.sheet-m.engravingDepth;if(backing<1.2)throw Error('Insufficient engraving backing.');return{partCount:3,cardComponents:1,tabCount:12,sourceSheetMm:1.6,sourceSocketMm:[4.5,1.7],scarfOverlapMm:p.overlap,scarfSlopeDegrees:q.slope,scarfGapMm:p.clearance,sleeveGapMm:p.fit,sleeveInnerMm:q.sleeveInner,tipThicknessMm:q.tip,backingMm:backing,retention:'Loose sliding demonstration; sleeve limits Z separation only while centered. NO axial lock, no load rating, no glue/hardware required. Hold both beam tails during use.',physicalPrintTested:false};}
export const printNotes=`1. Print connected card OR three clean parts flat Z=0. PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended. Every sloping scarf has a continuous bed footprint and a 1.2 mm tip. STL has no colour. Physical printing, fit and strength UNTESTED.
2. Snip twelve runners: four per piece, attached away from the sloping joint and sleeve aperture. Trim scars. Parts: signature lower beam, unmarked upper beam, rectangular sliding sleeve. Discard carrier.
3. Keep signature beam bed-face down. Flip upper beam 180 degrees about its short Y axis so its long tail points opposite, its printed bed face faces UP, and its inclined surface faces DOWN. Bring tips together across the selected overlap. The two slopes have a deliberate vertical gap; top faces have the same small offset.
4. Before mating the scarves, rotate sleeve upright so its aperture spans beam breadth and combined assembled height. Slide it over either full-size tail from the free end. Lower the second beam onto the first, then slide sleeve to the center of the overlap. The aperture clears the full assembled envelope by the selected sliding gap, half on each side. No forcing, snaps, hardware or adhesive.
5. Hold both tails while gently sliding sleeve on and off the overlapping region to explore how it limits vertical separation. This is NOT a lock or load-bearing joint: either beam can pull out axially, and the sleeve can slide off an end. Do not lift an object with it. Disassemble by parking sleeve on a tail, lifting/flipping upper beam away, and sliding sleeve off.
6. The scarf gap .10–.30 mm is vertical, not slope-normal; slope angle is atan((sheet−2.4)/overlap). Sleeve aperture: breadth+slidingGap by sheet+scarfGap+slidingGap; proposed sliding gap .20–.60 mm. Print one clean sleeve and both beam tips first as a calibration coupon. PLA starting point .40 mm gap, PETG .50 mm; these are suggestions, not universal/tested fits. Sand scars only, never force a tight collar.
7. Source White Cat Kit Card / Mike Kasberg https://github.com/mkasberg/white-cat-kit-card, CC BY 4.0. Actual binary mesh parsed and cross-sections inspected: 1.60 mm sheet, 4.50×1.70 mm sockets, .21–.22 mm low runners. This original reconstruction adapts its bed-flat carrier, removable sheet parts and low runners. New scarves use 3.2–4 mm beams and .4–.6 mm runners; scarf geometry and loose upright sleeve are redesigned interfaces, NOT source sockets. No raw source mesh redistributed; source anomalies are not repaired.
8. PNG/JPEG/simple SVG, text and six searchable icons become a bounded 20×20 threshold/grayscale closed height cutter, Boolean-engraved .4–.6 mm into the full-thickness lower tail. Bright holes stay unengraved. Fit/crop, background, threshold, depth, 4–7 mm footprint, rotation and offsets alter real geometry. This is sampled 2D-to-relief, not automatic full 3D reconstruction. Raised art is disabled to keep the sleeve unobstructed.
9. ASCII/binary STL <=2 MB/1,500 triangles, .2–250 assumed mm per axis. Confirm millimeters, select up-axis before attaching. XY proportional scale, independent Z depth, rotation, center/place controls. Exact original triangles Boolean-cut a bounded lower-tail recess. Only one outward closed convex broad-flat-bottom solid without overhang is accepted. Concave, hollow, open, disconnected, degenerate and overhung meshes are explicitly rejected; no convex hull replacement, hidden repair, or arbitrary imported source redistribution.
10. All user-file processing stays local in browser. JSON and six named designs carry bounded payloads; missing payloads require reattachment. Current invalid/building edits block every mesh export; preview may show a labelled last-good solid. Export uses bed-flat parts, never assembled overlaps.
11. Computational edge/winding/volume, card-release, support footprint, scarf collision, full sleeve travel and insertion checks are not physical print/fit/strength tests. Small loose parts and sharp cutters require care. No physical testing claimed.`;
export function assemblyMap(m){const p=m.parameters;return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 210"><rect width="660" height="210" fill="white"/><g font-family="sans-serif" fill="#1f2233"><text x="15" y="25">Scarf &amp; Slide · complementary slopes + removable sleeve</text><text x="15" y="60">1. Snip 12 runners. Keep signature beam bed-face down.</text><text x="15" y="90">2. Thread sleeve from a tail. Flip upper beam around its short axis.</text><text x="15" y="120">3. Lower slopes across ${p.overlap} mm overlap; center sleeve.</text><text x="15" y="155">Scarf gap ${p.clearance} mm; sleeve aperture clearance ${p.fit} mm.</text><text x="15" y="185">No axial lock / load rating. Physical fit and strength untested.</text></g></svg>`;}
