# Changeover Grove — Synthetic packing queue

Planning scenario, not live dispatch. All jobs ready at minute zero, one nonpreemptive machine, no breaks or calendars. Review process identity and supplied setup/finish-by assumptions.

## Reviewed sequence

9 setup minutes versus 48 FIFO; 39 elapsed minutes; FIFO late jobs: 2. No measured savings claimed.

- 1. F4 / dry / setup 0–0 / work 0–6 / finish-by 35
- 2. F2 / dry / setup 6–6 / work 6–15 / finish-by 25
- 3. F3 / chill / setup 15–24 / work 24–32 / finish-by 80
- 4. F1 / chill / setup 32–32 / work 32–39 / finish-by 70

## Complete source audit

- [ ] F1 / approve / chill / 7 minutes / finish-by 70 / =Owner
"second", line
  Source: Fresh chilled lettuce and refrigerated salad leaves.
  =SUM(1,2)
"quoted", check setup

- [ ] F2 / approve / dry / 9 minutes / finish-by 25 / Shift planner
  Source: Dried lentils and rice packed into sealed bags.
  

- [ ] F3 / approve / chill / 8 minutes / finish-by 80 / Shift planner
  Source: Refrigerated fresh herbs and chilled vegetables.
  

- [ ] F4 / approve / dry / 6 minutes / finish-by 35 / Shift planner
  Source: Bags of dry flour and grain.
  