from pathlib import Path
import json,csv,io
observed=[]
for name in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));assert len(rows)==len(a['records'])
 for row,r in zip(rows,a['records']):
  assert row['id']==r['id'];assert row['source']==("'"+r['text'] if r['text'].startswith(('=','+','-','@','\t','\r')) else r['text']);assert int(row['quantity'])==r['quantity'];assert row['product']==r['product'];assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
  p=next(p for p in a['plans'] if p['product']==r['product']);assert row['productState']==p['state'];assert json.loads(row['batchCounts'])==(p['selected']['counts'] if p['selected'] else [])
 observed.append({'artifact':name,'records':len(rows),'allReviewedFieldsSurvive':True})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert all(r['id'] in md and r['note'] in md for r in a['records']);assert a['originalInput']['records'][0]['quantity']==20 and a['records'][0]['quantity']==21
Path('artifact-validation.json').write_text(json.dumps({'csv':observed,'formulaNewlineEscaped':True,'markdownReviewedFields':True,'originalPreserved':True},indent=2));print('PASS independent CSV/JSON/Markdown artifact parsing')
