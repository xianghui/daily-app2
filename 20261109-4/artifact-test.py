from pathlib import Path
import csv,json
j=json.loads(Path('export-reviewed.json').read_text());c=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(c)==len(j['units'])
for r,u in zip(c,j['units']):
 assert r['key']==u['key'] and r['choice']==u['choice']
 for field in ['base','left','right','output']:
  s=u[field] or '';expected="'"+s if s.startswith(('=','+','-','@','\t','\r')) else s
  assert r[field]==expected,(field,r[field],expected)
assert j['output'][1]['text']=='=1+1\nReviewed, "vegetarian" catering'
for f in ['Launch','Community','max','roundtrip','offline','phone','challenge','deletions']:
 a=json.loads(Path('export-'+f+'.json').read_text());d=a['originalInput'];assert len(a['review'])==len(d['left'])+len(d['right']);assert len(a['units'])==len(d['base'])+sum(not r['target'] for r in a['review']);assert len(a['output'])+a['metrics']['deleted']==len(a['units'])
Path('artifact-validation.json').write_text(json.dumps({'independentCSVParse':True,'formulaSafeMultiline':True,'allOriginalBranchesSurvive':True,'allMergeUnitsAccounted':True,'reviewedCustomOutputPreserved':True},indent=2));print('PASS independently parsed exports, exact reviewed values and conservation')
