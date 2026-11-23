from pathlib import Path
import json,csv,os,io
prefix=os.environ.get('PREFIX','');reports=[]
for label in ['fixture0','fixture1','reviewed','held','max']:
 stem=prefix+'export-'+label
 r=json.loads(Path(stem+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(stem+'.csv').read_bytes().decode(),newline='')));release=json.loads(Path(stem+'.text.json').read_text());md=Path(stem+'.md').read_text()
 assert len(rows)==len(r['originalInput']['records'])==len(r['checks'])
 assert len(release)==r['metrics']['ready']
 def clean(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for i,(row,c) in enumerate(zip(rows,r['checks'])):
  assert row['id']==clean(c['id'])
  assert row['original_hex']==clean(r['originalInput']['records'][i]['raw'])
  assert row['reviewed_hex']==clean(r['reviews'][i]['raw'])
  assert row['review_note']==clean(r['reviews'][i]['note'])
  assert row['decoded_text']==clean(c.get('text',''))
  assert json.dumps(c['id'],ensure_ascii=False) in md
 for t in release:
  assert t['text'].encode(t['sourceEncoding']).hex()==t['sourceHex']
  source=next(c for c in r['checks'] if c['id']==t['id']);assert source['text']==t['text']
 if label=='reviewed':assert rows[0]['review_note']=="'=SUM(1,2)\nReviewed \"source\", exactly.";assert release[0]['text']=='Hi\n"Q"'
 if label=='fixture1':assert release[2]['text'].startswith('\ufeff');assert '\r\n' in release[3]['text']
 # independently compute the displayed comparison, including literal replacement occurrences
 ready=[c for c in r['checks'] if c['status']=='ready']
 assert r['metrics']['changedInterpretations']==sum(c['text']!=bytes.fromhex(c['raw']).decode('utf-8',errors='replace') for c in ready)
 assert r['metrics']['baselineReplacementOccurrences']==sum(bytes.fromhex(c['raw']).decode('utf-8',errors='replace').count('\ufffd') for c in ready)
 reports.append({'artifact':label,'rows':len(rows),'ready':len(release),'pythonCodecsByteRoundTrips':True,'csvAllRecordsAndReviewedFields':True,'computedMetricsMatchIndependentDecoder':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS independent Python CSV/JSON/codecs artifacts',len(reports))
