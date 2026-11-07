import json,csv,io
from pathlib import Path
checks=[]
for stem in ['edited','quoted']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(a['mentions'])
 for row,e in zip(rows,a['mentions']):
  for k in ['id','original','kind','canonical','note','origin']:
   target=str(e[k]);target="'"+target if target.startswith(('=','+','-','@','\t','\r')) else target
   assert row[k]==target,(row,k,target)
  assert int(row['excerpt'])==e['excerpt'] and int(row['start'])==e['start'] and int(row['end'])==e['end']
  assert (row['selected']=='true')==e['selected']
  c=a['chunks'][e['excerpt']-1];assert c['text'][e['start']:e['end']]==e['original']
 checks.append({'artifact':stem,'mentions':len(rows),'fieldsAndOffsetsRoundTrip':True})
md=Path('export-edited.md').read_text();assert 'Sarah Lee' in md and 'Excerpt 2' in md
for p in Path('.').glob('export-*.json'):
 if p.name=='export-roundtrip-validation.json':continue
 a=json.loads(p.read_text());assert sum(len(r['references']) for r in a['index'])==a['metrics']['accepted']
 assert len(a['mentions'])==a['metrics']['accepted']+a['metrics']['rejected']
 for c in a['chunks']:assert a['original'][c['offset']:c['offset']+len(c['text'])]==c['text']
Path('export-roundtrip-validation.json').write_text(json.dumps({'checks':checks,'markdownReviewedLabel':True,'allJSONSourceConservation':True},indent=2));print('JSON, CSV, Markdown artifacts parsed; reviewed fields, original sources and rejected mentions preserved.')
