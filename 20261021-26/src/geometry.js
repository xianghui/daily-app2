import Module from 'manifold-3d';
let api;export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['width','Pitch diameter',24,28,2],['length','Rack half stroke',5,8,1],['spring','Tooth face height',4,6,.5],['gap','Running clearance',.25,.5,.05],['corner','Rack length',44,50,1],['texture','Palm groove depth',0,.5,.1],['fit','Lid hole radial allowance',-.08,-.01,.01]];
export const defaults={width:26,length:7,spring:5,gap:.35,corner:48,texture:.3,fit:-.03};
export const presets={'Pebble':defaults,'Long sweep':{...defaults,width:28,length:8,spring:6,corner:50},'Pocket':{...defaults,width:24,length:5,spring:4,corner:44}};
export const names=['palm-base','toothed-rack','thumb-wheel','keeper-lid'];
export const transformDefaults={size:6,height:3,rotation:0,x:0,y:0};
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function gearOutline(rp,g){const teeth=16,mod=rp/8,ra=rp+mod,rf=rp-1.25*mod,rb=rp*Math.cos(Math.PI/9),inv=a=>Math.tan(a)-a,half=Math.PI/(2*teeth)-g/(2*rp),ha=r=>half+inv(Math.PI/9)-(r<=rb?0:inv(Math.acos(rb/r))),pts=[],pt=(r,a)=>pts.push([r*Math.cos(a),r*Math.sin(a)]);for(let t=0;t<teeth;t++){const a=t*2*Math.PI/teeth,hr=ha(rf);pt(rf,a-hr);for(let j=0;j<=12;j++){const r=Math.max(rf,rb)+(ra-Math.max(rf,rb))*j/12;pt(r,a-ha(r));}for(let j=1;j<=5;j++)pt(ra,a-ha(ra)+2*ha(ra)*j/5);for(let j=11;j>=0;j--){const r=Math.max(rf,rb)+(ra-Math.max(rf,rb))*j/12;pt(r,a+ha(r));}pt(rf,a+hr);for(let j=1;j<=4;j++)pt(rf,a+hr+(2*Math.PI/teeth-2*hr)*j/4);}return pts.filter((p,i,a)=>!i||Math.hypot(p[0]-a[i-1][0],p[1]-a[i-1][1])>1e-7);}
export function generate(p,source=null,t=transformDefaults){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Engine not ready');const {Manifold:M,Mesh,CrossSection:C}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b)),move=(s,v)=>K(s.translate(v)),cyl=(r,h,n=96)=>K(M.cylinder(h,r,r,n)),box=(x,y,z)=>K(M.cube([x,y,z]));
try{const rp=p.width/2,mod=rp/8,g=p.gap,h=p.spring,L=p.corner,stroke=p.length,ra=rp+mod,rootY=rp+1.25*mod+g,backY=rootY+8,BX=L+2*stroke+8,BY=backY+ra+12,ymin=-ra-6,baseZ=3+g,lidZ=3+h+2*g;
const outline=[];for(const [cx,cy,start]of [[BX/2-4,ymin+BY-4,0],[-BX/2+4,ymin+BY-4,90],[-BX/2+4,ymin+4,180],[BX/2-4,ymin+4,270]])for(let j=0;j<=12;j++){const a=(start+j*90/12)*Math.PI/180;outline.push([cx+4*Math.cos(a),cy+4*Math.sin(a)]);}const footprint=K(new C([outline]));
let base=K(footprint.extrude(3));
base=add(base,move(cyl(3,h+2*g),[0,0,3]));
// Outer end walls define rack stroke; a rear guide resists separating tooth load.
for(const x of [-1,1])base=add(base,move(box(3,12,h+2*g),[x<0?-L/2-stroke-3:L/2+stroke,rootY-1,3]));
base=add(base,move(box(BX-6,3,h+2*g),[-BX/2+3,backY+g,3]));
const pegs=[[-BX/2+4,ymin+4],[BX/2-4,ymin+4],[-BX/2+4,backY+2],[BX/2-4,backY+2]];
for(const q of pegs)base=add(base,move(cyl(2,lidZ+2.5-3),[...q,3]));
if(p.texture>0)for(let j=-4;j<=4;j++)base=sub(base,move(cyl(1,4,16),[j*(BX-12)/9,ymin-1+p.texture,-.5]));
let wheel=sub(K(K(new C([gearOutline(rp,g)])).extrude(h)),move(cyl(3+g,h+6),[0,0,-.5]));
let hub=sub(cyl(7,4.2),move(cyl(3+g,3),[0,0,-.1]));
// hub includes a closed roof above the axle; raised grip remains clear of keeper opening.
wheel=add(wheel,move(hub,[0,0,h-.2]));
let rack=move(box(L,8,h),[-L/2,rootY,0]);const pitch=Math.PI*mod,half=Math.PI*mod/4-g/2,tan=Math.tan(Math.PI/9);
for(let i=-8;i<=8;i++){const x=(i+.5)*pitch,a=half+1.25*mod*tan,b=half-mod*tan;if(x-a< -L/2||x+a>L/2)continue;const section=K(new C([[[x-a,rootY+.05],[x-b,rp-mod+g],[x+b,rp-mod+g],[x+a,rootY+.05]]]));rack=add(rack,K(section.extrude(h)));}
rack=add(rack,move(cyl(3,4.2),[0,rootY+4,h-.2]));
let lid=K(footprint.extrude(2.5));
// A small witness window reveals the meshing teeth without removing keeper shoulders.
let witness=move(box(18,2.5,4),[-9,rp-.5,-.5]);for(const x of [-9,9])witness=add(witness,move(cyl(1.25,4),[x,rp+.75,-.5]));lid=sub(lid,witness);
lid=sub(lid,move(cyl(7+g,4),[0,0,-.5]));
// A true capsule opening lets the rack tab travel without exposing its retained shoulders.
let slot=move(box(2*stroke,2*(3+g),4),[-stroke,rootY+4-3-g,-.5]);for(const x of [-stroke,stroke])slot=add(slot,move(cyl(3+g,4),[x,rootY+4,-.5]));lid=sub(lid,slot);
for(const q of pegs)lid=sub(lid,move(cyl(2+p.fit,4),[...q,-.5]));
const gripX=0;
let custom;
if(source){for(const [k,lo,hi]of [['size',4,7],['height',.6,5],['rotation',-180,180],['x',-1.5,1.5],['y',-2,2]])if(!Number.isFinite(t[k])||t[k]<lo||t[k]>hi)throw Error(`Import ${k} must be ${lo}–${hi}${k==='rotation'?' degrees':' mm'}.`);
if(source.kind==='image'){const {pixels,n,mode,threshold,depth}=source;if(!Number.isInteger(n)||n<8||n>24||pixels.length!==n*n||!pixels.every(v=>Number.isFinite(v)&&v>=0&&v<=255)||!Number.isFinite(depth)||depth<.4||depth>3||!Number.isFinite(threshold)||threshold<1||threshold>254)throw Error('Invalid bounded image settings.');const hs=pixels.map(v=>mode==='threshold'?(v<threshold?depth:0):depth*(1-v/255));if(Math.max(...hs)<.01)throw Error('Empty silhouette / relief. Raise threshold, use darker art, or change fit.');const v=[],idx=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)v.push((x/(n-1)-.5)*t.size,(y/(n-1)-.5)*t.size,.4+hs[y*n+x]);const at=(x,y)=>y*n+x;for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const a=at(x,y),b=at(x+1,y),d=at(x,y+1),c=at(x+1,y+1);idx.push(a,b,c,a,c,d);}const boundary=[];for(let x=0;x<n;x++)boundary.push(at(x,0));for(let y=1;y<n;y++)boundary.push(at(n-1,y));for(let x=n-2;x>=0;x--)boundary.push(at(x,n-1));for(let y=n-2;y>0;y--)boundary.push(at(0,y));const bottom=[];for(const a of boundary){bottom.push(v.length/3);v.push(v[a*3],v[a*3+1],0);}const center=v.length/3;v.push(0,0,0);for(let j=0;j<boundary.length;j++){const k=(j+1)%boundary.length,a=boundary[j],b=boundary[k],u=bottom[j],w=bottom[k];idx.push(a,u,w,a,w,b,center,w,u);}custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(v),triVerts:new Uint32Array(idx)})));}
else if(source.kind==='stl'){if(!source.confirmed)throw Error('Confirm millimeter units before integrating STL.');if(!source.mesh||source.mesh.indices.length>4500)throw Error('Unsupported STL complexity.');const m=source.mesh,sz=m.dimensions;if(Math.min(sz[0],sz[1])*t.size/Math.max(sz[0],sz[1])<1.2)throw Error('Imported grip becomes thinner than 1.2 mm in XY. Increase footprint or use a less slender solid.');custom=K(new M(new Mesh({numProp:3,vertProperties:new Float32Array(m.vertices),triVerts:new Uint32Array(m.indices)})));custom=move(custom,m.min.map(x=>-x));custom=K(custom.scale([t.size/Math.max(sz[0],sz[1]),t.size/Math.max(sz[0],sz[1]),t.height/sz[2]]));custom=move(custom,[-sz[0]*t.size/Math.max(sz[0],sz[1])/2,-sz[1]*t.size/Math.max(sz[0],sz[1])/2,0]);}
else throw Error('Unsupported source');
custom=K(custom.rotate([0,0,t.rotation]));custom=move(custom,[t.x,t.y,h+3.85]);const mesh=custom.getMesh();for(let i=0;i<mesh.vertProperties.length;i+=mesh.numProp){const x=mesh.vertProperties[i],y=mesh.vertProperties[i+1];if(Math.abs(x)>6.5||Math.abs(y)>6.5||Math.hypot(x,y)>6.5)throw Error('Grip leaves wheel hub safe zone. Reduce size, center placement, or reset transforms.');}
custom=move(custom,[gripX,0,0]);wheel=add(wheel,custom);
}else{// built-in raised oval thumb grip, fused at its base
custom=K(cyl(2.7,1.8).scale([1,1.25,1]));wheel=add(wheel,move(custom,[gripX,0,h+3.85]));}
const solids=[base,rack,wheel,lid],parts=solids.map((solid,i)=>{const components=solid.decompose(),count=components.length;components.forEach(c=>c.delete());if(solid.status()!=='NoError'||solid.isEmpty()||count!==1)throw Error('Cannot make one connected closed solid per part. Use a broad flat-bottom grip.');const clean=K(K(solid.asOriginal()).setTolerance(.001)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
const layout=[[BX/2,-ymin,0],[L/2,BY+12-rootY,0],[BX+ra+8,ra+4,0],[BX/2,2*BY+26,0]];
const model={parameters:{...p},parts,layout,rp,mod,ra,rootY,backY,BX,BY,ymin,baseZ,lidZ,h,stroke,L,pegs};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;
}finally{for(const s of new Set(all.reverse()))s.delete();}}
export function placements(m,angle=0){const x=Math.max(-m.stroke,Math.min(m.stroke,-m.rp*angle));return [{pos:[0,0,0],angle:0},{pos:[x,0,m.baseZ],angle:0},{pos:[0,0,m.baseZ],angle:-x/m.rp},{pos:[0,0,m.lidZ],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
