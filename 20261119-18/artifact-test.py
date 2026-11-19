import os
from pathlib import Path
os.chdir(Path(__file__).resolve().parent)
import csv,json,glob,math
count=0
for p in glob.glob('export-*.json'):
 d=json.load(open(p));assert d['schema']=='cutline-desk/v1';assert d['total']==len(d['reviews'])==len(d['originalInput']['logs']);assert [x['id'] for x in d['reviews']]==[x['id'] for x in d['originalInput']['logs']]
 if d['status']=='ready':
  assert d['summary']['throughput']==d['summary']['cutCapacity'];assert len(d['plan'])==d['total'];assert sum(x['capacity'] for x in d['plan'] if x['cut'])==d['summary']['throughput']
 if p=='export-reviewed.json':assert d['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
 cp=p[:-5]+'.csv'
 if cp in glob.glob('export-*.csv'):
  rows=list(csv.DictReader(open(cp,newline='')));assert len(rows)==d['total']
  for row,orig,review in zip(rows,d['originalInput']['logs'],d['reviews']):
   assert row['id']==orig['id'];assert row['source_from_note']==orig['fromText'];assert row['source_to_note']==orig['toText'];assert int(row['original_capacity'])==orig['capacity'];assert row['reviewed_from']==review['from'];assert row['reviewed_to']==review['to'];assert int(row['reviewed_capacity'])==review['capacity'];assert row['decision']==review['decision'];note=review['reviewNote'];assert row['review_note']==("'"+note if note[:1] in '=+-@\t\r' and note else note)
   if d['status']=='ready':
    plan=next(x for x in d['plan'] if x['id']==row['id']);e=next(x for x in d['expansions'] if x['id']==row['id']);assert int(row['modeled_flow'])==plan['flow'];assert row['in_one_min_cut']==str(plan['cut']).lower();assert int(row['expansion_gain'])==e['gain'];assert int(row['expansion_throughput'])==e['throughput']
  count+=1
for p in ['export-fixture0.md','export-fixture1.md']:
 d=json.load(open(p[:-3]+'.json'));s=open(p).read();assert all(x['id']+':' in s for x in d['reviews']);assert str(d['summary']['throughput']) in s
json.dump({'allOriginalsAndCurrentReviewsSurvive':True,'independentlyParsedCSVs':count,'multilineFormulaEscaping':True,'flowAndCutConstraints':True},open('artifact-validation.json','w'),indent=2)
print('PASS actual artifacts:',count,'CSV round trips and complete JSON/Markdown')
