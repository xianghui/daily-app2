import Module from 'manifold-3d';
let api;
export async function init(options={}){if(!api){api=await Module(options);api.setup();}return api;}
export const fields=[['stroke','Shuttle travel',12,24,1],['wall','Frame / slot wall',3,5,.5],['corner','Palm corner radius',3,8,1],['texture','Grip scallop depth',0,.7,.1],['clearance','Running radial / axial gap',.25,.6,.05],['fit','Cap diametral interference',-.1,.15,.05]];
export const defaults={stroke:18,wall:4,corner:6,texture:.4,clearance:.4,fit:.05};
export const presets={'Pocket':{...defaults,stroke:12,wall:3},'Everyday':defaults,'Loose PETG':{...defaults,clearance:.6,fit:0}};
export const names=['palm-base','crank','shuttle','pivot-cap','drive-cap','guide-cap-a','guide-cap-b'];
export function validate(p){return fields.filter(([k,,a,b])=>!Number.isFinite(p[k])||p[k]<a||p[k]>b).map(([k,l,a,b])=>`${l} must be ${a}–${b} mm.`);}
export function generate(p){const errors=validate(p);if(errors.length)throw Error(errors.join(' '));if(!api)throw Error('Geometry engine not ready');const {Manifold:M,CrossSection:C}=api,all=[];const K=x=>(all.push(x),x),add=(a,b)=>K(a.add(b)),sub=(a,b)=>K(a.subtract(b));const cyl=(r,h)=>K(M.cylinder(h,r,r,48)),move=(s,v)=>K(s.translate(v));
const e=p.stroke/2,c=p.clearance,w=p.wall,r=2,slot=r+c,Y=e+2*slot+w,ymax=Y+slot+w,halfX=e+slot+w,L=2*(halfX+e+w),W=2*(ymax+w),yb=8+3*c,capZ=yb+3+c,top=capZ+2;
function rounded(x,y,rad,h){const pts=[];for(const [cx,cy,start]of [[x/2-rad,y/2-rad,0],[-x/2+rad,y/2-rad,90],[-x/2+rad,-y/2+rad,180],[x/2-rad,-y/2+rad,270]])for(let j=0;j<=12;j++){const a=(start+j*90/12)*Math.PI/180;pts.push([cx+rad*Math.cos(a),cy+rad*Math.sin(a)]);}return K(K(new C([pts])).extrude(h));}
function capsule(half,rr,h,axis='x'){const len=2*(half+rr),a=rounded(axis==='x'?len:2*rr,axis==='x'?2*rr:len,rr,h);return a;}
let base=rounded(L,W,p.corner,3);for(const y of [-Y,Y])base=add(base,move(cyl(r,capZ+1.35-3),[0,y,3]));base=add(base,move(cyl(r,6+2*c+1.35-3),[0,0,3]));
if(p.texture>0)for(const sign of [-1,1])for(let j=-2;j<=2;j++)base=sub(base,move(cyl(1.5,5),[j*5,sign*(W/2+1.5-p.texture),-1]));
let crank=sub(cyl(e+r+w,3),move(cyl(slot,5),[0,0,-1]));crank=add(crank,move(cyl(r,capZ+1.35-(6+c)),[e,0,2.99])); // local z=0 becomes assembled 3+c
// Correct pin height to finish at cap top - 0.2 in assembly.
let shuttle=rounded(2*halfX,2*ymax,Math.min(p.corner,w),3);shuttle=sub(shuttle,move(capsule(e,slot,5,'y'),[0,0,-1]));for(const y of [-Y,Y])shuttle=sub(shuttle,move(capsule(e,slot,5),[0,y,-1]));
// Open-bottom caps bridge only a 4 mm bore, with a 0.6 mm closed roof.
let cap=sub(cyl(3.5,2),cyl(r-p.fit/2,1.4));
const raw=[base,crank,shuttle,cap,cap,cap,cap],parts=raw.map((s,i)=>{if(s.status()!=='NoError')throw Error('Solid modeling failed '+s.status());const clean=K(s.simplify(1e-5)),m=clean.getMesh();return{name:names[i],vertices:Array.from(m.vertProperties),indices:Array.from(m.triVerts),stride:m.numProp};});
const layout=[[0,0,0],[L/2+e+r+w+8,0,0],[0,W/2+ymax+8,0],[-15,-W/2-10,0],[-5,-W/2-10,0],[5,-W/2-10,0],[15,-W/2-10,0]];
for(const s of new Set(all.reverse()))s.delete();const model={parameters:{...p},parts,layout,e,Y,yb,capZ,top,L,W,halfX,ymax,assembled:[L,W,top],dimensions:[]};const b=bounds(triangles(model));model.dimensions=b.max.map((v,k)=>v-b.min[k]);return model;}
export function placements(m,angle=0){const c=m.parameters.clearance,x=m.e*Math.cos(angle),y=m.e*Math.sin(angle);return [{pos:[0,0,0],angle:0},{pos:[0,0,3+c],angle},{pos:[x,0,m.yb],angle:0},{pos:[0,0,6+2*c],angle:0},{pos:[x,y,m.capZ],angle:0},{pos:[0,-m.Y,m.capZ],angle:0},{pos:[0,m.Y,m.capZ],angle:0}];}
export function triangles(model,selection='all'){const out=[];model.parts.forEach((part,i)=>{if(selection!=='all'&&selection!==part.name)return;const off=selection==='all'?model.layout[i]:[0,0,0];for(let j=0;j<part.indices.length;j+=3)out.push(part.indices.slice(j,j+3).map(idx=>[0,1,2].map(k=>part.vertices[idx*part.stride+k]+off[k])));});return out;}
export function bounds(ts){const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];for(const tri of ts)for(const v of tri)for(let k=0;k<3;k++){min[k]=Math.min(min[k],v[k]);max[k]=Math.max(max[k],v[k]);}return{min,max};}
export function binarySTL(model,selection='all'){const ts=triangles(model,selection),b=new ArrayBuffer(84+ts.length*50),v=new DataView(b);v.setUint32(80,ts.length,true);ts.forEach(([a,b,c],i)=>{const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]),n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],len=Math.hypot(...n);let o=84+i*50;for(const val of [...n.map(x=>x/len),...a,...b,...c]){v.setFloat32(o,val,true);o+=4;}});return b;}
export function fingerprint(buffer){let h=2166136261;for(const b of new Uint8Array(buffer)){h^=b;h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
