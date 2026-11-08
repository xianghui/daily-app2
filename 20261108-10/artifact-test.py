import json,csv,io
from pathlib import Path
checks=[]
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())))
assert len(rows)==len(a['records'])==3
for r,s in zip(rows,a['records']):
 for k,original in [('id','id'),('original_risk','text'),('trigger','trigger'),('cadence','cadence'),('owner','owner'),('note','note')]:assert r[k]==s[original],(k,r,s)
assert rows[0]['owner']=='Casey, "lead"';assert '\n' in rows[0]['note'];checks.append('CSV independent parse preserves edited fields, quoted commas and newlines')
e=json.loads(Path('export-escaping.json').read_text());c=list(csv.DictReader(io.StringIO(Path('export-escaping.csv').read_text())))
assert c[0]['original_risk']=="'"+e['records'][0]['text'];assert c[0]['note']=="'"+e['records'][0]['note'];checks.append('Multiline spreadsheet-formula fields safely prefixed in CSV; original JSON unchanged')
for name in ['Cloud','Community','held','max','roundtrip','floor','phone','offline']:
 a=json.loads(Path('export-'+name+'.json').read_text());assert len(a['records'])==len(a['input']['risks']);assert [r['id'] for r in a['records']]==[r['id'] for r in a['input']['risks']];assert a['metrics']['reviewedLinked']+a['metrics']['held']==a['metrics']['total'];assert sum(len(x['risks']) for x in a['monitors'])==a['metrics']['reviewedLinked']
checks.append('All exported risks survive; monitor assignments and totals reconcile')
md=Path('export-reviewed.md').read_text();assert 'Any uncovered catering shift' in md;assert 'Every morning' in md;assert 'Casey, "lead"' in md
assert Path('export-held.md').read_text().count('HOLD —')==3;checks.append('Markdown reflects current approved monitor fields and explicit held gaps')
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'passed':True},indent=2));print('\n'.join(checks))
