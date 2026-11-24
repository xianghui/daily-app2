import json,csv,os
from pathlib import Path
from xml.etree import ElementTree as ET
prefix=os.environ.get('PREFIX','')
reports=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text())
 rows=list(csv.DictReader(Path(prefix+'export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(r['originalInput']['records'])==r['metrics']['records']
 for i,row in enumerate(rows):
  def safe(s):return "'"+s if s.startswith(('=','+','-','@','\t','\r')) else s
  assert row['id']==safe(r['checks'][i]['id'])
  assert row['original_fragment']==safe(r['originalInput']['records'][i]['raw'])
  assert row['reviewed_fragment']==safe(r['reviews'][i]['raw'])
  assert row['review_note']==safe(r['reviews'][i]['note'])
  assert row['status']==r['checks'][i]['status']
 f=json.loads(Path(prefix+'export-'+name+'-fixtures.json').read_text())
 assert len(f['cases'])==r['metrics']['ready']
 for case in f['cases']:
  el=ET.fromstring(case['xml'])
  def expanded(x):return '{'+x['namespace']+'}'+x['local'] if x['namespace'] else x['local']
  assert el.tag==expanded(case['element'])
  assert el.attrib=={expanded(x):x['value']for x in case['attributes']}
  assert (el.text or '')==case['text']
  assert len(el)==0
 md=Path(prefix+'export-'+name+'.md').read_text();assert '# Namespace Loom' in md
 reports.append({'fixture':name,'rows':len(rows),'xmlParsedIndependently':len(f['cases']),'losslessAudit':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(reports,indent=2));print('PASS XML/JSON/CSV/Markdown artifacts',reports)
