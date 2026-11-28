from pathlib import Path
import csv,json,sys,io,math
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
report=[]
for name in ['fixture0','fixture1','reviewed','max']:
 s=json.loads(Path(prefix+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(prefix+name+'.csv').read_text())));assert len(rows)==len(s['source']['records'])==len(s['review'])==len(s['jobs'])
 for i,(j,row,orig) in enumerate(zip(s['jobs'],rows,s['source']['records'])):
  assert row['id']==orig['id']==j['id'];assert row['originalNote']==orig['note']
  note=j['reviewerNote'];expected="'"+note if note and note[0] in '=+-@\t\r' else note
  assert row['reviewerNote']==expected
  if j['chosen']:
   rate=j['chosen']['rate'];numerator=j['durationSec']*(rate+j['audioKbps'])*(1000+j['overheadPermille']);size=(numerator+7)//8+j['headerBytes'];assert size==j['chosen']['estimatedBytes']==int(row['estimatedBytes'])
   assert int(row['headroomBytes'])==j['capBytes']-size
   viable=[r for r in s['source']['hardware']['rates'] if r>=j['minVideoKbps'] and (j['durationSec']*(r+j['audioKbps'])*(1000+j['overheadPermille'])+7)//8+j['headerBytes']<=j['capBytes']]
   if j['settingId']=='auto':assert rate==max(viable)
 if name!='max':
  delivery=list(csv.DictReader(io.StringIO(Path(prefix+name+'.delivery.csv').read_text())));assert delivery==rows
  md=Path(prefix+name+'.md').read_text();assert all(j['id'] in md for j in s['jobs'])
 if name=='reviewed':assert s['review'][0]['reviewerNote']=='=SUM(1,2)\nCheck "delivery", approved'
 report.append({'artifact':name,'rows':len(rows),'independentIntegerFormulaAndCsvParse':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent Python artifact round trips',report)
