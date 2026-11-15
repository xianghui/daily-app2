# Quote Crossings — conversion worksheet

4 original quotes = 4 approved + 0 held.
Maximum 3 hops; no reversed quotes or repeated currencies.

## trip
1000 USD → GBP
Direct baseline: 740
Best supplied path: USD → EUR → GBP = 765; quote IDs q1, q2
Difference in target units: 25.00000000000002

## Round-trip consistency checks
- USD → EUR → GBP → USD: product 0.9945; not above one
- USD → GBP → USD: product 0.962; not above one

## All originals and reviews
- q1: Money used in the United States → Currency used in France; original rate 0.9; reviewed USD → EUR @ 0.9 [approve]
  
- q2: Money used in Germany → British pounds; original rate 0.85; reviewed EUR → GBP @ 0.85 [approve]
  
- q3: American dollars → United Kingdom currency; original rate 0.74; reviewed USD → GBP @ 0.74 [approve]
  
- q4: British sterling → United States currency; original rate 1.3; reviewed GBP → USD @ 1.3 [approve]
  

## Before using a quote
- [ ] Verify both currencies and the target-per-one-source direction.
- [ ] Confirm all quotes use the same time, size and availability conditions.
- [ ] Include proportional fees in net rates. Fixed fees and rounding require a separate quote.
- [ ] Investigate round-trip inconsistencies; these are not executable profit.

Illustrative supplied-rate arithmetic only, not live pricing, financial advice, guaranteed proceeds or a transaction. No quote is inverted automatically. Binary floating point, unrounded intermediate values.
