from pathlib import Path
import csv,json,io
j=json.loads(Path('export-reviewed.json').read_text());c=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(c)==len(j['steps'])==4
for a,b in zip(c,j['steps']):
 for k in ['id','text','decision']:assert a[k]==b[k]
 assert a['reviewedRole']==b['role'];assert a['incomingDeliverable']==b['handoff'];assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
md=Path('export-reviewed.md').read_text();assert all(r['id']+' / '+r['role'] in md for r in j['steps']);assert j['transitions'][2]['deliverable']=='Approved article and artwork'
assert json.loads(Path('export-roundtrip.json').read_text())['input']==json.loads(Path('export-max.json').read_text())['input']
b=json.loads(Path('export-boundary.json').read_text());bc=list(csv.DictReader(io.StringIO(Path('export-boundary.csv').read_text())));assert bc[0]['text']=="'"+b['steps'][0]['text']
Path('artifact-validation.json').write_text(json.dumps({'rows':4,'CSVEscapingIncludingMultilineFormula':True,'MarkdownAllSteps':True,'JSONOriginalRoundtrip':True,'ReviewedHandoffPreserved':True}));print('PASS independent CSV, Markdown and JSON artifacts')
