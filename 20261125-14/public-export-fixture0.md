# Synthetic shop reporting handoff

3 approved / 0 held. 2 row totals differ from the row-by-row shortcut. Snapshot correctness comparison, not AI accuracy.

## daily-close — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: peers

- a: "shop" / key 1 / value 10 → 35
- b: "shop" / key 1 / value 25 → 35
- c: "shop" / key 2 / value -5 → 30
- d: "shop" / key 3 / value 20 → 50

## cashbook — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: rows

- a: "cash" / key 1 / value 12 → 12
- b: "cash" / key 1 / value -3 → 9
- c: "cash" / key 2 / value 4 → 13

## branch-close — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: peers

- a: "north" / key 1 / value 5 → 12
- b: "north" / key 1 / value 7 → 12
- c: "south" / key 1 / value 90 → 90
- d: "south" / key 2 / value -10 → 80
