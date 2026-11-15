# Cost Current — reviewed inventory costing worksheet
6 originals retained; 6 approved; 0 held.
Approved movements only, zero opening stock, source-array sequence. Held movements retained but excluded. FIFO compared with perpetual moving-average cent allocations; neither is a recommendation or accounting posting.
Literal full-label/ID baseline: 0/6 descriptions exactly match. This is coverage, not accuracy.
FIFO issued: EUR 51.00; moving-average baseline issued: EUR 58.60; FIFO minus baseline: EUR -7.60. No tax, write-down, returns or currency conversion.

## Product reconciliation
- Potting soil: 10 received − 7 issued = 3 remaining; receipts 5800 cents = FIFO issued 3700 + remaining 2100; average issued 4060 + remaining 1740. FIFO layers [{"receiptId":"G3","units":3,"cents":2100}]
- Vegetable seeds: 20 received − 12 issued = 8 remaining; receipts 3000 cents = FIFO issued 1400 + remaining 1600; average issued 1800 + remaining 1200. FIFO layers [{"receiptId":"G5","units":8,"cents":1600}]

## Complete ordered movement audit
- G1: Bags of growing medium for potted plants
  soil / receipt / 6 units / receipt 3000 cents / approve. FIFO layer usage: []

  =SUM(1,2)
  "quoted", verify receipt
- G2: Packets for sowing carrots and lettuce
  seeds / receipt / 10 units / receipt 1000 cents / approve. FIFO layer usage: []

  
- G3: Extra bags of compost for garden pots
  soil / receipt / 4 units / receipt 2800 cents / approve. FIFO layer usage: []

  
- G4: Bags of potting mix sold to gardeners
  soil / issue / 7 units / receipt 0 cents / approve. FIFO layer usage: [{"receiptId":"G1","quantity":6,"cents":3000},{"receiptId":"G3","quantity":1,"cents":700}]

  
- G5: More seed packets for tomato planting
  seeds / receipt / 10 units / receipt 2000 cents / approve. FIFO layer usage: []

  
- G6: Vegetable seed packets sold for sowing
  seeds / issue / 12 units / receipt 0 cents / approve. FIFO layer usage: [{"receiptId":"G2","quantity":10,"cents":1000},{"receiptId":"G5","quantity":2,"cents":400}]

  