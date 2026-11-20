# Load Ladder — reviewed observed-level lookup

Synthetic workshop batch timings. Same procedure and fixed staffing within each profile.
Unit: minutes; ceiling: 25

Monotonicity is a supplied planning assumption, not a discovered law. Weighted isotonic least squares smooths observed level means; zero fitted drops is by construction, not improved predictive accuracy. Count weights require comparable independent measurements and identical units/staffing. Pooled plateaus can hide real process changes. Ceilings are descriptive screens on fitted means, never guarantees, confidence bounds or safe capacities. No interpolation, extrapolation, causal claims or equipment control.

## Lookup
### wash — Washing dirty fabric laundry in a washing machine
Largest observed size with fitted mean ≤ ceiling: 30
- Size 10: raw 12, fitted 12, n=2, block 1; sources r1
- Size 20: raw 28, fitted 23, n=1, block 2; sources r2
- Size 30: raw 18, fitted 23, n=1, block 2; sources r3

### bake — Baking bread dough in a bakery oven
Largest observed size with fitted mean ≤ ceiling: 20
- Size 10: raw 20, fitted 18.666666666666668, n=1, block 1; sources r4
- Size 20: raw 18, fitted 18.666666666666668, n=2, block 1; sources r5
- Size 30: raw 40, fitted 40, n=1, block 2; sources r6

## All originals and reviews
### r1
Cleaning dirty clothes in the laundry washer
Original: size 10, mean 12, n=2
Reviewed: wash, size 10, mean 12, n=2, approve


### r2
Machine washing fabric laundry loads
Original: size 20, mean 28, n=1
Reviewed: wash, size 20, mean 28, n=1, approve


### r3
Washing soiled garments in a washing machine
Original: size 30, mean 18, n=1
Reviewed: wash, size 30, mean 18, n=1, approve


### r4
Baking loaves of bread in the oven
Original: size 10, mean 20, n=1
Reviewed: bake, size 10, mean 20, n=1, approve


### r5
Putting bread dough into the bakery oven
Original: size 20, mean 18, n=2
Reviewed: bake, size 20, mean 18, n=2, approve


### r6
Oven baking batches of bread loaves
Original: size 30, mean 40, n=1
Reviewed: bake, size 30, mean 40, n=1, approve

