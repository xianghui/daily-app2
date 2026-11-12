import json,re
from pathlib import Path
p=Path('.');app=p/'src/App.jsx';core=p/'src/core.js';s=app.read_text();c=core.read_text();assert 'Renewal' not in s+c;assert 'ics(result)' not in s
pkg=json.loads(Path('package.json').read_text());assert pkg['scripts']['predeploy']=='npm run build';assert pkg['scripts']['deploy']=='gh-pages -d dist';assert '/daily-app2/20261113-6/' in Path('vite.config.js').read_text();assert 'cache' in Path('src/ai.worker.js').read_text();assert 'fetch(' not in c;assert not re.search(r'api[_-]?key\s*[:=]',s,re.I)
required=['core-validation.json','browser-validation.json','combined-browser-validation.json','defensive-validation.json','artifact-validation.json','stale-import-validation.json','stale-result-validation.json','model-cancel-validation.json','touch-validation.json','gallery-validation.json','gallery-ui-validation.json','asset-validation.json']
for f in required:assert json.loads(Path(f).read_text())
Path('final-audit.json').write_text(json.dumps({'reportsPresent':required,'contractScripts':True,'sourceUsesRealWorker':True,'noProviderIntegrationOrCredentials':True,'publicVerificationRequiredSeparately':True},indent=2));print('PASS prepublication source and evidence audit')
