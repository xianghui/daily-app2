from pathlib import Path
import csv,json,io
checks=[]
for p in Path('.').glob('export-*.json'):
 a=json.loads(p.read_text());
 if a.get('app')!='Parallel Room':continue
 rows=a['rows'];orig=a['original']['sessions'];assert len(rows)==len(orig);assert [r['source'] for r in rows]==orig;assert len({r['id'] for r in rows})==len(orig)
 assert len({(r['block'],r['room']) for r in rows})==len(orig)
 assert all(r['reviewed'] for r in rows)
 for block in range(a['original']['slots']):assert 1<=sum(r['block']==block for r in rows)<=a['original']['capacity']
 checks.append(p.name)
for stem in ['edited','quoted']:
 a=json.loads(Path('export-'+stem+'.json').read_text());c=list(csv.DictReader(io.StringIO(Path('export-'+stem+'.csv').read_text())))
 assert len(c)==len(a['rows'])
 def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
 for out,r in zip(c,a['rows']):
  assert out=={'id':safe(r['id']),'title':safe(r['source']['title']),'description':safe(r['source']['text']),'block':str(r['block']+1),'room':str(r['room']),'note':safe(r['note'])}
Path('export-roundtrip-validation.json').write_text(json.dumps({'jsonArtifactsParsed':checks,'csvArtifactsParsed':2,'allSourcesAndNotesPreserved':True,'formulaNeutralizationAndQuotedMultiline':True,'uniqueBlockRoomAndCapacity':True},indent=2));print('JSON/CSV independent parser: all source rows, reviewed notes, capacities, room uniqueness and multiline escaping preserved.')
