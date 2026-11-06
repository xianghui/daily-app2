import csv,json
from pathlib import Path
for stem in ['export-test','export-quoted']:
    obj=json.loads(Path(stem+'.json').read_text())
    with open(stem+'.csv',newline='') as f: rows=list(csv.DictReader(f))
    assert len(rows)==len(obj['records'])==len(obj['requests'])
    for r,j,o in zip(rows,obj['records'],obj['requests']):
        assert r['id']==j['id']==o['id']
        for field in ['description','note']:
            v=j[field]
            expected="'"+v if v and v[0] in '=+-@\t\r' else v
            assert r[field]==expected,(field,r[field],expected)
        assert int(r['requested'])==o['quantity']==int(r['reuse'])+int(r['buy'])
        assert r['stock_id']==j['stockId']
    for s in obj['stock']:
        assert s['quantity']==s['used']+s['remaining']
        assert s['remaining']>=0
        assert s['used']==sum(r['reuse'] for r in obj['records'] if r['stockId']==s['id'])
    assert obj['schema']=='stock-again/v1'
print('Independent Python CSV/JSON round trips: every request, reviewed note, quoted newline, formula escape, stock allocation and quantity conserved.')
