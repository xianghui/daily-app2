import csv,json,pathlib,math
p=pathlib.Path('.')
checked=[]
for j in range(2):
 r=json.loads((p/f'export-fixture{j}.json').read_text());rows=list(csv.DictReader((p/f'export-fixture{j}.csv').open(newline='')));tiers=list(csv.DictReader((p/f'export-fixture{j}-rates.csv').open(newline='')))
 assert len(rows)==len(tiers)==r['total']==6
 assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['observations']]
 byid={t['source_id']:t for t in tiers}
 for service in r['services']:
  for t in service['tiers']:assert float(byid[t['id']]['fitted_rate_unrounded'])==t['fittedRate']
 assert '# Rate Terrace' in (p/f'export-fixture{j}.md').read_text()
 checked.append({'fixture':j,'rows':len(rows),'tiers':len(tiers),'sse':r['sse'],'baseline':r['baselineSSE']})
r=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed.csv').open(newline='')));assert rows[0]['review_note']=="'"+r['reviews'][0]['reviewNote'];assert '\n"quoted", verify' in rows[0]['review_note'];assert r['reviews'][0]['reviewNote'] in (p/'export-reviewed.md').read_text()
r=json.loads((p/'export-max.json').read_text());rows=list(csv.DictReader((p/'export-max.csv').open(newline='')));assert len(rows)==24==r['total'];assert rows[-1]['review_note']=='last row\nkept'
json.dump({'fixtures':checked,'independentPythonCSVParser':True,'multilineFormulaEscaping':True,'maxRecordsPreserved':24},open('artifact-validation.json','w'),indent=2);print('PASS artifact independent parse and preservation')
