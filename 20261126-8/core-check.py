from fractions import Fraction as F
import json
from pathlib import Path
cases=json.loads(Path('core-cases.json').read_text());checks=0
for case in cases:
 cells=[[int(x)for x in row]for row in case['input']]
 if case['rule']=='incremental': cells=[[sum(row[:j+1])for j in range(len(row))]for row in cells]
 result=case['result']; assert result['cumulative']==[[str(x)for x in row]for row in cells];checks+=1
 def fraction(x):return F(int(x['n']),int(x['d']))
 factors=[F(sum(row[j+1]for row in cells if len(row)>j+1),sum(row[j]for row in cells if len(row)>j+1))for j in range(len(cells)-1)]
 for expected,actual in zip(factors,result['factors']):assert expected==fraction(actual['factor']);checks+=1
 totals=[F(0),F(0),F(0)]
 for i,row in enumerate(cells):
  latest=F(row[-1]);ultimate=latest
  for factor in factors[len(row)-1:]:ultimate*=factor
  unpaid=ultimate-latest
  for k,v in zip(['latest','ultimate','unpaid'],[latest,ultimate,unpaid]):assert fraction(result['rows'][i][k])==v;checks+=1
  for j,v in enumerate([latest,ultimate,unpaid]):totals[j]+=v
 for k,v in zip(['latest','ultimate','unpaid'],totals):assert fraction(result[k])==v;checks+=1
 assert totals[0]+totals[2]==totals[1];checks+=1
out={'independent':'Python fractions.Fraction, independently reconstructed matched-cohort factors','cases':len(cases),'assertions':checks};Path('core-validation.json').write_text(json.dumps(out,indent=2));print(out)
