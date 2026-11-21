# Probe Orchard — Bicycle intake follow-up

Planning assumptions only: exhaustive reviewed shortlist, one cause, deterministic independent-of-order binary checks, additive fixed check costs. Real faults may violate all of these. Similarity is not probability. No diagnosis, equipment action or safety assurance.

Sum of per-report worst-case planning minutes: optimized 6 vs fixed-order 22. Not measured elapsed time.

## Supplied hypothesis library

H1: Printer paper feed jam rollers obstructed sheet path — binary checks [1, 0, 0]
H2: Printer empty toner cartridge faded blank pages — binary checks [0, 1, 0]
H3: Printer disconnected network WiFi connection offline — binary checks [0, 0, 1]
H4: Bicycle flat tire puncture tube repair — binary checks [1, 0, 0]
H5: Bicycle brake pads worn weak stopping power — binary checks [0, 1, 0]
H6: Bicycle chain slipped gears drivetrain skipping — binary checks [0, 0, 1]

Check order: tube: Does the removed inner tube leak in a water test? (10 min); pads: Are the brake pads below their wear marks? (1 min); chain: Does the chain skip on the workshop stand? (2 min)

## R1 — approve

The bicycle behaves oddly: possible flat tire, worn brakes or skipping chain; the intake agent has not isolated the cause.

Reviewed candidates: H6, H5, H4

Note: 

pads: Are the brake pads below their wear marks? (1 min)
  NO → chain: Does the chain skip on the workshop stand? (2 min)
  NO →   NO → Candidate: H4
  NO →   YES → Candidate: H6
  YES → Candidate: H5

Worst-case 3 min; fixed-order 11 min.

## R2 — approve

The cycle needs troubleshooting: rule out punctured tube, worn braking pads and slipping gears before suggesting a repair.

Reviewed candidates: H5, H6, H4

Note: 

pads: Are the brake pads below their wear marks? (1 min)
  NO → chain: Does the chain skip on the workshop stand? (2 min)
  NO →   NO → Candidate: H4
  NO →   YES → Candidate: H6
  YES → Candidate: H5

Worst-case 3 min; fixed-order 11 min.
