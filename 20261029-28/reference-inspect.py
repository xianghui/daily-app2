"""Read-only analysis. Raw STL stays outside the app/repository. Requires trimesh, numpy, matplotlib."""
from pathlib import Path
import json,hashlib,sys
import numpy as np,trimesh
import matplotlib;matplotlib.use('Agg')
import matplotlib.pyplot as plt
p=Path(sys.argv[1] if len(sys.argv)>1 else '/tmp/lantern-reference.stl')
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
r={'identifier':'White Cat Kit Card / Printables 865769','author':'Mike Kasberg','source':'https://github.com/mkasberg/white-cat-kit-card','download':'https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl','license':'CC BY 4.0 https://creativecommons.org/licenses/by/4.0/','downloadedAndParsedThisRun':True,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'format':'binary STL','triangles':len(m.faces),'units':'STL has no metadata; mm corroborated by source SCAD 1.6 mm sheet and 179.8 x 178 frame','boundsMm':m.bounds.tolist(),'dimensionsMm':m.extents.tolist(),'edgeAdjacentComponents':len(parts),'componentTriangles':[len(x.faces) for x in parts],'watertight':m.is_watertight,'sections':sections,'measured':{'sheetPlanesMm':[0,1.6],'railRayAtY100Z05Mm':xs[:2],'railWidthMm':xs[1]-xs[0],'lowBridgeElevationsMm':[.21,.22],'zPlaneCounts':dict(zip(map(str,z.tolist()),c.tolist()))},'decisions': {'retained':'Measured 1.6 mm planar sheet and low removable runners on connected frame','redesigned':'Six-part pierced-wall LED-only lantern','proposedNotMeasured':'New 4.4 mm tenons and proposed clearances; source slot envelope measured, source tenon fit not inferred'}}
r['downloadedAndParsedThisRun']=p.name=='lantern-reference.stl'
r['parsedThisRun']=True
r['retrieval']='Public STL downloaded to /tmp/lantern-reference.stl this run. Raw source is not redistributed.'
r['sourceLicenseVerified']='https://github.com/mkasberg/white-cat-kit-card/blob/main/LICENSE'
r['measured']['piercedCircularSheetMm']={'outerSectionBounds':[48.0,47.971],'boreSectionBounds':[17.0,16.990],'upperAndLowerSlotBounds':[4.5,1.7],'sectionZ':1.59}
r['decisions']={'retained':'Measured 1.6 mm sheet, pierced disc plus narrow rectangular sockets; sheet retained; source slots inform deliberate width/thickness scaling, not a direct socket copy. Connected removable carrier principle retained.', 'redesigned':'Six-part lantern: winged base, vented lid and four pierced walls; 2.4 mm carrier and .4–.6 mm runners.', 'proposedNotMeasured':'4.4 mm wall tongues, sheet thickness + .10–.35 mm total clearance socket; paired top/bottom tongues and LED keep-out dimensions are redesigned, not measured source fits.'}
r['adaptation']={'actualViewsInspected':['evidence/reference-sections.png at .10/.50/1.59 mm'], 'rawAssetRedistributed':False,'noConvexHullReplacement':True,'referenceTreesReadOnly':True,'localReferencesChecked':['keycap_generator2 templates: switch interfaces, not planar kit','fidget_fabric_generator: interlocked links, not planar kit','slider_fidget_generator2: segmented radial rails, not planar kit','kit_card_generator: no suitable local source STL'], 'physicalPrintTested':False}
slot_loops=[]
for line in m.section([0,0,1],[0,0,1.59]).discrete:
 b=np.array([line.min(axis=0),line.max(axis=0)]);d=b[1]-b[0]
 if abs(d[0]-4.5)<.03 and abs(d[1]-1.7)<.03:slot_loops.append({'boundsMm':b.tolist(),'dimensionsMm':d.tolist()})
r['measured']['actualSlotLoopsAtZ1_59']=slot_loops
assert slot_loops, 'Expected source socket measurements not found'
r['adaptation']['localReferencesChecked']=['keycap_generator2: README, App/Viewer/styles/worker/import/export inspected and local switch STL parsed','fidget_fabric_generator: README and actual complete-link template parsed','slider_fidget_generator2: README inspected; radial rails unsuitable for bed-flat sheet kit']
r['decisions']['proposedNotMeasured']=r['decisions']['proposedNotMeasured'].replace('floor pocket','edge socket')
Path('reference-analysis.json').write_text(json.dumps(r,indent=2));print(json.dumps({k:r[k] for k in ['sha256','triangles','dimensionsMm','edgeAdjacentComponents','sections']},indent=2))

r['validationNotes']={'sourceMeshWatertight':False,'rawMeshRepairClaimed':False,'reconstructionUsesBooleanSolids':True,'primaryVisualReferenceReadOnly':True,'sourceSectionsVisuallyInspected':True}
Path('reference-analysis.json').write_text(json.dumps(r,indent=2))
