# Weekbridge Desk

1. "=row \"0\"\nnext" · ready
   Source: {"id":"=row \"0\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"0\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8661149379090813},{"system":"calendar","similarity":0.34615708628953523},{"system":"ordinal","similarity":0.21638760527359344}]}
   Check: {"id":"=row \"0\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

2. "=row \"1\"\nnext" · ready
   Source: {"id":"=row \"1\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"1\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"1\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

3. "=row \"2\"\nnext" · ready
   Source: {"id":"=row \"2\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"2\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"2\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

4. "=row \"3\"\nnext" · ready
   Source: {"id":"=row \"3\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"3\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"3\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

5. "=row \"4\"\nnext" · ready
   Source: {"id":"=row \"4\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"4\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"4\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

6. "=row \"5\"\nnext" · ready
   Source: {"id":"=row \"5\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"5\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"5\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

7. "=row \"6\"\nnext" · ready
   Source: {"id":"=row \"6\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"6\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"6\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

8. "=row \"7\"\nnext" · ready
   Source: {"id":"=row \"7\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"7\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"7\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

9. "=row \"8\"\nnext" · ready
   Source: {"id":"=row \"8\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"8\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"8\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

10. "=row \"9\"\nnext" · ready
   Source: {"id":"=row \"9\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"9\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"9\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

11. "=row \"10\"\nnext" · ready
   Source: {"id":"=row \"10\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"10\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"10\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

12. "=row \"11\"\nnext" · ready
   Source: {"id":"=row \"11\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"11\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"11\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

13. "=row \"12\"\nnext" · ready
   Source: {"id":"=row \"12\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"12\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"12\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

14. "=row \"13\"\nnext" · ready
   Source: {"id":"=row \"13\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"13\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"13\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

15. "=row \"14\"\nnext" · ready
   Source: {"id":"=row \"14\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"14\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"14\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

16. "=row \"15\"\nnext" · ready
   Source: {"id":"=row \"15\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"15\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"15\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

17. "=row \"16\"\nnext" · ready
   Source: {"id":"=row \"16\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"16\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"16\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

18. "=row \"17\"\nnext" · ready
   Source: {"id":"=row \"17\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"17\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"17\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

19. "=row \"18\"\nnext" · ready
   Source: {"id":"=row \"18\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"18\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"18\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

20. "=row \"19\"\nnext" · ready
   Source: {"id":"=row \"19\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"19\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"19\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

21. "=row \"20\"\nnext" · ready
   Source: {"id":"=row \"20\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"20\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"20\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

22. "=row \"21\"\nnext" · ready
   Source: {"id":"=row \"21\"\nnext","context":"ISO week date shipment schedule, week year and Monday-based weekday.","raw":"2020011"}
   Review: {"id":"=row \"21\"\nnext","system":"week","raw":"2020011","decision":"approve","note":"","evidence":[{"system":"week","similarity":0.8632929870829484},{"system":"calendar","similarity":0.3368768204422928},{"system":"ordinal","similarity":0.2158495445891315}]}
   Check: {"id":"=row \"21\"\nnext","system":"week","raw":"2020011","kind":"iso-week","date":"2019-12-30","parts":{"weekYear":2020,"week":1,"weekday":1,"weekOneMonday":"2019-12-30"},"baseline":"2020-01-11","baselineMismatch":true,"crossYear":true,"reason":"Week 1 contains January 4; Thursday determines the week-year.","status":"ready"}

23. "=row \"22\"\nnext" · ready
   Source: {"id":"=row \"22\"\nnext","context":"Scientific instrument annual log, ordinal day of year number.","raw":"2020060"}
   Review: {"id":"=row \"22\"\nnext","system":"ordinal","raw":"2020060","decision":"approve","note":"","evidence":[{"system":"ordinal","similarity":0.8133419953065123},{"system":"calendar","similarity":0.39423863382109725},{"system":"week","similarity":0.2960542629081709}]}
   Check: {"id":"=row \"22\"\nnext","system":"ordinal","raw":"2020060","kind":"ordinal","date":"2020-02-29","parts":{"year":2020,"ordinal":60},"baseline":"2020-02-29","baselineMismatch":false,"crossYear":false,"reason":"Count from January 1; validated against leap-year length.","status":"ready"}

24. "=row \"23\"\nnext" · ready
   Source: {"id":"=row \"23\"\nnext","context":"Business invoice import, calendar year month and day of month.","raw":"20240229"}
   Review: {"id":"=row \"23\"\nnext","system":"calendar","raw":"20240229","decision":"approve","note":"","evidence":[{"system":"calendar","similarity":0.8361168034223693},{"system":"ordinal","similarity":0.3540279695060908},{"system":"week","similarity":0.26465866277869543}]}
   Check: {"id":"=row \"23\"\nnext","system":"calendar","raw":"20240229","kind":"calendar","date":"2024-02-29","parts":{"year":2024,"month":2,"day":29},"baseline":"2024-02-29","baselineMismatch":false,"crossYear":false,"reason":"Strict Gregorian month/day bounds; no rollover.","status":"ready"}

Computed counts: {"records":24,"ready":24,"held":0,"blocked":0,"compared":24,"baselineMismatch":8,"crossYear":8,"edited":0}

Baseline treats seven-digit values as ordinal days and eight-digit values as calendar dates with permissive UTC rollover. Compared only on valid approved rows; not AI accuracy or measured time saved. Dates only: no timezone, time or external writes.