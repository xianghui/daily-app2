# Joint Signal — correlated measurement rechecks

Synthetic standardized packaging measurements. Values already centered in comparable stated units.

Exploratory recheck cues, not fault diagnoses, p-values or release decisions. Correlated independent reference samples must represent the same stable process; contamination, nonlinear patterns, mixed units and small reference sets can mislead. AI similarity does not establish identity. Holds are retained but excluded from all calculations. No automatic deletions or equipment actions.

11 approved; 1 held; 12 originals.
Radius 3; correlation shrinkage 0.05

## parcel
Need at least four approved independent reference observations.

## paper
References 4; checks 2; joint flags 1; marginal flags 0; joint-only 1
r14: D² 26.732741116751253; marginal |z| 0.8215838362577491; recheck true
r15: D² 0.07690355329949211; marginal |z| 0.27386127875258304; recheck false

## Complete source review
### r00
Packed delivery box weight paired with cubic shipping volume.
approve; parcel; reference; X -2; Y -2.05
=SUM(1,2)
"inspect", both axes

### r01
Packed delivery box weight paired with cubic shipping volume.
hold; parcel; reference; X -1; Y -0.95


### r02
Packed delivery box weight paired with cubic shipping volume.
approve; parcel; reference; X 1; Y 1.05


### r03
Packed delivery box weight paired with cubic shipping volume.
approve; parcel; reference; X 2; Y 1.95


### r04
Packed delivery box weight paired with cubic shipping volume.
approve; parcel; check; X 1.5; Y -1.5


### r05
Packed delivery box weight paired with cubic shipping volume.
approve; parcel; check; X 0.5; Y 0.5


### r10
Paper stock caliper thickness paired with sheet basis weight.
approve; paper; reference; X -2; Y -2.05


### r11
Paper stock caliper thickness paired with sheet basis weight.
approve; paper; reference; X -1; Y -0.95


### r12
Paper stock caliper thickness paired with sheet basis weight.
approve; paper; reference; X 1; Y 1.05


### r13
Paper stock caliper thickness paired with sheet basis weight.
approve; paper; reference; X 2; Y 1.95


### r14
Paper stock caliper thickness paired with sheet basis weight.
approve; paper; check; X 1.5; Y -1.5


### r15
Paper stock caliper thickness paired with sheet basis weight.
approve; paper; check; X 0.5; Y 0.5
