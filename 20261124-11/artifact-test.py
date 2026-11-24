from pathlib import Path
import json,csv,io,fnmatch,os
from decimal import Decimal
prefix=os.environ.get('PREFIX','');count=0;files=[]
def check(v):
 global count
 assert v
 count+=1
def protect(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
def oracle(accept,offered):
 ranges=[]
 for part in accept.split(','):
  bits=[x.strip() for x in part.strip().split(';')];ranges.append((bits[0].lower(),Decimal(bits[1][2:]) if len(bits)>1 else Decimal(1),2-bits[0].count('*')))
 scores=[]
 for offer in offered:
  matches=[r for r in ranges if fnmatch.fnmatchcase(offer.lower(),r[0])];scores.append(max(matches,key=lambda r:r[2])[1] if matches else Decimal(0))
 return offered[scores.index(max(scores))] if max(scores)>0 else None
for path in sorted(Path('.').glob(prefix+'export-*.json')):
 if path.name.endswith('.release.json'):continue
 r=json.loads(path.read_text());check(r['app']=='Accept Atelier');check(len(r['checks'])==len(r['reviews'])==len(r['originalInput']['records']))
 for i,c in enumerate(r['checks']):
  original=r['originalInput']['records'][i];review=r['reviews'][i]
  check(c['id']==original['id']==review['id']);check(c['raw']==review['raw'])
  if c['status']=='ready':
   plan=next(p for p in r['originalInput']['plans'] if p['id']==c['system']);offered=json.loads(c['raw'])['offered'];selected=oracle(plan['accept'],offered)
   check(c['selected']==selected);check(c['statusCode']==(200 if selected else 406));check(c['offered']==offered);check(c['accept']==plan['accept']);check(c['baseline']==offered[0]);check(c['disagreement']==(selected!=offered[0]))
 check(r['metrics']['records']==len(r['checks']))
 for k,status in [('ready','ready'),('held','held'),('blocked','blocked')]:check(r['metrics'][k]==sum(c['status']==status for c in r['checks']))
 check(r['metrics']['disagreements']==sum(c.get('disagreement',False) for c in r['checks']));check(r['metrics']['unacceptable']==sum(c.get('statusCode')==406 for c in r['checks']))
 csvpath=path.with_suffix('.csv')
 if csvpath.exists():
  rows=list(csv.DictReader(io.StringIO(csvpath.read_text())));check(len(rows)==len(r['checks']))
  for i,c in enumerate(r['checks']):
   row=rows[i];check(row['id']==protect(c['id']));check(row['review_note']==protect(r['reviews'][i]['note']));check(row['source_context']==protect(r['originalInput']['records'][i]['context']));check(row['reviewed_case']==protect(c['raw']));check(row['original_case']==protect(r['originalInput']['records'][i]['raw']));check(row['selected']==(c.get('selected') or ''));check(row['status']==c['status'])
 md=path.with_suffix('.md')
 if md.exists():
  text=md.read_text()
  for review in r['reviews']:check(json.dumps(review['note'],ensure_ascii=False) in text)
 release=path.with_suffix('.release.json')
 if release.exists():
  out=json.loads(release.read_text());ready=[c for c in r['checks'] if c['status']=='ready'];check(len(out['cases'])==len(ready))
  for a,b in zip(out['cases'],ready):
   for key,target in [('id','id'),('contract','system'),('accept','accept'),('offered','offered'),('expectedMedia','selected'),('expectedStatus','statusCode')]:check(a[key]==b[target])
 files.append(path.name)
check(len(files)>=9)
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'audits':files,'independentParsing':'Python csv / JSON / Decimal fnmatch negotiation'},indent=2));print('PASS artifacts',count,'assertions',len(files),'audits')
