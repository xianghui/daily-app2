# Radix Quay

1. "api-good" · ready
   Source: {"id":"api-good","context":"Strict JSON API binary blob field uses standard Base64 alphabet plus and slash with equals padding, no whitespace or line folding.","raw":"+/8="}
   Review: {"id":"api-good","system":"api-blob","raw":"+/8=","decision":"approve","note":"","evidence":[{"system":"api-blob","similarity":0.9999994838451198},{"system":"url-field","similarity":0.531143795359615},{"system":"mail-part","similarity":0.5147016625026962}]}
   Check: {"id":"api-good","system":"api-blob","raw":"+/8=","status":"ready","baseline":"fbff","hex":"fbff","bytes":2,"canonical":"+/8=","exactVerified":true}

2. "web-good" · ready
   Source: {"id":"web-good","context":"Web URL query binary attachment identifier uses URL-safe Base64 alphabet dash and underscore, unpadded without equals signs or whitespace.","raw":"-_8"}
   Review: {"id":"web-good","system":"url-field","raw":"-_8","decision":"approve","note":"","evidence":[{"system":"url-field","similarity":0.9999991085100652},{"system":"api-blob","similarity":0.531143795359615},{"system":"mail-part","similarity":0.5086333086441801}]}
   Check: {"id":"web-good","system":"url-field","raw":"-_8","status":"ready","baseline":"fbff","hex":"fbff","bytes":2,"canonical":"-_8","exactVerified":true}

3. "mail-fold" · ready
   Source: {"id":"mail-fold","context":"Email MIME attachment body uses standard Base64 with equals padding and CRLF line folding, at most 76 characters per line.","raw":"Zm9v\r\nYmFy"}
   Review: {"id":"mail-fold","system":"mail-part","raw":"Zm9v\r\nYmFy","decision":"approve","note":"","evidence":[{"system":"mail-part","similarity":0.9999999619201729},{"system":"api-blob","similarity":0.5147016625026962},{"system":"url-field","similarity":0.5086333086441801}]}
   Check: {"id":"mail-fold","system":"mail-part","raw":"Zm9v\r\nYmFy","status":"ready","baseline":"666f6f626172","hex":"666f6f626172","bytes":6,"canonical":"Zm9vYmFy","exactVerified":true}

4. "hidden-bits" · blocked
   Source: {"id":"hidden-bits","context":"Strict JSON API binary blob field uses standard Base64 alphabet plus and slash with equals padding, no whitespace or line folding.","raw":"Zh=="}
   Review: {"id":"hidden-bits","system":"api-blob","raw":"Zh==","decision":"approve","note":"","evidence":[{"system":"api-blob","similarity":0.9999994838451198},{"system":"url-field","similarity":0.531143795359615},{"system":"mail-part","similarity":0.5147016625026962}]}
   Check: {"id":"hidden-bits","system":"api-blob","raw":"Zh==","status":"blocked","baseline":"66","reason":"Nonzero unused pad bits: permissive decoding loses lexical information. Re-encode verified source bytes; do not silently repair."}

5. "web-padding" · blocked
   Source: {"id":"web-padding","context":"Web URL query binary attachment identifier uses URL-safe Base64 alphabet dash and underscore, unpadded without equals signs or whitespace.","raw":"Zg=="}
   Review: {"id":"web-padding","system":"url-field","raw":"Zg==","decision":"approve","note":"","evidence":[{"system":"url-field","similarity":0.9999991085100652},{"system":"api-blob","similarity":0.531143795359615},{"system":"mail-part","similarity":0.5086333086441801}]}
   Check: {"id":"web-padding","system":"url-field","raw":"Zg==","status":"blocked","baseline":"66","reason":"URL-safe contract requires dash/underscore alphabet and forbids equals padding."}

6. "api-gap" · blocked
   Source: {"id":"api-gap","context":"Strict JSON API binary blob field uses standard Base64 alphabet plus and slash with equals padding, no whitespace or line folding.","raw":"Zm 9v"}
   Review: {"id":"api-gap","system":"api-blob","raw":"Zm 9v","decision":"approve","note":"","evidence":[{"system":"api-blob","similarity":0.9923393482782449},{"system":"url-field","similarity":0.5427144776171784},{"system":"mail-part","similarity":0.5426374161478544}]}
   Check: {"id":"api-gap","system":"api-blob","raw":"Zm 9v","status":"blocked","baseline":"666f6f","reason":"This profile forbids whitespace and line folding."}

Computed counts: {"records":6,"ready":3,"held":0,"blocked":3,"approved":6,"readyBytes":10,"baselineAccepted":6,"permissiveOnly":3,"roundTrips":3}

Permissive baseline strips ASCII whitespace, accepts both alphabets, missing padding and nonzero pad bits. It is not a recommended importer. Differences are contract checks, not AI accuracy. No authenticity or signature verification. No uploads or API actions.