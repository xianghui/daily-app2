import csv,json,re
from pathlib import Path
for name in ['Product','Library','reviewed','offline','max','roundtrip','phone','escaping']:
 a=json.loads(Path('export-'+name+'.json').read_text());assert len(a['records'])==len(a['input']['quotes']);assert [(r['id'],r['participant'],r['text']) for r in a['records']]==[(r['id'],r['participant'],r['text']) for r in a['input']['quotes']]
 chosen=[r for r in a['records'] if r['decision']=='accept'];assert sum(len(q['quotes']) for q in a['board'])==len(chosen);assert len(set(id for q in a['board'] for id in q['quotes']))==len(chosen)
 for q in a['board']:assert len(q['quotes'])<=a['input']['perQuestion']
 for p in set(r['participant'] for r in chosen):assert sum(r['participant']==p for r in chosen)<=a['input']['perParticipant']
for name in ['reviewed','escaping']:
 a=json.loads(Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(Path('export-'+name+'.csv').open(newline='')));assert len(rows)==len(a['records'])
 for source,row in zip(a['records'],rows):
  for field,key in [('quote','text'),('note','note'),('participant','participant')]:
   value=source[key];expected="'"+value if re.match(r'^[=+\-@\t\r]',value) else value;assert row[field]==expected,(field,row[field],expected)
a=json.loads(Path('export-reviewed.json').read_text());md=Path('export-reviewed.md').read_text();assert a['records'][0]['note'] in md or a['records'][0]['decision']=='hold'
for r in a['records']:
 if r['decision']=='accept':assert r['text'] in md
print('PASS JSON originals/caps/no quote reuse; independent CSV quoted-newline/formula parsing; reviewed Markdown sources')
