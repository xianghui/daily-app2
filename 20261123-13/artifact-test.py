import csv,json,pathlib,os
prefix=os.environ.get('PREFIX','')
results=[]
for label in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(pathlib.Path(prefix+'export-'+label+'.json').read_text()); rows=list(csv.DictReader(open(prefix+'export-'+label+'.csv',newline=''))); release=list(csv.DictReader(open(prefix+'export-'+label+'.release.csv',newline='')))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['records'])
 for i,row in enumerate(rows):
  v=r['analysis']['checks'][i];s=r['reviews'][i]
  source=r['originalInput']['records'][i]
  source_id=source['id'];safe_id="'"+source_id if source_id.startswith(('=','+','-','@','\t','\r')) else source_id
  assert row['record_id']==safe_id and row['source_context']==source['note']
  assert row['original_hex']==source['value']
  assert row['integer']==('' if v['value'] is None else str(v['value']))
  assert row['reviewed_hex']==s['value']
  note=s['note'];safe="'"+note if note.startswith(('=','+','-','@','\t','\r')) else note
  assert row['reviewer_note']==safe
 assert len(release)==r['analysis']['decoded']
 for row,v in zip(release,[c for c in r['analysis']['checks'] if c['status']=='decoded']):
  assert int(row['integer'])==v['value']
  assert bytes.fromhex(row['canonical_hex'])==bytes.fromhex(v['hex'])
  layout=v['layout'];expected=int.from_bytes(bytes.fromhex(v['hex']),byteorder='little' if layout.endswith('LE') else 'big',signed=layout.startswith('i'))
  assert int(row['integer'])==expected
 md=pathlib.Path(prefix+'export-'+label+'.md').read_text();back=json.loads(md.split('```json\n')[1].rsplit('\n```',1)[0]);assert back==r
 if label=='reviewed':assert rows[0]['reviewed_hex']=='FF FF\nFC 19' and rows[0]['reviewer_note']=="'=SUM(1,2)\nChecked \"source\", raw."
 results.append({'artifact':label,'completeRows':len(rows),'releaseRows':len(release),'independentIntFromBytes':True,'markdownJSONRoundTrip':True})
pathlib.Path(prefix+'artifact-validation.json').write_text(json.dumps(results,indent=2));print('PASS independent Python CSV/Markdown/JSON and integer round trips')
