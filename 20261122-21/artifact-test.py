from pathlib import Path
import json,csv,io,math
report=[]
for label in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(f'export-{label}-json.json').read_text());rs=list(csv.DictReader(io.StringIO(Path(f'export-{label}-csv.csv').read_text())));plan=list(csv.DictReader(io.StringIO(Path(f'export-{label}-plan-csv.csv').read_text())))
 assert len(rs)==len(r['reviews'])==len(r['originalInput']['batches']);assert len(plan)==len(r['originalInput']['filters'])
 guard=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
 for i,row in enumerate(rs):
  assert row['id']==guard(r['reviews'][i]['id']);assert row['reviewer_note']==guard(r['reviews'][i]['note']);assert row['original_filter_note']==guard(r['originalInput']['batches'][i]['filterNote'])
 assert sum(int(x['bytes']) for x in plan)==r['originalInput']['budgetKiB']*1024
 assert sum(int(x['distinct'])for x in plan)==sum(x['distinct']for x in r['reviews'])
 assert sum(int(x['absent_queries'])for x in plan)==sum(x['absentQueries']for x in r['reviews'])
 for x in plan:
  p=(1-math.exp(-int(x['hash_count'])*int(x['distinct'])/(int(x['bytes'])*8)))**int(x['hash_count'])
  assert abs(p-float(x['estimated_false_positive_probability']))<1e-10
 assert json.loads(Path(f'export-{label}-markdown.md').read_text().split('## Complete original and review audit\n\n')[1])==r
 report.append({'label':label,'records':len(rs),'filters':len(plan),'losslessOriginalsAndReviews':True,'countsAndMemoryConserved':True,'formulaIndependentRecalculation':True})
assert '\n' in json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independently parsed JSON CSV Markdown plan artifacts',report)
