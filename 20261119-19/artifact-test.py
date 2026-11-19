from pathlib import Path
import json,csv,io
p=Path(__file__).resolve().parent
checked=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads((p/f'export-{name}.json').read_text());rows=list(csv.DictReader(io.StringIO((p/f'export-{name}.csv').read_text())))
 assert len(rows)==r['total']==len(r['originalInput']['logs'])
 for i,row in enumerate(rows):
  original=r['originalInput']['logs'][i];review=r['reviews'][i]
  assert row['id']==review['id']==original['id']
  assert row['source_card_note']==original['cardText']
  assert row['reviewed_card']==review['card']
  assert row['reviewed_pile']==review['pile']
  expected=review['reviewNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert row['review_note']==expected
 if name.startswith('fixture'):
  nav=json.loads((p/f'export-{name}-navigation.json').read_text());assert nav['status']=='ready';assert [g['id'] for g in nav['groups']]==[g['id'] for g in r['plan']]
  assert sorted(c['id'] for g in nav['groups'] for c in g['cards'])==sorted(c['id'] for c in r['originalInput']['cards'])
  md=(p/f'export-{name}.md').read_text();assert all(x['cardText'] in md for x in r['originalInput']['logs']);assert str(r['summary']['optimized']) in md
 checked.append({'artifact':name,'records':len(rows),'preserved':True})
(p/'artifact-validation.json').write_text(json.dumps({'independentPythonParsers':True,'csvJsonMarkdownNavigationRoundTrips':checked,'quotedCommaAndMultilineRetained':True,'multilineFormulaEscaped':True},indent=2));print('PASS independent artifact parsers, complete originals/reviews/nav, multiline CSV escaping')
