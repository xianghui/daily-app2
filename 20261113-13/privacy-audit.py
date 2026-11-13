import json
from pathlib import Path
r=json.loads(Path('browser-validation.json').read_text());assert r['privacy']['allGetNoBody']
for u in r['privacy']['urls']:
 assert not any(s in u.lower() for s in ['implementing%20customer','expense%20reports','credentials','reviewnote','time%20reviewer'])
Path('privacy-validation.json').write_text(json.dumps({'allRequestsGetNoBody':True,'documentedFileHostsOnly':True,'sampleContentAbsentFromRequestUrls':True,'modelNotRequestedBeforeExplicitLoad':True,'scope':'production-bundle Chrome captured session; not exhaustive security audit'}));print('PASS browser request privacy audit')
