# Synthetic holiday payment review

3 originals retained; 0 held. 2 date differences versus always-following. Counts are not AI accuracy or measured time savings. Calendar dates only; no time zones, settlement cutoffs or legal assurance.

## B1 — approve

Source: Use the preceding business day before a weekend or holiday.

Original 2026-12-25; reviewed 2026-12-25; preceding; adjusted 2026-12-24; following baseline 2026-12-28

Review: =SUM(1,2)
Reviewed "date", <script> & 🧾

Witness: [{"date":"2026-12-25","closed":true,"direction":-1},{"date":"2026-12-24","closed":false,"direction":-1}]

## B2 — approve

Source: Move payment later to the following business day after the holiday.

Original 2026-12-31; reviewed 2026-12-31; following; adjusted 2027-01-01; following baseline 2027-01-01

Review: 

Witness: [{"date":"2026-12-31","closed":true,"direction":1},{"date":"2027-01-01","closed":false,"direction":1}]

## B3 — approve

Source: Modified following date adjustment, fall back before month-end if rolling forward crosses months.

Original 2026-12-31; reviewed 2026-12-31; modified-following; adjusted 2026-12-30; following baseline 2027-01-01

Review: 

Witness: [{"date":"2026-12-31","closed":true,"direction":1},{"date":"2027-01-01","closed":false,"direction":1},{"date":"2026-12-31","closed":true,"direction":-1},{"date":"2026-12-30","closed":false,"direction":-1}]
