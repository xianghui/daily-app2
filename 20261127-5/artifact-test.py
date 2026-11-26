import json,csv,io,sys
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-';checks=0
for f in Path('.').glob(prefix+'*.json'):
 a=json.loads(f.read_text())
 if not isinstance(a,dict) or a.get('schema')!='roomkind-v1':continue
 n=len(a['original']['records']);assert len(a['review'])==n;checks+=1
 audit=Path(str(f).removesuffix('.json')+'.audit.csv');manifest=Path(str(f).removesuffix('.json')+'.manifest.csv')
 if audit.exists():
  rows=list(csv.DictReader(io.StringIO(audit.open(newline='').read())))
  assert len(rows)==n;checks+=1
  for i,r in enumerate(rows):
   v=a['review'][i];orig=a['original']['records'][i]
   for key,want in [('id',v['id']),('original_note',orig['note']),('original_kg',str(orig['kg'])),('reviewed_kg',str(v['kg'])),('decision',v['decision']),('reviewed_profile',v['profile']),('reviewer_note',v['reviewerNote'])]:
    safe="'"+want if want and want[0] in '=+-@\t\r' and key not in ['original_kg','reviewed_kg'] else want
    assert r[key]==safe,(f,key,r[key],safe);checks+=1
 if manifest.exists():
  assert a['releaseReady'];rows=list(csv.DictReader(manifest.open(newline='')));assert len(rows)==n;assert sorted(r['lot_id'] for r in rows)==sorted(r['id'] for r in a['review']);checks+=3
  for g in a['rooms']:
   rr=[r for r in rows if int(r['room'])==g['room']];assert sum(int(r['kg']) for r in rr)==g['kg'];assert g['kg']<=a['original']['capacityKg'];roles={r['ethylene_role'] for r in rr};assert not {'producer','sensitive'}<=roles;checks+=3
   for r in rr:
    p=next(p for p in a['original']['profiles'] if p['id']==r['profile']);assert p['minC']<=int(r['min_C'])<=int(r['max_C'])<=p['maxC'];assert p['minRH']<=int(r['min_RH'])<=int(r['max_RH'])<=p['maxRH'];checks+=2
 md=Path(str(f).removesuffix('.json')+'.md')
 if md.exists():
  s=md.read_text();assert ('REVIEWED MANIFEST' if a['releaseReady'] else 'DRAFT / NOT RELEASED') in s
  for r in a['review']:assert json.dumps(r['id'],ensure_ascii=False) in s;checks+=1
  if 'reviewed' in f.name:assert '=SUM(1,2)\\nReviewed' in s;checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps(dict(independentParser='Python stdlib csv/json',assertions=checks),indent=2));assert checks>100;print('PASS artifacts',prefix,checks)
