# Synthetic next-week help-desk workload · cases

Planning reconciliation only, not improved forecast accuracy. Use the same horizon, additive units and disjoint exhaustive child groups. Positive weights are supplied adjustment penalties, not AI confidence or inferred reliability. Similarity cannot establish aggregation membership; verify every link. Fractional units are retained; rounded displayed figures may not sum exactly. No orders, staffing commitments or external changes.

## Reconciled forecast worksheet
{
  "weightedLoss": 306.66666666666674,
  "bottomUpLoss": 1400,
  "rawIncoherence": 20,
  "coherentResidual": 0,
  "rawResiduals": [
    {
      "node": "all",
      "residual": 20
    },
    {
      "node": "tech",
      "residual": -10
    },
    {
      "node": "billing",
      "residual": 10
    }
  ],
  "activeFaces": 16,
  "leafCount": 4,
  "table": [
    {
      "id": "all",
      "text": "Total help desk workload across all support cases",
      "parent": null,
      "raw": 100,
      "weight": 3,
      "reconciled": 96,
      "adjustment": -4,
      "bottomUp": 80
    },
    {
      "id": "tech",
      "text": "Technical software support cases",
      "parent": "all",
      "raw": 45,
      "weight": 1,
      "reconciled": 56.33333333333334,
      "adjustment": 11.333333333333343,
      "bottomUp": 55
    },
    {
      "id": "billing",
      "text": "Billing payment support cases",
      "parent": "all",
      "raw": 35,
      "weight": 1,
      "reconciled": 39.66666666666666,
      "adjustment": 4.666666666666657,
      "bottomUp": 25
    },
    {
      "id": "login",
      "text": "Password login account access support cases",
      "parent": "tech",
      "raw": 35,
      "weight": 1,
      "reconciled": 35.66666666666667,
      "adjustment": 0.6666666666666714,
      "bottomUp": 35
    },
    {
      "id": "crash",
      "text": "Application software crash support cases",
      "parent": "tech",
      "raw": 20,
      "weight": 1,
      "reconciled": 20.66666666666667,
      "adjustment": 0.6666666666666714,
      "bottomUp": 20
    },
    {
      "id": "refund",
      "text": "Purchase refund support cases",
      "parent": "billing",
      "raw": 15,
      "weight": 1,
      "reconciled": 22.33333333333333,
      "adjustment": 7.333333333333329,
      "bottomUp": 15
    },
    {
      "id": "invoice",
      "text": "Invoice billing document support cases",
      "parent": "billing",
      "raw": 10,
      "weight": 1,
      "reconciled": 17.333333333333332,
      "adjustment": 7.333333333333332,
      "bottomUp": 10
    }
  ]
}

## Every reviewed source estimate
### T1
Combined help desk support case workload
AI: all; reviewed: all; forecast 100; weight 3; approve


### T2
Technical software support case forecast
AI: tech; reviewed: tech; forecast 45; weight 1; approve


### T3
Billing payment support case forecast
AI: billing; reviewed: billing; forecast 35; weight 1; approve


### T4
Password login account access problems
AI: login; reviewed: login; forecast 35; weight 1; approve


### T5
Application software crashes
AI: crash; reviewed: crash; forecast 20; weight 1; approve


### T6
Purchase refund requests
AI: refund; reviewed: refund; forecast 15; weight 1; approve


### T7
Invoice billing document requests
AI: invoice; reviewed: invoice; forecast 10; weight 1; approve


## Method
Real MiniLM embeddings match rough estimate labels to supplied hierarchy nodes. Deterministic reconciliation minimizes sum_i weight_i (S_i x - reviewed_i)^2 subject to leaf forecasts x >= 0. Enumerate at most 64 active faces and solve each free weighted least-squares system. All node totals derive from descendant leaves. Bottom-up baseline retains reviewed leaf forecasts and replaces parent totals. Lower adjustment loss is an optimization result, not measured predictive accuracy or saved time. Raw mismatch is maximum absolute parent-minus-children residual. Export full-precision fractional planning units; display rounding is not integer allocation.
