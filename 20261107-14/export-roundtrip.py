import json,csv,io
from pathlib import Path
results=[]
for p in Path('.').glob('export-*.json'):
 a=json.loads(p.read_text());assert len(a['rows'])==len(a['original']['after']);assert [r['id'] for r in a['rows']]==[r['id'] for r in a['original']['after']]
 for r,original in zip(a['rows'],a['original']['after']):
  assert r['source']==original
  if original['hold'] or r['extraHold']:assert r['hold'] and r['state'].startswith('HOLD')
 cp=p.with_suffix('.csv')
 if cp.exists():
  table=list(csv.DictReader(io.StringIO(cp.read_text())))
  assert len(table)==len(a['rows'])
  for r,c in zip(a['rows'],table):
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   assert c['id']==safe(r['id']) and c['text']==safe(r['source']['text']) and c['note']==safe(r['note']) and c['review_date']==r['due'] and c['policy']==safe(r['policy'])
 results.append({'file':str(p),'records':len(a['rows']),'CSVParsed':cp.exists()})
Path('export-roundtrip-validation.json').write_text(json.dumps({'pass':True,'artifacts':results,'CSVFormulaProtection':'Leading dangerous characters receive apostrophe; JSON is lossless including quoted commas/newlines.'},indent=2));print('Round-tripped',len(results),'JSON artifacts and all CSV companions.')
