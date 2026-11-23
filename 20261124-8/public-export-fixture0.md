# License Fork

1. "Image engine" · ready
   Source: {"id":"Image engine","context":"Proprietary closed-source desktop software delivered to paying customers, source code kept private.","raw":"MIT OR GPL-3.0-only"}
   Review: {"id":"Image engine","system":"closed","raw":"MIT OR GPL-3.0-only","decision":"approve","note":"","evidence":[{"system":"closed","similarity":0.9402605484374433},{"system":"source","similarity":0.3780572766827488},{"system":"firmware","similarity":0.30398242405049897}]}
   Check: {"id":"Image engine","system":"closed","raw":"MIT OR GPL-3.0-only","selected":["MIT"],"checklist":["Retain copyright and permission notice"],"alternatives":[["MIT"],["GPL-3.0-only"]],"permitted":[["MIT"]],"baselineBlocked":true,"baselineMismatch":true,"reason":"Select a complete allowed branch with the fewest distinct supplied checklist tasks; lexical tie-break. This is a policy worksheet, not a legal compatibility opinion.","status":"ready"}

2. "Community parser" · ready
   Source: {"id":"Community parser","context":"Open source community public repository distributing complete corresponding source and build materials.","raw":"GPL-3.0-only AND MIT"}
   Review: {"id":"Community parser","system":"source","raw":"GPL-3.0-only AND MIT","decision":"approve","note":"","evidence":[{"system":"source","similarity":0.8861450877378375},{"system":"closed","similarity":0.4020948523720983},{"system":"firmware","similarity":0.1363761928293733}]}
   Check: {"id":"Community parser","system":"source","raw":"GPL-3.0-only AND MIT","selected":["GPL-3.0-only","MIT"],"checklist":["Escalate corresponding-source delivery review","Include GPL license and rights notices","Retain copyright and permission notice"],"alternatives":[["GPL-3.0-only","MIT"]],"permitted":[["GPL-3.0-only","MIT"]],"baselineBlocked":false,"baselineMismatch":false,"reason":"Select a complete allowed branch with the fewest distinct supplied checklist tasks; lexical tie-break. This is a policy worksheet, not a legal compatibility opinion.","status":"ready"}

3. "Board driver" · blocked
   Source: {"id":"Board driver","context":"Embedded firmware microcontroller device shipment, vendor-approved board firmware inventory.","raw":"Apache-2.0"}
   Review: {"id":"Board driver","system":"firmware","raw":"Apache-2.0","decision":"approve","note":"","evidence":[{"system":"firmware","similarity":0.8857229127203842},{"system":"closed","similarity":0.3434502366212755},{"system":"source","similarity":0.1687350041943961}]}
   Check: {"id":"Board driver","system":"firmware","raw":"Apache-2.0","status":"blocked","reason":"No complete AND/OR branch satisfies this supplied allowlist. No release."}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"compared":2,"baselineMismatch":1,"tasks":4,"edited":0}

Baseline rejects if ANY identifier appearing anywhere is outside the supplied allowlist, ignoring OR alternatives. Compared only on valid approved rows. Checklist tasks are illustrative review prompts, not complete license obligations, legal advice or measured time saved.