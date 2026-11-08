from pathlib import Path
import csv,json
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['passages'])+len(r['references'])
for a,b in zip(rows,r['passages']):
 assert a['id']==b['id'] and a['text']==b['text'] and a['hint']==b['hint'] and a['reference']==b['ref'] and a['decision']==b['decision'] and a['number']==str(b['number'] or '')
 assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
for a,b in zip(rows[len(r['passages']):],r['references']):
 for f in ['id','title','authors','year','summary']: assert a[f]==b[f]
for name in ['Urban','Digital','max','roundtrip','offline','phone']:
 a=json.loads(Path('export-'+name+'.json').read_text());assert [x['id'] for x in a['passages']]==[x['id'] for x in a['originalInput']['passages']];assert len(a['references'])==len(a['originalInput']['references']);numbers={};n=0
 for p in a['passages']:
  if p['decision']=='approve' and p['ref']:
   if p['ref'] not in numbers:n+=1;numbers[p['ref']]=n
   assert p['number']==numbers[p['ref']]
  else:assert p['number'] is None
md=Path('export-reviewed.md').read_text();assert '[1]' in md and '[2]' in md and 'UNLINKED' in md
Path('artifact-validation.json').write_text(json.dumps({'allRecordsRetained':True,'reviewedFieldsMatchCSV':True,'quotedMultilineFormulaTextEscaped':True,'jsonReimportOriginalsPreserved':True,'sequentialFirstAppearanceNumbersAndRepeatedReferenceReuse':True}));print('PASS independent CSV/JSON/Markdown parse, numbering and source conservation')
