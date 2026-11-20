from pathlib import Path
import json,csv,io
checks=[]
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text());audit=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-audit.csv').read_text())));cues=list(csv.DictReader(io.StringIO(Path(f'export-fixture{i}-cues.csv').read_text())))
 assert len(audit)==len(r['reviews'])==4 and len(cues)==4
 assert [x['id'] for x in audit]==[x['id'] for x in r['originalInput']['records']]
 assert [x['original_text'] for x in audit]==[x['text'] for x in r['originalInput']['records']]
 assert [x['reviewed_cue'] for x in audit]==[x['selected'] for x in r['reviews']]
 assert [x['cue_id'] for x in cues]==[x['id'] for x in r['originalInput']['cues']]
 assert [x['record_id'] for x in cues]==[x['recordId'] for x in r['coverage']]
 for row in audit:assert len(json.loads(row['cosine_evidence_json']))==4
 md=Path(f'export-fixture{i}.md').read_text();assert all(x['text'] in md for x in r['originalInput']['records']);checks.append(f'fixture{i} JSON/CSV/Markdown records and cue order preserved')
r=json.loads(Path('export-reviewed.json').read_text());note=r['reviews'][0]['reviewNote'];assert note=='=SUM(1,2)\n"reviewed", with newline'
for name in ['export-reviewed-audit.csv','export-reviewed-cues.csv']:
 row=list(csv.DictReader(io.StringIO(Path(name).read_text())))[0];assert row['review_note']=="'"+note
assert note in Path('export-reviewed.md').read_text();checks.append('reviewed multiline quoted formula-like note preserved; spreadsheet fields safely prefixed')
r=json.loads(Path('export-held.json').read_text());assert r['held']==1 and r['missingCues']==1 and len(r['reviews'])==4
rows=list(csv.DictReader(io.StringIO(Path('export-held-cues.csv').read_text())));assert rows[0]['record_id']=='';checks.append('held fragments retained; cue missing evidence explicit')
r=json.loads(Path('export-max.json').read_text());audit=list(csv.DictReader(io.StringIO(Path('export-max-audit.csv').read_text())));assert len(r['reviews'])==len(audit)==40;assert len(r['coverage'])==24;assert len({x['id'] for x in audit})==40
assert r['matched']+r['missingCues']==24;assert r['approved']+r['held']==40;checks.append('maximum 40 source fragments + 24 cues conserved; audit parsed')
r=json.loads(Path('export-swapped.json').read_text());assert r['baseline']['reversals']==1 and r['reviewedViolations']=={'duplicates':0,'reversals':0};assert r['matched']==3 and r['missingCues']==1;checks.append('computed baseline reversal and reviewed monotone bounds independently checked')
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'independentParser':'Python csv/json'},indent=2));print('PASS',len(checks),'artifact checks')
