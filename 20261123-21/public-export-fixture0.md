# Decimal Harbor

1. "boston" · ready
   Source: {"id":"boston","context":"United States Boston American US sales accounting export","raw":"1,234.50"}
   Review: {"id":"boston","system":"us","raw":"1,234.50","decision":"approve","note":"","evidence":[{"system":"us","similarity":0.6986427498027951},{"system":"de","similarity":0.3106396566320443},{"system":"fr","similarity":0.16025033257788168}]}
   Exact result: {"id":"boston","system":"us","raw":"1,234.50","baseline":"1","status":"ready","value":"1234.50","fractionDigits":2,"grouped":true,"baselineDiffers":true}

2. "berlin" · ready
   Source: {"id":"berlin","context":"Germany Berlin German DE warehouse measurement export","raw":"1.234,50"}
   Review: {"id":"berlin","system":"de","raw":"1.234,50","decision":"approve","note":"","evidence":[{"system":"de","similarity":0.7015914170784794},{"system":"us","similarity":0.2588704224626472},{"system":"fr","similarity":0.2570971635964976}]}
   Exact result: {"id":"berlin","system":"de","raw":"1.234,50","baseline":"1.234","status":"ready","value":"1234.50","fractionDigits":2,"grouped":true,"baselineDiffers":true}

3. "paris" · ready
   Source: {"id":"paris","context":"France Paris French FR laboratory sample export","raw":"1 234,50"}
   Review: {"id":"paris","system":"fr","raw":"1 234,50","decision":"approve","note":"","evidence":[{"system":"fr","similarity":0.71848268044518},{"system":"de","similarity":0.30185090891672556},{"system":"us","similarity":0.18386633391783685}]}
   Exact result: {"id":"paris","system":"fr","raw":"1 234,50","baseline":"1","status":"ready","value":"1234.50","fractionDigits":2,"grouped":true,"baselineDiffers":true}

4. "us-small" · ready
   Source: {"id":"us-small","context":"American US Boston sales accounting sheet","raw":"1,234"}
   Review: {"id":"us-small","system":"us","raw":"1,234","decision":"approve","note":"","evidence":[{"system":"us","similarity":0.8004772479253022},{"system":"de","similarity":0.43374489418006706},{"system":"fr","similarity":0.3074367644168783}]}
   Exact result: {"id":"us-small","system":"us","raw":"1,234","baseline":"1","status":"ready","value":"1234","fractionDigits":0,"grouped":true,"baselineDiffers":true}

5. "de-small" · ready
   Source: {"id":"de-small","context":"German Germany Berlin warehouse measurements sheet","raw":"1,234"}
   Review: {"id":"de-small","system":"de","raw":"1,234","decision":"approve","note":"","evidence":[{"system":"de","similarity":0.7473644964533702},{"system":"fr","similarity":0.2915147241438741},{"system":"us","similarity":0.27287607986131507}]}
   Exact result: {"id":"de-small","system":"de","raw":"1,234","baseline":"1","status":"ready","value":"1.234","fractionDigits":3,"grouped":false,"baselineDiffers":true}

6. "fr-large" · ready
   Source: {"id":"fr-large","context":"French France Paris laboratory sample readings","raw":"9007199254740993,25"}
   Review: {"id":"fr-large","system":"fr","raw":"9007199254740993,25","decision":"approve","note":"","evidence":[{"system":"fr","similarity":0.7261864874573296},{"system":"de","similarity":0.2675094232408385},{"system":"us","similarity":0.0771637561311107}]}
   Exact result: {"id":"fr-large","system":"fr","raw":"9007199254740993,25","baseline":"9007199254740992","status":"ready","value":"9007199254740993.25","fractionDigits":2,"grouped":false,"baselineDiffers":true}

Computed counts: {"records":6,"ready":6,"held":0,"blocked":0,"baselineDisagreements":6,"baselineUnavailable":0}

Baseline is JavaScript parseFloat(reviewed raw string), not AI accuracy. Decimal strings preserve digits; this is not currency/unit conversion or financial execution.