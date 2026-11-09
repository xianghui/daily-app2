import csv,json
from pathlib import Path
checks=[]
for f in Path('.').glob('export-*.json'):
 a=json.loads(f.read_text());d=a['originalInput'];records=a['records'];m=a['metrics']
 assert len(records)==len(d['questions'])
 assert [r['id'] for r in records]==[q['id'] for q in d['questions']]
 for r,q in zip(records,d['questions']):
  assert r['original']==q['text'];assert r['originalMinutes']==q['minutes'];assert r['decision'] in ['approve','hold'];assert len(r['ranking'])==4
  assert all(isinstance(x['score'],(int,float)) and -1.01<=x['score']<=1.01 for x in r['ranking'])
 guide=[r for r in records if r['decision']=='approve'];assert a['guide']==guide
 assert m['reviewedMinutes']==sum(r['minutes'] for r in guide)<=d['budget']
 assert m['remaining']==d['budget']-m['reviewedMinutes']
 assert m['originalMinutes']==sum(q['minutes'] for q in d['questions'])
 assert m['allQuestions']==m['approved']+m['held']==len(records)
 assert m['revised']==sum(r['original']!=r['revised'] for r in guide)
 assert m['aiReviewAgreement']==sum(r['lens']==r['proposed'] for r in records)
 checks.append(f.name)
a=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv')))
assert len(rows)==len(a['records'])
for r,row in zip(a['records'],rows):
 assert row['id']==r['id'];assert row['original']==r['original'];assert row['revised']==r['revised'];assert row['decision']==r['decision'];assert int(row['minutes'])==r['minutes']
assert rows[0]['note']=="'"+a['records'][0]['note']
md=Path('export-reviewed.md').read_text();assert md.count('Tell me about the last book you borrowed.')==2;assert 'Reviewed, "neutral" 🪷' in md
for r in a['records']:assert r['id'] in md and r['original'] in md
json.dump({'auditsParsed':checks,'everyOriginalHeldAndReviewedRecordPreserved':True,'independentBudgetAndComparisonMetrics':True,'csvQuotedMultilineUnicodeFormulaDefense':True,'markdownCurrentRewriteAndAudit':True},open('artifact-validation.json','w'),indent=2)
print('PASS independently parsed JSON/CSV/Markdown; conservation, budgets, current edits, escaping and computed metrics')
