import json,csv,html,re,sys,math
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
checks=0
for path in Path('.').glob(prefix+'*.json'):
 r=json.loads(path.read_text())
 if not isinstance(r,dict) or r.get('schema')!='cueweave-v1':continue
 rows=r['review'];original=r['original']['fragments'];s=r['settings'];ids=[f['id'] for c in rows for f in original[c['from']:c['to']]]
 assert ids==[f['id'] for f in original]
 assert len(rows)==s['cueCount']==r['summary']['cues']
 for i,c in enumerate(rows):
  assert c['startMs']==original[c['from']]['startMs'] and c['endMs']==original[c['to']-1]['endMs']
  if i:assert c['startMs']>=rows[i-1]['endMs']
  if r['summary']['exportReady']:
   lines=c['text'].split('\n');assert len(lines)<=2 and all(0<len(x)<=s['lineWidth'] for x in lines)
   duration=c['endMs']-c['startMs'];assert s['minDurationMs']<=duration<=s['maxDurationMs']
   assert len(c['text'].replace('\n',' '))/(duration/1000)<=s['maxCPS']+1e-8
 score=sum(1-r['adjacentSimilarities'][c['to']-1] for c in rows[:-1]);assert abs(score-r['summary']['boundarySeparation'])<1e-8
 csvpath=path.with_suffix('.csv')
 if csvpath.exists():
  with csvpath.open(newline='') as f:parsed=list(csv.DictReader(f))
  assert len(parsed)==len(rows)
  for i,(cell,row) in enumerate(zip(parsed,rows)):
   assert cell['text']==("'" if re.match(r'^[=+\-@\t\r]',row['text']) else '')+row['text']
   assert cell['reviewer_note']==("'" if re.match(r'^[=+\-@\t\r]',row['reviewerNote']) else '')+row['reviewerNote']
   assert cell['decision']==row['decision'] and int(cell['start_ms'])==row['startMs']
  checks+=1
 vttpath=path.with_suffix('.vtt')
 if vttpath.exists():
  body=vttpath.read_text();assert body.startswith('WEBVTT\n\n')
  cues=re.findall(r'(?m)^\d+\n([\d:.]+) --> ([\d:.]+)\n(.*?)(?=\n\n|\Z)',body,re.S)
  assert len(cues)==len(rows)
  assert [html.unescape(c[2].rstrip('\n')) for c in cues]==[c['text'] for c in rows]
  checks+=1
 checks+=1
Path(prefix+'artifact-validation.json').write_text(json.dumps({'independentPythonCSVandWebVTTChecks':checks,'allOriginalFragmentsRetained':True,'reviewedMultilineAndFormulaEscapingPreserved':True}))
print('PASS independent artifacts',checks)
