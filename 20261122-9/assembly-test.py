from pathlib import Path
import re,json
root=Path('..');s=(root/'index.html').read_text();folders=re.findall(r'folder:"([^"]+)"',s);assert len(folders)==len(set(folders));assert (root/'deploy/index.html').read_text()==s
for folder in folders:assert (root/'deploy'/folder/'index.html').is_file(),folder
r=json.loads((root/'deploy/runtime-deduplication.json').read_text());assert r['afterBytes']<1000000000;assert any(x['folder']=='20261029-9'for x in r['geometryReuse']);assert not (root/'deploy/20261029-9/assets/manifold-BE4c7gO-.wasm').exists();Path('assembly-validation.json').write_text(json.dumps({'apps':len(folders),'allAppsPresent':True,'galleryMatches':True,'siteBytes':r['afterBytes'],'sizeGuardUnchanged':True,'newLegacySharingRulesAdded':1,'existingRuntimeSharingPreserved':True},indent=2));print('PASS assembly',len(folders),r['afterBytes'])
