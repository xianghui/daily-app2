import * as THREE from 'three';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
export const defaults={armX:100,armY:80,width:18,height:20,hole:5,clearance:0.4,holes:true};
export const ranges={armX:[40,200,1],armY:[40,200,1],width:[10,32,1],height:[6,40,1],hole:[3,10,0.5],clearance:[0,1,0.1]};
export function validate(p){
 for(const [k,[min,max]] of Object.entries(ranges))if(!Number.isFinite(p[k])||p[k]<min||p[k]>max)return `${k} must be between ${min} and ${max} mm.`;
 if(Math.min(p.armX,p.armY)<p.width*2+8)return 'Each arm must be at least twice the rail width + 8 mm. Lengthen the arms or narrow the rails.';
 if(p.holes&&p.hole+p.clearance>p.width-5)return 'Mount holes need at least 2.5 mm of material on each side. Reduce screw bore/clearance or widen the rails.';
 return '';
}
export function dimensions(p){return [p.armX,p.armY,p.height]}
export function makeGeometry(p){
 const error=validate(p);if(error)throw Error(error);
 const s=new THREE.Shape();s.moveTo(0,0);s.lineTo(p.armX,0);s.lineTo(p.armX,p.width);s.lineTo(p.width,p.width);s.lineTo(p.width,p.armY);s.lineTo(0,p.armY);s.closePath();
 if(p.holes)for(const [x,y] of [[p.armX-p.width,p.width/2],[p.width/2,p.armY-p.width]]){
  const h=new THREE.Path();h.absarc(x,y,(p.hole+p.clearance)/2,0,Math.PI*2,true);s.holes.push(h);
 }
 const g=new THREE.ExtrudeGeometry(s,{depth:p.height,bevelEnabled:false,steps:1,curveSegments:24});g.computeBoundingBox();return g;
}
export function binarySTL(g){return new STLExporter().parse(new THREE.Mesh(g),{binary:true}).buffer}
export function filename(p){return `corner-keeper-${p.armX}x${p.armY}x${p.height}mm-${p.holes?'mount':'solid'}.stl`}
