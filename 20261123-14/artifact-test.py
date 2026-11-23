import sys,json,csv,glob,os
sys.path.insert(0,'/tmp/dial-phone-deps')
import phonenumbers as pn
prefix=os.getenv('PREFIX','')
oracles=json.load(open('phone-oracle.json'))
for c in oracles:
 p=pn.parse(c['input'],c['country']);assert pn.is_valid_number(p);assert pn.format_number(p,pn.PhoneNumberFormat.E164)==c['number'];assert p.extension==c['extension'];q=pn.parse(c['uri'],None);assert q.national_number==p.national_number and q.country_code==p.country_code and q.extension==p.extension
files=glob.glob(prefix+'export-*.json');assert len(files)>=7
report=[]
for file in files:
 r=json.load(open(file)); assert r['schema']=='dial-ledger/1'; n=len(r['originalInput']['records']);assert n==len(r['reviews'])==len(r['analysis']['checks']);checks=r['analysis']['checks'];ready=[c for c in checks if c['status']=='ready'];assert len({(c['number'],c['extension'])for c in ready})==len(ready)
 for c in checks:
  if 'number' in c:
   p=pn.parse(c['raw'],c['country']);assert pn.is_valid_number(p);assert pn.format_number(p,pn.PhoneNumberFormat.E164)==c['number'];assert (p.extension or '')==c['extension'];assert pn.region_code_for_number(p)==c['country'];u=pn.parse(c['uri'],None);assert u.national_number==p.national_number and (u.extension or '')==(p.extension or '')
 base=file[:-5]
 if os.path.exists(base+'.csv'):
  rows=list(csv.DictReader(open(base+'.csv',newline='')));assert len(rows)==n
  for row,review,c,original in zip(rows,r['reviews'],checks,r['originalInput']['records']):
   def safe(s):return "'"+s if s and s[0]in'=+-@\t\r'else s
   assert row['record_id']==safe(original['id']);assert row['reviewer_note']==safe(review['note']);assert row['original_phone']==safe(original['value']);assert row['reviewed_phone']==safe(review['value']);assert row['e164']==safe(c.get('number',''))
 if os.path.exists(base+'.release.csv'):
  rows=list(csv.DictReader(open(base+'.release.csv',newline='')));assert len(rows)==len(ready)
  for row,c in zip(rows,ready):assert row=={k:str(v)for k,v in{'record_id':c['id'],'country':c['country'],'e164':c['number'],'extension':c['extension'],'tel_uri':c['uri']}.items()}
 if os.path.exists(base+'.md'):
  md=open(base+'.md').read();embedded=md.split('```json\n\n')[1].split('\n\n```')[0];assert json.loads(embedded)==r
 if file.endswith('reviewed.json'):assert r['reviews'][0]['note']=='=SUM(1,2)\nChecked "source", raw.' and checks[0]['extension']=='007'
 report.append({'file':file,'records':n,'releaseRows':len(ready),'preserved':True})
json.dump({'independentPythonLibphonenumberVersion':pn.__version__,'oracleCases':len(oracles),'files':report,'csvParsedIndependently':True,'extensionsAndTelURIsPreserved':True},open(prefix+'artifact-validation.json','w'),indent=2);print('PASS independent libphonenumber',len(oracles),'oracle cases;',len(files),'artifact sets')
