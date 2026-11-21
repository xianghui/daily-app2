# Probe Orchard — Printer support follow-up

Planning assumptions only: exhaustive reviewed shortlist, one cause, deterministic independent-of-order binary checks, additive fixed check costs. Real faults may violate all of these. Similarity is not probability. No diagnosis, equipment action or safety assurance.

Sum of per-report worst-case planning minutes: optimized 6 vs fixed-order 22. Not measured elapsed time.

## Supplied hypothesis library

H1: Printer paper feed jam rollers obstructed sheet path — binary checks [1, 0, 0]
H2: Printer empty toner cartridge faded blank pages — binary checks [0, 1, 0]
H3: Printer disconnected network WiFi connection offline — binary checks [0, 0, 1]
H4: Bicycle flat tire puncture tube repair — binary checks [1, 0, 0]
H5: Bicycle brake pads worn weak stopping power — binary checks [0, 1, 0]
H6: Bicycle chain slipped gears drivetrain skipping — binary checks [0, 0, 1]

Check order: feed: Is a sheet obstructing the opened paper feed path? (10 min); toner: Does the printer report an empty toner cartridge? (1 min); network: Is the network connection indicator offline? (2 min)

## R1 — approve

The printer cannot produce usable pages: possible blank toner, a paper feed jam, or a lost network connection.

Reviewed candidates: H2, H1, H3

Note: 

toner: Does the printer report an empty toner cartridge? (1 min)
  NO → network: Is the network connection indicator offline? (2 min)
  NO →   NO → Candidate: H1
  NO →   YES → Candidate: H3
  YES → Candidate: H2

Worst-case 3 min; fixed-order 11 min.

## R2 — approve

Printer job failed. Could be a wireless disconnect, empty toner cartridge or sheet jam; check which cause fits.

Reviewed candidates: H2, H1, H3

Note: 

toner: Does the printer report an empty toner cartridge? (1 min)
  NO → network: Is the network connection indicator offline? (2 min)
  NO →   NO → Candidate: H1
  NO →   YES → Candidate: H3
  YES → Candidate: H2

Worst-case 3 min; fixed-order 11 min.
