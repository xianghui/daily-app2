import json,csv,io
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==r['total']==6
for x,y in zip(rows,r['reviews']):
 assert x['id']==y['id'] and float(x['reading'])==y['b'] and int(x['sequence'])==y['a']
 assert json.loads(x['original'])==r['originalInput']['records'][r['reviews'].index(y)]
 for k in ['review_note','reviewer']:
  v=y['reviewNote' if k=='review_note' else 'owner'];assert x[k]==("'"+v if v.startswith(('=','+','-','@','\t','\r')) else v)
assert '\n' in rows[0]['review_note'];assert 'quoted' in Path('export-reviewed.md').read_text()
s=list(csv.DictReader(Path('export-reviewed.summary.csv').open()));assert len(s)==2
for x,f in zip(s,r['features']):assert float(x['mean'])==f['bias']
m=json.loads(Path('export-max.json').read_text());assert m['total']==32 and len(list(csv.DictReader(Path('export-max.csv').open())))==32
Path('artifact-validation.json').write_text(json.dumps({'reviewedRows':len(rows),'maxRows':32,'originalsPreserved':True,'multilineEscapingAndFormulaSafety':True,'summaryReconciled':True},indent=2));print('PASS independent Python JSON/CSV/Markdown artifact checks')
