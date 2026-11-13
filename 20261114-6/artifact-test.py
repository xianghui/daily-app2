import json,csv,io,pathlib
p=pathlib.Path('.')
report=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads((p/f'export-{name}.json').read_text());rows=list(csv.DictReader(io.StringIO((p/f'export-{name}.csv').read_text(),newline='')))
 assert len(rows)==len(d['reviews'])==len(d['originalInput']['records'])
 for i,(r,v) in enumerate(zip(rows,d['reviews'])):
  assert r['id']==v['id'] and r['activity']==v['kind'] and int(r['minute'])==v['minute']
  assert r['source_description']==d['originalInput']['records'][i]['description']
  for k in ['owner','review_note']:
   actual=v['reviewNote' if k=='review_note' else k]
   safe="'"+actual if actual and actual[0] in '=+-@\t\r' else actual
   assert r[k]==safe,(r[k],safe)
  assert r['reviewed_case']==v['caseId']
 assert sorted(x for c in d['cases'] for x in c['eventIds'])==sorted(r['id'] for r in d['reviews'])
 report.append({'artifact':name,'rows':len(rows),'complete':True})
assert '\n"quoted", confirm event order' in json.loads((p/'export-reviewed.json').read_text())['reviews'][0]['reviewNote']
assert 'quoted' in (p/'export-reviewed.md').read_text()
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/JSON complete records, multiline/formula escaping and reviewed values')
