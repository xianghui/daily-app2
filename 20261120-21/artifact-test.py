from pathlib import Path
import json,csv,io
p=Path(__file__).resolve().parent;report=[]
for f in sorted(p.glob('export-*.json')):
 r=json.loads(f.read_text());assert r['schema']=='contrast-atelier/v1'
 assert len(r['reviews'])==len(r['originalInput']['records'])==len(r['checks'])==r['total']
 assert [x['id']for x in r['reviews']]==[x['id']for x in r['originalInput']['records']]
 assert r['approved']+r['held']==r['total'];approved=[x for x in r['checks']if x['decision']=='approve']
 assert r['beforeFailures']==sum(x['beforeRatio']+1e-12<x['target']for x in approved)
 assert r['afterFailures']==sum(x['finalRatio']+1e-12<x['target']for x in approved)
 c=f.with_suffix('.csv')
 if c.exists():
  rows=list(csv.DictReader(io.StringIO(c.open(newline='').read())));assert len(rows)==r['total']
  for x,y,o,ch in zip(rows,r['reviews'],r['originalInput']['records'],r['checks']):
   assert x['id']==y['id'];assert x['reviewed_foreground']==y['foreground'];assert x['original_foreground']==o['foreground'];assert x['original_text']==o['text'];note=y['reviewNote'];assert x['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r'))else note)
   if ch.get('finalRatio')is not None:assert float(x['final_ratio'])==ch['finalRatio']
 c=f.with_suffix('.css')
 if c.exists():
  s=c.read_text()
  for row,ch in zip(r['reviews'],r['checks']):
   key='--'+row['id']+'-foreground:'
   if row['decision']=='hold':assert key not in s
   else:
    assert key+' '+ch['finalForeground']+';'in s
    assert '--'+row['id']+'-background: '+row['background']+';'in s
 report.append({'artifact':f.name,'records':r['total'],'beforeFailures':r['beforeFailures'],'afterFailures':r['afterFailures'],'originalsAndCurrentReviewsPreserved':True})
assert len(report)>=10
for j in range(2):
 r=json.loads((p/f'export-fixture{j}.json').read_text());m=(p/f'export-fixture{j}.md').read_text();assert all(x['text']in m for x in r['originalInput']['records'])
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent artifact checks:',len(report))
