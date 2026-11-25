# Synthetic month-end accrual review

3 originals retained; 0 held. 2 rounded interest differences versus ACT/360. Not AI accuracy, measured savings or accounting advice.

## A1 — approve

Source: Money market interest using actual calendar days divided by 360.

Original: 2026-01-31 / 2026-03-31 / 10000.00 / 5%

Reviewed: 2026-01-31 / 2026-03-31 / 10000.00 / 5%; ACT/360; fraction 59/360; simple interest 81.94 USD; ACT/360 baseline 81.94

Review: 

Witness: {"elapsedCalendarDays":59,"fixedYearDays":360}

## A2 — approve

Source: Actual elapsed days with a fixed 365-day annual denominator.

Original: 2026-01-31 / 2026-03-31 / 10000.00 / 5%

Reviewed: 2026-01-31 / 2026-03-31 / 10000.00 / 5%; ACT/365F; fraction 59/365; simple interest 80.82 USD; ACT/360 baseline 81.94

Review: 

Witness: {"elapsedCalendarDays":59,"fixedYearDays":365}

## A3 — approve

Source: European 30E/360, with day 31 clamped to 30 in both dates.

Original: 2026-01-31 / 2026-03-31 / 10000.00 / 5%

Reviewed: 2026-01-31 / 2026-03-31 / 10000.00 / 5%; 30E/360; fraction 60/360; simple interest 83.33 USD; ACT/360 baseline 81.94

Review: 

Witness: {"startDay":31,"endDay":31,"adjustedStartDay":30,"adjustedEndDay":30,"yearPart":0,"monthPart":60}
