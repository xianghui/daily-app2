import json,csv,io
from pathlib import Path
checks=[]
for prefix in ['export-fixture0','export-fixture1','export-max','export-reviewed']:
 r=json.loads(Path(prefix+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(prefix+'.csv').read_text())));originals=r['originalInput']['first']+r['originalInput']['second']
 assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in originals];assert [x['original_text'] for x in rows]==[x['text'] for x in originals]
 assert [x['reviewed_counterpart'] for x in rows]==[x['target'] for x in r['reviews']];assert [x['decision'] for x in rows]==[x['decision'] for x in r['reviews']]
 for row,review in zip(rows,r['reviews']):assert row['review_note']==("'" if review['reviewNote'].startswith(('=','+','-','@','\t','\r')) else '')+review['reviewNote']
 assert len(set(x['first'] for x in r['links']))==len(r['links']);assert r['metrics']['observed']==r['metrics']['n1']+r['metrics']['n2']-len(r['links'])
 checks.append({'artifact':prefix,'preservedRecords':len(rows),'verifiedLinks':len(r['links'])})
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text());s=Path(f'export-fixture{i}.md').read_text();assert all(x['text'] in s for x in r['originalInput']['first']+r['originalInput']['second'])
Path('artifact-validation.json').write_text(json.dumps({'roundTrips':checks,'multilineCommaQuoteFormulaEscaping':True,'markdownPreservesEveryOriginal':True},indent=2));print('PASS independent CSV/JSON/Markdown artifact parsing')
