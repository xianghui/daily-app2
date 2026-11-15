import csv,json,io
from pathlib import Path
reports=[]
for p in Path('.').glob('export-*.json'):
 r=json.loads(p.read_text());assert len(r['reviews'])==len(r['originalInput']['records']);c=p.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.read_text())));assert len(rows)==len(r['reviews'])
  for i,(a,b) in enumerate(zip(rows,r['reviews'])):
   assert a['id']==b['id'];assert a['source_text']==r['originalInput']['records'][i]['text'];assert a['review_note']==("'" if b['reviewNote'][:1] in '=+-@\t\r' and b['reviewNote'] else '')+b['reviewNote'];assert float(a['reviewed_value'])==b['value']
 reports.append({'file':str(p),'records':r['total'],'csvRoundTrip':c.exists()})
assert len(reports)>=8
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS actual downloaded artifacts',len(reports))
