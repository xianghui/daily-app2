import csv,json,pathlib
report=[]
for p in pathlib.Path('.').glob('export-*.csv'):
 j=json.loads(p.with_suffix('.json').read_text());rows=list(csv.DictReader(p.open(newline='')));assert len(rows)==j['total'];assert [r['id'] for r in rows]==[r['id'] for r in j['reviews']]
 for out,src in zip(rows,j['reviews']):
  assert int(out['reviewed_count'])==src['count'];assert out['reviewed_operation']==src['item'];v=src['reviewNote'];expected="'"+v if v.startswith(('=','+','-','@','\t','\r')) else v;assert out['review_note']==expected
 report.append({'file':p.name,'parsedRows':len(rows),'reviewedFieldsPreserved':True})
for i in range(2):
 j=json.loads(pathlib.Path(f'export-fixture{i}.json').read_text());m=pathlib.Path(f'export-fixture{i}.md').read_text();assert str(j['plan']['best']['weightedMs']) in m
 for r in j['reviews']:assert r['id'] in m and j['originalInput']['observations'][j['reviews'].index(r)]['description'] in m
assert json.loads(pathlib.Path('export-reviewed.json').read_text())['reviews'][0]['reviewNote']=='=SUM(1,2)\n"quoted", verify'
pathlib.Path('artifact-validation.json').write_text(json.dumps({'independentCSVParse':report,'markdownValuesAndRecords':True,'multilineQuotedFormulaTextPreservedAndEscaped':True},indent=2));print('PASS downloaded CSV/JSON/Markdown round-trip',len(report))
