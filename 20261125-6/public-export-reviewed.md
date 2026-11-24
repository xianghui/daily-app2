# Integrity Folio

LOCAL TEXT RELEASE CHECK — no uploads or file writes.

1. "Visitor kiosk-1" · blocked
   Source: {"id":"Visitor kiosk-1","context":"The foyer sign says what time people may visit during the working week.","raw":"Monday–Friday: 09:00–17:00\n\n"}
   Review: {"id":"Visitor kiosk-1","system":"policy","raw":"Monday–Friday: 09:00–17:00\n\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.3257214873363823},{"system":"locale","similarity":0.1837944256304324},{"system":"style","similarity":0.1565938636171758}]}
   Check: {"id":"Visitor kiosk-1","system":"policy","raw":"Monday–Friday: 09:00–17:00\n\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":32,"sha256":"516108783d1adac2ea0d7ad817b1df7d5b3c29945baa2e0fa8f6da60803448ac"},"sameBytes":false,"match":false,"disagreement":false,"reason":"Digest differs and byte count differs; both checks reject this asset.","status":"blocked"}

2. "Visitor kiosk-2" · blocked
   Source: {"id":"Visitor kiosk-2","context":"These rules paint the web page text and set the visual theme.","raw":"body { color: #325; }\n"}
   Review: {"id":"Visitor kiosk-2","system":"style","raw":"first\nsecond, \"é\"","decision":"approve","note":"=SUM(1,2)\nReviewed \"paper\", exactly.","evidence":[{"system":"style","similarity":0.47234472058278243},{"system":"locale","similarity":0.15752548694115323},{"system":"policy","similarity":0.1553777261412397}]}
   Check: {"id":"Visitor kiosk-2","system":"style","raw":"first\nsecond, \"é\"","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":18,"sha256":"7614f2c2b895fb2f6a2fc2e9ef243191a2fba90693546011ebda09103708dbf7"},"sameBytes":false,"match":false,"disagreement":false,"reason":"Digest differs and byte count differs; both checks reject this asset.","status":"blocked"}

3. "Visitor kiosk-3" · ready
   Source: {"id":"Visitor kiosk-3","context":"Use these translated hello and goodbye strings for the French UI.","raw":"{\"welcome\":\"Bonjour\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"Visitor kiosk-3","system":"locale","raw":"{\"welcome\":\"Bonjour\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.7115631749544055},{"system":"policy","similarity":0.24407960915042837},{"system":"style","similarity":0.1391009680940444}]}
   Check: {"id":"Visitor kiosk-3","system":"locale","raw":"{\"welcome\":\"Bonjour\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

Computed counts: {"records":3,"ready":1,"held":0,"blocked":2,"compared":3,"disagreements":0}

Baseline compares UTF-8 byte length only. Differences are data checks, not AI accuracy or time saved.