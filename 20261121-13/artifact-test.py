import json,csv,io
from pathlib import Path
for i in range(2):
 r=json.load(open(f'export-fixture{i}.json'));rows=list(csv.DictReader(open(f'export-fixture{i}-audit-csv.csv',newline='')))
 assert len(rows)==6 and {x['left_id'] for x in rows}=={x['id'] for x in r['originalInput']['left']}
 assert {x['right_id'] for x in rows}=={x['id'] for x in r['originalInput']['right']}
 for a,b in zip(rows,r['reviews']):
  assert a['left_source']==b['text'] and a['reviewed_left_outcome']==b['leftOutcome']
 assert sum(r['stats'][x] for x in ['pp','pf','fp','ff'])==6
r=json.load(open('export-reviewed.json'));rows=list(csv.DictReader(open('export-reviewed-audit.csv',newline='')));assert rows[0]['review_note']=='\'=SUM(1,2)\n"owner", recheck';assert r['reviews'][0]['note']=='=SUM(1,2)\n"owner", recheck';assert rows[0]['reviewed_left_outcome']=='fail';assert r['originalInput']['left'][0]['outcome']=='pass'
r=json.load(open('export-unmatched.json'));rows=list(csv.DictReader(open('export-unmatched-audit.csv',newline='')));assert len(rows)==7;assert len([x for x in rows if x['right_id']])==6;assert len([x for x in rows if x['left_id']])==6
r=json.load(open('export-max.json'));assert len(r['originalInput']['left'])==12 and len(r['originalInput']['right'])==12 and len(r['reviews'])==12
Path('artifact-validation.json').write_text(json.dumps({'actualBrowserDownloadsParsed':True,'allOriginalIDsConserved':True,'quotedCommaAndNewlinePreserved':True,'formulaLikeCSVStringEscaped':True,'reviewedOutcomesReflected':True,'originalsUnchanged':True,'maximumAuditRestorable':True},indent=2));print('PASS downloaded JSON / independent Python CSV parser / original conservation')
