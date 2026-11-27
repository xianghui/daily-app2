# Synthetic gallery print run

REVIEWED PAPER-YIELD WORKSHEET

## art-prints · approve
Source: Glossy coated photographic paper for full color exhibition photographs
Stock: PHOTO; blank 210 × 297 mm; grain along any; quantity 90
Reviewer: 
Result: {
  "id": "art-prints",
  "status": "planned",
  "reason": "Best parallel-strip pattern under supplied grain and gutter constraints",
  "layout": {
    "yield": 5,
    "bands": [
      {
        "offset": 15,
        "count": 2,
        "w": 210,
        "h": 297,
        "rotated": false
      },
      {
        "offset": 317,
        "count": 2,
        "w": 210,
        "h": 297,
        "rotated": false
      },
      {
        "offset": 619,
        "count": 1,
        "w": 297,
        "h": 210,
        "rotated": true
      }
    ],
    "axis": "horizontal"
  },
  "sheets": 18,
  "spare": 0,
  "areaYield": 7,
  "areaSheets": 13
}

## edition-cards · approve
Source: Uncoated textured ivory cotton rag letterpress stationery cards
Stock: COTTON; blank 240 × 160 mm; grain along width; quantity 120
Reviewer: 
Result: {
  "id": "edition-cards",
  "status": "planned",
  "reason": "Best parallel-strip pattern under supplied grain and gutter constraints",
  "layout": {
    "yield": 9,
    "bands": [
      {
        "offset": 15,
        "count": 3,
        "w": 160,
        "h": 240,
        "rotated": true
      },
      {
        "offset": 260,
        "count": 3,
        "w": 160,
        "h": 240,
        "rotated": true
      },
      {
        "offset": 505,
        "count": 3,
        "w": 160,
        "h": 240,
        "rotated": true
      }
    ],
    "axis": "horizontal"
  },
  "sheets": 14,
  "spare": 6,
  "areaYield": 13,
  "areaSheets": 10
}

## Stock ledger
[
  {
    "id": "COTTON",
    "available": 100,
    "required": 14,
    "shortage": 0
  },
  {
    "id": "PHOTO",
    "available": 80,
    "required": 18,
    "shortage": 0
  },
  {
    "id": "KRAFT",
    "available": 90,
    "required": 0,
    "shortage": 0
  },
  {
    "id": "VELLUM",
    "available": 50,
    "required": 0,
    "shortage": 0
  }
]

## Summary
{
  "jobs": 2,
  "quantity": 210,
  "held": 0,
  "infeasible": 0,
  "sheets": 32,
  "areaSheets": 23,
  "shortage": 0,
  "areaOverestimates": 2,
  "manifestReady": true
}

Parallel homogeneous-strip family only, not unrestricted nesting. No press gripper, bleed, blade tolerance, spoilage, thickness or equipment checks. Each job uses separate whole sheets, no cross-job offcut reuse. Area-only baseline ignores gutter, grain and shape fit; not a feasible layout. Synthetic stocks, verify physical grain and test a cut.
