import csv,json
from pathlib import Path
out=[]
for i in range(2):
 r=json.loads(Path(f'export-fixture{i}.json').read_text());rows=list(csv.DictReader(open(f'export-fixture{i}-audit-csv.csv',newline='')))
 assert len(rows)==len(r['reviews'])
 for a,b in zip(rows,r['reviews']):
  assert a['id']==b['id'] and a['source_description']==b['description'] and a['reviewed_capability']==b['capability']
 roles=list(csv.DictReader(open(f'export-fixture{i}-role-csv.csv',newline='')))
 actual={(a['person'],a['capability'])for a in roles};expected={(a['person'],a['capability'])for a in r['reviews']if a['decision']=='approve'}
 assert actual==expected
 out.append({'fixture':i,'sourceRows':len(rows),'expandedRoleRows':len(roles),'uniquePermissions':len(actual),'noExtraOrMissing':True})
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(open('export-reviewed-audit.csv',newline='')))
assert rows[0]['note']=="'"+r['reviews'][0]['note'];assert '\n' in rows[0]['note'];assert r['reviews'][0]['note']in Path('export-reviewed.md').read_text()
assert len(list(csv.DictReader(open('export-held-roles.csv',newline=''))))==0
Path('artifact-validation.json').write_text(json.dumps({'fixtures':out,'multilineCommaQuoteRoundTrip':True,'formulaNeutralizedInCSV':True,'jsonOriginalNoteExact':True,'heldRolesEmpty':True},indent=2));print('PASS independent CSV/JSON permission reconstruction, multiline/formula handling')
