import csv,json,sys
from pathlib import Path
from html.parser import HTMLParser
prefix=sys.argv[1] if len(sys.argv)>1 else ''
class Table(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.cells=[];self.current=None;self.scripts=0;self.rows=0
 def handle_starttag(self,tag,attrs):
  if tag=='script':self.scripts+=1
  if tag=='tr':self.rows+=1
  if tag in ['td','th']:self.current={'tag':tag,'attrs':dict(attrs),'text':''}
 def handle_data(self,text):
  if self.current is not None:self.current['text']+=text
 def handle_endtag(self,tag):
  if tag in ['td','th']:self.cells.append(self.current);self.current=None
checks=[]
for name in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(prefix+'export-'+name+'.json').read_text());rows=list(csv.DictReader(Path(prefix+'export-'+name+'.csv').open(newline='')))
 assert len(rows)==len(r['cells'])
 for cell,row in zip(r['cells'],rows):
  v=cell['review'];assert row['id']==("'" if v['id'][0:1] in '=+-@\t\r' else '')+v['id']
  for k in ['text','note']:
   expected=v[k];assert row[k]==("'" if expected[0:1] and expected[0] in '=+-@\t\r' else '')+expected
  assert row['row']==v['row'];assert row['context']==cell['source']['context']
 parser=Table();parser.feed(Path(prefix+'export-'+name+'.html').read_text());assert parser.scripts==0;assert parser.rows==len(r['originalInput']['rows']);assert len(parser.cells)==len(r['cells'])
 actual={c['attrs']['data-cell-id']:c for c in parser.cells};grid=[[None]*r['originalInput']['columns'] for _ in r['originalInput']['rows']]
 for cell in r['placed']:
  c=actual[cell['id']];assert c['text']==cell['text'].replace('\r\n','\n').replace('\r','\n');assert int(c['attrs']['rowspan'])==cell['rowspan'];assert int(c['attrs']['colspan'])==cell['colspan']
  for y in range(cell['rowIndex'],cell['rowIndex']+cell['rowspan']):
   for x in range(cell['column'],cell['column']+cell['colspan']):assert grid[y][x] is None;grid[y][x]=cell['id']
 assert grid==r['grid'];assert all(x is not None for row in grid for x in row);assert r['ready'];assert r['metrics']['placed']==len(r['cells'])
 checks.append({'fixture':name,'allRowsAndReviewedStringsPreserved':True,'htmlParserCells':len(actual),'scriptElements':parser.scripts,'independentGridOccupancy':True})
Path(prefix+'artifact-validation.json').write_text(json.dumps(checks,indent=2));print('PASS independent CSV/HTML parse and occupancy',len(checks))
