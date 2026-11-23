# Weekbridge Desk

1. "New-year dispatch" · ready
   Source: {"id":"New-year dispatch","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"New-year dispatch","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8661149379090813},{"system":"calendar","similarity":0.34615708628953523},{"system":"ordinal","similarity":0.21638760527359344}]}
   Check: {"id":"New-year dispatch","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

2. "Sensor sample" · ready
   Source: {"id":"Sensor sample","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"Sensor sample","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8084091731087188},{"system":"calendar","similarity":0.38129001750358643},{"system":"week","similarity":0.2892666050131827}]}
   Check: {"id":"Sensor sample","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

3. "Invoice batch" · blocked
   Source: {"id":"Invoice batch","context":"Business invoice import, calendar year month and day of month.","raw":"20230229"}
   Review: {"id":"Invoice batch","system":"calendar","raw":"20230229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8269011570988754},{"system":"ordinal","similarity":0.348156276966823},{"system":"week","similarity":0.2675685071232976}]}
   Check: {"id":"Invoice batch","system":"calendar","raw":"20230229","status":"blocked","reason":"Nonexistent calendar day. No overflow repair is applied."}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"compared":2,"baselineMismatch":1,"crossYear":1,"edited":0}

Baseline treats seven-digit values as ordinal days and eight-digit values as calendar dates with permissive UTC rollover. Compared only on valid approved rows; not AI accuracy or measured time saved. Dates only: no timezone, time or external writes.