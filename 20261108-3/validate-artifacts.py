from pathlib import Path
import json,csv
reports=[]
for name in ['export-Workplace.json','export-Digital.json','export-reviewed.json','export-held.json','export-max.json','export-offline.json','export-roundtrip.json','export-phone.json']:
 a=json.loads(Path(name).read_text());d=a['input'];assert len(a['records'])==len(d['items']);assert [r['id'] for r in a['records']]==[r['id'] for r in d['items']]
 changed=0
 for orig,r in zip(d['items'],a['records']):
  assert r['text']==orig['text'] and r['responses']==orig['responses']
  for v,s in zip(r['responses'],r['scores']):
   assert s==(None if v is None or r['decision']=='hold' else d['min']+d['max']-v if r['direction']=='reverse' else v)
   changed+=s is not None and s!=v
 assert changed==a['metrics']['changedCells']
 for i,t in enumerate(a['totals']):
  vals=[r['scores'][i] for r in a['records']];assert t['reviewedSum']==sum(x for x in vals if x is not None);assert t['scoredItems']==len([x for x in vals if x is not None]);assert t['missingOrHeld']+t['scoredItems']==len(vals)
 reports.append({'file':name,'items':len(a['records']),'cells':sum(len(r['responses']) for r in a['records']),'changedCells':changed})
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')));assert len(rows)==sum(len(r['responses']) for r in a['records'])
for row in rows:
 r=next(r for r in a['records'] if r['id']==row['item_id']);i=int(row['respondent'])-1
 assert row['original']==('' if r['responses'][i] is None else str(r['responses'][i]));assert row['reviewed_score']==('' if r['scores'][i] is None else str(r['scores'][i]));assert row['note']==r['note']
Path('artifact-validation.json').write_text(json.dumps({'json':reports,'csvRows':len(rows),'checks':'Every source cell, direction formula, missing/hold, totals, baseline change count, reviewed notes and JSON reimport verified independently'},indent=2));print('Independent JSON/CSV parsing and all source/score invariants pass.')
