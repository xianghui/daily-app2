import csv,json,math
from pathlib import Path
report=[]
for f in ['export-fixture0','export-fixture1','export-reviewed','export-max']:
 r=json.loads(Path(f+'.json').read_text());p=Path(f+'-audit.csv');rows=list(csv.DictReader(p.open(newline='')))
 assert len(rows)==r['total']==len(r['reviews'])
 for i,row in enumerate(rows):
  x=r['reviews'][i];original=r['originalInput']['records'][i]
  assert row['id']==x['id'] and row['original_profile']==original['profile']
  assert float(row['baseline_skill'])==original['skill']
  assert row['reviewed_pair']==x['pair'] and row['decision']==x['decision']
  note=x['reviewNote'];assert row['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
  assigned=next((a for a in r['assignments'] if a['id']==x['id']),None);assert row['arm']==(assigned['arm'] if assigned else '')
 assert len({a['id'] for a in r['assignments']})==r['approved']
 assert r['total']==r['approved']+r['held']
 assert math.isclose(sum(p['cost'] for p in r['pairs']),r['totalCost'])
 assert all(p['gap']<=r['originalInput']['maxSkillGap'] for p in r['pairs'])
 for pair in r['pairs']:
  aa=[a for a in r['assignments'] if a['pair']==pair['pair']];assert sorted(x['arm'] for x in aa)==['A','B']
 summary=Path(f+'-summary.csv')
 if summary.exists():
  ss=list(csv.DictReader(summary.open(newline='')));assert len(ss)==len(r['pairs']);assert sorted([x[k] for x in ss for k in ['participant_A','participant_B']])==sorted(a['id'] for a in r['assignments'])
 if Path(f+'.md').exists():
  md=Path(f+'.md').read_text();assert all(x['id'] in md and x['profile'] in md for x in r['originalInput']['records']);assert all(x['reviewNote'] in md for x in r['reviews'])
 report.append({'file':f,'records':r['total'],'approved':r['approved'],'pairs':len(r['pairs']),'allOriginalsAndReviewedNotesPreserved':True,'onePerArmAndGapVerified':True})
r=json.loads(Path('export-held.json').read_text());ss=list(csv.DictReader(Path('export-held-summary.csv').open(newline='')));assert len(ss)==2 and r['held']==2 and len(r['reviews'])==6
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent Python CSV/JSON/Markdown parse and all-record / pair conservation')
