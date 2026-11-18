# Burst Ledger — reviewed token-bucket worksheet

Synthetic complete 30-second observation. Each whole job batch is accepted or rejected; rates are jobs/second, not durations or bandwidth.

Status: ready; 4 originals = 4 approved + 0 held.

Horizon: 30 seconds. Loss-share goal: 0.

- index: 9 units; 5 accepted + 4 rejected. Average 0.3 units/s versus refill 1; average-only check passes. Burst capacity 6; minimum capacity accepting all observed arrivals at this refill 8. Goal missed.
  - e @ 2s: 5 units; tokens 6 → 1; accept
  - f @ 3s: 4 units; tokens 2 → 2; reject
- video: 8 units; 3 accepted + 5 rejected. Average 0.26666666666666666 units/s versus refill 0.5; average-only check passes. Burst capacity 4; minimum capacity accepting all observed arrivals at this refill 5. Goal missed.
  - g @ 0s: 5 units; tokens 4 → 4; reject
  - h @ 10s: 3 units; tokens 4 → 1; accept

## Every source and review
- e: Searchable document ingestion and index generation work arriving; original 2s / 5 units; reviewed index 2s / 5 units [approve]
  
- f: Full text search index building task batch; original 3s / 4 units; reviewed index 3s / 4 units [approve]
  
- g: Movie clip encoding and video format conversion job batch; original 0s / 5 units; reviewed video 0s / 5 units [approve]
  
- h: Video reencoding and transcoding jobs arriving together; original 10s / 3 units; reviewed video 10s / 3 units [approve]
  

## Before using this worksheet
- [ ] Verify complete horizon, units, independent streams, initial full buckets and source order for simultaneous arrivals.
- [ ] Review AI identities; semantic similarity is not confidence or authorization.
- [ ] This is whole-batch policing, not queueing/shaping or a future workload forecast. Rejected batches consume no tokens.
- [ ] Capacity is the observed minimum at fixed refill, not a safe production recommendation. No service changes performed.
