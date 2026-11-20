import csv,json,io
from pathlib import Path
checks=[]
for j in range(2):
 r=json.loads(Path(f'export-fixture{j}.json').read_text());a=list(csv.DictReader(io.StringIO(Path(f'export-fixture{j}-audit.csv').read_text())));s=list(csv.DictReader(io.StringIO(Path(f'export-fixture{j}-summary.csv').read_text())))
 assert len(a)==r['total']==16 and len(s)==len(r['sites'])==2
 for x,y,o in zip(a,r['reviews'],r['originalInput']['records']):
  assert x['id']==y['id']==o['id'] and x['original_note']==o['note'] and x['reviewed_site']==y['site'] and float(x['reviewed_kwh'])==y['kwh'] and x['decision']==y['decision']
 for x,y in zip(s,r['sites']):assert float(x['normalized_reduction_kwh_day'])==y['normalizedReduction'] and float(x['raw_reduction_kwh_day'])==y['rawReduction']
 checks.append({'fixture':j,'allRecordsAndSitesPreserved':True,'comparisonMatchesJSON':True})
r=json.loads(Path('export-reviewed.json').read_text());a=list(csv.DictReader(io.StringIO(Path('export-reviewed-audit.csv').read_text())));assert a[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
r=json.loads(Path('export-max.json').read_text());a=list(csv.DictReader(io.StringIO(Path('export-max-audit.csv').read_text())));assert len(a)==r['total']==80
s=list(csv.DictReader(io.StringIO(Path('export-extrapolation-summary.csv').read_text())));assert 'no extrapolation' in s[0]['status'] and s[0]['normalized_reduction_kwh_day']==''
print(json.dumps({'checks':checks,'multilineFormulaEscapeAndExactJSON':True,'maximumRows':80,'blockedSiteHasNoFabricatedEstimate':True},indent=2))
