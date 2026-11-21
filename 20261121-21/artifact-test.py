import json,csv,io
from pathlib import Path
checks=[]
for tag in ['fixture0','fixture1','reviewed']:
 d=json.loads(Path('export-'+tag+'.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-'+tag+'-audit-csv.csv').read_text())));assert len(rows)==len(d['reviews'])==4
 for a,b in zip(rows,d['reviews']):
  for field,key in [('id','id'),('job','job'),('source_description','description'),('ai_resource','aiResource'),('reviewed_resource','resource'),('allocated','allocated'),('max','max'),('request','request'),('decision','decision'),('note','note')]:
   value=str(b[key]);value="'"+value if value.startswith(('=','+','-','@','\t','\r')) else value;assert a[field]==value,(field,a[field],value)
 plans=list(csv.DictReader(io.StringIO(Path('export-'+tag+'-plan-csv.csv').read_text())));assert len(plans)==2;assert [p['completion_safe'] for p in plans]==['false','true'];assert d['analysis']['unsafeFits']==1
 assert d['reviews'][0]['description'] in Path('export-'+tag+'-markdown.md').read_text();checks.append(tag)
r=json.loads(Path('export-reviewed.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\n"reviewer", verify equipment'
h=json.loads(Path('export-held.json').read_text());assert h['analysis'] is None and h['held']==1 and len(h['reviews'])==4;assert len(list(csv.DictReader(io.StringIO(Path('export-held-plan.csv').read_text()))))==0
m=json.loads(Path('export-max.json').read_text());assert len(m['reviews'])==32;assert m['analysis']['current']['finalFree']==[8]*8
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVJSONParser':True,'allFieldsSurvived':True,'multilineQuotesCommasFormulaEscaping':True,'exportsParsed':checks,'heldNoInventedPlan':True,'max32RecordsRetained':True},indent=2));print('PASS independent artifact parsing')
