from pathlib import Path
import json,csv,io
reports=[]
for p in sorted(Path('.').glob('export-*-json.json')):
 r=json.loads(p.read_text());d=r['originalInput'];rows=r['reviews'];assert len(rows)==len(d['handoffs']);name=p.name.removesuffix('-json.json');cp=Path(name+'-csv.csv');mp=Path(name+'-markdown.md')
 if cp.exists():
  out=list(csv.DictReader(io.StringIO(cp.read_text())));assert len(out)==len(rows)
  def clean(x):return "'"+x if x and x[0]in '=+-@\t\r'else x
  for source,reviewed,actual in zip(d['handoffs'],rows,out):
   for key,value in {'handoff':source['id'],'original_from':source['from'],'original_to':source['to'],'reviewed_from':reviewed['from'],'reviewed_to':reviewed['to'],'decision':reviewed['decision'],'note':reviewed['note']}.items():assert actual[key]==clean(value),(key,value,actual)
 if mp.exists():
  s=mp.read_text();restored=json.loads(s[s.index('{\n  "schema"'):]);assert restored==r
 if r['analysis']['status']=='ready':
  a=r['analysis'];assert a['mandatoryCount']<=a['baselineCount'];assert a['mandatoryCount']+a['bypassCount']==len(d['gates'])
  for g in a['gates']:
   w=g['bypass']
   if not w:continue
   assert g['id']not in w['stages'];assert w['stages'][0]==d['start'];assert w['stages'][-1]==d['finish']
   for i,hid in enumerate(w['handoffs']):
    h=next(x for x in rows if x['handoff']==hid);assert(h['from'],h['to'])==tuple(w['stages'][i:i+2])
 if 'reviewed' in name:assert rows[0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 reports.append({'case':name,'sourceArrows':len(rows),'csv':cp.exists(),'markdown':mp.exists(),'status':r['analysis']['status']})
assert len(reports)>=7
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent downloaded artifacts',len(reports))
