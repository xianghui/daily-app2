import csv,json,math,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
report=[]
for name in ['fixture0','fixture1','reviewed','max','undo','unhold','base']:
 p=Path(prefix+name+'.json')
 if not p.exists(): continue
 d=json.loads(p.read_text());assert len(d['jobs'])==len(d['review'])==len(d['source']['records'])
 cp=Path(prefix+name+'.csv')
 if cp.exists():
  rows=list(csv.DictReader(cp.open(newline='')));assert len(rows)==len(d['jobs'])
  for i,(r,j) in enumerate(zip(rows,d['jobs'])):
   assert r['id']==d['source']['records'][i]['id'];assert r['originalNote']==d['source']['records'][i]['note']
   txt=j['reviewerNote'];expected="'"+txt if txt[:1] in ['=','+','-','@','\t','\r'] else txt;assert r['reviewerNote']==expected
   if j['chosen']:assert r['chosenGear']==j['chosen']['id'];assert math.isclose(float(r['cadenceLow']),j['chosen']['cadenceLow'],abs_tol=1e-10)
 card=Path(prefix+name+'.cards.csv')
 if card.exists():
  rows=list(csv.DictReader(card.open(newline='')));assert len(rows)==len(d['source']['records']);assert all(r['ready']=='true' for r in rows);assert d['summary']['planReady']
 if name=='reviewed':assert d['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "finish", approved';assert d['review'][0]['reviewerNote'] in Path(prefix+name+'.md').read_text()
 report.append({'artifact':str(p),'preservedRows':len(d['jobs']),'independentCsvParse':cp.exists(),'cardsParse':card.exists()})
assert report
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent artifacts',len(report))
