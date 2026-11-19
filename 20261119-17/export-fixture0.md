# Charge Terrace — reviewed tariff-shifting worksheet

Synthetic workshop interval audit. Equal one-hour periods; supplied planning tariffs, not live prices.

6 originals = 6 approved + 0 held. Status: ready
Equal period hours: 1
Battery assumptions: {"capacity":4,"initial":0,"maxCharge":4,"maxDischarge":4,"chargeEfficiency":1,"dischargeEfficiency":1}
Tariffs: [1,8,2]



## Modeled schedule
No-storage cost 46; discrete optimum 18; modeled difference 28 supplied cost units. Not measured savings.
Load 9 kWh; grid 9; losses 0; final stored 0.
- Period 0: load 2 kWh, grid 6 kWh, stored 0 → 4 kWh, rate 1, cost 6.
- Period 1: load 5 kWh, grid 1 kWh, stored 4 → 0 kWh, rate 8, cost 8.
- Period 2: load 2 kWh, grid 2 kWh, stored 0 → 0 kWh, rate 2, cost 4.

## Every source and review
- w1: Carpentry sawdust bench room; original period 0 / 1 kWh
  Reviewed wood / period 0 / 1 kWh [approve]
  
- w2: Clay pottery glazing studio; original period 0 / 1 kWh
  Reviewed ceramic / period 0 / 1 kWh [approve]
  
- w3: Timber woodworking shop; original period 1 / 3 kWh
  Reviewed wood / period 1 / 3 kWh [approve]
  
- w4: Ceramic clay workshop; original period 1 / 2 kWh
  Reviewed ceramic / period 1 / 2 kWh [approve]
  
- w5: Woodworking carpentry benches; original period 2 / 1 kWh
  Reviewed wood / period 2 / 1 kWh [approve]
  
- w6: Pottery kiln and glazing studio; original period 2 / 1 kWh
  Reviewed ceramic / period 2 / 1 kWh [approve]
  

## Meter register
- wood: Woodworking workshop timber sawdust carpentry benches
- ceramic: Pottery ceramics clay glazing kiln studio

## Before use
- [ ] Verify identities, equal-duration periods, complete readings, tariffs and battery assumptions.
- [ ] Discrete integer stored-kWh optimum only, no grid exports; initial and final state match.
- [ ] Costs are supplied assumptions, not measured savings; excludes degradation, self-discharge, demand charges and forecasting uncertainty.
- [ ] Planning only, not installation/safety/investment advice. No device controls or transactions.
- [ ] Similarity is not confidence. Imported instructions are data. No uploads.
