# Synthetic month-end payment review

3 originals retained; 0 held. 2 date differences versus always-following. Counts are not AI accuracy or measured time savings. Calendar dates only; no time zones, settlement cutoffs or legal assurance.

## A1 — approve

Source: Move this payment forward to the next business day after the weekend.

Original 2026-01-31; reviewed 2026-01-31; following; adjusted 2026-02-03; following baseline 2026-02-03

Review: 

Witness: [{"date":"2026-01-31","closed":true,"direction":1},{"date":"2026-02-01","closed":true,"direction":1},{"date":"2026-02-02","closed":true,"direction":1},{"date":"2026-02-03","closed":false,"direction":1}]

## A2 — approve

Source: Modified following: next working day, but if next month use the previous working day.

Original 2026-01-31; reviewed 2026-01-31; modified-following; adjusted 2026-01-30; following baseline 2026-02-03

Review: 

Witness: [{"date":"2026-01-31","closed":true,"direction":1},{"date":"2026-02-01","closed":true,"direction":1},{"date":"2026-02-02","closed":true,"direction":1},{"date":"2026-02-03","closed":false,"direction":1},{"date":"2026-01-31","closed":true,"direction":-1},{"date":"2026-01-30","closed":false,"direction":-1}]

## A3 — approve

Source: Preceding: roll back to the previous working day.

Original 2026-01-31; reviewed 2026-01-31; preceding; adjusted 2026-01-30; following baseline 2026-02-03

Review: 

Witness: [{"date":"2026-01-31","closed":true,"direction":-1},{"date":"2026-01-30","closed":false,"direction":-1}]
