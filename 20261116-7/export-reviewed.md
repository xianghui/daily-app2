# Reach Quilt — reviewed audience overlap

Synthetic quarterly resident counts. Same population, window and person identity across both services; inclusive intersection.

3 originals = 3 approved + 0 held. Status: ready.

Unique reach: 75 people. Naive channel-total sum: 100. Duplicate memberships counted by that sum: 25.
Universe: 100; outside all channels: 25. Target 80; gap 5.

Exact segments (not inclusive counts):
- Library borrowing: 35
- Bicycle repair: 15
- Library borrowing + Bicycle repair: 25

## Every source and review
- l: Neighbours checking out reading material from the lending shelves; original count 60; reviewed Library borrowing count 60 [approve]
  =SUM(1,2)
"quoted", verify
- b: Cyclists getting flat tyres and brakes fixed; original count 40; reviewed Bicycle repair count 40 [approve]
  
- both: Neighbours checking out reading material from the lending shelves AND Cyclists getting flat tyres and brakes fixed; original count 25; reviewed Library borrowing + Bicycle repair count 25 [approve]
  

## Follow-up
- [ ] Verify shared identity, population, period and within-channel deduplication.
- [ ] Every intersection must be inclusive of larger intersections; missing is not zero.
- [ ] This audit does not estimate causality, incremental attribution or unobserved overlaps. No outreach or account changes.
