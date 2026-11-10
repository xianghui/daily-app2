from pathlib import Path
import json,csv,math
p=Path('.')
checks=[]
for f in p.glob('export-*.json'):
 d=json.loads(f.read_text()); assert len(d['records'])==len(d['originalInput']['batches'])
 assert [r['id'] for r in d['records']]==[r['id'] for r in d['originalInput']['batches']]
 assert sum(g['visitors'] for g in d['groups'])==d['metrics']['visitors']
 assert sum(g['conversions'] for g in d['groups'])==d['metrics']['conversions']
 if d['analysis']:
  c=next(g for g in d['groups'] if g['role']=='control');t=next(g for g in d['groups'] if g['role']=='treatment')
  assert abs(d['analysis']['difference']-(t['conversions']/t['visitors']-c['conversions']/c['visitors']))<1e-12
 checks.append(f.name)
d=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')))
assert len(rows)==len(d['records'])
for row,r in zip(rows,d['records']):
 assert row['id']==r['id'];assert row['source']==r['source'];assert int(row['visitors'])==r['visitors'];assert int(row['conversions'])==r['conversions'];assert int(row['original_conversions'])==r['originalConversions'];assert row['reviewed_arm']==r['selected'];assert row['decision']==r['decision'];assert row['note']==("'"+r['rationale'] if r['rationale'].startswith(('=','+','-','@','\t','\r')) else r['rationale'])
assert rows[0]['note']=='\'=1+1\nReviewed, "verified" 🪷'
md=(p/'export-reviewed.md').read_text();assert all(r['id'] in md for r in d['records']);assert '33/400' in md
(p/'artifact-validation.json').write_text(json.dumps({'parsedJSONArtifacts':checks,'csvRecords':len(rows),'quotedMultilineFormulaNote':True,'allOriginalsAndReviewedCountsPreserved':True,'markdownReviewedValueAndAllIDs':True},indent=2));print('PASS independent JSON/CSV/Markdown parsing, reviewed counts, source conservation and formula escaping')
