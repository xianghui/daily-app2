import csv,json
from pathlib import Path
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()));original=a['originalInput'];assert len(rows)==len(original['packet'])+len(original['incoming']);assert [r['id'] for r in rows]==[r['id'] for r in original['packet']+original['incoming']]
positions={r['id']:i+1 for i,r in enumerate(a['sequence'])}
for r in rows:
 assert r['position']==str(positions.get(r['id'],''))
for r in a['incoming']:
 out=next(x for x in rows if x['id']==r['id']);assert out['decision']==r['decision'];assert out['note']==("'" if r['note'].startswith(('=','+','-','@','\t','\r')) else '')+r['note'];assert out['text']==r['text']
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput'];md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in original['packet']+original['incoming']);assert '\n## Held outside packet\n' in md
Path('artifact-validation.json').write_text(json.dumps({'csvRecords':len(rows),'positionsAndHeldRecordsPreserved':True,'quotedMultilineFormulaNoteRoundtrip':True,'fullLimitOriginalRoundtrip':True,'markdownIncludesAllIDs':True},indent=2));print('PASS independent CSV/JSON/Markdown artifact parse and escaping')
