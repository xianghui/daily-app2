import csv,json,io,pathlib
from collections import Counter
reports=[]
for f in pathlib.Path('.').glob('export-*.json'):
 r=json.loads(f.read_text());assert len(r['originalInput']['records'])==r['total']==len(r['statuses']);assert r['retained']+r['suppressed']==r['total'];q=r['quasiColumns'];freq=Counter(tuple(str(o[k]) for k in q) for o in r['releaseRecords']);assert all(n>=r['originalInput']['k'] for n in freq.values());assert set(r['releaseColumns'])==set(o['id'] for o in r['reviews'] if o['decision']=='approve' and o['method']!='drop');assert all(o['id'] not in r['releaseColumns'] for o in r['reviews'] if o['role']=='direct');assert all(set(o)==set(r['releaseColumns']) for o in r['releaseRecords']);reports.append({'file':f.name,'originalRows':r['total'],'draftRows':r['retained']})
 def read(p):return list(csv.DictReader(io.StringIO(p.read_text(),newline='')))
 draft=f.with_name(f.stem+'-draft.csv');audit=f.with_name(f.stem+'-audit.csv')
 if draft.exists():
  rows=read(draft);assert len(rows)==r['retained'];assert list(csv.reader(io.StringIO(draft.read_text(),newline='')))[0]==r['releaseColumns']
  for a,b in zip(rows,r['releaseRecords']):
   for k,v in b.items():
    s=str(v)
    if isinstance(v,str) and s.startswith(('=','+','-','@','\t','\r')):s="'"+s
    assert a[k]==s,(f,k,a[k],s)
 if audit.exists():
  rows=read(audit);assert len(rows)==r['total']
  for a,b,s in zip(rows,r['originalInput']['records'],r['statuses']):assert json.loads(a['original_json'])==b and a['status']==s['status'] and int(a['group_size'])==s['groupSize']
r=json.loads(pathlib.Path('export-reviewed.json').read_text());assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"reviewed", with newline';assert r['reviews'][0]['reviewNote'] in pathlib.Path('export-reviewed.md').read_text();assert len(json.loads(pathlib.Path('export-max.json').read_text())['statuses'])==100
pathlib.Path('artifact-validation.json').write_text(json.dumps({'files':reports,'checks':['independent Python csv parser','all originals preserved in audit','draft source order and current review columns','formula-like multiline text string escaped','group-size threshold','suppressed rows excluded','direct columns absent','maximum batch restored']},indent=2));print('PASS parsed reviewed artifacts:',len(reports))
