# Synthetic next-month shop demand · units

Planning reconciliation only, not improved forecast accuracy. Use the same horizon, additive units and disjoint exhaustive child groups. Positive weights are supplied adjustment penalties, not AI confidence or inferred reliability. Similarity cannot establish aggregation membership; verify every link. Fractional units are retained; rounded displayed figures may not sum exactly. No orders, staffing commitments or external changes.

## Reconciled forecast worksheet
{
  "weightedLoss": 163.63636363636365,
  "bottomUpLoss": 200,
  "rawIncoherence": 20,
  "coherentResidual": 0,
  "rawResiduals": [
    {
      "node": "all",
      "residual": -20
    },
    {
      "node": "food",
      "residual": 10
    },
    {
      "node": "home",
      "residual": 10
    }
  ],
  "activeFaces": 16,
  "leafCount": 4,
  "table": [
    {
      "id": "all",
      "text": "Total shop demand for all products",
      "parent": null,
      "raw": 120,
      "weight": 2,
      "reconciled": 123.63636363636363,
      "adjustment": 3.636363636363626,
      "bottomUp": 120
    },
    {
      "id": "food",
      "text": "Food and groceries demand",
      "parent": "all",
      "raw": 80,
      "weight": 1,
      "reconciled": 71.81818181818181,
      "adjustment": -8.181818181818187,
      "bottomUp": 70
    },
    {
      "id": "home",
      "text": "Home and household goods demand",
      "parent": "all",
      "raw": 60,
      "weight": 1,
      "reconciled": 51.81818181818181,
      "adjustment": -8.181818181818187,
      "bottomUp": 50
    },
    {
      "id": "bread",
      "text": "Bakery bread loaves demand",
      "parent": "food",
      "raw": 40,
      "weight": 1,
      "reconciled": 40.90909090909091,
      "adjustment": 0.9090909090909065,
      "bottomUp": 40
    },
    {
      "id": "fruit",
      "text": "Fresh fruit produce demand",
      "parent": "food",
      "raw": 30,
      "weight": 1,
      "reconciled": 30.90909090909091,
      "adjustment": 0.9090909090909101,
      "bottomUp": 30
    },
    {
      "id": "soap",
      "text": "Household cleaning soap demand",
      "parent": "home",
      "raw": 20,
      "weight": 1,
      "reconciled": 20.909090909090907,
      "adjustment": 0.9090909090909065,
      "bottomUp": 20
    },
    {
      "id": "towels",
      "text": "Bathroom towels demand",
      "parent": "home",
      "raw": 30,
      "weight": 1,
      "reconciled": 30.90909090909091,
      "adjustment": 0.9090909090909101,
      "bottomUp": 30
    }
  ]
}

## Every reviewed source estimate
### E1
All products combined shop demand forecast
AI: all; reviewed: all; forecast 120; weight 2; approve


### E2
Food groceries department forecast
AI: food; reviewed: food; forecast 80; weight 1; approve


### E3
Home household goods department forecast
AI: home; reviewed: home; forecast 60; weight 1; approve


### E4
Bakery bread loaves forecast
AI: bread; reviewed: bread; forecast 40; weight 1; approve


### E5
Fresh fruit produce forecast
AI: fruit; reviewed: fruit; forecast 30; weight 1; approve


### E6
Household cleaning soap forecast
AI: soap; reviewed: soap; forecast 20; weight 1; approve


### E7
Bathroom towel forecast
AI: towels; reviewed: towels; forecast 30; weight 1; approve


## Method
Real MiniLM embeddings match rough estimate labels to supplied hierarchy nodes. Deterministic reconciliation minimizes sum_i weight_i (S_i x - reviewed_i)^2 subject to leaf forecasts x >= 0. Enumerate at most 64 active faces and solve each free weighted least-squares system. All node totals derive from descendant leaves. Bottom-up baseline retains reviewed leaf forecasts and replaces parent totals. Lower adjustment loss is an optimization result, not measured predictive accuracy or saved time. Raw mismatch is maximum absolute parent-minus-children residual. Export full-precision fractional planning units; display rounding is not integer allocation.
