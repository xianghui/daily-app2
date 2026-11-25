# Maximum batch

1920 source + reference rows preserved; 0 requests held. No remote records changed.

## req-0 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-1 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-2 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-3 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-4 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-5 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-6 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-7 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-8 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-9 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-10 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-11 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-12 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-13 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-14 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-15 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-16 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-17 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-18 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-19 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-20 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN

## req-21 / approve / absent

Follow up with customers absent from the completed roster. Unknown customer identifiers never match each other; retain those for manual investigation.

Reviewer: 

- id-0 null: KEEP; reference IDs []; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: KEEP; reference IDs []; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: KEEP; reference IDs []; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: KEEP; reference IDs []; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: KEEP; reference IDs []; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: KEEP; reference IDs []; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: KEEP; reference IDs []; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: KEEP; reference IDs []; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-22 / approve / nullsafe

List only confirmed completions: customers already present in the answered roster with an equal known identifier. Missing identifiers never match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-1 "": KEEP; reference IDs []; baseline UNKNOWN
- id-2 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-3 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-6 "": KEEP; reference IDs []; baseline UNKNOWN
- id-7 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-8 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-11 "": KEEP; reference IDs []; baseline UNKNOWN
- id-12 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-13 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-16 "": KEEP; reference IDs []; baseline UNKNOWN
- id-17 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-18 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-21 "": KEEP; reference IDs []; baseline UNKNOWN
- id-22 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-23 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-26 "": KEEP; reference IDs []; baseline UNKNOWN
- id-27 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-28 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-31 "": KEEP; reference IDs []; baseline UNKNOWN
- id-32 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-33 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs ["ref-1","ref-3","ref-5","ref-7","ref-9","ref-11","ref-13","ref-15","ref-17","ref-19","ref-21","ref-23","ref-25","ref-27","ref-29","ref-31","ref-33","ref-35","ref-37","ref-39"]; baseline UNKNOWN
- id-36 "": KEEP; reference IDs []; baseline UNKNOWN
- id-37 "known": EXCLUDE; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline FALSE
- id-38 "quoted \"value\",\n🍏": KEEP; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": KEEP; reference IDs []; baseline UNKNOWN

## req-23 / approve / present

Find absent items using null-safe equality: treat two missing keys as the same key. If missing occurs in both rosters, exclude it as a match.

Reviewer: 

- id-0 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-1 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-2 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-3 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-4 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-5 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-6 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-7 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-8 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-9 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-10 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-11 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-12 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-13 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-14 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-15 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-16 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-17 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-18 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-19 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-20 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-21 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-22 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-23 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-24 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-25 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-26 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-27 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-28 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-29 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-30 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-31 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-32 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-33 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-34 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-35 null: EXCLUDE; reference IDs []; baseline UNKNOWN
- id-36 "": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-37 "known": KEEP; reference IDs ["ref-0","ref-2","ref-4","ref-6","ref-8","ref-10","ref-12","ref-14","ref-16","ref-18","ref-20","ref-22","ref-24","ref-26","ref-28","ref-30","ref-32","ref-34","ref-36","ref-38"]; baseline TRUE
- id-38 "quoted \"value\",\n🍏": EXCLUDE; reference IDs []; baseline UNKNOWN
- id-39 "=FORMULA\nnext": EXCLUDE; reference IDs []; baseline UNKNOWN
