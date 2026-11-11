# Flow Balance — Repair pop-up

REVIEWED HISTORICAL SEATING PLAN

Observation: 90 minutes. Extra-seat budget: 1.

## Station worksheets

- Cycle repair bench: 4 approved visits; peak 3; mean occupancy 1.344; mean visit 30.250 min; throughput 2.667/hour. Existing seats 1; add 1; excess occupancy 51 → 21 person-minutes.
- Garment repair bench: 3 approved visits; peak 1; mean occupancy 0.500; mean visit 15.000 min; throughput 2.000/hour. Existing seats 1; add 0; excess occupancy 0 → 0 person-minutes.

First-station baseline excess occupancy: 21; planned: 21 person-minutes.

## Every source visit

- B1 [approve] bikes / [0, 31) min: Fix a punctured tyre and adjust the bicycle brakes. =1+1, "review" next line
- B2 [approve] bikes / [5, 35) min: Fix a punctured tyre and adjust the bicycle brakes. 
- B3 [approve] bikes / [10, 40) min: Fix a punctured tyre and adjust the bicycle brakes. 
- B4 [approve] bikes / [50, 80) min: Fix a punctured tyre and adjust the bicycle brakes. 
- S1 [approve] sewing / [0, 15) min: Stitch a torn jacket sleeve and replace a loose button. 
- S2 [approve] sewing / [30, 45) min: Stitch a torn jacket sleeve and replace a loose button. 
- S3 [approve] sewing / [60, 75) min: Stitch a torn jacket sleeve and replace a loose button. 

MiniLM embeddings suggest station identity; human review is mandatory. Deterministic half-open interval sweeps count concurrent completed visits. Exhaustive integer allocation minimizes excess occupancy person-minutes, then seats used, within the budget. First-station baseline puts the entire budget at the first supplied station. Results describe supplied historical visits, not predicted queue lengths or future staffing productivity. Seats are waiting/occupancy spaces, not service workers. No durations are shortened and no future demand is predicted.
