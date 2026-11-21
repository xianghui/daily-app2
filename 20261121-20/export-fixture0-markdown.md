# Synthetic maker evening

Scenario worksheet only. Probabilities are supplied assumptions, not AI predictions or personal reliability scores. Independent Bernoulli attendance; common travel/weather/household effects can invalidate the risk estimate. Never exceed physical or legal occupancy. No bookings, invitations or admissions are changed.

Capacity: 3; overflow limit: 0.2.
Proposed waitlist prefix: 2; expected attendees: 2.9000000000000004; overflow probability: 0.192; expected excess: 0.192.
Headcount-only baseline: 1 additions; overflow 0.
Mean-fill baseline: 2 additions; overflow 0.192.

## Every waitlist prefix
- Add 0: mean 1.8; overflow 0; allowed true.
- Add 1: mean 2.1; overflow 0; allowed true.
- Add 2: mean 2.9000000000000004; overflow 0.192; allowed true.
- Add 3: mean 3.2; overflow 0.35519999999999996; allowed false.

## Complete source review
### M1 · committed
Prepaid ticket for the hands-on maker workshop
AI profile: paid; reviewed: paid; supplied attendance assumption: 0.8; approve
Plan: included


### M2 · committed
Assigned event staff working the duty shift
AI profile: staff; reviewed: staff; supplied attendance assumption: 1; approve
Plan: included


### M3 · waitlist
Newsletter reader, tentative free drop-in interest signup
AI profile: interest; reviewed: interest; supplied attendance assumption: 0.3; approve
Plan: included


### M4 · waitlist
Paid advance admission ticket reservation
AI profile: paid; reviewed: paid; supplied attendance assumption: 0.8; approve
Plan: included


### M5 · waitlist
Free newsletter interest, maybe drop in
AI profile: interest; reviewed: interest; supplied attendance assumption: 0.3; approve
Plan: deferred


## Method & limits
Real MiniLM embeddings match short reservation-channel descriptions to organizer-defined profiles. Similarity is not confidence, truth, or a probability of attending. Human review is mandatory. Probabilities come from your supplied historical assumptions and can be edited individually. Do not use sensitive traits or infer personal reliability.
Deterministic Poisson-binomial convolution: P_new(k) = P_old(k)(1-p) + P_old(k-1)p. Overflow is P(attendees > capacity). Every source-order waitlist prefix is checked; the largest satisfying the supplied limit is proposed. This is NOT arbitrary subset selection or a guarantee of seats. Commitments are never removed. Headcount baseline adds up to the physical seat count; mean-fill adds while expected attendance <= capacity; neither baseline controls overflow probability.
Independent attendance, one seat per reservation, no parties, shared shocks, simultaneous sessions or walk-ins. Check probabilities, risk tolerance and on-site admission procedures separately. Held rows withhold the whole plan. Limits: 8 profiles, 32 reservations, 300 chars per description. Exports reflect the current applied review; JSON reimport restores originals only.
