import csv,json,glob,os,math
prefix=os.environ.get('PREFIX',''); reports=[]
for path in glob.glob(prefix+'export-*.json'):
 if path.endswith('.release.json'): continue
 a=json.load(open(path)); assert a['schema']=='quantile-dock/v1'; assert len(a['rows'])==len(a['original']['batches']); assert a['metrics']['observations']==sum(len(x['values']) for x in a['rows'])
 for row,original in zip(a['rows'],a['original']['batches']):
  assert row['id']==original['id'] and row['values']==original['values']
  if row['decision']=='hold': assert row['result'] is None
  else:
   s=sorted(row['values']); n=len(s);p=row['percentile']/100
   if row['method']=='rank': expected=s[max(0,math.ceil(n*p)-1)]
   else:
    h=(n-1)*p;lo=math.floor(h);hi=math.ceil(h);expected=s[lo]*(1-h+lo)+s[hi]*(h-lo)
   assert math.isclose(row['result']['value'],expected,abs_tol=1e-8)
 cpath=path[:-5]+'.csv'
 if os.path.exists(cpath):
  cr=list(csv.DictReader(open(cpath,newline='')));assert len(cr)==len(a['rows'])
  for c,r in zip(cr,a['rows']):
   assert c['id']==r['id'];assert json.loads(c['values_json'])==r['values']; note=r['note'];assert c['note']==("'"+note if note and note[0] in '=+-@\t\r' else note)
 relpath=path[:-5]+'.release.json'
 if os.path.exists(relpath):
  release=json.load(open(relpath)); approved=[r for r in a['rows'] if r['decision']=='approve']; assert len(release['batches'])==len(approved)
  for r,e in zip(release['batches'],approved):assert r['values']==e['values'] and r['note']==e['note'] and r['result']==e['result']
 reports.append({'file':path,'batches':len(a['rows']),'observations':a['metrics']['observations'],'csv':os.path.exists(cpath),'release':os.path.exists(relpath)})
assert reports
json.dump(reports,open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independently parsed artifacts',len(reports))
