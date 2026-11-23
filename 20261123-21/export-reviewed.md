# Decimal Harbor

1. "credit" · ready
   Source: {"id":"credit","context":"Germany Berlin German warehouse measurement spreadsheet","raw":"-2.400,125"}
   Review: {"id":"credit","system":"de","raw":"-3.210,25","decision":"approve","note":"=SUM(1,2)\nReviewed \"source\", exactly.","evidence":[{"system":"de","similarity":0.8050997181629336},{"system":"fr","similarity":0.382859837791674},{"system":"us","similarity":0.34996451750473667}]}
   Exact result: {"id":"credit","system":"de","raw":"-3.210,25","baseline":"-3.21","status":"ready","value":"-3210.25","fractionDigits":2,"grouped":true,"baselineDiffers":true}

2. "sample" · ready
   Source: {"id":"sample","context":"France Paris French laboratory sample spreadsheet","raw":"+0,000125"}
   Review: {"id":"sample","system":"fr","raw":"+0,000125","decision":"approve","note":"","evidence":[{"system":"fr","similarity":0.8291808593543735},{"system":"de","similarity":0.412556467930922},{"system":"us","similarity":0.2957851262589984}]}
   Exact result: {"id":"sample","system":"fr","raw":"+0,000125","baseline":"0","status":"ready","value":"0.000125","fractionDigits":6,"grouped":false,"baselineDiffers":true}

3. "sales" · ready
   Source: {"id":"sales","context":"United States American Boston sales accounting spreadsheet","raw":"-0.00"}
   Review: {"id":"sales","system":"us","raw":"-0.00","decision":"approve","note":"","evidence":[{"system":"us","similarity":0.8444970998319173},{"system":"de","similarity":0.4731144641453224},{"system":"fr","similarity":0.3183436047581535}]}
   Exact result: {"id":"sales","system":"us","raw":"-0.00","baseline":"0","status":"ready","value":"0.00","fractionDigits":2,"grouped":false,"baselineDiffers":false}

4. "group-error" · blocked
   Source: {"id":"group-error","context":"United States Boston American sales accounting export","raw":"12,34.50"}
   Review: {"id":"group-error","system":"us","raw":"12,34.50","decision":"approve","note":"","evidence":[{"system":"us","similarity":0.6937393092919827},{"system":"de","similarity":0.31254140972785427},{"system":"fr","similarity":0.14912010202977125}]}
   Exact result: {"id":"group-error","system":"us","raw":"12,34.50","baseline":"12","status":"blocked","reason":"Invalid thousands grouping: first group 1–3 digits, all following groups exactly 3."}

5. "too-precise" · blocked
   Source: {"id":"too-precise","context":"Germany Berlin German warehouse measurement export","raw":"1,1234567"}
   Review: {"id":"too-precise","system":"de","raw":"1,1234567","decision":"approve","note":"","evidence":[{"system":"de","similarity":0.6884079742512175},{"system":"fr","similarity":0.24586663929483965},{"system":"us","similarity":0.2438935042844754}]}
   Exact result: {"id":"too-precise","system":"de","raw":"1,1234567","baseline":"1","status":"blocked","reason":"Fraction exceeds reviewed scale; rounding is never automatic."}

6. "space-error" · blocked
   Source: {"id":"space-error","context":"France Paris French laboratory sample export","raw":"1 234,50"}
   Review: {"id":"space-error","system":"fr","raw":"1 234,50","decision":"approve","note":"","evidence":[{"system":"fr","similarity":0.6967678351142295},{"system":"de","similarity":0.30711963325305713},{"system":"us","similarity":0.20024696847944376}]}
   Exact result: {"id":"space-error","system":"fr","raw":"1 234,50","baseline":"1","status":"blocked","reason":"Unsupported character or separator. No whitespace trimming, exponents, currency, percentages or parentheses."}

Computed counts: {"records":6,"ready":3,"held":0,"blocked":3,"baselineDisagreements":2,"baselineUnavailable":0}

Baseline is JavaScript parseFloat(reviewed raw string), not AI accuracy. Decimal strings preserve digits; this is not currency/unit conversion or financial execution.