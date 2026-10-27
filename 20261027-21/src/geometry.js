import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Card width',170,210,1],['length','Card height',160,200,1],['span','Support height',50,65,1],['deckWidth','Stand width',70,90,1],['rise','Footprint depth',60,80,1],['peg','Seat depth',8,14,.5],['pitch','Phone incline',55,75,1],['gap','Total half-lap allowance',.1,.4,.05],['thickness','Panel thickness',1.6,2.4,.2],['spacing','Part spacing',10,14,.5],['tabWidth','Breakaway tab width',.8,1.4,.1],['tabHeight','Breakaway tab thickness',.4,.8,.2],['texture','Medallion dimple depth',0,.4,.1]];
export const defaults={width:180,length:180,span:56,deckWidth:80,rise:68,peg:10,pitch:65,gap:.2,thickness:1.6,spacing:10,tabWidth:1,tabHeight:.6,texture:.2,shape:'round'};
export const presets={'Compact Perch':{...defaults,width:170,length:160,span:50,deckWidth:70,rise:60,peg:8,pitch:68,texture:0,shape:'hex'},'Desk Anchor':defaults,'Tall Lookout':{...defaults,width:210,length:200,span:65,deckWidth:90,rise:80,peg:14,pitch:60,thickness:2.4,spacing:14,tabWidth:1.4,tabHeight:.8,texture:.4,shape:'oval'}};
export const names=['connected-card','front-brace','left-cheek','right-cheek','rear-brace'];
export const transformDefaults={size:6,height:2,rotation:0,x:0,y:0};
export const printNotes="Angle & Anchor: four-part phone-stand kit card. 1. Print card OR individual parts bed-flat Z=0 in PLA/PETG at 100% scale, 0.4 mm nozzle, 0.20 mm layers, three walls; no supports intended. 2. Clip four accessible side tabs per part, sixteen total, trim nubs and discard carrier. Keep half-lap edges untouched. 3. Put both cross-braces upright on their long bottom edges, with slots opening UP. Decorated brace goes at the front, decoration faces forward. Space their centers to the two bottom-open cheek slots. 4. Hold the left cheek upright, front hook forward. Lower both bottom-open cheek slots simultaneously over the left top-open brace slots. Both bottoms meet the table; repeat for the right cheek. 5. All four crossings are removable clearance half-laps, not snap locks or captive joints. Deburr; start with 0.20 mm TOTAL slot allowance, half per side. Print one cheek and one brace first for a material/printer fit test; adjust allowance, never force. 6. Gently place a light phone portrait or landscape on both 10 mm-high seats, behind the 3 mm-wide front hooks, leaning against the matching inclined contact edges. Seat depth is 8\u201314 mm horizontal; check your case and contact edge. Use on a level surface, no heavy tablets; no rated load or stability certification. No hardware. Imports union into or engrave the front brace medallion away from half-laps and contact edges. STL contains no colour. Reference: Mike Kasberg, White Cat Kit Card, https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card and https://github.com/mkasberg/white-cat-kit-card ; CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ . Adapted measured sheet/perimeter/sacrificial-tab construction; original inclined-cheek/cross-lap reconstruction, no raw source STL redistribution. Computational checks only: no physical print, fit, strength, phone load or stability test performed. All dimensions mm. Cutter use and small parts need adult handling.";
export function validate(p){return [...(!['round','hex','oval'].includes(p.shape)?['Unknown side-window silhouette.']:[]),...fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a-1e-8||p[k]>b+1e-8).map(([k,l,a,b])=>`${l} must be ${a}–${b} ${k==='pitch'?'degrees':'mm'}.`)];}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=64)=>K(M.cylinder(h,r,r,n));
try{const H=p.thickness,wellDepth=.2,F=2.4,markX=0,markY=9,W=p.deckWidth,V=p.span,D=p.rise,A=p.pitch*Math.PI/180,seat=p.peg,topU=seat+3+V/Math.tan(A),frontU=seat+15,rearU=D-8,sideX=W/2-8,lap=7,barHeight=18;
const box=(size,pos)=>move(K(M.cube(size)),pos),union=ss=>ss.reduce(add),polygon=pts=>K(new api.CrossSection([pts]).extrude(H));
if(topU+10>D)throw Error('Footprint too short behind the inclined support. Increase depth, steepen incline or lower support height.');
if(rearU-frontU<14)throw Error('Braces too close. Increase depth or reduce seat depth.');
// Side cheeks carry a 3 mm front lip, a 10 mm seat and a precisely inclined contact edge.
let support=polygon([[0,0],[D,0],[D,6],[topU+4,V+10],[topU,V+10],[seat+3,10],[3,10],[3,18],[0,18]]);
// Window silhouettes are subtractive, never a convex-hull shortcut. They stay away from joints and contact rail.
const windowU=(frontU+rearU)/2,windowY=12;
let window;
if(p.shape==='round')window=move(cyl(3,H+2,48),[windowU,windowY,-1]);
if(p.shape==='hex')window=move(cyl(3.4,H+2,6),[windowU,windowY,-1]);
if(p.shape==='oval')window=K(move(cyl(3,H+2,48),[0,0,-1]).scale([1.2,1,1]));
if(p.shape==='oval')window=move(window,[windowU,windowY,0]);
support=sub(support,window);
for(const u of[frontU,rearU])support=sub(support,box([H+p.gap,lap+p.gap/2+1,H+2],[u-(H+p.gap)/2,-1,-1]));
let supportB=support;
let deck=box([W,barHeight,H],[-W/2,0,0]);
for(const side of[-1,1])deck=sub(deck,box([H+p.gap,barHeight-lap+p.gap/2+1,H+2],[side*sideX-(H+p.gap)/2,lap-p.gap/2,-1]));
let shuttle=deck;
deck=sub(deck,move(cyl(6.5,wellDepth+1),[markX,markY,H-wellDepth]));
if(p.texture>0)for(let i=0;i<16;i++){const theta=i*2*Math.PI/16;deck=sub(deck,move(cyl(.35,p.texture+1,12),[markX+7*Math.cos(theta),markY+7*Math.sin(theta),H-p.texture]));}
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,3],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!['threshold','relief'].includes(mode)||!Array.isArray(pixels)||!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[(n-1-y)*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
const engraved=source.kind==='image'&&source.style==='engraved';if(engraved){if(source.depth>.6)throw Error('Engraving depth must be 0.4–0.6 mm to preserve the floor.');custom=K(custom.scale([1,1,-1]));}custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,H-wellDepth+(engraved?.4:source.kind==='image'?-.4:-.15)]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves medallion safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[markX,markY,0]);deck=engraved?sub(deck,custom):add(deck,custom);
}else{// Built-in raised thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));deck=add(deck,move(custom,[markX,markY,H-wellDepth-.15]));}



// Card rows: two upright profiles flattened side by side, then two cross-braces.
const cheekY=p.length/2-F-5-(V+10),frontY=cheekY-p.spacing-barHeight,rearY=frontY-p.spacing-barHeight;
const centers=[[0,frontY,0],[-p.spacing/2-D,cheekY,0],[p.spacing/2,cheekY,0],[0,rearY,0]];
if(2*D+p.spacing+2*F+8>p.width||W+2*F+8>p.width||rearY<-p.length/2+F+4)throw Error('Card too small for two cheeks, two braces and cutter access. Increase card dimensions or reduce height, depth or spacing.');
let frame=sub(box([p.width,p.length,H],[-p.width/2,-p.length/2,0]),box([p.width-2*F,p.length-2*F,H+2],[-p.width/2+F,-p.length/2+F,-1]));
const runnerYs=[cheekY-p.spacing/2,frontY-p.spacing/2];
for(const y of runnerYs)frame=add(frame,box([p.width,F,H],[-p.width/2,y-F/2,0]));
frame=add(frame,box([F,p.length/2-F-cheekY+.2,H],[-F/2,cheekY-.1,0]));
const tabs=[];
for(const[i,center]of centers.entries())for(const side of[-1,1])for(const yy of(i===1||i===2?[3,6]:[3,14])){
 const start=center[0]+(i===1||i===2?(side<0?.4:D-.4):side*(W/2-.4));
 const end=i===1?(side<0?-p.width/2+F-.15:-F/2+.15):i===2?(side<0?F/2-.15:p.width/2-F+.15):(side<0?-p.width/2+F-.15:p.width/2-F+.15);
 const left=Math.min(start,end),len=Math.abs(end-start),y=center[1]+yy;
 frame=add(frame,box([len,p.tabWidth,p.tabHeight],[left,y-p.tabWidth/2,0]));tabs.push({left,length:len,y,part:i+1,side});
}
let card=frame;[deck,support,supportB,shuttle].forEach((s,i)=>card=add(card,move(s,centers[i])));
const parts=[card,deck,support,supportB,shuttle].map((s,i)=>{const components=s.decompose(),count=components.length;components.forEach(c=>c.delete());if(s.status()!=='NoError'||s.isEmpty()||count!==1)throw Error(names[i]+': Expected one connected closed solid. Center a broad flat-bottom grip.');const clean=K(K(s.asOriginal()).simplify(.0001)),mesh=clean.getMesh();return{name:names[i],vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts),stride:mesh.numProp};});
const model={parameters:{...p},parts,layout:[[0,0,0],...centers],centers,tabs,H,sideX,frontU,rearU,topU,markX,markY,wellFloor:H-wellDepth};parts.forEach(verifySolid);model.mechanism=mechanismCheck(model);const bb=bounds(triangles(model));model.dimensions=bb.max.map((v,k)=>v-bb.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,fraction=0,lift=0){const raise=Math.max(0,Math.min(1,lift))*m.parameters.span;return [{pos:[0,0,0]},{pos:[0,m.frontU+m.H/2,0],rotX:Math.PI/2},{pos:[-m.sideX-m.H/2,0,raise],rotX:Math.PI/2,angle:Math.PI/2},{pos:[m.sideX-m.H/2,0,raise],rotX:Math.PI/2,angle:Math.PI/2},{pos:[0,m.rearU+m.H/2,0],rotX:Math.PI/2}];}
export function mechanismCheck(m){const p=m.parameters,q={mechanism:'Inclined phone stand with four crossed half-lap joints',partCount:4,cardComponents:1,frameWallMm:2.4,panelThicknessMm:p.thickness,totalSlotAllowanceMm:p.gap,slotWidthMm:p.thickness+p.gap,verticalLapGapMm:p.gap,sideSeparationMm:2*m.sideX,seatDepthMm:p.peg,frontHookWidthMm:3,frontHookRiseMm:8,supportInclineDegrees:p.pitch,rearMarginMm:p.rise-m.topU,braceSpacingMm:m.rearU-m.frontU,minimumJointRoofMm:10-7-p.gap/2,tabCount:16,tabWidthMm:p.tabWidth,tabThicknessMm:p.tabHeight,importIsolationMm:m.sideX-(p.thickness+p.gap)/2-6.5,captive:false,physicalPrintTested:false};if(q.rearMarginMm<10-1e-6||q.minimumJointRoofMm<2.7)throw Error('Unsupported contact margin or lap roof.');return q;}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection==='all'?i!==0:selection!==part.name)return;const off=[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection).map(tri=>tri.map(v=>v.map(Math.fround))),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}

