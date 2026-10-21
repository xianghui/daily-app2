export const defaults={diameter:46,rim:4,stem:12,grip:7,waist:12,texture:0.35,tip:0.8};
export const fields=[
 ['diameter','Rim diameter',30,64,1,'mm'],['rim','Rim depth',3,7,0.2,'mm'],
 ['stem','Pinch-stem height',8,16,0.5,'mm'],['grip','Stem diameter',6,10,0.2,'mm'],
 ['waist','Ergonomic waist',0,20,1,'%'],['texture','Flute depth',0,0.6,0.05,'mm'],['tip','Contact-tip diameter',0.6,1.6,0.1,'mm']];
export const presets={Everyday:defaults,Pocket:{...defaults,diameter:32,rim:3,stem:9,grip:6.4,texture:0.2},'Long coast':{...defaults,diameter:60,rim:6,stem:13,grip:8,waist:8}};
export function validate(p){const errors=[];for(const [key,label,min,max]of fields)if(!Number.isFinite(p[key])||p[key]<min-1e-8||p[key]>max+1e-8)errors.push(`${label} must be ${min}–${max} ${fields.find(f=>f[0]===key)[5]}.`);if(p.grip*(1-p.waist/100)-2*p.texture<4.0)errors.push('Grip core must remain at least 4.0 mm across. Reduce waist or flute depth.');return errors;}
// A radial graph: every cross-section is star-shaped, with one radius per angle.
// Connected rings and two fan caps form one closed boundary, no boolean overlaps.
export function generate(p){const errors=validate(p);if(errors.length)throw new Error(errors.join(' '));const R=p.diameter/2;const c=1.4+(R-2)*1.1;const top=c+p.rim;const h=top+p.stem;const rings=[];
 const add=(z,r,flute=0)=>rings.push({z,r,flute});
 add(0,p.tip/2);add(0.6,0.8);add(1.4,1.2);add(c,R-0.8);add(c+0.8,R);add(top-0.8,R);add(top,R-0.8);
 add(top,p.grip/2+0.8);add(top+0.8,p.grip/2);
 for(let j=1;j<=16;j++){const t=j/16;add(top+0.8+t*(p.stem-1.4),p.grip/2*(1-p.waist/100*Math.sin(Math.PI*t)**2),p.texture*Math.sin(Math.PI*t));}
 add(h,p.grip/2-0.6);
 const n=144;const positions=[];for(const ring of rings)for(let i=0;i<n;i++){const a=i/n*Math.PI*2;const r=ring.r-ring.flute*(1-Math.cos(a*12))/2;positions.push(r*Math.cos(a),r*Math.sin(a),ring.z);}
 const faces=[];for(let j=0;j<rings.length-1;j++)for(let i=0;i<n;i++){const a=j*n+i,b=j*n+(i+1)%n,d=(j+1)*n+i,e=(j+1)*n+(i+1)%n;faces.push(a,b,e,a,e,d);}
 const bottom=positions.length/3;positions.push(0,0,0);const end=positions.length/3;positions.push(0,0,h);for(let i=0;i<n;i++){faces.push(bottom,(i+1)%n,i);const off=(rings.length-1)*n;faces.push(end,off+i,off+(i+1)%n);}
 return {positions,faces,dimensions:[p.diameter,p.diameter,h],parameters:{...p},name:'Whorl',rings};
}
export function trial(p){return generate({...p,diameter:30,rim:3,stem:8});}
export function binarySTL(model){const {positions:v,faces:f}=model;const count=f.length/3;const out=new ArrayBuffer(84+count*50);const d=new DataView(out);const label=new TextEncoder().encode('Whorl | millimeters | one-piece fingertip spin top');new Uint8Array(out,0,label.length).set(label);d.setUint32(80,count,true);let off=84;for(let i=0;i<f.length;i+=3){const a=v.slice(f[i]*3,f[i]*3+3),b=v.slice(f[i+1]*3,f[i+1]*3+3),c=v.slice(f[i+2]*3,f[i+2]*3+3);const u=b.map((x,k)=>x-a[k]),w=c.map((x,k)=>x-a[k]);const norm=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]];const mag=Math.hypot(...norm);for(const val of [...norm.map(x=>x/mag),...a,...b,...c]){d.setFloat32(off,val,true);off+=4;}d.setUint16(off,0,true);off+=2;}return out;}
export function filename(p,suffix=''){return `whorl-${p.diameter}mm-tip${p.tip.toFixed(1)}mm${suffix}.stl`;}
