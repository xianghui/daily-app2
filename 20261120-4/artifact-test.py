import csv,json,math
from pathlib import Path
count=0
for p in Path('.').glob('export-*.json'):
 d=json.loads(p.read_text());assert d['schema']=='variability-harbor/v1'
 assert d['total']==len(d['originalInput']['records'])==len(d['reviews'])
 assert d['total']==d['approved']+d['held']
 assert [r['id'] for r in d['reviews']]==[r['id'] for r in d['originalInput']['records']]
 assert sum(len(q['batchIds']) for q in d['plan'])==d['approved']
 for q in d['plan']:
  selected=[r for r in d['reviews'] if r['decision']=='approve' and r['target']==q['id']]
  if not selected:assert q['status']=='no approved observations';continue
  gaps=[float(n) for r in selected for n in r['gaps'].split(',')];service=[float(n) for r in selected for n in r['service'].split(',')]
  mg=sum(gaps)/len(gaps);ms=sum(service)/len(service)
  ca=sum((x-mg)**2 for x in gaps)/(len(gaps)-1)/mg**2;cs=sum((x-ms)**2 for x in service)/(len(service)-1)/ms**2
  assert math.isclose(q['arrival']['mean'],mg);assert math.isclose(q['work']['mean'],ms)
  assert math.isclose(q['arrival']['cv2'],ca,abs_tol=1e-12);assert math.isclose(q['work']['cv2'],cs,abs_tol=1e-12)
  if ms>=mg:assert q['wait'] is None
  else:assert math.isclose(q['wait'],(ca+cs)/2*(ms/mg)/(1-ms/mg)*ms,abs_tol=1e-12)
 cp=p.with_suffix('.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));assert len(rows)==d['total']
  for src,r in zip(d['reviews'],rows):
   original=next(x for x in d['originalInput']['records'] if x['id']==src['id'])
   assert r['id']==src['id'];assert r['original_text']==original['text'];assert r['reviewed_queue']==src['target'];assert r['decision']==src['decision']
   assert r['reviewed_gaps_min']==src['gaps'];assert r['reviewed_service_min']==src['service']
   note=src['reviewNote'];assert r['review_note']==("'"+note if note and note[0] in '=+-@\t\r' else note)
 qp=p.with_name(p.stem+'-queues.csv')
 if qp.exists():
  qs=list(csv.DictReader(qp.open(newline='')));assert len(qs)==len(d['plan'])
  for q,r in zip(d['plan'],qs):
   assert q['id']==r['queue'];assert r['batch_ids']==', '.join(q['batchIds'])
   if q.get('wait') is not None:assert math.isclose(float(r['approx_queue_wait_min']),q['wait'])
   else:assert r['approx_queue_wait_min']==''
 count+=1
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
m=json.loads(Path('export-max.json').read_text());assert m['total']==8 and m['metrics']['sampleCount']==256 and m['reviews'][-1]['reviewNote']=='last note\nkept'
print('PASS independent Python artifact parsing, original/row preservation, means/variance/wait recomputation, reviewed multiline and formula escaping:',count,'JSON audits')
