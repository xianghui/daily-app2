import trimesh,numpy as np,hashlib,json,matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from pathlib import Path
out=Path('/Volumes/ExternalHD/daily_app2/20261104-23'); (out/'evidence').mkdir(exist_ok=True)
paths=['/Volumes/ExternalHD/3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl','/Volumes/ExternalHD/3d_printing_apps/fidget_fabric_generator/public/templates/diamond-link.stl','/tmp/seven-reference.stl']
reports=[]
fig,axs=plt.subplots(1,3,figsize=(15,5))
for n,path in enumerate(paths):
 m=trimesh.load_mesh(path); cs=m.split(only_watertight=False)
 r={'path':path,'sha256':hashlib.sha256(Path(path).read_bytes()).hexdigest(),'triangles':len(m.faces),'boundsMm':m.bounds.tolist(),'dimensionsMm':m.extents.tolist(),'edgeAdjacentComponents':len(cs),'closedManifold':bool(m.is_watertight),'units':'mm assumed; STL has no unit metadata'}
 if n<2:r['rejected']='MX switch socket and stem; unrelated to sheet kit' if n==0 else 'Eight-mm interlocking fabric link; unrelated to planar card joints'
 else:
  r.update(identifier='White Cat Kit Card / Printables 865769',author='Mike Kasberg',source='https://github.com/mkasberg/white-cat-kit-card',license='CC BY 4.0',licenseVerifiedAgainst='https://raw.githubusercontent.com/mkasberg/white-cat-kit-card/main/LICENSE',licenseFileSHA256='4d2b8d07bae2cd142601f3e9abbef0d16b39f5020a539217d061aa082161a224',download='https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl',rawMeshRedistributed=False,physicalPrintTested=False)
  r['newGeometry']={'mechanism':'Three upright tapered beams with cyclic A-over-B-over-C bearings, gathered radially then lowered as a cluster into three source-fit blind sockets','parametersMm':{'beamLength':[76,100],'crossingRadius':[10,14],'beamDepth':[8,12],'sheet':[1.6,2.4],'totalSocketClearance':[.1,.3]},'equations':'a=sqrt(3)*r; slope=H/(2*a); crossing lower/upper surfaces coincide at centre lines before proposed seat relief','notches':'Actual next-beam solid transformed into local coordinates, clipped to sheet slab, projected and extruded through thickness before subtraction. Not a convex hull. .05 mm vertical cutter allowance is proposed; projected seats can touch at boundary edges. Adhesive required.','assemblyPath':'Lift all tongues clear, contract beams simultaneously in their outward-normal radial directions, lower whole cluster. Independent vertical insertion is intentionally not claimed.','printing':'All four parts print flat; projected bearing cuts remove undercuts; sixteen low runners hold one connected carrier.'}
  r['components']=[{'triangles':len(c.faces),'boundsMm':c.bounds.tolist(),'closed':bool(c.is_watertight)} for c in cs]
  r['sections']=[]
  for ax,z in zip(axs,[.1,.215,1.59]):
   sec=m.section([0,0,1],[0,0,z]); loops=sec.discrete; boxes=[]
   for p in loops:
    ax.plot(p[:,0],p[:,1],lw=.4); size=np.ptp(p,axis=0)
    if abs(size[0]-4.5)<.02 and abs(size[1]-1.7)<.02:boxes.append({'min':p.min(axis=0).tolist(),'max':p.max(axis=0).tolist(),'dimensionsMm':size.tolist()})
   r['sections'].append({'zMm':z,'loops':len(loops),'socketLoops':boxes});ax.set_aspect('equal');ax.set_title(f'Actual source section Z={z} mm');ax.set_xlabel('X / mm');ax.set_ylabel('Y / mm')
  counts=np.unique(np.round(m.vertices[:,2],2),return_counts=True);r['zPlanes']={str(z):int(c) for z,c in zip(*counts)}
  r['measuredDecisions']={'sourceSheetMm':1.6,'sourceSocketMm':[4.5,1.7],'runnerTopsMm':[.21,.22],'reconstruction':'Original reciprocal-roof kit: source 1.60 mm sheet and 4.50 x 1.70 mm sockets map to 4.40 x 1.60 mm tongues with .10 mm proposed total clearance. Sheet expands 1.6-2.4 mm and clearance .10-.30 mm. Source .21-.22 mm runners strengthened to .4-.6 mm. New blind sockets have .40 mm floors and .20 mm tip relief. Three cyclic tapered beams, bearing notches, central engraved dock and four-part layout are original. Source mesh has nonmanifold artifacts; it is neither repaired nor redistributed. Proposed values require physical calibration.'}
 reports.append(r)
fig.tight_layout();fig.savefig(out/'evidence/reference-sections.png',dpi=150)
(out/'reference-analysis.json').write_text(json.dumps({'localCandidates':reports[:2],'selected':reports[2]},indent=2));print('Reference parsed; source measurements and sections saved.')
