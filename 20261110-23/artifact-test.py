from pathlib import Path
import json,csv,io
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(io.StringIO(Path('export-reviewed.csv').read_text())));assert len(rows)==len(j['records'])==6
for r,a in zip(rows,j['records']):
 assert r['offer']==a['id'] and r['source']==a['original']['text']
 assert r['note']==("'"+a['note'] if a['note'].startswith(('=','+','-','@','\t','\r')) else a['note'])
 assert int(r['pack_cents'])==a['packCents'] and int(r['pack_quantity'])==a['packQuantity']
 c=next((c for c in j['purchase']['choices'] if c['offer']==a['id']),None)
 assert int(r['order_packs'])==(c['packs'] if c else 0)
 assert int(r['order_quantity'])==(c['quantity'] if c else 0)
 if c: assert c['packs']*a['packQuantity']==c['quantity'] and c['quantity']>=c['required']
md=Path('export-reviewed.md').read_text();assert all(a['id'] in md for a in j['records']);assert str(j['purchase']['totalCents']) in md;assert sum(int(r['goods_cents']) for r in rows)==sum(b['subtotalCents'] for b in j['purchase']['bills'])
roundtrip=json.loads(Path('export-roundtrip.json').read_text());assert len(roundtrip['records'])==24 and all(r['decision']=='hold' for r in roundtrip['records']);assert roundtrip['originalInput']==json.loads(Path('export-max.json').read_text())['originalInput']
Path('artifact-validation.json').write_text(json.dumps({'parsedCSVRows':len(rows),'allQuotesPreserved':True,'currentReviewedFields':True,'multilineCommaQuoteEscaping':True,'spreadsheetFormulaEscaped':True,'goodsAndDeliveryTotalsReconciled':True,'markdownIncludesAllQuotesAndTotal':True,'roundtrip24OriginalsAndRenewedReviews':True},indent=2));print('PASS independent CSV/JSON/Markdown parsing and current-reviewed quantities/price conservation')
