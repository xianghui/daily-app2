# Pilot Bridge — reviewed descriptive change worksheet

Comparable four-week windows. Training trial in pilot workshop versus unchanged reference. Measurements are supplied aggregates, not raw readings.

8 original observations = 8 approved + 0 held. Ready metrics 2; blocked 0. Goals met: pilot-only 2, reference-adjusted 1. Different goal classifications: 1. Counts cover ready metrics only, never mixed-unit totals.

## Energy per item [ready]
Pilot change -1; reference change -1.5; net change 0.5 kWh/item. Goal: decrease by at least 0.5. Pilot-only / adjusted goal: true / false.
pilot_before: 5 (source w1)
pilot_after: 4 (source w2)
reference_before: 6 (source w3)
reference_after: 4.5 (source w4)

## Production throughput [ready]
Pilot change 8; reference change 2; net change 6 items/hour. Goal: increase by at least 3. Pilot-only / adjusted goal: true / true.
pilot_before: 20 (source w5)
pilot_after: 28 (source w6)
reference_before: 24 (source w7)
reference_after: 26 (source w8)

## Every source and review
- w1: Electrical energy used to manufacture one product; original pilot/before = 5; reviewed energy pilot/before = 5 [approve]
  =SUM(1,2)
"quoted", verify
- w2: Electricity consumed for each manufactured unit; original pilot/after = 4; reviewed energy pilot/after = 4 [approve]
  
- w3: Power consumption per manufactured item; original reference/before = 6; reviewed energy reference/before = 6 [approve]
  
- w4: Electrical energy required for each finished product; original reference/after = 4.5; reviewed energy reference/after = 4.5 [approve]
  
- w5: Completed products coming off the line each hour; original pilot/before = 20; reviewed output pilot/before = 20 [approve]
  
- w6: Finished units manufactured hourly; original pilot/after = 28; reviewed output pilot/after = 28 [approve]
  
- w7: Factory production output in units per hour; original reference/before = 24; reviewed output reference/before = 24 [approve]
  
- w8: Number of products completed every hour; original reference/after = 26; reviewed output reference/after = 26 [approve]
  

## Follow-up before any rollout decision
- [ ] Verify metric definitions, units, denominators, observation windows and group membership match. Do not average duplicate aggregates here: combine them correctly upstream.
- [ ] Check multiple pre-periods for comparable trends; one pre-period cannot establish parallel trends.
- [ ] Investigate composition changes, spillovers, concurrent changes and differential shocks.
- [ ] Obtain raw data and an appropriate uncertainty analysis; no standard errors, significance or causal guarantee is supplied.
- [ ] Resolve held/missing cells. Net change is (pilot after − before) − (reference after − before), not proof of pilot impact.
