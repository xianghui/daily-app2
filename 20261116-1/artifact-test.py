import json,csv,io,math
from pathlib import Path
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+name+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+name+'.csv').read_text()))); assert len(rows)==d['total']==len(d['originalInput']['quotes'])
 for i,(x,y) in enumerate(zip(rows,d['reviews'])):
  assert x['id']==y['id']; assert x['source_from_note']==d['originalInput']['quotes'][i]['fromText'];assert x['source_to_note']==d['originalInput']['quotes'][i]['toText'];assert x['reviewed_from']==y['from'];assert x['reviewed_to']==y['to'];assert float(x['reviewed_net_rate'])==y['rate'];assert x['decision']==y['decision'];note=y['reviewNote'];safe="'"+note if note and note[0] in '=+-@\t\r' else note;assert x['review_note']==safe
 if name=='reviewed': assert rows[0]['review_note']=='\'=SUM(1,2)\n"quoted", verify';assert d['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text()
 if name=='max':assert rows[-1]['review_note']=='last row\nkept';assert len(rows)==24
 checks.append({'artifact':name,'rows':len(rows),'allOriginalsAndCurrentReviewsMatch':True})
Path('artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independently parsed downloaded CSV/JSON, multiline text, escaping and row preservation')
