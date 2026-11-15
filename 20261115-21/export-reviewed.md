# Return Mosaic — reviewed cohort-return worksheet

Complete reviewed event set; completeness of real-world tracking is not established.

As of: 2026-12-01T00:00:00Z; return window: [7, 14) elapsed 24-hour days after earliest approved activation.
Fully observed: 1/2 (50.0%); naive all-activation rate: 1/3 (33.3%).
Immature: 1; accounts without activation: 1.

## Account follow-up worksheet
- a [returned] — Observed qualifying return; no follow-up suggested; window 2026-11-17T00:00:00.000Z to 2026-11-24T00:00:00.000Z; return evidence e2
- b [no-return] — Check tracking completeness before investigating non-return; window 2026-11-18T00:00:00.000Z to 2026-11-25T00:00:00.000Z; return evidence none
- c [immature] — Wait until complete window; do not classify as churn; window 2026-12-02T00:00:00.000Z to 2026-12-09T00:00:00.000Z; return evidence none
- orphan [no-start] — Reconcile missing activation / account identity; window null to null; return evidence none

## Every original and review
- e1: New reader checked out a first library book; original a / 2026-11-10T00:00:00Z → start / a / 2026-11-10T00:00:00Z [approve]
  =SUM(1,2)
"quoted", discuss
- e2: Reader came back to borrow another novel; original a / 2026-11-18T00:00:00Z → return / a / 2026-11-18T00:00:00Z [approve]
  
- e3: Member borrowed their first library volume; original b / 2026-11-11T00:00:00Z → start / b / 2026-11-11T00:00:00Z [approve]
  
- e4: Changed the postal address on the membership account; original b / 2026-11-20T00:00:00Z → other / b / 2026-11-20T00:00:00Z [approve]
  
- e5: New member checked out their first book; original c / 2026-11-25T00:00:00Z → start / c / 2026-11-25T00:00:00Z [approve]
  
- e6: Reader returned to borrow a second book; original c / 2026-11-29T00:00:00Z → return / c / 2026-11-29T00:00:00Z [approve]
  
- e7: Borrowed another novel on a repeat library visit; original orphan / 2026-11-19T00:00:00Z → return / orphan / 2026-11-19T00:00:00Z [approve]
  
- e8: First library book checkout by a new member; original a / 2026-11-11T00:00:00Z → start / a / 2026-11-11T00:00:00Z [approve]
  

No churn diagnosis, causal inference, forecast or outreach. Similarity is not confidence. Missing tracking and held events can bias both metrics.
