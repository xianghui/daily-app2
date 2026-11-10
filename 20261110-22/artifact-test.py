import csv,json,io
from pathlib import Path
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text()); rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())));hist=[r for r in rows if r['record_type']=='history'];nxt=[r for r in rows if r['record_type']=='next'];assert len(hist)==len(a['records']);assert len(nxt)==len(a['assignments'])
for r,h in zip(hist,a['records']):
 assert r['source']==h['original']['text'];assert r['duty']==h['duty'];assert r['person']==h['person'];assert int(r['minutes'])==h['minutes'];assert int(r['round'])==h['round'];assert r['note']==("'" if h['note'] and h['note'][:1] in '=+-@\t\r' else '')+h['note'];assert r['decision']==h['decision']
for r,h in zip(nxt,a['assignments']):
 assert r['duty']==h['duty'] and r['person']==h['person'];assert int(r['minutes'])==h['minutes'];assert int(r['round'])==h['round']
assert '\n' in a['records'][0]['note'];assert '"verified"' in a['records'][0]['note'];assert a['records'][0]['minutes']==65;assert a['records'][0]['person']=='Fox';assert all(r['id'] in (p/'export-reviewed.md').read_text() for r in a['records']);original=json.loads((p/'export-max.json').read_text())['originalInput'];assert json.loads((p/'export-roundtrip.json').read_text())['originalInput']==original
(p/'artifact-validation.json').write_text(json.dumps({'historyRows':len(hist),'nextAssignments':len(nxt),'allOriginalsAndReviewedFieldsPreserved':True,'multilineQuotedFormulaEscaped':True,'JSONOriginalRoundtrip':True,'markdownComplete':True},indent=2));print('PASS independently parsed actual downloaded CSV/JSON/Markdown')
