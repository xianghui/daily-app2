import csv,json
from pathlib import Path
reports=[]
for label in ['fixture0','fixture1']:
 r=json.loads(Path('export-'+label+'.json').read_text()); audit=list(csv.DictReader(Path('export-'+label+'-audit-csv.csv').open(newline='')));plan=list(csv.DictReader(Path('export-'+label+'-plan-csv.csv').open(newline='')))
 assert len(audit)==r['total'];assert {x['id'] for x in audit}=={x['id'] for x in r['originalInput']['paths']};assert {x['id'] for x in plan}==set(r['optimal']['selected']);assert sum(int(x['estimated_work_minutes'])for x in plan)==r['optimal']['minutes']
 for original,row in zip(r['originalInput']['paths'],audit):assert row['original_from']==original['from'] and row['original_to']==original['to']
 reports.append({'label':label,'allSourcePaths':len(audit),'selectedPaths':len(plan),'sumMinutes':r['optimal']['minutes']})
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed-audit.csv').open(newline='')));assert rows[0]['note']=="'"+r['reviews'][0]['note'];assert r['reviews'][0]['minutes']==2;assert '"owner", recheck' in Path('export-reviewed.md').read_text();plan=list(csv.DictReader(Path('export-reviewed-plan.csv').open(newline='')));assert any(x['id']=='p0' and x['estimated_work_minutes']=='2'for x in plan)
m=json.loads(Path('export-max.json').read_text());assert len(m['reviews'])==36 and len(m['originalInput']['paths'])==36
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCSVParser':True,'fixtures':reports,'multilineQuotedFormulaEscaped':True,'currentEditedMinutes':True,'maximumAuditConservesAll36Paths':True},indent=2));print('PASS actual downloaded CSV/JSON/Markdown artifacts parsed and current edits retained')
