import json,csv,io
from pathlib import Path
checks=[]
for name in ['reviewed','max','phone','boundary']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(a['records'])==len(a['originalInput']['records'])
 def protected(s):return ("'" if s.startswith(('=','+','-','@','\t','\r')) else '')+s
 for i,(r,x) in enumerate(zip(rows,a['records'])):
  assert r['id']==x['id'];assert r['source']==protected(x['text']);assert r['reviewedEquipment']==x['item'];assert r['decision']==x['decision'];assert r['reviewerNote']==protected(x['note']);assert int(r['originalStartMinute'])==a['originalInput']['records'][i]['start'];assert int(r['originalEndMinute'])==a['originalInput']['records'][i]['end'];assert int(r['reviewedStartMinute'])==x['start'];assert int(r['reviewedEndMinute'])==x['end']
  w=a['originalInput']['window'];expected=max(0,min(x['end'],w['end'])-max(x['start'],w['start'])) if x['decision']=='approve' else 0
  assert int(r['clippedApprovedMinutes'])==expected
 for asset in a['assets']:
  down=sum(any(r['item']==asset['id'] and r['decision']=='approve' and r['start']<=t<r['end'] for r in a['records']) for t in range(w['start'],w['end']))
  assert down==asset['observedDowntimeMinutes'];assert down+sum(g['end']-g['start'] for g in asset['uptimeGaps'])==asset['scheduledMinutes']
 checks.append({'artifact':name,'records':len(rows),'allOriginalAndReviewedFieldsPreserved':True,'independentMinuteGridCounts':True})
a=json.loads(Path('export-reviewed.json').read_text());assert a['records'][0]['end']==660;assert a['originalInput']['records'][0]['end']==650;assert a['records'][0]['note']=='=1+1, "review"\nsecond line';md=Path('export-reviewed.md').read_text();assert '10:00–11:00' in md
for r in a['records']:assert r['id'] in md
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'artifacts':checks,'markdownContainsReviewedEditsAndAllRecords':True},indent=2));print('PASS independent CSV/JSON/Markdown parsing, source preservation, formula escaping and downtime conservation')
