from pathlib import Path
import csv,json,math
p=Path(__file__).resolve().parent
reports=[]
for tag in ['fixture0','fixture1','reviewed','held','undo','max','semantic-change','challenge','signed']:
 r=json.loads((p/f'export-{tag}.json').read_text());assert r['schema']=='replicate-commons/v1'
 assert r['total']==len(r['originalInput']['records'])==len(r['reviews'])
 assert [x['id'] for x in r['reviews']]==[x['id'] for x in r['originalInput']['records']]
 active=[x for x in r['reviews'] if x['decision']=='approve'];assert len(active)==r['approved'];assert len(r['reviews'])==r['approved']+r['held']
 assert sorted(x['id'] for x in active)==sorted(i for u in r['plan'] for i in u['recordIds'])
 for u in r['plan']:
  vs=[x['value'] for x in active if x['target']==u['id']];assert u['count']==len(vs)
  assert u['mean']==(sum(vs)/len(vs) if vs else None)
  assert u['range']==(max(vs)-min(vs) if vs else None)
 for g in r['groups']:
  us=[u for u in r['plan'] if u['group']==g['id']];assert g['missing']==[u['id'] for u in us if not u['count']]
  assert g['unitMean']==(sum(u['mean'] for u in us)/len(us) if not g['missing'] else None)
 f=p/f'export-{tag}.csv'
 if f.exists():
  rows=list(csv.DictReader(f.open(newline='')));assert len(rows)==r['total']
  for row,x,o in zip(rows,r['reviews'],r['originalInput']['records']):
   assert row['id']==x['id'];assert row['original_text']==o['text'];assert float(row['reviewed_value'])==x['value'];assert row['reviewed_specimen']==x['target'];assert row['decision']==x['decision']
   n=x['reviewNote'];assert row['review_note']==("'"+n if n and n[:1] in '=+-@\t\r' else n)
 f=p/f'export-{tag}-specimens.csv'
 if f.exists():
  rows=list(csv.DictReader(f.open(newline='')));assert len(rows)==len(r['originalInput']['first'])
  for row,u in zip(rows,r['plan']):assert row['specimen']==u['id'] and int(row['approved_readings'])==u['count']
 if tag in ['fixture0','fixture1']:
  md=(p/f'export-{tag}.md').read_text();assert str(r['contrast']) in md
  for x in r['reviews']:assert x['id'] in md
 reports.append({'artifact':tag,'records':r['total'],'allOriginalsAndReviewsPreserved':True,'arithmeticReopened':True})
assert json.loads((p/'export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"reviewed", with newline'
assert json.loads((p/'export-max.json').read_text())['reviews'][-1]['reviewNote']=='last note\nkept'
(p/'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent Python CSV/JSON/Markdown reopen, all original rows and edited multiline/formula escaping')
