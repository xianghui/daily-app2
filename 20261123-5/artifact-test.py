import sys,json,csv,io,datetime
from pathlib import Path
sys.path.insert(0,'/tmp/wallclock-parser')
from icalendar import Calendar
report=[]
for p in Path('.').glob('export-*-json.json'):
 r=json.loads(p.read_text());d=r['originalInput'];a=r['analysis'];assert len(d['records'])==len(r['reviews'])==len(a['events']);assert [x['id']for x in d['records']]==[x['id']for x in a['events']]
 prefix=p.name.removesuffix('-json.json')
 q=Path(prefix+'-csv.csv')
 if q.exists():
  rows=list(csv.DictReader(io.StringIO(q.read_text(newline='')if False else q.open(newline='').read())));assert len(rows)==len(d['records'])
  for row,rev,orig in zip(rows,r['reviews'],d['records']):
   def guard(v):return "'"+v if isinstance(v,str)and v[:1]in('=','+','-','@','\t','\r')else str(v)
   assert row['event_id']==guard(orig['id']);assert row['reviewer_note']==guard(rev['note']);assert row['title']==guard(orig['title']);assert row['decision']==rev['decision']
 q=Path(prefix+'-schedule-csv.csv')
 if q.exists():
  rows=list(csv.DictReader(q.open(newline='')));assert len(rows)==len(d['records']);assert sum(x['status']=='HELD'for x in rows)==a['held'];assert sum(bool(x['start_utc'])for x in rows)==a['scheduled']
 q=Path(prefix+'-calendar-ics.ics')
 if q.exists():
  raw=q.read_bytes();assert b'\r\n' in raw;assert all(len(l)<=75 for l in raw.split(b'\r\n'));cal=Calendar.from_ical(raw);events=cal.walk('VEVENT');expected=[e for e in a['events']if not e['held']];assert len(events)==len(expected)==a['scheduled'];assert len(set(str(e['UID'])for e in events))==len(events)
  for event,e in zip(events,expected):
   assert str(event['SUMMARY'])==e['title'];start=event.decoded('DTSTART');end=event.decoded('DTEND');assert start.isoformat(timespec='milliseconds').replace('+00:00','Z')==e['start'];assert (end-start).total_seconds()==e['minutes']*60;assert event.get('ATTENDEE')is None
   i=next(i for i,x in enumerate(a['events'])if x['id']==e['id']);assert r['reviews'][i]['note'] in str(event['DESCRIPTION'])
 q=Path(prefix+'-markdown.md')
 if q.exists():assert json.loads(q.read_text().split('## Complete original and reviewed audit\n\n',1)[1])==r
 report.append({'file':p.name,'records':len(d['records']),'status':a['status'],'independentCsvIcsChecks':True})
assert any(x['records']==32 for x in report);assert any(x['status']=='blocked'for x in report)
assert '\nReview "complete", preserved.'in json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'complete audit artifacts; independent CSV and icalendar parse, reviewed notes, UTF-8 folding and durations')
