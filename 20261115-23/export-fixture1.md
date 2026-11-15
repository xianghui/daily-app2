# Tariff Loom — shared-bay tariff worksheet

All jobs reviewed and scheduled.

FIFO earliest-start cost: 1.9200 currency units
Exact tariff plan: 1.1520 currency units
Modeled difference: 0.7680 currency units
Approved constant-load energy: 7200 Wh

## Ordered bay plan (hour offsets)
- 2–4: k2 / bake / 1800 W / 0.5400 currency units
- 4–6: k1 / blend / 600 W / 0.4200 currency units
- 6–8: k3 / dish / 1200 W / 0.1920 currency units

## All originals and reviews
- k1: Puree the vegetables into a smooth soup → blend [approve]; 600 W × 2 h; window 0–8
  
- k2: Cook the risen dough into crusty loaves → bake [approve]; 1800 W × 2 h; window 0–6
  
- k3: Clean the dirty cups and plates → dish [approve]; 1200 W × 2 h; window 0–8
  

## Before using
- [ ] Confirm tariff units, horizon start and finish-by windows.
- [ ] Verify constant active watts and run lengths.
- [ ] Check supervision, safety and real equipment constraints.
- [ ] Resolve every held job separately.

One nonpreemptive job at a time; idle slots allowed. No base load, startup surges, standby energy, demand charges or device control. Cost is modeled, not measured savings. AI links identities only; scheduling and arithmetic are deterministic.
