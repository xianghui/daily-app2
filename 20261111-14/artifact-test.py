import json,csv,io
from pathlib import Path
checks=[]
for file in ['reviewed','max']:
 a=json.loads(Path('export-'+file+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+file+'.csv').read_text())));assert len(rows)==len(a['records'])
 for r,s in zip(rows,a['records']):
  assert r['id']==s['id'];assert r['originalText']==s['original']['text'];assert int(r['reviewedCents'])==s['cents'];assert int(r['reviewedYear'])==s['year'];assert r['decision']==s['decision'];assert r['note']==("'"+s['note'] if s['note'].startswith(('=','+','-','@','\t','\r')) else s['note'])
 checks.append({'file':file,'records':len(rows),'allReviewedValuesPreserved':True})
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert all(json.dumps(r['id']) in md for r in a['records']);assert json.dumps(a['records'][0]['note']) in md
Path('artifact-validation.json').write_text(json.dumps({'csvRoundTrips':checks,'signedNegativeCentsNumeric':True,'quotedMultilineFormulaLikeNoteEscaped':True,'markdownCompleteAudit':True},indent=2));print('PASS independent JSON CSV MD artifact parsing')
