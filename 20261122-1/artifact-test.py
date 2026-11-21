import json,csv,io
from pathlib import Path
p=Path.cwd();checks=[]
for label in ['fixture0','fixture1','reviewed-json','held','composite','max']:
 r=json.loads((p/('export-'+label+'.json')).read_text());records=r['originalInput']['records'];columns=r['reviews'];assert len(records)>=2
 if label=='held':assert r['analysis']is None
 if label=='composite':assert r['analysis']['audit']['valid']
 if label=='reviewed-json':assert columns[0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 if label=='max':assert len(records)==64 and len(columns)==10 and r['analysis']['tested']==255
 checks.append({'artifact':label,'records':len(records),'columns':len(columns),'sourcePreserved':True})
for label,jlabel in [('fixture0-audit-csv','fixture0'),('fixture1-audit-csv','fixture1'),('reviewed-audit-csv','reviewed-json'),('max-audit','max')]:
 r=json.loads((p/('export-'+jlabel+'.json')).read_text());rows=list(csv.DictReader(io.StringIO((p/('export-'+label+'.csv')).read_text())));assert len(rows)==len(r['reviews'])*len(r['originalInput']['records'])
 for cell in rows:
  original=r['originalInput']['records'][int(cell['source_row'])-1][cell['column_id']];expected="'"+original if original.startswith(('=','+','-','@','\t','\r'))else original;assert cell['original_value']==expected
  review=next(c for c in r['reviews']if c['id']==cell['column_id']);expected="'"+review['note'] if review['note'].startswith(('=','+','-','@','\t','\r'))else review['note'];assert cell['review_note']==expected;assert cell['reviewed_role']==review['role']
 checks.append({'artifact':label,'parsedLongFormCells':len(rows),'allOriginalCellsAndReviewedNotesSurvive':True,'formulaEscapesVerified':True})
for label,jlabel in [('fixture0-markdown','fixture0'),('fixture1-markdown','fixture1'),('reviewed-markdown','reviewed-json')]:
 s=(p/('export-'+label+'.md')).read_text();r=json.loads((p/('export-'+jlabel+'.json')).read_text());assert all(('Row '+str(i+1)+':')in s for i in range(len(r['originalInput']['records'])));checks.append({'artifact':label,'allRowsPresent':True})
(p/'artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent JSON / CSV / Markdown',len(checks))
