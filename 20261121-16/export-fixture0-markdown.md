# Training pilot · assumed causal structure

Graph-conditional backdoor criterion for a TOTAL effect only. Assumed arrows are not causal evidence; no effects are estimated. Absence of a sufficient set here does not prove non-identifiability by other methods.

Exposure: X → Outcome: Y

## Graph-conditional adjustment worksheet
Minimal sufficient sets: C
Examined 4 subsets. Unadjusted sufficient: false. All-observed baseline sufficient: false.
Baseline set: C, K, M. Descendants in baseline: M.
Baseline open ancestral-moral witness (not an original directed path): X — U — V — Y

## Variable dictionary
- X: Enrollment in a staff training course [observed]
- Y: Final assessment examination score [observed]
- C: Previous job experience before training [observed]
- U: Unrecorded supervisor encouragement [unobserved]
- V: Unrecorded test anxiety [unobserved]
- K: Completion of a voluntary research questionnaire [observed]
- M: Practice exercises completed after enrollment [observed]

## Arrow review register
### A1 · approve
Source assertion: prior work experience → staff course enrollment
AI endpoints: C → X; reviewed: C → X
Note: —

### A2 · approve
Source assertion: prior work experience → final exam score
AI endpoints: C → Y; reviewed: C → Y
Note: —

### A3 · approve
Source assertion: supervisor encouragement → staff course enrollment
AI endpoints: U → X; reviewed: U → X
Note: —

### A4 · approve
Source assertion: supervisor encouragement → voluntary research questionnaire completion
AI endpoints: U → K; reviewed: U → K
Note: —

### A5 · approve
Source assertion: test anxiety → voluntary research questionnaire completion
AI endpoints: V → K; reviewed: V → K
Note: —

### A6 · approve
Source assertion: test anxiety → final exam score
AI endpoints: V → Y; reviewed: V → Y
Note: —

### A7 · approve
Source assertion: staff course enrollment → practice exercises completed
AI endpoints: X → M; reviewed: X → M
Note: —

### A8 · approve
Source assertion: practice exercises completed → final exam score
AI endpoints: M → Y; reviewed: M → Y
Note: —

## Method and limits
AI: real MiniLM cosine retrieval of variable identities; not direction discovery or evidence of causality. Deterministic: cycle/duplicate checks; remove outgoing exposure arrows; ancestral moral graph d-separation; enumerate all observed non-descendant subsets. Minimal means inclusion-minimal, not uniquely optimal.
Assumes the reviewed DAG is causally adequate, arrows/directions correct, and all relevant common causes represented (including unobserved ones). Backdoor adjustment is sufficient, not the most general identification criterion. No effect estimates, regression specification, positivity checks or causal conclusions are produced.
