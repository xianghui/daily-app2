from pathlib import Path
import csv,json,os
p=Path.cwd();prefix=os.environ.get('PREFIX','');reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 stem=prefix+'export-'+name;r=json.loads((p/(stem+'-json.json')).read_text());rows=list(csv.DictReader((p/(stem+'-csv.csv')).open(newline='')));blocks=list(csv.DictReader((p/(stem+'-block-csv.csv')).open(newline='')));assert len(rows)==len(r['originalInput']['records'])==len(r['reviews']);assert len(blocks)==len(r['originalInput']['blocks']);guard=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
 for row,source,review in zip(rows,r['originalInput']['records'],r['reviews']):
  assert row['share_id']==guard(source['id']);assert row['hex']==source['hex'];assert row['reviewer_note']==guard(review['note']);assert row['reviewed_recipe']==guard(review['resource'])
 for row,block in zip(blocks,r['analysis']['blocks']):assert row['block_id']==guard(block['id']) and row['status']==block['status'] and row['hex']==(block['hex']or'') and json.loads(row['source_share_ids'])==block['sources']
 md=(p/(stem+'-markdown.md')).read_text();audit=json.loads(md.split('```json\n\n')[1].split('\n\n```')[0]);assert audit==r
 if name=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReview "complete", preserved. ⊕'
 for b in r['analysis']['blocks']:
  if b['hex']:
   originals={s['id']:bytes.fromhex(s['hex'])for s in r['originalInput']['records']};value=bytearray(len(bytes.fromhex(b['hex'])))
   for s in b['sources']:
    for j,v in enumerate(originals[s]):value[j]^=v
   assert value.hex()==b['hex']
 reports.append({'artifact':name,'shares':len(rows),'blocks':len(blocks),'jsonCsvMarkdownRoundtrip':True,'byteWitnessesChecked':True})
for name in ['held','inconsistent','negation']:
 r=json.loads((p/(prefix+'export-'+name+'-json.json')).read_text());assert all(b['hex']is None for b in r['analysis']['blocks'])
(p/(prefix+'artifact-validation.json')).write_text(json.dumps(reports,indent=2));print('PASS independent JSON/CSV/Markdown parsing, all records, escaping, multiline edits and byte witnesses')
