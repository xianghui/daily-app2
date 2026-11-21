from pathlib import Path
import csv,json
checks=[]
for stem in ['fixture0','fixture1','reviewed','max']:
 jp=Path('export-'+stem+('.json' if stem!='reviewed' else '-json.json'));r=json.loads(jp.read_text())
 for typ in ['audit','join']:
  name='export-'+stem+('-'+typ+'-csv.csv' if stem.startswith('fixture') else '-'+typ+'.csv' if stem=='max' else '-'+typ+'-csv.csv')
  rows=list(csv.reader(Path(name).open(newline='')))
  assert all(len(row)==len(rows[0]) for row in rows),name
  if typ=='join':
   assert len(rows)-1==len(r['analysis']['joined'])
   for line,j in zip(rows[1:],r['analysis']['joined']):
    assert int(line[0])==j['leftRow']
    assert (int(line[1]) if line[1] else None)==j['rightRow']
    vals=j['left']+(j['right'] if j['right'] else [None]*len(r['originalInput']['right']['fields']))
    for text,v in zip(line[2:],vals):
     expected='' if v is None else str(v).lower() if isinstance(v,bool) else str(v)
     if isinstance(v,str) and v and v[0] in '=+-@\t\r':expected="'"+expected
     assert text==expected,(text,expected)
  else:
   src=[row for row in rows[1:] if row[0]=='source'];assert len(src)==sum(len(r['originalInput'][s]['rows']) for s in ['left','right'])
   for row in src:assert json.loads(row[3])==r['originalInput'][row[1]]['rows'][int(row[2])-1]
   rev=[row for row in rows[1:]if row[0]=='field_review'];assert len(rev)==len(r['reviews'])
   for row,v in zip(rev,r['reviews']):
    note=v['note'];expected="'"+note if note and note[0] in '=+-@\t\r' else note;assert row[7]==expected
  checks.append({'file':name,'parsedRows':len(rows)-1})
 assert all(any(j['leftRow']==i+1 for j in r['analysis']['joined'])for i in range(len(r['originalInput']['left']['rows'])))
Path('artifact-validation.json').write_text(json.dumps({'independentPythonCsvParser':True,'sourceRowsAndReviewedNotesPreserved':True,'checks':checks},indent=2));print('PASS actual downloaded artifact roundtrips')
