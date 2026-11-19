# Field Loom — reviewed spatial worksheet

Synthetic same-session flat open workshop temperature sweep. All station positions in local meters; no wall/elevation model.

IDW is a spatial heuristic, not a physical model or measured value. Same unit/session and local planar meters required. No walls, elevation, time or uncertainty model. Extrapolation may be misleading; remeasure query points. Nearest baseline uses input-order ties. Leave-one-station-out MAE uses identical supported folds and excludes all readings of each held-out station; tiny retrospective samples do not establish future accuracy. Holds reduce coverage. No external actions.

4 readings preserved; 4 approved; 0 held. Unit: °C
IDW power 2; radius 100 m.
Matched leave-one-station-out folds 3; IDW MAE 4; nearest MAE 5.

## Query points
### center: Between bicycle and bread benches
(10, 5) m · IDW estimate — recheck on site
Estimate 25; nearest 25.
Evidence: [{"id":"sew","text":"Sewing table for mending clothing and jacket zippers","x":10,"y":0,"value":25,"recordIds":["r2"],"distance":5,"weight":0.7142857142857143},{"id":"bike","text":"Bicycle repair bench with puncture tools and inner tubes","x":0,"y":0,"value":20,"recordIds":["r1","r4"],"distance":11.180339887498949,"weight":0.14285714285714285},{"id":"bread","text":"Bread baking counter for kneading sourdough loaves","x":20,"y":0,"value":30,"recordIds":["r3"],"distance":11.180339887498949,"weight":0.14285714285714285}]

### near: Near bicycle bench
(2, 0) m · IDW estimate — recheck on site
Estimate 20.40559942569993; nearest 20.
Evidence: [{"id":"bike","text":"Bicycle repair bench with puncture tools and inner tubes","x":0,"y":0,"value":20,"recordIds":["r1","r4"],"distance":2,"weight":0.9303661162957645},{"id":"sew","text":"Sewing table for mending clothing and jacket zippers","x":10,"y":0,"value":25,"recordIds":["r2"],"distance":8,"weight":0.05814788226848528},{"id":"bread","text":"Bread baking counter for kneading sourdough loaves","x":20,"y":0,"value":30,"recordIds":["r3"],"distance":18,"weight":0.011486001435750178}]

### exact: Sewing station check
(10, 0) m · measured coordinate
Estimate 25; nearest 25.
Evidence: [{"id":"sew","text":"Sewing table for mending clothing and jacket zippers","x":10,"y":0,"value":25,"recordIds":["r2"],"distance":0,"weight":1}]

## Complete original and review audit
### r1
Cycle tyre patching workbench
Original 20; reviewed 20 °C
approve; station bike; proposal bike


### r2
Clothing mending and broken zip table
Original 25; reviewed 25 °C
approve; station sew; proposal sew


### r3
Sourdough dough kneading bread counter
Original 30; reviewed 30 °C
approve; station bread; proposal bread


### r4
Bicycle puncture repair bench
Original 20; reviewed 20 °C
approve; station bike; proposal bike


## Original station register, pooled means and cross-validation
{
  "register": [
    {
      "id": "bike",
      "text": "Bicycle repair bench with puncture tools and inner tubes",
      "x": 0,
      "y": 0
    },
    {
      "id": "sew",
      "text": "Sewing table for mending clothing and jacket zippers",
      "x": 10,
      "y": 0
    },
    {
      "id": "bread",
      "text": "Bread baking counter for kneading sourdough loaves",
      "x": 20,
      "y": 0
    }
  ],
  "stations": [
    {
      "id": "bike",
      "text": "Bicycle repair bench with puncture tools and inner tubes",
      "x": 0,
      "y": 0,
      "value": 20,
      "recordIds": [
        "r1",
        "r4"
      ]
    },
    {
      "id": "sew",
      "text": "Sewing table for mending clothing and jacket zippers",
      "x": 10,
      "y": 0,
      "value": 25,
      "recordIds": [
        "r2"
      ]
    },
    {
      "id": "bread",
      "text": "Bread baking counter for kneading sourdough loaves",
      "x": 20,
      "y": 0,
      "value": 30,
      "recordIds": [
        "r3"
      ]
    }
  ],
  "validation": [
    {
      "id": "bike",
      "observed": 20,
      "predicted": 26,
      "baseline": 25,
      "error": 6,
      "baselineError": 5
    },
    {
      "id": "sew",
      "observed": 25,
      "predicted": 25,
      "baseline": 20,
      "error": 0,
      "baselineError": 5
    },
    {
      "id": "bread",
      "observed": 30,
      "predicted": 24,
      "baseline": 25,
      "error": 6,
      "baselineError": 5
    }
  ]
}