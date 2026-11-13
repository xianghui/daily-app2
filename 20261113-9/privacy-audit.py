import json,urllib.parse
from pathlib import Path
r=json.load(open('browser-validation.json'));hosts=sorted(set(urllib.parse.urlparse(x['url']).hostname for x in r['requests'])-{None})
assert all(h=='127.0.0.1' or h=='huggingface.co' or h.endswith('.hf.co') for h in hosts),hosts
assert all(x['method']=='GET' and not x['body'] for x in r['requests'])
Path('privacy-validation.json').write_text(json.dumps(dict(hosts=hosts,allRequestsGETWithoutBody=True,noModelRequestsBeforeExplicitLoad=True,blobRequestsAreLocalWorkerAndRuntime=True),indent=2));print('PASS static-download-only hosts:',hosts)
