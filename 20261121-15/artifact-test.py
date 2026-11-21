import csv,json,pathlib
reports=[]
for name in ['fixture0','fixture1','reviewed','held','max']:
 r=json.loads(pathlib.Path('export-'+name+'.json').read_text())
 assert len(r['reviews'])==len(r['originalInput']['reports'])
 assert len(r['plans'])+r['held']==len(r['reviews'])
 lib={h['id']:h for h in r['originalInput']['hypotheses']}; checks={c['id']:j for j,c in enumerate(r['originalInput']['checks'])}
 for p in r['plans']:
  for which in ['optimal','baseline']:
   for hid in p['candidates']:
    t=p[which];cost=0
    while 'check' in t:
     cost+=t['minutes'];t=t['yes' if lib[hid]['outcomes'][checks[t['check']]] else 'no']
    assert hid in t['candidates'];assert cost<=p[which]['cost']+1e-9
   assert p['optimal']['cost']<=p['baseline']['cost']+1e-9
 reports.append({'artifact':name,'rows':len(r['reviews']),'allPathsValid':True})
for i in range(2):
 r=json.loads(pathlib.Path(f'export-fixture{i}.json').read_text());rows=list(csv.DictReader(open(f'export-fixture{i}-audit-csv.csv',newline='')));assert len(rows)==len(r['reviews']);assert [x['original_report']for x in rows]==[x['text']for x in r['reviews']]
rows=list(csv.DictReader(open('export-reviewed-audit.csv',newline='')));r=json.loads(pathlib.Path('export-reviewed.json').read_text());assert rows[0]['note']=="'"+r['reviews'][0]['note'];assert '\n' in rows[0]['note'];assert 'H6'not in rows[0]['reviewed_candidates'];assert r['reviews'][0]['note'] in pathlib.Path('export-reviewed.md').read_text()
pathlib.Path('artifact-validation.json').write_text(json.dumps({'artifacts':reports,'independentCSVParser':True,'multilineQuotesCommas':True,'formulaEscaping':True,'reviewedCandidatesSurvive':True},indent=2));print('PASS artifact independent parsing, path constraints, conservation')
