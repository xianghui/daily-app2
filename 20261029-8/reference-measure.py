from pathlib import Path
import json,hashlib,numpy as np,trimesh
m=trimesh.load('/tmp/keel-reference.stl',force='mesh');v=m.vertices
parts=m.split(only_watertight=False)
z,c=np.unique(np.round(v[:,2],3),return_counts=True)
report={'identifier':'White Cat Kit Card / Printables 865769','author':'Mike Kasberg','source':'https://github.com/mkasberg/white-cat-kit-card','download':'https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl','license':'CC BY 4.0','sha256':hashlib.sha256(Path('/tmp/keel-reference.stl').read_bytes()).hexdigest(),'format':'binary STL','units':'STL unitless, millimeters corroborated by source SCAD default sheet 1.6 and frame 179.8 x 178','triangles':len(m.faces),'dimensionsMm':m.extents.tolist(),'edgeConnectedComponents':len(parts),'componentTriangles':[len(p.faces) for p in parts],'watertight':m.is_watertight,'zPlanesMm':dict(zip(map(str,z.tolist()),c.tolist())),'measuredFeatures':{'sheetPlanesMm':[0,1.6],'carrierRailWidthMm':1.6,'lowBridgeElevationsMm':[.21,.22]},'decisions':{'sheetDefaultMm':1.6,'carrierRailRedesignedMm':2.4,'runnerThicknessProposedMm':[.4,.6],'runnerWidthProposedMm':[.8,1.4],'slotAllowanceProposedMm':[.1,.35],'assembly':'Original graded hull bulkheads, complementary half-laps, keel tongues and plinth seats; no source interfaces copied','rawSourceRedistributed':False,'repairClaim':False,'physicalPrintTested':False},'inspection':'Actual mesh sections z=0.1/0.5/1.59 mm; inspected as construction reference, not a printable input because source has 25 coplanar two-face artifacts'}
section=m.section([0,0,1],[0,0,.5]); xs=[]
for line in section.discrete:
 for a,b in zip(line[:-1],line[1:]):
  if (a[1]<=100<b[1]) or (b[1]<=100<a[1]):xs.append(float(a[0]+(100-a[1])*(b[0]-a[0])/(b[1]-a[1])))
xs.sort();report['measuredFeatures']['carrierRayAtY100Z05Mm']=xs[:2];report['measuredFeatures']['carrierRailWidthMm']=xs[1]-xs[0]
Path('reference-analysis.json').write_text(json.dumps(report,indent=2))
print(json.dumps({k:report[k] for k in ['triangles','dimensionsMm','edgeConnectedComponents','zPlanesMm']},indent=2))
