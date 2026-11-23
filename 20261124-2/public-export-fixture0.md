# Query Quay

1. "ad-a" · collision
   Source: {"id":"ad-a","context":"Marketing newsletter attribution links for public campaign landing pages. Remove approved campaign tags, retain content selection.","raw":"https://example.test/guide?utm_source=mail&lang=en"}
   Review: {"id":"ad-a","system":"campaign","raw":"https://example.test/guide?utm_source=mail&lang=en","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.6355232819679076},{"system":"signed","similarity":0.3256368884040793},{"system":"catalog","similarity":0.03540123120711368}]}
   Check: {"id":"ad-a","system":"campaign","raw":"https://example.test/guide?utm_source=mail&lang=en","canonical":"https://example.test/guide?lang=en","baseline":"https://example.test/guide","changed":true,"removed":[["utm_source","mail"]],"pairs":[["lang","en"]],"protectedDifference":true,"exactVerified":true,"status":"collision","reason":"Same canonical URL as: ad-b"}

2. "ad-b" · collision
   Source: {"id":"ad-b","context":"Marketing newsletter attribution links for public campaign landing pages. Remove approved campaign tags, retain content selection.","raw":"https://example.test/guide?lang=en&utm_medium=email"}
   Review: {"id":"ad-b","system":"campaign","raw":"https://example.test/guide?lang=en&utm_medium=email","decision":"approve","note":"","evidence":[{"system":"campaign","similarity":0.6407689195283988},{"system":"signed","similarity":0.3152888244967771},{"system":"catalog","similarity":0.02534910426738229}]}
   Check: {"id":"ad-b","system":"campaign","raw":"https://example.test/guide?lang=en&utm_medium=email","canonical":"https://example.test/guide?lang=en","baseline":"https://example.test/guide","changed":true,"removed":[["utm_medium","email"]],"pairs":[["lang","en"]],"protectedDifference":true,"exactVerified":true,"status":"collision","reason":"Same canonical URL as: ad-a"}

3. "filter-red" · ready
   Source: {"id":"filter-red","context":"Ecommerce catalog search filter URLs. Every query value affects which products are shown. Preserve repeated filter order.","raw":"https://example.test/shop?size=M&color=red"}
   Review: {"id":"filter-red","system":"catalog","raw":"https://example.test/shop?size=M&color=red","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.8065321900753034},{"system":"campaign","similarity":0.42428939517374775},{"system":"signed","similarity":0.15909097204009737}]}
   Check: {"id":"filter-red","system":"catalog","raw":"https://example.test/shop?size=M&color=red","canonical":"https://example.test/shop?color=red&size=M","baseline":"https://example.test/shop","changed":true,"removed":[],"pairs":[["color","red"],["size","M"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

4. "filter-blue" · ready
   Source: {"id":"filter-blue","context":"Ecommerce catalog search filter URLs. Every query value affects which products are shown. Preserve repeated filter order.","raw":"https://example.test/shop?color=blue&size=M"}
   Review: {"id":"filter-blue","system":"catalog","raw":"https://example.test/shop?color=blue&size=M","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.8065321900753034},{"system":"campaign","similarity":0.42428939517374775},{"system":"signed","similarity":0.15909097204009737}]}
   Check: {"id":"filter-blue","system":"catalog","raw":"https://example.test/shop?color=blue&size=M","canonical":"https://example.test/shop?color=blue&size=M","baseline":"https://example.test/shop","changed":false,"removed":[],"pairs":[["color","blue"],["size","M"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

5. "signed-order" · ready
   Source: {"id":"signed-order","context":"Private expiring signed download URLs. A cryptographic signature covers exact URL bytes and query parameter order.","raw":"https://example.test/file?z=2&a=%2f&sig=abc"}
   Review: {"id":"signed-order","system":"signed","raw":"https://example.test/file?z=2&a=%2f&sig=abc","decision":"approve","note":"","evidence":[{"system":"signed","similarity":0.7140590269201716},{"system":"campaign","similarity":0.23926073405876935},{"system":"catalog","similarity":0.13571947055714578}]}
   Check: {"id":"signed-order","system":"signed","raw":"https://example.test/file?z=2&a=%2f&sig=abc","canonical":"https://example.test/file?z=2&a=%2f&sig=abc","baseline":"https://example.test/file","changed":false,"removed":[],"pairs":[["z","2"],["a","/"],["sig","abc"]],"protectedDifference":true,"exactVerified":true,"status":"ready"}

6. "bad-escape" · blocked
   Source: {"id":"bad-escape","context":"Ecommerce catalog search filter URLs. Every query value affects which products are shown. Preserve repeated filter order.","raw":"https://example.test/shop?q=%GG"}
   Review: {"id":"bad-escape","system":"catalog","raw":"https://example.test/shop?q=%GG","decision":"approve","note":"","evidence":[{"system":"catalog","similarity":0.7898795397830218},{"system":"campaign","similarity":0.4226250968859936},{"system":"signed","similarity":0.1689346463338898}]}
   Check: {"id":"bad-escape","system":"catalog","raw":"https://example.test/shop?q=%GG","status":"blocked","reason":"Use an ASCII HTTP(S) URL ≤600, percent-encode spaces/Unicode; no malformed escapes or backslashes."}

Computed counts: {"records":6,"ready":3,"held":0,"blocked":1,"collisionRows":2,"exactChecks":5,"changed":3,"lostDistinctions":1}

Baseline strips the entire query. Lost distinctions count pairs with equal baseline but different reviewed canonical URLs. Similarity is not confidence; canonical equality is not proof of server equivalence. No URLs fetched or site changed.