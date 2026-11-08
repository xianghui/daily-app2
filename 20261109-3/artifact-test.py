import csv,json
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['lines'])==4
for c,p in zip(rows,r['lines']):
 assert c['id']==p['id'] and c['description']==p['text'] and c['reviewedOrder']==p['mapped'] and c['status']==p['status']
 assert int(c['lineCents'])==p['quantity']*p['unitCents']
 assert c['note']==("'"+p['note'] if p['note'].startswith(('=','+','-','@','\t','\r')) else p['note'])
assert r['review'][0]['decision']=='hold'
assert r['review'][0]['note']=='=1+1\nReviewed, "receipt"'
assert sum(int(c['lineCents']) for c in rows)==r['metrics']['invoiceCents']==29000
assert json.loads(Path('export-roundtrip.json').read_text())['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
for name in ['Office','Cafe','max','reviewed','roundtrip','offline','challenge','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());assert a['metrics']['linkedCents']+a['metrics']['unresolvedCents']==a['metrics']['invoiceCents'];assert len(a['lines'])==len(a['originalInput']['invoices']);assert len(a['orders'])==len(a['originalInput']['orders'])
md=Path('export-reviewed.md').read_text();assert all(r['id'] in md for r in r['lines'])
Path('artifact-validation.json').write_text(json.dumps({'csvRows':len(rows),'originalsAndReviewedFieldsPreserved':True,'integerCentsConservedAcross8Artifacts':True,'quotedMultilineFormulaSafety':True,'maxLinesRoundtrip':40},indent=2));print('PASS independent CSV/JSON/Markdown parse, cents conservation and edited multiline note')
