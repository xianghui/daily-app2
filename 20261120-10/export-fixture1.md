# Overlap Ledger — reviewed audit

Synthetic independent website defect lists for the same frozen build. Each row is one distinct defect.

Exploratory two-list capture–recapture, not an assurance of completeness. Requires a closed unchanged issue population, independent inspections, roughly equal detectability, correct identity links and no duplicates within either list. Holds change the analyzed population. Positive dependence can underestimate unseen issues; heterogeneous detection and mistaken links can bias either direction. Similar text is not proof of the same physical issue. Never automatically close, merge or send issues.

## Counts and exploratory estimate
{
  "n1": 3,
  "n2": 4,
  "overlap": 3,
  "observed": 4,
  "estimatedTotal": 4,
  "estimatedUnseen": 0,
  "reason": "Chapman point estimate only; not a guarantee or a confidence interval."
}

## Verified overlaps
- a1 ↔ b1
- a2 ↔ b2
- a3 ↔ b3

## Reinspection checklist — observed in one list only
- [ ] Verify b4

## All originals and reviews
### a1 / first
The password reset email link opens an expired token error page
Counterpart: none; approve


### a2 / first
The shopping cart total ignores the discount coupon
Counterpart: none; approve


### a3 / first
The contact form submit button has no keyboard focus indicator
Counterpart: none; approve


### b1 / second
Resetting a forgotten password leads to a token expired error
Counterpart: a1; approve


### b2 / second
Cart price does not apply the promotional voucher discount
Counterpart: a2; approve


### b3 / second
The contact form send button shows no visible focus when tabbing
Counterpart: a3; approve


### b4 / second
The mobile navigation menu cannot be closed
Counterpart: none; approve

