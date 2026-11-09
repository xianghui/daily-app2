import csv,json
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());orig=a['originalInput'];assert len(a['records'])==len(orig['requests']);assert [r['id'] for r in a['records']]==[r['id'] for r in orig['requests']]
 assert len(a['slots'])==sum(r['quantity'] for r in a['records'] if r['decision']=='approve')
 for g in a['equipment']:
  slots=[s for s in a['slots'] if s['equipment']==g['id']]
  # Independent sweep-line peak, with release before checkout at equal minutes.
  events=sorted([(s['start'],1) for s in slots]+[(s['ready'],-1) for s in slots]);current=peak=0
  for _,delta in events:current+=delta;peak=max(peak,current)
  assert peak==g['required'];assert g['extra']==max(0,peak-g['available'])
 for i,s in enumerate(a['slots']):
  assert s['ready']==s['end']+next(g['buffer'] for g in orig['gear'] if g['id']==s['equipment'])
  assert s['extra']==(s['unit']>next(g['available'] for g in orig['gear'] if g['id']==s['equipment']))
  for t in a['slots'][i+1:]:
   if s['equipment']==t['equipment'] and s['unit']==t['unit']:assert s['ready']<=t['start'] or t['ready']<=s['start']
 checks.append(f.name)
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv')))
assert len(rows)==len(a['records']);assert rows[0]['note']=="'"+a['reviews'][0]['note'];assert rows[0]['decision']=='hold';assert rows[0]['units']==''
for source,row in zip(a['records'],rows):
 assert source['id']==row['id'];assert source['text']==row['description'];assert source['quantity']==int(row['quantity'])
md=Path('export-reviewed.md').read_text()
for r in a['records']:assert r['id'] in md and r['text'] in md
assert 'EXTRA REQUIRED' in md
json.dump({'auditsParsed':checks,'independentPeakSweep':True,'noUnitOverlap':True,'quantitiesConserved':True,'reviewedCsvMarkdownAndFormulaMultilineRoundtrip':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent peak sweep, no overlap, every record/unit retained, CSV escaping and Markdown roundtrip')
