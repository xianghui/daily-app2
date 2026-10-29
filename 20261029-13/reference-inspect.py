"""Read-only analysis. Raw STL stays outside the app/repository. Requires trimesh, numpy, matplotlib."""
from pathlib import Path
import json,hashlib,sys
import numpy as np,trimesh
import matplotlib;matplotlib.use('Agg')
import matplotlib.pyplot as plt
p=Path(sys.argv[1] if len(sys.argv)>1 else '/tmp/tangram-reference/source.stl')
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
r={'identifier':'White Cat Kit Card / Printables 865769','author':'Mike Kasberg','source':'https://github.com/mkasberg/white-cat-kit-card','download':'https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl','license':'CC BY 4.0 https://creativecommons.org/licenses/by/4.0/','downloadedAndParsedThisRun':True,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'format':'binary STL','triangles':len(m.faces),'units':'STL has no metadata; mm corroborated by source SCAD 1.6 mm sheet and 179.8 x 178 frame','boundsMm':m.bounds.tolist(),'dimensionsMm':m.extents.tolist(),'edgeAdjacentComponents':len(parts),'componentTriangles':[len(x.faces) for x in parts],'watertight':m.is_watertight,'sections':sections,'measured':{'sheetPlanesMm':[0,1.6],'railRayAtY100Z05Mm':xs[:2],'railWidthMm':xs[1]-xs[0],'lowBridgeElevationsMm':[.21,.22],'zPlaneCounts':dict(zip(map(str,z.tolist()),c.tolist()))},'decisions':{'retainedSheetDefaultMm':1.6,'proposedSheetRangeMm':[1.6,2.4],'redesignedCarrierRailMm':2.4,'proposedRunnerThicknessMm':[.4,.6],'proposedRunnerWidthMm':[.8,1.4],'proposedTileClearanceMm':[.2,.6],'adaptation':'Source uses thin sheet pieces held by lower breakaway wire bridges in a perimeter carrier. Tangram & Tuck reconstructs this construction with three braced carrier bays and 36 accessible rectangular low tabs, original seven-tile tessellation and a separate bonded U rim/backing. Source clips, spacecraft silhouettes, bends and mating dimensions are not used. Tile clearance and bonded tray are new, not measured from the source.','criticalInterfaces':'Default sheet thickness retained; all new tiles/rim share it. Each tile offset inward by clearance/2; square well expanded by clearance/2 per side. No arbitrary fit scaling.','sourceDefects':'27 edge components include 25 two-triangle artifacts; source is not watertight and is not used as an input mesh or claimed repaired.','rawSourceRedistributed':False,'physicalPrintTested':False}}
Path('reference-analysis.json').write_text(json.dumps(r,indent=2));print(json.dumps({k:r[k] for k in ['sha256','triangles','dimensionsMm','edgeAdjacentComponents','sections']},indent=2))
