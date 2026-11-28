import json,csv,sys,xml.etree.ElementTree as E,math
from pathlib import Path
prefix=sys.argv[1] if len(sys.argv)>1 else 'local-'
report=[]
for name in ['fixture0','fixture1','reviewed','max','capacity-blocked']:
 p=Path(prefix+name+'.json');d=json.loads(p.read_text());rs=d['review'];assert len(rs)==len(d['source']['records']);assert [r['id']for r in rs]==[r['id']for r in d['source']['records']]
 cs=list(csv.DictReader(open(prefix+name+'.csv',newline='')));assert len(cs)==len(rs)
 def safe(v):return "'"+v if v and v[0]in '=+-@\t\r\n' else v
 for row,r,orig in zip(cs,rs,d['source']['records']):
  assert row['id']==r['id'];assert row['reviewedLabel']==safe(r['label']);assert row['sourceNote']==safe(orig['note']);assert row['reviewerNote']==safe(r['reviewerNote'])
 if d['result']['ready']:
  root=E.parse(prefix+name+'.svg').getroot();ns={'s':'http://www.w3.org/2000/svg'};groups=root.findall('s:g',ns);assert len(groups)==d['result']['approved'];assert {g.attrib['data-record']for g in groups}=={r['id']for r in rs if r['decision']=='approve'}
  byid={r['id']:r for r in rs};ps=d['result']['placements'];canvas=d['source']['canvas'];last=None;cost=0;absSum=0;naive=[]
  for g,p in zip(groups,ps):
   r=byid[p['id']];assert g.find('s:title',ns).text==r['label'];assert ''.join(t.text or '' for t in g.findall('s:text/s:tspan',ns))==r['label'].replace('\n','');rect=g.find('s:rect',ns);y=float(rect.attrib['y']);h=float(rect.attrib['height']);assert y>=20-1e-7 and y+h<=canvas['height']-20+1e-7
   if last:assert y>=last[0]+last[1]+canvas['gap']-1e-7
   last=(y,h);anchor=next(x for x in d['source']['setups']if x['id']==r['setupId']);shift=y+h/2-anchor['y'];cost+=r['weight']*shift**2;absSum+=abs(shift);ny=max(20,min(canvas['height']-20-h,anchor['y']-h/2));naive.append((ny,h))
  conflicts=sum(max(a[0],b[0])<min(a[0]+a[1],b[0]+b[1])+canvas['gap'] for i,a in enumerate(naive)for b in naive[i+1:]);assert conflicts==d['result']['baseline']['gapConflicts'];assert math.isclose(cost,d['result']['weightedSquaredShift'],abs_tol=1e-6);assert math.isclose(absSum/len(ps),d['result']['meanAbsoluteShift'],abs_tol=1e-6)
 else:
  assert not d['result']['placements'];assert all(not row['labelX']and not row['labelY']for row in cs)
 report.append({'artifact':name,'allRows':len(rs),'ready':d['result']['ready'],'csvPreserved':True,'svgValidated':d['result']['ready'],'metricsIndependentlyRecomputed':d['result']['ready']})
review=json.load(open(prefix+'reviewed.json'));assert '\n' in review['review'][0]['label'];assert review['review'][0]['reviewerNote'].startswith('=SUM');hold=json.load(open(prefix+'hold.json'));assert len(hold['review'])==4 and hold['result']['approved']==3;assert len(E.parse(prefix+'hold.svg').getroot().findall('{http://www.w3.org/2000/svg}g'))==3
Path(prefix+'artifact-validation.json').write_text(json.dumps(report,indent=2));print('PASS independent CSV/XML, all records and geometry metrics',len(report))
