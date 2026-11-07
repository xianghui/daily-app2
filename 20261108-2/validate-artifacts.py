from pathlib import Path
import csv,json
checks=[]
for name in ['reviewed','special']:
 a=json.loads(Path('export-'+name+'.json').read_text())
 rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(a['records'])==len(a['input']['records'])
 assert len(set(r['id'] for r in a['records']))==len(rows)
 for r,s in zip(rows,a['records']):
  for field,key in [('id','id'),('text','text'),('original_label','originalLabel'),('reviewed_label','label'),('decision','decision'),('note','note')]:
   value=str(s[key]);value="'"+value if value.startswith(('=','+','-','@','\t','\r')) else value
   assert r[field]==value,(field,r[field],value)
 checks.append({'artifact':name,'rows':len(rows),'allFieldsRoundtrip':True})
Path('artifact-validation.json').write_text(json.dumps({'parser':'Python csv.DictReader independent of JS exporter','checks':checks,'allOriginalRecordsPreserved':True},indent=2))
print('Reviewed and special-case CSV/JSON fields and records roundtrip.')
