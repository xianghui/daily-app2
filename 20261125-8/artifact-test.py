import json,csv,glob,os,itertools,re
from pathlib import Path
prefix=os.environ.get('PREFIX','');count=0;cases_checked=0
for file in glob.glob(prefix+'export-*.json'):
 if file.endswith('-payloads.json'):continue
 r=json.load(open(file));assert len(r['checks'])==len(r['originalInput']['records'])==len(r['reviews']);count+=1
 specs={p['id']:json.loads(p['target'])for p in r['originalInput']['plans']}
 def outcome(system,values):
  e=specs[system]['expression'];assert re.fullmatch(r'[a-e!&|()\s]+',e)
  return bool(eval(e.replace('&',' and ').replace('|',' or ').replace('!',' not '),{'__builtins__':{}},values))
 for c,rev,orig in zip(r['checks'],r['reviews'],r['originalInput']['records']):
  assert c['id']==rev['id']==orig['id'];assert c['raw']==rev['raw'];count+=2
  if c['status']=='held':continue
  if c['status']=='blocked':assert 'values' not in c;count+=1;continue
  values=json.loads(c['raw']);assert set(values)==set(specs[c['system']]['conditions']);assert all(type(v)is bool for v in values.values());assert c['outcome']==outcome(c['system'],values);count+=3
 for s in r['suites']:
  ready=[c for c in r['checks']if c['system']==s['system']and c['status']=='ready'];conditions=specs[s['system']]['conditions'];assert s['caseIds']==[c['id']for c in ready];count+=1
  for w in s['witnesses']:
   pairs=set()
   for a,b in itertools.combinations(ready,2):
    if [k for k in conditions if a['values'][k]!=b['values'][k]]==[w['key']] and outcome(s['system'],a['values'])!=outcome(s['system'],b['values']):pairs.add(tuple(sorted([a['id'],b['id']])))
   actual={tuple(sorted([a,b]))for p in w['pairs']for a in p['left']for b in p['right']};assert actual==pairs;count+=1
  assert s['covered']==sum(bool(w['pairs'])for w in s['witnesses']);assert s['baselineBranchComplete']==(len({c['outcome']for c in ready})==2);count+=2
 assert r['metrics']['independent']==sum(s['covered']for s in r['suites']);count+=1
 if Path(file.replace('.json','.csv')).exists():
  rows=list(csv.DictReader(open(file.replace('.json','.csv'),newline='')));assert len(rows)==len(r['checks']);count+=1
  for row,c,rev,orig in zip(rows,r['checks'],r['reviews'],r['originalInput']['records']):
   for key,expected in [('id',c['id']),('source_context',orig['context']),('original_truth_json',orig['raw']),('reviewed_truth_json',c['raw']),('review_note',rev['note'])]:
    if expected.startswith(('=','+','-','@','\t','\r')):expected="'"+expected
    assert row[key]==expected,(file,key);count+=1
 rel=Path(file.replace('.json','-payloads.json'))
 if rel.exists():
  decisions=json.load(open(rel))['decisions'];assert len(decisions)==len(r['suites']);count+=1
  for d,s in zip(decisions,r['suites']):
   ready=[c for c in r['checks']if c['system']==d['id']and c['status']=='ready'];assert len(ready)==len(d['reviewedCases']);count+=1
   for x,c in zip(d['reviewedCases'],ready):assert x['id']==c['id']and x['values']==c['values']and x['expected']==outcome(d['id'],x['values']);count+=3;cases_checked+=1
   for x in d['proposedUnexecuted']:assert not x['executed']and outcome(d['id'],x['values'])==x['outcome'];count+=2
for f in glob.glob(prefix+'export-*.md'):assert 'Decision Pair' in Path(f).read_text();count+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentAssertions':count,'reviewedFixtureCasesReopened':cases_checked,'parsers':'Python json/csv, Boolean evaluation and source-pair enumeration'},indent=2));print('PASS independent downloaded artifact assertions',count,'cases',cases_checked)
