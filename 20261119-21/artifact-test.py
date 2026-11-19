from pathlib import Path
import csv,json,io,os
os.chdir(Path(__file__).resolve().parent)
reports=[]
for tag in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+tag+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+tag+'.csv').read_text())));assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for i,row in enumerate(rows):
  o=r['originalInput']['logs'][i];v=r['reviews'][i];assert row['original_note']==o['note'];assert int(row['original_picks'])==o['picks'];assert row['reviewed_item']==v['item'];assert int(row['reviewed_picks'])==v['picks'];note=v['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note;assert row['review_note']==expected
 if tag!='reviewed':
  layout=list(csv.DictReader(io.StringIO(Path('export-'+tag+'-layout.csv').read_text())));assert len(layout)==len(r['originalInput']['items']);assert {x['item'] for x in layout}=={x['id'] for x in r['originalInput']['items']};assert len({x['to'] for x in layout})==len(layout);assert sum(int(x['picks']) for x in layout)==r['summary']['totalPicks'];assert sum(int(x['estimated_round_trip_m']) for x in layout)==r['summary']['optimizedM']
  for x in layout:assert int(x['mass_kg'])<=int(x['slot_capacity_kg'])
 reports.append({'artifact':tag,'records':len(rows),'preserved':True,'reviewedSnapshot':True})
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independently parsed actual browser JSON/CSV/layout downloads; all records, edits and constraints preserved')
