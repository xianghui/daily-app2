export const defaults={diameter:48,shape:1,grip:0,bands:8};
export const fields=[['diameter','Overall diameter',30,70,1,'mm'],['shape','Profile softness',1,1.45,.05,'ratio'],['grip','Recessed grip depth',0,.45,.05,'mm'],['bands','Grip bands',4,12,1,'count']];
export function validate(p){return fields.flatMap(([k,l,min,max])=>!Number.isFinite(p[k])||p[k]<min||p[k]>max?[`${l}: enter ${min}–${max}.`]:k==='bands'&&!Number.isInteger(p[k])?['Grip bands must be a whole number.']:[]);}
export function generate(p,mode='whole'){
 const errors=validate(p);if(errors.length)throw Error(errors.join(' '));const R=(mode==='coupon'?24:p.diameter)/2,N=96,M=48,V=[],F=[];
 function half(){const v=[],f=[];v.push([0,0,-R]);for(let j=1;j<M;j++){const phi=-Math.PI/2+Math.PI*j/M,z=R*Math.sign(phi)*Math.abs(Math.sin(phi))**(2/p.shape),r=R*Math.cos(phi)**(2/p.shape);for(let i=0;i<=N;i++){const t=-Math.PI/2+Math.PI*i/N,depth=p.grip*Math.cos(t)**2*Math.cos(phi)**2*(.5+.5*Math.cos(p.bands*phi*2));const rr=r-depth;v.push([rr*Math.cos(t),rr*Math.sin(t),z]);}}
 const top=v.length;v.push([0,0,R]);const idx=(j,i)=>1+(j-1)*(N+1)+i;
 for(let i=0;i<N;i++){f.push([0,idx(1,i+1),idx(1,i)]);for(let j=1;j<M-1;j++){const a=idx(j,i),b=idx(j,i+1),c=idx(j+1,i),d=idx(j+1,i+1);f.push([a,b,c],[b,d,c]);}f.push([idx(M-1,i),idx(M-1,i+1),top]);}
 return {v,f,idx,top};}
 const h=half();V.push(...h.v);F.push(...h.f);
 if(mode==='whole'||mode==='coupon'){const off=V.length;V.push(...h.v.map(([x,y,z])=>[-x,-z,-y]));F.push(...h.f.map(t=>t.map(i=>i+off)));}
 else {const center=V.length;V.push([0,0,0]);const boundary=[0];for(let j=1;j<M;j++)boundary.push(h.idx(j,0));boundary.push(h.top);for(let j=M-1;j>0;j--)boundary.push(h.idx(j,N));for(let i=0;i<boundary.length;i++)F.push([center,boundary[i],boundary[(i+1)%boundary.length]]);}
 // Orient outward using radial dot product; the split face is explicitly -X.
 for(const f of F){const [a,b,c]=f.map(i=>V[i]),u=b.map((x,k)=>x-a[k]),v=c.map((x,k)=>x-a[k]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];const dot=n.reduce((s,x,k)=>s+x*(a[k]+b[k]+c[k]),0);if((mode==='half'&&f.includes(h.v.length))?n[0]>0:dot<0) [f[1],f[2]]=[f[2],f[1]];}
 const vertices=[],map=new Map(),remap=V.map(v=>{const w=mode==='half'?[v[1],v[2],v[0]]:v;const key=w.map(x=>Math.round(x*1e7)).join(',');if(!map.has(key)){map.set(key,vertices.length);vertices.push(w.map(x=>Math.abs(x)<1e-10?0:x));}return map.get(key)});const faces=F.map(t=>t.map(i=>remap[i]));const min=[0,1,2].map(k=>Math.min(...vertices.map(v=>v[k]))),max=[0,1,2].map(k=>Math.max(...vertices.map(v=>v[k])));return {vertices,faces,size:max.map((x,k)=>x-min[k]),parameters:p,mode};
}
export function binarySTL(m){const buffer=new ArrayBuffer(84+50*m.faces.length),view=new DataView(buffer);view.setUint32(80,m.faces.length,true);m.faces.forEach((f,i)=>{const [a,b,c]=f.map(j=>m.vertices[j]),u=b.map((x,k)=>x-a[k]),v=c.map((x,k)=>x-a[k]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],l=Math.hypot(...n);[...n.map(x=>x/l),...a,...b,...c].forEach((x,j)=>view.setFloat32(84+i*50+j*4,x,true));});return new Uint8Array(buffer);}
