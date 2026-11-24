import json,fnmatch
from pathlib import Path
cases=json.loads(Path('oracle-cases.json').read_text())
def oracle(policy,agent,path):
 groups=[];g=None;has_rule=False
 for line in policy.splitlines():
  line=line.split('#')[0].strip()
  if not line:continue
  k,v=[s.strip()for s in line.split(':',1)];k=k.lower()
  if k=='user-agent':
   if g is None or has_rule:g={'agents':[],'rules':[]};groups.append(g);has_rule=False
   g['agents'].append(v.lower())
  else:g['rules'].append((k,v));has_rule=True
 strength=lambda g:max([len(a) for a in g['agents']if a!='*'and a in agent.lower()]+[0])
 best=max(map(strength,groups));selected=[g for g in groups if strength(g)==best]if best else[g for g in groups if '*'in g['agents']]
 def match(p):
  if not p:return False
  # Only * is a wildcard. Escape fnmatch's [] and ? syntax.
  q=p[:-1]if p.endswith('$')else p
  q=''.join('[[]'if c=='['else '[?]'if c=='?'else c for c in q)
  return fnmatch.fnmatchcase(path,q)if p.endswith('$')else any(fnmatch.fnmatchcase(path[:i],q)for i in range(len(path)+1))
 found=[(len(v.replace('*','').removesuffix('$')),k=='allow',k)for g in selected for k,v in g['rules']if match(v)]
 return max(found)[2]if found else'allow'
for c in cases:assert c['result']['selected']==oracle(c['policy'],c['agent'],c['path']),c
Path('core-validation.json').write_text(json.dumps({'independentFnmatchPrefixOracleCases':len(cases),'allPassed':True,'note':'Bounded ASCII rules, not general RFC compliance'},indent=2));print('PASS independent oracle',len(cases))
