import csv,json,io
from pathlib import Path
report=[]
for p in Path('.').glob('export-*-json.json'):
 d=json.loads(p.read_text());assert d['schema']=='token-passage/1'
 assert len(d['reviews'])==sum(len(t[s])for t in d['originalInput']['transitions']for s in ['consume','produce'])
 stem=str(p).removesuffix('-json.json');audit=Path(stem+'-csv.csv');plan=Path(stem+'-plan-csv.csv');md=Path(stem+'-markdown.md')
 if audit.exists():
  rows=list(csv.DictReader(io.StringIO(audit.read_text())));assert len(rows)==len(d['reviews'])
  for a,r in zip(rows,d['reviews']):
   assert a['reviewed_place']==r['place'];assert int(a['reviewed_count'])==r['count'];assert a['decision']==r['decision'];assert a['note']==("'"+r['note']if r['note'][:1]in '=+-@\t\r'and r['note'] else r['note'])
 if plan.exists():
  rows=list(csv.DictReader(io.StringIO(plan.read_text())));assert len(rows)==d['analysis']['reachableStates']
  for a,s in zip(rows,d['analysis']['states']):
   assert json.loads(a['shortest_transition_path_json'])==s['path'];assert [int(a[k])for k in d['analysis']['places']]==s['marking']
 if md.exists():assert json.dumps(d,ensure_ascii=False,indent=2)in md.read_text()
 if 'reviewed' in p.name:assert d['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 report.append({'file':str(p),'records':len(d['reviews']),'csvParsed':audit.exists(),'stateCsvParsed':plan.exists(),'markdownParsed':md.exists()})
assert len(report)>=8
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent downloaded artifact parsing',len(report))
