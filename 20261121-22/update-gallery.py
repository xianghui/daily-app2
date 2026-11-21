from pathlib import Path
import json
p=Path(__file__).resolve().parent;root=p.parent
s=(root/'index.html').read_text()
entry='  {folder:"20261121-22",name:"Lumen Terrace",area:"ai-utility",desc:"Match rough fixture offers to photometric profiles with real local MiniLM inference. Review ratings and availability, compare exact minimum-cost mixed lighting plans under hard watt limits with greedy choices, and export complete JSON/CSV/Markdown without uploads or purchases."},'
assert 'folder:"20261121-22"' not in s
s=s.replace('const APPS=[','const APPS=[\n'+entry,1)
before='Practical AI utilities · Local inference, reviewable decisions & useful exports · Earlier maker apps preserved'
after='Practical AI workflow utilities · Local models, human review & usable exports · Earlier maker apps preserved'
assert before in s
s=s.replace(before,after)
(p/'tagline-change.json').write_text(json.dumps({'before':before,'after':after}))
(root/'index.html').write_text(s)
add='\n\n## Lumen Terrace — 20261121-22\n\nLocal MiniLM offer-to-photometric-profile matching and exact minimum-cost heterogeneous fixture mixes under maintained-light, rated-watt and stock constraints. Unlike Lumen Ledger’s identical-fixture shortfall audit, this worksheet chooses among competing fixture offers; the synthetic workshop has a feasible 160 W mix where lumen-per-cent greedy exhausts its watt allowance below target. Six simple semantic matches passed, but a negated-offer probe failed: mandatory review remains essential. Fresh-worker offline inference in an open warmed page, reviewed artifact roundtrips and responsive production UI were tested. Reuses immutable 20261115-6 worker/factory and 20261107-2 WASM; preserve those assets. Preliminary average-light estimates are not photometric or electrical design certification. See [workflow](20261121-22/README.md) and [observed validation](20261121-22/VALIDATION.md).\n'
(p/'root-readme-addition.txt').write_text(add)
(root/'README.md').write_text((root/'README.md').read_text()+add)
for f in ['stage-own-changes.py','gallery-ui-test.cjs','serve-assembled.py']:
 t=(root/'20261121-21'/f).read_text().replace('20261121-21','20261121-22').replace('Reserve Passage','Lumen Terrace').replace('Array(777)','Array(778)').replace('7220','7222')
 (p/f).write_text(t)
