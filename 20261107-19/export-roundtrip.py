import json,csv,io
from pathlib import Path
from icalendar import Calendar
report={}
for name in ['edited','quoted']:
 a=json.loads(Path('export-'+name+'.json').read_text())
 with open('export-'+name+'.csv',newline='') as f: rows=list(csv.DictReader(f))
 assert len(rows)==len(a['rows'])
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for source,row in zip(a['rows'],rows):
  for key in ['id','title','room','start','end','assigned','note']:
   assert row[key]==safe(source[key]),(key,row[key],source[key])
 raw=Path('export-'+name+'.ics').read_bytes()
 assert b'\r\n' in raw
 for line in raw.split(b'\r\n'):assert len(line)<=75
 events=Calendar.from_ical(raw).walk('VEVENT');assert len(events)==len(a['rows'])
 for event,row in zip(events,a['rows']):
  assert str(event['SUMMARY'])==row['title']
  assert str(event['LOCATION'])==next(r['name'] for r in a['original']['rooms'] if r['id']==row['assigned'])
  assert event.decoded('DTSTART').isoformat(timespec='minutes').replace('+00:00','Z')==row['start']
  assert event.decoded('DTEND').isoformat(timespec='minutes').replace('+00:00','Z')==row['end']
  assert str(event['DESCRIPTION'])=='Source room: '+row['room']+'\nReview note: '+row['note']
 assert len({str(e['UID']) for e in events})==len(events)
 report[name]={'records':len(rows),'csvReviewedFieldsPreserved':True,'icsParsed':True,'utcAndEscaping':True,'utf8LineFolding':True}
Path('export-roundtrip-validation.json').write_text(json.dumps(report,indent=2))
print(report)
