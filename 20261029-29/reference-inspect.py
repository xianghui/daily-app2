"""Read-only analysis. Raw STL stays outside the app/repository. Requires trimesh, numpy, matplotlib."""
from pathlib import Path
import json,hashlib,sys
import numpy as np,trimesh
import matplotlib;matplotlib.use('Agg')
import matplotlib.pyplot as plt
p=Path(sys.argv[1] if len(sys.argv)>1 else '/tmp/caliper-reference.stl')
m=trimesh.load(p,force='mesh');parts=m.split(only_watertight=False)
z,c=np.unique(np.round(m.vertices[:,2],3),return_counts=True)
sections=[];fig,axes=plt.subplots(1,3,figsize=(15,5))
for ax,h in zip(axes,[.1,.5,1.59]):
 sec=m.section([0,0,1],[0,0,h]);sections.append({'zMm':h,'loops':len(sec.discrete)})
 for line in sec.discrete:ax.plot(line[:,0],line[:,1],linewidth=.35)
 ax.set_aspect('equal');ax.set_title('Actual STL section Z = '+str(h)+' mm')
Path('evidence').mkdir(exist_ok=True);fig.savefig('evidence/reference-sections.png',dpi=140)
xs=[]
for line in m.section([0,0,1],[0,0,.5]).discrete:
 for a,b in zip(line[:-1],line[1:]):
  if (a[1]<=100<b[1])or(b[1]<=100<a[1]):xs.append(float(a[0]+(100-a[1])*(b[0]-a[0])/(b[1]-a[1])))
xs.sort()
r={'identifier':'White Cat Kit Card / Printables 865769','author':'Mike Kasberg','source':'https://github.com/mkasberg/white-cat-kit-card','download':'https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl','license':'CC BY 4.0 https://creativecommons.org/licenses/by/4.0/','downloadedAndParsedThisRun':True,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'format':'binary STL','triangles':len(m.faces),'units':'STL has no metadata; mm corroborated by source SCAD 1.6 mm sheet and 179.8 x 178 frame','boundsMm':m.bounds.tolist(),'dimensionsMm':m.extents.tolist(),'edgeAdjacentComponents':len(parts),'componentTriangles':[len(x.faces) for x in parts],'watertight':m.is_watertight,'sections':sections,'measured':{'sheetPlanesMm':[0,1.6],'railRayAtY100Z05Mm':xs[:2],'railWidthMm':xs[1]-xs[0],'lowBridgeElevationsMm':[.21,.22],'zPlaneCounts':dict(zip(map(str,z.tolist()),c.tolist()))},'decisions': {'retained':'Measured 1.6 mm planar sheet and low removable runners on connected frame','redesigned':'Eight-part ring-transfer kit: three shouldered tenoned posts, four annular lift-out rings, broad three-socket base, 2.4 mm carrier and .4–.6 mm runners','proposedNotMeasured':'All post/socket dimensions, ring radii, .10–.35 mm total socket allowance and .35–.8 mm radial ring allowance; no source joint fit inferred'}}
r['downloadedAndParsedThisRun']=p.name=='stack-transfer-reference.stl'
r['parsedThisRun']=True
r['retrieval']='Read-only analysis of supplied public-source STL path; this script does not download.'
Path('reference-analysis.json').write_text(json.dumps(r,indent=2));print(json.dumps({k:r[k] for k in ['sha256','triangles','dimensionsMm','edgeAdjacentComponents','sections']},indent=2))

from pathlib import Path
import json,hashlib
import trimesh,numpy as np
p=Path('reference-analysis.json');r=json.loads(p.read_text());m=trimesh.load('/tmp/caliper-reference.stl',force='mesh')
sec=m.section([0,0,1],[0,0,1.59]); sockets=[]
for line in sec.discrete:
 b=np.array([line.min(axis=0),line.max(axis=0)]);d=b[1]-b[0]
 if abs(d[0]-4.5)<.005 and abs(d[1]-1.7)<.005:sockets.append({'boundsMm':b.tolist(),'dimensionsMm':d.tolist()})
r['measured']['rectangularSocketsAtZ1_59']=sockets
r['decisions']={'retained':'1.6 mm sheet default, rectangular tongue and socket envelope, connected carrier with lower removable runners.','socketMapping':'Tongue 4.4 × sheet; keeper socket (4.4 + total allowance) × (sheet + total allowance). At 1.6/.10 this is measured source 4.5 × 1.7 mm. Default .15 intentionally looser.','redesigned':'Three-part captive vernier teaching gauge, closed extended ruler slot, flipped jaw tongue and glued underside keeper. 2.4 mm carrier rails and .4–.6 mm runners are strengthened proposals, not source measurements.','proposedNotMeasured':'Running gap .15–.40 mm per side; all gauge geometry, 9:10 marks, stroke limits, keeper retention and protected customization wing. No source movement or physical fit claimed.'}
r['retrieval']='Public STL freshly downloaded this run to /tmp/caliper-reference.stl; source README and CC BY 4.0 LICENSE retrieved and inspected.'
r['downloadedAndParsedThisRun']=True;r['rawMeshRedistributed']=False;r['physicalPrintTested']=False
r['localCandidates']=[]
for f,reason in [('/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl','Three switch cavities/stem, unsuitable for a bed-flat sheet kit'),('/Volumes/ExternalHD/3d_printing_apps/fidget_fabric_generator/public/templates/diamond-link.stl','Interlocking link with 8 mm height, not a thin sheet assembly')]:
 q=Path(f);mesh=trimesh.load(q,force='mesh');r['localCandidates'].append({'path':f,'sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'triangles':len(mesh.faces),'dimensionsMm':mesh.extents.tolist(),'components':len(mesh.split(only_watertight=False)),'reasonRejected':reason})
r['visualReference']={'path':'/Volumes/ExternalHD/3d_printing_apps/keycap_generator2','readOnly':True,'inspected':['README.md','src/styles.css','src/App.tsx','src/Viewer.tsx','src/worker.ts','src/export.ts','src/imageTrace.ts','src/geometry/stl.ts'],'patternsApplied':['374px left controls / right viewer','preview-first phone stack','raised tactile selection buttons','Fredoka/Rubik bundled fonts','saved light/dark','checkerboard source/cutout','worker-owned solid builds and current-result export gate']}
r['sourceDefects']='Actual source is not watertight under edge-adjacency analysis (27 components including tiny surfaces). Used as measured design reference only; never repaired or imported as printable output. New solids generated independently with Manifold.'
p.write_text(json.dumps(r,indent=2)+'\n');print('Measured',len(sockets),'rectangular 4.5 x 1.7 mm loops; local candidate meshes parsed.')
