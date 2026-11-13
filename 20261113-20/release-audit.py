from pathlib import Path
import json,subprocess
p=Path('.')
for file in ['browser-validation.json','combined-browser-validation.json','core-validation.json','defensive-validation.json','model-cancel-validation.json','edge-validation.json','artifact-validation.json','asset-validation.json','combined-assembly-validation.json','gallery-validation.json','combined-gallery-validation.json']:
 assert (p/file).is_file(),file
 json.loads((p/file).read_text())
s=(p/'src/App.jsx').read_text();assert 'Load AI & match equipment' in s;assert 'reliability' not in s.lower()
for f in ['src/App.jsx','src/core.js','README.md','VALIDATION.md']:
 t=(p/f).read_text();assert '20261113-19' not in t
subprocess.run(['node','gallery-test.cjs'],check=True)
print('PASS local release audit (public evidence recorded separately)')
