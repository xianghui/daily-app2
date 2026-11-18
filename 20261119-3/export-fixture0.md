# Burst Ledger — reviewed token-bucket worksheet

Synthetic complete 20-second observation. Counts are indivisible batches of requests; each independent stream starts with a full bucket at time zero.

Status: ready; 4 originals = 4 approved + 0 held.

Horizon: 20 seconds. Loss-share goal: 0.

- checkout: 16 units; 8 accepted + 8 rejected. Average 0.8 units/s versus refill 5; average-only check passes. Burst capacity 10; minimum capacity accepting all observed arrivals at this refill 16. Goal missed.
  - a @ 0s: 8 units; tokens 10 → 2; accept
  - b @ 0s: 8 units; tokens 2 → 2; reject
- image: 10 units; 10 accepted + 0 rejected. Average 0.5 units/s versus refill 2; average-only check passes. Burst capacity 10; minimum capacity accepting all observed arrivals at this refill 6. Goal met.
  - c @ 1s: 4 units; tokens 10 → 6; accept
  - d @ 5s: 6 units; tokens 10 → 4; accept

## Every source and review
- a: Online store payment checkout requests arriving together; original 0s / 8 units; reviewed checkout 0s / 8 units [approve]
  
- b: Store payment transaction request batch; original 0s / 8 units; reviewed checkout 0s / 8 units [approve]
  
- c: Catalog photo thumbnail download request batch; original 1s / 4 units; reviewed image 1s / 4 units [approve]
  
- d: Product photograph image retrieval requests; original 5s / 6 units; reviewed image 5s / 6 units [approve]
  

## Before using this worksheet
- [ ] Verify complete horizon, units, independent streams, initial full buckets and source order for simultaneous arrivals.
- [ ] Review AI identities; semantic similarity is not confidence or authorization.
- [ ] This is whole-batch policing, not queueing/shaping or a future workload forecast. Rejected batches consume no tokens.
- [ ] Capacity is the observed minimum at fixed refill, not a safe production recommendation. No service changes performed.
