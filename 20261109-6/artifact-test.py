import csv,json
from pathlib import Path
original=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(original['needs'])
for r,c in zip(rows,original['needs']):
 for field,k in [('id','id'),('source','text'),('aiProposal','proposed'),('reviewedPermission','permission'),('decision','decision'),('note','note')]:
  text=c[k];expected="'"+text if text and text[:1] in '=+-@\t\r' else text
  assert r[field]==expected,(field,r[field],expected)
 assert float(r['topSimilarity'])==c['candidates'][0]['score']
assert rows[0]['note'].startswith("'=1+1\n")
assert original['bundle']['roles']==['editor'] and rows[2]['decision']=='hold'
Path('artifact-validation.json').write_text(json.dumps({'rows':len(rows),'allSourcesMappingsNotesPreserved':True,'multilineQuotesCommaEmojiAndFormulaEscaping':True,'heldRowPreserved':True},indent=2))
print('PASS independent Python CSV parse; all source, reviewed, held and escaped fields survive')
