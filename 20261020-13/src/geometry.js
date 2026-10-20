import * as THREE from 'three';
export const defaults={length:110,width:36,height:22,toe:3,grooves:8,depth:0.8};
export const fields=[['length','Length',60,180,1],['width','Width',20,70,1],['height','Heel height',10,45,1],['toe','Toe thickness',1.2,6,0.1],['grooves','Grip grooves',0,16,1],['depth','Groove depth',0.4,2,0.1]];
export function validate(p){
 for(const [key,label,min,max,step] of fields){if(!Number.isFinite(p[key])||p[key]<min||p[key]>max)return `${label} must be ${min}–${max}${key==='grooves'?'':' mm'}.`;if(key==='grooves'&&!Number.isInteger(p[key]))return 'Grip grooves must be a whole number.';}
 if(p.grooves>0&&p.toe-p.depth<1.2-1e-8)return 'Toe thickness minus groove depth must be at least 1.2 mm. Increase the toe or reduce groove depth.';
 if(p.height<=p.toe)return 'Heel height must exceed toe thickness.';
 return '';
}
export function generate(p){
 const error=validate(p);if(error)throw Error(error);
 const {length:L,width:W,height:H,toe:T,grooves:N,depth:D}=p;
 const top=x=>T+(H-T)*x/L;
 // CCW simple cross-section in X/Z, extruded along Y. No overlapping solids.
 const profile=[[0,0],[L,0],[L,H]];
 for(let i=N-1;i>=0;i--){let x=L*(0.2+0.65*(i+0.5)/Math.max(N,1)),half=L*0.65/Math.max(N,1)*0.25;profile.push([x+half,top(x+half)],[x,top(x)-D],[x-half,top(x-half)]);}
 profile.push([0,T]);
 const positions=[];
 function tri(a,b,c){positions.push(...a,...b,...c);}
 const roof=profile.slice(2).reverse(); // increasing X, positive thickness everywhere
 for(let i=0;i<roof.length-1;i++){
  const [x,z]=roof[i],[u,v]=roof[i+1];
  const a=[x,0,0],b=[u,0,0],c=[u,0,v],d=[x,0,z];
  const A=[x,W,0],B=[u,W,0],C=[u,W,v],D=[x,W,z];
  tri(a,b,c);tri(a,c,d);tri(A,C,B);tri(A,D,C);
  tri(d,c,C);tri(d,C,D);tri(a,A,B);tri(a,B,b);
 }
 const [x,z]=roof[0],[u,v]=roof.at(-1);
 tri([x,0,0],[x,0,z],[x,W,z]);tri([x,0,0],[x,W,z],[x,W,0]);
 tri([u,0,0],[u,W,0],[u,W,v]);tri([u,0,0],[u,W,v],[u,0,v]);
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.computeVertexNormals();g.computeBoundingBox();return g;
}
export function binarySTL(g){
 const a=g.attributes.position, count=a.count/3;const buffer=new ArrayBuffer(84+count*50),view=new DataView(buffer);view.setUint32(80,count,true);
 const A=new THREE.Vector3(),B=new THREE.Vector3(),C=new THREE.Vector3(),n=new THREE.Vector3();
 for(let f=0;f<count;f++){let off=84+f*50;A.fromBufferAttribute(a,f*3);B.fromBufferAttribute(a,f*3+1);C.fromBufferAttribute(a,f*3+2);n.subVectors(B,A).cross(new THREE.Vector3().subVectors(C,A)).normalize();for(const v of [n,A,B,C])for(const k of ['x','y','z']){view.setFloat32(off,v[k],true);off+=4;}}
 return buffer;
}
export const filename=p=>`wedge-${p.length}x${p.width}x${p.height}mm-${p.grooves}grooves.stl`;
