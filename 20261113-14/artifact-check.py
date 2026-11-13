import json,csv
from pathlib import Path
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==d['total']==len(d['originalInput']['records'])
 for i,(r,s) in enumerate(zip(rows,d['reviews'])):
  assert r['id']==s['id']
  assert r['source']==d['originalInput']['records'][i]['note']
  for field in ['owner','review_note']:
   text=s['owner' if field=='owner' else 'reviewNote'];expected=("'" if text.startswith(('=','+','-','@','\t','\r')) else '')+text
   assert r[field]==expected,(stem,field,r[field],expected)
  for field,target in [('balance_cents','balance'),('apr_basis_points','apr'),('minimum_cents','minimum')]:assert int(r[field])==s[target]
 checks.append({'artifact':stem,'records':len(rows),'roundtrip':True})
r=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert r['reviews'][0]['reviewNote'] in md;assert '\n' in r['reviews'][0]['owner'];assert r['reviews'][0]['owner'] in md
for stem in ['fixture0','fixture1','reviewed','undo','horizon']:
 d=json.loads(Path('export-'+stem+'.json').read_text())
 for plan in [d['selected'],d['baseline']]:
  balance={r['id']:r['balance'] for r in d['reviews']};totalinterest=totalpaid=0
  for month in plan['plans']:
   paid=0
   for l in month['ledger']:
    assert l['opening']==balance[l['id']]
    rate=next(r['apr'] for r in d['reviews'] if r['id']==l['id'])
    assert l['interest']==(l['opening']*rate+60000)//120000
    assert l['closing']==l['opening']+l['interest']-l['payment']>=0
    balance[l['id']]=l['closing'];paid+=l['payment'];totalpaid+=l['payment'];totalinterest+=l['interest']
   assert paid+month['unspent']==d['originalInput']['budget']
  assert totalpaid==plan['paid'] and totalinterest==plan['interest'] and sum(balance.values())==plan['remaining']
Path('artifact-validation.json').write_text(json.dumps({'downloads':checks,'independentLedgerConservation':True,'multilineFormulaEscaping':True},indent=2));print('PASS independently parsed JSON CSV Markdown; source conservation, exact interest and payments')
