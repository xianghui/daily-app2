import json,csv,io
from pathlib import Path
checks=[]
for name in ['reviewed','max','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text())))
 assert len(rows)==len(a['records'])==len(a['originalInput']['records'])
 for r,x in zip(rows,a['records']):
  assert r['id']==x['id'];assert r['unit']==x['unit'];assert r['rater']==x['rater'];assert r['source']==x['text'];assert r['reviewedCode']==x['item'];assert r['decision']==x['decision'];assert r['reviewerNote']==("'" if x['note'].startswith(('=','+','-','@','\t','\r')) else '')+x['note'];assert r['pairState']==next(p['state'] for p in a['pairs'] if p['unit']==x['unit'])
 # Independent categorical counts / ordered marginals.
 pairs=[p for p in a['pairs'] if p['state'] in ('agree','disagree')];n=len(pairs)
 assert sum(map(sum,a['matrix']))==n
 for i,ca in enumerate(a['categories']):
  for j,cb in enumerate(a['categories']):assert a['matrix'][i][j]==sum(p['codeA']==ca and p['codeB']==cb for p in pairs)
 checks.append({'artifact':name,'records':len(rows),'paired':n,'allOriginalAndReviewedFieldsPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text());assert a['records'][0]['item']=='compost';assert a['records'][0]['note']=='=1+1, "review"\nsecond line';md=Path('export-reviewed.md').read_text();assert 'G1A | G1 | A' in md;assert 'compost | approve' in md
for r in a['records']:assert r['id'] in md
Path('artifact-validation.json').write_text(json.dumps({'passed':True,'artifacts':checks,'independentMatrixCounts':True,'markdownContainsReviewedEditsAndAllRecords':True},indent=2));print('PASS independent CSV/JSON/Markdown parsing, edits and paired matrix conservation')
