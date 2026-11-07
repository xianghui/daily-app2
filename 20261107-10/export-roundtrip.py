from pathlib import Path
import json,csv,io
reports=[]
for p in Path('.').glob('export-*.json'):
 if p.name=='export-roundtrip-validation.json':continue
 a=json.loads(p.read_text());assert a['app']=='Revision Dock'
 old={r['id']:r['step'] for r in a['original']['before']};new={r['id']:r['step'] for r in a['original']['after']}
 assert len(a['rows'])==len(new)
 assert {r['id']:r['step'] for r in a['rows']}==new
 seen=[r['previous'] for r in a['rows'] if r['previous']]+[r['id'] for r in a['retired']]
 assert len(seen)==len(set(seen))==len(old) and set(seen)==set(old)
 for r in a['rows']:
  assert r['reviewed'] is True
  if r['previous']:assert r['previousStep']==old[r['previous']]
 for side in ['before','after']:
  buf=io.StringIO();w=csv.DictWriter(buf,fieldnames=['id','step']);w.writeheader();w.writerows(a['original'][side]);assert list(csv.DictReader(io.StringIO(buf.getvalue())))==a['original'][side]
 csvp=p.with_suffix('.csv')
 if csvp.exists():
  rows=list(csv.DictReader(io.StringIO(csvp.read_text())))
  assert len(rows)==len(new)+len(a['retired'])
  safe=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
  for i,r in enumerate(a['rows']):
   for k,v in {'old_id':r['previous'],'old_step':r['previousStep'],'new_id':r['id'],'new_step':r['step'],'owner':r['owner'],'note':r['note']}.items():assert rows[i][k]==safe(v),(p,k)
  for row,oldrow in zip(rows[len(a['rows']):],a['retired']):
   assert row['kind']=='retired / unlinked' and row['old_id']==safe(oldrow['id']) and row['old_step']==safe(oldrow['step']) and not row['new_id']
 assert a['metrics']['linked']+a['metrics']['added']==len(new)
 assert a['metrics']['linked']+a['metrics']['retired']==len(old)
 reports.append({'artifact':p.name,'oldRecords':len(old),'newRecords':len(new),'allSourceIDsConservedExactlyOnce':True,'sourceCSVRoundtrip':True,'csvChecked':csvp.exists()})
assert reports
Path('export-roundtrip-validation.json').write_text(json.dumps(reports,indent=2));print('Parsed and reconciled',len(reports),'actual downloaded JSON artifacts; matching CSVs checked including formula/newline quoting.')
