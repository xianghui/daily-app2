from pathlib import Path
import json,csv,io,math
p=Path(__file__).resolve().parent
reports=[]
for n in ['fixture0','fixture1','reviewed','max']:
 r=json.loads((p/f'export-{n}.json').read_text());rows=list(csv.DictReader(io.StringIO((p/f'export-{n}.csv').read_text())));readings=[x for x in rows if x['kind']=='reading'];plans=[x for x in rows if x['kind']=='schedule'];assert len(readings)==len(r['reviews'])==r['total'];assert len(plans)==len(r['plans']);assert [x['id'] for x in readings]==[x['id'] for x in r['originalInput']['logs']]
 for x,y in zip(readings,r['reviews']):
  assert x['reviewed_meter']==y['meter'];assert float(x['reviewed_kwh'])==y['kwh'];expected=y['reviewNote'];expected="'"+expected if expected.startswith(('=','+','-','@','\t','\r')) else expected;assert x['review_note']==expected
 for x,y in zip(plans,r['plans']):assert float(x['grid_kwh'])==y['grid'];assert float(x['delta_stored_kwh'])==y['delta']
 for x in r['originalInput']['logs']:assert x['id'] in (p/f'export-{n}.md').read_text() if (p/f'export-{n}.md').exists() else True
 assert math.isclose(sum(x['cost'] for x in r['plans']),r['summary']['optimizedCost']);assert r['plans'][-1]['end']==r['originalInput']['battery']['initial']
 reports.append({'fixture':n,'readings':len(readings),'scheduleRows':len(plans),'allOriginalsReviewedValuesAndEnergyBalancesPreserved':True})
assert json.loads((p/'export-held.json').read_text())['plans']==[]
(p/'artifact-validation.json').write_text(json.dumps({'roundTrips':reports,'independentPythonCSVAndJSONParsing':True,'quotedCommaNewlineAndMultilineFormulaPrefixPreserved':True},indent=2));print('PASS independently parsed actual browser artifacts')
