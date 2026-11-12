import csv,json,math
from pathlib import Path
r=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')));bands=list(csv.DictReader(Path('export-bands.csv').open(newline='')))
assert len(rows)==len(r['reviews'])==4
for row,review in zip(rows,r['reviews']):
 assert row['id']==review['id'] and row['original']==review['text'] and row['material']==review['item']
 assert int(row['area_m2'])==review['area']
 assert [int(row[k]) for k in ['alpha_250_milli','alpha_500_milli','alpha_1000_milli']]==review['alphaMilli']
 assert row['decision']==review['decision']
 expected=review['note'];expected="'"+expected if expected and expected[0] in '=+-@\t\r' else expected
 assert row['note']==expected
assert rows[0]['note']=="'=SUM(1,2)\n\"quoted\", note"
assert len(bands)==3
for row,b in zip(bands,r['bandResults']):
 assert row['band']==b['band']
 assert math.isclose(float(row['capacity_limited_seconds']),b['afterSeconds'])
 assert (row['after_pass']=='true')==b['afterPass']
md=Path('export-reviewed.md').read_text();assert '17 m²' in md and f"Minimum {r['requiredPanels']} panels" in md
m=json.loads(Path('export-max.json').read_text());assert len(m['reviews'])==len(m['originalInput']['records'])==24;assert len(list(csv.DictReader(Path('export-max.csv').open(newline=''))))==24
h=json.loads(Path('export-held.json').read_text());assert not h['released'] and h['bandResults']==[] and len(h['reviews'])==4
u=json.loads(Path('export-undo.json').read_text());assert u['released']
Path('artifact-validation.json').write_text(json.dumps({'parsedJSONAuditCSVBandCSVMarkdown':True,'allReviewedFieldsPreserved':True,'multilineFormulaEscaped':True,'heldRecordsPreserved':True,'max24RecordsConserved':True,'undoRestoresRelease':True,'browserOriginalsReimportRenewedApproval':True},indent=2))
print('PASS independent artifact parsers, escaping, reviewed fields, all originals and max batch')
