import json,csv,io
from pathlib import Path
p=Path('.')
a=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())));assert len(rows)==len(a['records'])==3
for r,x in zip(rows,a['records']):
 assert r['id']==x['id'];assert r['source']==x['original']['text'];assert r['template']==x['template'];assert int(r['cost'])==x['cost'];assert int(r['probability'])==x['probability'];assert r['decision']==x['decision'];assert r['note']==("'"+x['note'] if x['note'].startswith(('=','+','-','@','\t','\r')) else x['note'])
assert '\n' in rows[0]['note'] and '"review"' in rows[0]['note'];assert a['records'][0]['cost']==300
md=(p/'export-reviewed.md').read_text();assert 'USD 500' in md
for x in a['records']:assert x['id'] in md and x['template'] in md
for name in ['held','unconfirmed','roundtrip','challenge']:
 x=json.loads((p/f'export-{name}.json').read_text());assert not x['ready'] and x['scenario'] is None;assert len(x['records'])==len(x['originalInput']['risks'])
Path('artifact-validation.json').write_text(json.dumps({'csvIndependentParserAllRecordsAndEdits':True,'multilineQuotesFormulaEscaping':True,'jsonOriginalsPreserved':True,'markdownCurrentValuesAndAllSources':True,'blockedAuditsNoBudget':True},indent=2));print('PASS actual browser artifacts independently reopened')
