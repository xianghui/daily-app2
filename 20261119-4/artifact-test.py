import csv,json,pathlib,math
report=[]
for name in ['fixture0','fixture1','reviewed','max']:
 p=pathlib.Path('export-'+name);r=json.loads(p.with_suffix('.json').read_text());rows=list(csv.DictReader(p.with_suffix('.csv').open(newline='')));assert len(rows)==r['total']
 for i,(row,review) in enumerate(zip(rows,r['reviews'])):
  assert row['id']==review['id'];assert int(row['original_minute'])==r['originalInput']['observations'][i]['minute'];assert int(row['reviewed_minute'])==review['minute'];assert row['reviewed_stream']==review['item'];expected=review['reviewNote'];expected=("'"+expected) if expected and expected[0] in '=+-@\t\r' else expected;assert row['review_note']==expected
 if name.startswith('fixture'):
  md=p.with_suffix('.md').read_text();assert all(x['id']+':' in md for x in r['reviews'])
 report.append({'artifact':str(p),'records':len(rows),'currentReviewAndOriginalsSurvive':True})
assert json.loads(pathlib.Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
pathlib.Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/JSON/Markdown parse, multiline quotes, formula escaping, all records and reviewed values')
