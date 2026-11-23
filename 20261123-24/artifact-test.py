from pathlib import Path
import json,csv,io,os
prefix=os.environ.get('PREFIX','');checks=0;files=[]
def esc(s):
 s=str(s)
 return "'"+s if s and s[0] in '=+-@\t\r' else s
for f in sorted(Path('.').glob(prefix+'export-*.json')):
 if f.name.endswith('.manifest.json'):continue
 r=json.loads(f.read_text());records=r['originalInput']['records'];reviews=r['reviews'];rows=r['checks'];assert len(records)==len(rows)==len(reviews)
 assert r['metrics']['records']==sum(r['metrics'][k] for k in ['ready','blocked','held']);checks+=2
 for i,row in enumerate(rows):
  assert row['id']==records[i]['id']==reviews[i]['id'];checks+=1
  if row['status']=='ready':
   q=int(row['raw'],8);mask=int(row['mask'],8);actual=int(row['effectiveMode'],8)
   # Independent per-digit arithmetic, no bitwise inversion.
   result=''
   for a,b in zip(row['raw'],row['mask']):
    result+=str(sum(w for w in [1,2,4] if int(a)//w%2 and not int(b)//w%2))
   assert result==row['effectiveMode'];assert actual<=q;assert actual+int(row['removedMode'],8)==q
   assert row['baselineMode']==(('-'+format(-q+mask,'03o')) if q-mask<0 else format(q-mask,'03o'))
   assert row['differentFromBaseline']==(actual!=q-mask);checks+=5
 assert r['metrics']['changedInterpretations']==sum(x.get('differentFromBaseline',False) for x in rows);checks+=1
 base=f.name[:-5];csvfile=Path(base+'.csv');md=Path(base+'.md');manifest=Path(base+'.manifest.json')
 if csvfile.exists():
  parsed=list(csv.DictReader(io.StringIO(csvfile.read_text(newline='') if False else csvfile.open(newline='').read())));assert len(parsed)==len(rows)
  for i,x in enumerate(parsed):
   assert x['id']==esc(records[i]['id']);assert x['source_context']==esc(records[i]['context']);assert x['original_requested_mode']==esc(records[i]['raw']);assert x['reviewed_requested_mode']==esc(reviews[i]['raw']);assert x['review_note']==esc(reviews[i]['note']);assert x['status']==rows[i]['status'];assert x['effective_mode']==rows[i].get('effectiveMode','');checks+=7
 if manifest.exists():
  out=json.loads(manifest.read_text());assert [x['id'] for x in out]==[x['id'] for x in rows if x['status']=='ready']
  for x in out:assert len(x['effectiveMode'])==3;assert int(x['effectiveMode'],8)==(int(x['requestedMode'],8)&(511^int(x['umask'],8)));checks+=2
 if md.exists():
  for x in rows:assert json.dumps(x['id'],ensure_ascii=False) in md.read_text();checks+=1
 files.append(f.name)
assert files
Path(prefix+'artifact-validation.json').write_text(json.dumps({'auditFiles':files,'independentChecks':checks,'csvAndManifestAndMarkdownParsed':True},indent=2));print('PASS independent artifacts',checks)
