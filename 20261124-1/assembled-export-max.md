# Duration Quay

1. "=row \"0\"\nnext" · ready
   Source: {"id":"=row \"0\"\nnext","context":"Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour","raw":"1.5"}
   Review: {"id":"=row \"0\"\nnext","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.9999998876383176},{"system":"clock","similarity":0.4244831402629178},{"system":"iso","similarity":0.3053591031415751},{"system":"stopwatch","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"0\"\nnext","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

2. "=row \"1\"\nnext" · ready
   Source: {"id":"=row \"1\"\nnext","context":"Project planning estimates elapsed hours and minutes in H:MM clock notation","raw":"1:30"}
   Review: {"id":"=row \"1\"\nnext","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":1.0000000233901862},{"system":"stopwatch","similarity":0.4645791075591123},{"system":"iso","similarity":0.4507214590170685},{"system":"hours","similarity":0.4244831402629178}]}
   Duration check: {"id":"=row \"1\"\nnext","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

3. "=row \"2\"\nnext" · ready
   Source: {"id":"=row \"2\"\nnext","context":"Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation","raw":"1:30"}
   Review: {"id":"=row \"2\"\nnext","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.9999999696225063},{"system":"clock","similarity":0.4645791075591123},{"system":"iso","similarity":0.46293106195068723},{"system":"hours","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"2\"\nnext","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

4. "=row \"3\"\nnext" · ready
   Source: {"id":"=row \"3\"\nnext","context":"Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds","raw":"PT90S"}
   Review: {"id":"=row \"3\"\nnext","system":"iso","raw":"PT90S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.9999998768865999},{"system":"stopwatch","similarity":0.46293106195068723},{"system":"clock","similarity":0.4507214590170685},{"system":"hours","similarity":0.3053591031415751}]}
   Duration check: {"id":"=row \"3\"\nnext","system":"iso","raw":"PT90S","format":"iso","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"0","milliseconds":0},{"component":"minutes","value":"0","milliseconds":0},{"component":"seconds","value":"90","milliseconds":90000}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

5. "=row \"4\"\nnext" · ready
   Source: {"id":"=row \"4\"\nnext","context":"Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour","raw":"1.5"}
   Review: {"id":"=row \"4\"\nnext","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.9999998876383176},{"system":"clock","similarity":0.4244831402629178},{"system":"iso","similarity":0.3053591031415751},{"system":"stopwatch","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"4\"\nnext","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

6. "=row \"5\"\nnext" · ready
   Source: {"id":"=row \"5\"\nnext","context":"Project planning estimates elapsed hours and minutes in H:MM clock notation","raw":"1:30"}
   Review: {"id":"=row \"5\"\nnext","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":1.0000000233901862},{"system":"stopwatch","similarity":0.4645791075591123},{"system":"iso","similarity":0.4507214590170685},{"system":"hours","similarity":0.4244831402629178}]}
   Duration check: {"id":"=row \"5\"\nnext","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

7. "=row \"6\"\nnext" · ready
   Source: {"id":"=row \"6\"\nnext","context":"Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation","raw":"1:30"}
   Review: {"id":"=row \"6\"\nnext","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.9999999696225063},{"system":"clock","similarity":0.4645791075591123},{"system":"iso","similarity":0.46293106195068723},{"system":"hours","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"6\"\nnext","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

8. "=row \"7\"\nnext" · ready
   Source: {"id":"=row \"7\"\nnext","context":"Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds","raw":"PT90S"}
   Review: {"id":"=row \"7\"\nnext","system":"iso","raw":"PT90S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.9999998768865999},{"system":"stopwatch","similarity":0.46293106195068723},{"system":"clock","similarity":0.4507214590170685},{"system":"hours","similarity":0.3053591031415751}]}
   Duration check: {"id":"=row \"7\"\nnext","system":"iso","raw":"PT90S","format":"iso","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"0","milliseconds":0},{"component":"minutes","value":"0","milliseconds":0},{"component":"seconds","value":"90","milliseconds":90000}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

9. "=row \"8\"\nnext" · ready
   Source: {"id":"=row \"8\"\nnext","context":"Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour","raw":"1.5"}
   Review: {"id":"=row \"8\"\nnext","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.9999998876383176},{"system":"clock","similarity":0.4244831402629178},{"system":"iso","similarity":0.3053591031415751},{"system":"stopwatch","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"8\"\nnext","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

10. "=row \"9\"\nnext" · ready
   Source: {"id":"=row \"9\"\nnext","context":"Project planning estimates elapsed hours and minutes in H:MM clock notation","raw":"1:30"}
   Review: {"id":"=row \"9\"\nnext","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":1.0000000233901862},{"system":"stopwatch","similarity":0.4645791075591123},{"system":"iso","similarity":0.4507214590170685},{"system":"hours","similarity":0.4244831402629178}]}
   Duration check: {"id":"=row \"9\"\nnext","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

11. "=row \"10\"\nnext" · ready
   Source: {"id":"=row \"10\"\nnext","context":"Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation","raw":"1:30"}
   Review: {"id":"=row \"10\"\nnext","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.9999999696225063},{"system":"clock","similarity":0.4645791075591123},{"system":"iso","similarity":0.46293106195068723},{"system":"hours","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"10\"\nnext","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

12. "=row \"11\"\nnext" · ready
   Source: {"id":"=row \"11\"\nnext","context":"Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds","raw":"PT90S"}
   Review: {"id":"=row \"11\"\nnext","system":"iso","raw":"PT90S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.9999998768865999},{"system":"stopwatch","similarity":0.46293106195068723},{"system":"clock","similarity":0.4507214590170685},{"system":"hours","similarity":0.3053591031415751}]}
   Duration check: {"id":"=row \"11\"\nnext","system":"iso","raw":"PT90S","format":"iso","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"0","milliseconds":0},{"component":"minutes","value":"0","milliseconds":0},{"component":"seconds","value":"90","milliseconds":90000}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

13. "=row \"12\"\nnext" · ready
   Source: {"id":"=row \"12\"\nnext","context":"Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour","raw":"1.5"}
   Review: {"id":"=row \"12\"\nnext","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.9999998876383176},{"system":"clock","similarity":0.4244831402629178},{"system":"iso","similarity":0.3053591031415751},{"system":"stopwatch","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"12\"\nnext","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

14. "=row \"13\"\nnext" · ready
   Source: {"id":"=row \"13\"\nnext","context":"Project planning estimates elapsed hours and minutes in H:MM clock notation","raw":"1:30"}
   Review: {"id":"=row \"13\"\nnext","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":1.0000000233901862},{"system":"stopwatch","similarity":0.4645791075591123},{"system":"iso","similarity":0.4507214590170685},{"system":"hours","similarity":0.4244831402629178}]}
   Duration check: {"id":"=row \"13\"\nnext","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

15. "=row \"14\"\nnext" · ready
   Source: {"id":"=row \"14\"\nnext","context":"Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation","raw":"1:30"}
   Review: {"id":"=row \"14\"\nnext","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.9999999696225063},{"system":"clock","similarity":0.4645791075591123},{"system":"iso","similarity":0.46293106195068723},{"system":"hours","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"14\"\nnext","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

16. "=row \"15\"\nnext" · ready
   Source: {"id":"=row \"15\"\nnext","context":"Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds","raw":"PT90S"}
   Review: {"id":"=row \"15\"\nnext","system":"iso","raw":"PT90S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.9999998768865999},{"system":"stopwatch","similarity":0.46293106195068723},{"system":"clock","similarity":0.4507214590170685},{"system":"hours","similarity":0.3053591031415751}]}
   Duration check: {"id":"=row \"15\"\nnext","system":"iso","raw":"PT90S","format":"iso","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"0","milliseconds":0},{"component":"minutes","value":"0","milliseconds":0},{"component":"seconds","value":"90","milliseconds":90000}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

17. "=row \"16\"\nnext" · ready
   Source: {"id":"=row \"16\"\nnext","context":"Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour","raw":"1.5"}
   Review: {"id":"=row \"16\"\nnext","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.9999998876383176},{"system":"clock","similarity":0.4244831402629178},{"system":"iso","similarity":0.3053591031415751},{"system":"stopwatch","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"16\"\nnext","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

18. "=row \"17\"\nnext" · ready
   Source: {"id":"=row \"17\"\nnext","context":"Project planning estimates elapsed hours and minutes in H:MM clock notation","raw":"1:30"}
   Review: {"id":"=row \"17\"\nnext","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":1.0000000233901862},{"system":"stopwatch","similarity":0.4645791075591123},{"system":"iso","similarity":0.4507214590170685},{"system":"hours","similarity":0.4244831402629178}]}
   Duration check: {"id":"=row \"17\"\nnext","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

19. "=row \"18\"\nnext" · ready
   Source: {"id":"=row \"18\"\nnext","context":"Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation","raw":"1:30"}
   Review: {"id":"=row \"18\"\nnext","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.9999999696225063},{"system":"clock","similarity":0.4645791075591123},{"system":"iso","similarity":0.46293106195068723},{"system":"hours","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"18\"\nnext","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

20. "=row \"19\"\nnext" · ready
   Source: {"id":"=row \"19\"\nnext","context":"Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds","raw":"PT90S"}
   Review: {"id":"=row \"19\"\nnext","system":"iso","raw":"PT90S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.9999998768865999},{"system":"stopwatch","similarity":0.46293106195068723},{"system":"clock","similarity":0.4507214590170685},{"system":"hours","similarity":0.3053591031415751}]}
   Duration check: {"id":"=row \"19\"\nnext","system":"iso","raw":"PT90S","format":"iso","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"0","milliseconds":0},{"component":"minutes","value":"0","milliseconds":0},{"component":"seconds","value":"90","milliseconds":90000}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

21. "=row \"20\"\nnext" · ready
   Source: {"id":"=row \"20\"\nnext","context":"Payroll timesheet export records elapsed work as decimal hours, with fractions of an hour","raw":"1.5"}
   Review: {"id":"=row \"20\"\nnext","system":"hours","raw":"1.5","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.9999998876383176},{"system":"clock","similarity":0.4244831402629178},{"system":"iso","similarity":0.3053591031415751},{"system":"stopwatch","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"20\"\nnext","system":"hours","raw":"1.5","format":"decimal-hours","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"decimal hours","value":"1.5","milliseconds":5400000}],"baselineSeconds":"5400","differentFromBaseline":false,"exactVerified":true,"status":"ready"}

22. "=row \"21\"\nnext" · ready
   Source: {"id":"=row \"21\"\nnext","context":"Project planning estimates elapsed hours and minutes in H:MM clock notation","raw":"1:30"}
   Review: {"id":"=row \"21\"\nnext","system":"clock","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"clock","similarity":1.0000000233901862},{"system":"stopwatch","similarity":0.4645791075591123},{"system":"iso","similarity":0.4507214590170685},{"system":"hours","similarity":0.4244831402629178}]}
   Duration check: {"id":"=row \"21\"\nnext","system":"clock","raw":"1:30","format":"hours-minutes","milliseconds":5400000,"seconds":"5400","canonical":"PT5400S","parts":[{"component":"hours","value":"1","milliseconds":3600000},{"component":"minutes","value":"30","milliseconds":1800000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

23. "=row \"22\"\nnext" · ready
   Source: {"id":"=row \"22\"\nnext","context":"Stopwatch lap timings for short tasks are elapsed minutes and seconds in M:SS notation","raw":"1:30"}
   Review: {"id":"=row \"22\"\nnext","system":"stopwatch","raw":"1:30","decision":"approve","note":"","evidence":[{"system":"stopwatch","similarity":0.9999999696225063},{"system":"clock","similarity":0.4645791075591123},{"system":"iso","similarity":0.46293106195068723},{"system":"hours","similarity":0.2683669501049822}]}
   Duration check: {"id":"=row \"22\"\nnext","system":"stopwatch","raw":"1:30","format":"minutes-seconds","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"minutes","value":"1","milliseconds":60000},{"component":"seconds","value":"30","milliseconds":30000}],"baselineSeconds":"3600","differentFromBaseline":true,"exactVerified":true,"status":"ready"}

24. "=row \"23\"\nnext" · ready
   Source: {"id":"=row \"23\"\nnext","context":"Machine API uses ISO 8601 duration strings with P and T designators for days hours minutes seconds","raw":"PT90S"}
   Review: {"id":"=row \"23\"\nnext","system":"iso","raw":"PT90S","decision":"approve","note":"","evidence":[{"system":"iso","similarity":0.9999998768865999},{"system":"stopwatch","similarity":0.46293106195068723},{"system":"clock","similarity":0.4507214590170685},{"system":"hours","similarity":0.3053591031415751}]}
   Duration check: {"id":"=row \"23\"\nnext","system":"iso","raw":"PT90S","format":"iso","milliseconds":90000,"seconds":"90","canonical":"PT90S","parts":[{"component":"days","value":"0","milliseconds":0},{"component":"hours","value":"0","milliseconds":0},{"component":"minutes","value":"0","milliseconds":0},{"component":"seconds","value":"90","milliseconds":90000}],"baselineSeconds":null,"differentFromBaseline":true,"exactVerified":true,"status":"ready"}

Computed counts: {"records":24,"ready":24,"held":0,"blocked":0,"exactChecks":24,"changedInterpretations":18,"totalSeconds":"65880"}

Baseline: parseFloat(raw) interpreted as decimal hours, compared only on ready rows. Exact parser never guesses a format or rounds. Fixed elapsed durations only, not calendar arithmetic, payroll rules or time of day.