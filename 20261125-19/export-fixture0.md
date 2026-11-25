# Synthetic sales summary

10 originals preserved; 0 requests held. Never sum across grouping levels.

## regional / approve / rollup

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: ["North","Tea"] = 10; sources ["r1"]
- mask 0: ["North","Coffee"] = 20; sources ["r2"]
- mask 0: [null,"Tea"] = 5; sources ["r3"]
- mask 0: ["ALL","Tea"] = 7; sources ["r4"]
- mask 1: ["North",null] = 30; sources ["r1","r2"]
- mask 1: [null,null] = 5; sources ["r3"]
- mask 1: ["ALL",null] = 7; sources ["r4"]
- mask 3: [null,null] = 42; sources ["r1","r2","r3","r4"]

## cross-tab / approve / cube

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: ["North","Tea"] = 10; sources ["r1"]
- mask 0: ["South","Tea"] = 20; sources ["r2"]
- mask 0: [null,null] = 5; sources ["r3"]
- mask 1: ["North",null] = 10; sources ["r1"]
- mask 1: ["South",null] = 20; sources ["r2"]
- mask 1: [null,null] = 5; sources ["r3"]
- mask 2: [null,"Tea"] = 30; sources ["r1","r2"]
- mask 2: [null,null] = 5; sources ["r3"]
- mask 3: [null,null] = 35; sources ["r1","r2","r3"]

## details / approve / detail

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: ["North","Tea"] = 8; sources ["r1","r2"]
- mask 0: ["South","Coffee"] = 20; sources ["r3"]
