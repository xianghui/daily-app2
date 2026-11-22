from pathlib import Path
import json,csv,io
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(f'export-{name}-json.json').read_text());rows=list(csv.DictReader(io.StringIO(Path(f'export-{name}-csv.csv').read_text())));plan=list(csv.DictReader(io.StringIO(Path(f'export-{name}-plan-csv.csv').read_text())))
 assert len(rows)==len(r['reviews'])==len(r['originalInput']['archives'])
 for i,x in enumerate(rows):
  assert x['reviewed_system']==r['reviews'][i]['resource']
  safe=lambda t: "'"+t if t and t[0] in '=+-@\t\r' else t
  assert x['id']==safe(r['reviews'][i]['id'])
  assert x['original_note']==safe(r['originalInput']['archives'][i]['systemNote'])
  assert int(x['original_to'])==r['originalInput']['archives'][i]['to']
  assert int(x['original_MB'])==r['originalInput']['archives'][i]['size']
  assert int(x['reviewed_MB'])==r['reviews'][i]['size']
  expected=r['reviews'][i]['note'];expected="'"+expected if expected[:1] in '=+-@\t\r' and expected else expected
  assert x['reviewer_note']==expected
 assert len(plan)==sum(max(1,len(p['chain']))for p in r['analysis']['plans'])
 for p in r['analysis']['plans']:
  cells=[x for x in plan if x['system']==p['system']]
  if p['status']=='gap':assert len(cells)==1 and cells[0]['status']=='gap' and not cells[0]['archive']
  else:
   assert sum(int(x['MB'])for x in cells)==p['totalMB'];v='FULL'
   for x in cells:assert x['from']==v;v=x['to']
   assert int(v)==p['target']
 md=Path(f'export-{name}-markdown.md').read_text();audit=json.loads(md[md.index('{\n  "schema"'):]);assert audit==r
 checks.append({'fixture':name,'archiveRows':len(rows),'manifestRows':len(plan),'jsonCsvMarkdownAndChainChecks':True})
assert json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
held=json.loads(Path('export-held-json.json').read_text());assert held['analysis']['status']=='held' and len(held['reviews'])==6
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/JSON/Markdown parsing, multiline escaping, every archive and ordered chain')
