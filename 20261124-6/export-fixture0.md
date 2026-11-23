# Glyph Budget

1. "DB-title" · blocked
   Source: {"id":"DB-title","context":"Backend database column import, UTF-8 encoded storage byte budget.","raw":"茶房の新しいメニュー"}
   Review: {"id":"DB-title","system":"storage","raw":"茶房の新しいメニュー","decision":"approve","note":"","evidence":[{"system":"storage","similarity":0.947623384558463},{"system":"legacy","similarity":0.2870969558140986},{"system":"editorial","similarity":0.1939611562021547}]}
   Check: {"id":"DB-title","system":"storage","raw":"茶房の新しいメニュー","unit":"utf8","limit":16,"length":30,"utf8":30,"utf16":10,"grapheme":10,"candidate":"茶房の新し","removed":5,"baselinePass":true,"within":false,"reason":"Over budget. Edit text or explicitly adopt the safe-prefix candidate, then approve again.","status":"blocked"}

2. "Form-title" · blocked
   Source: {"id":"Form-title","context":"Legacy JavaScript form input uses HTML maxlength counting UTF-16 units.","raw":"🚀🚀🚀🚀🚀🚀🚀"}
   Review: {"id":"Form-title","system":"legacy","raw":"🚀🚀🚀🚀🚀🚀🚀","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8870152811803673},{"system":"storage","similarity":0.2803657932076423},{"system":"editorial","similarity":0.25242926197268617}]}
   Check: {"id":"Form-title","system":"legacy","raw":"🚀🚀🚀🚀🚀🚀🚀","unit":"utf16","limit":12,"length":14,"utf8":28,"utf16":14,"grapheme":7,"candidate":"🚀🚀🚀🚀🚀🚀","removed":1,"baselinePass":false,"within":false,"reason":"Over budget. Edit text or explicitly adopt the safe-prefix candidate, then approve again.","status":"blocked"}

3. "Card-label" · ready
   Source: {"id":"Card-label","context":"Editorial display label budget counts human readable grapheme characters.","raw":"👩‍💻 café"}
   Review: {"id":"Card-label","system":"editorial","raw":"👩‍💻 café","decision":"approve","note":"","evidence":[{"system":"editorial","similarity":0.8948919823691639},{"system":"storage","similarity":0.24299164550810987},{"system":"legacy","similarity":0.21869497274665187}]}
   Check: {"id":"Card-label","system":"editorial","raw":"👩‍💻 café","unit":"grapheme","limit":8,"length":6,"utf8":17,"utf16":10,"grapheme":6,"candidate":"👩‍💻 café","removed":0,"baselinePass":false,"within":true,"reason":"","status":"ready"}

Computed counts: {"records":3,"ready":1,"held":0,"blocked":2,"compared":3,"baselineMismatch":2,"edited":0}

Baseline checks JavaScript string.length against the reviewed limit. Differences are accept/block disagreements, not AI accuracy or measured savings. Prefixes preserve whole grapheme clusters but may cut a word or change meaning. No ellipsis, normalization, upload or external write.