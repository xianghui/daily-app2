# Null Lantern

LOCAL REVIEW ONLY — no database connections.

Original input: {"plans":[{"id":"age","description":"Adult age eligibility: the person must be at least eighteen years old.","predicate":"age >= 18"},{"id":"credit","description":"Invoice credit balance: the amount owed must not exceed the credit limit.","predicate":"balance <= limit_amount"},{"id":"contact","description":"Customer contact email address is required and cannot be missing.","predicate":"email IS NOT NULL"}],"records":[{"id":"Unknown birthday","context":"Check whether the customer is old enough for adult membership.","raw":"{\"age\":null}"},{"id":"Missing balance","context":"Validate the invoice debt against the available account credit ceiling.","raw":"{\"balance\":null,\"limit_amount\":500}"},{"id":"Absent address","context":"Ensure the customer has supplied a contact email address.","raw":"{\"email\":null}"}]}

1. "Unknown birthday" · ready
   Source: {"id":"Unknown birthday","context":"Check whether the customer is old enough for adult membership.","raw":"{\"age\":null}"}
   Review: {"id":"Unknown birthday","system":"age","raw":"{\"age\":null}","decision":"approve","note":"","evidence":[{"system":"age","similarity":0.500155635007004},{"system":"contact","similarity":0.26260580217098056},{"system":"credit","similarity":0.19222827421118643}]}
   Check: {"id":"Unknown birthday","system":"age","raw":"{\"age\":null}","predicate":"age >= 18","bindings":{"age":null},"value":null,"truth":"UNKNOWN","checkPass":true,"wherePass":false,"disagreement":true,"trace":[{"expression":"\"age\"","value":null},{"expression":"18","value":18},{"expression":"(\"age\" >= 18)","value":null}],"sqlExpression":"(NULL >= 18)","reason":"UNKNOWN passes SQL CHECK, but is not selected by WHERE. Add an explicit IS NOT NULL guard if presence is required.","status":"ready"}

2. "Missing balance" · ready
   Source: {"id":"Missing balance","context":"Validate the invoice debt against the available account credit ceiling.","raw":"{\"balance\":null,\"limit_amount\":500}"}
   Review: {"id":"Missing balance","system":"credit","raw":"{\"balance\":null,\"limit_amount\":500}","decision":"approve","note":"","evidence":[{"system":"credit","similarity":0.7316376188826275},{"system":"contact","similarity":0.15667415488590597},{"system":"age","similarity":0.11161632766323079}]}
   Check: {"id":"Missing balance","system":"credit","raw":"{\"balance\":null,\"limit_amount\":500}","predicate":"balance <= limit_amount","bindings":{"balance":null,"limit_amount":500},"value":null,"truth":"UNKNOWN","checkPass":true,"wherePass":false,"disagreement":true,"trace":[{"expression":"\"balance\"","value":null},{"expression":"\"limit_amount\"","value":500},{"expression":"(\"balance\" <= \"limit_amount\")","value":null}],"sqlExpression":"(NULL <= 500)","reason":"UNKNOWN passes SQL CHECK, but is not selected by WHERE. Add an explicit IS NOT NULL guard if presence is required.","status":"ready"}

3. "Absent address" · ready
   Source: {"id":"Absent address","context":"Ensure the customer has supplied a contact email address.","raw":"{\"email\":null}"}
   Review: {"id":"Absent address","system":"contact","raw":"{\"email\":null}","decision":"approve","note":"","evidence":[{"system":"contact","similarity":0.6768403295654175},{"system":"credit","similarity":0.14922369818606368},{"system":"age","similarity":0.08716054604892501}]}
   Check: {"id":"Absent address","system":"contact","raw":"{\"email\":null}","predicate":"email IS NOT NULL","bindings":{"email":null},"value":false,"truth":"FALSE","checkPass":false,"wherePass":false,"disagreement":false,"trace":[{"expression":"\"email\"","value":null},{"expression":"(\"email\" IS NOT NULL)","value":false}],"sqlExpression":"(NULL IS NOT NULL)","reason":"FALSE fails CHECK and is excluded by WHERE.","status":"ready"}

Computed counts: {"records":3,"ready":3,"unknown":2,"held":0,"blocked":0,"disagreements":2}

WHERE-as-CHECK baseline rejects UNKNOWN, while SQL CHECK permits UNKNOWN. Differences are semantic outcomes, not accuracy or time saved. NULL presence requirements must be explicit.