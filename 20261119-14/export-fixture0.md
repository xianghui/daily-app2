# Checkpoint Cove — reviewed scenario worksheet

Synthetic creative-compute exposure windows. Counts include failures during work/save; exclude recovery. Independent constant failure hazard is an assumption.

3 logs = 3 approved + 0 held. Status: ready



## Interval scenarios
- render: save after 19 useful minutes; 67.420 expected wall minutes/useful hour vs current 60 min interval / 72.395 wall minutes. 5 interruptions / 1000 active minutes.
- audio: save after 16 useful minutes; 62.062 expected wall minutes/useful hour vs current 30 min interval / 62.492 wall minutes. 2 interruptions / 1000 active minutes.
- photo: save after 10 useful minutes; 67.755 expected wall minutes/useful hour vs current 30 min interval / 72.752 wall minutes. 10 interruptions / 1000 active minutes.

## Every source and review
- c1: Video animation frames rendered on workstation; original 1000 active minutes / 5 interruptions
  Reviewed render: 1000 active minutes / 5 interruptions [approve]
  
- c2: Music audio recording and sound mixing; original 1000 active minutes / 2 interruptions
  Reviewed audio: 1000 active minutes / 2 interruptions [approve]
  
- c3: Photo image retouching editing batch; original 1000 active minutes / 10 interruptions
  Reviewed photo: 1000 active minutes / 10 interruptions [approve]
  

## Assumptions before use
- [ ] Independently verify semantic workload links, exposure, save/recovery costs and caps.
- [ ] Constant independent exponential failure hazard during useful work AND saves; recovery is fixed and failure-free. Failed cycles restart from their previous save; final save is atomic. No overlapping exposure windows.
- [ ] Expected cycle time = expm1(rate*(T+C))*(1/rate+R). Divide by T for wall/useful factor; zero-rate limit is (T+C)/T.
- [ ] Recurring steady-state cycles, not finite-job deadlines. Search whole useful minutes 1–cap; ties choose smaller interval.
- [ ] Zero recorded failures is not zero future risk. Correlated interruptions, partial saves, growth in save cost and uncertainty are not modeled.
- [ ] Values are assumption-based expectations, not measured savings or system changes. No automatic job settings.
