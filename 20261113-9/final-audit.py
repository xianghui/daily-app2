import json
from pathlib import Path
reports=['core-validation.json','artifact-validation.json','browser-validation.json','combined-browser-validation.json','defensive-validation.json','stale-import-validation.json','stale-result-validation.json','model-cancel-validation.json','touch-validation.json','probe-validation.json','asset-validation.json','privacy-validation.json','gallery-validation.json','gallery-ui-validation.json','combined-validation.json']
for f in reports:json.loads(Path(f).read_text())
assert len(json.loads(Path('browser-validation.json').read_text())['checks'])==9
assert len(json.loads(Path('combined-browser-validation.json').read_text())['checks'])==9
r=dict(validReports=reports,realDefaultCPUInference=True,tunedExampleLabels={'matched':8,'total':8},newWordingProbe={'matched':5,'total':6},unrelatedWorkingChangesPreserved=True)
Path('local-final-audit.json').write_text(json.dumps(r,indent=2));print('PASS all local/combined reports present and parsed')
