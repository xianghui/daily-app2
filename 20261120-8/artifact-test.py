import csv,json
from pathlib import Path
reports=[]
for f in Path('.').glob('export-*.json'):
 r=json.loads(f.read_text());assert r['schema']=='session-harbor/v1';assert len(r['reviews'])==len(r['originalInput']['records'])==r['total'];assert r['approved']+r['held']==r['total']
 ids=[e for s in r['plan'] for e in s['eventIds']];assert len(ids)==len(set(ids))==r['approved'];assert set(ids)=={x['id'] for x in r['reviews'] if x['decision']=='approve'}
 reports.append({'file':str(f),'records':r['total'],'approved':r['approved'],'conserved':True})
for i in [0,1]:
 r=json.loads(Path(f'export-fixture{i}.json').read_text());rows=list(csv.DictReader(open(f'export-fixture{i}.csv',newline='')));assert len(rows)==r['total'];assert [x['original_text'] for x in rows]==[x['text'] for x in r['originalInput']['records']]
 s=list(csv.DictReader(open(f'export-fixture{i}-sessions.csv',newline='')));assert len(s)==len(r['plan']);assert [json.loads(x['event_ids']) for x in s]==[x['eventIds'] for x in r['plan']];assert [float(x['observed_span_minutes']) for x in s]==[x['spanMinutes'] for x in r['plan']];assert 'observed' in Path(f'export-fixture{i}.md').read_text()
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed.csv',newline='')));assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
r=json.loads(Path('export-max.json').read_text());assert r['total']==96;rows=list(csv.DictReader(open('export-max.csv',newline='')));assert len(rows)==96;assert rows[-1]['review_note']=='last note\nkept';s=list(csv.DictReader(open('export-max-sessions.csv',newline='')));assert sum(len(json.loads(x['event_ids'])) for x in s)==96
Path('artifact-validation.json').write_text(json.dumps({'auditFiles':reports,'independentPythonCSVParser':True,'quotedCommaNewlineAndFormulaProtection':True,'maximumBatch':96,'sessionIdsAndSpansMatchJSON':True},indent=2));print('PASS independent JSON/CSV/Markdown artifact conservation and escaping')
