# Text Quay

1. "same-modern" · ready
   Source: {"id":"same-modern","context":"Modern web service API JSON Unicode UTF-8 multilingual website content","raw":"c3a9"}
   Review: {"id":"same-modern","system":"modern","raw":"c3a9","decision":"approve","note":"","evidence":[{"system":"modern","similarity":0.9539938281081706},{"system":"legacy","similarity":0.3276482170778142}]}
   Decoding check: {"id":"same-modern","system":"modern","raw":"c3a9","kind":"utf-8","text":"é","canonicalHex":"c3a9","byteCount":2,"roundTrip":true,"baselineText":"é","baselineReplacementOccurrences":0,"differentFromBaseline":false,"bom":false,"status":"ready"}

2. "same-legacy" · ready
   Source: {"id":"same-legacy","context":"Legacy Western European Windows desktop ANSI code page 1252 old office database","raw":"c3a9"}
   Review: {"id":"same-legacy","system":"legacy","raw":"c3a9","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8700681717656242},{"system":"modern","similarity":0.2143439768998659}]}
   Decoding check: {"id":"same-legacy","system":"legacy","raw":"c3a9","kind":"windows-1252","text":"Ã©","canonicalHex":"c3a9","byteCount":2,"roundTrip":true,"baselineText":"é","baselineReplacementOccurrences":0,"differentFromBaseline":true,"bom":false,"status":"ready"}

3. "bom" · ready
   Source: {"id":"bom","context":"Modern web service API JSON Unicode UTF-8 multilingual website content","raw":"efbbbf4869"}
   Review: {"id":"bom","system":"modern","raw":"efbbbf4869","decision":"approve","note":"","evidence":[{"system":"modern","similarity":0.9520664819570231},{"system":"legacy","similarity":0.3257946922893475}]}
   Decoding check: {"id":"bom","system":"modern","raw":"efbbbf4869","kind":"utf-8","text":"﻿Hi","canonicalHex":"efbbbf4869","byteCount":5,"roundTrip":true,"baselineText":"﻿Hi","baselineReplacementOccurrences":0,"differentFromBaseline":false,"bom":true,"status":"ready"}

4. "multiline" · ready
   Source: {"id":"multiline","context":"Legacy Western European Windows desktop ANSI code page 1252 old office database","raw":"413b2242220d0a43e9"}
   Review: {"id":"multiline","system":"legacy","raw":"413b2242220d0a43e9","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8772431148646999},{"system":"modern","similarity":0.21836801972416697}]}
   Decoding check: {"id":"multiline","system":"legacy","raw":"413b2242220d0a43e9","kind":"windows-1252","text":"A;\"B\"\r\nCé","canonicalHex":"413b2242220d0a43e9","byteCount":9,"roundTrip":true,"baselineText":"A;\"B\"\r\nC�","baselineReplacementOccurrences":1,"differentFromBaseline":true,"bom":false,"status":"ready"}

5. "overlong" · blocked
   Source: {"id":"overlong","context":"Modern web service API JSON Unicode UTF-8 multilingual website content","raw":"c0af"}
   Review: {"id":"overlong","system":"modern","raw":"c0af","decision":"approve","note":"","evidence":[{"system":"modern","similarity":0.9520664819570231},{"system":"legacy","similarity":0.3257946922893475}]}
   Decoding check: {"id":"overlong","system":"modern","raw":"c0af","kind":"utf-8","status":"blocked","reason":"Malformed UTF-8: no replacement characters were inserted. Correct bytes or hold."}

6. "nul" · blocked
   Source: {"id":"nul","context":"Legacy Western European Windows desktop ANSI code page 1252 old office database","raw":"410042"}
   Review: {"id":"nul","system":"legacy","raw":"410042","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8772431148646999},{"system":"modern","similarity":0.21836801972416697}]}
   Decoding check: {"id":"nul","system":"legacy","raw":"410042","kind":"windows-1252","status":"blocked","reason":"Unsupported control character. Only TAB, CR and LF are permitted."}

Computed counts: {"records":6,"ready":4,"held":0,"blocked":2,"roundTrips":4,"changedInterpretations":2,"baselineReplacementOccurrences":1}

Baseline: permissive UTF-8 decoding of the same reviewed bytes, compared only on ready rows. Round-trip proves bytes are preserved under the selected encoding, not that the encoding is correct. No content translation or automatic encoding detection.