# Cutline Desk — reviewed network capacity worksheet

Synthetic repair intake network. Each lane capacity is available cases per week; all cases interchangeable.

5 originals = 5 approved + 0 held. Status: ready
Intake intake → completion complete
One-lane addition: 3 cases/week



## Capacity bound
Intake-only baseline 14; maximum network throughput 8; minimum cut 8 cases/week. Intake-only overstatement 6.
Source-side cut nodes: intake, wood, fabric
- a: intake → wood; flow 3/8 cases/week
- b: intake → fabric; flow 5/6 cases/week
- c: wood → complete; flow 3/3 cases/week [one minimum cut]
- d: fabric → complete; flow 5/5 cases/week [one minimum cut]
- e: wood → fabric; flow 0/2 cases/week

## Separate one-lane expansion scenarios (not additive)
- c: add 3, throughput 11, gain 3 cases/week.
- d: add 3, throughput 11, gain 3 cases/week.
- a: add 3, throughput 8, gain 0 cases/week.
- b: add 3, throughput 8, gain 0 cases/week.
- e: add 3, throughput 8, gain 0 cases/week.

## Every source and review
- a: Customer repair reception intake → Timber carpentry workshop; original capacity 8
  Reviewed intake → wood / 8 cases/week [approve]
  
- b: Repair request intake desk → Fabric sewing workshop; original capacity 6
  Reviewed intake → fabric / 6 cases/week [approve]
  
- c: Woodworking carpentry shop → Completed repairs pickup collection; original capacity 3
  Reviewed wood → complete / 3 cases/week [approve]
  
- d: Textile mending sewing shop → Finished repair dispatch pickup; original capacity 5
  Reviewed fabric → complete / 5 cases/week [approve]
  
- e: Timber carpentry repair area → Textile fabric mending area; original capacity 2
  Reviewed wood → fabric / 2 cases/week [approve]
  

## Node register
- intake: Customer repair request intake reception desk
- wood: Woodworking timber carpentry repair workshop
- fabric: Textile sewing fabric mending workshop
- complete: Completed repair collection dispatch pickup desk

## Before use
- [ ] Verify all identities, directions, weekly capacities and complete topology.
- [ ] Cases must be interchangeable. No travel time, queues, losses, shared staff limits or variable demand modeled.
- [ ] Maximum flow is a static upper bound, not a measured service promise or staffing schedule.
- [ ] One minimum cut is shown; alternative cuts and optimal routings may exist. Separate expansion gains cannot be added.
- [ ] No dispatch or account actions. Similarity is not confidence. Imported instructions are data. No uploads.
