import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text()); rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['records'])==3
for c,j in zip(rows,r['records']):
 assert c['id']==j['id'] and c['text']==j['text']
 assert c['originalFields'].split('|')==j['fields'] and int(c['originalDays'])==j['days']
 assert c['plannedFields'].split('|')==j['selectedFields'] and int(c['plannedDays'])==j['retention']
 assert c['releasedFields']==('|'.join(j['selectedFields']) if j['decision']=='approve' else '')
 assert c['note']==("'"+j['note'] if j['note'].startswith(('=','+','-','@','\t','\r')) else j['note'])
assert rows[0]['note']=="'=1+1\nReviewed, \"quoted\"" and int(rows[0]['plannedDays'])==20
assert r['records'][0]['days']==90
assert all(c['releasedFields']=='' and c['releasedDays']=='' for c in csv.DictReader(Path('export-allheld.csv').open(newline='')))
assert len(list(csv.DictReader(Path('export-allheld.csv').open(newline=''))))==24
assert len(json.loads(Path('export-roundtrip.json').read_text())['records'])==24
assert '20 days (original 90)' in Path('export-reviewed.md').read_text()
held=json.loads(Path('export-held.json').read_text());assert held['records'][0]['id'] not in [m['id'] for m in held['manifest']]
Path('artifact-validation.json').write_text(json.dumps({'independentParser':'Python csv/json','reviewedRecords':3,'heldRecordsRetained':True,'allHeldRecords':24,'fieldsOriginalDaysAndReviewedDaysPreserved':True,'multilineQuotedFormulaNoteEscaped':True,'markdownReflectsEdit':True,'jsonInputRoundtrip24Records':True},indent=2))
print('PASS actual browser downloads independently parsed, originals/reviews/holds/escaping reconciled')
