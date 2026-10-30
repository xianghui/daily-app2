"""Read-only mesh measurements; raw reference is never bundled. Run with /tmp/kit-analysis-venv/bin/python."""
import trimesh,numpy as np,hashlib,json
from pathlib import Path
import matplotlib;matplotlib.use('Agg')
import matplotlib.pyplot as plt
p=Path('/tmp/corner-return-reference.stl');m=trimesh.load(p,force='mesh');pcs=m.split(only_watertight=False)
fig,axes=plt.subplots(1,3,figsize=(15,5));sections=[];sockets=[]
for ax,z in zip(axes,[.1,.5,1.59]):
 sec=m.section([0,0,1],[0,0,z]);sections.append({'zMm':z,'loops':len(sec.discrete)})
 for line in sec.discrete:
  ax.plot(line[:,0],line[:,1],lw=.35)
  d=np.ptp(line,axis=0)
  if z==1.59 and abs(d[0]-4.5)<.01 and abs(d[1]-1.7)<.01:sockets.append({'boundsMm':[line.min(axis=0).tolist(),line.max(axis=0).tolist()],'dimensionsMm':d.tolist()})
 ax.set_aspect('equal');ax.set_title(f'Actual mesh Z={z} mm')
Path('evidence').mkdir(exist_ok=True);fig.savefig('evidence/reference-sections.png',dpi=140)
z,c=np.unique(np.round(m.vertices[:,2],3),return_counts=True)
r={'identifier':'White Cat Kit Card / Printables 865769','author':'Mike Kasberg','source':'https://github.com/mkasberg/white-cat-kit-card','download':'https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl','license':'CC BY 4.0 https://creativecommons.org/licenses/by/4.0/','sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'format':'binary STL','triangles':len(m.faces),'dimensionsMm':m.extents.tolist(),'boundsMm':m.bounds.tolist(),'units':'mm assumed; corroborated by source sheet dimensions, STL contains no units','edgeAdjacentComponents':len(pcs),'componentTriangles':[len(x.faces) for x in pcs],'watertight':m.is_watertight,'sections':sections,'measured':{'sheetPlanesMm':[0,1.6],'socketLoops':sockets,'lowRunnerZMm':[.21,.22],'zPlaneCounts':dict(zip(map(str,z.tolist()),c.tolist()))},'sourceDefects':'27 edge-adjacent components, nonwatertight. Used as design reference only; original CSG reconstruction, no automatic repair.','rawMeshRedistributed':False,'physicalPrintTested':False,'localCandidates':[],'visualReference':{'path':'/Volumes/ExternalHD/3d_printing_apps/keycap_generator2','readOnly':True,'inspected':['README.md','src/styles.css','src/App.tsx','src/Viewer.tsx','src/worker.ts','src/export.ts','src/imageTrace.ts','src/geometry/stl.ts'],'patterns':['374px left control rail','preview-first phone','tactile buttons','checkerboard cutout','saved theme','worker and current-result export gating']}}
for path,reason in [('/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl','Switch cavities and stem, not suitable sheet kit reference'),('/Volumes/ExternalHD/3d_printing_apps/fidget_fabric_generator/public/templates/diamond-link.stl','8 mm interlocking link; not a sheet carrier or assembly interface')]:
 q=Path(path);v=trimesh.load(q,force='mesh');r['localCandidates'].append({'path':path,'sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'triangles':len(v.faces),'dimensionsMm':v.extents.tolist(),'components':len(v.split(only_watertight=False)),'reasonRejected':reason})
Path('reference-measurements.json').write_text(json.dumps(r,indent=2));print('Reference measured; compare with reference-analysis.json for design mapping.')
