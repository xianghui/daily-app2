from pathlib import Path
import json
r=[]
for f in ['export-Print-reviewed.json','export-Workshop-reviewed.json']:
 a=json.loads(Path(f).read_text());d=a['originalInput'];hits=sum(any(t['title'].lower() in o['text'].lower() for t in d['tasks']) for o in d['offers']);assert hits==a['metrics']['literalTitleMatches'];assert a['metrics']['combinations']==16
 r.append({'name':d['name'],'literalTitleHits':hits,'sourceRows':len(d['offers']),'combinations':a['metrics']['combinations'],'baselineDays':a['baseline']['days'],'plannedDays':a['expedited']['days'],'extraCents':a['expedited']['costCents']})
Path('metric-validation.json').write_text(json.dumps(r,indent=2));print('PASS independently recomputed displayed metrics')
