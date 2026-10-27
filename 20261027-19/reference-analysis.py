from pathlib import Path
import struct,hashlib,json,collections
p=Path('/tmp/white-cat-kit-reference.stl');b=p.read_bytes();n=struct.unpack_from('<I',b,80)[0];assert len(b)==84+50*n
tri=[list(zip(*[iter(struct.unpack_from('<9f',b,84+50*i+12))]*3)) for i in range(n)]
mi=[min(v[k] for t in tri for v in t) for k in range(3)];ma=[max(v[k] for t in tri for v in t) for k in range(3)]
ids={};edge={};adj=[set() for i in tri]
for i,t in enumerate(tri):
 ix=[]
 for v in t:
  key=tuple(round(x,5) for x in v)
  if key not in ids:ids[key]=len(ids)
  ix.append(ids[key])
 for j in range(3):edge.setdefault(tuple(sorted((ix[j],ix[(j+1)%3]))),[]).append(i)
for faces in edge.values():
 for a in faces:
  adj[a].update(faces)
seen=set();components=[]
for i in range(n):
 if i in seen:continue
 q=[i];seen.add(i);faces=[]
 while q:
  f=q.pop();faces.append(f)
  for k in adj[f]:
   if k not in seen:seen.add(k);q.append(k)
 vol=0
 for f in faces:
  a,c,d=tri[f];vol+=(a[0]*(c[1]*d[2]-c[2]*d[1])-a[1]*(c[0]*d[2]-c[2]*d[0])+a[2]*(c[0]*d[1]-c[1]*d[0]))/6
 components.append({'triangles':len(faces),'volumeMm3':vol})
sections=[];svg=['<svg xmlns="http://www.w3.org/2000/svg" width="1140" height="420" viewBox="0 0 570 210"><rect width="570" height="210" fill="#e7e9f1"/>']
for si,z in enumerate([.1,.5,1.59]):
 lines=[]
 for t in tri:
  pts=[]
  for j in range(3):
   a,c=t[j],t[(j+1)%3]
   if (a[2]<z<=c[2]) or (c[2]<z<=a[2]):
    r=(z-a[2])/(c[2]-a[2]);pts.append([a[k]+r*(c[k]-a[k]) for k in range(2)])
  if len(pts)==2:lines.append(pts)
 sections.append({'heightMm':z,'intersectionSegments':len(lines)})
 svg.append(f'<text x="{si*190+5}" y="12" font-family="sans-serif" font-size="8">Actual mesh section Z={z} mm</text><g transform="translate({si*190+5},200) scale(1,-1)" fill="none" stroke="#bb3860" stroke-width=".3">')
 for a,c in lines:svg.append(f'<path d="M{a[0]:.4f},{a[1]:.4f} L{c[0]:.4f},{c[1]:.4f}"/>')
 svg.append('</g>')
svg.append('</svg>');Path('reference-sections.svg').write_text(''.join(svg))
r={'identifier':'Printables 865769 / White Cat Kit Card','author':'Mike Kasberg (mkasberg)','url':'https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card','repository':'https://github.com/mkasberg/white-cat-kit-card','license':'CC BY 4.0, verified repository LICENSE; https://creativecommons.org/licenses/by/4.0/','sha256':hashlib.sha256(b).hexdigest(),'format':'binary STL','bytes':len(b),'triangles':n,'unitAssumption':'mm (STL has no units); corroborated by source OpenSCAD sheet thickness','boundsMm':[mi,ma],'dimensionsMm':[c-a for a,c in zip(mi,ma)],'connectedComponents':len(components),'components':sorted(components,key=lambda c:-c['triangles'])[:3],'sourceClosed':all(len(x)==2 for x in edge.values()),'defect':'Source has nonmanifold/coplanar facet artifacts, detected by edge incidence; edge-adjacency welding yields two components. Original not repaired, bundled or exported. Design-reference inspection only.','meshSections':sections,'measuredSource':{'sheetZPlanesMm':[0,1.6],'perimeterRailWidthMm':1.6,'thinBridgeZLevelsMm':[0,.21,.22],'maxDetailZmm':ma[2]},'generatorMapping':{'preserved':'1.6 mm default sheets, bed-flat assembly parts within perimeter, true sacrificial bridge connectivity and cutter access away from interfaces.','newDesign':'Opposing bottom/top half-lap rocket panels and a cruciform-tenon plinth. No source hull or clips. Reinforced frame 2.4 mm. Twelve accessible side tabs.','proposedNotMeasured':'Sheet thickness 1.6–2.4; slot total allowance 0.1–0.4; tenon half-width 6–9; tabs 0.8–1.4 wide, 0.4–0.8 high. All millimeters. Fits require material/printer calibration.','imports':'Isolated plinth medallion at X=16; rocket cross-slot at X=-9. Exact personalized plinth is unioned into card; no imported geometry reaches the half-laps.','rawMeshRedistributed':False,'physicalPrintTested':False}}
zCounts=collections.Counter(round(v[2],5) for t in tri for v in t)
r['measuredSource']['vertexZHistogramMostCommon']=zCounts.most_common(20)
r['measuredSource']['thinBridgeVertexCounts']={str(z):zCounts[z] for z in [.21,.22]}
rail=[]
for t in tri:
 for j in range(3):
  a,c=t[j],t[(j+1)%3]
  if (a[1]<100<=c[1]) or (c[1]<100<=a[1]):
   f=(100-a[1])/(c[1]-a[1]);pt=[a[k]+f*(c[k]-a[k]) for k in range(3)]
   if -.1<pt[0]<2:rail.append([round(x,5) for x in pt])
r['measuredSource']['leftFrameY100SectionUniquePoints']=sorted(set(tuple(v) for v in rail))
assert zCounts[1.6]>20000 and zCounts[.22]>0
Path('reference-analysis.json').write_text(json.dumps(r,indent=2));print(json.dumps({k:r[k] for k in ['sha256','dimensionsMm','connectedComponents','sourceClosed']}))
