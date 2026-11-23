# Flag Harbor

1. "newsletter-a" · ready
   Source: {"id":"newsletter-a","context":"Mailing list unsubscribe opt out flag from newsletter export","raw":"true"}
   Review: {"id":"newsletter-a","system":"mail","raw":"true","decision":"approve","note":"","evidence":[{"system":"mail","similarity":0.7920904171626946},{"system":"inspection","similarity":0.18998271202878908},{"system":"device","similarity":0.18472398066920556}]}
   Typed result: {"id":"newsletter-a","system":"mail","field":"marketing_allowed","raw":"true","baseline":true,"status":"ready","value":false,"token":"true","matchedClass":"falseTokens"}

2. "machine-a" · ready
   Source: {"id":"machine-a","context":"Equipment enabled status switch from machine controller inventory","raw":"false"}
   Review: {"id":"machine-a","system":"device","raw":"false","decision":"approve","note":"","evidence":[{"system":"device","similarity":0.6184397921149604},{"system":"inspection","similarity":0.12253608858815579},{"system":"mail","similarity":0.02277077039917822}]}
   Typed result: {"id":"machine-a","system":"device","field":"device_enabled","raw":"false","baseline":true,"status":"ready","value":false,"token":"false","matchedClass":"falseTokens"}

3. "check-a" · ready
   Source: {"id":"check-a","context":"Quality inspection acceptance test result","raw":"pending"}
   Review: {"id":"check-a","system":"inspection","raw":"pending","decision":"approve","note":"","evidence":[{"system":"inspection","similarity":0.745578484525444},{"system":"device","similarity":0.1287470095251512},{"system":"mail","similarity":0.04696359414230601}]}
   Typed result: {"id":"check-a","system":"inspection","field":"inspection_passed","raw":"pending","baseline":true,"status":"ready","value":null,"token":"pending","matchedClass":"nullTokens"}

4. "newsletter-b" · ready
   Source: {"id":"newsletter-b","context":"Newsletter marketing unsubscribe opt out indicator","raw":"0"}
   Review: {"id":"newsletter-b","system":"mail","raw":"0","decision":"approve","note":"","evidence":[{"system":"mail","similarity":0.7558731642011125},{"system":"device","similarity":0.1604893105017623},{"system":"inspection","similarity":0.09778120463753193}]}
   Typed result: {"id":"newsletter-b","system":"mail","field":"marketing_allowed","raw":"0","baseline":true,"status":"ready","value":true,"token":"0","matchedClass":"trueTokens"}

5. "machine-b" · ready
   Source: {"id":"machine-b","context":"Machine equipment enabled active status setting","raw":" ON "}
   Review: {"id":"machine-b","system":"device","raw":" ON ","decision":"approve","note":"","evidence":[{"system":"device","similarity":0.7621716822473767},{"system":"inspection","similarity":0.07727182123980963},{"system":"mail","similarity":0.016069187001764594}]}
   Typed result: {"id":"machine-b","system":"device","field":"device_enabled","raw":" ON ","baseline":true,"status":"ready","value":true,"token":"on","matchedClass":"trueTokens"}

6. "check-b" · ready
   Source: {"id":"check-b","context":"Inspection quality acceptance pass fail test","raw":"reject"}
   Review: {"id":"check-b","system":"inspection","raw":"reject","decision":"approve","note":"","evidence":[{"system":"inspection","similarity":0.8232637831362081},{"system":"device","similarity":0.11922841060353316},{"system":"mail","similarity":0.04063274467356399}]}
   Typed result: {"id":"check-b","system":"inspection","field":"inspection_passed","raw":"reject","baseline":true,"status":"ready","value":false,"token":"reject","matchedClass":"falseTokens"}

Computed counts: {"records":6,"ready":6,"held":0,"blocked":0,"true":2,"false":3,"null":1,"baselineDisagreements":4}

Baseline is JavaScript Boolean(reviewed raw string), not AI accuracy. Null remains unknown, never false. No subscriptions, equipment or inspection systems are changed.