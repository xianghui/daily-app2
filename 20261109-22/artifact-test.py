import csv,json
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());d=a['originalInput'];assert len(a['records'])==len(d['lines']);assert [r['id'] for r in a['records']]==[r['id'] for r in d['lines']]
 # Independent recursive expansion per demand, not the app's topological accumulator.
 totals={p['id']:0 for p in d['parts']}
 def expand(part,n,stack=()):
  assert part not in stack
  totals[part]+=n
  for r in a['records']:
   if r['parent']==part and r['decision']=='approve':expand(r['selected'],n*r['quantity'],stack+(part,))
 for x in d['demands']:expand(x['part'],x['quantity'])
 for p in a['parts']:
  assert p['gross']==totals[p['id']]
  if p['kind']=='raw':assert p['stockUsed']==min(p['stock'],p['gross']);assert p['buy']==max(0,p['gross']-p['stock']);assert p['gross']==p['stockUsed']+p['buy']
 for r in a['records']:assert r['parentUnits']==totals[r['parent']];assert r['extendedQuantity']==totals[r['parent']]*r['quantity']
 assert a['metrics']['rawGross']==a['metrics']['buyUnits']+a['metrics']['stockUsed']
 assert a['metrics']['complete']==(len(a['unresolved'])==0)
 checks.append(f.name)
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv')))
assert len(rows)==len(a['records']);assert rows[0]['note']=="'"+a['reviews'][0]['note'];assert rows[0]['decision']=='hold';assert rows[0]['applied']=='false'
for source,row in zip(a['records'],rows):
 assert source['id']==row['id'];assert source['text']==row['description'];assert source['quantity']==int(row['quantity_per_parent']);assert source['extendedQuantity']==int(row['extended_units'])
md=Path('export-reviewed.md').read_text()
for r in a['records']:assert r['id'] in md and r['text'] in md
assert 'PARTIAL PLAN' in md
for p in a['parts']:
 if p['kind']=='raw':assert p['id'] in md and ('BUY '+str(p['buy'])) in md
json.dump({'auditsParsed':checks,'independentRecursiveExpansion':True,'rawQuantityStockBuyConservation':True,'allLinesPreserved':True,'reviewedCsvMarkdownAndFormulaMultilineRoundtrip':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent recursive expansion, stock conservation, every line retained, CSV/Markdown roundtrip')
