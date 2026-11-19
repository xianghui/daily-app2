from pathlib import Path
import csv,json
p=Path(__file__).resolve().parent
reports=[]
for name in ['fixture0','fixture1','reviewed','held','undo','remapped','bounds','max','challenge']:
 d=json.loads((p/f'export-{name}.json').read_text());assert d['total']==len(d['reviews'])==len(d['originalInput']['observations']);assert [x['id'] for x in d['reviews']]==[x['id'] for x in d['originalInput']['observations']]
 audit=p/f'export-{name}.csv'
 if audit.exists():
  rows=list(csv.DictReader(audit.open(newline='')));assert len(rows)==d['total']
  for i,r in enumerate(rows):
   src=d['originalInput']['observations'][i];review=d['reviews'][i]
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   assert r['id']==review['id'];assert r['original_from']==safe(src['fromText']);assert r['original_to']==safe(src['toText']);assert int(r['original_lower_ms'])==src['lower'];assert int(r['original_upper_ms'])==src['upper'];assert r['reviewed_from']==review['from'];assert r['reviewed_to']==review['to'];assert int(r['reviewed_lower_ms'])==review['lower'];assert int(r['reviewed_upper_ms'])==review['upper'];assert r['review_note']==safe(review['reviewNote']);assert r['decision']==review['decision']
 offsets=p/f'export-{name}-offsets.csv'
 if offsets.exists():
  rows=list(csv.DictReader(offsets.open(newline='')));assert len(rows)==len(d['originalInput']['devices'])
  for r,x in zip(rows,d['plan']['nodes']):
   assert r['device']==x['id']
   for a,b in [('lower_offset_ms','lower'),('upper_offset_ms','upper'),('width_ms','width'),('correction_lower_ms','correctionLower'),('correction_upper_ms','correctionUpper')]:assert r[a]==('' if x[b] is None else str(x[b]))
 md=p/f'export-{name}.md'
 if md.exists():
  s=md.read_text()
  for r in d['reviews']:assert r['id']+':' in s
 reports.append({'artifact':name,'records':d['total'],'originalsAndCurrentReviewsPreserved':True,'auditCSVChecked':audit.exists(),'offsetCSVChecked':offsets.exists(),'markdownChecked':md.exists()})
assert json.loads((p/'export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
assert json.loads((p/'export-max.json').read_text())['reviews'][-1]['reviewNote']=='last note\nkept'
(p/'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent parsed JSON/CSV/Markdown, every source/review, signed integers, unbounded cells and multiline formula escaping')
