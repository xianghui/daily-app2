from pathlib import Path
import json,csv,io
checks=[]
for name in ['edited','quoted']:
 a=json.loads(Path('export-'+name+'.json').read_text())
 rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(a['rows'])
 for original,parsed in zip(a['rows'],rows):
  for key in ['id','original','revision','owner','note']:
   value=original[key]
   safe="'"+value if value and value[0] in '=+-@\t\r' else value
   assert parsed[key]==safe,(name,key,parsed[key],safe)
  assert parsed['decision']==original['decision']
  assert parsed['output']==(original['output'] or '') if not (original['output'] or '').startswith(('=','+','-','@','\t','\r')) else parsed['output']=="'"+original['output']
  assert abs(float(parsed['cosine'])-original['score'])<1e-12
 checks.append({'artifact':name,'rows':len(rows),'sourceAndEditsPreserved':True,'csvFormulaEscaping':True})
for p in Path('.').glob('export-*.json'):
 if p.name=='export-roundtrip-validation.json':continue
 a=json.loads(p.read_text());assert len(a['rows'])==len(a['original']['pairs'])
 for r,original in zip(a['rows'],a['original']['pairs']):
  assert all(r[k]==original[k] for k in ['id','original','revision'])
  assert r['output']==(None if r['decision']=='hold' else r[r['decision']])
  assert not(r['numeric'] and r['decision']=='revision')
 checks.append({'artifact':p.name,'records':len(a['rows']),'jsonPreservation':True})
Path('export-roundtrip-validation.json').write_text(json.dumps(checks,indent=2))
print('Independent Python CSV/JSON parse, all source pairs, decisions, edits and released outputs preserved; spreadsheet formulas escaped.')
