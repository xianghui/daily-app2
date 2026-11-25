# Synthetic lab timeline

3 approved / 0 held. 2 row totals differ from the row-by-row shortcut. Snapshot correctness comparison, not AI accuracy.

## event-log — approve

Source: After each individual event show the updated running count. Process one row at a time, using the identifier to break ties.

Reviewer: =SUM(1,2)
Reviewed "entry", <script> & 🍞

Frame: rows

- a: "bench" / key 0 / value 3 → 3
- z: "bench" / key 0 / value 7 → 10
- m: "bench" / key 1 / value -2 → 8

## weekly-summary — approve

Source: Weekly summary: measurements in the same week share the full cumulative total through the end of that week.

Reviewer: 

Frame: peers

- a: "trial" / key 1 / value 8 → 10
- b: "trial" / key 1 / value 2 → 10
- c: "trial" / key 2 / value 3 → 12
- d: "trial" / key 2 / value -1 → 12

## tube-ledger — approve

Source: Individual entry ledger showing the running quantity immediately after each entry. For matching times sort by entry identifier.

Reviewer: 

Frame: rows

- a: "tube-A" / key 1 / value 11 → 11
- b: "tube-A" / key 1 / value -4 → 7
- c: "tube-B" / key 1 / value 6 → 6
