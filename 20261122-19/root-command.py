"""Run authorized root npm lifecycle against owned source; restore unrelated working edits."""
from pathlib import Path
import subprocess,sys
root=Path(__file__).resolve().parent.parent;backup={n:(root/n).read_bytes()for n in ['index.html','README.md']}
try:
 for n in backup:(root/n).write_bytes(Path('/tmp/restore-trail-'+n+'-release-source').read_bytes())
 pkg=__import__('json').loads((root/'package.json').read_text());assert pkg['name']=='daily_app2'
 subprocess.run(['npm','run',sys.argv[1]],cwd=root,check=True)
finally:
 for n,b in backup.items():(root/n).write_bytes(b)
