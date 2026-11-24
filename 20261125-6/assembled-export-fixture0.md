# Integrity Folio

LOCAL TEXT RELEASE CHECK — no uploads or file writes.

1. "Website release-1" · ready
   Source: {"id":"Website release-1","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"Website release-1","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.516522281470569},{"system":"policy","similarity":0.1861484723601146},{"system":"locale","similarity":0.16894477414049602}]}
   Check: {"id":"Website release-1","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

2. "Website release-2" · blocked
   Source: {"id":"Website release-2","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"Website release-2","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6461710502791642},{"system":"policy","similarity":0.35099828598999666},{"system":"style","similarity":0.17185438403034903}]}
   Check: {"id":"Website release-2","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

3. "Website release-3" · ready
   Source: {"id":"Website release-3","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"Website release-3","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.40236411938796607},{"system":"locale","similarity":0.1313694905398763},{"system":"style","similarity":0.04190127789034762}]}
   Check: {"id":"Website release-3","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"compared":3,"disagreements":1}

Baseline compares UTF-8 byte length only. Differences are data checks, not AI accuracy or time saved.