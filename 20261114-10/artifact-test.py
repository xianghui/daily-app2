import json,csv,io
from pathlib import Path
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['records'])
 for x,y,original in zip(rows,r['reviews'],r['originalInput']['records']):
  assert x['id']==y['id']==original['id'];assert float(x['value'])==y['value'];assert x['source_note']==original['description']
  for k in ['owner','review_note']:
   v=y['owner' if k=='owner' else 'reviewNote'];v="'"+v if v.startswith(('=','+','-','@','\t','\r')) else v
   assert x[k]==v,(k,x[k],v)
 assert len({x['id'] for x in rows})==len(rows)
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['reviewNote'];assert json.dumps(r['reviews'][0]['reviewNote'],ensure_ascii=False,separators=(',',':')) in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'csvJsonRoundtrips':['fixture0','fixture1','reviewed','max'],'multilineFormulaEscaping':True,'allSourceRecordsPreserved':True},indent=2))
print('PASS independently parsed artifacts, originals, multiline, formula escaping and maximum batch')
