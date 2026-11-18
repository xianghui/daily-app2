# Search Ladder — reviewed archive lookup worksheet

Synthetic resolved requests. Each requested document has exactly one authoritative repository. Costs are assumed minutes per attempted repository lookup, independent of order.

Status: ready; 3 originals = 3 approved + 0 held.

Observed cohort: 22 requests, 20 found and 2 exhaustive misses.

Assumed retrospective lookup effort: optimized 58 min versus current-order 124 min. Difference 66 min; not measured future savings.

## Stop-on-first-found search order
1. Shoot library [photos]: 1 min per lookup, 12 resolved requests; cumulative 1 min.
2. Billing archive [invoices]: 2 min per lookup, 6 resolved requests; cumulative 3 min.
3. Signed agreements [contracts]: 4 min per lookup, 2 resolved requests; cumulative 7 min.

## Every original and review
- s1: Signed customer service contract; original count 2; reviewed contracts / 2 requests [approve]
  
- s2: Studio product photography shots; original count 12; reviewed photos / 12 requests [approve]
  
- s3: Customer billing invoice receipts; original count 6; reviewed invoices / 6 requests [approve]
  

## Every repository and reviewed lookup cost
- contracts: Signed client contracts and legal service agreements; original 4 min; reviewed 4 min.
- photos: Photography image library of product photographs and studio shoots; original 1 min; reviewed 1 min.
- invoices: Paid invoices billing receipts and customer payment records; original 2 min; reviewed 2 min.

## Before using
- [ ] Verify each unique authoritative destination and complete closed cohort, including exhaustive misses.
- [ ] Verify fixed per-attempt costs and unchanged success distribution; no parallel lookup, prerequisites or multiple locations modeled.
- [ ] Reject irrelevant/negated semantic matches; cosine similarity is not correctness.
- [ ] This is retrospective scenario effort, not measured savings or a future guarantee. No files moved or searches performed.
