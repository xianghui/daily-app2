from pathlib import Path
import csv,json
p=Path(__file__).resolve().parent
reports=[]
def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
for name in ['fixture0','fixture1','reviewed','held','undo','remapped','over','max','challenge']:
 d=json.loads((p/f'export-{name}.json').read_text());assert d['total']==len(d['reviews'])==len(d['originalInput']['logs']);assert [x['id'] for x in d['reviews']]==[x['id'] for x in d['originalInput']['logs']]
 audit=p/f'export-{name}.csv'
 if audit.exists():
  rows=list(csv.DictReader(audit.open(newline='')));assert len(rows)==d['total']
  for i,r in enumerate(rows):
   src=d['originalInput']['logs'][i];review=d['reviews'][i]
   assert r['id']==review['id'];assert r['original_object_text']==safe(src['objectText']);assert int(r['original_lux'])==src['lux'];assert int(r['original_hours'])==src['hours'];assert r['reviewed_object']==review['object'];assert int(r['reviewed_lux'])==review['lux'];assert int(r['reviewed_hours'])==review['hours'];assert int(r['dose_lux_hours'])==review['lux']*review['hours'];assert r['review_note']==safe(review['reviewNote']);assert r['decision']==review['decision']
 dose=p/f'export-{name}-dose.csv'
 if dose.exists():
  rows=list(csv.DictReader(dose.open(newline='')));assert len(rows)==len(d['originalInput']['objects'])
  for r,x in zip(rows,d['plan']['nodes']):
   assert r['object']==x['id']
   for a,b in [('total_lux_hours','total'),('remaining_lux_hours','remaining'),('whole_display_days','days'),('planned_daily_lux_hours','dailyDose'),('invalid_unweighted_baseline_total','baselineTotal'),('invalid_unweighted_baseline_days','baselineDays')]:assert float(r[a])==x[b]
 md=p/f'export-{name}.md'
 if md.exists():
  s=md.read_text()
  for r in d['reviews']:assert r['id']+':' in s
 reports.append({'artifact':name,'records':d['total'],'originalsAndCurrentReviewsPreserved':True,'auditCSVChecked':audit.exists(),'doseCSVChecked':dose.exists(),'markdownChecked':md.exists()})
assert json.loads((p/'export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
assert json.loads((p/'export-max.json').read_text())['reviews'][-1]['reviewNote']=='last note\nkept'
(p/'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent parsed JSON/CSV/Markdown, every source/review, exact dose/day totals and multiline formula escaping')
