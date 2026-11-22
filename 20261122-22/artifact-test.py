from pathlib import Path
import json,csv,io
report=[]
guard=lambda s:"'"+s if s and s[0] in '=+-@\t\r' else s
for label in ['fixture0','fixture1','reviewed','max']:
 r=json.loads(Path(f'export-{label}-json.json').read_text());rs=list(csv.DictReader(io.StringIO(Path(f'export-{label}-csv.csv').read_text())));table=list(csv.DictReader(io.StringIO(Path(f'export-{label}-table-csv.csv').read_text())))
 assert len(rs)==len(r['reviews']);assert len(table)==len(r['analysis']['table']);assert len(r['analysis']['rules'])==len(r['originalInput']['rules'])
 for i,row in enumerate(rs):
  rev=r['reviews'][i];assert row['rule_id']==guard(r['originalInput']['rules'][rev['rule']]['id']);assert row['reviewer_note']==guard(rev['note']);assert row['original_note']==guard(rev['text']);assert row['reviewed_symbol']==guard(rev['resource'])
 for c,out in zip(r['analysis']['table'],table):
  assert out['nonterminal']==guard(c['nonterminal']);assert out['lookahead']==guard(c['lookahead']);assert out['production_ids']==guard(' | '.join(c['rules']));assert out['status']==('CONFLICT' if len(c['rules'])>1 else 'single rule')
 assert json.loads(Path(f'export-{label}-markdown.md').read_text().split('## Complete original and review audit\n\n')[1])==r
 report.append({'label':label,'references':len(rs),'productions':len(r['analysis']['rules']),'cells':len(table),'completeOriginalsAndReviews':True,'allAlternativesConserved':True})
assert '\n' in json.loads(Path('export-reviewed-json.json').read_text())['reviews'][0]['note']
Path('artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independently parsed JSON CSV Markdown table artifacts',report)
