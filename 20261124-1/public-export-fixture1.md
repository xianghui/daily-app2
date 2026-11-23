# Duration Quay

1. "short-check" · ready
   Source: {"id":"short-check","context":"Lap stopwatch timings for short tasks use minutes followed by a colon and seconds.","raw":"12:05.250"}
   Review: {"id":"short-check","system":"stopwatch","raw":"12:05.250","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.7774512613583023},{"system":"iso","similarity":0.42736483685992943},{"system":"clock","similarity":0.42682144578583875},{"system":"hours","similarity":0.24561427080237272}]}
   Duration check: {"id":"short-check","system":"stopwatch","raw":"12:05.250","format":"minutes-seconds","milliseconds":725250,"seconds":"725.25","canonical":"PT725.25S","parts":[{"component":"minutes","value":"12","milliseconds":720000},{"component":"seconds","value":"05.250","milliseconds":5250}],"baselineSeconds":"43200","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

2. "shift" · ready
   Source: {"id":"shift","context":"Project planners write elapsed hours followed by a colon and minutes, not time of day.","raw":"27:15"}
   Review: {"id":"shift","system":"clock","raw":"27:15","decision":"approve","note":"","evidence":[{"system":"clock","similarity":0.7275520458725591},{"system":"iso","similarity":0.4714118061721354},{"system":"stopwatch","similarity":0.44867779716914463},{"system":"hours","similarity":0.41189445978612715}]}
   Duration check: {"id":"shift","system":"clock","raw":"27:15","format":"hours-minutes","milliseconds":98100000,"seconds":"98100","canonical":"PT98100S","parts":[{"component":"hours","value":"27","milliseconds":97200000},{"component":"minutes","value":"15","milliseconds":900000}],"baselineSeconds":"97200","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

3. "fractional-work" · ready
   Source: {"id":"fractional-work","context":"The payroll timesheet system exports labor in decimal hours; the fractional part is a fraction of one hour.","raw":"0.125"}
   Review: {"id":"fractional-work","system":"hours","raw":"0.125","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.8264705571349633},{"system":"clock","similarity":0.4025980607192543},{"system":"stopwatch","similarity":0.29394028585611365},{"system":"iso","similarity":0.28773900123874063}]}
   Duration check: {"id":"fractional-work","system":"hours","raw":"0.125","format":"decimal-hours","milliseconds":450000,"seconds":"450","canonical":"PT450S","parts":[{"component":"decimal hours","value":"0.125","milliseconds":450000}],"baselineSeconds":"450","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

4. "overnight-api" · ready
   Source: {"id":"overnight-api","context":"The machine API provides ISO 8601 durations with P and T component designators.","raw":"P1DT2H3M4.005S"}
   Review: {"id":"overnight-api","system":"iso","raw":"P1DT2H3M4.005S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.7690652352555556},{"system":"stopwatch","similarity":0.4040485047610791},{"system":"clock","similarity":0.3999026398245594},{"system":"hours","similarity":0.19022836310445757}]}
   Duration check: {"id":"overnight-api","system":"iso","raw":"P1DT2H3M4.005S","format":"iso","milliseconds":93784005,"seconds":"93784.005","canonical":"PT93784.005S","parts":[{"component":"days","value":"1","milliseconds":86400000},{"component":"hours","value":"2","milliseconds":7200000},{"component":"minutes","value":"3","milliseconds":180000},{"component":"seconds","value":"4.005","milliseconds":4005}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

5. "negative" · blocked
   Source: {"id":"negative","context":"The payroll timesheet system exports labor in decimal hours; the fractional part is a fraction of one hour.","raw":"-1.5"}
   Review: {"id":"negative","system":"hours","raw":"-1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.8289160499103504},{"system":"clock","similarity":0.3988511207839301},{"system":"stopwatch","similarity":0.2993392448904198},{"system":"iso","similarity":0.2892756167651454}]}
   Duration check: {"id":"negative","system":"hours","raw":"-1.5","format":"decimal-hours","status":"blocked","reason":"Decimal hours need unsigned digits, dot fractions ≤6 places, no whitespace or units."}

6. "empty-iso" · blocked
   Source: {"id":"empty-iso","context":"The machine API provides ISO 8601 durations with P and T component designators.","raw":"PT"}
   Review: {"id":"empty-iso","system":"iso","raw":"PT","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.7711295879140401},{"system":"stopwatch","similarity":0.3980604213230609},{"system":"clock","similarity":0.3941125117387232},{"system":"hours","similarity":0.1819171419217018}]}
   Duration check: {"id":"empty-iso","system":"iso","raw":"PT","format":"iso","status":"blocked","reason":"Use fixed ISO P[nD][T[nH][nM][n[.sss]S]]. No years, calendar months, weeks, signs or empty T."}

Computed counts: {"records":6,"ready":4,"held":0,"blocked":2,"exactChecks":4,"changedInterpretations":3,"totalSeconds":"193059.255"}

Baseline: parseFloat(raw) interpreted as decimal hours, compared only on ready rows. Exact parser never guesses a format or rounds. Fixed elapsed durations only, not calendar arithmetic, payroll rules or time of day.