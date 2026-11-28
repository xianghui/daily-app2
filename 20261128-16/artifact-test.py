import csv,json,itertools,pathlib,sys
count=0
for c in json.load(open('core-cases.json')):
 rows=[r for r in c['rows'] if r['decision']=='approve']; opts=[([r['pinned']] if r['pinned'] else next(a['options'] for a in c['source']['actions'] if a['id']==r['actionId'])) for r in rows]; best=None
 for binding in itertools.product(*opts):
  tokens=[x.split() for x in binding]
  if any(x==y[:len(x)] or y==x[:len(y)] for x,y in itertools.combinations(tokens,2)):continue
  score=(sum(k!=r['current'] for k,r in zip(binding,rows)),sum(map(len,tokens)),'|'.join(binding))
  if best is None or score<best[0]:best=(score,binding)
 got=c['result']['plan'];assert got['ready']==(best is not None);count+=1
 if best is not None:assert [b['shortcut'] for b in got['bindings']]==list(best[1]);assert got['changes']==best[0][0];count+=2
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
for path in pathlib.Path('.').glob(prefix+'*.json'):
 s=json.load(open(path))
 if not isinstance(s,dict) or s.get('format')!='chord-ledger-v1':continue
 assert len(s['source']['records'])==len(s['review'])==s['summary']['records'];count+=1
 assert [r['id'] for r in s['source']['records']]==[r['id'] for r in s['review']];count+=1
 plan=s['plan'];rows={r['id']:r for r in s['review']};actions={r['id']:r for r in s['source']['actions']}
 if plan['ready']:
  for b in plan['bindings']:
   r=rows[b['recordId']];assert r['decision']=='approve';assert b['shortcut'] in actions[r['actionId']]['options'];assert not r['pinned'] or b['shortcut']==r['pinned'];count+=3
  for x,y in itertools.combinations(plan['bindings'],2):
   a=x['shortcut'].split();b=y['shortcut'].split();assert a!=b[:len(a)] and b!=a[:len(b)];count+=1
 cp=path.with_suffix('.csv')
 if cp.exists():
  data=list(csv.DictReader(open(cp,newline='')));assert len(data)==len(s['review']);count+=1
  for i,(row,r) in enumerate(zip(data,s['review'])):
   for key in ['id','actionId','current','pinned','decision','reviewerNote']:
    v=r[key];expected="'"+v if v and v[0] in '=+-@\t\r' else v;assert row[key]==expected,(cp,key,row[key],expected);count+=1
   note=s['source']['records'][i]['note'];assert row['originalNote']==("'"+note if note[0] in '=+-@\t\r' else note);count+=1
 kp=path.with_suffix('.keymap.json')
 if kp.exists():
  k=json.load(open(kp));assert k['format']=='neutral-keymap-v1';assert k['context']==s['source']['context'];assert k['bindings']==[{'action':b['actionId'],'keys':b['shortcut'].split()} for b in plan['bindings']];count+=3
 mp=path.with_suffix('.md')
 if mp.exists():
  m=mp.read_text();assert all(r['reviewerNote'] in m for r in s['review']);assert all(r['note'] in m for r in s['source']['records']);count+=2
result={'assertions':count,'independentExactSearchCases':240,'scope':prefix};json.dump(result,open(prefix+'artifact-validation.json','w'),indent=2);print(result)
