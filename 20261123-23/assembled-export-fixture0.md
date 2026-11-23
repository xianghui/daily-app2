# Text Quay

1. "web-cafe" · ready
   Source: {"id":"web-cafe","context":"Modern web service API JSON Unicode UTF-8 multilingual website content","raw":"436166c3a9"}
   Review: {"id":"web-cafe","system":"modern","raw":"436166c3a9","decision":"approve","note":"","evidence":[{"system":"modern","similarity":0.9539938281081706},{"system":"legacy","similarity":0.3276482170778142}]}
   Decoding check: {"id":"web-cafe","system":"modern","raw":"436166c3a9","kind":"utf-8","text":"Café","canonicalHex":"436166c3a9","byteCount":5,"roundTrip":true,"baselineText":"Café","baselineReplacementOccurrences":0,"differentFromBaseline":false,"bom":false,"status":"ready"}

2. "office-euro" · ready
   Source: {"id":"office-euro","context":"Legacy Western European Windows desktop ANSI code page 1252 old office database","raw":"50726963653a2080203130"}
   Review: {"id":"office-euro","system":"legacy","raw":"50726963653a2080203130","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8700681717656242},{"system":"modern","similarity":0.2143439768998659}]}
   Decoding check: {"id":"office-euro","system":"legacy","raw":"50726963653a2080203130","kind":"windows-1252","text":"Price: € 10","canonicalHex":"50726963653a2080203130","byteCount":11,"roundTrip":true,"baselineText":"Price: � 10","baselineReplacementOccurrences":1,"differentFromBaseline":true,"bom":false,"status":"ready"}

3. "web-japan" · ready
   Source: {"id":"web-japan","context":"Web service API modern JSON Unicode UTF-8 multilingual website","raw":"e697a5e69cac"}
   Review: {"id":"web-japan","system":"modern","raw":"e697a5e69cac","decision":"approve","note":"","evidence":[{"system":"modern","similarity":0.9377555398037204},{"system":"legacy","similarity":0.3203229848431239}]}
   Decoding check: {"id":"web-japan","system":"modern","raw":"e697a5e69cac","kind":"utf-8","text":"日本","canonicalHex":"e697a5e69cac","byteCount":6,"roundTrip":true,"baselineText":"日本","baselineReplacementOccurrences":0,"differentFromBaseline":false,"bom":false,"status":"ready"}

4. "office-quotes" · ready
   Source: {"id":"office-quotes","context":"Old office database legacy Windows desktop ANSI code page 1252 Western European","raw":"93486994209720636166e9"}
   Review: {"id":"office-quotes","system":"legacy","raw":"93486994209720636166e9","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8470097792077027},{"system":"modern","similarity":0.16219050953376102}]}
   Decoding check: {"id":"office-quotes","system":"legacy","raw":"93486994209720636166e9","kind":"windows-1252","text":"“Hi” — café","canonicalHex":"93486994209720636166e9","byteCount":11,"roundTrip":true,"baselineText":"�Hi� � caf�","baselineReplacementOccurrences":4,"differentFromBaseline":true,"bom":false,"status":"ready"}

5. "truncated" · blocked
   Source: {"id":"truncated","context":"Modern web service JSON API Unicode UTF-8 text export","raw":"e282"}
   Review: {"id":"truncated","system":"modern","raw":"e282","decision":"approve","note":"","evidence":[{"system":"modern","similarity":0.9261546217597966},{"system":"legacy","similarity":0.41170050020428545}]}
   Decoding check: {"id":"truncated","system":"modern","raw":"e282","kind":"utf-8","status":"blocked","reason":"Malformed UTF-8: no replacement characters were inserted. Correct bytes or hold."}

6. "undefined" · blocked
   Source: {"id":"undefined","context":"Legacy Western European Windows desktop ANSI code page 1252 office database","raw":"81"}
   Review: {"id":"undefined","system":"legacy","raw":"81","decision":"approve","note":"","evidence":[{"system":"legacy","similarity":0.8734199403976334},{"system":"modern","similarity":0.24240174969117922}]}
   Decoding check: {"id":"undefined","system":"legacy","raw":"81","kind":"windows-1252","status":"blocked","reason":"Undefined Windows-1252 byte 81. Correct bytes or hold."}

Computed counts: {"records":6,"ready":4,"held":0,"blocked":2,"roundTrips":4,"changedInterpretations":2,"baselineReplacementOccurrences":5}

Baseline: permissive UTF-8 decoding of the same reviewed bytes, compared only on ready rows. Round-trip proves bytes are preserved under the selected encoding, not that the encoding is correct. No content translation or automatic encoding detection.