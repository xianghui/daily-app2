from pathlib import Path
import csv,json
p=Path.cwd();report=[]
for f in sorted(p.glob('export-*-json.json')):
 r=json.loads(f.read_text());label=f.name.removeprefix('export-').removesuffix('-json.json');src=r['originalInput'];assert len(r['reviews'])==len(src['records']);a=r['analysis'];assert a['sourceCount']==len(src['records']);assert sorted(x for g in a['groups'] for x in g['sources'])==sorted(e['id']for e in src['records'])
 for g in a['groups']:
  if g['status']=='held':assert g['next']is None and not g['dates']
  for dt in g['dates']:
   from datetime import date
   offset=(date.fromisoformat(dt)-date.fromisoformat(src['anchor'])).days
   assert src['start']<=dt<=src['end']and dt not in src['blackouts']
   assert all(offset%c['period']==c['phase']for c in g['calendars'])
 for suffix in ['csv.csv','window-csv.csv']:
  cf=p/f'export-{label}-{suffix}'
  if not cf.exists():continue
  rows=list(csv.DictReader(cf.open(newline='')))
  if suffix=='csv.csv':
   assert len(rows)==len(src['records'])
   for e,s,row in zip(src['records'],r['reviews'],rows):
    guard=lambda s:"'"+s if s and s[0]in'=+-@\t\r'else s
    assert row['requirement_id']==guard(e['id']);assert row['original_note']==guard(e['note']);assert row['reviewer_note']==guard(s['note']);assert row['reviewed_calendar']==s['resource']
  else:
   assert len(rows)==len(a['groups'])
   for row,g in zip(rows,a['groups']):assert row['first_shared_date']==(g['next']or'')and json.loads(row['all_shared_dates'])==g['dates']and json.loads(row['source_ids'])==g['sources']
 md=p/f'export-{label}-markdown.md'
 if md.exists():assert json.loads(md.read_text().split('## Complete original and reviewed audit\n\n')[1])==r
 report.append({'label':label,'records':len(src['records']),'groups':len(a['groups']),'independentlyParsed':True})
assert len(report)>=7
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent JSON/CSV/Markdown parsing and reviewed date constraints',len(report))
