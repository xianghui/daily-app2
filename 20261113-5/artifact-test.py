import csv,json,io,re
from pathlib import Path
checks=[]
for name in ['Studio','Community','reviewed','max']:
 d=json.loads(Path('export-'+name+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==d['total']
 for i,(row,v) in enumerate(zip(rows,d['reviews'])):
  assert row['id']==v['id']; assert row['source_clause']==d['originalInput']['records'][i]['note']
  for key,value in [('review_note',v['note']),('owner',v['owner'])]:
   assert row[key]==("'"+value if re.match(r'^[=+\-@\t\r]',value) else value)
  assert row['reviewed_end']==v['end'];assert int(row['reviewed_notice_days'])==v['noticeDays']
 raw=Path('export-'+name+'.ics').read_bytes(); lines=raw.split(b'\r\n');assert all(len(x)<=75 for x in lines)
 text=re.sub(r'\r\n[ \t]','',raw.decode()); events=text.split('BEGIN:VEVENT\r\n')[1:];assert len(events)==len(d['actions'])
 for event,act in zip(events,d['actions']):
  assert 'DTSTART;VALUE=DATE:'+act['prepare'].replace('-','') in event
  assert act['deadline'] in event
  assert 'END:VEVENT' in event
 assert text.startswith('BEGIN:VCALENDAR\r\n') and text.endswith('END:VCALENDAR\r\n')
 checks.append({'artifact':name,'records':len(rows),'calendarEvents':len(events),'csvIndependentParse':True,'calendarFoldAndDates':True})
md=Path('export-reviewed.md').read_text();d=json.loads(Path('export-reviewed.json').read_text());assert 'quoted' in md and 'next step' in md
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON and RFC5545 structure/date/UTF8 folding checks')
