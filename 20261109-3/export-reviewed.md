# Invoice Moor — reconciliation

Planning aid, not payment authorization or fraud/tax/accounting verification. Received quantities are user-supplied; no source document authenticity checks. Review every semantic match. Totals exclude tax, discounts and freight unless entered as separate compatible lines.

Invoice total: €290.00. Linked 3/4; exceptions 1. Exact-description baseline links: 0.

## Received-order balances
- O-coffee: received 12, billed 3, over 0, remaining 9 kg — Roasted coffee beans for espresso brewing
- O-oat: received 20, billed 20, over 0, remaining 0 litre — Oat milk plant based dairy alternative
- O-cup: received 100, billed 80, over 0, remaining 20 each — Disposable paper takeaway coffee cups

## Every invoice line
- [ ] C1 Espresso roasted whole coffee beans → unresolved; €180.00 [exception] Held for review =1+1 Reviewed, "receipt"
- [x] C2 Barista oat beverage dairy free milk → O-oat; €44.00 [linked-checks-pass]  
- [x] C3 Paper cups for hot drinks to go → O-cup; €12.00 [linked-checks-pass]  
- [x] C4 Roasted espresso coffee beans → O-coffee; €54.00 [linked-checks-pass]  
