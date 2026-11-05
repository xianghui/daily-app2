from pathlib import Path
import struct,hashlib,json,urllib.request,collections,math,sys
url='https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl'
p=Path(sys.argv[1]) if len(sys.argv)>1 else Path('/tmp/coulomb-reference.stl')
if not p.exists():p.write_bytes(urllib.request.urlopen(url).read())
out=Path(__file__).resolve().parent
reports=[]
for path in ['/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl','/Volumes/ExternalHD/3d_printing_apps/fidget_fabric_generator/public/templates/diamond-link.stl',str(p)]:
 b=Path(path).read_bytes();n=struct.unpack_from('<I',b,80)[0];assert len(b)==84+50*n
 ts=[[struct.unpack_from('<3f',b,84+i*50+12+j*12) for j in range(3)] for i in range(n)]
 edges=collections.defaultdict(list);adj=[set() for _ in ts]
 key=lambda v:tuple(round(x,5) for x in v)
 for i,t in enumerate(ts):
  for j in range(3):edges[tuple(sorted([key(t[j]),key(t[(j+1)%3])]))].append(i)
 for fs in edges.values():
  for i in fs:adj[i].update(fs)
 unseen=set(range(n));counts=[]
 while unseen:
  stack=[unseen.pop()];cnt=0
  while stack:
   i=stack.pop();cnt+=1
   for j in adj[i]:
    if j in unseen:unseen.remove(j);stack.append(j)
  counts.append(cnt)
 bb=[[min(v[k] for t in ts for v in t) for k in range(3)],[max(v[k] for t in ts for v in t) for k in range(3)]]
 r=dict(path=path,sha256=hashlib.sha256(b).hexdigest(),format='binary',triangles=n,boundsMm=bb,dimensionsMm=[bb[1][k]-bb[0][k] for k in range(3)],units='Millimeters assumed; STL has no units',edgeAdjacentComponents=len(counts),componentTriangleCounts=sorted(counts,reverse=True),badEdges=sum(len(v)!=2 for v in edges.values()))
 if path==str(p):
  r.update(identifier='White Cat Kit Card / Printables 865769',source='https://github.com/mkasberg/white-cat-kit-card',download=url,author='Mike Kasberg',license='CC BY 4.0',rawMeshRedistributed=False,physicalPrintTested=False)
  sections=[];svg=[]
  for ii,z in enumerate([.1,.215,1.59]):
   segments=[]
   for t in ts:
    pts=[]
    for j in range(3):
     a,c=t[j],t[(j+1)%3]
     if (a[2]<=z<c[2]) or (c[2]<=z<a[2]):
      f=(z-a[2])/(c[2]-a[2]);pts.append([a[k]+f*(c[k]-a[k]) for k in range(2)])
    if len(pts)==2:segments.append(pts)
   segadj=collections.defaultdict(list)
   for a,c in segments:
    aa=tuple(round(x,4) for x in a);cc=tuple(round(x,4) for x in c);segadj[aa].append(cc);segadj[cc].append(aa)
   un=set(segadj);loops=[]
   while un:
    st=[un.pop()];vs=[]
    while st:
     v=st.pop();vs.append(v)
     for w in segadj[v]:
      if w in un:un.remove(w);st.append(w)
    dims=[max(v[k] for v in vs)-min(v[k] for v in vs) for k in range(2)]
    if abs(dims[0]-4.5)<.03 and abs(dims[1]-1.7)<.03:loops.append(dict(dimensionsMm=dims,minimumMm=[min(v[k] for v in vs) for k in range(2)]))
   sections.append(dict(zMm=z,segments=len(segments),measuredSocketLoops=loops))
   svg.append('<g transform="translate('+str(ii*200)+' 25)"><text x="5" y="-10">Z='+str(z)+' mm</text>'+''.join('<path d="M %f %f L %f %f"/>'%(a[0],a[1],c[0],c[1]) for a,c in segments)+'</g>')
  (out/'evidence/reference-sections.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 210"><rect width="600" height="210" fill="white"/><g fill="none" stroke="#333" stroke-width=".25">'+''.join(svg)+'</g></svg>')
  zplanes=collections.Counter(round(v[2],2) for t in ts for v in t)
  sheet=max((z for z in zplanes if z>.3),key=zplanes.get)
  runner=sorted(z for z in zplanes if .205<=z<=.225)
  sockets=[loop['dimensionsMm'] for section in sections for loop in section['measuredSocketLoops']]
  assert sockets and abs(sheet-1.6)<.001 and runner==[.21,.22]
  r.update(sections=sections,measuredSheetMm=sheet,measuredSocketMm=sockets[0],runnerTopMm=runner,zPlanes=dict(zplanes),sourceWarning='Nonmanifold / duplicate and zero-area source triangles. No source triangles reused. Sections inspected, no repair or physical-print claim.')
 else:r['decision']='Rejected: MX-specific switch interface unrelated to a sheet kit' if 'keycap' in path else 'Rejected: interlocked 8mm fabric is not sheet construction'
 reports.append(r)
(out/'reference-analysis-raw.json').write_text(json.dumps(dict(localCandidates=reports[:2],selected=reports[2]),indent=2))
print(json.dumps([{k:v for k,v in r.items() if k not in ['componentTriangleCounts','zPlanes']} for r in reports],indent=2))
