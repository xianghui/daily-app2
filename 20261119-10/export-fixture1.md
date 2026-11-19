# Pairwise Foundry — reviewed QA worksheet

Synthetic document viewer regression planning. Review catalog identities and explicit forbidden combinations.

6 notes = 6 approved + 0 held. Status: ready

## Coverage
12/12 feasible pairs in 4 tests. Full feasible Cartesian baseline: 8 configurations. First 4 feasible configurations cover 8 pairs.

## Test matrix
- T001: File format=pdf; Appearance=light; Language=english
- T002: File format=pdf; Appearance=dark; Language=french
- T003: File format=image; Appearance=light; Language=french
- T004: File format=image; Appearance=dark; Language=english

Uncovered pairs: []
Excluded impossible pairs: []
Inactive catalog levels: 



## Every source and review
- n1: Open a portable document PDF with several pages → pdf [approve]
  
- n2: Load a JPEG photograph picture → image [approve]
  
- n3: Choose the bright white background theme → light [approve]
  
- n4: Switch to the black background night theme → dark [approve]
  
- n5: Show menus in the English language → english [approve]
  
- n6: Display the interface in French → french [approve]
  

## Explicit forbidden combinations
[]

## Before running
- [ ] Verify all condition identities and active/inactive catalog levels. Similarity is not confidence.
- [ ] Check constraints describe real compatibility rules, not untested assumptions.
- [ ] Pairwise coverage is not higher-order coverage or proof of correctness.
- [ ] Greedy construction is deterministic, not guaranteed minimum-size. No tests executed.
