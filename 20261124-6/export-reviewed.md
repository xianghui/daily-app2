# Glyph Budget

1. "Display" · ready
   Source: {"id":"Display","context":"Typography editorial card, visible grapheme character length for readers.","raw":"áb́ćd́éf́ǵh́"}
   Review: {"id":"Display","system":"editorial","raw":"áb́ćd́éf́ǵh́","decision":"approve","note":"=SUM(1,2)\nReviewed \"field\", exactly.","evidence":[{"system":"editorial","similarity":0.7946471145951174},{"system":"legacy","similarity":0.23684262566611444},{"system":"storage","similarity":0.22293912280363426}]}
   Check: {"id":"Display","system":"editorial","raw":"áb́ćd́éf́ǵh́","unit":"grapheme","limit":8,"length":8,"utf8":24,"utf16":16,"grapheme":8,"candidate":"áb́ćd́éf́ǵh́","removed":0,"baselinePass":false,"within":true,"reason":"","status":"ready"}

2. "Encoded" · blocked
   Source: {"id":"Encoded","context":"Database backend storage, encoded UTF-8 bytes in import column.","raw":"Résumé ☕ café!"}
   Review: {"id":"Encoded","system":"storage","raw":"Résumé ☕ café!","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.8974964727209783},{"system":"legacy","similarity":0.2954195486779559},{"system":"editorial","similarity":0.16061472546951427}]}
   Check: {"id":"Encoded","system":"storage","raw":"Résumé ☕ café!","unit":"utf8","limit":16,"length":19,"utf8":19,"utf16":14,"grapheme":14,"candidate":"Résumé ☕ caf","removed":2,"baselinePass":true,"within":false,"reason":"Over budget. Edit text or explicitly adopt the safe-prefix candidate, then approve again.","status":"blocked"}

3. "Browser" · blocked
   Source: {"id":"Browser","context":"JavaScript browser HTML form, maxlength is UTF-16 code unit length.","raw":"Launch today"}
   Review: {"id":"Browser","system":"editorial","raw":"Hi, \"x\"\n👩‍💻","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.84779720497549},{"system":"storage","similarity":0.2758196379932427},{"system":"editorial","similarity":0.27001332210413426}]}
   Check: {"id":"Browser","system":"editorial","raw":"Hi, \"x\"\n👩‍💻","unit":"grapheme","limit":8,"length":9,"utf8":19,"utf16":13,"grapheme":9,"candidate":"Hi, \"x\"\n","removed":1,"baselinePass":false,"within":false,"reason":"Over budget. Edit text or explicitly adopt the safe-prefix candidate, then approve again.","status":"blocked"}

Computed counts: {"records":3,"ready":1,"held":0,"blocked":2,"compared":3,"baselineMismatch":2,"edited":1}

Baseline checks JavaScript string.length against the reviewed limit. Differences are accept/block disagreements, not AI accuracy or measured savings. Prefixes preserve whole grapheme clusters but may cut a word or change meaning. No ellipsis, normalization, upload or external write.