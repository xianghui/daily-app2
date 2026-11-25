# Synthetic facilities cash application

DRAFT cash-application plan, not accounting advice or a posted transaction. Single supplied currency; integer cents. Payments processed in input order; invoices by oldest due date, then original order. Unapplied credit remains attached to its payment. Held cash is never allocated.

## Invoice balances
- I1 / A due 2026-10-02: original 25.00, applied 0.00, outstanding 25.00
- I2 / A due 2026-10-01: original 35.00, applied 30.00, outstanding 5.00
- I3 / B due 2026-10-03: original 70.00, applied 50.00, outstanding 20.00
- I4 / C due 2026-10-04: original 90.00, applied 90.00, outstanding 0.00

## Allocation lines
- P2 → I2 / A: 30.00
- P3 → I3 / B: 50.00
- P4 → I4 / C: 90.00

## Complete receipt audit
- P1 [hold] → A: Payment for mowing the lawn and trimming garden hedges.. Received 40.00; applied 0.00; credit 0.00; held 40.00. Note: =1+1 Reviewed, "held" 🪷
- P2 [approve] → A: Final payment for the landscaping work.. Received 30.00; applied 30.00; credit 0.00; held 0.00. Note: 
- P3 [approve] → B: Payment for repairing the office laptops.. Received 50.00; applied 50.00; credit 0.00; held 0.00. Note: 
- P4 [approve] → C: Payment for washing the building windows.. Received 90.00; applied 90.00; credit 0.00; held 0.00. Note: 
