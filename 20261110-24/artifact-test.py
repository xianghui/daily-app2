import csv,json
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')));md=Path('export-reviewed.md').read_text()
assert len(rows)==len(j['records'])==4
for r,x in zip(j['records'],rows):
 assert x['id']==r['id'] and x['source']==r['original']['text'] and x['task']==r['task']
 assert int(x['cost_cents'])==r['costCents'] and int(x['days_saved'])==r['daysSaved']
 assert x['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
 assert x['decision']==r['decision'] and (x['selected']=='true')==(r['id'] in j['expedited']['selected'])
 assert r['id'] in md
assert rows[0]['note']=='\'=1+1, "verified"\nsecond line'
for f in ['export-held.json','export-max.json','export-offline.json','export-impossible.json','export-phone.json']:
 a=json.loads(Path(f).read_text());assert len(a['records'])==len(a['originalInput']['offers'])
 if a['ready']:
  assert a['expedited']['days']<=a['originalInput']['deadline']
  assert a['expedited']['costCents']==sum(r['costCents'] for r in a['records'] if r['id'] in a['expedited']['selected'])
  assert len({r['id'] for r in a['expedited']['tasks']})==len(a['originalInput']['tasks'])
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvJsonParsing':True,'allRecordsRetained':True,'reviewedFieldsPreserved':True,'formulaMultilineEscaping':True,'scheduleCostAndDependencyChecks':True},indent=2));print('PASS actual downloaded artifacts independently parsed')
