import * as THREE from 'three';
export const defaults={inlet:64,bore:12,wall:2,rise:34,spout:22,clearance:0.6};
export const fields=[['inlet','Inlet opening',24,120,1],['bore','Outlet bore',4,30,0.5],['wall','Radial wall',1.8,4,0.1],['rise','Cone height',12,100,1],['spout','Spout length',8,45,1],['clearance','Bottle clearance',0,2,0.1]];
export const presets={Everyday:defaults,'Small bottle':{inlet:36,bore:6,wall:1.8,rise:20,spout:18,clearance:0.8},'Wide mouth':{inlet:110,bore:26,wall:3,rise:55,spout:30,clearance:1}};
export function validate(p){
 for(const [k,label,min,max] of fields)if(!Number.isFinite(p[k])||p[k]<min||p[k]>max)return `${label} must be ${min}–${max} mm.`;
 if(p.inlet<p.bore+4)return 'Inlet opening must exceed the outlet bore by at least 4 mm.';
 if(p.rise<(p.inlet-p.bore)/2)return 'Increase cone height to at least '+((p.inlet-p.bore)/2)+' mm for a support-friendly 45° overhang.';
 return '';
}
export function dimensions(p){return [p.inlet+2*p.wall,p.inlet+2*p.wall,p.rise+p.spout];}
export function generate(p){
 const err=validate(p);if(err)throw Error(err);
 const r=p.bore/2,R=p.inlet/2,w=p.wall,h=p.rise+p.spout;
 // A simple, non-intersecting annular cross-section. No CSG or overlapping solids.
 const profile=[[r,0],[r+w,0],[r+w,p.spout],[R+w,h],[R,h],[r,p.spout]];
 const positions=[],N=96;
 const v=(i,j)=>{const [radius,z]=profile[i],a=2*Math.PI*(j%N)/N;return [radius*Math.cos(a),radius*Math.sin(a),z];};
 for(let i=0;i<profile.length;i++)for(let j=0;j<N;j++){
 const k=(i+1)%profile.length,a=v(i,j),b=v(i,j+1),c=v(k,j+1),d=v(k,j);
 positions.push(...a,...b,...c,...a,...c,...d);
 }
 // Orient the entire connected surface outward once, based on signed volume.
 let volume=0;for(let i=0;i<positions.length;i+=9){const [a,b,c,d,e,f,g,h,j]=positions.slice(i,i+9);volume+=(a*(e*j-f*h)+b*(f*g-d*j)+c*(d*h-e*g))/6;}
 if(volume<0)for(let i=0;i<positions.length;i+=9)for(let k=0;k<3;k++)[positions[i+3+k],positions[i+6+k]]=[positions[i+6+k],positions[i+3+k]];
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.computeVertexNormals();geo.computeBoundingBox();return geo;
}
export function binarySTL(g){
 const a=g.attributes.position, count=a.count/3;const buffer=new ArrayBuffer(84+count*50),view=new DataView(buffer);view.setUint32(80,count,true);
 const A=new THREE.Vector3(),B=new THREE.Vector3(),C=new THREE.Vector3(),n=new THREE.Vector3();
 for(let f=0;f<count;f++){let off=84+f*50;A.fromBufferAttribute(a,f*3);B.fromBufferAttribute(a,f*3+1);C.fromBufferAttribute(a,f*3+2);n.subVectors(B,A).cross(new THREE.Vector3().subVectors(C,A)).normalize();for(const v of [n,A,B,C])for(const k of ['x','y','z']){view.setFloat32(off,v[k],true);off+=4;}}
 return buffer;
}
export const filename=p=>`pourform-inlet${p.inlet}-bore${p.bore}-height${p.rise+p.spout}mm.stl`;
