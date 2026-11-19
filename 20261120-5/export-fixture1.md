# Field Loom — reviewed spatial worksheet

Synthetic same-session moisture readings on a flat open garden plot, same instrument scale, no soil-barrier model. Values are illustrative.

IDW is a spatial heuristic, not a physical model or measured value. Same unit/session and local planar meters required. No walls, elevation, time or uncertainty model. Extrapolation may be misleading; remeasure query points. Nearest baseline uses input-order ties. Leave-one-station-out MAE uses identical supported folds and excludes all readings of each held-out station; tiny retrospective samples do not establish future accuracy. Holds reduce coverage. No external actions.

4 readings preserved; 4 approved; 0 held. Unit: sensor units
IDW power 2; radius 100 m.
Matched leave-one-station-out folds 3; IDW MAE 16; nearest MAE 20.

## Query points
### middle: Next to flowering bed
(10, 5) m · IDW estimate — recheck on site
Estimate 40; nearest 40.
Evidence: [{"id":"rose","text":"Rose flower garden bed with fragrant pink blossoms","x":10,"y":0,"value":40,"recordIds":["g3"],"distance":5,"weight":0.7142857142857143},{"id":"tomato","text":"Tomato vegetable growing bed with red tomatoes on vines","x":0,"y":0,"value":20,"recordIds":["g2","g4"],"distance":11.180339887498949,"weight":0.14285714285714285},{"id":"herb","text":"Culinary herb bed growing basil rosemary and thyme","x":20,"y":0,"value":60,"recordIds":["g1"],"distance":11.180339887498949,"weight":0.14285714285714285}]

### near: Near tomato plot
(2, 0) m · IDW estimate — recheck on site
Estimate 21.622397702799713; nearest 20.
Evidence: [{"id":"tomato","text":"Tomato vegetable growing bed with red tomatoes on vines","x":0,"y":0,"value":20,"recordIds":["g2","g4"],"distance":2,"weight":0.9303661162957645},{"id":"rose","text":"Rose flower garden bed with fragrant pink blossoms","x":10,"y":0,"value":40,"recordIds":["g3"],"distance":8,"weight":0.05814788226848528},{"id":"herb","text":"Culinary herb bed growing basil rosemary and thyme","x":20,"y":0,"value":60,"recordIds":["g1"],"distance":18,"weight":0.011486001435750178}]

### far: Unsupported far plot: remeasure
(500, 500) m · unsupported — take measurements
Estimate unavailable; nearest unavailable.
Evidence: []

## Complete original and review audit
### g1
Basil and rosemary kitchen herbs patch
Original 60; reviewed 60 sensor units
approve; station herb; proposal herb


### g2
Vegetable tomato vine growing area
Original 20; reviewed 20 sensor units
approve; station tomato; proposal tomato


### g3
Pink fragrant rose flowering border
Original 40; reviewed 40 sensor units
approve; station rose; proposal rose


### g4
Red tomato plants on climbing vines
Original 20; reviewed 20 sensor units
approve; station tomato; proposal tomato


## Original station register, pooled means and cross-validation
{
  "register": [
    {
      "id": "tomato",
      "text": "Tomato vegetable growing bed with red tomatoes on vines",
      "x": 0,
      "y": 0
    },
    {
      "id": "rose",
      "text": "Rose flower garden bed with fragrant pink blossoms",
      "x": 10,
      "y": 0
    },
    {
      "id": "herb",
      "text": "Culinary herb bed growing basil rosemary and thyme",
      "x": 20,
      "y": 0
    }
  ],
  "stations": [
    {
      "id": "tomato",
      "text": "Tomato vegetable growing bed with red tomatoes on vines",
      "x": 0,
      "y": 0,
      "value": 20,
      "recordIds": [
        "g2",
        "g4"
      ]
    },
    {
      "id": "rose",
      "text": "Rose flower garden bed with fragrant pink blossoms",
      "x": 10,
      "y": 0,
      "value": 40,
      "recordIds": [
        "g3"
      ]
    },
    {
      "id": "herb",
      "text": "Culinary herb bed growing basil rosemary and thyme",
      "x": 20,
      "y": 0,
      "value": 60,
      "recordIds": [
        "g1"
      ]
    }
  ],
  "validation": [
    {
      "id": "tomato",
      "observed": 20,
      "predicted": 44,
      "baseline": 40,
      "error": 24,
      "baselineError": 20
    },
    {
      "id": "rose",
      "observed": 40,
      "predicted": 40,
      "baseline": 20,
      "error": 0,
      "baselineError": 20
    },
    {
      "id": "herb",
      "observed": 60,
      "predicted": 36,
      "baseline": 40,
      "error": 24,
      "baselineError": 20
    }
  ]
}