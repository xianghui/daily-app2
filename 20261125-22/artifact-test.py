import csv,json,glob,os
prefix=os.environ.get('PREFIX','')
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 a=json.load(open(prefix+'export-'+name+'.json'));rows=list(csv.DictReader(open(prefix+'export-'+name+'.csv',newline='')));f=list(csv.DictReader(open(prefix+'export-'+name+'.followup.csv',newline='')))
 assert len(rows)==len(a['original']['capabilities'])+len(a['original']['suppliers'])+len(a['original']['evidence'])
 assert len(f)==len(a['original']['suppliers'])
 assert [r['id'] for r in rows if r['kind']=='evidence']==[r['id'] for r in a['original']['evidence']]
 for s in a['suppliers']:
  row=next(r for r in f if r['supplier']==s['id']);assert json.loads(row['missing_capabilities_json'])==s['missing'];assert row['status']==s['status']
 for e in a['evidence']:
  row=next(r for r in rows if r['kind']=='evidence' and r['id']==e['id']);assert row['description']==e['context'];assert row['reviewed_supplier']==e['supplier'];assert row['capability']==e['capability']
  note=e['note'];escaped="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note;assert row['note']==escaped
 md=open(prefix+'export-'+name+'.md').read()
 for e in a['evidence']:assert e['context'] in md;assert e['note'] in md
 checks.append(name+' independently parsed JSON/CSV/follow-up/Markdown with no record loss')
json.dump(checks,open(prefix+'artifact-validation.json','w'),indent=2);print('PASS artifacts',len(checks))
