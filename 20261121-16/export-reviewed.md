# Website redesign · assumed causal structure

Graph-conditional backdoor criterion for a TOTAL effect only. Assumed arrows are not causal evidence; no effects are estimated. Absence of a sufficient set here does not prove non-identifiability by other methods.

Exposure: X → Outcome: Y

## Graph-conditional adjustment worksheet
Minimal sufficient sets: NONE in the enumerated observed non-descendants
Examined 4 subsets. Unadjusted sufficient: false. All-observed baseline sufficient: false.
Baseline set: A, B, Z. Descendants in baseline: Z.
Baseline open ancestral-moral witness (not an original directed path): X — L — Y

## Variable dictionary
- X: Exposure to the redesigned website layout [observed]
- Y: Checkout purchase completion [observed]
- A: Device type used to browse the website [observed]
- B: Returning customer purchase history [observed]
- L: Unobserved advertising influence [unobserved]
- Z: Joining an optional feedback survey [observed]

## Arrow review register
### E1 · approve
Source assertion: browsing device category → redesigned website exposure
AI endpoints: A → X; reviewed: A → X
Note: =SUM(1,2)
"analyst", verify direction

### E2 · approve
Source assertion: browsing device category → completed checkout purchase
AI endpoints: A → Y; reviewed: A → Y
Note: —

### E3 · approve
Source assertion: returning customer history → redesigned website exposure
AI endpoints: B → X; reviewed: B → X
Note: —

### E4 · approve
Source assertion: returning customer history → completed checkout purchase
AI endpoints: B → Y; reviewed: B → Y
Note: —

### E5 · approve
Source assertion: unobserved advertising influence → redesigned website exposure
AI endpoints: L → X; reviewed: L → X
Note: —

### E6 · approve
Source assertion: unobserved advertising influence → completed checkout purchase
AI endpoints: L → Y; reviewed: L → Y
Note: —

### E7 · approve
Source assertion: redesigned website exposure → optional feedback survey participation
AI endpoints: X → Z; reviewed: X → Z
Note: —

### E8 · approve
Source assertion: completed checkout purchase → optional feedback survey participation
AI endpoints: Y → Z; reviewed: Y → Z
Note: —

## Method and limits
AI: real MiniLM cosine retrieval of variable identities; not direction discovery or evidence of causality. Deterministic: cycle/duplicate checks; remove outgoing exposure arrows; ancestral moral graph d-separation; enumerate all observed non-descendant subsets. Minimal means inclusion-minimal, not uniquely optimal.
Assumes the reviewed DAG is causally adequate, arrows/directions correct, and all relevant common causes represented (including unobserved ones). Backdoor adjustment is sufficient, not the most general identification criterion. No effect estimates, regression specification, positivity checks or causal conclusions are produced.
