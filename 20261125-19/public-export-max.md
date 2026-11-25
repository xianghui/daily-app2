# Maximum batch

960 originals preserved; 0 requests held. Never sum across grouping levels.

## req-0 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-1 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-2 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-3 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-4 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-5 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-6 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-7 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-8 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-9 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-10 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-11 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-12 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-13 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-14 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-15 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-16 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-17 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-18 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-19 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-20 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-21 / approve / detail

Hierarchical regional sales report: product detail inside each region, region subtotals and a grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]

## req-22 / approve / rollup

All combinations of sales totals: every region/product pair, each region total, each product total, and overall total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]

## req-23 / approve / cube

Only group sales by the exact region and product pair. No subtotal levels and no grand total.

Reviewer: 

- mask 0: [null,"Tea"] = 15; sources ["id-0","id-15","id-30"]
- mask 0: ["ALL",null] = -16; sources ["id-1","id-16","id-31"]
- mask 0: ["North",""] = 17; sources ["id-2","id-17","id-32"]
- mask 0: ["quoted \"value\",\n🍏","Tea"] = -18; sources ["id-3","id-18","id-33"]
- mask 0: ["=FORMULA\nnext",null] = 19; sources ["id-4","id-19","id-34"]
- mask 0: [null,""] = -20; sources ["id-5","id-20","id-35"]
- mask 0: ["ALL","Tea"] = 21; sources ["id-6","id-21","id-36"]
- mask 0: ["North",null] = -22; sources ["id-7","id-22","id-37"]
- mask 0: ["quoted \"value\",\n🍏",""] = 23; sources ["id-8","id-23","id-38"]
- mask 0: ["=FORMULA\nnext","Tea"] = -24; sources ["id-9","id-24","id-39"]
- mask 0: [null,null] = -15; sources ["id-10","id-25"]
- mask 0: ["ALL",""] = 15; sources ["id-11","id-26"]
- mask 0: ["North","Tea"] = -15; sources ["id-12","id-27"]
- mask 0: ["quoted \"value\",\n🍏",null] = 15; sources ["id-13","id-28"]
- mask 0: ["=FORMULA\nnext",""] = -15; sources ["id-14","id-29"]
- mask 1: [null,null] = -20; sources ["id-0","id-5","id-10","id-15","id-20","id-25","id-30","id-35"]
- mask 1: ["ALL",null] = 20; sources ["id-1","id-6","id-11","id-16","id-21","id-26","id-31","id-36"]
- mask 1: ["North",null] = -20; sources ["id-2","id-7","id-12","id-17","id-22","id-27","id-32","id-37"]
- mask 1: ["quoted \"value\",\n🍏",null] = 20; sources ["id-3","id-8","id-13","id-18","id-23","id-28","id-33","id-38"]
- mask 1: ["=FORMULA\nnext",null] = -20; sources ["id-4","id-9","id-14","id-19","id-24","id-29","id-34","id-39"]
- mask 2: [null,"Tea"] = -21; sources ["id-0","id-3","id-6","id-9","id-12","id-15","id-18","id-21","id-24","id-27","id-30","id-33","id-36","id-39"]
- mask 2: [null,null] = -19; sources ["id-1","id-4","id-7","id-10","id-13","id-16","id-19","id-22","id-25","id-28","id-31","id-34","id-37"]
- mask 2: [null,""] = 20; sources ["id-2","id-5","id-8","id-11","id-14","id-17","id-20","id-23","id-26","id-29","id-32","id-35","id-38"]
- mask 3: [null,null] = -20; sources ["id-0","id-1","id-2","id-3","id-4","id-5","id-6","id-7","id-8","id-9","id-10","id-11","id-12","id-13","id-14","id-15","id-16","id-17","id-18","id-19","id-20","id-21","id-22","id-23","id-24","id-25","id-26","id-27","id-28","id-29","id-30","id-31","id-32","id-33","id-34","id-35","id-36","id-37","id-38","id-39"]
