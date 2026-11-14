# Uptime Orchard — Synthetic cold-room telemetry worksheet

Complete supplied topology. Verify independence and coverage.
Scenario assumptions only: independent component states and groups, identical observation horizon, perfect switching and no shared power/network/control dependency. Not a certification, SLA forecast or equipment instruction.
All-components-required baseline: 36.2880%. Reviewed k-of-n series system: 88.3960%. Difference: 52.1080 percentage points.
"Temperature sensing": need 2 of 3; group availability 90.2000%.
"Alert reporting": need 1 of 2; group availability 98.0000%.

## Perfect-component sensitivity (one at a time, no costs)
"S3": theoretical gain 7.6440 percentage points.
"S2": theoretical gain 6.6640 percentage points.
"S1": theoretical gain 3.7240 percentage points.
"R1": theoretical gain 1.8040 percentage points.
"R2": theoretical gain 1.8040 percentage points.

## Complete review register
- [x] "S1" / "sensing" / availability 0.9 / "=Owner\n\"second\", line" / "=SUM(1,2)\n\"quoted\", investigate"
- [x] "R1" / "reporting" / availability 0.8 / "Reliability reviewer" / ""
- [x] "S2" / "sensing" / availability 0.8 / "Reliability reviewer" / ""
- [x] "R2" / "reporting" / availability 0.9 / "Reliability reviewer" / ""
- [x] "S3" / "sensing" / availability 0.7 / "Reliability reviewer" / ""