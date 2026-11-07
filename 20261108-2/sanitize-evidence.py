from pathlib import Path
import json
for f in [Path('browser-validation.json'),Path('public-evidence/browser-validation.json')]:
 if not f.exists():continue
 d=json.loads(f.read_text())
 for r in d['requests']:r['url']=r['url'].split('?')[0]
 d['requestQueryPolicy']='Download redirect query strings omitted; all methods/body checks used original in-memory requests.'
 f.write_text(json.dumps(d,indent=2))
print('Evidence retains download hosts/paths, omits temporary signed redirect query strings.')
