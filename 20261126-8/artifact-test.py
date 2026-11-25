import json,csv,sys
from fractions import Fraction as F
from pathlib import Path
prefix=sys.argv[1]if len(sys.argv)>1 else 'local-';checks=0;files=0
for path in Path('.').glob(prefix+'export-*.json'):
 a=json.loads(path.read_text()); files+=1
 assert a['schema']=='triangle-harbor/v1';checks+=1
 assert len(a['rows'])==len(a['original']['requests']);checks+=1
 for i,r in enumerate(a['rows']):
  src=a['original']['requests'][i]; assert all(r[k]==v for k,v in src.items());assert r['review']==a['review'][i];checks+=2
  if r['calculation']:
   cells=[[int(x) for x in row]for row in r['reviewedCells']]
   if r['rule']=='incremental': cells=[[sum(row[:j+1])for j in range(len(row))]for row in cells]
   calc=r['calculation']; assert calc['cumulative']==[[str(x)for x in row]for row in cells];checks+=1
   factors=[F(sum(row[j+1]for row in cells if len(row)>j+1),sum(row[j]for row in cells if len(row)>j+1))for j in range(len(cells)-1)]
   def f(o):return F(int(o['n']),int(o['d']))
   sums=[F(0),F(0),F(0)]
   for j,row in enumerate(cells):
    latest=F(row[-1]);ultimate=latest
    for factor in factors[len(row)-1:]:ultimate*=factor
    unpaid=ultimate-latest
    for k,v in zip(['latest','ultimate','unpaid'],[latest,ultimate,unpaid]):assert f(calc['rows'][j][k])==v;checks+=1
    for k,v in enumerate([latest,ultimate,unpaid]):sums[k]+=v
   for k,v in zip(['latest','ultimate','unpaid'],sums):assert f(calc[k])==v;checks+=1
  else:assert r['status']in ['held','blocked'];checks+=1
 csvpath=path.with_suffix('.csv')
 if csvpath.exists():
  with csvpath.open(newline='')as file: rows=list(csv.DictReader(file))
  assert len(rows)==len(a['rows']);checks+=1
  for r,line in zip(a['rows'],rows):
   assert line['id']==r['id'];assert json.loads(line['original_cells'])==r['cells'];assert json.loads(line['reviewed_cells'])==r['reviewedCells'];assert line['basis']==r['rule'];checks+=4
   note=r['review']['note'];expected="'"+note if note[:1]in ['=','+','-','@','\t','\r'] else note
   assert line['review_note']==expected;checks+=1
 worksheet=path.with_name(path.stem+'-worksheet.csv')
 if worksheet.exists():
  with worksheet.open(newline='')as file: lines=list(csv.DictReader(file))
  assert len(lines)==sum(len(r['calculation']['rows'])if r['calculation']else 1 for r in a['rows']);checks+=1
  pos=0
  for r in a['rows']:
   if r['calculation']:
    for item in r['calculation']['rows']:
     line=lines[pos];pos+=1;assert line['id']==r['id'];assert line['cohort']==r['cohorts'][item['cohortIndex']];checks+=2
     for k in ['latest','ultimate','unpaid']:assert F(line[k+'_fraction'])==f(item[k]);checks+=1
   else:assert lines[pos]['status']==r['status'];pos+=1;checks+=1
 md=path.with_suffix('.md')
 if md.exists():
  text=md.read_text()
  for r in a['rows']: assert r['id']in text and r['review']['note']in text;checks+=1
assert files>=10
report={'jsonArtifacts':files,'independentAssertions':checks,'checks':'Python csv parser, JSON, exact Fraction reconstruction, every original and reviewed row, held/blocked placeholders, formula-like multiline notes and worksheet cohorts'}
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print(report)
