# Signal Accumulator — investigation worksheet

14 originals = 14 approved + 0 held.

k=0.5; h=5. No automatic resets.
Single-reading baseline: 0 streams with |z| ≥ 3.
Cumulative worksheet: 1 streams with C+ or C− ≥ h.

## Bottle fill
Reference 500 ± 2 mL (mean ± 1 SD)
First cumulative signal: 10; first single-reading signal: none
Gaps before sequence: none
- #1 / f1: 502; z=1.000000; C+=0.500000; C−=0.000000; cumulative=false; single=false
- #2 / f2: 502; z=1.000000; C+=1.000000; C−=0.000000; cumulative=false; single=false
- #3 / f3: 502; z=1.000000; C+=1.500000; C−=0.000000; cumulative=false; single=false
- #4 / f4: 502; z=1.000000; C+=2.000000; C−=0.000000; cumulative=false; single=false
- #5 / f5: 502; z=1.000000; C+=2.500000; C−=0.000000; cumulative=false; single=false
- #6 / f6: 502; z=1.000000; C+=3.000000; C−=0.000000; cumulative=false; single=false
- #7 / f7: 502; z=1.000000; C+=3.500000; C−=0.000000; cumulative=false; single=false
- #8 / f8: 502; z=1.000000; C+=4.000000; C−=0.000000; cumulative=false; single=false
- #9 / f9: 502; z=1.000000; C+=4.500000; C−=0.000000; cumulative=false; single=false
- #10 / f10: 502; z=1.000000; C+=5.000000; C−=0.000000; cumulative=true; single=false

## Cap torque
Reference 1.5 ± 0.1 Nm (mean ± 1 SD)
First cumulative signal: none; first single-reading signal: none
Gaps before sequence: none
- #1 / c1: 1.5; z=0.000000; C+=0.000000; C−=0.000000; cumulative=false; single=false
- #2 / c2: 1.52; z=0.200000; C+=0.000000; C−=0.000000; cumulative=false; single=false
- #3 / c3: 1.48; z=-0.200000; C+=0.000000; C−=0.000000; cumulative=false; single=false
- #4 / c4: 1.51; z=0.100000; C+=0.000000; C−=0.000000; cumulative=false; single=false

## All originals and reviews
- f1: Amount of drink poured into each container → fill [approve]; #1; value=502
  
- f2: Amount of drink poured into each container → fill [approve]; #2; value=502
  
- f3: Amount of drink poured into each container → fill [approve]; #3; value=502
  
- f4: Amount of drink poured into each container → fill [approve]; #4; value=502
  
- f5: Amount of drink poured into each container → fill [approve]; #5; value=502
  
- f6: Amount of drink poured into each container → fill [approve]; #6; value=502
  
- f7: Amount of drink poured into each container → fill [approve]; #7; value=502
  
- f8: Amount of drink poured into each container → fill [approve]; #8; value=502
  
- f9: Amount of drink poured into each container → fill [approve]; #9; value=502
  
- f10: Amount of drink poured into each container → fill [approve]; #10; value=502
  
- c1: Rotational force when fastening the lid → seal [approve]; #1; value=1.5
  
- c2: Rotational force when fastening the lid → seal [approve]; #2; value=1.52
  
- c3: Rotational force when fastening the lid → seal [approve]; #3; value=1.48
  
- c4: Rotational force when fastening the lid → seal [approve]; #4; value=1.51
  

## Investigation checklist
- [ ] Verify reference baseline, measurement units and sampling order.
- [ ] Investigate exclusions, gaps and measurement errors.
- [ ] Review persistent departures; do not infer causes from a signal.
- [ ] Calibrate thresholds before real operational use.

AI reconciles stream identities only; CUSUM arithmetic is deterministic. No instrument control. No probability, safety or time-saving guarantee. Independent stable-reference assumptions may not fit correlated or irregular data.
