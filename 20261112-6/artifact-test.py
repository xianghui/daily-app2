import json,csv,io,pathlib
p=pathlib.Path('.')
a=json.loads((p/'export-reviewed.json').read_text())
r=list(csv.DictReader(io.StringIO((p/'export-reviewed.csv').read_text())))
assert len(r)==len(a['records'])
for x,y in zip(r,a['records']):
 assert x['id']==y['id'] and x['source']==y['text'] and int(x['members'])==y['members'] and x['reviewedChapter']==y['item'] and x['decision']==y['decision']
 expected=y['note'];expected="'"+expected if expected[:1] in ['=','+','-','@','\t','\r'] else expected
 assert x['note']==expected
ch=list(csv.DictReader(io.StringIO((p/'export-chapters.csv').read_text())))
assert sum(int(x['allocatedSeats']) for x in ch)==a['metrics']['seats']
assert sum(int(x['approvedMembers']) for x in ch)==a['metrics']['members']
for x,y in zip(ch,a['chapters']):
 assert x['chapter']==y['id'] and int(x['allocatedSeats'])==y['seats']
m=json.loads((p/'export-max.json').read_text());rows=list(csv.DictReader(io.StringIO((p/'export-max.csv').read_text())))
assert len(rows)==24 and [x['id'] for x in rows]==[x['id'] for x in m['records']]
z=json.loads((p/'export-roundtrip.json').read_text());assert z['originalInput']==m['originalInput'] and z['chapters']==m['chapters']
md=(p/'export-reviewed.md').read_text();assert all(x['id'] in md for x in a['records']);assert '&lt;check&gt;' in md and '\\|' in md and '<br>' in md
report={'independentPythonCsvJsonParsing':True,'reviewedCountsAndAllRecordsRetained':True,'formulaMultilineEscaping':True,'chapterSeatsAndMembersReconciled':True,'maximum24RecordRoundtrip':True,'markdownEscaping':True}
(p/'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS artifacts',report)
