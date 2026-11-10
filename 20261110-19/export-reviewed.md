# Resolution Tide — Workshop jobs

Exploratory Kaplan–Meier completion worksheet, not an SLA forecast or causal comparison. Open means right-censored at elapsed observation time, not a failure or zero duration. Independent, non-informative censoring and a common time origin are assumptions. No confidence intervals or automatic bias diagnosis; tiny cohorts are preliminary. No extrapolation past observed follow-up.

Unit: days; target horizon: 5

## Completion worksheet
### Bicycle servicing
Completed-only median: 4; censor-aware median: 6; estimated completion by horizon: 0.375

Time | At risk | Completed | Censored | Survival
---|---|---|---|---
3 | 6 | 1 | 1 | 0.8333333333333334
4 | 4 | 1 | 1 | 0.625
6 | 2 | 1 | 0 | 0.3125
8 | 1 | 0 | 1 | 0.3125

### Parcel dispatch
Completed-only median: 4; censor-aware median: 6; estimated completion by horizon: 0.375

Time | At risk | Completed | Censored | Survival
---|---|---|---|---
2 | 6 | 1 | 0 | 0.8333333333333334
3 | 5 | 0 | 1 | 0.8333333333333334
4 | 4 | 1 | 1 | 0.625
6 | 2 | 1 | 0 | 0.3125
8 | 1 | 0 | 1 | 0.3125

## Complete work-item audit
- R00 | approve | A | 3 | complete | The rider brought a squeaky two-wheeler for brake adjustment. | =1+1 / Reviewed, "verified" 🪷
- R01 | approve | A | 3 | open | A commuter asked to replace the worn chain on her bike. | 
- R02 | approve | A | 4 | complete | The customer needed the cycle gears tuned. | 
- R03 | approve | A | 4 | open | The mechanic was asked to straighten a buckled bicycle wheel. | 
- R04 | approve | A | 6 | complete | A cyclist requested a punctured tyre repair. | 
- R05 | approve | A | 8 | open | The workshop received a pedal bike with loose spokes. | 
- R10 | approve | B | 2 | complete | The shop boxed an order for courier collection. | 
- R11 | approve | B | 3 | open | A warehouse worker prepared shipping labels for outgoing boxes. | 
- R12 | approve | B | 4 | complete | The customer order awaited wrapping and courier pickup. | 
- R13 | approve | B | 4 | open | The online order needed packing before postal collection. | 
- R14 | approve | B | 6 | complete | A shipment was queued for labelling and handover to the carrier. | 
- R15 | approve | B | 8 | open | The dispatch team received a customer box for mailing. | 
