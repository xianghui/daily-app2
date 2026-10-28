import struct,hashlib,json,collections
from pathlib import Path
import sys
p=Path(sys.argv[1] if len(sys.argv)>1 else '/Volumes/ExternalHD/3d_printing_apps/blender_3dmodel_cleaning_addon-main/keychain_hook.stl');b=p.read_bytes();n=struct.unpack_from('<I',b,80)[0];ts=[[struct.unpack_from('<fff',b,84+i*50+12+j*12) for j in range(3)]for i in range(n)];ts=[[(v[0],v[2]-62.19083023071289,1.5-v[1]) for v in t]for t in ts];mn=[min(v[k] for t in ts for v in t) for k in range(3)];mx=[max(v[k] for t in ts for v in t)for k in range(3)];print(p,n,mn,mx)
ids={};edges=collections.defaultdict(list);adj=collections.defaultdict(set)
for i,t in enumerate(ts):
 vs=[]
 for v in t:
  key=tuple(round(x,5)for x in v)
  if key not in ids:ids[key]=len(ids)
  vs.append(ids[key])
 for a,c in zip(vs,vs[1:]+vs[:1]):edges[tuple(sorted([a,c]))].append(i)
for es in edges.values():
 for i in es:
  adj[i].update(es)
seen=set();pcs=[]
for i in range(n):
 if i in seen:continue
 q=[i];pc=[];seen.add(i)
 while q:
  j=q.pop();pc.append(j)
  for k in adj[j]:
   if k not in seen:seen.add(k);q.append(k)
 pcs.append(pc)
sections={};svg=['<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="320" viewBox="0 0 60 16"><rect width="60" height="16" fill="#e7e9f1"/>']
for a,z in enumerate([.3,.8,1.5,2.2,2.7]):
 seg=[]
 for t in ts:
  points=[]
  for v,w in zip(t,t[1:]+t[:1]):
   if (v[2]<z)!=(w[2]<z):
    f=(z-v[2])/(w[2]-v[2]);points.append([v[k]+f*(w[k]-v[k])for k in range(2)])
  if len(points)==2:seg.append(points)
 sections[str(z)]={'segments':len(seg),'boundsXY':[[min(v[k]for t in seg for v in t) for k in range(2)],[max(v[k]for t in seg for v in t) for k in range(2)]]}
 svg.append(f'<g transform="translate({6+a*12},9)"><text x="-4" y="-6" font-size=".7">Z {z} mm</text>')
 for u,v in seg:svg.append(f'<path d="M{u[0]},{-u[1]} L{v[0]},{-v[1]}" stroke="#1f2233" fill="none" stroke-width=".04"/>')
 svg.append('</g>')
svg.append('</svg>')
out=Path(__file__).resolve().parent;(out/'reference-sections.svg').write_text(''.join(svg));r={'source':str(p),'sha256':hashlib.sha256(b).hexdigest(),'bytes':len(b),'triangles':n,'units':'assumed millimeters, corroborated by project README','bounds':{'min':mn,'max':mx,'dimensions':[mx[k]-mn[k]for k in range(3)]},'components':len(pcs),'componentTriangles':[len(pc)for pc in pcs],'nonmanifoldEdges':sum(len(x)!=2 for x in edges.values()),'sections':sections};(out/'reference-reparsed.json').write_text(json.dumps(r,indent=2));print(json.dumps(r,indent=2))
