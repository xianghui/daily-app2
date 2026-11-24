# Member Sentinel

LOCAL JSON INTAKE QA — no uploads or endpoint calls.

1. "=row \"0\"\nO'Brien" · ready
   Source: {"id":"=row \"0\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"0\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.5434977158729573},{"system":"billing","similarity":0.2696023224211793},{"system":"people","similarity":0.19599368868569955}]}
   Check: {"id":"=row \"0\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

2. "=row \"1\"\nO'Brien" · blocked
   Source: {"id":"=row \"1\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"1\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"1\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

3. "=row \"2\"\nO'Brien" · blocked
   Source: {"id":"=row \"2\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"2\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"2\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

4. "=row \"3\"\nO'Brien" · ready
   Source: {"id":"=row \"3\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"3\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"3\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

5. "=row \"4\"\nO'Brien" · blocked
   Source: {"id":"=row \"4\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"4\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"4\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

6. "=row \"5\"\nO'Brien" · blocked
   Source: {"id":"=row \"5\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"5\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"5\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

7. "=row \"6\"\nO'Brien" · ready
   Source: {"id":"=row \"6\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"6\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"6\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

8. "=row \"7\"\nO'Brien" · blocked
   Source: {"id":"=row \"7\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"7\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"7\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

9. "=row \"8\"\nO'Brien" · blocked
   Source: {"id":"=row \"8\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"8\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"8\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

10. "=row \"9\"\nO'Brien" · ready
   Source: {"id":"=row \"9\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"9\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"9\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

11. "=row \"10\"\nO'Brien" · blocked
   Source: {"id":"=row \"10\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"10\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"10\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

12. "=row \"11\"\nO'Brien" · blocked
   Source: {"id":"=row \"11\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"11\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"11\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

13. "=row \"12\"\nO'Brien" · ready
   Source: {"id":"=row \"12\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"12\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"12\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

14. "=row \"13\"\nO'Brien" · blocked
   Source: {"id":"=row \"13\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"13\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"13\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

15. "=row \"14\"\nO'Brien" · blocked
   Source: {"id":"=row \"14\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"14\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"14\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

16. "=row \"15\"\nO'Brien" · ready
   Source: {"id":"=row \"15\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"15\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"15\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

17. "=row \"16\"\nO'Brien" · blocked
   Source: {"id":"=row \"16\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"16\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"16\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

18. "=row \"17\"\nO'Brien" · blocked
   Source: {"id":"=row \"17\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"17\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"17\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

19. "=row \"18\"\nO'Brien" · ready
   Source: {"id":"=row \"18\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"18\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"18\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

20. "=row \"19\"\nO'Brien" · blocked
   Source: {"id":"=row \"19\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"19\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"19\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

21. "=row \"20\"\nO'Brien" · blocked
   Source: {"id":"=row \"20\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"20\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"20\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

22. "=row \"21\"\nO'Brien" · ready
   Source: {"id":"=row \"21\"\nO'Brien","context":"The storeroom counted these product units for the stock import.","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}"}
   Review: {"id":"=row \"21\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","decision":"approve","note":"","evidence":[{"system":"stock","similarity":0.54070009402631},{"system":"billing","similarity":0.26324859965116476},{"system":"people","similarity":0.1943386441013396}]}
   Check: {"id":"=row \"21\"\nO'Brien","system":"stock","raw":"{\"sku\":\"BOLT-4\",\"quantity\":12}","target":{"required":["sku","quantity"]},"baseline":true,"match":true,"issues":[],"disagreement":false,"value":{"sku":"BOLT-4","quantity":12},"reason":"All required keys present; no duplicate decoded members or unsupported numeric literals detected. Field types/business rules still require review.","status":"ready"}

23. "=row \"22\"\nO'Brien" · blocked
   Source: {"id":"=row \"22\"\nO'Brien","context":"This accounts receivable invoice settlement should record the money in cents.","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}"}
   Review: {"id":"=row \"22\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6695493451940416},{"system":"stock","similarity":0.1624738836111645},{"system":"people","similarity":0.1194794822345363}]}
   Check: {"id":"=row \"22\"\nO'Brien","system":"billing","raw":"{\"invoice\":\"INV-17\",\"cents\":4500,\"cents\":5400}","target":{"required":["invoice","cents"]},"baseline":true,"match":false,"issues":[{"kind":"duplicate","path":"/cents","offset":33,"firstOffset":20,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten."}],"disagreement":true,"value":null,"reason":"Repeated decoded object member \"cents\". Earlier value would be overwritten.","status":"blocked"}

24. "=row \"23\"\nO'Brien" · blocked
   Source: {"id":"=row \"23\"\nO'Brien","context":"New subscriber contact details for our member directory.","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}"}
   Review: {"id":"=row \"23\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","decision":"approve","note":"","evidence":[{"system":"people","similarity":0.5475238530084547},{"system":"billing","similarity":0.17105481959005067},{"system":"stock","similarity":0.13547600319795502}]}
   Check: {"id":"=row \"23\"\nO'Brien","system":"people","raw":"{\"userId\":9007199254740993,\"email\":\"ava@example.test\"}","target":{"required":["userId","email"]},"baseline":true,"match":false,"issues":[{"kind":"number","path":"/userId","offset":10,"token":"9007199254740993","reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string."}],"disagreement":true,"value":null,"reason":"Numeric magnitude exceeds 2^53−1. Quote identifiers or use an agreed exact-decimal string.","status":"blocked"}

Computed counts: {"records":24,"ready":8,"held":0,"blocked":16,"compared":24,"disagreements":16}

Baseline accepts anything JSON.parse can parse. Differences are batch data checks, not AI accuracy or time saved.