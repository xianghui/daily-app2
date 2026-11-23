from pathlib import Path
from decimal import Decimal,localcontext,ROUND_HALF_EVEN,ROUND_HALF_UP,ROUND_DOWN
import json,csv,os
prefix=os.environ.get('PREFIX','');count=0
m={'half-even':ROUND_HALF_EVEN,'half-away':ROUND_HALF_UP,'truncate':ROUND_DOWN}
for name in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());cs=r['checks'];reviews=r['reviews'];orig=r['originalInput'];assert len(cs)==len(reviews)==len(orig['records']);count+=1
 table=list(csv.DictReader(Path(prefix+'export-'+name+'.csv').open(newline='')));assert len(table)==len(cs);count+=1
 release=json.loads(Path(prefix+'export-'+name+'.manifest.json').read_text());assert len(release['records'])==r['metrics']['ready'];count+=1
 total=0
 with localcontext() as ctx:
  ctx.prec=80
  for i,c in enumerate(cs):
   row=table[i];note=reviews[i]['note'];safe=lambda s: "'"+s if s and s[0] in '=+-@\t\r' else s
   assert row['id']==safe(c['id']);assert row['review_note']==safe(note);assert row['source_context']==safe(orig['records'][i]['context']);count+=3
   assert row['reviewed_amount']==(c['raw'] if c['status']=='ready' or (c['raw'] and all(x in '0123456789.+-' for x in c['raw'])) else safe(c['raw']));count+=1
   if c['status']=='ready':
    plan=next(p for p in orig['plans'] if p['id']==c['system']);rounded=Decimal(c['raw']).quantize(Decimal('.01'),rounding=m[plan['mode']]);assert Decimal(c['amount'])==rounded;assert int(c['cents'])==int(rounded*100);assert Decimal(c['residual'])==rounded-Decimal(c['raw']);assert Decimal(row['fixed_amount'])==rounded;total+=int(c['cents']);count+=4
    rel=next(x for x in release['records'] if x['id']==c['id']);assert rel['cents']==c['cents'] and rel['source']==c['raw'] and rel['amount']==c['amount'];count+=1
   else:assert not any(x['id']==c['id'] for x in release['records']);count+=1
 assert str(total)==release['totalCents']==r['metrics']['totalCents'];count+=1
 md=Path(prefix+'export-'+name+'.md').read_text();assert all(json.dumps(c['id'],ensure_ascii=False) in md for c in cs);count+=1
 if name=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "contract", exactly.';assert cs[0]['raw']=='-3.005';assert orig['records'][0]['raw']=='-2.685';count+=3
 if name=='max':assert len(cs)==24;assert all(isinstance(c['cents'],str) for c in release['records']);count+=2
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'independentParser':'Python csv/json/Decimal, 80-digit context','allRecordsAndReviewsPreserved':True,'exactTotals':True},indent=2));print('PASS artifacts',count)
