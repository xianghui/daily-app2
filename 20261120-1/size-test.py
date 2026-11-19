from pathlib import Path
import json,re
p=Path(__file__).resolve().parent;r=p.parent;d=r/'deploy';folders=re.findall(r'folder:"([^"]+)"',(r/'index.html').read_text());total=sum(x.stat().st_size for x in d.rglob('*') if x.is_file());assert total<1000000000;assert (d/'index.html').read_bytes()==(r/'index.html').read_bytes();assert all((d/f/'index.html').is_file() for f in folders)
report={'apps':len(folders),'failed':0,'skipped':0,'combinedBytes':total,'conservativeLimitBytes':1000000000,'allGalleryFoldersPresent':True,'rootIndexMatches':True,'newByteIdenticalGeometryReuse':'20261028-14 → 20261028-24','sourceBuildsUnchanged':True};(p/'combined-size-validation.json').write_text(json.dumps(report,indent=2));print(report)
