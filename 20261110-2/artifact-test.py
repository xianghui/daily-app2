import csv,json
from pathlib import Path
from icalendar import Calendar
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open()));assert len(rows)==len(r['records'])
for a,b in zip(rows,r['records']):
 assert a['id']==b['id'] and a['description']==b['description'] and a['cadenceText']==b['cadenceText'] and a['firstDue']==b['firstDue'] and a['decision']==b['decision']
 assert a['note']==("'" if b['note'].startswith(('=','+','-','@','\t','\r')) else '')+b['note']
 assert a['dates']==';'.join(e['date'] for e in r['events'] if e['taskId']==b['id'])
c=Calendar.from_ical(Path('export-reviewed.ics').read_bytes());events=c.walk('VEVENT');assert len(events)==len(r['events']);uids=set()
for a,b in zip(events,r['events']):
 assert a.decoded('DTSTART').isoformat()==b['date'];assert (a.decoded('DTEND')-a.decoded('DTSTART')).days==1
 assert str(a['SUMMARY'])==b['description'];assert b['note'] in str(a['DESCRIPTION']);assert str(a['UID']) not in uids;uids.add(str(a['UID']))
assert all(len(line)<=75 for line in Path('export-reviewed.ics').read_bytes().split(b'\r\n'))
json.dump({'completeCSVRecordCount':len(rows),'parsedCalendarEvents':len(events),'currentReviewedDatesNotesAndDecisionsSurvive':True,'csvFormulaProtection':True,'rfc5545UnfoldAndUTF8Parsing':True,'uniqueUIDsOneDayEvents':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent CSV + icalendar parse',len(rows),len(events))
