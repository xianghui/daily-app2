import csv,json,io
from pathlib import Path
count=0
for p in Path('.').glob('export-*.json'):
 r=json.loads(p.read_text());assert r['schema']=='recoup-river/v1';assert len(r['reviews'])==len(r['originalInput']['observations'])==r['total']
 assert [x['id']for x in r['reviews']]==[x['id']for x in r['originalInput']['observations']]
 if r['status']=='ready':
  assert r['paidCents']+r['remainingCents']==r['originalInput']['availableCents']
  assert r['claimedCents']==r['paidCents']+r['unpaidCents'];assert r['priorityBypassCents']==0
  assert [x['id']for x in r['payouts']]==[x['id']for x in r['reviews']]
  assert sum(x['paidCents']for x in r['payouts'])==r['paidCents']
 for suffix in ['.csv','-payouts.csv']:
  f=Path(str(p)[:-5]+suffix)
  if not f.exists():continue
  rs=list(csv.DictReader(io.StringIO(f.read_text())));assert len(rs)==r['total']
  for i,x in enumerate(rs):
   if suffix=='.csv':
    review=r['reviews'][i];assert x['id']==review['id'];assert int(x['reviewed_amount_cents'])==review['amountCents'];assert x['original_description']==r['originalInput']['observations'][i]['description'];note=review['reviewNote'];expected="'"+note if note and note[0]in'=+-@\t\r'else note;assert x['review_note']==expected
   else:
    q=r['payouts'][i];assert x['claim_id']==q['id'];assert int(x['allocated_cents'])==q['paidCents'];assert int(x['unpaid_cents'])==q['unpaidCents']
 f=p.with_suffix('.md')
 if f.exists():
  md=f.read_text()
  for x in r['reviews']:assert x['id']in md;assert x['reviewNote']in md
 count+=1
review=json.loads(Path('export-reviewed.json').read_text());assert review['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify';assert len(json.loads(Path('export-max.json').read_text())['reviews'])==24
Path('artifact-validation.json').write_text(json.dumps({'jsonArtifactsParsed':count,'independentCSVParser':True,'reviewedMultilineFormulaLikeNotePreservedAndCSVEscaped':True,'sourceOrderAndAllRecordsPreserved':True,'exactCentBalances':True},indent=2));print('PASS independent artifact parsing',count)
