import json,csv,io
from pathlib import Path
checks=[]
for stem in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())));assert len(rows)==len(a['records'])
 for x,r in zip(rows,a['records']):
  for k in ['id','owner','action','note']:
   expected=r[k];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected
   assert x[k]==expected,(k,x[k],expected)
  assert x['source']==r['text'];assert x['reviewedMode']==r['item'];assert int(x['rpn'])==r['severity']*r['occurrence']*r['detection'];assert x['selected']==('yes' if r['selected'] else 'no')
 checks.append({'file':stem,'rows':len(rows)})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in a['records']);assert '=1+1' in md and 'second line' in md
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'csvParsedIndependently':checks,'allRecordsPreserved':True,'formulaMultilineEscaped':True,'editedFieldsCurrent':True,'markdownAllIssues':True},indent=2));print('PASS independent artifact checks')
