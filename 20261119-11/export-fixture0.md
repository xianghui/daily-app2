# Offset Harbor — reviewed clock worksheet

Synthetic short incident window. Constant clock offsets in milliseconds, not measured network latency. Bounds already include measurement uncertainty.

Reference: reference = 0 ms. Target interval width: 6 ms. Positive offset = device ahead of reference. All offsets assumed constant in one short measurement window.

4 comparisons = 4 approved + 0 held. Status: ready



## Offset and additive correction ranges (ms)
- reference: offset [0, 0]; correction [0, 0]; direct-only [0, 0]; within supplied width target
- camera: offset [10, 15]; correction [-15, -10]; direct-only [10, 20]; within supplied width target
- printer: offset [16, 18]; correction [-18, -16]; direct-only [16, 18]; within supplied width target
- sensor: offset [14, 20]; correction [-20, -14]; direct-only [null, null]; within supplied width target

null = not bounded to reference. No unique correction or shared feasible midpoint vector implied.

## Every source and review
- c1: Laboratory master time reference → Surveillance video recording camera; original [10, 20] ms
  Reviewed: reference → camera [10, 20] ms [approve]
  
- c2: Security camera video recorder → Thermal label printer machine; original [3, 7] ms
  Reviewed: camera → printer [3, 7] ms [approve]
  
- c3: Master laboratory clock standard → Printing machine for labels; original [16, 18] ms
  Reviewed: reference → printer [16, 18] ms [approve]
  
- c4: Label printing machine thermal printer → Environmental temperature thermometer sensor; original [-2, 2] ms
  Reviewed: printer → sensor [-2, 2] ms [approve]
  

## Before use
- [ ] Check endpoint identities, direction and sign. AI similarity is not confidence.
- [ ] Bounds must include measurement uncertainty; network delay is not automatically clock skew.
- [ ] Check one common window, constant offsets and the reference standard. Drift/timezones are not modeled.
- [ ] Each range is a marginal feasible bound, not an independently selectable shared calibration.
- [ ] No clocks, logs or devices modified. Baseline uses only direct reference comparisons.
