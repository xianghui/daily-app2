from pathlib import Path
import struct,hashlib,json,collections,sys
p=Path(sys.argv[1] if len(sys.argv)>1 else '/tmp/grid-reference.stl');b=p.read_bytes();n=struct.unpack_from('<I',b,80)[0];assert len(b)==84+50*n
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
r={'identifier':'Printables 865769 / White Cat Kit Card','author':'Mike Kasberg (mkasberg)','url':'https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card','repository':'https://github.com/mkasberg/white-cat-kit-card','license':'CC BY 4.0, verified repository LICENSE; https://creativecommons.org/licenses/by/4.0/','sha256':hashlib.sha256(b).hexdigest(),'format':'binary STL','bytes':len(b),'triangles':n,'unitAssumption':'mm (STL has no units); corroborated by source OpenSCAD sheet thickness','boundsMm':[mi,ma],'dimensionsMm':[c-a for a,c in zip(mi,ma)],'connectedComponents':len(components),'components':sorted(components,key=lambda c:-c['triangles'])[:3],'sourceClosed':all(len(x)==2 for x in edge.values()),'defect':'Source has nonmanifold/coplanar facet artifacts, detected by edge incidence; edge-adjacency welding yields two components. Original not repaired, bundled or exported. Design-reference inspection only.','meshSections':sections,'measuredSource':{'sheetZPlanesMm':[0,1.6],'perimeterRailWidthMm':1.6,'thinBridgeZLevelsMm':[0,.21,.22],'maxDetailZmm':ma[2]}, 'generatorMapping':{'preserved': 'Measured 1.6 mm sheet, carrier and low-profile breakaway bridge structure.', 'newDesign': 'Original six-divider lattice: three up-slot lower panels, three down-slot upper panels; nine half-lap joints, 24 side tabs.', 'proposedNotMeasured': '2.4 mm frame/spine; panel1.6–2.4, slot width thickness+0.15–0.45; half-depth plus half gap, 0.4–0.6 high tabs. These are new printer-dependent fits, not source joint dimensions.', 'parameterLinks': {'thickness': 'source1.6 → default1.6; adjustable1.6–2.4', 'frame': 'source1.6 → reinforced2.4', 'tabs': 'source .21/.22 → .4–.6 high, .8–1.4 wide', 'lattice': 'pitch14–18, margin16–18, height24–32; L=2pitch+2margin; slots at −pitch,0,+pitch', 'import': 'one lower divider outer end at x=−pitch−margin/2, radius6.5; depth well .2; engraving≤.6; outside joints'}, 'rawMeshRedistributed': False, 'physicalPrintTested': False},'localSearch':'Searched all STL files under /Volumes/ExternalHD/3d_printing_apps/ first; kit_card_generator, kit_card_generator_animals and kit_card_generator_robot have no local STL files. Existing clicker/slider/socket/link meshes are not suitable kit-card construction references. Used publicly licensed alternative, not arbitrary switch geometry.','downloadUrl':'https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl','corroboration':'Read repository README, CC BY 4.0 LICENSE, kit_frame.scad and white-cat-kit-card.scad: thickness=1.6; frame subtracts 1.6 mm inset; wire uses 0.6 mm join width and layer=0.2. Source mesh cross-sections and measured vertex histogram, not only source text, ground decisions.'}
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
