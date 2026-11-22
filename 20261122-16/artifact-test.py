from pathlib import Path
import json,csv,io,re,subprocess
p=Path.cwd();reports=[];dotParsed=[]
try:
 import pydot
except ImportError:pydot=None
for f in p.glob('export-*-json.json'):
 r=json.loads(f.read_text());assert r['schema']=='state-orchard/1';assert len(r['reviews'])==len(r['originalInput']['transitions']);label=f.name.removeprefix('export-').removesuffix('-json.json')
 audit=p/('export-'+label+'-csv.csv')
 if audit.exists():
  rows=list(csv.DictReader(io.StringIO(audit.read_text())));assert len(rows)==len(r['reviews'])
  for i,row in enumerate(rows):
   review=r['reviews'][i];assert row['reviewed_from']==review['from'];assert row['reviewed_to']==review['to'];assert row['reviewed_event']==review['event']
   note=review['note'];assert row['reviewer_note']==("'"+note if re.match(r'^[=+\-@\t\r]',note)else note)
 if label=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "source", preserved.'
 if r['analysis']['status']=='ready':
  a=r['analysis'];assert sum(len(s['members'])for s in a['states'])==a['reachableStates'];assert len(a['transitions'])==a['minimalStateCount']*len(r['originalInput']['events'])
  machine=p/('export-'+label+'-dot.dot')
  if machine.exists():
   s=machine.read_text();assert s.startswith('digraph reviewed {');assert len(re.findall(r' -> .*\[label=',s))==len(a['transitions'])
   if pydot is not None:
    graphs=pydot.graph_from_dot_data(s);assert len(graphs)==1;dotParsed.append({'file':machine.name,'edges':len(graphs[0].get_edges())})
   # Use actual Graphviz renderer when installed.
   if Path('/opt/homebrew/bin/dot').exists():subprocess.run(['/opt/homebrew/bin/dot','-Tsvg',str(machine),'-o','/tmp/state-orchard-roundtrip.svg'],check=True)
  tests=p/('export-'+label+'-plan-csv.csv')
  if tests.exists():
   rows=list(csv.DictReader(io.StringIO(tests.read_text())));assert len(rows)==len(a['tests'])
   for x,t in zip(rows,a['tests']):assert json.loads(x['shortest_events_json'])==t['events']
 reports.append({'file':f.name,'sourceRows':len(r['originalInput']['transitions']),'reviewRows':len(r['reviews']),'status':r['analysis']['status'],'currentReviewedLinksAndNotesPreserved':True})
assert len(reports)>=7
Path('artifact-validation.json').write_text(json.dumps({'artifacts':reports,'independentCsvJsonParsing':True,'independentPydotParse':dotParsed,'formulaGuardAndMultilinePreserved':True,'dotSyntaxParsedByGraphviz':Path('/opt/homebrew/bin/dot').exists()},indent=2));print('PASS independent artifact parsing',len(reports),'audit envelopes')
