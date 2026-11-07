from pathlib import Path
import json,csv,io
results=[]
for stem in ['edited','quoted']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(a['rows'])
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for x,r in zip(rows,a['rows']):
  for k in ['id','text','owner','note']:assert x[k]==safe(r[k]),(k,x[k],r[k])
  assert x['decision']==('sample' if r['selected'] else 'defer')
 assert a['original']['tickets']==[{'id':r['id'],'text':r['text']} for r in a['rows']]
 results.append({'fixture':stem,'rows':len(rows),'allFieldsPreservedWithDocumentedFormulaEscaping':True})
Path('export-roundtrip-validation.json').write_text(json.dumps(results,indent=2));print('Independent Python CSV/JSON round trips passed.')
