# Retry Ledger — reviewed policy worksheet

Budget: 70 extra calls in this observed cohort.
9 originals = 9 approved + 0 held.
Initial calls 240; initial successes 175.

## Exact budgeted replay
- image: cap 1 retries; 40 extra calls; 25 additional successes.
- mail: cap 2 retries; 30 extra calls; 18 additional successes.
- stock: cap 0 retries; 0 extra calls; 0 additional successes.
Total extra calls 70; recovered 43; final successes 218; remaining failures 22.

## Uniform one-retry baseline
Extra calls 65; recovered 36; within budget.
Difference 7 recovered requests (not a forecast).
Excluded operations: none.

## Complete originals and review
- i0: Making smaller product photos; original attempt/reached/succeeded 0/100/60; reviewed image 0/100/60 [approve]
  
- i1: Making smaller product photos; original attempt/reached/succeeded 1/40/25; reviewed image 1/40/25 [approve]
  
- i2: Making smaller product photos; original attempt/reached/succeeded 2/15/3; reviewed image 2/15/3 [approve]
  
- m0: Delivering purchase confirmation emails; original attempt/reached/succeeded 0/80/60; reviewed mail 0/80/60 [approve]
  
- m1: Delivering purchase confirmation emails; original attempt/reached/succeeded 1/20/10; reviewed mail 1/20/10 [approve]
  
- m2: Delivering purchase confirmation emails; original attempt/reached/succeeded 2/10/8; reviewed mail 2/10/8 [approve]
  
- s0: Checking warehouse inventory levels; original attempt/reached/succeeded 0/60/55; reviewed stock 0/60/55 [approve]
  
- s1: Checking warehouse inventory levels; original attempt/reached/succeeded 1/5/1; reviewed stock 1/5/1 [approve]
  
- s2: Checking warehouse inventory levels; original attempt/reached/succeeded 2/4/1; reviewed stock 2/4/1 [approve]
  

## Before changing a service
- [ ] Verify each chain uses the same complete closed cohort with no unobserved dropouts.
- [ ] Confirm every failure reached its next recorded attempt and successes were not retried.
- [ ] Review idempotency, side effects, deadlines, backoff and failure correlation outside this worksheet.
- [ ] Test any policy separately; workload and future recovery may differ.

Deterministic prefix replay assumes recorded outcomes would not change when other operations receive fewer retries. No per-call latency, cost differences, arrival timing, congestion effects or predictions. No API calls or configuration changes.
