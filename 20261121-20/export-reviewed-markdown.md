# Synthetic library creative lab

Scenario worksheet only. Probabilities are supplied assumptions, not AI predictions or personal reliability scores. Independent Bernoulli attendance; common travel/weather/household effects can invalidate the risk estimate. Never exceed physical or legal occupancy. No bookings, invitations or admissions are changed.

Capacity: 2; overflow limit: 0.15.
Proposed waitlist prefix: 1; expected attendees: 1.2; overflow probability: 0; expected excess: 0.
Headcount-only baseline: 1 additions; overflow 0.
Mean-fill baseline: 2 additions; overflow 0.16000000000000003.

## Every waitlist prefix
- Add 0: mean 1; overflow 0; allowed true.
- Add 1: mean 1.2; overflow 0; allowed true.
- Add 2: mean 2; overflow 0.16000000000000003; allowed false.
- Add 3: mean 2.2; overflow 0.2960000000000001; allowed false.

## Complete source review
### L1 · committed
Confirmed volunteer crew, working the event duty shift
AI profile: crew; reviewed: crew; supplied attendance assumption: 1; approve
Plan: included
=SUM(1,2)
"reviewer", verify channel

### L2 · waitlist
Free interest mailing list signup, might drop in
AI profile: tentative; reviewed: tentative; supplied attendance assumption: 0.2; approve
Plan: included


### L3 · waitlist
Prepaid workshop registration, paid advance ticket
AI profile: ticket; reviewed: ticket; supplied attendance assumption: 0.8; approve
Plan: deferred


### L4 · waitlist
Tentative free mailing list interest, maybe attend
AI profile: tentative; reviewed: tentative; supplied attendance assumption: 0.2; approve
Plan: deferred


## Method & limits
Real MiniLM embeddings match short reservation-channel descriptions to organizer-defined profiles. Similarity is not confidence, truth, or a probability of attending. Human review is mandatory. Probabilities come from your supplied historical assumptions and can be edited individually. Do not use sensitive traits or infer personal reliability.
Deterministic Poisson-binomial convolution: P_new(k) = P_old(k)(1-p) + P_old(k-1)p. Overflow is P(attendees > capacity). Every source-order waitlist prefix is checked; the largest satisfying the supplied limit is proposed. This is NOT arbitrary subset selection or a guarantee of seats. Commitments are never removed. Headcount baseline adds up to the physical seat count; mean-fill adds while expected attendance <= capacity; neither baseline controls overflow probability.
Independent attendance, one seat per reservation, no parties, shared shocks, simultaneous sessions or walk-ins. Check probabilities, risk tolerance and on-site admission procedures separately. Held rows withhold the whole plan. Limits: 8 profiles, 32 reservations, 300 chars per description. Exports reflect the current applied review; JSON reimport restores originals only.
