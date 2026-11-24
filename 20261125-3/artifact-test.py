import json,csv,glob,os,datetime
prefix=os.environ.get('PREFIX','');count=0;reports=[]
for f in glob.glob(prefix+'export-*.json'):
 if f.endswith('-fixtures.json'):continue
 d=json.load(open(f));assert d['app']=='Cron Witness';assert len(d['checks'])==len(d['reviews'])==len(d['originalInput']['records']);count+=3
 for c,r,o in zip(d['checks'],d['reviews'],d['originalInput']['records']):
  assert c['id']==r['id']==o['id'];count+=1
  if c['status']=='ready':
   times=c['result'];assert times==sorted(set(times));start=datetime.datetime.fromisoformat(c['patch']['start']+'T00:00:00+00:00');end=start+datetime.timedelta(days=c['patch']['days']);assert all(start<=datetime.datetime.fromisoformat(t.replace('Z','+00:00'))<end for t in times);assert len(times)<=512;assert set(c['events'])==set(times)-set(c['baseline']);count+=4
 csvfile=f[:-5]+'.csv'
 if os.path.exists(csvfile):
  rows=list(csv.DictReader(open(csvfile,newline='')));assert len(rows)==len(d['checks']);count+=1
  for row,c,r,o in zip(rows,d['checks'],d['reviews'],d['originalInput']['records']):
   for k,val in [('id',c['id']),('source_context',o['context']),('original_window',o['raw']),('reviewed_window',c['raw']),('review_note',r['note'])]:
    expected="'"+val if val.startswith(('=','+','-','@','\t','\r')) else val
    assert row[k]==expected,(k,row[k],expected);count+=1
 fixtures=f[:-5]+'-fixtures.json'
 if os.path.exists(fixtures):
  cases=json.load(open(fixtures))['cases'];ready=[c for c in d['checks'] if c['status']=='ready'];assert len(cases)==len(ready);count+=1
  for case,c in zip(cases,ready):assert case['expected']==c['result'] and case['cronProfile']==c['target'] and case['window']==c['patch'];count+=3
 reports.append(f)
assert reports
json.dump({'assertions':count,'parsedAudits':reports,'csvEscapingAndAllRecordPreservation':True},open(prefix+'artifact-validation.json','w'),indent=2)
print('PASS independent Python artifacts',count)
