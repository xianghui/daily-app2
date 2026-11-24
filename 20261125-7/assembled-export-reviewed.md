# Member Sentinel

LOCAL JSON INTAKE QA — no uploads or endpoint calls.

1. "Second delivery-1" · ready
   Source: {"id":"Second delivery-1","context":"The user account signup contact list needs this email entry.","raw":"{\"userId\":\"9007199254740993\",\"email\":\"kai@example.test\"}"}
   Review: {"id":"Second delivery-1","system":"people","raw":"{\"userId\":\"9007199254740993\",\"email\":\"kai@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.6136850837899784},{"system":"billing","similarity":0.07859649471015925},{"system":"stock","similarity":-0.009476116877499293}]}
   Check: {"id":"Second delivery-1","system":"people","raw":"{\"userId\":\"9007199254740993\",\"email\":\"kai@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"userId":"9007199254740993","email":"kai@example.test"},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

2. "Second delivery-2" · ready
   Source: {"id":"Second delivery-2","context":"A warehouse product stock correction from the shelf count.","raw":"{\"sku\":\"NUT-7\",\"quantity\":3,\"meta\":{\"bin\":1,\"b\\u0069n\":2}}"}
   Review: {"id":"Second delivery-2","system":"stock","raw":"{\n  \"sku\": \"Nut, \\\"é\\\"\",\n  \"quantity\": 7\n}","decision":"approve","note":"=SUM(1,2)\nReviewed \"paper\", exactly.","evidence":[{"system":"stock","similarity":0.6590626918471464},{"system":"billing","similarity":0.17687742772462128},{"system":"people","similarity":0.04994812128718254}]}
   Check: {"id":"Second delivery-2","system":"stock","raw":"{\n  \"sku\": \"Nut, \\\"é\\\"\",\n  \"quantity\": 7\n}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"Nut, \"é\"","quantity":7},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

3. "Second delivery-3" · ready
   Source: {"id":"Second delivery-3","context":"Finance supplied the invoice payment amount for the billing import.","raw":"{\"invoice\":\"INV-18\",\"cents\":2500}"}
   Review: {"id":"Second delivery-3","system":"billing","raw":"{\"invoice\":\"INV-18\",\"cents\":2500}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.5630762616549128},{"system":"people","similarity":0.2532364356550381},{"system":"stock","similarity":0.19395222830667277}]}
   Check: {"id":"Second delivery-3","system":"billing","raw":"{\"invoice\":\"INV-18\",\"cents\":2500}","target":{"required":["invoice","cents"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"invoice":"INV-18","cents":2500},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

Computed counts: {"records":3,"ready":3,"held":0,"blocked":0,"compared":3,"disagreements":0}

Baseline accepts anything JSON.parse can parse. Differences are batch data checks, not AI accuracy or time saved.