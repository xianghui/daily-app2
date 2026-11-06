import csv,json
from pathlib import Path
a=json.loads(Path('export-test.json').read_text())
r=list(csv.DictReader(Path('export-test.csv').open(newline='')))
assert len(r)==len(a['records'])==5
for x,y in zip(r,a['records']):
 for k,v in x.items():assert v==str(y[k] if y[k] is not None else ''),(k,v,y[k])
selected=[x for x in a['records'] if x['selected']]
assert sum(x['minutes'] for x in selected)<=a['budget']
assert len({x['group'] for x in selected})==len(selected)
for i,x in enumerate(selected):assert x['startMinute']==(selected[i-1]['endMinute'] if i else 0)
md=Path('export-test.md').read_text()
for x in a['records']:assert x['title'] in md and x['description'] in md
print('JSON/CSV/Markdown round-trip: all 5 proposals, quoted note, parking lot and contiguous budget-valid offsets preserved.')
