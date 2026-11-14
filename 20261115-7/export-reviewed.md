# Freight Weave transport worksheet
4 requests retained; 4 approved; 0 held.
Verify demand coverage.
Approved demand: 9 units.
Maximum-served, minimum variable-cost: 9 units / 195 cents.
Cheapest-lane-first: 6 units / 90 cents. Costs are not comparable as savings when served quantities differ.

## Lanes
- main → charge: 0 units × 10 cents; cap 6.
- main → wash: 3 units × 20 cents; cap 6.
- main → inflate: 3 units × 30 cents; cap 6.
- annex → charge: 3 units × 15 cents; cap 3.

## All requests
- W1: charge; approve; quantity 2; allocated 2; unmet 0.
  Owner: =Owner
line, "two"
  =SUM(1,2)
  "quoted", recheck
- W2: wash; approve; quantity 3; allocated 3; unmet 0.
  Owner: Wash operations
  
- W3: inflate; approve; quantity 3; allocated 3; unmet 0.
  Owner: Forecourt
  
- W4: charge; approve; quantity 1; allocated 1; unmet 0.
  Owner: Energy operations
  

Conditional single-commodity planning, not dispatch. Identical interchangeable units, variable linear lane costs only, no fixed charges, travel times or mixed products. Partial demand is assigned to requests in source order within each destination, not by urgency.