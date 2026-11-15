import json,csv,io
from pathlib import Path
checked=[]
for stem in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_text())))
 assert len(rows)==r['total']
 for i,(row,review) in enumerate(zip(rows,r['reviews'])):
  assert row['id']==review['id']
  assert row['original_description']==r['originalInput']['observations'][i]['description']
  assert row['original_rank']==str(r['originalInput']['observations'][i]['rank'])
  assert row['reviewed_rank']==str(review['rank'])
  assert row['reviewed_item']==review['item']
  expected=review['reviewNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert row['review_note']==expected
 checked.append({'artifact':stem,'sourceRecords':len(rows),'allCurrentReviewedFieldsSurvive':True})
for k in range(2):
 stem='export-fixture'+str(k);r=json.loads(Path(stem+'.json').read_text());pairs=list(csv.DictReader(io.StringIO(Path(stem+'-pairs.csv').read_text())))
 assert len(pairs)==len(r['pairs'])
 for x,y in zip(pairs,r['pairs']):
  assert x['left_item']==y['left'] and x['right_item']==y['right'] and x['comparison']==y['kind']
  assert [int(x['A_left_rank']),int(x['A_right_rank'])]==y['rankA']
  assert [int(x['B_left_rank']),int(x['B_right_rank'])]==y['rankB']
 md=Path(stem+'.md').read_text();assert all(x['id'] in md for x in r['reviews']);assert 'Reversed pairs: '+str(r['discordant']) in md
assert '=SUM(1,2)\n"quoted", verify' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParsing':True,'audits':checked,'pairRowsAndCurrentRanksPreserved':True,'formulaLikeMultilineFieldEscaped':True,'markdownCurrent':True},indent=2));print('PASS independent JSON/CSV/Markdown artifact verification')
