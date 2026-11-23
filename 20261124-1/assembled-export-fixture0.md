# Duration Quay

1. "payroll" · ready
   Source: {"id":"payroll","context":"The payroll timesheet system exports labor in decimal hours; the fractional part is a fraction of one hour.","raw":"1.5"}
   Review: {"id":"payroll","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.8264705571349633},{"system":"clock","similarity":0.4025980607192543},{"system":"stopwatch","similarity":0.29394028585611365},{"system":"iso","similarity":0.28773900123874063}]}
   Duration check: {"id":"payroll","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

2. "planning" · ready
   Source: {"id":"planning","context":"Project planners write elapsed hours followed by a colon and minutes, not time of day.","raw":"1:30"}
   Review: {"id":"planning","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":0.7275520458725591},{"system":"iso","similarity":0.4714118061721354},{"system":"stopwatch","similarity":0.44867779716914463},{"system":"hours","similarity":0.41189445978612715}]}
   Duration check: {"id":"planning","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

3. "lap" · ready
   Source: {"id":"lap","context":"Lap stopwatch timings for short tasks use minutes followed by a colon and seconds.","raw":"1:30"}
   Review: {"id":"lap","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.7774512613583023},{"system":"iso","similarity":0.42736483685992943},{"system":"clock","similarity":0.42682144578583875},{"system":"hours","similarity":0.24561427080237272}]}
   Duration check: {"id":"lap","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

4. "api" · ready
   Source: {"id":"api","context":"The machine API provides ISO 8601 durations with P and T component designators.","raw":"PT1H30M"}
   Review: {"id":"api","system":"iso","raw":"PT1H30M","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.7690652352555556},{"system":"stopwatch","similarity":0.4040485047610791},{"system":"clock","similarity":0.3999026398245594},{"system":"hours","similarity":0.19022836310445757}]}
   Duration check: {"id":"api","system":"iso","raw":"PT1H30M","format":"iso","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000},{"component":"seconds","value":"0","milliseconds":0}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

5. "bad-minute" · blocked
   Source: {"id":"bad-minute","context":"Project planners write elapsed hours followed by a colon and minutes, not time of day.","raw":"1:75"}
   Review: {"id":"bad-minute","system":"clock","raw":"1:75","decision":"approve","note":"","evidence":[{"system":"clock","similarity":0.7132391109671459},{"system":"iso","similarity":0.47211945273395045},{"system":"stopwatch","similarity":0.4419710893997652},{"system":"hours","similarity":0.40292998322017626}]}
   Duration check: {"id":"bad-minute","system":"clock","raw":"1:75","format":"hours-minutes","status":"blocked","reason":"Use H:MM, minutes 00–59; no seconds or time-of-day rollover."}

6. "calendar-month" · blocked
   Source: {"id":"calendar-month","context":"The machine API provides ISO 8601 durations with P and T component designators.","raw":"P1M"}
   Review: {"id":"calendar-month","system":"iso","raw":"P1M","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.76461717373851},{"system":"stopwatch","similarity":0.4027770130962338},{"system":"clock","similarity":0.3853157258271685},{"system":"hours","similarity":0.18619138201778584}]}
   Duration check: {"id":"calendar-month","system":"iso","raw":"P1M","format":"iso","status":"blocked","reason":"Use fixed ISO P[nD][T[nH][nM][n[.sss]S]]. No years, calendar months, weeks, signs or empty T."}

Computed counts: {"records":6,"ready":4,"held":0,"blocked":2,"exactChecks":4,"changedInterpretations":3,"totalSeconds":"16290"}

Baseline: parseFloat(raw) interpreted as decimal hours, compared only on ready rows. Exact parser never guesses a format or rounds. Fixed elapsed durations only, not calendar arithmetic, payroll rules or time of day.