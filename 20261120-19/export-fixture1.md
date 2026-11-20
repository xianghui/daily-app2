# Trend Cairn — reviewed trend/recheck worksheet

Library coordinator checking comparable daily circulation and digital-access totals.

Assumption: Synthetic repeated observations at comparable operating conditions. Day indices share an origin per series; no seasonal adjustment or causal claim.

Neural similarity is not confidence. Sen slope is the median of all observed pairwise slopes; intercept is median(value − slope × day). Endpoint baseline joins earliest and latest approved points. Residual flags use your supplied absolute tolerance, not statistical significance or automatic outlier removal. Leave-one-out errors refit without each point, including endpoint extrapolation; they are in-sample diagnostic comparisons, not validated forecast accuracy. Serial dependence, seasonality, changing exposure and majority contamination can invalidate interpretation. No extrapolation or causal claim; holds and unavailable series remain in audits. No content uploads or equipment actions.

## Series comparison
### books (loans)
Sen slope 3/day; endpoint 3/day; intercept 100; 15 pairs.
LOO MAE: robust 0, endpoint 0.
Recheck: none
s0d0: day 0, value 100, fitted 100, residual 0
s0d1: day 1, value 103, fitted 103, residual 0
s0d2: day 2, value 106, fitted 106, residual 0
s0d3: day 3, value 109, fitted 109, residual 0
s0d4: day 4, value 112, fitted 112, residual 0
s0d5: day 5, value 115, fitted 115, residual 0

### digital (sessions)
Sen slope 2/day; endpoint 2/day; intercept 50; 15 pairs.
LOO MAE: robust 7.666666666666667, endpoint 7.666666666666667.
Recheck: s1d2
s1d0: day 0, value 50, fitted 50, residual 0
s1d1: day 1, value 52, fitted 52, residual 0
s1d2: day 2, value 100, fitted 54, residual 46
s1d3: day 3, value 56, fitted 56, residual 0
s1d4: day 4, value 58, fitted 58, residual 0
s1d5: day 5, value 60, fitted 60, residual 0

## Every original and review
### s0d0
Printed book borrowing total
Original day/value: 0 / 100
Reviewed: books; day 0; value 100; approve


### s0d1
Library book circulation loans
Original day/value: 1 / 103
Reviewed: books; day 1; value 103; approve


### s0d2
Physical books checked out
Original day/value: 2 / 106
Reviewed: books; day 2; value 106; approve


### s0d3
Printed book borrowing total
Original day/value: 3 / 109
Reviewed: books; day 3; value 109; approve


### s0d4
Library book circulation loans
Original day/value: 4 / 112
Reviewed: books; day 4; value 112; approve


### s0d5
Physical books checked out
Original day/value: 5 / 115
Reviewed: books; day 5; value 115; approve


### s1d0
Online database access sessions
Original day/value: 0 / 50
Reviewed: digital; day 0; value 50; approve


### s1d1
Digital library database usage
Original day/value: 1 / 52
Reviewed: digital; day 1; value 52; approve


### s1d2
Electronic database sessions
Original day/value: 2 / 100
Reviewed: digital; day 2; value 100; approve


### s1d3
Online database access sessions
Original day/value: 3 / 56
Reviewed: digital; day 3; value 56; approve


### s1d4
Digital library database usage
Original day/value: 4 / 58
Reviewed: digital; day 4; value 58; approve


### s1d5
Electronic database sessions
Original day/value: 5 / 60
Reviewed: digital; day 5; value 60; approve
