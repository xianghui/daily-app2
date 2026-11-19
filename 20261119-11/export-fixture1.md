# Offset Harbor — reviewed clock worksheet

Synthetic field survey. One disconnected device is deliberately retained. Positive offset means destination clock reads ahead of source.

Reference: base = 0 ms. Target interval width: 3 ms. Positive offset = device ahead of reference. All offsets assumed constant in one short measurement window.

3 comparisons = 3 approved + 0 held. Status: ready



## Offset and additive correction ranges (ms)
- base: offset [0, 0]; correction [0, 0]; direct-only [0, 0]; within supplied width target
- drone: offset [-12, -9]; correction [9, 12]; direct-only [-12, -8]; within supplied width target
- boat: offset [10, 11]; correction [-11, -10]; direct-only [10, 11]; within supplied width target
- acoustic: offset [null, null]; correction [null, null]; direct-only [null, null]; follow up

null = not bounded to reference. No unique correction or shared feasible midpoint vector implied.

## Every source and review
- f1: Base station master time reference → Aerial drone aircraft flight recorder; original [-12, -8] ms
  Reviewed: base → drone [-12, -8] ms [approve]
  
- f2: Flying drone aerial photography log → Marine boat vessel navigation log; original [20, 22] ms
  Reviewed: drone → boat [20, 22] ms [approve]
  
- f3: Base station reference master clock → Ship boat marine navigation recorder; original [10, 11] ms
  Reviewed: base → boat [10, 11] ms [approve]
  

## Before use
- [ ] Check endpoint identities, direction and sign. AI similarity is not confidence.
- [ ] Bounds must include measurement uncertainty; network delay is not automatically clock skew.
- [ ] Check one common window, constant offsets and the reference standard. Drift/timezones are not modeled.
- [ ] Each range is a marginal feasible bound, not an independently selectable shared calibration.
- [ ] No clocks, logs or devices modified. Baseline uses only direct reference comparisons.
