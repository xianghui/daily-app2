import json,csv,io
from pathlib import Path
report=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['transitions'])
 for i,(row,rev) in enumerate(zip(rows,r['reviews'])):
  src=r['originalInput']['transitions'][i]
  for key in ['from','to']:assert row['source_'+key]==src[key] and row['reviewed_'+key]==rev[key]
  assert int(row['reviewed_count'])==rev['count'] and int(row['original_count'])==src['count']
  note=rev['note'];expected="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert row['note']==expected
 if stem=='reviewed':assert '\n' in rows[0]['note'] and '"source", preserved.' in rows[0]['note'] and r['reviews'][0]['note'] in Path('export-reviewed.md').read_text().replace('\\n','\n').replace('\\"','"')
 report.append({'artifact':stem,'records':len(rows),'preserved':True})
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/JSON roundtrip')
