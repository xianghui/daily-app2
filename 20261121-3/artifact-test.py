import csv,json,io,math
from pathlib import Path
checks=[]
for j in range(2):
 r=json.loads(Path(f'export-fixture{j}.json').read_text());audit=list(csv.DictReader(io.StringIO(Path(f'export-fixture{j}-audit.csv').read_text())));pairs=list(csv.DictReader(io.StringIO(Path(f'export-fixture{j}-summary.csv').read_text())))
 assert len(audit)==r['total']==2
 for i,row in enumerate(audit):
  assert row['original_note']==r['originalInput']['records'][i]['note'];assert json.loads(row['reviewed_values'])==r['reviews'][i]['values']
 assert len(pairs)==sum(c['best']['overlap'] for c in r['checks'])
 for row in pairs:
  ref=next(x for x in r['originalInput']['references'] if x['id']==row['channel']);trace=next(x for x in r['reviews'] if x['id']==row['trace']);i=int(row['reference_index']);k=int(row['trace_index']);assert k-i==int(row['lag_samples']);assert float(row['reference_value'])==ref['values'][i];assert float(row['trace_value'])==trace['values'][k];assert float(row['lag_seconds'])==int(row['lag_samples'])*r['originalInput']['stepSeconds']
 checks.append({'fixture':j,'auditRows':len(audit),'alignmentPairs':len(pairs),'allIndicesAndValuesVerified':True})
r=json.loads(Path('export-reviewed.json').read_text());row=list(csv.DictReader(io.StringIO(Path('export-reviewed-audit.csv').read_text())))[0];assert row['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n' in row['review_note'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
r=json.loads(Path('export-held.json').read_text());assert r['total']==2 and r['held']==1 and len(r['reviews'])==2 and len(r['checks'])==1
r=json.loads(Path('export-max.json').read_text());assert len(r['reviews'])==24==len(list(csv.DictReader(io.StringIO(Path('export-max-audit.csv').read_text()))))
Path('artifact-validation.json').write_text(json.dumps({'fixtures':checks,'multilineFormulaEscaping':True,'holdsAndMaximumRowsPreserved':True},indent=2));print('PASS independent actual CSV/JSON/Markdown and all paired indices/values')
