import csv,json
from pathlib import Path
out=[]
for label in ['fixture0','fixture1','reviewed']:
 r=json.load(open('export-'+label+'.json'));name='export-'+label+('-audit-csv.csv' if label.startswith('fixture') else '-audit.csv');rows=list(csv.DictReader(open(name,newline='')));assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['reviews']]
 for a,b in zip(rows,r['reviews']):
  assert a['original_text']==b['text'];assert a['reviewed_label']==b['label'];assert a['immutable_AI_prediction']==b['predicted'];assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
 out.append({'artifact':name,'rows':len(rows),'allOriginalsAndReviewedLabelsPreserved':True,'formulaSafeMultilineNotes':True})
r=json.load(open('export-max.json'));assert len(r['reviews'])==64;assert len(r['originalInput']['target'])==32
Path('artifact-validation.json').write_text(json.dumps(out,indent=2));print('PASS independent Python CSV/JSON audit round trips')
