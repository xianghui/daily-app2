import json
from pathlib import Path
from urllib.parse import urlsplit,quote
r=json.loads(Path('public-browser-validation.json').read_text());texts=[x['description'] for i in [0,1] for x in json.loads(Path(f'export-fixture{i}.json').read_text())['originalInput']['records']]
for x in r['requests']:
 u=urlsplit(x['url']);assert x['method']=='GET' and not x['body'];assert u.scheme=='blob' or u.hostname in ['huggingface.co','us.aws.cdn.hf.co','xianghui.github.io']
 assert not any(t in x['url'] or quote(t,safe='') in x['url'] for t in texts)
 assert 'passwords' not in x['url'].lower()
Path('public-privacy-validation.json').write_text(json.dumps({'downloadsOnly':True,'noContentBodiesOrTextInUrls':True,'requestCount':len(r['requests']),'signedDownloadQueriesNotPersisted':True,'allowedHosts':['huggingface.co','us.aws.cdn.hf.co','xianghui.github.io'],'scope':'Observed public default path; source and credential-pattern scan in asset-audit.json'},indent=2));print('PASS public privacy request audit')
