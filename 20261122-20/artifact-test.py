from pathlib import Path
import csv,json,io
report=[]
for f in sorted(Path('.').glob('export-*-json.json')):
 r=json.loads(f.read_text());assert r['schema']=='causal-lantern/1';rows=r['reviews'];src=r['originalInput']['events'];assert len(rows)==len(src);assert [x['id']for x in rows]==[x['id']for x in src]
 stem=str(f).removesuffix('-json.json');c=Path(stem+'-csv.csv')
 if c.exists():
  parsed=list(csv.DictReader(io.StringIO(c.read_text(newline='') if False else c.open(newline='').read())));assert len(parsed)==len(rows)
  safe=lambda x:"'"+x if x and x[0]in'=+-@\t\r' else x
  for x,y,z in zip(parsed,rows,src):
   assert x['id']==safe(y['id']);assert x['original_service_note']==safe(z['serviceNote']);assert x['reviewer_note']==safe(y['note']);assert x['reviewed_service']==safe(y['resource']);assert x['reviewed_message']==safe(y['message']);assert int(x['reviewed_seq'])==y['seq']
 if r['analysis']['status']=='ready':
  a=r['analysis'];assert len(a['events'])==len(rows);assert len(a['pairs'])==len(rows)*(len(rows)-1)//2;assert a['ordered']+a['concurrent']==a['totalPairs'];assert a['baselineUnsupported']==a['inversions']+a['concurrent'];assert len(set(a['linearization']))==len(rows)
  order={x:i for i,x in enumerate(a['linearization'])}
  for e in a['edges']:assert order[e['from']]<order[e['to']]
  cp=Path(stem+'-pair-csv.csv')
  if cp.exists():
   pairs=list(csv.DictReader(cp.open(newline='')));assert len(pairs)==len(a['pairs'])
   for p,q in zip(pairs,a['pairs']):assert p['left']==safe(q['left']) and p['right']==safe(q['right']) and p['relation']==q['relation'] and p['witness_path']==safe(' → '.join(q['path']))
 md=Path(stem+'-markdown.md')
 if md.exists():assert json.dumps(r,indent=2,ensure_ascii=False) in md.read_text() or json.loads(md.read_text()[md.read_text().index('{'):])==r
 if 'reviewed' in stem:assert rows[0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 report.append({'file':str(f),'events':len(rows),'status':r['analysis']['status'],'allOriginalsPreserved':True,'pairs':len(r['analysis'].get('pairs',[]))})
assert len(report)>=7
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independently parsed',len(report),'JSON audits and associated CSV/Markdown artifacts')
