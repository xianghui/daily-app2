# Synthetic shop weekly settlement

5 originals retained; 0 held. USD minor units.

READY — Both observed closing balances reconcile.

Computed available 0; reserved 1000. Sales less refunds baseline 8000; actual bank payout 6700; net after fees 7700. These are different quantities, not accuracy or savings.

Opening available 0 + opening reserved 0 + sales 10000 - refunds 2000 - fees 300 - payout 6700 = computed available 0 + computed reserved 1000.

Reserve moves are internal, not expenses or revenue. Verify completeness and source order. No ledger postings or financial advice.

## A1 — approve

Source: Gross card payments from customers purchasing goods in the shop.

Original 10000; reviewed 10000; class sale.

Review: 

Trail: {"id":"A1","kind":"sale","status":"approved","amount":"10000","availableBefore":"0","availableAfter":"10000","reservedBefore":"0","reservedAfter":"0"}

## A2 — approve

Source: Refund sent back to a customer who returned a purchase.

Original 2000; reviewed 2000; class refund.

Review: 

Trail: {"id":"A2","kind":"refund","status":"approved","amount":"2000","availableBefore":"10000","availableAfter":"8000","reservedBefore":"0","reservedAfter":"0"}

## A3 — approve

Source: Card processing commission charged by the payment provider.

Original 300; reviewed 300; class fee.

Review: 

Trail: {"id":"A3","kind":"fee","status":"approved","amount":"300","availableBefore":"8000","availableAfter":"7700","reservedBefore":"0","reservedAfter":"0"}

## A4 — approve

Source: Available merchant funds withheld into the locked rolling security reserve.

Original 1000; reviewed 1000; class reserve.

Review: 

Trail: {"id":"A4","kind":"reserve","status":"approved","amount":"1000","availableBefore":"7700","availableAfter":"6700","reservedBefore":"0","reservedAfter":"1000"}

## A5 — approve

Source: Merchant payout transferred from the processor balance to the business bank account.

Original 6700; reviewed 6700; class payout.

Review: 

Trail: {"id":"A5","kind":"payout","status":"approved","amount":"6700","availableBefore":"6700","availableAfter":"0","reservedBefore":"1000","reservedAfter":"1000"}
