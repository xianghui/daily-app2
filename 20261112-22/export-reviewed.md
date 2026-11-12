# Cash Estuary working-capital worksheet

REVIEWED scenario; supplied assumptions, not a forecast.

- ar opening: 1 approved rows
- ar closing: 1 approved rows
- inventory opening: 1 approved rows
- inventory closing: 1 approved rows
- ap opening: 1 approved rows
- ap closing: 1 approved rows

## All balances
- s1 | "Unpaid customer invoices for furniture delivered on credit" | ar | opening | 6200000 cents | approve | "=SUM(1,2)\n\"quoted\", note"
- v1 | "Money still owed to timber suppliers for credit purchases" | ap | opening | 1000000 cents | approve | ""
- g1 | "Raw timber and finished chairs held in warehouse stock" | inventory | opening | 3000000 cents | approve | ""
- s2 | "Amounts due from customers who bought tables on account" | ar | closing | 10000000 cents | approve | ""
- v2 | "Outstanding vendor bills owed to our wood suppliers" | ap | closing | 3000000 cents | approve | ""
- g2 | "Wood materials and unsold furniture merchandise on hand" | inventory | closing | 5000000 cents | approve | ""

## Scenario
DSO 40.500, DIO 40.000, DPO 20.000 days.
Cash conversion 60.500 vs target 45.000 days.
Net working capital 10100000.000 vs target 7500000.000 cents.
Modeled release 2600000.000 vs inventory-only baseline 0.000 cents. Negative release means extra funding required.

Use one consistent currency and period; credit sales and credit purchases are approximated by supplied sales and COGS. Two-point average balances can miss seasonality. AI cannot establish ledger completeness, recoverability, business feasibility or accounting treatment. No payments or account changes.
