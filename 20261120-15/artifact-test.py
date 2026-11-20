from pathlib import Path
import csv,json,math
p=Path(__file__).resolve().parent
for n in ['fixture0','fixture1','max','reviewed']:
 r=json.loads((p/f'export-{n}.json').read_text()); rows=list(csv.DictReader((p/f'export-{n}.csv').open(newline='')))
 assert len(rows)==r['total']
 for row,x,original in zip(rows,r['reviews'],r['originalInput']['records']):
  assert row['id']==x['id'] and row['original_text']==original['text']
  assert row['reviewed_competency']==x['target'] and row['decision']==x['decision']
  assert int(row['reviewed_value'])==x['value'] and row['reviewed_person']==x['person'] and row['reviewed_wave']==x['wave']
  note=x['reviewNote']; escaped="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert row['review_note']==escaped
 if n!='reviewed':
  pairs=list(csv.DictReader((p/f'export-{n}-pairs.csv').open(newline='')))
  assert len(pairs)==len(r['pairs'])
  for row,x in zip(pairs,r['pairs']):
   assert row['competency']==x['competency'] and row['person']==x['person'] and row['direction']==x['direction']
   for k in ['before','after','change']:assert row[k]==('' if x[k] is None else str(x[k]))
 if n.startswith('fixture'):
  md=(p/f'export-{n}.md').read_text()
  assert all(o['text'] in md for o in r['originalInput']['records'])
(p/'artifact-validation.json').write_text(json.dumps({'passed':True,'sets':['fixture0','fixture1','max','reviewed'],'independentParser':'Python csv.DictReader and json','retained':'all originals, reviewed fields, multiline formula-safe notes, full pair roster, missing vs zero; Markdown source text'}))
print('PASS independent artifact parsing and record/roster round trips')
