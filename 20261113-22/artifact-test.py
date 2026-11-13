from pathlib import Path
import csv,json
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 d=json.loads(Path('export-'+stem+'.json').read_text());rows=list(csv.DictReader(Path('export-'+stem+'.csv').open(newline='')))
 assert len(rows)==d['total']==len(d['reviews'])
 for i,(r,a) in enumerate(zip(rows,d['reviews'])):
  assert r['id']==a['id'];assert int(r['importance'])==a['importance'];assert int(r['performance'])==a['performance'];assert r['source_topic']==d['originalInput']['records'][i]['note'];assert r['dimension']==a['kind']
  for k,j in [('owner','owner'),('review_note','reviewNote')]:assert r[k]==("'" if a[j].startswith(('=','+','-','@','\t','\r')) else '')+a[j]
 assert sum(x['n'] for x in d['plan']['dimensions'])==d['total'];checks.append({'artifact':stem,'rows':len(rows)})
r=json.loads(Path('export-reviewed.json').read_text());assert '\n' in r['reviews'][0]['owner'];assert '"quoted",' in r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in Path('export-reviewed.md').read_text();assert Path('export-reviewed.md').read_text().count('- [ ]')==r['total']
Path('artifact-validation.json').write_text(json.dumps({'independentCsvJsonParsing':checks,'multilineFormulaTextPreservedAndEscaped':True,'markdownChecklistRecordsPreserved':True}));print('PASS downloaded JSON/CSV/Markdown record conservation, reviewed ratings and quoted multiline escaping')
