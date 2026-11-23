# License Fork

1. "Sensor library" · ready
   Source: {"id":"Sensor library","context":"Embedded firmware microcontroller device shipment, vendor-approved board firmware inventory.","raw":"Apache-2.0 OR BSD-3-Clause"}
   Review: {"id":"Sensor library","system":"firmware","raw":"Apache-2.0 OR BSD-3-Clause","decision":"approve","note":"","evidence":[{"system":"firmware","similarity":0.885987385214482},{"system":"closed","similarity":0.3286357282122693},{"system":"source","similarity":0.15463352068099614}]}
   Check: {"id":"Sensor library","system":"firmware","raw":"Apache-2.0 OR BSD-3-Clause","selected":["BSD-3-Clause"],"checklist":["Observe supplied non-endorsement review","Retain copyright, conditions and disclaimer"],"alternatives":[["Apache-2.0"],["BSD-3-Clause"]],"permitted":[["BSD-3-Clause"]],"baselineBlocked":true,"baselineMismatch":true,"reason":"Select a complete allowed branch with the fewest distinct supplied checklist tasks; lexical tie-break. This is a policy worksheet, not a legal compatibility opinion.","status":"ready"}

2. "Public toolkit" · ready
   Source: {"id":"Public toolkit","context":"Open source community project published in a public repository with complete corresponding source and build materials.","raw":"(GPL-3.0-only OR MIT) AND Apache-2.0"}
   Review: {"id":"Public toolkit","system":"source","raw":"(GPL-3.0-only OR MIT) AND Apache-2.0","decision":"approve","note":"","evidence":[{"system":"source","similarity":0.8927025827984867},{"system":"closed","similarity":0.3587999855644455},{"system":"firmware","similarity":0.1059837410581835}]}
   Check: {"id":"Public toolkit","system":"source","raw":"(GPL-3.0-only OR MIT) AND Apache-2.0","selected":["Apache-2.0","MIT"],"checklist":["Include Apache license copy","Retain copyright and permission notice","Review NOTICE and modification markings"],"alternatives":[["Apache-2.0","GPL-3.0-only"],["Apache-2.0","MIT"]],"permitted":[["Apache-2.0","MIT"],["Apache-2.0","GPL-3.0-only"]],"baselineBlocked":false,"baselineMismatch":false,"reason":"Select a complete allowed branch with the fewest distinct supplied checklist tasks; lexical tie-break. This is a policy worksheet, not a legal compatibility opinion.","status":"ready"}

3. "Paid renderer" · blocked
   Source: {"id":"Paid renderer","context":"Commercial proprietary closed-source desktop binary delivered to paying customers, private source code.","raw":"GPL-3.0-only AND BSD-3-Clause"}
   Review: {"id":"Paid renderer","system":"closed","raw":"GPL-3.0-only AND BSD-3-Clause","decision":"approve","note":"","evidence":[{"system":"closed","similarity":0.9120226679089598},{"system":"source","similarity":0.43382982994306923},{"system":"firmware","similarity":0.37622101410615355}]}
   Check: {"id":"Paid renderer","system":"closed","raw":"GPL-3.0-only AND BSD-3-Clause","status":"blocked","reason":"No complete AND/OR branch satisfies this supplied allowlist. No release."}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"compared":2,"baselineMismatch":1,"tasks":5,"edited":0}

Baseline rejects if ANY identifier appearing anywhere is outside the supplied allowlist, ignoring OR alternatives. Compared only on valid approved rows. Checklist tasks are illustrative review prompts, not complete license obligations, legal advice or measured time saved.