# Weekbridge Desk

1. "Annual sample" · blocked
   Source: {"id":"Annual sample","context":"Scientific instrument log, ordinal day number counted from January 1.","raw":"2023366"}
   Review: {"id":"Annual sample","system":"ordinal","raw":"2023366","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8197186658384985},{"system":"calendar","similarity":0.36436648978920083},{"system":"week","similarity":0.2561821312330793}]}
   Check: {"id":"Annual sample","system":"ordinal","raw":"2023366","status":"blocked","reason":"Ordinal day outside this calendar year; leap-year bound is 365."}

2. "Shipping Friday" · ready
   Source: {"id":"Shipping Friday","context":"ISO shipment schedule, week-based year week number and weekday.","raw":"2020535"}
   Review: {"id":"Shipping Friday","system":"week","raw":"2020535","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8624594256787045},{"system":"calendar","similarity":0.34413820106295706},{"system":"ordinal","similarity":0.2757921470446203}]}
   Check: {"id":"Shipping Friday","system":"week","raw":"2020535","kind":"iso-week","date":"2021-01-01","parts":{"weekYear":2020,"week":53,"weekday":5,"weekOneMonday":"2019-12-30"},"baseline":"2021-06-18","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

3. "Ledger close" · ready
   Source: {"id":"Ledger close","context":"Business invoice calendar date, year month and day of month.","raw":"20241231"}
   Review: {"id":"Ledger close","system":"calendar","raw":"20241231","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.788467203501146},{"system":"ordinal","similarity":0.3957736772461624},{"system":"week","similarity":0.27461182434503895}]}
   Check: {"id":"Ledger close","system":"calendar","raw":"20241231","kind":"calendar","date":"2024-12-31","parts":{"year":2024,"month":12,"day":31},"baseline":"2024-12-31","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"compared":2,"baselineMismatch":1,"crossYear":1,"edited":0}

Baseline treats seven-digit values as ordinal days and eight-digit values as calendar dates with permissive UTC rollover. Compared only on valid approved rows; not AI accuracy or measured time saved. Dates only: no timezone, time or external writes.