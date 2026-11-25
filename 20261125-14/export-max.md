# Maximum 24-request / 8-profile batch

24 approved / 0 held. 312 row totals differ from the row-by-row shortcut. Snapshot correctness comparison, not AI accuracy.

## req-0 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-1 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-2 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-3 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-4 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-5 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-6 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-7 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-8 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-9 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-10 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-11 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-12 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-13 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-14 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-15 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-16 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-17 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-18 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-19 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-20 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-21 — approve

Source: For each trading day publish the closing cumulative sales. All sales on the same day must include every sale for that day.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-22 — approve

Source: Cashbook running balance after every individual transaction, processing equal timestamps by entry identifier one entry at a time.

Reviewer: 

Frame: rows

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -1
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → 2
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -10
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -1
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -25
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -10
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -46
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -25
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -73
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -46
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -106
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -73
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -145
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → 0
- id-02: "O'Brien" / key -2 / value -2 → -2
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → 0
- id-08: "O'Brien" / key -1 / value -8 → -8
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -6
- id-14: "O'Brien" / key 0 / value -14 → -20
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -18
- id-20: "O'Brien" / key 1 / value -20 → -38
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -36
- id-26: "O'Brien" / key 2 / value -26 → -62
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -60
- id-32: "O'Brien" / key 3 / value -32 → -92
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -90
- id-38: "O'Brien" / key 4 / value -38 → -128

## req-23 — approve

Source: Each branch needs period-end cumulative totals. Every entry within a period shows that whole period included.

Reviewer: 

Frame: peers

- id-01: "=P \"quoted\",\n🍞" / key -2 / value -1 → -3
- id-03: "=P \"quoted\",\n🍞" / key -2 / value 3 → -3
- id-05: "=P \"quoted\",\n🍞" / key -2 / value -5 → -3
- id-07: "=P \"quoted\",\n🍞" / key -1 / value -7 → -12
- id-09: "=P \"quoted\",\n🍞" / key -1 / value 9 → -12
- id-11: "=P \"quoted\",\n🍞" / key -1 / value -11 → -12
- id-13: "=P \"quoted\",\n🍞" / key 0 / value -13 → -27
- id-15: "=P \"quoted\",\n🍞" / key 0 / value 15 → -27
- id-17: "=P \"quoted\",\n🍞" / key 0 / value -17 → -27
- id-19: "=P \"quoted\",\n🍞" / key 1 / value -19 → -48
- id-21: "=P \"quoted\",\n🍞" / key 1 / value 21 → -48
- id-23: "=P \"quoted\",\n🍞" / key 1 / value -23 → -48
- id-25: "=P \"quoted\",\n🍞" / key 2 / value -25 → -75
- id-27: "=P \"quoted\",\n🍞" / key 2 / value 27 → -75
- id-29: "=P \"quoted\",\n🍞" / key 2 / value -29 → -75
- id-31: "=P \"quoted\",\n🍞" / key 3 / value -31 → -108
- id-33: "=P \"quoted\",\n🍞" / key 3 / value 33 → -108
- id-35: "=P \"quoted\",\n🍞" / key 3 / value -35 → -108
- id-37: "=P \"quoted\",\n🍞" / key 4 / value -37 → -106
- id-39: "=P \"quoted\",\n🍞" / key 4 / value 39 → -106
- id-00: "O'Brien" / key -2 / value 0 → -6
- id-02: "O'Brien" / key -2 / value -2 → -6
- id-04: "O'Brien" / key -2 / value -4 → -6
- id-06: "O'Brien" / key -1 / value 6 → -18
- id-08: "O'Brien" / key -1 / value -8 → -18
- id-10: "O'Brien" / key -1 / value -10 → -18
- id-12: "O'Brien" / key 0 / value 12 → -36
- id-14: "O'Brien" / key 0 / value -14 → -36
- id-16: "O'Brien" / key 0 / value -16 → -36
- id-18: "O'Brien" / key 1 / value 18 → -60
- id-20: "O'Brien" / key 1 / value -20 → -60
- id-22: "O'Brien" / key 1 / value -22 → -60
- id-24: "O'Brien" / key 2 / value 24 → -90
- id-26: "O'Brien" / key 2 / value -26 → -90
- id-28: "O'Brien" / key 2 / value -28 → -90
- id-30: "O'Brien" / key 3 / value 30 → -126
- id-32: "O'Brien" / key 3 / value -32 → -126
- id-34: "O'Brien" / key 3 / value -34 → -126
- id-36: "O'Brien" / key 4 / value 36 → -128
- id-38: "O'Brien" / key 4 / value -38 → -128
