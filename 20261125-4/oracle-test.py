from pathlib import Path
import csv,io,json,random,subprocess
random.seed(25)
fixtures=[]
for i in range(360):
 delim=[',',';','\t'][i%3]; n=i%6+1; header=i%2==0
 pool=['','plain','"double"','a,b','c;d','tab\tvalue','line\nbreak','CR\rLF\r\nend','  spaces  ','界🚀','=SUM(1,2)','@x','01','null']
 rows=[[random.choice(pool) for _ in range(n)] for _ in range(i%5+1)]
 out=io.StringIO(newline='');csv.writer(out,delimiter=delim,lineterminator='\r\n').writerows(rows)
 fixtures.append(dict(raw=out.getvalue(),contract=dict(delimiter=delim,columns=n,header=header),expected=dict(header=rows[0] if header else None,rows=rows[1:] if header else rows)))
Path('oracle-input.json').write_text(json.dumps(fixtures))
js="""import fs from 'node:fs';import {parseTable,encodeTable,examples,inspect} from './src/core.js';const input=JSON.parse(fs.readFileSync('oracle-input.json'));const out=input.map(c=>{const actual=parseTable(c.raw,c.contract);return {actual,encoded:encodeTable(actual,c.contract.delimiter)}});let rejected=0;for(const raw of ['a,\"b','a\"b,c','\"a\"junk,b','a,b\\rc,d','a,b\\n1','a,\\0','a'.repeat(1001)+',b','a,b\\n'.repeat(201),'']){try{parseTable(raw,{delimiter:',',columns:2,header:false});throw Error('Unexpected success '+raw)}catch(e){if(e.message.startsWith('Unexpected'))throw e;rejected++}}const duplicate=inspect('x,x\\n1,2\\n',{id:'d',description:'duplicate headers',target:JSON.stringify({delimiter:',',columns:2,header:true})});if(duplicate.result.header[0]!==duplicate.result.header[1])throw Error('lost duplicate');fs.writeFileSync('oracle-output.json',JSON.stringify({out,rejected}));"""
Path('oracle-run.mjs').write_text(js);subprocess.run(['node','oracle-run.mjs'],check=True)
out=json.loads(Path('oracle-output.json').read_text())
for f,o in zip(fixtures,out['out']):
 assert f['expected']==o['actual']
 rows=list(csv.reader(io.StringIO(o['encoded'],newline=''),delimiter=f['contract']['delimiter'],strict=True))
 expected=([o['actual']['header']] if o['actual']['header'] is not None else [])+o['actual']['rows']
 assert rows==expected,(rows,expected)
Path('oracle-validation.json').write_text(json.dumps(dict(independentOracle='Python csv.reader/writer strict, all cells compared',cases=len(fixtures),canonicalRoundTrips=len(fixtures),invalidRejected=out['rejected'],duplicateHeadersPreserved=True),indent=2))
print('PASS independent oracle',len(fixtures))
