# Tariff Loom — shared-bay tariff worksheet

All jobs reviewed and scheduled.

FIFO earliest-start cost: 0.8600 currency units
Exact tariff plan: 0.3200 currency units
Modeled difference: 0.5400 currency units
Approved constant-load energy: 3400 Wh

## Ordered bay plan (hour offsets)
- 2–4: p2 / wash / 500 W / 0.1000 currency units
- 4–6: p1 / print / 200 W / 0.1200 currency units
- 6–8: p3 / dry / 1000 W / 0.1000 currency units

## All originals and reviews
- p1: Build the plastic prototype layer by layer → print [approve]; 200 W × 2 h; window 0–8
  
- p2: Clean metal fittings in the ultrasonic bath → wash [approve]; 500 W × 2 h; window 0–6
  
- p3: Remove moisture from the damp components with heat → dry [approve]; 1000 W × 2 h; window 0–8
  

## Before using
- [ ] Confirm tariff units, horizon start and finish-by windows.
- [ ] Verify constant active watts and run lengths.
- [ ] Check supervision, safety and real equipment constraints.
- [ ] Resolve every held job separately.

One nonpreemptive job at a time; idle slots allowed. No base load, startup surges, standby energy, demand charges or device control. Cost is modeled, not measured savings. AI links identities only; scheduling and arithmetic are deterministic.
