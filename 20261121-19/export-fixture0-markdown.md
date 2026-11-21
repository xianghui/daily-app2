# Maker cooperative rule review

Hypothetical rule-review worksheet, not observed behavior, fairness certification or legal interpretation. Each group acts as a single yes/no voter, all subsets are equally weighted mathematically, and votes pass at weight ≥ quota. No abstention, turnout, proxy or coalition restrictions. No votes are cast.

Quota: 6 of 9; 8 subsets checked; 3 winning.
Total swings: 5.
- print: weight 4; weight share 0.4444; swings 3; normalized Banzhaf 0.6000; absolute Banzhaf 0.7500; dummy false; veto true.
- wood: weight 3; weight share 0.3333; swings 1; normalized Banzhaf 0.2000; absolute Banzhaf 0.2500; dummy false; veto false.
- ceramic: weight 2; weight share 0.2222; swings 1; normalized Banzhaf 0.2000; absolute Banzhaf 0.2500; dummy false; veto false.

## Minimal winning coalitions
- print + wood
- print + ceramic

## Source review
### B1
screen printing and printmaking team
Original weight: 2; reviewed: 2
AI: print; reviewed: print; approve


### B2
carpentry and wooden furniture workshop
Original weight: 3; reviewed: 3
AI: wood; reviewed: wood; approve


### B3
pottery and clay ceramics studio
Original weight: 2; reviewed: 2
AI: ceramic; reviewed: ceramic; approve


### B4
printmaking screen print studio
Original weight: 2; reviewed: 2
AI: print; reviewed: print; approve


## Method
Real MiniLM embeddings retrieve group meanings, not names or legal identities. Similarity is not confidence or proof of a mandate. Human review is mandatory. Exact enumeration compares each losing subset without a group with that subset plus the group. A swing crosses the quota. Normalized Banzhaf divides group swings by all groups’ swings; absolute Banzhaf divides by 2^(groups−1). Vote-weight share is a descriptive baseline, not a power estimate. No actual behavior probability is claimed.
Limits: 8 groups, 32 block notes; integer block weights 1–1,000; quota 1–total reviewed weight. Multiple notes for a group are ADDITIVE distinct blocks, not duplicate evidence. Check that no mandate is counted twice. Zero-weight groups remain as dummy voters. Any hold withholds the full analysis.
