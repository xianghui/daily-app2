# Synthetic leap-year accrual review

3 originals retained; 0 held. 2 rounded interest differences versus ACT/360. Not AI accuracy, measured savings or accounting advice.

## B1 — approve

Source: Use European thirty-day months, 30E/360. Neither February end nor maturity has special treatment.

Original: 2024-02-29 / 2024-05-31 / 25000 / 3.75%

Reviewed: 2024-02-29 / 2024-05-31 / 25000 / 3.75%; 30E/360; fraction 91/360; simple interest 236.98 EUR; ACT/360 baseline 239.58

Review: =SUM(1,2)
Reviewed "date", <script> & 🧾

Witness: {"startDay":29,"endDay":31,"adjustedStartDay":29,"adjustedEndDay":30,"yearPart":0,"monthPart":90}

## B2 — approve

Source: Actual/360 convention: the true number of calendar days over 360.

Original: 2024-02-28 / 2024-03-01 / 25000 / 3.75%

Reviewed: 2024-02-28 / 2024-03-01 / 25000 / 3.75%; ACT/360; fraction 2/360; simple interest 5.21 EUR; ACT/360 baseline 5.21

Review: 

Witness: {"elapsedCalendarDays":2,"fixedYearDays":360}

## B3 — approve

Source: Use Actual/365 fixed. Keep 365 as denominator during the leap year.

Original: 2024-02-28 / 2024-03-01 / 25000 / 3.75%

Reviewed: 2024-02-28 / 2024-03-01 / 25000 / 3.75%; ACT/365F; fraction 2/365; simple interest 5.14 EUR; ACT/360 baseline 5.21

Review: 

Witness: {"elapsedCalendarDays":2,"fixedYearDays":365}
