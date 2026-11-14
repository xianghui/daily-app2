# Drift Orchard — Synthetic room process readings

6 records retained; 0 held. All supplied readings approved; sampling assumptions not verified.

## Individuals / moving range worksheet
### Room temperature (°C)
n=3; mean=21.400000000000002; mean MR=2; individual limits=[16.080000000000002, 26.720000000000002]; MR upper=6.534; supplied spec=20 ± 3
Spec-only all within: false; individual signals: ; moving-range signals: 

### Relative humidity (% RH)
n=3; mean=50; mean MR=1.5; individual limits=[46.01, 53.99]; MR upper=4.9005; supplied spec=50 ± 10
Spec-only all within: true; individual signals: ; moving-range signals: 

## Complete reviewed register
- Original: {"id":"R1","sample":"D","description":"Air warmth measured by the room thermometer.","a":1,"b":20,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R1","sample":"D","description":"Air warmth measured by the room thermometer.","a":1,"b":20,"owner":"=Owner\n\"second\", line","kind":"temperature","proposed":"temperature","evidence":[{"id":"temperature","score":0.8974088804993378},{"id":"humidity","score":0.49454898709320877}],"decision":"approve","reviewNote":"=SUM(1,2)\n\"quoted\", verify units"}
- Original: {"id":"R2","sample":"D","description":"Moisture percentage in the indoor air.","a":1,"b":49,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R2","sample":"D","description":"Moisture percentage in the indoor air.","a":1,"b":49,"owner":"Measurement reviewer","kind":"humidity","proposed":"humidity","evidence":[{"id":"humidity","score":0.8499973124777676},{"id":"temperature","score":0.4434567739754275}],"decision":"approve","reviewNote":""}
- Original: {"id":"R3","sample":"E","description":"Thermometer reading for ambient air heat.","a":2,"b":20.2,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R3","sample":"E","description":"Thermometer reading for ambient air heat.","a":2,"b":20.2,"owner":"Measurement reviewer","kind":"temperature","proposed":"temperature","evidence":[{"id":"temperature","score":0.8136021837590812},{"id":"humidity","score":0.4957396647666747}],"decision":"approve","reviewNote":""}
- Original: {"id":"R4","sample":"E","description":"Relative dampness measured by the humidity probe.","a":2,"b":51,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R4","sample":"E","description":"Relative dampness measured by the humidity probe.","a":2,"b":51,"owner":"Measurement reviewer","kind":"humidity","proposed":"humidity","evidence":[{"id":"humidity","score":0.6700616469414356},{"id":"temperature","score":0.37090087536590466}],"decision":"approve","reviewNote":""}
- Original: {"id":"R5","sample":"F","description":"Ambient air temperature in the office.","a":3,"b":24,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R5","sample":"F","description":"Ambient air temperature in the office.","a":3,"b":24,"owner":"Measurement reviewer","kind":"temperature","proposed":"temperature","evidence":[{"id":"temperature","score":0.6139257215962808},{"id":"humidity","score":0.45801517451504214}],"decision":"approve","reviewNote":""}
- Original: {"id":"R6","sample":"F","description":"Water vapor saturation percentage indoors.","a":3,"b":50,"owner":"Measurement reviewer"}
  Reviewed: {"id":"R6","sample":"F","description":"Water vapor saturation percentage indoors.","a":3,"b":50,"owner":"Measurement reviewer","kind":"humidity","proposed":"humidity","evidence":[{"id":"humidity","score":0.6353777371753889},{"id":"temperature","score":0.3658964796682343}],"decision":"approve","reviewNote":""}

Exploratory same-series limits, not validated control limits, capability or certification. At least 20–25 representative observations and a stable baseline are normally needed for meaningful process monitoring. Sequence gaps and holds bridge adjacent retained observations. AI matches note meanings only. No external action.
