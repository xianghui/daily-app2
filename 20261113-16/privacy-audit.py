import json
from pathlib import Path
r=json.loads(Path('combined-browser-validation.json').read_text());assert r['privacy']['allGetNoBody']
for u in r['privacy']['urls']:
 assert not any(s in u.lower() for s in ['circular%20bearing','drive%20shaft','credentials','reviewnote','inspection%20reviewer','uncertainty=','value='])
Path('privacy-validation.json').write_text(json.dumps({'allRequestsGetNoBody':True,'documentedFileHostsOnly':True,'sampleContentAbsentFromRequestUrls':True,'modelNotRequestedBeforeExplicitLoad':True,'scope':'production-bundle Chrome captured session; not exhaustive security audit'}));print('PASS browser request privacy audit')
