# Radix Quay

1. "json-body" · held
   Source: {"id":"json-body","context":"JSON API integration: binary blob payload contract requires conventional plus/slash Base64 alphabet, equals padding and no whitespace.","raw":"SGVsbG8="}
   Review: {"id":"json-body","system":"api-blob","raw":"Zg==","decision":"hold","note":"=SUM(1,2)\nReviewed \"contract\", exactly.","evidence":[{"system":"api-blob","similarity":0.8457256957385804},{"system":"url-field","similarity":0.5677506942761422},{"system":"mail-part","similarity":0.4675340653370752}]}
   Check: {"id":"json-body","system":"api-blob","raw":"Zg==","status":"held","reason":"Reviewer hold; excluded from release."}

2. "query-body" · ready
   Source: {"id":"query-body","context":"Browser URL query attachment identifier uses dash/underscore URL-safe Base64 without trailing equals padding.","raw":"SGVsbG8"}
   Review: {"id":"query-body","system":"url-field","raw":"SGVsbG8","decision":"approve","note":"","evidence":[{"system":"url-field","similarity":0.9063157581392957},{"system":"mail-part","similarity":0.5351078360872061},{"system":"api-blob","similarity":0.5076370462855281}]}
   Check: {"id":"query-body","system":"url-field","raw":"SGVsbG8","status":"ready","baseline":"48656c6c6f","hex":"48656c6c6f","bytes":5,"canonical":"SGVsbG8","exactVerified":true}

3. "mail-body" · ready
   Source: {"id":"mail-body","context":"Mail transfer MIME attachment content: standard Base64 body with padded final quantum and CRLF folded lines.","raw":"AAEC\r\nAwQ="}
   Review: {"id":"mail-body","system":"mail-part","raw":"AAEC\r\nAwQ=","decision":"approve","note":"","evidence":[{"system":"mail-part","similarity":0.8479746992339988},{"system":"url-field","similarity":0.4787200311619667},{"system":"api-blob","similarity":0.46555065566688275}]}
   Check: {"id":"mail-body","system":"mail-part","raw":"AAEC\r\nAwQ=","status":"ready","baseline":"0001020304","hex":"0001020304","bytes":5,"canonical":"AAECAwQ=","exactVerified":true}

4. "url-wrong-alphabet" · blocked
   Source: {"id":"url-wrong-alphabet","context":"Web link query binary ID is encoded using unpadded URL-safe dash and underscore alphabet.","raw":"+/8"}
   Review: {"id":"url-wrong-alphabet","system":"url-field","raw":"+/8","decision":"approve","note":"","evidence":[{"system":"url-field","similarity":0.8030405765216463},{"system":"api-blob","similarity":0.40518417616996394},{"system":"mail-part","similarity":0.27315550504851555}]}
   Check: {"id":"url-wrong-alphabet","system":"url-field","raw":"+/8","status":"blocked","baseline":"fbff","reason":"URL-safe contract requires dash/underscore alphabet and forbids equals padding."}

5. "mail-lone-lf" · blocked
   Source: {"id":"mail-lone-lf","context":"Email MIME attachment encoded body with standard alphabet, equals padding and CRLF line folding up to 76 characters.","raw":"Zm9v\nYmFy"}
   Review: {"id":"mail-lone-lf","system":"mail-part","raw":"Zm9v\nYmFy","decision":"approve","note":"","evidence":[{"system":"mail-part","similarity":0.8948040913265091},{"system":"url-field","similarity":0.5346971214471238},{"system":"api-blob","similarity":0.5146392806180288}]}
   Check: {"id":"mail-lone-lf","system":"mail-part","raw":"Zm9v\nYmFy","status":"blocked","baseline":"666f6f626172","reason":"MIME contract requires nonempty lines ≤76 characters separated only by CRLF."}

6. "api-truncated" · blocked
   Source: {"id":"api-truncated","context":"Strict JSON API Base64 binary blob: conventional plus slash alphabet, required padding and no line wrapping.","raw":"Zg"}
   Review: {"id":"api-truncated","system":"api-blob","raw":"Zg","decision":"approve","note":"","evidence":[{"system":"api-blob","similarity":0.8986892619341054},{"system":"url-field","similarity":0.5303384002614389},{"system":"mail-part","similarity":0.5236138919103568}]}
   Check: {"id":"api-truncated","system":"api-blob","raw":"Zg","status":"blocked","baseline":"66","reason":"Standard contract requires plus/slash alphabet, complete quanta and exact equals padding."}

Computed counts: {"records":6,"ready":2,"held":1,"blocked":3,"approved":5,"readyBytes":10,"baselineAccepted":5,"permissiveOnly":3,"roundTrips":2}

Permissive baseline strips ASCII whitespace, accepts both alphabets, missing padding and nonzero pad bits. It is not a recommended importer. Differences are contract checks, not AI accuracy. No authenticity or signature verification. No uploads or API actions.