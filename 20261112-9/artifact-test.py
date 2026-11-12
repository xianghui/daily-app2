import csv,json,io
from pathlib import Path
for stem in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+stem+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(a['records'])
 for i,(x,r) in enumerate(zip(rows,a['records'])):
  assert x['id']==r['id'] and x['source']==r['text'] and int(x['qty'])==r['qty'] and x['reviewedProduct']==r['item'] and x['bin']==r['bin'] and x['decision']==r['decision']
  assert int(x['originalQty'])==a['originalInput']['records'][i]['qty']
  assert x['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert a['metrics']['netCents']==a['metrics']['excessCents']-a['metrics']['shortageCents']
 assert a['metrics']['grossCents']==a['metrics']['excessCents']+a['metrics']['shortageCents']
a=json.loads(Path('export-reviewed.json').read_text());s=Path('export-reviewed.md').read_text();assert '73' in s and '&lt;check&gt;' in s and '\\|' in s
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'independentlyParsedCSV':['reviewed','max','phone'],'editedCountsAndEveryRecordPreserved':True,'formulaMultilineEscaped':True,'markdownCurrentAndEscaped':True},indent=2));print('PASS CSV and Markdown artifacts')
