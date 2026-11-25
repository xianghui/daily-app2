# Synthetic reserve release and second payout

6 originals retained; 0 held. EUR minor units.

READY — Both observed closing balances reconcile.

Computed available 200; reserved 1500. Sales less refunds baseline 4400; actual bank payout 5000; net after fees 4200. These are different quantities, not accuracy or savings.

Opening available 500 + opening reserved 2000 + sales 5000 - refunds 600 - fees 200 - payout 5000 = computed available 200 + computed reserved 1500.

Reserve moves are internal, not expenses or revenue. Verify completeness and source order. No ledger postings or financial advice.

## B1 — approve

Source: Previously locked rolling reserve funds released into the available merchant balance.

Original 1200; reviewed 1200; class release.

Review: =SUM(1,2)
Reviewed "reserve", <script> & 🧾

Trail: {"id":"B1","kind":"release","status":"approved","amount":"1200","availableBefore":"500","availableAfter":"1700","reservedBefore":"2000","reservedAfter":"800"}

## B2 — approve

Source: New customer card purchases credited as gross sales proceeds.

Original 5000; reviewed 5000; class sale.

Review: 

Trail: {"id":"B2","kind":"sale","status":"approved","amount":"5000","availableBefore":"1700","availableAfter":"6700","reservedBefore":"800","reservedAfter":"800"}

## B3 — approve

Source: Payment provider service charge deducted for processing transactions.

Original 200; reviewed 200; class fee.

Review: 

Trail: {"id":"B3","kind":"fee","status":"approved","amount":"200","availableBefore":"6700","availableAfter":"6500","reservedBefore":"800","reservedAfter":"800"}

## B4 — approve

Source: Buyer reimbursed for cancelled goods; purchase money returned to the customer.

Original 600; reviewed 600; class refund.

Review: 

Trail: {"id":"B4","kind":"refund","status":"approved","amount":"600","availableBefore":"6500","availableAfter":"5900","reservedBefore":"800","reservedAfter":"800"}

## B5 — approve

Source: Bank disbursement paid out to the merchant business account.

Original 5000; reviewed 5000; class payout.

Review: 

Trail: {"id":"B5","kind":"payout","status":"approved","amount":"5000","availableBefore":"5900","availableAfter":"900","reservedBefore":"800","reservedAfter":"800"}

## B6 — approve

Source: Processor places available funds into the restricted rolling security reserve.

Original 700; reviewed 700; class reserve.

Review: 

Trail: {"id":"B6","kind":"reserve","status":"approved","amount":"700","availableBefore":"900","availableAfter":"200","reservedBefore":"800","reservedAfter":"1500"}
