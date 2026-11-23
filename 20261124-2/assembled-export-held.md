# Query Quay

1. "signed-one" · held
   Source: {"id":"signed-one","context":"Secure temporary asset downloads where verification depends on the original byte sequence, query ordering and escaping.","raw":"https://example.test/asset?a=%2f&sig=xyz"}
   Review: {"id":"signed-one","system":"signed","raw":"https://example.test/asset?sig=reviewed%2f","decision":"hold","note":"=SUM(1,2)\nReviewed \"source\", exactly.","evidence":[{"system":"signed","similarity":0.5673402904780611},{"system":"campaign","similarity":0.2211445925757727},{"system":"catalog","similarity":0.14104395846994547}]}
   Check: {"id":"signed-one","system":"signed","raw":"https://example.test/asset?sig=reviewed%2f","status":"held","reason":"Reviewer hold"}

2. "signed-two" · ready
   Source: {"id":"signed-two","context":"Time-limited download authorization verifies the byte-for-byte signed URL; do not rewrite query parameters.","raw":"https://example.test/asset?a=%2F&sig=xyz"}
   Review: {"id":"signed-two","system":"signed","raw":"https://example.test/asset?a=%2F&sig=xyz","decision":"approve","note":"","evidence":[{"system":"signed","similarity":0.5496866011311242},{"system":"campaign","similarity":0.26285875181693796},{"system":"catalog","similarity":0.13379641455139688}]}
   Check: {"id":"signed-two","system":"signed","raw":"https://example.test/asset?a=%2F&sig=xyz","canonical":"https://example.test/asset?a=%2F&sig=xyz","baseline":"https://example.test/asset","changed":false,"removed":[],"pairs":[["a","/"],["sig","xyz"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

3. "filters" · ready
   Source: {"id":"filters","context":"Storefront catalog search: retain selected product facets and the sequence of repeated filters, sort field names only.","raw":"https://example.test/search?z=9&tag=b&tag=a&q=tea+pot"}
   Review: {"id":"filters","system":"catalog","raw":"https://example.test/search?z=9&tag=b&tag=a&q=tea+pot","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.7279438775928004},{"system":"campaign","similarity":0.3730517267134915},{"system":"signed","similarity":-0.004817282579315437}]}
   Check: {"id":"filters","system":"catalog","raw":"https://example.test/search?z=9&tag=b&tag=a&q=tea+pot","canonical":"https://example.test/search?q=tea+pot&tag=b&tag=a&z=9","baseline":"https://example.test/search","changed":true,"removed":[],"pairs":[["q","tea pot"],["tag","b"],["tag","a"],["z","9"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

4. "newsletter" · ready
   Source: {"id":"newsletter","context":"Newsletter campaign landing-page attribution cleanup: remove listed marketing campaign tracking fields only.","raw":"https://example.test/page?utm_campaign=fall&topic=tools#intro"}
   Review: {"id":"newsletter","system":"campaign","raw":"https://example.test/page?utm_campaign=fall&topic=tools#intro","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.6461850171654708},{"system":"signed","similarity":0.17145429121327216},{"system":"catalog","similarity":0.06891928344896499}]}
   Check: {"id":"newsletter","system":"campaign","raw":"https://example.test/page?utm_campaign=fall&topic=tools#intro","canonical":"https://example.test/page?topic=tools#intro","baseline":"https://example.test/page#intro","changed":true,"removed":[["utm_campaign","fall"]],"pairs":[["topic","tools"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

5. "credential-url" · blocked
   Source: {"id":"credential-url","context":"Private expiring signed download URLs. A cryptographic signature covers exact URL bytes and query parameter order.","raw":"https://user:pass@example.test/private"}
   Review: {"id":"credential-url","system":"signed","raw":"https://user:pass@example.test/private","decision":"approve","note":"","evidence":[{"system":"signed","similarity":0.6889891569763908},{"system":"campaign","similarity":0.27547818893410475},{"system":"catalog","similarity":0.16668307663598148}]}
   Check: {"id":"credential-url","system":"signed","raw":"https://user:pass@example.test/private","status":"blocked","reason":"Only absolute lowercase http(s) URLs without credentials are supported."}

6. "protocol" · blocked
   Source: {"id":"protocol","context":"Marketing newsletter attribution links for public campaign landing pages. Remove approved campaign tags, retain content selection.","raw":"javascript:alert(1)"}
   Review: {"id":"protocol","system":"campaign","raw":"javascript:alert(1)","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.6056819976004916},{"system":"signed","similarity":0.29709675359251747},{"system":"catalog","similarity":0.019600969556502472}]}
   Check: {"id":"protocol","system":"campaign","raw":"javascript:alert(1)","status":"blocked","reason":"Only absolute lowercase http(s) URLs without credentials are supported."}

Computed counts: {"records":6,"ready":3,"held":1,"blocked":2,"collisionRows":0,"exactChecks":3,"changed":2,"lostDistinctions":0}

Baseline strips the entire query. Lost distinctions count pairs with equal baseline but different reviewed canonical URLs. Similarity is not confidence; canonical equality is not proof of server equivalence. No URLs fetched or site changed.