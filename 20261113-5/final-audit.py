from pathlib import Path
import json,re,hashlib
p=Path('.');package=json.loads((p/'package.json').read_text());assert package['scripts']['predeploy']=='npm run build';assert package['scripts']['deploy']=='gh-pages -d dist';assert "base:'/daily-app2/20261113-5/'" in (p/'vite.config.js').read_text();reports=['browser','combined-browser','defensive','stale-result','stale-import','model-cancel','touch','gallery','gallery-ui','combined-gallery','core','artifact','calendar','asset'];missing=[f for f in reports if not (p/(f+'-validation.json')).exists()];assert not missing
files=[f for f in (p/'dist').rglob('*') if f.is_file()];assert files
for f in files:assert f.read_bytes()==(Path('../deploy/20261113-5')/f.relative_to('dist')).read_bytes()
text='\n'.join(f.read_text() for f in files if f.suffix in ['.js','.mjs','.html']);assert 'text/calendar;charset=utf-8' in text;assert not re.search(r'gh[pousr]_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{24,}|AIza[\w-]{30,}',text)
Path('final-audit.json').write_text(json.dumps({'requiredScripts':True,'base':True,'reportCount':len(reports),'finalBundleByteMatchesCombined':True,'calendarMimeCorrect':True,'credentialPatternMatches':0,'files':[{'path':str(f.relative_to('dist')),'sha256':hashlib.sha256(f.read_bytes()).hexdigest()}for f in files]},indent=2));print('PASS final bundle and report audit')
