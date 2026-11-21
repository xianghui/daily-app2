import csv,json,pathlib
p=pathlib.Path('.');checks=[]
for i in range(2):
 r=json.loads((p/f'export-fixture{i}.json').read_text());rows=list(csv.DictReader((p/f'export-fixture{i}-audit-csv.csv').open(newline='')))
 assert len(rows)==len(r['reviews'])==8
 for row,review in zip(rows,r['reviews']):
  for a,b in [('id','id'),('source_description','from'),('target_description','to'),('reviewed_source','fromId'),('reviewed_target','toId'),('decision','decision')]:assert row[a]==review[b]
 md=(p/f'export-fixture{i}-markdown.md').read_text();assert all(x['id'] in md for x in r['reviews']);assert all(x['id'] in md for x in r['originalInput']['variables'])
 checks.append(f'fixture {i}: every CSV arrow/source/target and Markdown variable retained')
r=json.loads((p/'export-reviewed.json').read_text());rows=list(csv.DictReader((p/'export-reviewed-audit.csv').open(newline='')));assert rows[0]['review_note']=="'"+r['reviews'][0]['note'];assert '\n"analyst", verify direction' in rows[0]['review_note'];assert r['reviews'][0]['note'] in (p/'export-reviewed.md').read_text();assert r['reviews'][0]['note'].startswith('=SUM');checks.append('multiline formula-looking note lossless in JSON/Markdown, escaped in CSV')
r=json.loads((p/'export-max.json').read_text());assert len(r['reviews'])==len(r['originalInput']['arrows'])==18;assert len(r['originalInput']['variables'])==9;assert r['complete'];checks.append('maximum 9 variables/18 arrows conserved')
r=json.loads((p/'export-held.json').read_text());assert r['analysis'] is None and not r['complete'];assert 'INCOMPLETE DRAFT' in (p/'export-held.dot').read_text();checks.append('held audit complete, DOT explicitly incomplete, no adjustment recommendations')
r=json.loads((p/'export-corrected.json').read_text());rows=list(csv.DictReader((p/'export-corrected.csv').open(newline='')));assert rows[0]['reviewed_source']=='V' and rows[0]['ai_source']=='C';assert r['analysis']['minimalSets']==[];checks.append('corrected endpoint survives independently parsed CSV, original AI suggestion preserved')
(p/'artifact-validation.json').write_text(json.dumps({'checks':checks,'passed':True},indent=2));print('PASS',checks)
