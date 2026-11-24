import json,csv,os,re
from pathlib import Path
from email.message import Message
prefix=os.environ.get('PREFIX','');count=0
for name in ['fixture0','fixture1','reviewed','max']:
 p=Path(prefix+'export-'+name);d=json.loads(p.with_suffix('.json').read_text());rows=list(csv.DictReader(p.with_suffix('.csv').open(newline='')));release=json.loads(Path(str(p)+'.release.json').read_text());assert len(rows)==len(d['originalInput']['records'])==len(d['checks']);assert len(release['cases'])==d['metrics']['ready'];assert len({r['id'] for r in d['originalInput']['records']})==len(rows)
 for i,row in enumerate(rows):
  c=d['checks'][i];source=d['originalInput']['records'][i];review=d['reviews'][i]
  protect=lambda s: "'"+s if s and s[0] in '=+-@\t\r' else s
  for col,val in [('id',source['id']),('source_context',source['context']),('original_case',source['raw']),('reviewed_case',review['raw']),('review_note',review['note'])]:assert row[col]==protect(val);count+=1
  if c['status']=='ready':
   # Independent standard-library RFC2231/8187 parameter parser; isolate extended value to avoid fallback precedence.
   m=Message();m['Content-Disposition']=c['selected']+'; '+c['header'].split('; ',2)[2];assert m.get_filename()==c['filename'],(m.get_filename(),c['filename'])
   m=Message();m['Content-Disposition']=c['header'].split('; filename*=',1)[0];assert m.get_filename()==c['fallback']
   assert row['header']==protect(c['header']);count+=3
 if name=='reviewed':assert '\n' in d['reviews'][0]['note'];assert d['reviews'][0]['note'].startswith('=SUM');count+=2
 assert 'Computed counts:' in p.with_suffix('.md').read_text()
Path(prefix+'artifact-validation.json').write_text(json.dumps({'assertions':count,'independentPythonCSVJSONAndEmailParameterParsing':True,'allRowsPreserved':True}));print('PASS artifacts',count)
