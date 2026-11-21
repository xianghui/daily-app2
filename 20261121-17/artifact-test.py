from pathlib import Path
import csv,json,re,html
checks=[]
def plain(s):
 s=s.replace('<div>','').replace('</div>','').replace('<br>','\n')
 return html.unescape(s)
for prefix in ['fixture0','fixture1','reviewed','repeat','syntax']:
 r=json.loads(Path('export-'+prefix+'.json').read_text())
 tsvpath=Path('export-'+prefix+('-anki-tsv' if prefix.startswith('fixture') else '')+'.tsv')
 lines=tsvpath.read_text().splitlines();assert lines[:4]==['#separator:tab','#html:true','#tags column:3','#columns:Text\tBack Extra\tTags']
 rows=list(csv.reader(lines[4:],delimiter='\t',quoting=csv.QUOTE_NONE));assert len(rows)==len(r['cards'])
 for row,c in zip(rows,r['cards']):
  assert row==[c['text'],c['extra'],c['tags']]
  answertexts=re.findall(r'\{\{c1::(.*?)\}\}',row[0]);assert len(answertexts)==c['maskedOccurrences']
  assert all(plain(x)==c['answer'] for x in answertexts)
  restored=plain(re.sub(r'\{\{c1::(.*?)\}\}',r'\1',row[0]))
  assert restored==r['passages'][c['passage']-1]['text'].replace('\r\n','\n').replace('\r','\n')
  assert not re.search(r'\{\{c[2-9]',row[0]+row[1]);assert '\t' not in row[0]+row[1];assert not re.search(r'<script',row[0]+row[1],re.I)
 if prefix!='repeat':
  csvpath=Path('export-'+prefix+('-audit-csv' if prefix.startswith('fixture') else '')+'.csv')
  with csvpath.open(newline='') as f:a=list(csv.DictReader(f))
  sources=[x for x in a if x['record_type']=='source'];cs=[x for x in a if x['record_type']=='candidate'];assert len(sources)==len(r['passages']);assert len(cs)==len(r['reviews']['rows'])
  for x,c in zip(sources,r['passages']):assert x['source_or_answer']==c['text']
  for x,e in zip(cs,r['reviews']['rows']):
   note=e['note'];expected=("'"+note)if note.startswith(('=','+','-','@','\t','\r')) else note
   assert x['note']==expected and x['source_or_answer']==e['answer'] and x['decision']==e['decision']
 checks.append({'fixture':prefix,'tsvCardsParsed':len(rows),'sourceAndAnswerRoundTrip':True})
r=json.loads(Path('export-max.json').read_text());assert len(r['passages'])==12 and len(r['cards'])==48
r=json.loads(Path('export-zero.json').read_text());assert len(r['cards'])==0 and len(r['passages'])==1
r=json.loads(Path('export-rejected.json').read_text());assert r['metrics']['rejectedSpans']==1 and len(r['reviews']['rows'])==6
Path('artifact-validation.json').write_text(json.dumps({'checks':checks,'maxBatch':True,'zeroEntitySourcePreserved':True,'rejectsPreserved':True,'actualAnkiDesktopImportTested':False},indent=2));print('PASS independent CSV/TSV/JSON reviewed-artifact parsing and cloze reconstruction')
