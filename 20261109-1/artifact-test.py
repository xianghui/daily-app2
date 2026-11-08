from pathlib import Path
import json,csv,io
j=json.loads(Path('export-reviewed.json').read_text());c=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())))
assert len(c)==len(j['requirements'])+sum(len(r['slots']) for r in j['requirements'])+len(j['tests'])==15
for r,s in zip(c[:4],j['requirements']):
 assert r['kind']=='requirement' and r['id']==s['id'] and r['source']==s['text'] and r['links']=='; '.join(s['tests'])
slots=[(r,s) for r in j['requirements'] for s in r['slots']]
for cslot,(r,s) in zip(c[4:12],slots):
 assert cslot['kind']=='scenario-slot' and cslot['id']==r['id']+':'+s['kind'] and cslot['links']=='; '.join(s['tests']) and cslot['scenario']==s['kind']
 assert cslot['decision']==('linked' if s['tests'] else 'gap')
for r,s in zip(c[12:],j['tests']):
 assert r['kind']=='test' and r['id']==s['id'] and r['source']==s['text'] and r['decision']==s['decision'] and r['links']=='; '.join(s['links']) and r['scenario']==s['kind']
 assert r['note']==("'" if s['note'].startswith(('=','+','-','@','\t','\r')) else '')+s['note']
assert c[12]['note']=="'=1+1\nReviewed, \"quoted\""
m=Path('export-reviewed.md').read_text()
assert all(x['id'] in m and x['text'] in m for x in j['requirements']+j['tests'])
assert '[hold /' in m and m.count('GAP:')==2 and m.count('MISSING:')==j['metrics']['slotGaps']==6
assert json.loads(Path('export-max.json').read_text())['originalInput']==json.loads(Path('export-roundtrip.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'all7SourcesPlus8ScenarioCellsPreserved':True,'currentScenarioHoldAndNote':True,'csvEscapingMultilineQuotedFormula':True,'markdownAllScenarioGapsAndTests':True,'max48SourceRecordsRoundtrip':True},indent=2))
print('PASS independent JSON/CSV/Markdown parsing: all sources/scenario cells and exact reviewed fields')
