from pathlib import Path
import csv,json,io
p=Path.cwd();checks=[]
for label in ['fixture0','fixture1','reviewed','max']:
 r=json.loads((p/f'export-{label}-json.json').read_text());d=r['originalInput'];rows=list(csv.DictReader(io.StringIO((p/f'export-{label}-csv.csv').read_text())));assert len(rows)==len(d['records'])==len(r['reviews'])==len(r['analysis']['records']);w=list(csv.DictReader(io.StringIO((p/f'export-{label}-timeline-csv.csv').read_text())));assert len(w)==sum(v['target']=='old'for rec in d['records']for v in rec['revisions']);md=(p/f'export-{label}-markdown.md').read_text()
 # JS pretty JSON uses no ASCII escaping for unicode; locate the complete audit suffix.
 audit=json.loads(md[md.index('{\n  "schema"'):]);assert audit==r
 for i,(row,source,review) in enumerate(zip(rows,d['records'],r['reviews'])):
  rawid=source['id'];assert row['record_id']==("'"+rawid if rawid.startswith(('=','+','-','@','\t','\r')) else rawid);assert json.loads(row['revisions_json'])==source['revisions'];assert row['reviewed_service']==review['resource'];assert row['reviewer_note']==("'"+review['note'] if review['note'].startswith(('=','+','-','@','\t','\r')) else review['note'])
 for row in w:
  x=next(x for x in r['analysis']['records']if row['record_id'].lstrip("'")==x['id']);v=d['records'][next(i for i,x2 in enumerate(d['records'])if x2['id']==x['id'])]['revisions'][int(row['old_revision'])];assert int(row['expiry_bound_seconds'])==int(row['replaced_at_seconds'])+v['ttl'];assert int(row['safe_after_seconds'])==x['safeAfter']
 if label=='reviewed':assert r['reviews'][0]['note']=='=SUM(1,2)\nReviewed "history", preserved.'
 checks.append({'label':label,'records':len(rows),'oldRevisionWitnesses':len(w),'csvJsonMarkdownRoundTrip':True})
held=json.loads((p/'export-held-json.json').read_text());assert len(held['originalInput']['records'])==len(held['reviews'])==3 and held['analysis']['status']=='held'
(p/'artifact-validation.json').write_text(json.dumps({'downloadedArtifacts':checks,'heldOriginalsPreserved':True,'formulaEscapingAndMultilineQuotesPreserved':True},indent=2));print('PASS independently parsed actual downloaded artifacts')
