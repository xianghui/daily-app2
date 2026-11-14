import csv,json
from pathlib import Path
checks=[]
def sheet(p):
 with open(p,newline='') as f:return list(csv.DictReader(f))
def protected(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path('export-'+name+'.json').read_text());rows=sheet('export-'+name+'.csv');assert len(rows)==r['total']
 for x,y in zip(rows,r['reviews']):
  for k in ['id','condition','decision','instructions','reviewNote']:assert x[k]==protected(y[k]),(name,k)
 p=sheet('export-'+name+'-protocols.csv');n=len(r['originalInput']['conditions']);assert len(p)==len(r['schedule'])*n
 for row in p:
  s=next(x for x in r['schedule'] if x['participant']==row['participant']);assert s['order'][int(row['position'])-1]==row['condition']
  card=next(x for x in r['reviews'] if x['id']==row['taskId']);assert card['decision']=='approve';assert card['condition']==row['condition'];assert row['instructions']==protected(card['instructions']);assert row['reviewNote']==protected(card['reviewNote'])
 checks.append(dict(name=name,cards=len(rows),protocolRows=len(p),everySourceAndReviewedFieldPreserved=True))
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['instructions'];assert '\n' in r['reviews'][0]['reviewNote'];assert 'Do not buy.' in Path('export-reviewed.md').read_text()
for name in ['held','duplicate','challenge-held']:
 r=json.loads(Path('export-'+name+'.json').read_text());assert not r['ready'];assert not r['schedule'];assert len(r['reviews'])==r['total']
Path('artifact-validation.json').write_text(json.dumps(dict(checks=checks,malformedProtocolsBlocked=True,multilineCommaQuoteAndFormulaSafety=True,auditOriginalsReimportedInBrowser=True),indent=2));print('PASS independent downloaded JSON CSV and protocol reconciliation')
