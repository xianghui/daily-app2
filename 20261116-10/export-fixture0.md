# Practice Curve — reviewed effort forecast

Synthetic continuous individual-unit time study. Same trained operator, equipment and method; sequence counts all repetitions, not batch totals.

6 originals = 6 approved + 0 held. Status: ready.

Next 4 units per procedure: curve 253.12604170523895 min; last-observation flat baseline 260 min. Scenario estimates, not measured future savings.

## Book binding
Time = 100.00000000000004 × unit^(-0.5000000000000002); doubling ratio 0.7071067811865475; in-sample log RMSE 1.2819751242557092e-16.

- Unit 17: 24.253562503633294 min (flat 25)
- Unit 18: 23.57022603955158 min (flat 25)
- Unit 19: 22.94157338705617 min (flat 25)
- Unit 20: 22.36067977499789 min (flat 25)

## Parcel packing
Time = 40 × unit^(0); doubling ratio 1; in-sample log RMSE 0.
No decreasing learning trend: observed time is flat or increasing.
- Unit 17: 40 min (flat 40)
- Unit 18: 40 min (flat 40)
- Unit 19: 40 min (flat 40)
- Unit 20: 40 min (flat 40)

## Every source and review
- w1: Stitching printed pages into book spines; original unit 1 / 100 min; reviewed binding / unit 1 / 100 min [approve]
  
- w2: Putting completed orders in protective shipping boxes; original unit 1 / 40 min; reviewed packing / unit 1 / 40 min [approve]
  
- w3: Stitched book spine assembly; original unit 4 / 50 min; reviewed binding / unit 4 / 50 min [approve]
  
- w4: Wrapping orders and sealing dispatch cartons; original unit 4 / 40 min; reviewed packing / unit 4 / 40 min [approve]
  
- w5: Binding pages into sewn books; original unit 16 / 25 min; reviewed binding / unit 16 / 25 min [approve]
  
- w6: Boxing finished customer parcels for shipping; original unit 16 / 40 min; reviewed packing / unit 16 / 40 min [approve]
  

## Before using
- [ ] Verify same operator, method and complete repetition sequence. Individual-unit times only, not cumulative averages or batch totals.
- [ ] Check residuals, fatigue, setup, interruptions and forecast range.
- [ ] No uncertainty interval, causal learning claim, capacity schedule or labor commitment. Validate on future observations.
