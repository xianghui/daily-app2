# Tank worksheet / SI inputs

SI base values only; no unit conversion. Dimensions are necessary, not sufficient: torque and energy share dimensions. No temperature, electrical, angular or affine units. Numeric-only baseline ignores review holds and dimensions. All formulas and original values are retained; this worksheet changes no files or equipment.

Numeric-only evaluable: 4; dimension-compatible: 2; mismatch: 2; blocked: 0.

## Formula audit
{"id":"capacity","target":"volume","expr":["mul","height","base"],"targetUnit":"m³","baseline":6,"baselineError":null,"status":"compatible","value":6,"actualDimension":[3,0,0],"trace":[{"path":"root","op":"mul","value":6,"dimension":[3,0,0]}],"reason":"Dimensions match the reviewed target; physical meaning is not proven."}
{"id":"contents","target":"mass","expr":["mul","material",["mul","height","base"]],"targetUnit":"kg","baseline":6000,"baselineError":null,"status":"compatible","value":6000,"actualDimension":[0,1,0],"trace":[{"path":"root.2","op":"mul","value":6,"dimension":[3,0,0]},{"path":"root","op":"mul","value":6000,"dimension":[0,1,0]}],"reason":"Dimensions match the reviewed target; physical meaning is not proven."}
{"id":"wrong_mass","target":"mass","expr":["div",["mul","height","base"],"material"],"targetUnit":"kg","baseline":0.006,"baselineError":null,"status":"mismatch","value":0.006,"actualDimension":[6,-1,0],"trace":[{"path":"root.1","op":"mul","value":6,"dimension":[3,0,0]},{"path":"root","op":"div","value":0.006,"dimension":[6,-1,0]}],"reason":"Output dimension m^6 kg^-1 s^0 differs from target m^0 kg^1 s^0"}
{"id":"wrong_energy","target":"energy","expr":["mul","material","duration"],"targetUnit":"J","baseline":60000,"baselineError":null,"status":"mismatch","value":60000,"actualDimension":[-3,1,1],"trace":[{"path":"root","op":"mul","value":60000,"dimension":[-3,1,1]}],"reason":"Output dimension m^-3 kg^1 s^1 differs from target m^2 kg^1 s^-2"}

## Complete reviewed variables
{"id":"height","quantity":"length","aiQuantity":"volume","evidence":[{"id":"volume","score":0.3238155118594358},{"id":"area","score":0.3031730643585143},{"id":"length","score":0.27252902346195196},{"id":"acceleration","score":0.210744807422137},{"id":"scalar","score":0.16997387533110908},{"id":"density","score":0.1630997559877125},{"id":"mass","score":0.15134315792022585},{"id":"force","score":0.1496908086809828},{"id":"energy","score":0.14811932285499405},{"id":"speed","score":0.1302536262829951},{"id":"time","score":0.12768057598682173},{"id":"power","score":0.07469832141383276}],"decision":"approve","value":2,"note":""}
{"id":"base","quantity":"area","aiQuantity":"area","evidence":[{"id":"area","score":0.5988990654458882},{"id":"volume","score":0.5026214522920982},{"id":"length","score":0.2249080245986026},{"id":"density","score":0.20837000871623582},{"id":"scalar","score":0.1976207649574532},{"id":"acceleration","score":0.13800210499529048},{"id":"time","score":0.13355104141694643},{"id":"mass","score":0.11652328413805621},{"id":"speed","score":0.1140380825897043},{"id":"energy","score":0.08262588589018743},{"id":"power","score":0.06148189265799587},{"id":"force","score":0.05340230649538436}],"decision":"approve","value":3,"note":""}
{"id":"material","quantity":"density","aiQuantity":"density","evidence":[{"id":"density","score":0.8080737743686539},{"id":"volume","score":0.5448680914905031},{"id":"mass","score":0.5278663270492839},{"id":"area","score":0.3486262412069653},{"id":"length","score":0.32251576385315645},{"id":"scalar","score":0.22957055399170553},{"id":"energy","score":0.21338664632491702},{"id":"acceleration","score":0.21160095146028954},{"id":"force","score":0.19788956055151183},{"id":"power","score":0.18112633264043046},{"id":"speed","score":0.15154223262264607},{"id":"time","score":0.11388663767149164}],"decision":"approve","value":1000,"note":""}
{"id":"duration","quantity":"time","aiQuantity":"time","evidence":[{"id":"time","score":0.41569065513752906},{"id":"volume","score":0.3545359319680695},{"id":"speed","score":0.2993957494412844},{"id":"acceleration","score":0.22086037352732202},{"id":"power","score":0.20020075487185113},{"id":"energy","score":0.15489754737123546},{"id":"density","score":0.1446058504173351},{"id":"area","score":0.11160322285289331},{"id":"mass","score":0.09765930457015948},{"id":"length","score":0.0927286299549513},{"id":"scalar","score":0.06533591559125068},{"id":"force","score":0.03065812493405774}],"decision":"approve","value":60,"note":""}

## Original worksheet
{
  "title": "Tank worksheet / SI inputs",
  "variables": [
    {
      "id": "height",
      "description": "Vertical height of the liquid column.",
      "value": 2
    },
    {
      "id": "base",
      "description": "Surface area of the rectangular tank floor.",
      "value": 3
    },
    {
      "id": "material",
      "description": "Mass density of the liquid, mass per cubic metre.",
      "value": 1000
    },
    {
      "id": "duration",
      "description": "Elapsed time taken to fill the tank.",
      "value": 60
    }
  ],
  "formulas": [
    {
      "id": "capacity",
      "target": "volume",
      "expr": [
        "mul",
        "height",
        "base"
      ]
    },
    {
      "id": "contents",
      "target": "mass",
      "expr": [
        "mul",
        "material",
        [
          "mul",
          "height",
          "base"
        ]
      ]
    },
    {
      "id": "wrong_mass",
      "target": "mass",
      "expr": [
        "div",
        [
          "mul",
          "height",
          "base"
        ],
        "material"
      ]
    },
    {
      "id": "wrong_energy",
      "target": "energy",
      "expr": [
        "mul",
        "material",
        "duration"
      ]
    }
  ]
}
