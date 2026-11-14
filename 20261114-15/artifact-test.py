import json,csv
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==r['total']==6
for i,(x,y) in enumerate(zip(rows,r['reviews'])):
 assert x['id']==y['id'] and int(x['requests'])==y['calls'] and int(x['bad_requests'])==y['errors']
 assert int(x['start_minute'])==y['start'] and int(x['end_minute'])==y['end']
 assert json.loads(x['original'])==r['originalInput']['records'][i]
 for k in ['review_note','owner']:
  v=y['reviewNote' if k=='review_note' else 'owner'];assert x[k]==("'"+v if v.startswith(('=','+','-','@','\t','\r')) else v)
assert '\n' in rows[0]['review_note'];assert 'quoted' in Path('export-reviewed.md').read_text()
s=list(csv.DictReader(Path('export-reviewed.summary.csv').open()));assert len(s)==2
for x,f in zip(s,r['services']):
 assert float(x['weighted_burn'])==f['burn'];assert float(x['remaining_requests'])==f['remainingRequests'];assert int(x['requests'])==f['calls']
m=json.loads(Path('export-max.json').read_text());assert m['total']==32 and len(list(csv.DictReader(Path('export-max.csv').open())))==32
Path('artifact-validation.json').write_text(json.dumps({'reviewedRows':len(rows),'maxRows':32,'originalsPreserved':True,'multilineEscapingAndFormulaSafety':True,'summaryReconciled':True},indent=2));print('PASS independent Python JSON/CSV/Markdown artifact checks')
