import * as THREE from 'three';
import {STLExporter} from 'three/addons/exporters/STLExporter.js';
export const defaults={span:32,radius:4,folds:4,web:1.2,depth:6,grip:3.5,texture:0.3};
export const specs=[['span','Straight span',24,44,1],['radius','Bend radius',3,5,0.1],['folds','Return bends',3,6,1],['web','Flexure thickness',1.0,1.8,0.1],['depth','Print height',4,9,0.2],['grip','Grip half-width',2.5,4,0.1],['texture','Grip scallop',0,0.5,0.1]];
export function validate(p){for(const [k,l,min,max] of specs)if(!Number.isFinite(p[k])||p[k]<min||p[k]>max)return `${l} must be ${min}–${max}${k==='folds'?' bends':' mm'}.`;if(!Number.isInteger(p.folds))return 'Return bends must be a whole number.';if(p.web/p.radius>0.45)return 'Flexure too thick for this bend: use web / radius ≤ 0.45.';if(p.grip+p.texture>=2*p.radius*0.92-p.web/2-0.8)return 'Grip crowds the next row: reduce grip size or increase bend radius.';return '';}
export function generate(p,coupon=false){const err=validate(p);if(err)throw Error(err);const n=coupon?2:p.folds,L=coupon?24:p.span,R=p.radius;const pts=[];
 const add=(x,y,tx,ty,w)=>pts.push({x,y,tx,ty,w});
 for(let k=0;k<=n;k++){const dir=k%2?-1:1;for(let j=0;j<=64;j++){const u=j/64;const s=u*L;let w=p.web/2;const d=k===0?s:k===n?L-s:100;
 if(d<9){const f=Math.max(0,1-d/9);w+=(p.grip-p.web/2)*f*f+p.texture*Math.sin(d*Math.PI/2)**2*f*f;}
 if(k&&j===0)continue;add(dir*(-L/2+s),k*2*R,dir,0,w);}
 if(k<n){const side=k%2?-1:1;for(let j=1;j<=64;j++){const a=-Math.PI/2+side*Math.PI*j/64;add(side*L/2+R*Math.cos(a),2*R*k+R+R*Math.sin(a),-side*Math.sin(a),side*Math.cos(a),p.web/2);}}
 }
 const edge=(q,side)=>new THREE.Vector2(q.x-side*q.ty*q.w,q.y+side*q.tx*q.w);
 const poly=pts.map(q=>edge(q,1));const end=pts.at(-1),start=pts[0];
 for(let j=1;j<=24;j++){const a=Math.PI/2-Math.PI*j/24;poly.push(new THREE.Vector2(end.x+end.w*(end.tx*Math.cos(a)-end.ty*Math.sin(a)),end.y+end.w*(end.ty*Math.cos(a)+end.tx*Math.sin(a))));}
 for(let i=pts.length-2;i>=0;i--)poly.push(edge(pts[i],-1));
 for(let j=1;j<24;j++){const a=-Math.PI/2-Math.PI*j/24;poly.push(new THREE.Vector2(start.x+start.w*Math.cos(a),start.y+start.w*Math.sin(a)));}
 const shape=new THREE.Shape(poly);const geometry=new THREE.ExtrudeGeometry(shape,{depth:p.depth,bevelEnabled:false,steps:1,curveSegments:12});geometry.computeBoundingBox();geometry.translate(-(geometry.boundingBox.min.x+geometry.boundingBox.max.x)/2,-(geometry.boundingBox.min.y+geometry.boundingBox.max.y)/2,0);geometry.computeBoundingBox();geometry.computeVertexNormals();
 const size=new THREE.Vector3();geometry.boundingBox.getSize(size);return {geometry,size:[size.x,size.y,size.z],gap:2*R-p.web,travel:0.08*2*R*n,polygon:poly};}
export function binarySTL(g){return new STLExporter().parse(new THREE.Mesh(g),{binary:true});}
