"""Inspection only; run with trimesh/numpy/matplotlib installed. Raw source remains outside repo."""
import urllib.request,hashlib,json,sys
import trimesh,numpy as np
from pathlib import Path
p=Path(sys.argv[1] if len(sys.argv)>1 else '/tmp/picnic-reference.stl')
url='https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl'
if not p.exists():urllib.request.urlretrieve(url,p)
m=trimesh.load(p,force='mesh');parts=m.split(only_watertight=False)
print(json.dumps({'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'boundsMm':m.bounds.tolist(),'dimensionsMm':m.extents.tolist(),'triangles':len(m.faces),'edgeAdjacentComponents':len(parts),'componentFaces':[len(c.faces) for c in parts],'watertight':m.is_watertight},indent=2))
import matplotlib;matplotlib.use('Agg');import matplotlib.pyplot as plt
fig,axs=plt.subplots(1,3,figsize=(15,5))
for ax,z in zip(axs,[.1,.5,1.59]):
 for line in m.section([0,0,1],[0,0,z]).discrete:ax.plot(line[:,0],line[:,1],linewidth=.35)
 ax.set_aspect('equal');ax.set_title('Z='+str(z)+' mm')
fig.savefig('evidence/reference-sections.png',dpi=140)
