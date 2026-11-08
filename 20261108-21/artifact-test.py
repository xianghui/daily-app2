from pathlib import Path
import csv,json
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(r['cues'])+len(r['segments'])
for a,b in zip(rows[:len(r['cues'])],r['cues']):assert a['id']==b['id'] and a['source']==b['text'] and a['decision']==b['status']
for a,b in zip(rows[len(r['cues']):],r['segments']):
 assert a['id']==b['id'] and a['source']==b['text'] and a['reviewedCue']==b['cue'] and a['decision']==b['decision']
 assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
b=json.loads(Path('export-boundary.json').read_text());cr=list(csv.DictReader(Path('export-boundary.csv').open(newline='')))
assert cr[len(b['cues'])]['source']=="'"+b['segments'][0]['text']
for name in ['export-Museum.json','export-Software.json','export-max.json','export-roundtrip.json','export-offline.json','export-phone.json']:
 a=json.loads(Path(name).read_text());assert [x['id'] for x in a['segments']]==[x['id'] for x in a['originalInput']['transcript']];assert len(a['cues'])==len(a['originalInput']['script']);idx=[next(i for i,c in enumerate(a['cues']) if c['id']==x['cue']) for x in a['segments'] if x['decision']=='approve' and x['cue']];assert idx==sorted(set(idx))
md=Path('export-reviewed.md').read_text();assert all(s['text'] in md and s['note'] in md for s in r['segments'])
Path('artifact-validation.json').write_text(json.dumps({'allRecordsRetained':True,'reviewedFieldsMatchCSV':True,'quotedMultilineFormulaTextEscaped':True,'jsonReimportOriginalsPreserved':True,'markdownContainsReviewedSourcesAndNotes':True}));print('PASS independent CSV/JSON/Markdown parse and source conservation')
