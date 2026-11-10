import json,csv,io
from pathlib import Path
checks=[]
for name in ['reviewed','max']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(a['records'])
 for r,s in zip(a['records'],rows):
  assert s['id']==r['id'] and s['family']==r['family'] and s['decision']==r['decision']
  assert int(s['count'])==r['count'] and int(s['loss_cents'])==r['lossCents']
  for key,text in [('source',r['original']['text']),('note',r['note'])]:
   expected="'"+text if text.startswith(('=','+','-','@','\t','\r')) else text
   assert s[key]==expected,(key,s[key],expected)
 assert sum(int(s['count']) for s in rows)==a['totals']['count']
 assert sum(int(s['loss_cents']) for s in rows)==a['totals']['lossCents']
 checks.append({'artifact':name,'rows':len(rows),'countsAndCentsConserved':True,'allReviewFieldsSurvive':True})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text()
for r in a['records']:assert r['id'] in md
assert a['records'][0]['note']=='=1+1, "review"\nnext line'
assert a['records'][0]['count']==31 and a['records'][0]['lossCents']==9100
assert not json.loads(Path('export-held.json').read_text())['ready']
a=json.loads(Path('export-max.json').read_text());b=json.loads(Path('export-roundtrip.json').read_text());assert a['originalInput']==b['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'checks':checks,'editedMultilineFormulaNotePreservedAndEscaped':True,'markdownAllRecordsPresent':True,'originalJSONRoundtrip':True},indent=2));print('PASS actual downloaded artifacts')
