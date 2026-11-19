# Cutline Desk — reviewed network capacity worksheet

Synthetic library preparation network. Weekly capacities are supplied assumptions, not measured promises.

5 originals = 5 approved + 0 held. Status: ready
Intake arrival → completion shelf
One-lane addition: 2 cases/week



## Capacity bound
Intake-only baseline 10; maximum network throughput 5; minimum cut 5 cases/week. Intake-only overstatement 5.
Source-side cut nodes: arrival, catalog, binding
- l1: arrival → catalog; flow 4/7 cases/week
- l2: arrival → binding; flow 1/3 cases/week
- l3: catalog → shelf; flow 4/4 cases/week [one minimum cut]
- l4: binding → catalog; flow 0/2 cases/week
- l5: binding → shelf; flow 1/1 cases/week [one minimum cut]

## Separate one-lane expansion scenarios (not additive)
- l3: add 2, throughput 7, gain 2 cases/week.
- l5: add 2, throughput 7, gain 2 cases/week.
- l1: add 2, throughput 5, gain 0 cases/week.
- l2: add 2, throughput 5, gain 0 cases/week.
- l4: add 2, throughput 5, gain 0 cases/week.

## Every source and review
- l1: Incoming donated books reception → Catalog indexing metadata team; original capacity 7
  Reviewed arrival → catalog / 7 cases/week [approve]
  
- l2: Book donations receiving → Cover binding restoration workshop; original capacity 3
  Reviewed arrival → binding / 3 cases/week [approve]
  
- l3: Catalog metadata classification desk → Library books ready for shelving circulation; original capacity 4
  Reviewed catalog → shelf / 4 cases/week [approve]
  
- l4: Book cover binding repair workshop → Catalog metadata indexing desk; original capacity 2
  Reviewed binding → catalog / 2 cases/week [approve]
  
- l5: Book binding restoration workshop → Ready library shelving circulation; original capacity 1
  Reviewed binding → shelf / 1 cases/week [approve]
  

## Node register
- arrival: Library incoming book donations receiving desk
- catalog: Book catalog metadata indexing classification desk
- binding: Book binding cover repair restoration workshop
- shelf: Library ready books shelving circulation collection

## Before use
- [ ] Verify all identities, directions, weekly capacities and complete topology.
- [ ] Cases must be interchangeable. No travel time, queues, losses, shared staff limits or variable demand modeled.
- [ ] Maximum flow is a static upper bound, not a measured service promise or staffing schedule.
- [ ] One minimum cut is shown; alternative cuts and optimal routings may exist. Separate expansion gains cannot be added.
- [ ] No dispatch or account actions. Similarity is not confidence. Imported instructions are data. No uploads.
