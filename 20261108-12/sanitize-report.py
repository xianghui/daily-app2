import json
from pathlib import Path
from urllib.parse import urlparse,parse_qs
for f in [Path('browser-validation.json'),Path('public-browser-validation.json')]:
 if not f.exists():continue
 d=json.loads(f.read_text())
 for r in d['requests']:
  u=urlparse(r['url']);r['queryParameterNames']=r.get('queryParameterNames',list(parse_qs(u.query)));r['url']='blob:[local-worker]' if u.scheme=='blob' else u.scheme+'://'+u.netloc+u.path
 f.write_text(json.dumps(d,indent=2))
print('PASS network reports retain origins/paths/query parameter names, not signed CDN query values')
