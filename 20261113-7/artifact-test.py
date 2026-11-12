import csv,json
from pathlib import Path
checks=[]
for stem in ['Assembly','Repair','reviewed','max']:
 r=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')));assert len(rows)==r['total']==len(r['originalInput']['records'])==len(r['reviews'])
 for i,(x,y) in enumerate(zip(rows,r['reviews'])):
  assert x['id']==y['id'];assert x['source_note']==r['originalInput']['records'][i]['note'];assert int(x['original_cents'])==r['originalInput']['records'][i]['amountCents'];assert int(x['reviewed_cents'])==y['amountCents'];assert x['reviewed_category']==y['kind'];assert x['decision']==y['decision']
  for field,source in [('review_note','note'),('owner','owner')]:
   expected=y[source];expected="'"+expected if expected and expected[0] in '=+-@\t\r' else expected;assert x[field]==expected,(x[field],expected)
 assert sum(int(x['reviewed_cents']) for x in rows if x['decision']=='approve')==r['approvedCents']
 assert r['approvedCents']==r['conformanceCents']+r['failureCents'];checks.append({'artifact':stem,'rows':len(rows),'allRecordsPreserved':True})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['note'];assert '\n' in r['reviews'][0]['owner'];assert r['reviews'][0]['note'] in Path('export-reviewed.md').read_text();assert r['reviews'][0]['owner'] in Path('export-reviewed.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'multilineUnicodeFormulaEscaping':True,'reviewedNotStale':True},indent=2));print('PASS independent CSV JSON Markdown parsing, cent conservation and reviewed multiline fields')
