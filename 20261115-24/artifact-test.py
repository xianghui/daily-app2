import json,csv,io,pathlib,math
checked=[]
for name in ['fixture0','fixture1','reviewed','max','value-edit']:
 r=json.loads(pathlib.Path('export-'+name+'.json').read_text());rows=list(csv.DictReader(io.StringIO(pathlib.Path('export-'+name+'.csv').read_text())));assert len(rows)==r['total']
 for i,(j,c) in enumerate(zip(r['reviews'],rows)):
  assert c['id']==j['id'];assert c['source_text']==r['originalInput']['records'][i]['text'];assert c['decision']==j['decision'];assert c['stream']==j['item'];assert float(c['value'])==j['value'];assert int(c['sequence'])==j['sequence']
  note=j['reviewNote'];assert c['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
  stream=next(s for s in r['streams'] if s['id']==j['item']);t=next((t for t in stream['points'] if t['id']==j['id']),None)
  assert c['unit']==stream['unit'];assert float(c['reference_mean'])==stream['mean'];assert float(c['reference_sd'])==stream['sd']
  for key,field in [('z','z'),('cusum_plus','plus'),('cusum_minus','minus')]:assert (math.isclose(float(c[key]),t[field],abs_tol=1e-10) if t else c[key]=='')
 if name=='reviewed':assert '\n"quoted", discuss' in r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in pathlib.Path('export-reviewed.md').read_text()
 checked.append(name)
for name in ['held','undo','all-held','challenge-held']:
 r=json.loads(pathlib.Path('export-'+name+'.json').read_text());assert r['total']==len(r['originalInput']['records'])==len(r['reviews']);assert r['approved']==sum(len(s['points']) for s in r['streams'])
json.dump({'independentPythonJSONAndCSVParsers':True,'fixtures':checked,'noLostRows':True,'reviewedMultilineAndFormulaEscaping':True,'signedNumericFieldsPreserved':True,'traceFieldsMatchAppliedSnapshot':True},open('artifact-validation.json','w'),indent=2)
print('PASS downloaded JSON/CSV/Markdown reopened; every original and reviewed trace retained')
