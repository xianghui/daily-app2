import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['originalInput']['records'])==6
for row,record in zip(rows,r['records']):
 assert row['id']==record['id'] and row['text']==record['text'] and int(row['length_mm'])==record['length']
 assert row['note']==("'"+record['note'] if record['note'].startswith(('=','+','-','@','\t','\r')) else record['note'])
 assert row['board']==(record['board'] or '')
assert r['metrics']['held']==1
for f in ['export-Carpentry.json','export-Fabrication.json','export-max.json','export-reviewed.json']:
 a=json.loads(Path(f).read_text());ids=[x for b in a['boards'] for x in b['pieces']]
 assert len(ids)==len(set(ids))==a['metrics']['approved']
 assert set(ids)=={r['id'] for r in a['records'] if r['decision']=='approve'}
 assert [r['id'] for r in a['records']]==[r['id'] for r in a['originalInput']['records']]
 assert all(b['finishedMm']+b['kerfMm']+b['offcutMm']==b['stockMm'] for b in a['boards'])
md=Path('export-reviewed.md').read_text()
assert all(x['id']+':' in md for x in r['records'])
Path('export-validation.json').write_text(json.dumps({'parsedCSVRows':len(rows),'allOriginalsPreserved':True,'reviewedHoldAndMultilineFormulaNoteSurvived':True,'allApprovedPiecesExactlyOnce':True,'lengthConservation':True,'markdownAllRecords':True}))
print('PASS independent JSON/CSV/Markdown artifact parsing, escaping and length conservation')
