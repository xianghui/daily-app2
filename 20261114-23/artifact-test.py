import json,csv,io
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(d['outcomes'])==d['total']
 for row,x,source in zip(rows,d['outcomes'],d['originalInput']['records']):
  assert row['id']==x['id'] and json.loads(row['original'])==source
  assert row['service']==x['kind'] and row['decision']==x['decision']
  for k in ['earliest','latest','minutes','priority']:assert int(row[k])==x[k]
  assert row['slot']==(x['slot'] or '')
  slot=next((s for s in d['originalInput']['slots'] if s['id']==x['slot']),None)
  assert row['slot_start']==(str(slot['start']) if slot else '') and row['slot_end']==(str(slot['end']) if slot else '')
  for k in ['owner','review_note']:
   val=x['reviewNote' if k=='review_note' else k];want="'"+val if val.startswith(('=','+','-','@','\t','\r')) else val
   assert row[k]==want,(row[k],want)
 if name=='reviewed':
  assert '\n' in d['reviews'][0]['reviewNote'] and '\n' in rows[0]['review_note']
  assert '\n' in d['reviews'][0]['owner'] and '\n' in rows[0]['owner']
  md=Path('export-reviewed.md').read_text();assert 'quoted' in md and '3 bookings' in md
 checks.append({'artifact':name,'rows':len(rows),'originalsAndReviewedFieldsPreserved':True,'slotTimesPreserved':True})
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent Python CSV/JSON parse, originals, multiline/formula escaping and actual slot times')
