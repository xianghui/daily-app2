import csv,json,math,re
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());d=a['originalInput'];rr=a['records'];s=a['summary'];m=a['metrics']
 assert len(rr)==len(d['costs']);assert [r['id'] for r in rr]==[c['id'] for c in d['costs']]
 for r,c in zip(rr,d['costs']):
  assert r['description']==c['description'];assert r['originalAmountCents']==c['amountCents'];assert r['decision'] in ['approve','hold','exclude'];assert len(r['ranking'])==2;assert all(-1.01<=x['score']<=1.01 for x in r['ranking'])
 inc=[r for r in rr if r['decision']=='approve'];fixed=sum(r['amountCents'] for r in inc if r['kind']=='fixed');var=sum(r['amountCents'] for r in inc if r['kind']=='variable');margin=d['priceCents']-var
 assert s['fixedCents']==fixed;assert s['variableCents']==var;assert s['marginCents']==margin
 assert s['held']+s['excluded']+s['included']==len(rr)
 if s['held']:
  assert not s['complete'];assert all(s[k] is None for k in ['breakEvenUnits','targetUnits','capacityProfitCents','minimumPriceAtCapacityCents'])
 else:
  assert s['complete'];assert s['breakEvenUnits']==(math.ceil(fixed/margin) if margin>0 else None);assert s['targetUnits']==(math.ceil((fixed+d['targetProfitCents'])/margin) if margin>0 else None)
  assert s['capacityProfitCents']==d['capacity']*margin-fixed
  assert s['targetFeasible']==(s['capacityProfitCents']>=d['targetProfitCents'])
  assert s['minimumPriceAtCapacityCents']==var+math.ceil((fixed+d['targetProfitCents'])/d['capacity'])
 assert m['records']==len(rr);assert m['aiReviewAgreement']==sum(r['kind']==r['proposed'] for r in rr)
 assert m['keywordClassified']==sum(bool(re.search(r'\b(fixed|variable)\b',r['description'],re.I)) for r in rr)
 checks.append(f.name)
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv')));assert len(rows)==len(a['records'])
for r,row in zip(a['records'],rows):
 assert row['id']==r['id'];assert row['description']==r['description'];assert row['decision']==r['decision'];assert row['reviewedKind']==r['kind'];assert int(row['amountCents'])==r['amountCents'];assert int(row['originalAmountCents'])==r['originalAmountCents']
 assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
md=Path('export-reviewed.md').read_text();assert 'Reviewed, "verified" 🪷' in md;assert '61001' in md
for r in a['records']:assert r['id'] in md and r['description'] in md
json.dump({'auditsParsed':checks,'allOriginalApprovedExcludedHeldRowsPreserved':True,'independentCentsCeilCapacityAndMetricsChecks':True,'csvQuotedMultilineUnicodeFormulaDefense':True,'markdownReviewedValues':True},open('artifact-validation.json','w'),indent=2)
print('PASS independent JSON/CSV/Markdown: all costs, cents, ceilings, capacity, edits, escaping')
