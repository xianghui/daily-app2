import json,csv,pathlib
count=0
for p in pathlib.Path('.').glob('export-*.json'):
 a=json.loads(p.read_text());d=a['input'];r=a['records']
 assert len(r)==len(d['documents'])
 for x,s in zip(r,d['documents']):
  assert all(x[k]==s[k] for k in ['id','packet','name','text'])
  assert x['target'] in [t['id'] for t in d['types']]
 for packet in a['packets']:
  for slot in packet['slots']:
   ids=[x['id'] for x in r if x['packet']==packet['packet'] and x['decision']=='accept' and x['target']==slot['type']]
   assert ids==slot['documents'];assert slot['status']==('missing' if not ids else 'present' if len(ids)==1 else 'duplicate')
 assert a['metrics']['missing']==sum(s['status']=='missing' for p in a['packets'] for s in p['slots'])
 assert a['metrics']['duplicates']==sum(s['status']=='duplicate' for p in a['packets'] for s in p['slots'])
 count+=1
for key in ['reviewed','escaping']:
 a=json.loads(pathlib.Path(f'export-{key}.json').read_text());rows=list(csv.DictReader(open(f'export-{key}.csv')))
 assert len(rows)==len(a['records'])
 for x,r in zip(rows,a['records']):
  for field,original in [('description','text'),('note','note'),('filename','name'),('packet','packet')]:
   t=r[original];expect="'"+t if t and t[:1] in '=+-@\t\r' else t;assert x[field]==expect
  assert x['reviewed_type']==(r['target'] if r['decision']=='accept' else '')
a=json.loads(pathlib.Path('export-reviewed.json').read_text());s=pathlib.Path('export-reviewed.md').read_text()
for p in a['packets']:
 assert '## '+p['packet'] in s
 for slot in p['slots']:assert slot['type']+' — '+slot['status'].upper() in s
pathlib.Path('artifact-validation.json').write_text(json.dumps({'jsonFilesParsed':count,'recordsPreserved':True,'slotCountsIndependentlyRecomputed':True,'csvQuotesNewlinesFormulaEscaping':True,'reviewedChecklistParsed':True},indent=2))
print('PASS independent JSON/CSV/checklist parsing',count)
