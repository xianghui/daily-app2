import csv,json,math
from pathlib import Path
p=Path(__file__).resolve().parent
report=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads((p/f'export-{name}.json').read_text());rows=list(csv.DictReader((p/f'export-{name}.csv').open(newline='')))
 assert len(rows)==r['total']
 for c,x,o in zip(rows,r['reviews'],r['originalInput']['records']):
  assert c['id']==x['id']==o['id']
  assert c['original_text']==o['text']
  assert c['reviewed_station']==x['site']
  assert float(c['speed_m_s'])==x['speed']
  note=x['reviewNote'];safe="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert c['review_note']==safe
 for s in r['stations']:
  obs=[x for x in r['reviews'] if x['site']==s['id']]
  if not obs:assert s['summary'] is None;continue
  t=sum(x['minutes'] for x in obs);e=-sum(x['speed']*math.sin(math.radians(x['bearing']))*x['minutes'] for x in obs)/t;n=-sum(x['speed']*math.cos(math.radians(x['bearing']))*x['minutes'] for x in obs)/t
  assert abs(math.hypot(e,n)-s['summary']['vectorSpeed'])<1e-8
 report.append({'artifact':name,'rows':len(rows),'allOriginalsPreserved':True,'independentVectorRecalculation':True})
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV parser, formula/newline escaping, maximum batch and vector recomputation')
