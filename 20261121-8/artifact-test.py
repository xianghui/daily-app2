from pathlib import Path
import csv,json,math
report=[]
for i in [0,1]:
 r=json.loads(Path(f'export-fixture{i}.json').read_text());audit=list(csv.DictReader(Path(f'export-fixture{i}-audit-csv.csv').open(newline='')));positions=list(csv.DictReader(Path(f'export-fixture{i}-position-csv.csv').open(newline='')))
 assert len(audit)==6 and len(positions)==2
 assert [a['id'] for a in audit]==[s['id'] for s in r['originalInput']['records']]
 for a,s in zip(audit,r['originalInput']['records']):assert a['original_text']==s['text'] and float(a['original_distance'])==s['distance']
 for p,s in zip(positions,r['positions']):
  assert float(p['x'])==s['x'] and float(p['y'])==s['y']
  assert math.isclose(float(p['range_rms']),math.sqrt(sum(e['residual']**2 for e in s['residuals'])/len(s['residuals'])),abs_tol=1e-12)
 report.append({'fixture':i,'originalsPreserved':len(audit),'positionsReopened':len(positions),'rmsIndependentlyRecomputed':True})
r=json.loads(Path('export-reviewed.json').read_text());a=list(csv.DictReader(Path('export-reviewed-audit.csv').open(newline='')));assert a[0]['note']=="'=SUM(1,2)\n\"recheck\", source";assert r['reviews'][0]['note']=='=SUM(1,2)\n"recheck", source';assert a[1]['decision']=='hold';assert r['reviews'][0]['note'] in Path('export-reviewed.md').read_text();assert len(a)==r['total']==6
maximum=json.loads(Path('export-max.json').read_text());assert len(maximum['originalInput']['records'])==len(maximum['reviews'])==48
Path('artifact-validation.json').write_text(json.dumps({'fixtures':report,'multilineQuotesCommaFormulaEscaping':True,'heldRowAndAllOriginalsPreserved':True,'maxAuditRoundTripCount':48},indent=2));print('PASS independent JSON/CSV/Markdown parse and residual recomputation')
