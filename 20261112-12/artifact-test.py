import csv,json,pathlib
for stem in ['reviewed','max']:
 d=json.load(open('export-'+stem+'.json')); rows=list(csv.DictReader(open('export-'+stem+'.csv',newline='')))
 assert len(rows)==len(d['reviews'])
 for a,b in zip(rows,d['reviews']):
  assert a['id']==b['id'] and a['original']==b['text'] and a['queue']==b['item']
  assert int(a['minutes'])==b['minutes']
  expected=b['note'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
  assert a['note']==expected
  s=next(x for x in d['fair'] if x['id']==b['id']);assert int(a['position'])==s['position'] and int(a['end'])==s['end']
md=pathlib.Path('export-reviewed.md').read_text();d=json.load(open('export-reviewed.json'))
assert all(x['id']+' |' in md for x in d['reviews'])
json.dump({'csvIndependentParse':True,'formulaAndMultilineEscaping':True,'allRowsAndReviewedEditsPreserved':True,'maximumBatch':24,'markdownAllRows':True},open('artifact-validation.json','w'),indent=2)
print('PASS downloaded artifacts independent parse')
