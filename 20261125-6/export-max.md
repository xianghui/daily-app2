# Integrity Folio

LOCAL TEXT RELEASE CHECK — no uploads or file writes.

1. "=row \"0\"\nO'Brien" · ready
   Source: {"id":"=row \"0\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"0\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.516522281470569},{"system":"policy","similarity":0.1861484723601146},{"system":"locale","similarity":0.16894477414049602}]}
   Check: {"id":"=row \"0\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

2. "=row \"1\"\nO'Brien" · blocked
   Source: {"id":"=row \"1\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"1\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"1\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

3. "=row \"2\"\nO'Brien" · ready
   Source: {"id":"=row \"2\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"2\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"2\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

4. "=row \"3\"\nO'Brien" · blocked
   Source: {"id":"=row \"3\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"3\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"3\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

5. "=row \"4\"\nO'Brien" · blocked
   Source: {"id":"=row \"4\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"4\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"4\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

6. "=row \"5\"\nO'Brien" · blocked
   Source: {"id":"=row \"5\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"5\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"5\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

7. "=row \"6\"\nO'Brien" · blocked
   Source: {"id":"=row \"6\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"6\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"6\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

8. "=row \"7\"\nO'Brien" · blocked
   Source: {"id":"=row \"7\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"7\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"7\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

9. "=row \"8\"\nO'Brien" · blocked
   Source: {"id":"=row \"8\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"8\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"8\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

10. "=row \"9\"\nO'Brien" · blocked
   Source: {"id":"=row \"9\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"9\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"9\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

11. "=row \"10\"\nO'Brien" · blocked
   Source: {"id":"=row \"10\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"10\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"10\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

12. "=row \"11\"\nO'Brien" · blocked
   Source: {"id":"=row \"11\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"11\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"11\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

13. "=row \"12\"\nO'Brien" · blocked
   Source: {"id":"=row \"12\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"12\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"12\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

14. "=row \"13\"\nO'Brien" · blocked
   Source: {"id":"=row \"13\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"13\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"13\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

15. "=row \"14\"\nO'Brien" · blocked
   Source: {"id":"=row \"14\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"14\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"14\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

16. "=row \"15\"\nO'Brien" · blocked
   Source: {"id":"=row \"15\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"15\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"15\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

17. "=row \"16\"\nO'Brien" · blocked
   Source: {"id":"=row \"16\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"16\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"16\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

18. "=row \"17\"\nO'Brien" · blocked
   Source: {"id":"=row \"17\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"17\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"17\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

19. "=row \"18\"\nO'Brien" · blocked
   Source: {"id":"=row \"18\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"18\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"18\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

20. "=row \"19\"\nO'Brien" · blocked
   Source: {"id":"=row \"19\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"19\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"19\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

21. "=row \"20\"\nO'Brien" · blocked
   Source: {"id":"=row \"20\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"20\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"20\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

22. "=row \"21\"\nO'Brien" · blocked
   Source: {"id":"=row \"21\"\nO'Brien","context":"The front page needs its typeface and colour rules from this theme sheet.","raw":"body { color: #324; }\n"}
   Review: {"id":"=row \"21\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","decision":"approve","note":"","evidence":[{"system":"style","similarity":0.5385290684034267},{"system":"policy","similarity":0.1847822782832255},{"system":"locale","similarity":0.1774886627332228}]}
   Check: {"id":"=row \"21\"\nO'Brien","system":"style","raw":"body { color: #324; }\n","target":{"path":"/assets/theme.css","bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"actual":{"bytes":22,"sha256":"2d1eee71e92aa8e601f8c9b42e946105b5f75ebe4e9647573762d98e59e7d916"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

23. "=row \"22\"\nO'Brien" · blocked
   Source: {"id":"=row \"22\"\nO'Brien","context":"The app greeting and farewell words for French-speaking visitors.","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n"}
   Review: {"id":"=row \"22\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","decision":"approve","note":"","evidence":[{"system":"locale","similarity":0.6347757056393541},{"system":"policy","similarity":0.34886969612311836},{"system":"style","similarity":0.17042160362637535}]}
   Check: {"id":"=row \"22\"\nO'Brien","system":"locale","raw":"{\"welcome\":\"BonjouR\",\"bye\":\"Au revoir\"}\n","target":{"path":"/assets/fr.json","bytes":40,"sha256":"79b4519acdb12253b4b5b45552106e8a9ec34730711ac669d25b709726e9dda0"},"actual":{"bytes":40,"sha256":"789d05a610422bfbdacb5910d17f9739b29aea85472012604e7f688a3b8535cd"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

24. "=row \"23\"\nO'Brien" · blocked
   Source: {"id":"=row \"23\"\nO'Brien","context":"The reception notice showing when the building is open on weekdays.","raw":"Monday–Friday: 09:00–17:00\n"}
   Review: {"id":"=row \"23\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","decision":"approve","note":"","evidence":[{"system":"policy","similarity":0.39622970318395584},{"system":"locale","similarity":0.12195848676092817},{"system":"style","similarity":0.03702090021716237}]}
   Check: {"id":"=row \"23\"\nO'Brien","system":"policy","raw":"Monday–Friday: 09:00–17:00\n","target":{"path":"/assets/hours.txt","bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"actual":{"bytes":31,"sha256":"977135cbdc9d3630243b7ece75e40cd35480828d31379c2111aa452d9ca73b07"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Duplicate output path; resolve or hold before manifest export.","status":"blocked"}

Computed counts: {"records":24,"ready":2,"held":0,"blocked":22,"compared":24,"disagreements":8}

Baseline compares UTF-8 byte length only. Differences are data checks, not AI accuracy or time saved.