# Reviewed release QA plan

Budget: 10 / 15 minutes. Semantic coverage: 2 / 3 changes (not execution evidence).

- [ ] T0 · Check homepage banner colors and fonts (4 min)
- [x] T1 · Complete a purchase using Visa payment details (6 min) — =One, "two" three
- [ ] T2 · Recover account access using the password reset link (5 min)
- [x] T3 · Verify inventory is reduced after a customer places an order (4 min)
- [ ] T4 · Search the product catalog by keyword (3 min)

## Change coverage
- C1: T1 — Customers can pay by credit card at checkout
- C2: GAP — write a test or review the threshold — Customers can reset a forgotten password by email
- C3: T3 — Warehouse inventory decreases when an order is placed