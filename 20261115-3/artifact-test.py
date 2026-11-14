import csv,json,math
from pathlib import Path
results=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==r['total']==len(r['reviews'])==len(r['originalInput']['records'])
 for x,y in zip(rows,r['reviews']):
  assert x['id']==y['id'] and x['reviewedFrom']==y['from'] and x['reviewedTo']==y['to']
  assert int(x['reviewedCount'])==y['count'] and x['decision']==y['decision']
  for k in ['owner','reviewNote']:
   value=y[k];expected="'"+value if value.startswith(('=','+','-','@','\t','\r')) else value
   assert x[k]==expected,(name,k,x[k],expected)
 assert sum(int(x['reviewedCount']) for x in rows if x['decision']=='approve')==r['model']['observedTransitions']
 if name=='reviewed':assert '\n' in rows[0]['owner'] and '\n' in rows[0]['reviewNote'] and '"quoted"' in rows[0]['reviewNote']
 results.append(dict(artifact=name,rows=len(rows),allFieldsRoundTrip=True))
md=Path('export-reviewed.md').read_text();assert 'quoted' in md and 'expected transitions to any terminal' in md
Path('artifact-validation.json').write_text(json.dumps(results,indent=2));print('PASS independent CSV/JSON parsing, conserved counts, multiline formula escaping and Markdown')
