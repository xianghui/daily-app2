import csv,json
from pathlib import Path
results=[]
for name in ['edited','quoted']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for x,y in zip(rows,a['rows']):
  assert x['id']==safe(y['id'])
  assert x['question']==safe(y['text'])
  assert x['note']==safe(y['note'])
  assert int(x['reviewed_points'])==y['points']
  assert x['objective']==y['objective']
 assert sum(int(x['reviewed_points']) for x in rows)==a['metrics']['totalMarks']
 assert a['original']['after'][0]['points']==4
 results.append({'fixture':name,'rows':len(rows),'marks':a['metrics']['totalMarks'],'allFieldsPreserved':True,'spreadsheetSafe':True})
for path in Path('.').glob('export-*.json'):
 a=json.loads(path.read_text())
 if not isinstance(a,dict) or a.get('app')!='Outcome Map':continue
 assert len(a['rows'])==len(a['original']['after']);assert a['metrics']['totalMarks']==sum(r['points'] for r in a['rows']);assert sum(o['assigned'] for o in a['coverage'])+sum(r['points'] for r in a['rows'] if not r['objective'])==a['metrics']['totalMarks']
Path('export-roundtrip-validation.json').write_text(json.dumps(results,indent=2));print('CSV/JSON round trips and all export mark reconciliations passed.')
