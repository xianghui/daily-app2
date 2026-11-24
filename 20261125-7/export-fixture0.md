# Member Sentinel

LOCAL JSON INTAKE QA — no uploads or endpoint calls.

1. "Operations handoff-1" · ready
   Source: {"id":"Operations handoff-1","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"Operations handoff-1","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.5434977158729573},{"system":"billing","similarity":0.2696023224211793},{"system":"people","similarity":0.19599368868569955}]}
   Check: {"id":"Operations handoff-1","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

2. "Operations handoff-2" · blocked
   Source: {"id":"Operations handoff-2","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"Operations handoff-2","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.670631402742617},{"system":"stock","similarity":0.15207631277541656},{"system":"people","similarity":0.10457483499658282}]}
   Check: {"id":"Operations handoff-2","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

3. "Operations handoff-3" · blocked
   Source: {"id":"Operations handoff-3","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"Operations handoff-3","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.553142947169657},{"system":"billing","similarity":0.17116872095364347},{"system":"stock","similarity":0.14692502515896758}]}
   Check: {"id":"Operations handoff-3","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

Computed counts: {"records":3,"ready":1,"held":0,"blocked":2,"compared":3,"disagreements":2}

Baseline accepts anything JSON.parse can parse. Differences are batch data checks, not AI accuracy or time saved.