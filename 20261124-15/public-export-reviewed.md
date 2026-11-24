# Disposition Desk

DRY RUN ONLY — no endpoint requests.

1. "Greek paper" · ready
   Source: {"id":"Greek paper","context":"Scientific research publication and academic report.","raw":"{\"filename\":\"Δ study.pdf\",\"fallback\":\"delta-study.pdf\"}"}
   Review: {"id":"Greek paper","system":"research","raw":"{\"filename\":\"edited résumé.pdf\",\"fallback\":\"edited-resume.pdf\"}","decision":"approve","note":"=SUM(1,2)\nReviewed \"clock\", exactly.","evidence":[{"system":"research","similarity":0.6812985877471675},{"system":"gallery","similarity":0.10379596206534637},{"system":"billing","similarity":0.07958632407347421}]}
   Check: {"id":"Greek paper","system":"research","raw":"{\"filename\":\"edited résumé.pdf\",\"fallback\":\"edited-resume.pdf\"}","filename":"edited résumé.pdf","fallback":"edited-resume.pdf","header":"attachment; filename=\"edited-resume.pdf\"; filename*=UTF-8''edited%20r%C3%A9sum%C3%A9.pdf","selected":"attachment","utf8Bytes":19,"roundTrip":true,"extended":"edited%20r%C3%A9sum%C3%A9.pdf","baseline":"unsafe or lossy","disagreement":true,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

2. "Portrait" · ready
   Source: {"id":"Portrait","context":"Online artwork photo gallery preview image.","raw":"{\"filename\":\"portrait.jpg\",\"fallback\":\"portrait.jpg\"}"}
   Review: {"id":"Portrait","system":"gallery","raw":"{\"filename\":\"portrait.jpg\",\"fallback\":\"portrait.jpg\"}","decision":"approve","note":"","evidence":[{"system":"gallery","similarity":0.754351393301908},{"system":"research","similarity":0.18362186092916866},{"system":"billing","similarity":0.11475476833582256}]}
   Check: {"id":"Portrait","system":"gallery","raw":"{\"filename\":\"portrait.jpg\",\"fallback\":\"portrait.jpg\"}","filename":"portrait.jpg","fallback":"portrait.jpg","header":"inline; filename=\"portrait.jpg\"; filename*=UTF-8''portrait.jpg","selected":"inline","utf8Bytes":12,"roundTrip":true,"extended":"portrait.jpg","baseline":"faithful ASCII","disagreement":false,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

3. "Unsafe receipt" · blocked
   Source: {"id":"Unsafe receipt","context":"Customer payment receipt for an invoice.","raw":"{\"filename\":\"receipt\\r\\nX-Injected: yes.pdf\",\"fallback\":\"receipt.pdf\"}"}
   Review: {"id":"Unsafe receipt","system":"billing","raw":"{\"filename\":\"receipt\\r\\nX-Injected: yes.pdf\",\"fallback\":\"receipt.pdf\"}","decision":"approve","note":"","evidence":[{"system":"billing","similarity":0.6633302513038914},{"system":"gallery","similarity":0.07107505295545455},{"system":"research","similarity":-0.0008098838884214987}]}
   Check: {"id":"Unsafe receipt","system":"billing","raw":"{\"filename\":\"receipt\\r\\nX-Injected: yes.pdf\",\"fallback\":\"receipt.pdf\"}","status":"blocked","reason":"Filename must be 1–180 units, without path separators, controls, bidi formatting, lone surrogates or edge spaces."}

4. "Apostrophe paper" · ready
   Source: {"id":"Apostrophe paper","context":"Academic scientific paper and research report.","raw":"{\"filename\":\"O'Brien (final).pdf\",\"fallback\":\"obrien-final.pdf\"}"}
   Review: {"id":"Apostrophe paper","system":"research","raw":"{\"filename\":\"O'Brien (final).pdf\",\"fallback\":\"obrien-final.pdf\"}","decision":"approve","note":"","evidence":[{"system":"research","similarity":0.711418182359267},{"system":"billing","similarity":0.11186890178474106},{"system":"gallery","similarity":0.10127001634627802}]}
   Check: {"id":"Apostrophe paper","system":"research","raw":"{\"filename\":\"O'Brien (final).pdf\",\"fallback\":\"obrien-final.pdf\"}","filename":"O'Brien (final).pdf","fallback":"obrien-final.pdf","header":"attachment; filename=\"obrien-final.pdf\"; filename*=UTF-8''O%27Brien%20%28final%29.pdf","selected":"attachment","utf8Bytes":19,"roundTrip":true,"extended":"O%27Brien%20%28final%29.pdf","baseline":"faithful ASCII","disagreement":false,"reason":"Original Unicode name round-trips through filename*. ASCII fallback uses quoted-string escaping. Actual browser behavior must be integration-tested.","status":"ready"}

Computed counts: {"records":4,"ready":3,"held":0,"blocked":1,"extended":1,"disagreements":1}

Baseline quotes original names without escaping or UTF-8 extended parameters. Differences are computed fixture outcomes, not accuracy, time saved or observed browser behavior.