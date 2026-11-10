import csv,json,math
from pathlib import Path
p=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(p['records'])==12
for a,b in zip(rows,p['records']):
 assert a['id']==b['id'] and a['source']==b['source']
 assert float(a['duration'])==b['duration'] and float(a['original_duration'])==b['originalDuration']
 assert a['state']==b['state'] and a['original_state']==b['originalState']
 assert a['reviewed_stream']==b['selected'] and a['decision']==b['decision']
 assert a['note']==("'" if b['rationale'].startswith(('=','+','-','@','\t','\r')) else '')+b['rationale']
assert rows[0]['note']=='\'=1+1\nReviewed, "verified" 🪷'
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in p['records']);assert 'Censor' in md and 'censor-aware median' in md
for a in p['analyses']:
 group=[r for r in p['records'] if r['selected']==a['stream']]
 for step in a['steps']:
  assert step['atRisk']==sum(r['duration']>=step['time'] for r in group)
  assert step['events']==sum(r['duration']==step['time'] and r['state']=='complete' for r in group)
  assert step['censored']==sum(r['duration']==step['time'] and r['state']=='open' for r in group)
held=json.loads(Path('export-held.json').read_text());assert len(held['records'])==12 and not held['ready'] and len(held['analyses'])==0
maximum=json.loads(Path('export-max.json').read_text());rt=json.loads(Path('export-roundtrip.json').read_text());assert maximum['originalInput']==rt['originalInput'];assert len(rt['records'])==64
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'all12CurrentRowsSurvived':True,'reviewedDuration3Original2':rows[0]['duration']=='3' and rows[0]['original_duration']=='2','quotesNewlinesUnicodeFormulaEscaping':True,'allOriginalsAndHolds':True,'riskSetsRecomputed':True,'all64InputRoundtrip':True},indent=2));print('PASS independently parsed current artifacts and source conservation')
