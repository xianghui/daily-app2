# Margin Press — reviewed publication worksheet

Library analyst publishing whole-credit activity allocations by branch.
Assumption: Synthetic nonnegative reporting quantities in one common unit. Integer totals have been approved independently; no change to underlying source measurements.

Controlled rounding is a publication transform, not correction of source measurements, statistical inference or privacy protection. Exact approved cells aggregate repeated records; absent cells are structural zero. Each published cell must be its exact floor or ceiling. Supplied row/column totals must be compatible rounded margins. Solver minimizes total absolute cell rounding error under those constraints; ties follow roster order. Independent-nearest baseline ignores margins and may have lower error but inconsistent totals. Holds remain in the audit and may make totals infeasible. Neural similarity is not confidence; inspect both axes. No uploads or ledger writes.

## Computed comparison
Independent nearest: 2 inconsistent margins. Controlled: 0 inconsistent margins.

## Complete table cells
children / books: exact 0.6; nearest 1; controlled 1; sources r1
children / digital: exact 0.6; nearest 1; controlled 0; sources r2
children / events: exact 1.8; nearest 2; controlled 2; sources r3
research / books: exact 1.4; nearest 1; controlled 1; sources r4
research / digital: exact 1.4; nearest 1; controlled 2; sources r5
research / events: exact 0.2; nearest 0; controlled 0; sources r6

## Required margins
Rows: children=3, research=3
Columns: books=2, digital=2, events=2

## All originals and reviews
### r1
Youth family children library / Printed books collection purchases
Original value: 0.6
Reviewed: children / books; 0.6; approve


### r2
Children family library branch / Online database digital access
Original value: 0.6
Reviewed: children / digital; 0.6; approve


### r3
Youth children branch / Public community reading event
Original value: 1.8
Reviewed: children / events; 1.8; approve


### r4
Research reference academic library / Print book acquisition
Original value: 1.4
Reviewed: research / books; 1.4; approve


### r5
Academic research library / Digital database subscriptions
Original value: 1.4
Reviewed: research / digital; 1.4; approve


### r6
Reference research branch / Community public events
Original value: 0.2
Reviewed: research / events; 0.2; approve

