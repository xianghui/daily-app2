import csv,json
from pathlib import Path
r=json.load(open('export-reviewed.json'))
assert r['reviews'][0]['area']==17
rows=list(csv.DictReader(open('export-reviewed.csv',newline='')))
assert len(rows)==len(r['reviews'])==4
for x,y in zip(rows,r['reviews']):
 assert x['id']==y['id'] and x['original']==y['text'] and x['surface']==y['item'] and int(x['area_m2'])==y['area']
 assert x['note']==("'"+y['note'] if y['note'].startswith(('=','+','-','@','\t','\r')) else y['note'])
months=list(csv.DictReader(open('export-monthly.csv',newline='')))
assert len(months)==12
for x,y in zip(months,r['best']['months']):
 assert int(x['month'])==y['month']
 for label,key in [('inflow_L','inflowMl'),('demand_L','demandMl'),('supplied_L','suppliedMl'),('unmet_L','unmetMl'),('spill_L','spillMl'),('end_L','endMl')]:assert abs(float(x[label])*1000-y[key])<1e-6
assert '17 m²' in Path('export-reviewed.md').read_text()
assert len(json.load(open('export-max.json'))['reviews'])==len(list(csv.DictReader(open('export-max.csv',newline=''))))==24
assert not json.load(open('export-held.json'))['released']
assert json.load(open('export-undo.json'))['released']
json.dump({'independentCSVJSONMarkdown':True,'allRows':True,'editedArea':17,'formulaEscapedMultilineNote':True,'monthlyConservation':True,'max24Rows':True},open('artifact-validation.json','w'),indent=2)
print('PASS independently parsed JSON, audit CSV, monthly CSV, Markdown, held/undo and maximum batch')
