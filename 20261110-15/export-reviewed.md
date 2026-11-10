# Community café — Demand Loom

Quantities must be observed unconstrained demand in each item’s consistent stock unit, not revenue, mixed pack sizes, returns or stockout-censored sales. Dataset completeness is a human declaration: after confirmation absent item–week cells mean zero. Any held record blocks every forecast until resolved in the original input. AI only proposes item identity, never quantities, stock, dates or forecasts. Rolling-origin MAE compares last-week naive versus trailing-three-week average on the same weeks starting at week four; ties prefer naive. The lower in-sample error is exploratory model selection, not out-of-sample accuracy or a guarantee. Next-week target is the ceiling of the chosen forecast; replenishment subtracts declared on-hand and inbound arriving before that week. One-week horizon, no safety stock, lead-time, seasonality or service-level claims. This worksheet creates no orders.

## Next-week worksheet: 2026-11-16

- Roasted beverage beans: Naive; forecast 9.000, target 9; on-hand 4, inbound 1; replenish 4. Backtest MAE: naive 0.000, MA3 0.222.
- Leaf infusion sachets: Naive; forecast 16.000, target 16; on-hand 12, inbound 3; replenish 1. Backtest MAE: naive 2.000, MA3 4.000.

## Reviewed weekly series

- Roasted beverage beans: 2026-10-05 = 7; 2026-10-12 = 9; 2026-10-19 = 9; 2026-10-26 = 9; 2026-11-02 = 9; 2026-11-09 = 9
- Leaf infusion sachets: 2026-10-05 = 6; 2026-10-12 = 8; 2026-10-19 = 10; 2026-10-26 = 12; 2026-11-02 = 14; 2026-11-09 = 16

## Complete demand audit

- N1 [approve] Whole espresso roast for grinding at the coffee machine. → Roasted beverage beans; 2026-10-05: 7 units (original 2026-10-05: 9); =1+1 / Reviewed, "verified" 🪷
- N2 [approve] Whole espresso roast for grinding at the coffee machine. → Roasted beverage beans; 2026-10-12: 9 units (original 2026-10-12: 9); 
- N3 [approve] Whole espresso roast for grinding at the coffee machine. → Roasted beverage beans; 2026-10-19: 9 units (original 2026-10-19: 9); 
- N4 [approve] Whole espresso roast for grinding at the coffee machine. → Roasted beverage beans; 2026-10-26: 9 units (original 2026-10-26: 9); 
- N5 [approve] Whole espresso roast for grinding at the coffee machine. → Roasted beverage beans; 2026-11-02: 9 units (original 2026-11-02: 9); 
- N6 [approve] Whole espresso roast for grinding at the coffee machine. → Roasted beverage beans; 2026-11-09: 9 units (original 2026-11-09: 9); 
- N7 [approve] Individual pouches of dried tea leaves for steeping in mugs. → Leaf infusion sachets; 2026-10-05: 6 units (original 2026-10-05: 6); 
- N8 [approve] Individual pouches of dried tea leaves for steeping in mugs. → Leaf infusion sachets; 2026-10-12: 8 units (original 2026-10-12: 8); 
- N9 [approve] Individual pouches of dried tea leaves for steeping in mugs. → Leaf infusion sachets; 2026-10-19: 10 units (original 2026-10-19: 10); 
- N10 [approve] Individual pouches of dried tea leaves for steeping in mugs. → Leaf infusion sachets; 2026-10-26: 12 units (original 2026-10-26: 12); 
- N11 [approve] Individual pouches of dried tea leaves for steeping in mugs. → Leaf infusion sachets; 2026-11-02: 14 units (original 2026-11-02: 14); 
- N12 [approve] Individual pouches of dried tea leaves for steeping in mugs. → Leaf infusion sachets; 2026-11-09: 16 units (original 2026-11-09: 16); 
