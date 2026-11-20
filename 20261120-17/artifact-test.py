from pathlib import Path
import csv,json,math
p=Path(__file__).resolve().parent
report=[]
for j in range(2):
 r=json.loads((p/f'export-fixture{j}.json').read_text());rows=list(csv.DictReader((p/f'export-fixture{j}.csv').open(newline='')));checks=list(csv.DictReader((p/f'export-fixture{j}-intervals.csv').open(newline='')))
 assert len(rows)==r['total']==8 and len(checks)==6
 assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['records']]
 assert sum(len(x['reading_ids'].split(';')) for x in checks)==8
 for c in checks:
  source=[x for x in r['reviews'] if x['id'] in c['reading_ids'].split(';')]
  lo=max(x['value']-x['resolution']/2 for x in source);hi=min(x['value']+x['resolution']/2 for x in source)
  assert math.isclose(float(c['intersection_lo']),lo) and math.isclose(float(c['intersection_hi']),hi)
 assert sorted(x['status'] for x in checks)==sorted(['inside','inside','outside','conflict','borderline','borderline'])
 assert all(x['id'] in (p/f'export-fixture{j}.md').read_text() for x in rows)
 report.append({'fixture':j,'rows':8,'groups':6,'intervalIndependentMath':True})
n='=SUM(1,2)\n"reviewed", with newline';r=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')));assert r['reviews'][0]['reviewNote']==n and rows[0]['review_note']=="'"+n
r=json.loads((p/'export-max.json').read_text());rows=list(csv.DictReader((p/'export-max.csv').open(newline='')));checks=list(csv.DictReader((p/'export-max-intervals.csv').open(newline='')));assert len(rows)==len(checks)==r['total']==96;assert rows[-1]['review_note']=='last note\nkept'
changed=json.loads((p/'export-edited-reading.json').read_text());assert changed['metrics']['conflict']==0 and changed['originalInput']['records'][5]['value']==30
(p/'artifact-validation.json').write_text(json.dumps({'fixtures':report,'multilineQuotesCommasPreserved':True,'formulaTextEscaped':True,'maximumRowsPreserved':96,'currentReviewedValuesUsed':True},indent=2));print('PASS independent CSV/JSON/Markdown interval and review round trips')
