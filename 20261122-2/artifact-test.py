import csv,json,itertools
from fractions import Fraction
from pathlib import Path
checks=0
for stem in ['fixture0','fixture1','reviewed-json','rejected','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());d=r['originalInput'];a=r['analysis'];rs=r['reviews'];assert len(rs)==len(d['nominations']);assert len(a['coverage'])==len(d['people']);assert len(a['chosen'])==d['slots'];assert set(d['pinned'])<=set(a['chosen'])
 approvals={p:set(x['topic']for x in rs if x['person']==p and x['decision']=='approve')for p in d['people']}
 score=lambda chosen:sum((sum((Fraction(1,j)for j in range(1,len(v&set(chosen))+1)),Fraction())for v in approvals.values()),Fraction())
 feasible=[c for c in itertools.combinations([x['id']for x in d['topics']],d['slots'])if set(d['pinned'])<=set(c)]
 assert score(a['chosen'])==max(map(score,feasible));assert score(a['chosen'])*2520==a['scoreUnits'];assert a['represented']==sum(bool(v&set(a['chosen']))for v in approvals.values());assert score(a['baseline']['chosen'])*2520==a['baseline']['scoreUnits'];checks+=1
 if stem=='reviewed-json':
  assert rs[0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
  rows=list(csv.DictReader(open('export-reviewed-audit-csv.csv',newline='')));assert len(rows)==len(rs);assert rows[0]['review_note']=="'"+rs[0]['note'];assert rows[0]['original_nomination']==rs[0]['text'];checks+=1
for i in range(2):
 r=json.load(open(f'export-fixture{i}.json'));d=r['originalInput'];rows=list(csv.DictReader(open(f'export-fixture{i}-audit-csv.csv',newline='')));coverage=list(csv.DictReader(open(f'export-fixture{i}-coverage-csv.csv',newline='')));assert len(rows)==len(d['nominations']);assert len(coverage)==len(d['people']);assert [x['original_nomination']for x in rows]==[x['text']for x in d['nominations']];assert [x['person']for x in coverage]==d['people'];assert all(x['selected_approved_topics']==json.dumps(b['selectedApprovals'],separators=(',',':'))for x,b in zip(coverage,r['analysis']['coverage']));md=Path(f'export-fixture{i}-markdown.md').read_text();assert all(x['text']in md for x in d['nominations']);checks+=1
r=json.load(open('export-max.json'));audit=list(csv.DictReader(open('export-max-audit.csv',newline='')));coverage=list(csv.DictReader(open('export-max-coverage.csv',newline='')));assert len(audit)==64;assert len(coverage)==32;assert coverage[-1]['person']=="'"+r['originalInput']['people'][-1];assert all(x['original_nomination']==src['text']for x,src in zip(audit,r['originalInput']['nominations']));checks+=1
Path('artifact-validation.json').write_text(json.dumps({'independentPythonParser':True,'checks':checks,'completeOriginals':True,'currentEditedMultilineNoteAndEscapedFormula':True,'PAVIndependentFractionOracle':True,'maxBatchAndRosterPreserved':True},indent=2));print('PASS independent artifact parsing',checks)
