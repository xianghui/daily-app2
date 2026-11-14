# Agreement Grove — Synthetic room instrument comparison

6 records retained; 0 held. All supplied pairs approved; source completeness and independence not verified.

## Descriptive B minus A agreement
### Room temperature (°C)
n=3; bias=1.1999999999999993; sample SD=0.1999999999999993; limits=[0.8080000000000007, 1.5919999999999979]; tolerance=±1
Bias-only within: false; full envelope within: false; observed pairs within: 1/3

### Relative humidity (% RH)
n=3; bias=2; sample SD=1; limits=[0.040000000000000036, 3.96]; tolerance=±5
Bias-only within: true; full envelope within: true; observed pairs within: 3/3

## Original definitions
{"id":"temperature","label":"Room temperature","description":"Air temperature in a room measured with a thermometer.","unit":"°C","tolerance":1}
{"id":"humidity","label":"Relative humidity","description":"Relative moisture content of indoor air from a humidity sensor.","unit":"% RH","tolerance":5}

## Complete reviewed register
- Original: {"id":"R1","sample":"D","description":"Air warmth measured by the room thermometer.","a":20,"b":21,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R1","sample":"D","description":"Air warmth measured by the room thermometer.","a":20,"b":21,"owner":"=Owner\n\"second\", line","kind":"temperature","proposed":"temperature","evidence":[{"id":"temperature","score":0.8974088804993378},{"id":"humidity","score":0.49454898709320877}],"decision":"approve","reviewNote":"=SUM(1,2)\n\"quoted\", verify units"}
- Original: {"id":"R2","sample":"D","description":"Moisture percentage in the indoor air.","a":40,"b":41,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R2","sample":"D","description":"Moisture percentage in the indoor air.","a":40,"b":41,"owner":"Measurement reviewer","kind":"humidity","proposed":"humidity","evidence":[{"id":"humidity","score":0.8499973124777676},{"id":"temperature","score":0.4434567739754275}],"decision":"approve","reviewNote":""}
- Original: {"id":"R3","sample":"E","description":"Thermometer reading for ambient air heat.","a":22,"b":23.2,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R3","sample":"E","description":"Thermometer reading for ambient air heat.","a":22,"b":23.2,"owner":"Measurement reviewer","kind":"temperature","proposed":"temperature","evidence":[{"id":"temperature","score":0.8136021837590812},{"id":"humidity","score":0.4957396647666747}],"decision":"approve","reviewNote":""}
- Original: {"id":"R4","sample":"E","description":"Relative dampness measured by the humidity probe.","a":50,"b":52,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R4","sample":"E","description":"Relative dampness measured by the humidity probe.","a":50,"b":52,"owner":"Measurement reviewer","kind":"humidity","proposed":"humidity","evidence":[{"id":"humidity","score":0.6700616469414356},{"id":"temperature","score":0.37090087536590466}],"decision":"approve","reviewNote":""}
- Original: {"id":"R5","sample":"F","description":"Ambient air temperature in the office.","a":24,"b":25.4,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R5","sample":"F","description":"Ambient air temperature in the office.","a":24,"b":25.4,"owner":"Measurement reviewer","kind":"temperature","proposed":"temperature","evidence":[{"id":"temperature","score":0.6139257215962808},{"id":"humidity","score":0.45801517451504214}],"decision":"approve","reviewNote":""}
- Original: {"id":"R6","sample":"F","description":"Water vapor saturation percentage indoors.","a":60,"b":63,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R6","sample":"F","description":"Water vapor saturation percentage indoors.","a":60,"b":63,"owner":"Measurement reviewer","kind":"humidity","proposed":"humidity","evidence":[{"id":"humidity","score":0.6353777371753889},{"id":"temperature","score":0.3658964796682343}],"decision":"approve","reviewNote":""}

Limits are bias ±1.96 sample SD, not confidence intervals or a certification. Small samples, nonnormal differences, dependence and magnitude-dependent error can mislead. No unit conversion or correction is performed. AI matches note meaning only. No external action.
