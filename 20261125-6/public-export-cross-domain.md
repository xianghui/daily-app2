# Integrity Folio

LOCAL TEXT RELEASE CHECK — no uploads or file writes.

1. "calibration-1" · ready
   Source: {"id":"calibration-1","context":"The bench team supplied the gain and correction constants for the thermometer probes.","raw":"probe,gain,offset\nA,1.02,-0.3\n"}
   Review: {"id":"calibration-1","system":"calibration","raw":"probe,gain,offset\nA,1.02,-0.3\n","decision":"approve","note":"","evidence":[{"system":"calibration","similarity":0.6415402762272425},{"system":"dispatch","similarity":0.04536310200021954},{"system":"badge","similarity":-0.03851259052499539}]}
   Check: {"id":"calibration-1","system":"calibration","raw":"probe,gain,offset\nA,1.02,-0.3\n","target":{"path":"/lab/calibration.csv","bytes":30,"sha256":"a6e2f8e2bfaab535cdcbc3c909f3cda899e00467ec725395b2ef9cb4707eec56"},"actual":{"bytes":30,"sha256":"a6e2f8e2bfaab535cdcbc3c909f3cda899e00467ec725395b2ef9cb4707eec56"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

2. "dispatch-1" · blocked
   Source: {"id":"dispatch-1","context":"The storeroom handover describes wrapping parcels and which loading bay to use.","raw":"Pack fragile items first.\nLoad bay C.\n"}
   Review: {"id":"dispatch-1","system":"dispatch","raw":"Pack fragile items first.\nLoad bay C.\n","decision":"approve","note":"","evidence":[{"system":"dispatch","similarity":0.4944802666088447},{"system":"badge","similarity":0.05664808537064871},{"system":"calibration","similarity":-0.00898640078800012}]}
   Check: {"id":"dispatch-1","system":"dispatch","raw":"Pack fragile items first.\nLoad bay C.\n","target":{"path":"/warehouse/dispatch.txt","bytes":38,"sha256":"c73a67a768486ca2f2e626a17af48cff27ab03a8b8f6982f60c35e2d407e64ad"},"actual":{"bytes":38,"sha256":"e9ec48c9c80e52de799a7db207729ff0308220972cef8b95e3b3afc27e2f1544"},"sameBytes":true,"match":false,"disagreement":true,"reason":"Same byte count, different digest: the length-only baseline falsely passes this asset.","status":"blocked"}

3. "badge-1" · ready
   Source: {"id":"badge-1","context":"The event printer needs the attendee name-tag design with organization line.","raw":"<svg><text>Delegate name</text></svg>\n"}
   Review: {"id":"badge-1","system":"badge","raw":"<svg><text>Delegate name</text></svg>\n","decision":"approve","note":"","evidence":[{"system":"badge","similarity":0.48705293374965625},{"system":"dispatch","similarity":0.12293390209452273},{"system":"calibration","similarity":0.04687317650847575}]}
   Check: {"id":"badge-1","system":"badge","raw":"<svg><text>Delegate name</text></svg>\n","target":{"path":"/conference/badge.svg","bytes":38,"sha256":"e46a05b6933d964f83f756b12372eead60c9eb51208002c3dadd15805dba3077"},"actual":{"bytes":38,"sha256":"e46a05b6933d964f83f756b12372eead60c9eb51208002c3dadd15805dba3077"},"sameBytes":true,"match":true,"disagreement":false,"reason":"Exact UTF-8 bytes match the supplied SHA-256. This does not authenticate the supplied reference.","status":"ready"}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"compared":3,"disagreements":1}

Baseline compares UTF-8 byte length only. Differences are data checks, not AI accuracy or time saved.