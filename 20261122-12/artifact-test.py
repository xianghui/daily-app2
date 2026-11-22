from pathlib import Path
import csv,json,io
report=[]
def safe(v):
 s=str(v).lower()if isinstance(v,bool)else str(v if v is not None else '')
 return "'"+s if s and s[0]in'=+-@\t\r'else s
for jp in Path('.').glob('export-*-json.json'):
 r=json.loads(jp.read_text());assert r['schema']=='rule-lantern/1';src=r['originalInput'];assert len(r['reviews'])==sum(len(x['conditions'])for x in src['rules'])
 prefix=str(jp).removesuffix('-json.json');cp=Path(prefix+'-csv.csv');tp=Path(prefix+'-test-csv.csv');mp=Path(prefix+'-markdown.md')
 if cp.exists():
  rows=list(csv.DictReader(io.StringIO(cp.open(newline='').read())));assert len(rows)==len(r['reviews'])
  for actual,review in zip(rows,r['reviews']):
   rule=src['rules'][review['ruleIndex']];condition=rule['conditions'][review['condition']]
   expected={'rule':rule['id'],'condition':review['condition']+1,'outcome':rule['outcome'],'original_fact':condition['fact'],'original_value':condition['value'],'reviewed_fact':review['fact'],'reviewed_value':review['value'],'decision':review['decision'],'note':review['note']}
   assert actual=={k:safe(v)for k,v in expected.items()},(actual,expected)
 if tp.exists():
  actual=list(csv.DictReader(io.StringIO(tp.open(newline='').read())));assert len(actual)==len(r['analysis']['cases'])==2**len(src['facts'])
  for line,case in zip(actual,r['analysis']['cases']):
   assert line['case']==case['case'] and line['status']==case['kind'];assert json.loads(line['matching_rules_json'])==case['rules'];assert json.loads(line['outcomes_json'])==case['outcomes'];assert line['first_match_outcome']==safe(case['firstOutcome'])
   assert all(line[f['id']]==str(case['facts'][f['id']]).lower()for f in src['facts'])
 if mp.exists():assert json.loads(mp.read_text().split('## Complete original and reviewed audit\n')[1])==r
 report.append({'artifact':str(jp),'conditionRows':len(r['reviews']),'auditCsv':cp.exists(),'testCsv':tp.exists(),'markdownFullAudit':mp.exists()})
assert json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS',len(report),'downloaded audit sets independently parsed')
