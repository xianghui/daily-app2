import time,json,subprocess,sys
head=subprocess.check_output(['git','ls-remote','origin','refs/heads/gh-pages'],text=True).split()[0]
for i in range(25):
 p=json.loads(subprocess.check_output(['gh','api','repos/xianghui/daily-app2/pages/builds/latest']))
 print(p['status'],p['commit'],flush=True)
 if p['commit']==head and p['status']=='built':sys.exit(0)
 if p['commit']==head and p['status']=='errored':sys.exit(1)
 time.sleep(20)
sys.exit(2)
