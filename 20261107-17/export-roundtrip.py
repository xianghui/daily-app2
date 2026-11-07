from pathlib import Path
import csv,json
out=[]
for stem in ['edited','quoted']:
 a=json.loads(Path(f'export-{stem}.json').read_text());rows=list(csv.DictReader(Path(f'export-{stem}.csv').open(newline='')))
 assert len(rows)==len(a['rows'])
 for r,s in zip(rows,a['rows']):
  for key,source in [('id','id'),('original','question'),('question','edited'),('note','note')]:
   v=s[source];expected="'"+v if v and v[0] in '=+-@\t\r' else v
   assert r[key]==expected,(key,r[key],expected)
  assert r['decision']==s['decision'];assert int(r['seconds'])==s['seconds']
 assert a['metrics']['reviewedSeconds']==sum(x['seconds'] for x in a['form'])
 out.append({'fixture':stem,'rows':len(rows),'allFieldsPreserved':True,'formulaEscape':True})
Path('export-roundtrip-validation.json').write_text(json.dumps(out,indent=2));print(out)
