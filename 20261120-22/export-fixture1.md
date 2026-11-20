# Cohort Veil — disclosure review worksheet

Workshop survey — synthetic small extract; review every column before export.

Draft only, NOT an anonymity or privacy guarantee. Group sizes apply only to the reviewed quasi-identifiers and this input, not a population or external datasets. Payloads, free text, linkability, attribute disclosure and omitted quasi-identifiers can still identify people. Held/dropped columns and suppressed rows are excluded from the draft but preserved in the sensitive complete audit. No files are changed or uploaded.

## Computed comparison
Same 6 original rows and reviewed quasi columns: job, age. Exact-value baseline: 6 rows below k=2. After chosen generalization: 1 below k; these 1 rows suppressed. Draft retains 5 rows. Smallest released group: 2. Not a measured reidentification risk.

## Column decisions
### person
Participant full name
AI direct; reviewed direct; drop; approve.


### job
Occupation and job title of participant
AI quasi; reviewed quasi; keep; approve.


### age
Participant age in years
AI quasi; reviewed quasi; bin width 10; approve.


### minutes
Measured task completion duration in minutes
AI payload; reviewed payload; keep; approve.


## Group sizes
["Maker","[20, 30)"] · 3 · retained
["Tutor","[40, 50)"] · 2 · retained
["Designer","[50, 60)"] · 1 · suppressed