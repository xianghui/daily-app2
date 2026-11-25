# Synthetic withdrawal and refill

5 originals retained; 0 held. Currency label EUR; amounts are integer minor units. Opening 200000.

Time-weighted return 47/250; net-gain/opening shortcut 1/10. Closing 180000; deposits 80000; withdrawals 120000; net gain 20000.

No annualization, investment recommendation, forecast, AI confidence or measured time savings. Exact supplied pre-flow marks and completeness must be verified.

## B1 — approve

Source: Entire investment account valued at market prices just before cash is removed.

Original day 5, amount 220000; reviewed day 5, amount 220000; event valuation

Review: =SUM(1,2)
Reviewed "cash", <script> & 🧾

## B2 — approve

Source: Investor withdrew cash from the portfolio to pay for an outside purchase.

Original day 5, amount 120000; reviewed day 5, amount 120000; event withdrawal

Review: 

## B3 — approve

Source: Total portfolio market value measured immediately before the next cash addition.

Original day 12, amount 120000; reviewed day 12, amount 120000; event valuation

Review: 

## B4 — approve

Source: Additional investor capital transferred into the account from outside savings.

Original day 12, amount 80000; reviewed day 12, amount 80000; event contribution

Review: 

## B5 — approve

Source: End-of-period market valuation of the complete portfolio holdings.

Original day 20, amount 180000; reviewed day 20, amount 180000; event valuation

Review: 

## Arithmetic trace

B1 / approved: valuation; capital 200000 → 220000; interval from opening; factor 11/10; cumulative factor 11/10

B2 / approved: withdrawal; capital 220000 → 100000; interval from —; factor external flow, not return; cumulative factor 11/10

B3 / approved: valuation; capital 100000 → 120000; interval from B2; factor 6/5; cumulative factor 33/25

B4 / approved: contribution; capital 120000 → 200000; interval from —; factor external flow, not return; cumulative factor 33/25

B5 / approved: valuation; capital 200000 → 180000; interval from B4; factor 9/10; cumulative factor 297/250
