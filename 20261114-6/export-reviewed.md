# Trace Current — Synthetic editorial event log

All 6 events retained; 0 held. 2 cases checked.
Literal-label baseline: 0/6 source notes contain their reviewed activity label. Not an accuracy measure.
Threshold: 90 minutes.

## Case X
draft → review → publish
Elapsed: 150 min.

Repeated-step events: none
- [ ] P2 → P3: 130 min gap

## Case Y
draft → publish → review
Elapsed: 40 min.
- [ ] P5: prerequisite absent earlier: review
Repeated-step events: none


## Complete reviewed event register
- P1 | X | draft | minute 0 | approve
  Owner: =Owner
"second", line
  Note: =SUM(1,2)
"quoted", confirm event order
- P2 | X | review | minute 20 | approve
  Owner: Process analyst
  Note: 
- P3 | X | publish | minute 150 | approve
  Owner: Process analyst
  Note: 
- P4 | Y | draft | minute 5 | approve
  Owner: Process analyst
  Note: 
- P5 | Y | publish | minute 30 | approve
  Owner: Process analyst
  Note: 
- P6 | Y | review | minute 45 | approve
  Owner: Process analyst
  Note: 

Observed gaps are not work durations. Repeated activities are investigation cues, not proven rework. Missing prerequisites only describe the supplied window. No dispatch or external changes.
