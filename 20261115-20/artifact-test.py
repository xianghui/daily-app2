from pathlib import Path
import csv,json,io
checks=[]
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())));assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for i,row in enumerate(rows):
  assert row['source_text']==r['originalInput']['records'][i]['text'];assert row['reviewed_object']==r['reviews'][i]['item'];assert row['decision']==r['reviews'][i]['decision']
  note=r['reviews'][i]['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert row['review_note']==expected
 if stem!='export-max':
  md=Path(stem+'.md').read_text();assert all(x['id'] in md and x['text'] in md for x in r['originalInput']['records'])
 if stem=='export-reviewed':assert rows[0]['review_note']=='\'=SUM(1,2)\n"quoted", discuss'
 if stem=='export-max':assert len(rows)==48;assert rows[-1]['review_note']=='last row\nkept'
 checks.append({'artifact':stem,'records':len(rows),'originalsAndReviewsPreserved':True})
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown parse, multiline quoting and formula safety')
