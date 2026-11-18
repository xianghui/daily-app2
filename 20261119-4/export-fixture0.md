# Phase Folio — reviewed daily timing worksheet

Synthetic recurring arrivals across four days. One record per event, all on the same UTC clock. Dates omitted intentionally; descriptive daily phase only.

Reference clock: UTC; target observed coverage 0.75.

Status: ready; 8 originals = 8 approved + 0 held.

- bread: 4 events; shortest clockwise arc 23:50 → 00:20 (30 min, crosses midnight); 3/4 inside, required 3. Circular mean 00:10; concentration R 0.49904867495465216; linear mean baseline 09:05. Mean shortest clock distance: circular 185 min; linear 447.5 min.
  - a: 23:50; inside arc
  - b: 00:10; inside arc
  - c: 00:20; inside arc
  - d: 12:00; outside arc
- linen: 4 events; shortest clockwise arc 06:00 → 06:20 (20 min); 3/4 inside, required 3. Circular mean 06:15; concentration R 0.9988104751592563; linear mean baseline 06:15. Mean shortest clock distance: circular 10 min; linear 10 min.
  - e: 06:00; inside arc
  - f: 06:10; inside arc
  - g: 06:20; inside arc
  - h: 06:30; outside arc

## Every source and review
- a: Fresh loaves and croissants truck reaches the bakery; original 1430 min; reviewed bread 1430 min [approve]
  
- b: Bread and pastry van arrives at receiving; original 10 min; reviewed bread 10 min [approve]
  
- c: Daily bakery bread shipment delivered; original 20 min; reviewed bread 20 min [approve]
  
- d: Bread delivery vehicle arrives with morning loaves; original 720 min; reviewed bread 720 min [approve]
  
- e: Clean hotel towels and bedsheets laundry van arrives; original 360 min; reviewed linen 360 min [approve]
  
- f: Laundry delivery brings washed bed linen and towels; original 370 min; reviewed linen 370 min [approve]
  
- g: Clean linen delivery arrives at the hotel; original 380 min; reviewed linen 380 min [approve]
  
- h: Washed towels and bedsheets delivered by laundry truck; original 390 min; reviewed linen 390 min [approve]
  

## Before using the worksheet
- [ ] Verify one common reference clock, equal event weights and no duplicate events.
- [ ] Review AI identities: semantic similarity is not confidence or authorization.
- [ ] Inspect multimodal patterns; a mean can hide separate arrival peaks.
- [ ] Arc coverage is descriptive, not a future guarantee or staffing recommendation. Dates/trends/DST not modeled.
- [ ] No scheduling, messages or external actions performed.
