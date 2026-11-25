# Synthetic workshop return reconciliation

13 source + reference rows preserved; 0 requests held. No remote records changed.

## nullable / approve / nullsafe

Null-safe absence report: missing keys in both equipment rosters are equal and count as a returned match. Retain only items with no match.

Reviewer: =SUM(1,2)
Reviewed "totals", <script> & 🍏

- r1 null: EXCLUDE; reference IDs ["r1"]; baseline UNKNOWN
- r2 "s1": EXCLUDE; reference IDs ["r2"]; baseline FALSE
- r3 "s2": KEEP; reference IDs []; baseline UNKNOWN
- r4 "s2": KEEP; reference IDs []; baseline UNKNOWN

## empty / approve / absent

Equipment absent from the returned roster needs follow-up. Missing identifiers never match another missing value; keep unknowns for investigation.

Reviewer: 

- r1 "t1": KEEP; reference IDs []; baseline TRUE
- r2 null: KEEP; reference IDs []; baseline TRUE

## returned / approve / present

Keep only equipment already present in the return roster with a known matching key. Missing identifiers never count as confirmed returns.

Reviewer: 

- r1 "s1": KEEP; reference IDs ["r1"]; baseline TRUE
- r2 "s2": EXCLUDE; reference IDs []; baseline FALSE
- r3 "s1": KEEP; reference IDs ["r1"]; baseline TRUE
- r4 null: EXCLUDE; reference IDs []; baseline UNKNOWN
