# Checkpoint Cove — reviewed scenario worksheet

Synthetic nonclinical research compute. Fully counted exposed runtime includes saving, excludes restart. No automatic settings or future-performance guarantee.

3 logs = 3 approved + 0 held. Status: ready



## Interval scenarios
- weather: save after 30 useful minutes; 69.642 expected wall minutes/useful hour vs current 90 min interval / 75.623 wall minutes. 8 interruptions / 2000 active minutes.
- text: save after 4 useful minutes; 63.092 expected wall minutes/useful hour vs current 20 min interval / 67.121 wall minutes. 20 interruptions / 2000 active minutes.
- maps: save after 120 useful minutes; 60.375 expected wall minutes/useful hour vs current 60 min interval / 60.750 wall minutes. 0 interruptions / 2000 active minutes. Optimum at search cap.

## Every source and review
- r1: Climate weather atmospheric computer simulation; original 2000 active minutes / 8 interruptions
  Reviewed weather: 2000 active minutes / 8 interruptions [approve]
  
- r2: Building document text search indexes; original 2000 active minutes / 20 interruptions
  Reviewed text: 2000 active minutes / 20 interruptions [approve]
  
- r3: Processing geographic maps and geospatial tiles; original 2000 active minutes / 0 interruptions
  Reviewed maps: 2000 active minutes / 0 interruptions [approve]
  

## Assumptions before use
- [ ] Independently verify semantic workload links, exposure, save/recovery costs and caps.
- [ ] Constant independent exponential failure hazard during useful work AND saves; recovery is fixed and failure-free. Failed cycles restart from their previous save; final save is atomic. No overlapping exposure windows.
- [ ] Expected cycle time = expm1(rate*(T+C))*(1/rate+R). Divide by T for wall/useful factor; zero-rate limit is (T+C)/T.
- [ ] Recurring steady-state cycles, not finite-job deadlines. Search whole useful minutes 1–cap; ties choose smaller interval.
- [ ] Zero recorded failures is not zero future risk. Correlated interruptions, partial saves, growth in save cost and uncertainty are not modeled.
- [ ] Values are assumption-based expectations, not measured savings or system changes. No automatic job settings.
