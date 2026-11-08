# Route Caliper — reviewed evaluation

Threshold: 0.6023 (calibration-only selection)

Holdout baseline: 3/4 correct.
Holdout selective routing: 2/2 correct; 0 errors; 2 abstentions. Precision 100.0%, coverage 50.0%.

Not a production accuracy guarantee.

- "C1" [abstain] predicted "renew" / gold "events" — "Can I keep this borrowed book for another week?"; note "Reviewed, \"quoted\"\nsecond line"
- "C2" [route] predicted "events" / gold "events" — "Book a seat at the author talk"; note ""
- "C3" [route] predicted "digital" / gold "digital" — "My ebook will not download in the app"; note ""
- "T1" [route] predicted "renew" / gold "renew" — "Renew my library book loan"; note ""
- "T2" [abstain] predicted "events" / gold "events" — "Sign me up for the writing workshop"; note ""
- "T3" [route] predicted "digital" / gold "digital" — "The audiobook app cannot play my downloaded title"; note ""
- "T4" [abstain] predicted "renew" / gold "" — "Repair the broken elevator"; note ""
