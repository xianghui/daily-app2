import csv,io,json,os
from pathlib import Path
prefix=os.environ.get('PREFIX',''); assertions=0;tables=0;cells=0
for suffix in ['fixture0','fixture1','reviewed','max','held','undo','blocked','impact0','impact1']:
 r=json.loads(Path(prefix+'export-'+suffix+'.json').read_text());assertions+=1
 assert len(r['checks'])==len(r['originalInput']['records'])==r['metrics']['records'];assertions+=1
 assert r['metrics']['ready']+r['metrics']['held']+r['metrics']['blocked']==r['metrics']['records'];assertions+=1
 for i,c in enumerate(r['checks']):
  assert c['id']==r['originalInput']['records'][i]['id'];assert c['raw']==r['reviews'][i]['raw'];assertions+=2
  if c['status']=='ready':
   delim=c['target']['delimiter'];allrows=list(csv.reader(io.StringIO(c['raw'],newline=''),delimiter=delim,strict=True));allrows=[row if row else [''] for row in allrows]
   expected=([c['result']['header']] if c['result']['header'] is not None else [])+c['result']['rows'];assert allrows==expected;assertions+=1;cells+=sum(map(len,expected))
   assert all(len(row)==c['target']['columns'] for row in expected);assertions+=1
   lines=c['raw'].replace('\r\n','\n').split('\n');
   if lines[-1]=='':lines.pop()
   baseline=[line.split(delim) for line in lines];diff=sum(1 for i in range(max(len(baseline),len(expected))) if (baseline[i] if i<len(baseline) else None)!=(expected[i] if i<len(expected) else None));assert diff==len(c['events']);assertions+=1
 for ext in ['csv','md']:
  path=Path(prefix+'export-'+suffix+'.'+ext)
  if not path.exists():continue
  if ext=='md':
   s=path.read_text();assert all(json.dumps(c['id'],ensure_ascii=False,separators=(',',':')) in s for c in r['checks']);assertions+=1
  else:
   audit=list(csv.DictReader(io.StringIO(path.read_bytes().decode(),newline='')));assert len(audit)==len(r['checks']);assertions+=1
   def safe(s):return "'"+s if s and s[0] in '=+-@\t\r' else s
   for i,row in enumerate(audit):
    assert row['id']==safe(r['checks'][i]['id']);assert row['original_text']==safe(r['originalInput']['records'][i]['raw']);assert row['reviewed_text']==safe(r['reviews'][i]['raw']);assert row['review_note']==safe(r['reviews'][i]['note']);assertions+=4
 path=Path(prefix+'export-'+suffix+'-tables.json')
 if path.exists():
  out=json.loads(path.read_text());ready=[c for c in r['checks'] if c['status']=='ready'];assert len(out['tables'])==len(ready);assertions+=1
  for table,c in zip(out['tables'],ready):
   assert table['id']==c['id'];assert table['rows']==c['result']['rows'];assert table['header']==c['result']['header'];assertions+=3
   actual=list(csv.reader(io.StringIO(table['canonicalCsv'],newline=''),delimiter=table['contract']['delimiter'],strict=True));expected=([table['header']] if table['header'] is not None else [])+table['rows'];assert actual==expected;assertions+=1;tables+=1
r=json.loads(Path(prefix+'export-reviewed.json').read_text());assert r['reviews'][1]['note']=='=SUM(1,2)\nReviewed "paper", exactly.';assert r['checks'][1]['result']['rows'][-1]==['T03','23.0'];assertions+=2
Path(prefix+'artifact-validation.json').write_text(json.dumps(dict(assertions=assertions,canonicalTablesReopened=tables,cellsVerified=cells,oracle='Python csv.reader strict; reviewed audit fields and baseline counts checked independently'),indent=2))
print('PASS artifacts',assertions,'assertions',tables,'tables',cells,'cells')
