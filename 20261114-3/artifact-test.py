import csv,json,math
from pathlib import Path
checks=[]
for prefix in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 d=json.loads(Path(prefix+'.json').read_text());rows=list(csv.DictReader(Path(prefix+'.csv').open(newline='')))
 assert len(rows)==len(d['reviews'])==len(d['originalInput']['records'])
 for i,(row,r) in enumerate(zip(rows,d['reviews'])):
  assert row['id']==r['id'] and int(row['population'])==r['count'] and row['stratum']==r['kind']
  for field in ['owner','review_note']:
   v=r['owner' if field=='owner' else 'reviewNote'];safe="'"+v if v and v[0] in '=+-@\t\r' else v
   assert row[field]==safe,(row[field],safe)
 p=d['plan'];g=p['groups'];assert sum(x['sample'] for x in g)==d['originalInput']['sample'];assert sum(x['population'] for x in g)==sum(r['count'] for r in d['reviews'])
 variance=sum((x['population']/p['population'])**2*x['sd']**2*(1/x['sample']-1/x['population']) for x in g)
 assert math.isclose(variance,p['variance'],abs_tol=1e-12)
 assert p['variance']<=p['baselineVariance']+1e-10
 checks.append({'artifact':prefix,'records':len(rows),'sample':p['sample'],'variance':variance,'baselineVariance':p['baselineVariance']})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['owner'] and '\n' in r['reviews'][0]['reviewNote'];assert '"quoted"' in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown parsing, multiline/formula escaping, every record and variance/budget conservation')
