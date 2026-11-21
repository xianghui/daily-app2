from pathlib import Path
import csv,json
checked=[]
def safe(v):
 return "'"+v if isinstance(v,str) and v and v[0] in '=+-@\t\r' else v
for f in sorted(Path('.').glob('export-*-json.json')):
 if f.name.endswith('tidy-json.json'):continue
 r=json.loads(f.read_text());d=r['originalInput'];assert r['schema']=='melt-atelier/1';assert len(r['reviews'])==len(d['columns'])-len(d['identifiers'])
 prefix=f.name.removesuffix('-json.json');csvpath=Path(prefix+'-csv.csv')
 if csvpath.exists():
  rows=list(csv.reader(csvpath.open(newline='')));assert rows[0]==[safe(v)for v in ['source_row',*[f'source:{c["id"]}'for c in d['columns']],'reshape_status']];assert rows[1:]==[[str(i+1),*[safe(x)for x in row],r['analysis']['status']]for i,row in enumerate(d['rows'])]
 if r['analysis']['status']=='ready':
  a=r['analysis'];t=a['tidy'];assert len(t['rows'])==len(d['rows'])*len(d['waves']);assert len({(row[0],row[1+len(d['identifiers'])])for row in t['rows']})==len(t['rows']);assert a['measurementCells']==len(d['rows'])*len(d['waves'])*len(d['measures'])
  # Reconstruct independently from the exported, reviewed mapping and downloaded long data.
  ids=[c['id']for c in d['columns']];dest={x['column']:json.loads(x['slot'])for x in r['reviews']};byrow={(row[0],row[1+len(d['identifiers'])]):row for row in t['rows']};rebuilt=[]
  for i in range(len(d['rows'])):
   wide=[]
   for col in ids:
    if col in d['identifiers']:wide.append(byrow[i+1,d['waves'][0]['id']][1+d['identifiers'].index(col)])
    else:
     wave,measure=dest[col];j=[m['id']for m in d['measures']].index(measure);wide.append(byrow[i+1,wave][2+len(d['identifiers'])+j])
   rebuilt.append(wide)
  assert rebuilt==d['rows']
  tj=Path(prefix+'-tidy-json.json');tc=Path(prefix+'-tidy-csv.csv')
  if tj.exists():assert json.loads(tj.read_text())==t
  if tc.exists():assert list(csv.reader(tc.open(newline='')))==[[safe(str(v))if isinstance(v,str)else str(v)for v in row]for row in [t['columns'],*t['rows']]]
 if prefix=='export-reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 md=Path(prefix+'-markdown.md')
 if md.exists():
  text=md.read_text();obj=json.loads(text.split('## Complete originals and reviewed neural evidence\n',1)[1]);assert obj['originalInput']==d;assert obj['reviews']==r['reviews'];assert json.loads(text.split('## Current reshape analysis\n',1)[1].split('\n\n## Complete originals',1)[0])==r['analysis']
 checked.append(f.name)
assert len(checked)>=6
Path('artifact-validation.json').write_text(json.dumps({'auditEnvelopesParsed':checked,'independentReconstructionExact':True,'CSVRowsAndEscapingPreserved':True,'tidyJSONExact':True,'multilineNotesSurvive':True},indent=2));print('PASS independently parsed artifacts',len(checked))
