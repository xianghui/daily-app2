import json,csv,io,pathlib
checked=[]
for name in ['fixture0','fixture1','reviewed','max']:
 p=pathlib.Path('export-'+name+'.json');r=json.loads(p.read_text());rows=list(csv.DictReader(io.StringIO(pathlib.Path('export-'+name+'.csv').read_text())));assert len(rows)==r['total']
 for i,(j,c) in enumerate(zip(r['reviews'],rows)):
  assert c['id']==j['id'];assert c['source_text']==r['originalInput']['records'][i]['text'];assert c['decision']==j['decision'];assert c['profile']==j['item'];assert int(c['watts'])==j['watts'];assert int(c['hours'])==j['hours']
  note=j['reviewNote'];assert c['review_note']==("'"+note if note.startswith(('=','+','-','@','\t','\r')) else note)
  s=next((s for s in r['optimal']['slots'] if s['id']==j['id']),None)
  assert c['start']==(str(s['start']) if s else '')
 if name=='reviewed':assert '\n"quoted", discuss' in r['reviews'][0]['reviewNote'];assert r['reviews'][0]['reviewNote'] in pathlib.Path('export-reviewed.md').read_text()
 checked.append(name)
json.dump({'independentPythonJSONAndCSVParsers':True,'fixtures':checked,'noLostRows':True,'reviewedMultilineAndFormulaEscaping':True,'scheduleFieldsMatchAppliedSnapshot':True},open('artifact-validation.json','w'),indent=2)
print('PASS downloaded JSON/CSV/Markdown reopened; every review/original/schedule retained')
