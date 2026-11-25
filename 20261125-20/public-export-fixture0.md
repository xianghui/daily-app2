# Synthetic customer follow-up

18 source + reference rows preserved; 0 requests held. No remote records changed.

## unanswered / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- r1 "a": EXCLUDE; reference IDs ["r1"]; baseline FALSE
- r2 "b": KEEP; reference IDs []; baseline UNKNOWN
- r3 "b": KEEP; reference IDs []; baseline UNKNOWN
- r4 null: KEEP; reference IDs []; baseline UNKNOWN
- r5 "": KEEP; reference IDs []; baseline UNKNOWN

## confirmed / approve / present

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- r1 "a": KEEP; reference IDs ["r1","r2"]; baseline TRUE
- r2 "b": EXCLUDE; reference IDs []; baseline UNKNOWN
- r3 null: EXCLUDE; reference IDs []; baseline UNKNOWN

## anonymous / approve / nullsafe

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- r1 null: EXCLUDE; reference IDs ["r1"]; baseline UNKNOWN
- r2 "x": KEEP; reference IDs []; baseline UNKNOWN
- r3 "a": EXCLUDE; reference IDs ["r2"]; baseline FALSE
