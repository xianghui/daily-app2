import csv,json,xml.etree.ElementTree as ET
from pathlib import Path
j=json.loads(Path('export-reviewed.json').read_text());rows=list(csv.DictReader(Path('export-reviewed.csv').open(newline='')))
assert len(rows)==len(j['records'])==3
for a,b in zip(rows,j['records']):
 assert a['id']==b['id'] and a['source']==b['source'] and a['reviewed_target']==b['target'] and a['decision']==b['decision']
 assert a['note']==("'"+b['note'] if b['note'].startswith(('=','+','-','@','\t','\r')) else b['note'])
ns={'x':'urn:oasis:names:tc:xliff:document:2.0'};tree=ET.parse('export-reviewed.xlf');units=tree.findall('.//x:unit',ns);assert len(units)==len(j['approved'])
for u,r in zip(units,j['approved']):
 assert u.attrib['id']==r['id'] and u.find('.//x:source',ns).text==r['source'] and u.find('.//x:target',ns).text==r['target']
assert not ET.parse('export-allheld.xlf').findall('.//x:unit',ns)
assert json.loads(Path('export-roundtrip.json').read_text())['input']==json.loads(Path('export-max.json').read_text())['input']
Path('artifact-validation.json').write_text(json.dumps({'csvRows':len(rows),'xliffUnits':len(units),'reviewedFieldsPreserved':True,'quotedMultilineAmpersandEscaping':True,'formulaEscaped':True,'allHeldEmptyXliff':True,'jsonRoundtrip':True},indent=2));print('PASS independent CSV XML JSON artifact round trips')
from lxml import etree
class Resolver(etree.Resolver):
 def resolve(self,url,pubid,context):
  if url.endswith('xml.xsd'): return self.resolve_filename('xml.xsd',context)
parser=etree.XMLParser();parser.resolvers.add(Resolver());schema=etree.XMLSchema(etree.parse('xliff_core_2.0.xsd',parser))
for f in ['export-reviewed.xlf','export-allheld.xlf']:
 schema.assertValid(etree.parse(f))
a=json.loads(Path('artifact-validation.json').read_text());a['officialOasisXliff20Xsd']='approved and all-held exports valid';Path('artifact-validation.json').write_text(json.dumps(a,indent=2));print('PASS official OASIS XLIFF 2.0 schema, approved and all-held')
