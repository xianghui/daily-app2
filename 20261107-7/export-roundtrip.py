from pathlib import Path
import json
checks=[]
for p in Path('.').glob('export-*.json'):
 if p.name=='export-roundtrip-validation.json':continue
 a=json.loads(p.read_text());assert a['schema']=='veil-desk/1'
 spans=[]
 for e in a['review']['entities']:
  c=a['chunks'][e['chunk']];assert c['text'][e['start']:e['end']]==e['original']
  assert a['original'][c['offset']:c['offset']+len(c['text'])]==c['text']
  if e['selected']:spans.append((c['offset']+e['start'],c['offset']+e['end'],e['replacement']))
 out=a['original']
 for start,end,replacement in sorted(spans,reverse=True):out=out[:start]+replacement+out[end:]
 assert out==a['redacted'];assert a['metrics']['selected']==len(spans);assert a['metrics']['excerpts']==len(a['chunks']);assert all(a['review']['reviewed'])
 checks.append({'file':str(p),'excerpts':len(a['chunks']),'selected':len(spans),'losslessOriginals':True})
assert Path('export-redacted.txt').read_text()==json.loads(Path('export-manual.json').read_text())['redacted']
assert Path('export-safety.txt').read_text()==json.loads(Path('export-safety.json').read_text())['redacted']
assert len(checks)>=9
Path('export-roundtrip-validation.json').write_text(json.dumps({'audits':checks,'txtMatchesReviewedJSON':True,'independentPythonReconstruction':True},indent=2))
print('PASS',len(checks),'JSON audits independently reconstructed; downloaded TXTs match reviewed results.')
