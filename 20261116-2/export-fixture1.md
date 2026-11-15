# Retry Ledger — reviewed policy worksheet

Budget: 95 extra calls in this observed cohort.
6 originals = 6 approved + 0 held.
Initial calls 220; initial successes 140.

## Exact budgeted replay
- report: cap 0 retries; 0 extra calls; 0 additional successes.
- archive: cap 2 retries; 90 extra calls; 45 additional successes.
Total extra calls 90; recovered 45; final successes 185; remaining failures 35.

## Uniform one-retry baseline
Extra calls 80; recovered 28; within budget.
Difference 17 recovered requests (not a forecast).
Excluded operations: none.

## Complete originals and review
- r0: Creating PDF business reports; original attempt/reached/succeeded 0/120/90; reviewed report 0/120/90 [approve]
  
- r1: Creating PDF business reports; original attempt/reached/succeeded 1/30/18; reviewed report 1/30/18 [approve]
  
- r2: Creating PDF business reports; original attempt/reached/succeeded 2/12/9; reviewed report 2/12/9 [approve]
  
- a0: Transferring compressed backups to remote storage; original attempt/reached/succeeded 0/100/50; reviewed archive 0/100/50 [approve]
  
- a1: Transferring compressed backups to remote storage; original attempt/reached/succeeded 1/50/10; reviewed archive 1/50/10 [approve]
  
- a2: Transferring compressed backups to remote storage; original attempt/reached/succeeded 2/40/35; reviewed archive 2/40/35 [approve]
  

## Before changing a service
- [ ] Verify each chain uses the same complete closed cohort with no unobserved dropouts.
- [ ] Confirm every failure reached its next recorded attempt and successes were not retried.
- [ ] Review idempotency, side effects, deadlines, backoff and failure correlation outside this worksheet.
- [ ] Test any policy separately; workload and future recovery may differ.

Deterministic prefix replay assumes recorded outcomes would not change when other operations receive fewer retries. No per-call latency, cost differences, arrival timing, congestion effects or predictions. No API calls or configuration changes.
