# Pairwise Foundry — reviewed QA worksheet

Synthetic checkout QA preparation. Pairwise interaction coverage, not proof of a bug-free release.

6 notes = 6 approved + 0 held. Status: ready

## Coverage
11/11 feasible pairs in 5 tests. Full feasible Cartesian baseline: 6 configurations. First 5 feasible configurations cover 10 pairs.

## Test matrix
- T001: Device=desktop; Account=guest; Connectivity=online
- T002: Device=desktop; Account=member; Connectivity=offline
- T003: Device=mobile; Account=member; Connectivity=online
- T004: Device=mobile; Account=guest; Connectivity=online
- T005: Device=mobile; Account=member; Connectivity=offline

Uncovered pairs: []
Excluded impossible pairs: [["guest","offline"]]
Inactive catalog levels: 



## Every source and review
- n1: Use a laptop computer with a mouse and keyboard → desktop [approve]
  
- n2: Use a smartphone touchscreen → mobile [approve]
  
- n3: Shop anonymously without registering an account → guest [approve]
  
- n4: Log in as a registered customer → member [approve]
  
- n5: Browse websites using active Wi-Fi internet access → online [approve]
  
- n6: Enable airplane mode with network disconnected → offline [approve]
  

## Explicit forbidden combinations
[["guest","offline"]]

## Before running
- [ ] Verify all condition identities and active/inactive catalog levels. Similarity is not confidence.
- [ ] Check constraints describe real compatibility rules, not untested assumptions.
- [ ] Pairwise coverage is not higher-order coverage or proof of correctness.
- [ ] Greedy construction is deterministic, not guaranteed minimum-size. No tests executed.
