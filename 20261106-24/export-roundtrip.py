import csv,json,io
from pathlib import Path
for prefix,target,audit in [('export-test','export-test.csv','export-audit.csv'),('export-quoted','export-quoted.csv','export-quoted-audit.csv')]:
 a=json.loads(Path(prefix+'.json').read_text())
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 t=list(csv.reader(io.StringIO(Path(target).read_text())));u=list(csv.reader(io.StringIO(Path(audit).read_text())))
 assert t[0]==[f['field'] for f in a['schema']]
 assert t[1:]==[[safe(v) for v in r['values']] for r in a['rows']]
 assert len(t)-1==len(a['original']['records'])==len(u)-1
 for i,row in enumerate(u[1:]):
  assert row==[str(i+1)]+[safe(v) for v in a['original']['records'][i]]+[safe(v) for v in a['rows'][i]['values']]
 assert len({r['source'] for r in a['mapping'] if r['source']>=0})==len([r for r in a['mapping'] if r['source']>=0])
 if prefix=='export-quoted':
  assert a['original']['records'][0][0]=='=Ada, "Q"\nlocal'
  assert t[1][0]=='\'=Ada, "Q"\nlocal'
  assert a['original']['records'][0][-1]=='=Keep, "private"\nnotes'
  assert u[1][6]=='\'=Keep, "private"\nnotes'
print('Python csv/json independent round trips passed: every row/cell, edited note, quotes, commas, newlines, formula safety and audit originals.')
