# Joint Signal — correlated measurement rechecks

Synthetic standardized workshop observations. Reference samples are independent in-control examples, not targets.

Exploratory recheck cues, not fault diagnoses, p-values or release decisions. Correlated independent reference samples must represent the same stable process; contamination, nonlinear patterns, mixed units and small reference sets can mislead. AI similarity does not establish identity. Holds are retained but excluded from all calculations. No automatic deletions or equipment actions.

12 approved; 0 held; 12 originals.
Radius 3; correlation shrinkage 0.05

## press
References 4; checks 2; joint flags 1; marginal flags 0; joint-only 1
r04: D² 26.732741116751253; marginal |z| 0.8215838362577491; recheck true
r05: D² 0.07690355329949211; marginal |z| 0.27386127875258304; recheck false

## oven
References 4; checks 2; joint flags 1; marginal flags 0; joint-only 1
r14: D² 26.732741116751253; marginal |z| 0.8215838362577491; recheck true
r15: D² 0.07690355329949211; marginal |z| 0.27386127875258304; recheck false

## Complete source review
### r00
Hydraulic ram pushing force paired with piston travel on the press.
approve; press; reference; X -2; Y -2.05


### r01
Hydraulic ram pushing force paired with piston travel on the press.
approve; press; reference; X -1; Y -0.95


### r02
Hydraulic ram pushing force paired with piston travel on the press.
approve; press; reference; X 1; Y 1.05


### r03
Hydraulic ram pushing force paired with piston travel on the press.
approve; press; reference; X 2; Y 1.95


### r04
Hydraulic ram pushing force paired with piston travel on the press.
approve; press; check; X 1.5; Y -1.5


### r05
Hydraulic ram pushing force paired with piston travel on the press.
approve; press; check; X 0.5; Y 0.5


### r10
Metal heat treatment oven temperature paired with expansion.
approve; oven; reference; X -2; Y -2.05


### r11
Metal heat treatment oven temperature paired with expansion.
approve; oven; reference; X -1; Y -0.95


### r12
Metal heat treatment oven temperature paired with expansion.
approve; oven; reference; X 1; Y 1.05


### r13
Metal heat treatment oven temperature paired with expansion.
approve; oven; reference; X 2; Y 1.95


### r14
Metal heat treatment oven temperature paired with expansion.
approve; oven; check; X 1.5; Y -1.5


### r15
Metal heat treatment oven temperature paired with expansion.
approve; oven; check; X 0.5; Y 0.5
