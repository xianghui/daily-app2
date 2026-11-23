# Flag Harbor

1. "lab" · ready
   Source: {"id":"lab","context":"Acceptance test quality inspection pass fail result","raw":"ok"}
   Review: {"id":"lab","system":"inspection","raw":"ok","decision":"approve","note":"","evidence":[{"system":"inspection","similarity":0.8654714681820411},{"system":"device","similarity":0.13995395455258478},{"system":"mail","similarity":0.06276430929786936}]}
   Typed result: {"id":"lab","system":"inspection","field":"inspection_passed","raw":"ok","baseline":true,"status":"ready","value":true,"token":"ok","matchedClass":"trueTokens"}

2. "motor" · ready
   Source: {"id":"motor","context":"Machine enabled active equipment operation status","raw":"disabled"}
   Review: {"id":"motor","system":"device","raw":"disabled","decision":"approve","note":"","evidence":[{"system":"device","similarity":0.7244194445353417},{"system":"inspection","similarity":0.11391707968531459},{"system":"mail","similarity":-0.05185438919022254}]}
   Typed result: {"id":"motor","system":"device","field":"device_enabled","raw":"disabled","baseline":true,"status":"ready","value":false,"token":"disabled","matchedClass":"falseTokens"}

3. "mail" · ready
   Source: {"id":"mail","context":"Newsletter mailing list unsubscribe opt out flag","raw":"false"}
   Review: {"id":"mail","system":"mail","raw":"false","decision":"approve","note":"","evidence":[{"system":"mail","similarity":0.8912922622264761},{"system":"inspection","similarity":0.1787250865691423},{"system":"device","similarity":0.16999185611630838}]}
   Typed result: {"id":"mail","system":"mail","field":"marketing_allowed","raw":"false","baseline":true,"status":"ready","value":true,"token":"false","matchedClass":"trueTokens"}

4. "awaiting" · ready
   Source: {"id":"awaiting","context":"Quality inspection test acceptance pass fail result","raw":""}
   Review: {"id":"awaiting","system":"inspection","raw":"","decision":"approve","note":"","evidence":[{"system":"inspection","similarity":0.8571132461368598},{"system":"device","similarity":0.11965746024733168},{"system":"mail","similarity":0.05947679504850884}]}
   Typed result: {"id":"awaiting","system":"inspection","field":"inspection_passed","raw":"","baseline":false,"status":"ready","value":null,"token":"","matchedClass":"nullTokens"}

5. "unknown" · blocked
   Source: {"id":"unknown","context":"Equipment machine enabled active status flag","raw":"maybe"}
   Review: {"id":"unknown","system":"device","raw":"maybe","decision":"approve","note":"","evidence":[{"system":"device","similarity":0.8882298334124537},{"system":"inspection","similarity":0.305041028114047},{"system":"mail","similarity":0.16174333477553537}]}
   Typed result: {"id":"unknown","system":"device","field":"device_enabled","raw":"maybe","baseline":true,"status":"blocked","reason":"Unknown token: not in the reviewed dictionary. Correct the token/profile or hold this row."}

6. "opt-out" · ready
   Source: {"id":"opt-out","context":"Marketing newsletter mailing unsubscribe opt out field","raw":"YES"}
   Review: {"id":"opt-out","system":"mail","raw":"YES","decision":"approve","note":"","evidence":[{"system":"mail","similarity":0.78929073988953},{"system":"device","similarity":0.08851612553991443},{"system":"inspection","similarity":0.04615562536794718}]}
   Typed result: {"id":"opt-out","system":"mail","field":"marketing_allowed","raw":"YES","baseline":true,"status":"ready","value":false,"token":"yes","matchedClass":"falseTokens"}

Computed counts: {"records":6,"ready":5,"held":0,"blocked":1,"true":2,"false":2,"null":1,"baselineDisagreements":3}

Baseline is JavaScript Boolean(reviewed raw string), not AI accuracy. Null remains unknown, never false. No subscriptions, equipment or inspection systems are changed.