import csv,json,pathlib
p=pathlib.Path('.')
review=json.loads((p/'export-reviewed.json').read_text())
with (p/'export-reviewed.csv').open(newline='') as f: rows=list(csv.DictReader(f))
assert len(rows)==len(review['reviews'])==4
for a,b in zip(rows,review['reviews']):
 for k in ['id','original','product','inspected','defective','decision','note']:
  v=str(b[{'original':'text','product':'item'}.get(k,k)])
  if k=='note' and v.startswith(('=','+','-','@','\t','\r')):v="'"+v
  assert a[k]==v,(k,a[k],v)
assert 'defective 4' in (p/'export-reviewed.md').read_text()
with (p/'export-max.csv').open(newline='') as f: maximum=list(csv.DictReader(f))
m=json.loads((p/'export-max.json').read_text());assert len(maximum)==len(m['reviews'])==24
assert sum(int(x['inspected']) for x in maximum)==sum(x['inspected'] for x in m['streams'])
assert sum(int(x['defective']) for x in maximum)==sum(x['defective'] for x in m['streams'])
(p/'artifact-validation.json').write_text(json.dumps({'csvIndependentParser':True,'quotedMultilineFormulaEscaping':True,'reviewedNumbersSurvive':True,'all24RowsAndTotalsPreserved':True,'markdownCurrent':True},indent=2))
print('PASS independent artifact parsing and conservation')
