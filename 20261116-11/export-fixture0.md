# Rate Terrace — reviewed unit-rate worksheet

Synthetic quoted unit prices in USD. Same specification within each service. Quantity is the quoted batch size, weight is explicit review importance, not AI confidence.

6 originals = 6 approved + 0 held. Status: ready.

Weighted squared adjustment: PAVA 5; running-min baseline 16. Not a revenue or accuracy metric.

## Book binding
- Quantity 10: reviewed 12, fitted 13.5, baseline 12
- Quantity 50: reviewed 14, fitted 13.5, baseline 12
- Quantity 100: reviewed 9, fitted 9, baseline 9

## Parcel packing
- Quantity 10: reviewed 8, fitted 8, baseline 8
- Quantity 50: reviewed 7, fitted 8, baseline 7
- Quantity 100: reviewed 9, fitted 8, baseline 7

## Every source and review
- p1: Stitching printed pages into book spines; reviewed books / 10 / 12 / weight 1 [approve]
  
- p2: Putting completed orders in protective shipping boxes; reviewed parcels / 10 / 8 / weight 1 [approve]
  
- p3: Stitched book spine assembly; reviewed books / 50 / 14 / weight 3 [approve]
  
- p4: Wrapping orders and sealing dispatch cartons; reviewed parcels / 50 / 7 / weight 1 [approve]
  
- p5: Binding pages into sewn books; reviewed books / 100 / 9 / weight 1 [approve]
  
- p6: Boxing finished customer parcels for shipping; reviewed parcels / 100 / 9 / weight 1 [approve]
  

## Before use
- [ ] Confirm comparable specifications, currency and explicit weights.
- [ ] Fit applies only to supplied tiers; no interpolation/extrapolation or revenue optimum.
- [ ] Unrounded proposals, not published quotes. Verify rounding, margins and total-order price cliffs separately.
