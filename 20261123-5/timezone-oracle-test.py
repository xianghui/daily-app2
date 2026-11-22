import json,datetime,zoneinfo
from pathlib import Path
cases=json.loads(Path('timezone-oracle-input.json').read_text())
for c in cases:
 d=datetime.datetime.fromisoformat(c['local']);z=zoneinfo.ZoneInfo(c['zone']);expected=set()
 for fold in (0,1):
  t=d.replace(tzinfo=z,fold=fold).astimezone(datetime.timezone.utc)
  if t.astimezone(z).replace(tzinfo=None)==d:expected.add(t.isoformat(timespec='milliseconds').replace('+00:00','Z'))
 assert expected==set(x['utc']for x in c['candidates']),c
Path('timezone-oracle-validation.json').write_text(json.dumps({'cases':len(cases),'allCandidateSetsMatchPythonZoneinfo':True},indent=2));print('PASS',len(cases),'independent zoneinfo checks')
