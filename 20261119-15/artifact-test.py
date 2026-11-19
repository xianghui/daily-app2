import json,csv,math
from pathlib import Path
checks=[]
for i in [0,1]:
 r=json.load(open(f'export-fixture{i}.json'));rows=list(csv.DictReader(open(f'export-fixture{i}.csv',newline='')))
 assert len(rows)==len(r['reviews'])
 for row,x,o in zip(rows,r['reviews'],r['originalInput']['logs']):
  assert row['id']==x['id'] and row['original_group_text']==o['groupText'] and int(row['reviewed_count'])==x['count']
 for plan in r['plans']:
  N=plan['total'];k=r['originalInput']['draw'];e=sum(1-(math.comb(N-g['count'],k) if N-g['count']>=k else 0)/math.comb(N,k) for g in plan['groups'])
  assert abs(plan['expected']-e)<1e-10
 assert 'expected groups' in Path(f'export-fixture{i}.md').read_text()
 checks.append({'fixture':i,'counts':len(rows),'plans':r['plans']})
r=json.load(open('export-reviewed.json'));rows=list(csv.DictReader(open('export-reviewed.csv',newline='')));assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n' in rows[0]['review_note']
r=json.load(open('export-max.json'));rows=list(csv.DictReader(open('export-max.csv',newline='')));assert len(rows)==16;assert rows[-1]['review_note']=='last note\nkept';assert sum(int(x['reviewed_count'])for x in rows)==160000
json.dump({'independentArtifactChecks':checks,'multilineEscaping':True,'maximumRowsAndCounts':True},open('artifact-validation.json','w'),indent=2)
print('PASS actual JSON/CSV/Markdown artifacts, hypergeometric oracle, multiline/formula escaping and maximum batch')
