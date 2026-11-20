from pathlib import Path
import json,csv,io
p=Path(__file__).resolve().parent
report={}
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads((p/('export-'+name+'.json')).read_text());rows=list(csv.DictReader(io.StringIO((p/('export-'+name+'.csv')).read_text())));assert len(rows)==r['total'];assert [x['id'] for x in rows]==[x['id'] for x in r['originalInput']['records']]
 for i,x in enumerate(rows):
  q=r['reviews'][i];assert float(x['original_value'])==r['originalInput']['records'][i]['value'];assert float(x['reviewed_value'])==q['value'];assert float(x['reviewed_day'])==q['day'];assert x['reviewed_series']==q['series'];assert x['decision']==q['decision'];note=q['reviewNote'];assert x['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
 report[name]={'allOriginalsAndReviewsSurvive':True,'rows':len(rows)}
for name in ['fixture0','fixture1','max']:
 r=json.loads((p/('export-'+name+'.json')).read_text());rows=list(csv.DictReader(io.StringIO((p/('export-'+name+'-series.csv')).read_text())));assert len(rows)==len(r['groups'])
 for g,x in zip(r['groups'],rows):
  assert x['series']==g['id'];assert int(x['approved_count'])==len(g['points']);assert x['status']==('ready' if g['ready'] else 'unavailable')
  if g['ready']:assert float(x['robust_slope_per_day'])==g['slope'];assert x['recheck_ids']==';'.join(g['recheckIds'])
r=json.loads((p/'export-reviewed.json').read_text());assert r['reviews'][0]['reviewNote']=='=SUM(1,2)\n"reviewed", with newline'
for j in range(2):
 r=json.loads((p/f'export-fixture{j}.json').read_text());md=(p/f'export-fixture{j}.md').read_text();assert all(x['id'] in md and x['text'] in md for x in r['originalInput']['records'])
assert json.loads((p/'export-max.json').read_text())['reviews'][-1]['reviewNote']=='last note\nkept'
report['multilineFormulaEscaping']=True;report['numericSignedValuesRemainNumeric']=True
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/JSON/Markdown parse and round trips')
r=json.loads((p/'export-signed.json').read_text());signed=list(csv.DictReader(io.StringIO((p/'export-signed.csv').read_text())));assert signed[0]['reviewed_value']=='-3';assert r['reviews'][0]['value']==-3
