# Quote Crossings — conversion worksheet

4 original quotes = 4 approved + 0 held.
Maximum 3 hops; no reversed quotes or repeated currencies.

## workshop
100000 JPY → AUD
Direct baseline: 950
Best supplied path: JPY → SGD → AUD = 990.0000000000001; quote IDs p1, p2
Difference in target units: 40.00000000000011

## Round-trip consistency checks
- JPY → SGD → AUD → JPY: product 1.0098; above one: check stale/fee/direction assumptions
- JPY → AUD → JPY: product 0.969; not above one

## All originals and reviews
- p1: Money used in Tokyo → Currency used in Singapore; original rate 0.009; reviewed JPY → SGD @ 0.009 [approve]
  =SUM(1,2)
"quoted", verify
- p2: Singaporean dollars → Money used in Sydney; original rate 1.1; reviewed SGD → AUD @ 1.1 [approve]
  
- p3: Japanese money → Australian money; original rate 0.0095; reviewed JPY → AUD @ 0.0095 [approve]
  
- p4: Australian currency → Money used in Japan; original rate 102; reviewed AUD → JPY @ 102 [approve]
  

## Before using a quote
- [ ] Verify both currencies and the target-per-one-source direction.
- [ ] Confirm all quotes use the same time, size and availability conditions.
- [ ] Include proportional fees in net rates. Fixed fees and rounding require a separate quote.
- [ ] Investigate round-trip inconsistencies; these are not executable profit.

Illustrative supplied-rate arithmetic only, not live pricing, financial advice, guaranteed proceeds or a transaction. No quote is inverted automatically. Binary floating point, unrounded intermediate values.
