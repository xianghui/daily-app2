import csv,json
from pathlib import Path
checks=[]
for n in ['fixture0','fixture1','reviewed','held','max','repaired','limit']:
 p=Path('export-'+n+'-json.json');r=json.loads(p.read_text());assert r['schema']=='lookup-loom/1';assert len(r['reviews'])==len(r['originalInput']['determinants'])+len(r['originalInput']['dependents']);a=r['analysis'];cols=[c['id']for c in r['originalInput']['columns']]
 if a['status']=='ready':
  lookup={tuple(row[:len(a['keys'])]):row[len(a['keys']):]for row in a['lookup']['rows']};assert len(lookup)==len(a['lookup']['rows']);back=[]
  for row in a['remainder']['rows']:
   obj=dict(zip(a['remainder']['columns'],row));obj.update(zip(a['values'],lookup[tuple(obj[k]for k in a['keys'])]));back.append([obj[k]for k in cols])
  assert back==r['originalInput']['rows'];assert a['dependentCellsAvoided']==(len(back)-len(lookup))*len(a['values'])
 f=Path('export-'+n+'-csv.csv')
 if f.exists():
  table=list(csv.reader(f.open(newline='')));assert len(table)==len(r['originalInput']['rows'])+1
  for i,row in enumerate(table[1:]):
   assert row[0]==str(i)
   for actual,original in zip(row[1:-1],r['originalInput']['rows'][i]):assert actual==("'"+original if original.startswith(('=','+','-','@','\t','\r'))else original)
 for key in ['lookup','remainder']:
  f=Path('export-'+n+'-'+key+'-csv.csv')
  if f.exists():
   t=list(csv.reader(f.open(newline='')));assert t[0]==a[key]['columns'];expected=[["'"+v if v.startswith(('=','+','-','@','\t','\r'))else v for v in row]for row in a[key]['rows']];assert t[1:]==expected
 checks.append({'artifact':n,'sourceRows':len(r['originalInput']['rows']),'status':a['status'],'exactJSONRejoin':a['status']=='ready'})
r=json.loads(Path('export-reviewed-json.json').read_text());assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
assert 'preserved.'in Path('export-reviewed-markdown.md').read_text()
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'reviewedMultilineNotePreserved':True,'independentPythonCSVParser':True,'formulaSanitizationVerified':True},indent=2));print('PASS artifact parse, lossless rejoin, all rows, notes and CSV escaping')
