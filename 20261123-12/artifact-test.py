import csv,json,glob,html,urllib.parse,pathlib
checks=[]
def unguard(x):return x[1:] if x.startswith("'") and len(x)>1 and x[1] in '=+-@\t\r' else x
for p in glob.glob('*export-*.json'):
 r=json.load(open(p));a=r['analysis'];assert len(r['originalInput']['records'])==len(r['reviews'])==len(a['checks']);assert a['encoded']+a['held']+a['invalid']==len(r['reviews'])
 for c in a['checks']:
  if c['status']!='encoded':assert c['output'] is None;continue
  v=html.unescape(c['output']) if c['encoder']=='html' else json.loads(c['output']) if c['encoder']=='json' else urllib.parse.unquote(c['output'])
  assert v==c['value']
 stem=p[:-5];cp=stem+'.csv'
 if pathlib.Path(cp).exists():
  rows=list(csv.DictReader(open(cp,newline='')));assert len(rows)==len(r['reviews'])
  for i,row in enumerate(rows):
   assert unguard(row['record_id'])==r['originalInput']['records'][i]['id'];assert unguard(row['reviewed_value'])==r['reviews'][i]['value'];assert unguard(row['reviewer_note'])==r['reviews'][i]['note'];assert unguard(row['encoded_output'])==(a['checks'][i]['output'] or '')
 rp=stem+'.release.csv'
 if pathlib.Path(rp).exists():
  rows=list(csv.DictReader(open(rp,newline='')));assert len(rows)==a['encoded'];expected=[c for c in a['checks'] if c['status']=='encoded']
  for row,c in zip(rows,expected):assert unguard(row['encoded_output'])==c['output'];assert unguard(row['record_id'])==c['id']
 mp=stem+'.md'
 if pathlib.Path(mp).exists():assert json.dumps(r['originalInput']['title'])[1:-1] in open(mp).read()
 checks.append({'artifact':p,'records':len(r['reviews']),'encoded':a['encoded'],'held':a['held'],'invalid':a['invalid'],'independentDecoders':True})
assert checks
json.dump(checks,open('artifact-validation.json','w'),indent=2);print('PASS independent JSON/CSV/HTML/URL/Markdown artifacts:',len(checks))
