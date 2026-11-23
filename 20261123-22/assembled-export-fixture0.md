# Path Haven

1. "office-a" · collision
   Source: {"id":"office-a","context":"Microsoft Windows desktop NTFS shared drive Explorer office staff","raw":"Reports\\Q1.txt"}
   Review: {"id":"office-a","system":"win","raw":"Reports\\Q1.txt","decision":"approve","note":"","evidence":[{"system":"win","similarity":0.861571796039735},{"system":"unix","similarity":0.06266212826573242}]}
   Path check: {"id":"office-a","system":"win","raw":"Reports\\Q1.txt","kind":"windows","path":"Reports/Q1.txt","key":"reports/q1.txt","segments":2,"changed":true,"status":"collision","witnesses":["office-b"],"reason":"Conflicts with office-b"}

2. "office-b" · collision
   Source: {"id":"office-b","context":"Windows Explorer Microsoft office desktop shared drive","raw":"reports/q1.TXT"}
   Review: {"id":"office-b","system":"win","raw":"reports/q1.TXT","decision":"approve","note":"","evidence":[{"system":"win","similarity":0.7371947182913156},{"system":"unix","similarity":-0.022850283905640766}]}
   Path check: {"id":"office-b","system":"win","raw":"reports/q1.TXT","kind":"windows","path":"reports/q1.TXT","key":"reports/q1.txt","segments":2,"changed":false,"status":"collision","witnesses":["office-a"],"reason":"Conflicts with office-a"}

3. "server-a" · ready
   Source: {"id":"server-a","context":"Linux Unix POSIX server deployment shell application hosting","raw":"assets/./logo.svg"}
   Review: {"id":"server-a","system":"unix","raw":"assets/./logo.svg","decision":"approve","note":"","evidence":[{"system":"unix","similarity":0.92784068227805},{"system":"win","similarity":0.023095841743782257}]}
   Path check: {"id":"server-a","system":"unix","raw":"assets/./logo.svg","kind":"posix","path":"assets/logo.svg","key":"assets/logo.svg","segments":2,"changed":true,"status":"ready","witnesses":[]}

4. "server-b" · ready
   Source: {"id":"server-b","context":"Linux POSIX Unix deployment server hosting","raw":"assets/Logo.svg"}
   Review: {"id":"server-b","system":"unix","raw":"assets/Logo.svg","decision":"approve","note":"","evidence":[{"system":"unix","similarity":0.8502624880920301},{"system":"win","similarity":0.023354400256826453}]}
   Path check: {"id":"server-b","system":"unix","raw":"assets/Logo.svg","kind":"posix","path":"assets/Logo.svg","key":"assets/Logo.svg","segments":2,"changed":false,"status":"ready","witnesses":[]}

5. "escape" · blocked
   Source: {"id":"escape","context":"Microsoft Windows NTFS Explorer shared drive","raw":"docs/../../private.txt"}
   Review: {"id":"escape","system":"win","raw":"docs/../../private.txt","decision":"approve","note":"","evidence":[{"system":"win","similarity":0.7262132913510908},{"system":"unix","similarity":0.004727068708996356}]}
   Path check: {"id":"escape","system":"win","raw":"docs/../../private.txt","kind":"windows","status":"blocked","reason":"Traversal escapes the destination root."}

6. "root" · blocked
   Source: {"id":"root","context":"Linux Unix POSIX server deployment filesystem","raw":"/etc/config"}
   Review: {"id":"root","system":"unix","raw":"/etc/config","decision":"approve","note":"","evidence":[{"system":"unix","similarity":0.9042641478859549},{"system":"win","similarity":0.07608787498568145}]}
   Path check: {"id":"root","system":"unix","raw":"/etc/config","kind":"posix","status":"blocked","reason":"Absolute, UNC, rooted and drive-relative paths are blocked."}

Conflict witnesses: [{"a":"office-a","b":"office-b","reason":"same canonical file","rawDuplicate":false}]

Computed counts: {"records":6,"ready":2,"held":0,"blocked":2,"collision":2,"normalized":2,"conflictPairs":1,"rawDuplicatePairs":0,"missedPairs":1}

Baseline compares identical reviewed raw paths within each destination. Lexical checks only: no symlink, existing-file or real filesystem inspection; not an extraction security guarantee.