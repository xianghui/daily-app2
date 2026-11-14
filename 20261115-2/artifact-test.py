import csv,json,math
from pathlib import Path
checks=[]
for file in sorted(Path('.').glob('export-*.json')):
 r=json.loads(file.read_text());assert r['total']==len(r['originalInput']['records'])==len(r['reviews']);assert r['approved']+r['held']==r['total'];assert [z['id'] for z in r['reviews']]==[z['id'] for z in r['originalInput']['records']]
 assert sum(z['pooled']['n'] if z['pooled'] else 0 for z in r['outcomes'])==r['approved']
 for z in r['outcomes']:
  rs=[x for x in r['reviews'] if x['decision']=='approve' and x['kind']==z['id']]
  if not rs:assert z['pooled'] is None;continue
  weights=[1/x['se']**2 for x in rs];m=sum(x['effect']*w for x,w in zip(rs,weights))/sum(weights);assert math.isclose(m,z['pooled']['mean'],abs_tol=1e-9)
  for v in z['leaveOneOut']:
   rest=[x for x in rs if x['id']!=v['omitted']];assert len(rest)==v['n'];m=sum(x['effect']/x['se']**2 for x in rest)/sum(1/x['se']**2 for x in rest);assert math.isclose(m,v['mean'],abs_tol=1e-9)
 checks.append(file.name)
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')));assert len(rows)==r['total']
 for x,y in zip(r['reviews'],rows):
  assert x['id']==y['id'];assert float(y['reviewedEffect'])==x['effect'];assert float(y['reviewedSE'])==x['se'];assert x['decision']==y['decision']
  for field in ['owner','reviewNote','study']:
   expected=x[field];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected;assert y[field]==expected,(field,y[field],expected)
  assert r['originalInput']['records'][rows.index(y)]['description']==y['originalDescription']
reviewed=json.loads(Path('export-reviewed.json').read_text());assert '\n' in reviewed['reviews'][0]['reviewNote'];assert reviewed['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text().replace('\n  ','\n')
Path('artifact-validation.json').write_text(json.dumps(dict(jsonArtifactsReopened=checks,csvRowsAndSignedNumbersPreserved=True,formulaLikeMultilineEscaped=True,markdownReopened=True,leaveOneOutRecalculated=True),indent=2));print('PASS actual downloaded JSON/CSV/Markdown artifacts')
