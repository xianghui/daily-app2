# Cohort Veil — disclosure review worksheet

Library feedback — synthetic small extract; review every column before export.

Draft only, NOT an anonymity or privacy guarantee. Group sizes apply only to the reviewed quasi-identifiers and this input, not a population or external datasets. Payloads, free text, linkability, attribute disclosure and omitted quasi-identifiers can still identify people. Held/dropped columns and suppressed rows are excluded from the draft but preserved in the sensitive complete audit. No files are changed or uploaded.

## Computed comparison
Same 6 original rows and reviewed quasi columns: years, district. Exact-value baseline: 6 rows below k=2. After chosen generalization: 1 below k; these 1 rows suppressed. Draft retains 5 rows. Smallest released group: 2. Not a measured reidentification risk.

## Column decisions
### contact
Visitor email address for follow-up
AI direct; reviewed direct; drop; approve.


### years
Age of library visitor in years
AI quasi; reviewed quasi; bin width 10; approve.


### district
Residential postal district of visitor
AI quasi; reviewed quasi; keep; approve.


### rating
Survey satisfaction rating from 1 to 5
AI payload; reviewed payload; keep; approve.


## Group sizes
["[20, 30)","North"] · 3 · retained
["[30, 40)","South"] · 2 · retained
["[50, 60)","West"] · 1 · suppressed