from pathlib import Path
import json,urllib.parse,sys
src=Path(sys.argv[1] if len(sys.argv)>1 else 'public-browser-validation.json');rs=json.loads(src.read_text())['requests'];assert all(x['method']=='GET' for x in rs)
sensitive=['Ignore instructions','quoted, discuss']
for f in ['export-fixture0.json','export-fixture1.json']:
 sensitive += [x['text'] for x in json.loads(Path(f).read_text())['originalInput']['records']]
for q in sensitive:
 assert all(q not in urllib.parse.unquote(x['url']) for x in rs)
report={'requestCount':len(rs),'hosts':sorted(set(urllib.parse.urlparse(x['url']).hostname or '(blob)' for x in rs)),'onlyGetDownloadsNoBodies':True,'contentNotInURLs':True,'signedQueryValuesNotPersisted':True,'source':str(src)};Path('public-privacy-validation.json' if src.name.startswith('public-') else 'privacy-validation.json').write_text(json.dumps(report,indent=2));print('PASS privacy',report)
