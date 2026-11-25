# Synthetic service timing worksheet

8 selected versus 6 exact-row baseline; 2 inclusion differences. Snapshot comparison, not model accuracy.

## timing-bands — approve

Source: Take the two best distinct timing values, keeping every tied row. Number different values consecutively without gaps.

Reviewer: 

Policy: dense; cutoff 2; lower scores first.

- r1 / "Desk A": 8 (place 1, dense 1)
- r2 / "Desk B": 8 (place 1, dense 1)
- r3 / "Desk C": 10 (place 3, dense 2)
- r4 / "Desk D": 10 (place 3, dense 2)

## timing-places — approve

Source: Keep the first two competition places including equal scores. Joint first consumes two places, so the next candidate is third.

Reviewer: 

Policy: rank; cutoff 2; lower scores first.

- r1 / "Desk A": 8 (place 1, dense 1)
- r2 / "Desk B": 8 (place 1, dense 1)

## limited-rechecks — approve

Source: Only two recheck slots exist. Hard cap the result at exactly two rows; original order resolves equal scores.

Reviewer: 

Policy: rows; cutoff 2; lower scores first.

- r1 / "Desk A": 8 (place 1, dense 1)
- r2 / "Desk B": 8 (place 1, dense 1)
