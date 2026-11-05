from pathlib import Path
import hashlib,json,struct,trimesh,numpy as np,matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
out=Path(__file__).resolve().parent;(out/'evidence').mkdir(exist_ok=True)
paths=['/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl','/Volumes/ExternalHD/3d_printing_apps/fidget_fabric_generator/public/templates/diamond-link.stl','/tmp/schwarz-lantern-reference.stl']
reports=[];fig,axs=plt.subplots(1,3,figsize=(14,5))
for i,path in enumerate(paths):
 raw=Path(path).read_bytes();m=trimesh.load_mesh(path);cs=m.split(only_watertight=False)
 r=dict(path=path,sha256=hashlib.sha256(raw).hexdigest(),triangles=len(m.faces),dimensionsMm=m.extents.tolist(),boundsMm=m.bounds.tolist(),components=len(cs),closedManifold=bool(m.is_watertight),units='Assumed mm; STL has no units',physicalPrintTested=False)
 if i<2:r['decision']='Rejected: MX socket interface is unrelated to flat triangular panels' if i==0 else 'Rejected: 8 mm high interlocking fabric is not a planar kit reference'
 else:
  r.update(identifier='White Cat Kit Card / Printables 865769',author='Mike Kasberg',source='https://github.com/mkasberg/white-cat-kit-card',license='CC BY 4.0',licenseSHA256=hashlib.sha256((out/'REFERENCE-LICENSE.txt').read_bytes()).hexdigest(),format='binary' if len(raw)==84+50*struct.unpack_from('<I',raw,80)[0] else 'ASCII',rawRedistributed=False,downloadURL='https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl',componentTriangleCounts=[len(c.faces) for c in cs],warning='27 edge-adjacent components include zero-volume degenerate pseudo-components. Source is nonmanifold; no source mesh triangles are reused or claimed repaired.')
  sections=[]
  for ax,z in zip(axs,[.1,.215,1.59]):
   loops=m.section([0,0,1],[0,0,z]).discrete;sockets=[]
   for line in loops:
    ax.plot(line[:,0],line[:,1],linewidth=.4);size=np.ptp(line,axis=0)
    if abs(size[0]-4.5)<.02 and abs(size[1]-1.7)<.02:sockets.append(dict(dimensionsMm=size.tolist(),minimumMm=line.min(axis=0).tolist()))
   sections.append(dict(zMm=z,loops=len(loops),sockets=sockets));ax.set_title('Source section Z='+str(z)+' mm');ax.set_aspect('equal');ax.set_xlabel('X mm');ax.set_ylabel('Y mm')
  r['sections']=sections;r['decisions']=dict(measuredSheetMm=1.6,measuredSocketMm=[4.5,1.7],measuredRunnerTopMm=[.21,.22],retained='Bed-flat 1.6 mm sheet default and real thin removable runners attached to a connected carrier',redesigned='Original 24 triangular panels forming two staggered six-sector bands of a Schwarz lantern; true parametric 3D vertices and local panel flattening. Raised runner thickness .4–.6 mm. Independent seam inset protects tape joints; source sockets are NOT imposed on a taped shell. No raw source redistribution.')
 reports.append(r)
fig.tight_layout();fig.savefig(out/'evidence/reference-sections.png',dpi=150)
(out/'reference-analysis.json').write_text(json.dumps(dict(localCandidates=reports[:2],selected=reports[2]),indent=2));print(json.dumps({k:v for k,v in reports[2].items() if k not in ['sections','componentTriangleCounts']},indent=2))