// Independent final-mesh preflight runs in the worker for every edit, not only tests.
function verifySolid(part){const {vertices:v,indices:ix,stride}=part,edges=new Map(),ids=new Map();let volume=0;
const id=p=>{const key=p.map(x=>Math.round(x/1e-5)).join(',');if(!ids.has(key))ids.set(key,ids.size);return ids.get(key);};
for(let j=0;j<ix.length;j+=3){const vs=ix.slice(j,j+3).map(i=>v.slice(i*stride,i*stride+3));if(!vs.flat().every(Number.isFinite))throw Error('Nonfinite final geometry. Reset the import or reduce detail.');const[a,b,c]=vs,u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];
if(Math.hypot(...n)<=1e-8)throw Error('Final geometry has a degenerate face. Reduce detail or reset placement.');volume+=(a[0]*(b[1]*c[2]-b[2]*c[1])-a[1]*(b[0]*c[2]-b[2]*c[0])+a[2]*(b[0]*c[1]-b[1]*c[0]))/6;
const ids3=vs.map(id);if(new Set(ids3).size!==3)throw Error(part.name+' has detail below numerical resolution. Reduce detail or reset transforms.');for(let k=0;k<3;k++){const a=ids3[k],b=ids3[(k+1)%3],key=[Math.min(a,b),Math.max(a,b)].join(':'),e=edges.get(key)||[0,0];e[0]++;e[1]+=a<b?1:-1;edges.set(key,e);}}
if(!ix.length||volume<=0||[...edges.values()].some(([count,dir])=>count!==2||dir!==0))throw Error('Final '+part.name+' failed closed-manifold / winding validation. Reduce relief or center the import; no automatic repair is performed.');}
