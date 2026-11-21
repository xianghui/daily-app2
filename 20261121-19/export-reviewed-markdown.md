# Community center rule review

Hypothetical rule-review worksheet, not observed behavior, fairness certification or legal interpretation. Each group acts as a single yes/no voter, all subsets are equally weighted mathematically, and votes pass at weight ≥ quota. No abstention, turnout, proxy or coalition restrictions. No votes are cast.

Quota: 5 of 7; 8 subsets checked; 4 winning.
Total swings: 4.
- garden: weight 5; weight share 0.7143; swings 4; normalized Banzhaf 1.0000; absolute Banzhaf 1.0000; dummy false; veto true.
- music: weight 1; weight share 0.1429; swings 0; normalized Banzhaf 0.0000; absolute Banzhaf 0.0000; dummy true; veto false.
- chess: weight 1; weight share 0.1429; swings 0; normalized Banzhaf 0.0000; absolute Banzhaf 0.0000; dummy true; veto false.

## Minimal winning coalitions
- garden

## Source review
### N1
vegetable gardening community growers
Original weight: 3; reviewed: 3
AI: garden; reviewed: garden; approve
=SUM(1,2)
"reviewer", verify mandate

### N2
singing choir and music club
Original weight: 1; reviewed: 1
AI: music; reviewed: music; approve


### N3
chess players and board games
Original weight: 1; reviewed: 1
AI: chess; reviewed: chess; approve


### N4
community garden vegetable growing group
Original weight: 2; reviewed: 2
AI: garden; reviewed: garden; approve


## Method
Real MiniLM embeddings retrieve group meanings, not names or legal identities. Similarity is not confidence or proof of a mandate. Human review is mandatory. Exact enumeration compares each losing subset without a group with that subset plus the group. A swing crosses the quota. Normalized Banzhaf divides group swings by all groups’ swings; absolute Banzhaf divides by 2^(groups−1). Vote-weight share is a descriptive baseline, not a power estimate. No actual behavior probability is claimed.
Limits: 8 groups, 32 block notes; integer block weights 1–1,000; quota 1–total reviewed weight. Multiple notes for a group are ADDITIVE distinct blocks, not duplicate evidence. Check that no mandate is counted twice. Zero-weight groups remain as dummy voters. Any hold withholds the full analysis.
