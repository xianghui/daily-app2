import json,csv,io
from pathlib import Path
checks=[]
for prefix in ['export-fixture0','export-fixture1','export-max']:
 r=json.loads(Path(prefix+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path(prefix+'.csv').read_text())));pairs=list(csv.DictReader(io.StringIO(Path(prefix+'-pairs.csv').read_text())))
 assert len(rows)==r['total'] and len(pairs)==len(r['plan'])
 assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['records']]
 assert [x['original_text'] for x in rows]==[x['text'] for x in r['originalInput']['records']]
 assert [float(x['reviewed_value']) for x in rows]==[x['value'] for x in r['reviews']]
 for p,q in zip(pairs,r['plan']):assert json.loads(p['source_ids'])==q['recordIds'] and float(p['B_minus_A'])==q['BminusA']
 checks.append({'artifact':prefix,'records':len(rows),'pairs':len(pairs)})
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())))
assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n' in rows[0]['review_note']
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text());s=Path(f'export-fixture{i}.md').read_text();assert all(x['text'] in s for x in r['originalInput']['records'])
Path('artifact-validation.json').write_text(json.dumps({'roundTrips':checks,'multilineCommaQuoteFormulaEscaping':True,'signedValuesPreserved':True,'markdownPreservesEveryOriginal':True},indent=2));print('PASS independent CSV/JSON/pair/Markdown artifact parsing')
