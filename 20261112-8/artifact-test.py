import csv,json,io
from pathlib import Path
for stem in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(a['records'])
 for x,r in zip(rows,a['records']):
  assert x['id']==r['id'] and x['source']==r['text'] and int(x['cents'])==r['cents'] and x['reviewedSupplier']==r['item'] and x['decision']==r['decision']
  assert x['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert sum(r['cents'] for r in a['records'])==a['metrics']['allCents']
 assert a['fit']['totalCents']+a['metrics']['heldCents']==a['metrics']['allCents']
a=json.loads(Path('export-reviewed.json').read_text());s=Path('export-reviewed.md').read_text();assert '12345' in s and '&lt;check&gt;' in s and '\\|' in s
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'independentlyParsedCSV':['reviewed','max','phone'],'editedAmountsAndEveryRecordPreserved':True,'formulaMultilineEscaped':True,'markdownCurrentAndEscaped':True},indent=2));print('PASS CSV and Markdown artifacts')
