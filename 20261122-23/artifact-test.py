from pathlib import Path
import json,csv,io
report=[]
guard=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
for label in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(f'export-{label}-json.json').read_text());rs=list(csv.DictReader(io.StringIO(Path(f'export-{label}-csv.csv').read_text())));edges=list(csv.DictReader(io.StringIO(Path(f'export-{label}-edges-csv.csv').read_text())))
 assert len(rs)==len(r['reviews'])==sum(len(t['acquire']) for t in r['originalInput']['traces']);assert len(r['analysis']['traces'])==len(r['originalInput']['traces'])
 for rev,row in zip(r['reviews'],rs):
  assert row['trace_id']==guard(r['originalInput']['traces'][rev['rule']]['id']);assert row['reviewer_note']==guard(rev['note']);assert row['original_note']==guard(rev['text']);assert row['reviewed_lock']==guard(rev['resource']);assert int(row['acquisition_position'])==rev['position']+1
 expected=[(e,w) for e in r['analysis']['edges'] for w in e['witnesses']];assert len(edges)==len(expected)
 for (e,w),out in zip(expected,edges):
  assert out['held_lock']==guard(e['from']);assert out['acquired_lock']==guard(e['to']);assert out['source_trace']==guard(w['trace']);assert int(out['held_position'])==w['fromPosition'];assert int(out['acquired_position'])==w['toPosition']
 assert json.loads(Path(f'export-{label}-markdown.md').read_text().split('## Complete original and review audit\n\n')[1])==r
 report.append({'label':label,'acquisitions':len(rs),'traces':len(r['analysis']['traces']),'edgeWitnesses':len(edges),'losslessAuditAndPositions':True})
assert '\n' in json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent JSON CSV Markdown parsers',report)
