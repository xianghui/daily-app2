# Trend Cairn — reviewed trend/recheck worksheet

Workshop analyst checking whether recurring repair duration is drifting.

Assumption: Synthetic repeated observations at comparable operating conditions. Day indices share an origin per series; no seasonal adjustment or causal claim.

Neural similarity is not confidence. Sen slope is the median of all observed pairwise slopes; intercept is median(value − slope × day). Endpoint baseline joins earliest and latest approved points. Residual flags use your supplied absolute tolerance, not statistical significance or automatic outlier removal. Leave-one-out errors refit without each point, including endpoint extrapolation; they are in-sample diagnostic comparisons, not validated forecast accuracy. Serial dependence, seasonality, changing exposure and majority contamination can invalidate interpretation. No extrapolation or causal claim; holds and unavailable series remain in audits. No content uploads or equipment actions.

## Series comparison
### bikes (min)
Sen slope 2/day; endpoint 10/day; intercept 10; 15 pairs.
LOO MAE: robust 6.666666666666667, endpoint 21.666666666666668.
Recheck: s0d5
s0d0: day 0, value 10, fitted 10, residual 0
s0d1: day 1, value 12, fitted 12, residual 0
s0d2: day 2, value 14, fitted 14, residual 0
s0d3: day 3, value 16, fitted 16, residual 0
s0d4: day 4, value 18, fitted 18, residual 0
s0d5: day 5, value 60, fitted 20, residual 40

### laptops (min)
Sen slope -1/day; endpoint -1/day; intercept 30; 15 pairs.
LOO MAE: robust 0, endpoint 0.
Recheck: none
s1d0: day 0, value 30, fitted 30, residual 0
s1d1: day 1, value 29, fitted 29, residual 0
s1d2: day 2, value 28, fitted 28, residual 0
s1d3: day 3, value 27, fitted 27, residual 0
s1d4: day 4, value 26, fitted 26, residual 0
s1d5: day 5, value 25, fitted 25, residual 0

## Every original and review
### s0d0
Bicycle repair duration
Original day/value: 0 / 10
Reviewed: bikes; day 0; value 10; approve


### s0d1
Cycle workshop repair time
Original day/value: 1 / 12
Reviewed: bikes; day 1; value 12; approve


### s0d2
Bike service turnaround
Original day/value: 2 / 14
Reviewed: bikes; day 2; value 14; approve


### s0d3
Bicycle repair duration
Original day/value: 3 / 16
Reviewed: bikes; day 3; value 16; approve


### s0d4
Cycle workshop repair time
Original day/value: 4 / 18
Reviewed: bikes; day 4; value 18; approve


### s0d5
Bike service turnaround
Original day/value: 5 / 60
Reviewed: bikes; day 5; value 60; approve


### s1d0
Laptop computer repair time
Original day/value: 0 / 30
Reviewed: laptops; day 0; value 30; approve


### s1d1
Notebook computer service duration
Original day/value: 1 / 29
Reviewed: laptops; day 1; value 29; approve


### s1d2
Laptop servicing turnaround
Original day/value: 2 / 28
Reviewed: laptops; day 2; value 28; approve


### s1d3
Laptop computer repair time
Original day/value: 3 / 27
Reviewed: laptops; day 3; value 27; approve


### s1d4
Notebook computer service duration
Original day/value: 4 / 26
Reviewed: laptops; day 4; value 26; approve


### s1d5
Laptop servicing turnaround
Original day/value: 5 / 25
Reviewed: laptops; day 5; value 25; approve
