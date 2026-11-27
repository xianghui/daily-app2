import csv,json,glob
from pathlib import Path
n=0
for file in glob.glob('*fixture*.json')+glob.glob('*reviewed.json')+glob.glob('*max.json')+glob.glob('*stock.json'):
 s=json.load(open(file));base=file[:-5]
 assert s['format']=='gatherfold-v1'
 assert len(s['jobs'])==len(s['source']['records'])==len(s['review'])
 assert [j['id'] for j in s['jobs']]==[j['id'] for j in s['source']['records']]
 for j in s['jobs']:
  pages=[v for sig in j['signatures'] for sh in sig['sheets'] for side in ['front','back'] for v in sh[side] if v is not None]
  assert sorted(pages)==list(range(1,j['pages']+1))
  assert j['requiredSheets']==((j['pages']+3)//4)*j['copies']+j['wasteSheets']
  assert j['sheetsSaved']==j['baselineSheets']-j['requiredSheets']
 if Path(base+'.csv').exists():
  rows=list(csv.DictReader(open(base+'.csv',newline='')));assert len(rows)==len(s['jobs'])
  for row,j,src in zip(rows,s['jobs'],s['source']['records']):
   assert row['id']==j['id'];assert int(row['requiredSheets'])==j['requiredSheets']
   for k,expected in [('originalNote',src['note']),('reviewerNote',j['reviewerNote'])]:
    if expected and expected[0] in '=+-@\t\r':expected="'"+expected
    assert row[k]==expected
 if Path(base+'.press.csv').exists():
  rows=list(csv.DictReader(open(base+'.press.csv',newline='')))
  assert len(rows)==sum(j['sheetsPerCopy'] for j in s['jobs'])
  for j in s['jobs']:
   selected=[r for r in rows if r['jobId']==j['id']];assert len(selected)==j['sheetsPerCopy'];assert all(int(r['copies'])==j['copies'] for r in selected)
   expected=j['reviewerNote'];expected=("'"+expected) if expected and expected[0] in '=+-@\t\r' else expected
   assert all(r['reviewerNote']==expected for r in selected)
   p=[int(r[k]) for r in selected for k in ['frontLeft','frontRight','backLeft','backRight'] if r[k]]
   assert sorted(p)==list(range(1,j['pages']+1))
 if Path(base+'.md').exists():
  text=Path(base+'.md').read_text()
  for j in s['jobs']:assert j['reviewerNote'] in text;assert '## '+j['id'] in text
 n+=1
print('PASS independent Python JSON/CSV/Markdown artifacts',n)
