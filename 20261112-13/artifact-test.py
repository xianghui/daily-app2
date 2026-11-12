import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['reviews'])==4
for a,b in zip(rows,r['reviews']):
 assert a['id']==b['id'] and a['original']==b['text'] and a['product']==b['item'] and int(a['annual_demand'])==b['demand'] and a['decision']==b['decision']
 assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
assert r['reviews'][0]['demand']==17
md=Path('export-reviewed.md').read_text()
for b in r['reviews']:assert json.dumps(b['text'],ensure_ascii=False) in md
m=json.loads(Path('export-max.json').read_text());mr=list(csv.DictReader(Path('export-max.csv').open(newline='')));assert len(mr)==len(m['reviews'])==24 and len({x['id'] for x in mr})==24
assert len(m['originalInput']['records'])==24
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVAndJSONParsing':True,'reviewedRows':len(rows),'maxRows':len(mr),'formulaQuotedMultilineNotePreserved':True,'markdownEverySourcePreserved':True},indent=2))
print('PASS current reviewed and max artifacts independently parsed')
