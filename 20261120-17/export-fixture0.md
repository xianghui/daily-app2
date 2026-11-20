# Precision Porch — rounding-aware recheck worksheet

Workshop sample reviewer reconciling vendor dimensional notes. No automatic acceptance or equipment changes.
Assumption: Synthetic readings: nearest-increment rounding of the same unchanged dimension. Quantization only; no calibration or measurement-uncertainty claim.

Quantization-only worksheet, not metrological conformity, calibration or production-release certification. Assumes nearest-increment rounding of a fixed unchanged quantity with no other error; closed bins conservatively retain tie endpoints. Resolution is declared rounding increment, NOT standard uncertainty or instrument accuracy. Intersect only readings of the same specimen/feature under compatible conditions. Correlated repeats cannot remove systematic bias. No inference of numeric readings, units or specimen identity from text; these need manual review. No automatic conversion, error averaging, statistical confidence, safety decision or physical action. Baseline uses the last approved reading point in source order and ignores quantization. Counts are computed, not accuracy/time-savings claims. Holds remain in audit, excluded from intervals.

## Computed comparison
2 point-only passes require interval recheck; 1 incompatible repeat groups.

## Reviewed intervals
A / bore: inside
[9.99, 10.01] mm; spec [9.95, 10.05]
Sources r1, r2; last-point baseline 10: pass
Quantization interval inside supplied bounds; other uncertainty still requires review.

B / bore: borderline
[9.9, 10.1] mm; spec [9.95, 10.05]
Sources r3; last-point baseline 10: pass
Request finer readings and full uncertainty review before a conformity decision.

C / bore: outside
[10.149999999999999, 10.25] mm; spec [9.95, 10.05]
Sources r4; last-point baseline 10.2: outside
Recheck out-of-range evidence and specification; do not automatically reject a physical sample.

D / length: conflict
[50.25, 50.05] mm; spec [49.9, 50.1]
Sources r5, r6; last-point baseline 50.3: outside
Recheck specimen identity, transcription, rounding model and stability; no common quantization interval.

E / length: inside
[49.95, 50.05] mm; spec [49.9, 50.1]
Sources r7; last-point baseline 50: pass
Quantization interval inside supplied bounds; other uncertainty still requires review.

F / length: borderline
[50, 50.2] mm; spec [49.9, 50.1]
Sources r8; last-point baseline 50.1: pass
Request finer readings and full uncertainty review before a conformity decision.

## Complete feature roster
bore: 4 reviewed readings
length: 4 reviewed readings

## All originals and reviews
### r1
Round mounting hole diameter
Original: A, 10 ± rounding half-step 0.05 mm
Reviewed: A, bore, 10, step 0.1 mm, approve


### r2
Circular bore hole measurement
Original: A, 10 ± rounding half-step 0.01 mm
Reviewed: A, bore, 10, step 0.02 mm, approve


### r3
Mounting hole bore diameter
Original: B, 10 ± rounding half-step 0.1 mm
Reviewed: B, bore, 10, step 0.2 mm, approve


### r4
Round hole internal diameter
Original: C, 10.2 ± rounding half-step 0.05 mm
Reviewed: C, bore, 10.2, step 0.1 mm, approve


### r5
Metal bracket overall end to end length
Original: D, 50 ± rounding half-step 0.05 mm
Reviewed: D, length, 50, step 0.1 mm, approve


### r6
Total bracket length
Original: D, 50.3 ± rounding half-step 0.05 mm
Reviewed: D, length, 50.3, step 0.1 mm, approve


### r7
Overall metal bracket length
Original: E, 50 ± rounding half-step 0.05 mm
Reviewed: E, length, 50, step 0.1 mm, approve


### r8
Bracket end to end length
Original: F, 50.1 ± rounding half-step 0.1 mm
Reviewed: F, length, 50.1, step 0.2 mm, approve

