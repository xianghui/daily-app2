import csv,json,io
from pathlib import Path
checks=[]
for j in range(2):
 r=json.loads(Path(f'export-fixture{j}.json').read_text());a=list(csv.DictReader(io.StringIO(Path(f'export-fixture{j}-audit.csv').read_text())));s=list(csv.DictReader(io.StringIO(Path(f'export-fixture{j}-summary.csv').read_text())))
 assert len(a)==r['total']==8 and len(s)==len(r['groups'])==4
 for x,y,o in zip(a,r['reviews'],r['originalInput']['records']):
  assert x['id']==y['id']==o['id'] and x['original_note']==o['note'] and x['reviewed_condition']==y['cell'] and float(x['reviewed_value'])==y['value'] and float(x['original_value'])==o['value'] and x['decision']==y['decision']
 for x,y in zip(s,r['groups']):assert float(x['mean'])==y['mean'] and float(x['additive_prediction'])==y['additivePrediction'] and float(x['interaction_residual'])==y['interactionResidual'] and x['source_ids'].split()==y['sourceIds']
 assert len({i for c in r['groups'] for i in c['sourceIds']})==8
 assert '# Factor Grove' in Path(f'export-fixture{j}.md').read_text()
 checks.append({'fixture':j,'allTrialsAndConditionsPreserved':True,'comparisonsMatchJSON':True})
r=json.loads(Path('export-reviewed.json').read_text());a=list(csv.DictReader(io.StringIO(Path('export-reviewed-audit.csv').read_text())));assert a[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
r=json.loads(Path('export-max.json').read_text());a=list(csv.DictReader(io.StringIO(Path('export-max-audit.csv').read_text())));assert len(a)==r['total']==80
s=list(csv.DictReader(io.StringIO(Path('export-held-summary.csv').read_text())));assert all('balanced' in c['recheck'] and c['additive_prediction']=='' for c in s)
print(json.dumps({'checks':checks,'multilineQuotedFormulaEscapedInCSVButExactJSON':True,'maximumRows':80,'blockedDesignHasNoFabricatedEstimate':True},indent=2))
