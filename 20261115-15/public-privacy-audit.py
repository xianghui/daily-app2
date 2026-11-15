import json
from pathlib import Path
from urllib.parse import urlsplit,quote
r=json.loads(Path('public-browser-validation.json').read_text());fixtures=[]
for j in [0,1]:
 fixtures+=json.loads(Path('export-fixture'+str(j)+'.json').read_text())['originalInput']['records']
for req in r['requests']:
 assert req['method']=='GET' and not req['body']
 u=urlsplit(req['url']);assert u.scheme=='blob' or u.hostname in ['xianghui.github.io','huggingface.co','us.aws.cdn.hf.co']
 assert not any(record[field] in req['url'] or quote(record[field],safe='') in req['url'] for record in fixtures for field in ['description'])
 assert 'passwords' not in req['url'].lower()
Path('public-privacy-validation.json').write_text(json.dumps({'allRequestsGetDownloadsOnly':True,'noUserContentInURLsOrBodies':True,'hosts':sorted(set(urlsplit(x['url']).hostname for x in r['requests'] if urlsplit(x['url']).hostname)),'signedDownloadQueryValuesOmitted':r['signedDownloadQueryValuesOmitted']},indent=2));print('PASS public request privacy audit')
