import subprocess,json,time
for i in range(30):
 p=subprocess.run(['node','publication-verify.cjs'],capture_output=True,text=True)
 r=json.load(open('pages-watch.json'));print(i,r['head'],r['pages']['status'],flush=True)
 if p.returncode==0:break
 time.sleep(12)
else:raise SystemExit('Matching Pages head did not reach built; inspect activity before retry.')
