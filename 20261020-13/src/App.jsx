import {useEffect,useRef,useState,useMemo} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {defaults,fields,validate,generate,binarySTL,filename} from './geometry';
import './App.css';
const presets={Everyday:defaults,'Low clearance':{length:100,width:30,height:14,toe:2,grooves:7,depth:0.6},'Wide grip':{length:140,width:60,height:30,toe:4,grooves:12,depth:1.2}};
function Preview({geometry,fitRef}){
 const host=useRef();
 useEffect(()=>{
 const el=host.current;let renderer;
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}catch{el.textContent='3D preview unavailable: enable WebGL. STL generation still works.';return;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));el.appendChild(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,0.1,3000);camera.up.set(0,0,1);
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;
 const mat=new THREE.MeshStandardMaterial({color:0xe99851,roughness:0.65,metalness:0.08});const mesh=new THREE.Mesh(geometry,mat);scene.add(mesh);
 const edges=new THREE.LineSegments(new THREE.EdgesGeometry(geometry,25),new THREE.LineBasicMaterial({color:0x7f482c,transparent:true,opacity:0.35}));scene.add(edges);
 scene.add(new THREE.HemisphereLight(0xffffff,0x4b5c69,2.6));const light=new THREE.DirectionalLight(0xffffff,3.2);light.position.set(-80,-100,200);scene.add(light);
 const box=geometry.boundingBox,size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
 const fit=()=>{let d=Math.max(size.x,size.y,size.z)*1.65/Math.min(camera.aspect,1);camera.position.copy(center).add(new THREE.Vector3(-d,-d,d*0.8));controls.target.copy(center);controls.update();};fitRef.current=fit;
 const resize=()=>{const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();fit();};const observer=new ResizeObserver(resize);observer.observe(el);resize();
 let frame;const animate=()=>{frame=requestAnimationFrame(animate);controls.update();renderer.render(scene,camera);};animate();
 return()=>{cancelAnimationFrame(frame);observer.disconnect();controls.dispose();renderer.dispose();mat.dispose();edges.geometry.dispose();edges.material.dispose();el.replaceChildren();};
 },[geometry,fitRef]);
 return <div className="canvas" ref={host} aria-label="Interactive 3D wedge preview. Drag to rotate; pinch or scroll to zoom."/>;
}
export default function App(){
 const [p,setP]=useState({...defaults}),fitRef=useRef(),error=validate(p);
 const geometry=useMemo(()=>error?null:generate(p),[p,error]);
 useEffect(()=>()=>geometry?.dispose(),[geometry]);
 const download=()=>{if(!geometry)return;const url=URL.createObjectURL(new Blob([binarySTL(geometry)],{type:'model/stl'}));const a=document.createElement('a');a.href=url;a.download=filename(p);a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);};
 return <main><header><a href="../">← Daily App Lab</a><span className="edition">WORKSHOP / 001</span><h1>Wedge Works<span>Small part. Better fit.</span></h1><p>A made-to-measure door wedge. Dial in your clearance, shape the grip, and take a ready-to-slice STL with you.</p></header>
 <div className="workspace"><section className="viewer"><div className="viewerhead"><span>LIVE SOLID PREVIEW</span><span className="dot">● Local generation</span></div>{geometry?<Preview geometry={geometry} fitRef={fitRef}/>:<div className="canvas invalid">Adjust the dimensions to restore the preview.</div>}<div className="viewtools"><button onClick={()=>fitRef.current?.()} disabled={!!error}>Fit to view</button><span>Drag to orbit · pinch / scroll to zoom</span></div><div className="measure" aria-live="polite"><div><small>X · LENGTH</small><strong>{p.length} <em>mm</em></strong></div><div><small>Y · WIDTH</small><strong>{p.width} <em>mm</em></strong></div><div><small>Z · HEIGHT</small><strong>{p.height} <em>mm</em></strong></div></div><p className="caption">Flat underside on the build plate · groove side facing up</p></section>
 <section className="panel"><div className="paneltitle"><h2>Make it yours</h2><button onClick={()=>setP({...defaults})}>Reset</button></div><div className="presets" aria-label="Presets">{Object.entries(presets).map(([name,value])=><button key={name} onClick={()=>setP({...value})}>{name}</button>)}</div><p className="units">All dimensions in millimeters (mm). Groove count is unitless.</p>
 {fields.map(([key,label,min,max,step])=><div className="control" key={key}><label htmlFor={key}>{label}{key==='grooves'?'':' (mm)'}</label><input id={key} type="number" min={min} max={max} step={step} value={Number.isNaN(p[key])?'':p[key]} onChange={e=>setP({...p,[key]:e.target.value===''?NaN:Number(e.target.value)})}/><input aria-label={`${label} slider`} type="range" min={min} max={max} step={step} value={Number.isFinite(p[key])?p[key]:min} onChange={e=>setP({...p,[key]:Number(e.target.value)})}/></div>)}
 <div className={error?'validation error':'validation'} role="status">{error||'✓ Closed solid · minimum remaining thickness ≥ 1.2 mm'}</div><button className="download" disabled={!!error} onClick={download}>Download STL <span>↓</span></button><p className="privacy">Binary STL · millimeter coordinates · no uploads</p></section></div>
 <section className="notes"><div><h3>01 / Measure first</h3><p>Measure the door gap. Choose a toe thinner than the gap and a heel taller than it. A longer wedge makes a gentler slope. No fixed mating fit is assumed.</p></div><div><h3>02 / Print flat</h3><p>Start with 0.2 mm layers, 3–4 walls and 25–40% infill. The flat underside goes down; no supports expected. TPU offers more grip than rigid PLA; tune to your printer.</p></div><div><h3>03 / Use thoughtfully</h3><p>Grooves are geometric texture, not a guarantee of slip resistance. Test on your floor. Not for fire doors, security, lifting or load-bearing use. No physical print testing has been performed.</p></div></section><footer>WEDGE WORKS / Browser-built, bench-ready. <span>One mesh. Same preview & export.</span></footer></main>;
}
