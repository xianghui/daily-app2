from pathlib import Path
import csv,json,io,math
results=[]
for label in ['fixture0','fixture1']:
 r=json.loads(Path('export-'+label+'.json').read_text());a=r['analysis'];reviews=r['reviews']
 rows=list(csv.DictReader(io.StringIO(Path('export-'+label+'-audit-csv.csv').read_text())));assert len(rows)==len(reviews)
 for row,source,review in zip(rows,r['originalInput']['blocks'],reviews):
  assert row['source_description']==source['description'];assert int(row['original_weight'])==source['weight'];assert int(row['reviewed_weight'])==review['weight'];assert row['reviewed_group']==review['group']
 ps=list(csv.DictReader(io.StringIO(Path('export-'+label+'-power-csv.csv').read_text())));assert len(ps)==len(r['originalInput']['groups']);assert sum(int(x['weight'])for x in ps)==a['totalWeight'];assert math.isclose(sum(float(x['normalized_banzhaf'])for x in ps),1)
 cs=list(csv.DictReader(io.StringIO(Path('export-'+label+'-coalition-csv.csv').read_text())));assert len(cs)==2**len(ps);assert len(set(x['mask']for x in cs))==len(cs)
 for x,y in zip(cs,a['coalitions']):assert x['members']==';'.join(y['members'])and int(x['weight'])==y['weight']and(x['winning']=='true')==y['winning']
 results.append({'fixture':label,'allSourceRecords':len(rows),'groups':len(ps),'coalitions':len(cs)})
r=json.loads(Path('export-reviewed.json').read_text());note='=SUM(1,2)\n"reviewer", verify mandate';assert r['reviews'][0]['note']==note
rows=list(csv.DictReader(io.StringIO(Path('export-reviewed-audit-csv.csv').read_text())));assert rows[0]['note']=="'"+note;assert note in Path('export-reviewed-markdown.md').read_text()
held=json.loads(Path('export-held.json').read_text());assert held['analysis'] is None and len(held['reviews'])==4;assert list(csv.DictReader(io.StringIO(Path('export-held-power.csv').read_text())))==[]
m=json.loads(Path('export-max.json').read_text());assert len(m['reviews'])==32 and len(m['analysis']['coalitions'])==256
Path('artifact-validation.json').write_text(json.dumps({'fixtures':results,'multilineQuotedFormulaTextPreservedAndEscaped':True,'heldPowerEmpty':True,'maximumRowsConserved':32},indent=2));print('PASS independently parsed actual browser downloads')
