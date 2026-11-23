import pathlib,json,hashlib,re,urllib.request,os
root=pathlib.Path('..');deploy=root/'deploy';report=[]
html=(deploy/'20261123-13/index.html').read_text(); paths=['/daily-app2/','/daily-app2/20261123-13/']+re.findall(r'(?:src|href)="([^"]+\.(?:js|css))"',html)+[x['path'] for x in json.load(open('runtime-dependency-audit.json'))]
origin=os.environ.get('AUDIT_ORIGIN','http://127.0.0.1:7393')
for path in paths:
 local=deploy/path.removeprefix('/daily-app2/');local=local/'index.html' if local.is_dir() else local
 with urllib.request.urlopen(origin+path,timeout=90) as response:
  b=response.read();assert response.status==200
 expected=hashlib.sha256(local.read_bytes()).hexdigest();actual=hashlib.sha256(b).hexdigest();assert actual==expected,(path,actual,expected)
 report.append({'path':path,'bytes':len(b),'sha256':actual,'publicByteMatch':origin.startswith('https:')})
pathlib.Path(os.environ.get('PREFIX','assembled-')+'asset-audit.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'served bundle/gallery/runtime byte matches')
