import csv,json
from pathlib import Path
report=[]
for j in [0,1]:
 r=json.loads(Path(f'export-fixture{j}.json').read_text());rows=list(csv.DictReader(Path(f'export-fixture{j}.csv').open(newline='')));look=list(csv.DictReader(Path(f'export-fixture{j}-lookup.csv').open(newline='')))
 assert len(rows)==6 and len(look)==6
 assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for i,x in enumerate(rows):
  assert x['original_text']==r['originalInput']['records'][i]['text'];assert x['reviewed_procedure']==r['reviews'][i]['target'];assert float(x['reviewed_duration'])==r['reviews'][i]['duration'];assert int(x['reviewed_count'])==r['reviews'][i]['count']
 for x,y in zip(look,[dict(v,procedure=p['id']) for p in r['plan'] for v in p['levels']]):
  assert x['procedure']==y['procedure'] and float(x['fitted_mean'])==y['fitted'];assert json.loads(x['source_ids'])==y['ids']
 md=Path(f'export-fixture{j}.md').read_text();assert all(x['text'] in md for x in r['originalInput']['records']);report.append({'fixture':j,'rows':len(rows),'lookupLevels':len(look),'allRecordsAndSourcesPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')));assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"reviewed", with newline';assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote']
r=json.loads(Path('export-max.json').read_text());rows=list(csv.DictReader(Path('export-max.csv').open(newline='')));assert len(rows)==r['total']==96;assert r['reviews'][-1]['reviewNote']==rows[-1]['review_note']=='last note\nkept';assert set(x['id'] for x in rows)==set(x['id'] for x in r['originalInput']['records']);look=list(csv.DictReader(Path('export-max-lookup.csv').open(newline='')));assert sum(int(x['sample_count']) for x in look)==128
Path('artifact-validation.json').write_text(json.dumps({'fixtures':report,'multilineFormulaEscapedInCSV':True,'jsonOriginalUnchanged':True,'maxRowsRoundTripped':96,'maxSampleWeightConserved':128},indent=2));print('PASS independently parsed actual CSV/JSON/Markdown, reviewed multiline edits and maximum batch')
