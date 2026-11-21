# Workshop estimate review

Finite-sample split-conformal ranks require independently fixed predictions, predetermined groups and exchangeable errors. Tiny observed evaluation counts are descriptive, not accuracy estimates. Review cannot establish those assumptions. No individual coverage guarantee, service promise or automatic scheduling.

Alpha: 0.2

## Calibration
- Bicycle: n=4, k=4, radius=7 min; errors 1, 3, 5, 7; sources C00, C01, C02, C03
- Clothing: n=4, k=4, radius=6 min; errors 1, 2, 4, 6; sources C10, C11, C12, C13

## Evaluation and plan
- E0 / Bicycle / evaluation: 8–22 min; estimate 15; actual 22
- E1 / Clothing / evaluation: 19–31 min; estimate 25; actual 36
- P0 / Bicycle / plan: 13–27 min; estimate 20; actual unobserved
- P1 / Clothing / plan: 24–36 min; estimate 30; actual unobserved

Finite evaluation hits: 1/2. Point exact hits: 0/2. Unbounded evaluation: 0.

## Every original and review
- C00 [approve] Fix a puncture in a bike inner tube
  Original: {"id":"C00","text":"Fix a puncture in a bike inner tube","partition":"calibration","predicted":15,"actual":17}
  Review: Bicycle, calibration, estimate 16, actual 17
  Note: =SUM(1,2)
  "owner", recheck
- C01 [approve] Replace the bicycle wheel tire tube
  Original: {"id":"C01","text":"Replace the bicycle wheel tire tube","partition":"calibration","predicted":15,"actual":12}
  Review: Bicycle, calibration, estimate 15, actual 12
  Note: 
- C02 [approve] Patch a flat cycle tire
  Original: {"id":"C02","text":"Patch a flat cycle tire","partition":"calibration","predicted":15,"actual":20}
  Review: Bicycle, calibration, estimate 15, actual 20
  Note: 
- C03 [approve] Repair a bike tire air leak
  Original: {"id":"C03","text":"Repair a bike tire air leak","partition":"calibration","predicted":15,"actual":22}
  Review: Bicycle, calibration, estimate 15, actual 22
  Note: 
- C10 [approve] Shorten and sew a trouser hem
  Original: {"id":"C10","text":"Shorten and sew a trouser hem","partition":"calibration","predicted":25,"actual":26}
  Review: Clothing, calibration, estimate 25, actual 26
  Note: 
- C11 [approve] Repair a seam in a garment
  Original: {"id":"C11","text":"Repair a seam in a garment","partition":"calibration","predicted":25,"actual":23}
  Review: Clothing, calibration, estimate 25, actual 23
  Note: 
- C12 [approve] Mend clothing with torn stitching
  Original: {"id":"C12","text":"Mend clothing with torn stitching","partition":"calibration","predicted":25,"actual":29}
  Review: Clothing, calibration, estimate 25, actual 29
  Note: 
- C13 [approve] Tailor trousers to shorten the hem
  Original: {"id":"C13","text":"Tailor trousers to shorten the hem","partition":"calibration","predicted":25,"actual":31}
  Review: Clothing, calibration, estimate 25, actual 31
  Note: 
- E0 [approve] A bicycle has a punctured rear tube
  Original: {"id":"E0","text":"A bicycle has a punctured rear tube","partition":"evaluation","predicted":15,"actual":22}
  Review: Bicycle, evaluation, estimate 15, actual 22
  Note: 
- E1 [approve] Sew up the split seam on trousers
  Original: {"id":"E1","text":"Sew up the split seam on trousers","partition":"evaluation","predicted":25,"actual":36}
  Review: Clothing, evaluation, estimate 25, actual 36
  Note: 
- P0 [approve] Replace a leaking inner tube on a bike
  Original: {"id":"P0","text":"Replace a leaking inner tube on a bike","partition":"plan","predicted":20,"actual":null}
  Review: Bicycle, plan, estimate 20, actual unobserved
  Note: 
- P1 [approve] Alter the length of a clothing hem
  Original: {"id":"P1","text":"Alter the length of a clothing hem","partition":"plan","predicted":30,"actual":null}
  Review: Clothing, plan, estimate 30, actual unobserved
  Note: 
