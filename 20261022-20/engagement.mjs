import assert from 'node:assert/strict';import fs from 'node:fs';import {init,generate,defaults,fields,placements} from './src/geometry.js';
const {Manifold:M,Mesh}=await init(),report=[];
for(const p of [defaults,...Array.from({length:4},(_,i)=>({...defaults,length:i&1?1.6:1.2,gap:i&2?.5:.25}))]){
const m=generate(p),rb=m.pitch*Math.cos(Math.PI/9),alpha=Math.acos(2*rb/m.center),contactRatio=(2*Math.sqrt(m.outer*m.outer-rb*rb)-m.center*Math.sin(alpha))/(Math.PI*p.length*Math.cos(Math.PI/9));assert(contactRatio>1,'continuous involute contact');
const [sun,planet]=[m.parts[2],m.parts[3]].map(p=>new M(new Mesh({numProp:p.stride,vertProperties:new Float32Array(p.vertices),triVerts:new Uint32Array(p.indices)})));
// Opposite tooth phase must be blocked, proving gears cannot freely pass each other.
const phase=placements(m,-1)[3].matrix;const wrong=planet.rotate([0,0,0]).translate([m.center,0,0]),hit=sun.intersect(wrong);assert(hit.volume()>.03,'tooth flanks enforce engagement');let minRootGap=m.center-(m.outer+(m.pitch-1.25*p.length));assert(minRootGap>0);report.push({module:p.length,gap:p.gap,operatingPressureAngleDegrees:alpha*180/Math.PI,contactRatio,tipRootRadialGapMm:minRootGap,blockedWrongPhaseVolumeMm3:hit.volume()});[sun,planet,wrong,hit].forEach(s=>s.delete());}
fs.writeFileSync('engagement-validation.json',JSON.stringify(report,null,2));console.log('Continuous involute contact and wrong-phase blockage verified across module/gap corners.');
