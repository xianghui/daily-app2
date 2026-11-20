# Distribution Dock — reviewed distribution recheck worksheet

Synthetic comparable service observations; no future predictions.
Unit: minutes; recheck tolerance: 2

Empirical one-dimensional Wasserstein distance is the area between two normalized CDFs, in the stated duration unit. Counts are frequencies of exact values, not histogram bins or confidence weights. Means/quantiles and distances describe only supplied observations; no statistical significance, causal diagnosis or future reliability. A shape change may be harmless. Verify comparable windows, units, workload and complete logs. Tolerance is your recheck policy, not a learned safety limit. Holds can change representativeness; incomplete queues are not zero-change evidence.

## Queue comparisons
### wash — Washing dirty fabric laundry in a washing machine
Wasserstein distance: 5; absolute mean shift: 5; tolerance exceeded: true
Reference count 2, mean 15, p50 10, p90 20
Current count 2, mean 20, p50 15, p90 25
Sources: r1, r2, r3, r4

### bake — Baking bread dough in a bakery oven
Wasserstein distance: 0; absolute mean shift: 0; tolerance exceeded: false
Reference count 2, mean 10, p50 5, p90 15
Current count 2, mean 10, p50 5, p90 15
Sources: r5, r6, r7, r8

## All originals and reviews
### r1
Cleaning dirty clothes in the laundry washer
Original: reference, value 10, n=1
Reviewed: wash, reference, value 10, n=1, approve


### r2
Machine washing fabric laundry loads
Original: reference, value 20, n=1
Reviewed: wash, reference, value 20, n=1, approve


### r3
Washing soiled garments in a washing machine
Original: current, value 15, n=1
Reviewed: wash, current, value 15, n=1, approve


### r4
Cleaning clothes in the washing machine
Original: current, value 25, n=1
Reviewed: wash, current, value 25, n=1, approve


### r5
Baking loaves of bread in the oven
Original: reference, value 5, n=1
Reviewed: bake, reference, value 5, n=1, approve


### r6
Putting bread dough into the bakery oven
Original: reference, value 15, n=1
Reviewed: bake, reference, value 15, n=1, approve


### r7
Oven baking batches of bread loaves
Original: current, value 5, n=1
Reviewed: bake, current, value 5, n=1, approve


### r8
Baking bread in an oven
Original: current, value 15, n=1
Reviewed: bake, current, value 15, n=1, approve

