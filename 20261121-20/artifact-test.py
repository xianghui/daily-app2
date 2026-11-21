import csv,json,io,math
from pathlib import Path
reports=[]
for label in ['fixture0','fixture1','reviewed']:
 r=json.loads(Path('export-'+label+'.json').read_text()); rows=list(csv.DictReader(io.StringIO(Path('export-'+label+'-audit-csv.csv').read_text()))); a=r['analysis'];assert len(rows)==len(r['reviews']);assert [x['id']for x in rows]==[x['id']for x in r['reviews']]
 for row,g in zip(rows,r['reviews']):
  assert row['source_description']==g['description'];assert row['reviewed_profile']==g['profile'];assert float(row['attendance_assumption'])==g['probability'];assert row['note']==("'"+g['note'] if g['note'].startswith(('=','+','-','@','\t','\r')) else g['note'])
 dist=list(csv.DictReader(io.StringIO(Path('export-'+label+'-distribution-csv.csv').read_text())));assert len(dist)==len(a['chosen']['pmf']);assert [float(x['scenario_probability'])for x in dist]==a['chosen']['pmf'];assert math.isclose(sum(float(x['scenario_probability'])for x in dist),1);assert all((x['exceeds_capacity']=='true')==(int(x['attendees'])>a['capacity'])for x in dist)
 prefixes=list(csv.DictReader(io.StringIO(Path('export-'+label+'-prefix-csv.csv').read_text())));assert len(prefixes)==a['waitlisted']+1
 for x,v in zip(prefixes,a['prefixes']):assert int(x['waitlist_prefix'])==v['added'] and x['reservation_ids']==';'.join(v['ids']) and float(x['overflow_probability'])==v['overflow']
 md=Path('export-'+label+'-markdown.md').read_text();assert all(g['id']in md and g['description']in md for g in r['reviews'])
 if label=='reviewed':assert '=SUM(1,2)\n"reviewer", verify channel'==r['reviews'][0]['note']
 reports.append({'artifactSet':label,'records':len(rows),'pmfRows':len(dist),'prefixRows':len(prefixes),'allFieldsAndMultilineNotesPreserved':True})
held=json.loads(Path('export-held.json').read_text());assert held['analysis'] is None and len(held['reviews'])==4;assert not list(csv.DictReader(io.StringIO(Path('export-held-distribution.csv').read_text())))
maxr=json.loads(Path('export-max.json').read_text());assert len(maxr['originalInput']['guests'])==len(maxr['reviews'])==32
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVJSONParse':reports,'holdsNoPlanRows':True,'max32RecordPreservation':True},indent=2));print('PASS parsed downloaded CSV/JSON/Markdown: all records, probabilities, plan states, newlines, quotes, formula escaping')
