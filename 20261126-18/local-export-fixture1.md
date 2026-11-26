# Clearing Bridge

Studio reconciliation with unresolved difference — 2026-10-31

Statement 250000 + adjustments 2000 = 252000 minor units.
Cashbook 254000 + adjustments -3000 = 251000 minor units.
Unexplained difference (bank minus book): 1000.
All-to-books shortcut: bank 250000; book 253000; difference -3000. This is a computed comparison, not savings or proof of completeness.

## Two-sided trails
bank: S3; adjustment -7000; balance 243000 minor units.
bank: S4; adjustment 9000; balance 252000 minor units.
book: S1; adjustment -8000; balance 246000 minor units.
book: S2; adjustment 5000; balance 251000 minor units.

## Source audit

### S1
Original: Direct debit expense taken from the bank account and shown on the statement, missing from our cashbook.
Original amount: 8000; reviewed: 8000; charge; book adjustment -8000; approve.
Reviewer: 

### S2
Original: Customer direct deposit credited by the bank, not yet recorded in our cashbook as money received.
Original amount: 5000; reviewed: 5000; receipt; book adjustment 5000; approve.
Reviewer: 

### S3
Original: Issued cheque entered as a payment in the cashbook; the bank has not debited it yet because it remains outstanding.
Original amount: 7000; reviewed: 7000; outstanding; bank adjustment -7000; approve.
Reviewer: 

### S4
Original: Deposit recorded as cash received in the cashbook, still in transit and absent from bank statement credits.
Original amount: 9000; reviewed: 9000; transit; bank adjustment 9000; approve.
Reviewer: 

Draft only. Investigate unexplained differences and verify omissions/duplicates; this worksheet does not post adjustments.
