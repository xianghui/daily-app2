import csv,json,itertools
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());d=a['originalInput'];rr=a['records'];m=a['metrics']
 assert len(rr)==len(d['candidates']);assert [r['id'] for r in rr]==[c['id'] for c in d['candidates']]
 for r,c in zip(rr,d['candidates']):
  assert r['bio']==c['bio'];assert r['originalPriority']==c['priority'];assert r['decision'] in ['approve','hold'];assert len(r['ranking'])==len(d['groups']);assert all(-1.01<=x['score']<=1.01 for x in r['ranking'])
 selected=[r for r in rr if r['placement']=='selected'];reserves=[r for r in rr if r['placement']=='reserve'];eligible=[r for r in rr if r['decision']=='approve']
 assert a['panel']==selected;assert a['reserves']==reserves;assert len(selected)==d['size'];assert len({r['id'] for r in selected})==d['size']
 assert all(r['decision']=='approve' for r in selected+reserves)
 assert m['allCandidates']==m['selected']+m['reserves']+m['held']==len(rr)
 def counts(rows):return [sum(r['group']==g['id'] for r in rows) for g in d['groups']]
 def deviation(rows):return sum(max(0,g['min']-n)+max(0,n-g['max']) for g,n in zip(d['groups'],counts(rows)))
 assert deviation(selected)==0
 baseline=eligible[:d['size']];assert a['baseline']['ids']==[r['id'] for r in baseline]
 assert m['baselineQuotaDeviation']==deviation(baseline);assert m['reviewedQuotaDeviation']==0
 assert m['baselinePriority']==sum(r['priority'] for r in baseline);assert m['panelPriority']==sum(r['priority'] for r in selected)
 assert m['panelPriority']==max(sum(r['priority'] for r in subset) for subset in itertools.combinations(eligible,d['size']) if deviation(subset)==0)
 assert m['aiReviewAgreement']==sum(r['group']==r['proposed'] for r in rr)
 assert [g['count'] for g in a['groupCounts']]==counts(selected)
 checks.append(f.name)
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv')));assert len(rows)==len(a['records'])
for r,row in zip(a['records'],rows):
 assert row['id']==r['id'];assert row['bio']==r['bio'];assert row['placement']==r['placement'];assert row['reviewedGroup']==r['group'];assert int(row['priority'])==r['priority']
 assert row['note']==("'"+r['note'] if r['note'].startswith(('=','+','-','@','\t','\r')) else r['note'])
md=Path('export-reviewed.md').read_text();assert 'Reviewed, "verified" 🪷' in md;assert 'priority 10' in md
for r in a['records']:assert r['id'] in md and r['bio'] in md
json.dump({'auditsParsed':checks,'allOriginalSelectedReserveHeldRecordsPreserved':True,'independentExactQuotaPriorityAndBaselineChecks':True,'csvQuotedMultilineUnicodeFormulaDefense':True,'markdownReviewedValues':True},open('artifact-validation.json','w'),indent=2)
print('PASS independently parsed actual JSON/CSV/Markdown: all rows, exact optimality, quotas, edits and escaping')
