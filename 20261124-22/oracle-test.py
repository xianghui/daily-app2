import json,itertools,subprocess
from pathlib import Path
from urllib.parse import urljoin
bases=['https://a.example.test/a/b/','https://b.example.test/a/b.html','http://c.example.test/','https://a.example.test:8443/one/two/']
refs=['../x','./x','x','/x','?q=hello','#top','../../z?a=2#f','//other.example.test/x','https://other.example.test/abc','./','../','x/y/../z']
cases=[{'base':b,'ref':r,'expected':urljoin(b,r)}for b,r in itertools.product(bases,refs)]
Path('oracle-cases.json').write_text(json.dumps(cases))
script="import fs from 'node:fs';import{inspect}from'./src/core.js';let cs=JSON.parse(fs.readFileSync('oracle-cases.json'));for(let c of cs)c.actual=inspect(c.ref,{id:'x',description:'Synthetic URL test',base:c.base,allowCrossOrigin:true}).resolved;console.log(JSON.stringify(cs));"
out=subprocess.check_output(['node','--input-type=module','-e',script],text=True)
actual=json.loads(out)
assert all(c['actual']==c['expected'] for c in actual)
Path('oracle-validation.json').write_text(json.dumps({'independentPythonURLJoinMatches':len(actual),'scope':'ASCII unambiguous HTTP URL subset; browser URL standard supports other normalization not claimed equivalent to Python'},indent=2))
print('PASS Python urllib oracle',len(actual))
