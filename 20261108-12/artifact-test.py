import csv,json,io
from pathlib import Path
checks=[]
for name in ['reviewed','escaping']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())));assert len(rows)==len(a['input']['records'])==len(a['records'])
 for actual,r in zip(rows,a['records']):
  for key,source in [('id','id'),('text','text'),('reviewedGold','gold'),('originalExpected','expected'),('predicted','predicted'),('note','note'),('action','action')]:
   v=r[source];v="'"+v if v and v[0] in '=+-@\t\r' else v;assert actual[key]==v,(name,key,actual[key],v)
 checks.append(name+' CSV all rows/fields roundtrip with spreadsheet-safe formula prefix')
a=json.loads(Path('export-reviewed.json').read_text());assert a['records'][0]['gold']=='events';assert a['records'][0]['expected']=='renew';assert a['records'][0]['predicted']=='renew';assert a['records'][0]['note']=='Reviewed, "quoted"\nsecond line'
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());assert len(a['records'])==len(a['input']['records']);assert [r['id'] for r in a['records']]==[r['id'] for r in a['input']['records']]
 for split in ['calibration','test']:
  rs=[r for r in a['records'] if r['split']==split and r['decision']!='exclude'];routed=[r for r in rs if r['action']=='route'];correct=sum(r['predicted']==r['gold'] for r in routed);m=a['metrics'][split];assert m['included']==len(rs);assert m['routed']==len(routed);assert m['correct']==correct;assert m['errors']==len(routed)-correct;assert m['abstained']==len(rs)-len(routed)
checks.append('independent JSON record conservation and split/precision/coverage count recomputation')
Path('artifact-validation.json').write_text(json.dumps({'checks':checks},indent=2));print('PASS independent JSON/CSV artifact checks')
