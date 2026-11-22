from pathlib import Path
import csv,json
reports=[]
for p in Path('.').glob('export-*-json.json'):
 r=json.loads(p.read_text());tag=p.name.removeprefix('export-').removesuffix('-json.json');assert len(r['reviews'])==len(r['originalInput']['operations'])
 cp=Path('export-'+tag+'-csv.csv')
 if cp.exists():
  with cp.open(newline='')as f:rows=list(csv.DictReader(f))
  assert len(rows)==len(r['reviews'])
  for row,review,original in zip(rows,r['reviews'],r['originalInput']['operations']):
   def safe(x):return "'"+x if x and x[0] in '=+-@\t\r' else x
   assert row['id']==safe(review['id']);assert row['reviewer_note']==safe(review['note']);assert row['reviewed_resource']==safe(review['resource']);assert row['original_resource_note']==safe(original['resourceNote'])
 pp=Path('export-'+tag+'-plan-csv.csv')
 if pp.exists():
  with pp.open(newline='')as f:events=list(csv.DictReader(f))
  assert len(events)==len(r['reviews'])+len(r['originalInput']['transactions']);assert sum(e['kind']=='C'for e in events)==len(r['originalInput']['transactions'])
 if tag=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 reports.append({'tag':tag,'records':len(r['reviews']),'parsedJSON':True,'CSVChecked':cp.exists(),'eventCSVChecked':pp.exists()})
assert len(reports)>=8
Path('artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independently parsed',len(reports),'reviewed artifacts')
