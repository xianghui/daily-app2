# Synthetic workshop material usage

6 originals preserved; 0 requests held. Never sum across grouping levels.

## usage / approve / detail

Only grouped details for each workshop and material pair, without subtotals.

Reviewer: 

- mask 0: ["Clay","Glaze"] = 8; sources ["r1","r2"]
- mask 0: ["Wood","Oil"] = 4; sources ["r3"]

## department / approve / rollup

Hierarchical report of workshop material details followed by workshop subtotals and overall grand total.

Reviewer: 

- mask 0: [null,"Oil"] = 8; sources ["r1"]
- mask 0: ["ALL","Oil"] = 2; sources ["r2"]
- mask 0: ["Wood",null] = 6; sources ["r3"]
- mask 1: [null,null] = 8; sources ["r1"]
- mask 1: ["ALL",null] = 2; sources ["r2"]
- mask 1: ["Wood",null] = 6; sources ["r3"]
- mask 3: [null,null] = 16; sources ["r1","r2","r3"]

## empty-cube / approve / cube

All combinations: separate workshop totals, separate material totals, joint details and grand total.

Reviewer: 

- mask 3: [null,null] = 0; sources []
