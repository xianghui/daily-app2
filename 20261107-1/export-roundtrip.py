import csv,json
from pathlib import Path
for stem in ['export-edited','export-quoted','live-export-reviewed']:
 a=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(Path(stem+'.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 def safe(s):
  return "'"+s if s and s[0] in '=+-@\t\r' else s
 for row,r in zip(rows,a['rows']):
  for key,v in {'supplier_id':r['source']['id'],'supplier_description':r['source']['description'],'unit':r['source']['unit'],'canonical_sku':r['sku'] or '', 'canonical_description':r['canonicalDescription'] or '', 'status':r['status'],'review_note':r['note']}.items():assert row[key]==safe(v),(key,row[key],v)
  if r['sku']:assert any(c['sku']==r['sku'] and c['unit'].strip().lower()==r['source']['unit'].strip().lower() for c in a['catalog'])
 print(stem,'PASS',len(rows),'records; all original/reviewed fields, quotes/newlines and units retained')
