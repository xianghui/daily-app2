from pathlib import Path
import csv,json,io
checks=[]
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())));assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for i,row in enumerate(rows):
  assert row['source_text']==r['originalInput']['records'][i]['text'];assert row['reviewed_type']==r['reviews'][i]['item'];assert row['decision']==r['reviews'][i]['decision'];assert row['reviewed_account']==r['reviews'][i]['account'];assert row['reviewed_UTC']==r['reviews'][i]['at']
  note=r['reviews'][i]['reviewNote'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note;assert row['review_note']==expected
 ar=list(csv.DictReader(io.StringIO(Path(stem+'-accounts.csv').read_text())));assert len(ar)==len(r['accounts']);assert [x['account'] for x in ar]==[x['account'] for x in r['accounts']]
 for row,account in zip(ar,r['accounts']):
  assert row['status']==account['status'];assert row['follow_up']==account['action'];assert row['qualifying_event_IDs']==' | '.join(account['qualifyingEvents']);assert row['window_end_exclusive']==(account['windowEnd'] or '')
 if stem!='export-max':
  md=Path(stem+'.md').read_text();assert all(x['id'] in md and x['text'] in md for x in r['originalInput']['records']);assert all(x['account'] in md and x['action'] in md for x in r['accounts'])
 if stem=='export-reviewed':assert rows[0]['review_note']=='\'=SUM(1,2)\n"quoted", discuss'
 if stem=='export-max':assert len(rows)==48;assert len(ar)==16;assert rows[-1]['review_note']=='last row\nkept'
 checks.append({'artifact':stem,'events':len(rows),'accounts':len(ar),'originalsAndReviewedFieldsPreserved':True})
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown/account worksheet parsing; all rows, quoted commas/newlines, formula safety')
