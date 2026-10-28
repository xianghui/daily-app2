import Module from 'manifold-3d';const w=await Module();w.setup();const {Manifold:M,CrossSection:C}=w;
const cap=new C([[[0,-4.5],[3.75,0],[0,4.5],[-3.75,0]]]).extrude(.7);
function beam(a,b,r){const d=b.map((x,k)=>x-a[k]),len=Math.hypot(...d),theta=Math.acos(d[2]/len)*180/Math.PI,phi=Math.atan2(d[1],d[0])*180/Math.PI;return M.cylinder(len,r,r,12).rotate([0,theta,phi]).translate(a);}
const paths=[[[0,3.8,.35],[3.2,3.8,4],[3.2,0,7.65]],[[3.2,0,.35],[3.2,-3.8,4],[0,-3.8,7.65]],[[0,-3.8,.35],[-3.2,-3.8,4],[-3.2,0,7.65]],[[-3.2,0,.35],[-3.2,3.8,4],[0,3.8,7.65]]];
let cage=cap.add(cap.translate([0,0,7.3]));for(const p of paths){for(let i=0;i<2;i++)cage=cage.add(beam(p[i],p[i+1],.6));cage=cage.add(M.sphere(.6,12).translate(p[1]));}
console.log('status',cage.status(),'comp',cage.decompose().length,'bounds',cage.boundingBox());for(const shift of [[4,6,0],[8,0,0],[-4,6,0]]){const other=cage.translate(shift);console.log(shift,cage.intersect(other).volume());}
const mesh=cage.getMesh();await import('node:fs').then(fs=>fs.writeFileSync('/tmp/cage.json',JSON.stringify({vertices:Array.from(mesh.vertProperties),indices:Array.from(mesh.triVerts)})));
function cycle(i,j){return[[0,0,.35],...paths[i],[0,0,7.65],...paths[j].toReversed(),[0,0,.35]];}
const sub=(a,b)=>a.map((x,k)=>x-b[k]),dot=(a,b)=>a.reduce((s,x,k)=>s+x*b[k],0),cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
function linking(a,b){let sum=0,N=18;for(let i=0;i<a.length-1;i++)for(let j=0;j<b.length-1;j++){const da=sub(a[i+1],a[i]).map(x=>x/N),db=sub(b[j+1],b[j]).map(x=>x/N),cr=cross(da,db);for(let u=0;u<N;u++)for(let v=0;v<N;v++){const r=a[i].map((x,k)=>x+(u+.5)*da[k]-b[j][k]-(v+.5)*db[k]);sum+=dot(r,cr)/Math.hypot(...r)**3;}}return sum/(4*Math.PI);}
for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)for(let u=0;u<4;u++)for(let v=u+1;v<4;v++){const link=linking(cycle(i,j),cycle(u,v).map(p=>p.map((x,k)=>x+[4,6,0][k])));if(Math.abs(link)>.8)console.log('linked',i,j,u,v,link);}
for(const shift of[[4,6,0],[8,0,0]]){console.log('gap',shift,cage.minGap(cage.translate(shift),3));for(const angle of[-4,0,4]){const n=cage.rotate([angle,0,0]).translate(shift);console.log('pose',angle,'v',cage.intersect(n).volume(),'gap',cage.minGap(n,3));}}
