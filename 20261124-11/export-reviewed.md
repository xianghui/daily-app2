# Accept Atelier

DRY RUN ONLY — no endpoint contacted.

1. "Terminal wildcard" · ready
   Source: {"id":"Terminal wildcard","context":"This command line utility displays text output in a terminal and explicitly excludes HTML pages.","raw":"{\"offered\":[\"text/html\",\"text/csv\"]}"}
   Review: {"id":"Terminal wildcard","system":"terminal-client","raw":"{\"offered\":[\"text/html\"]}","decision":"approve","note":"=SUM(1,2)\nReviewed \"intent\", exactly.","evidence":[{"system":"terminal-client","similarity":0.5528142919113715},{"system":"reader-client","similarity":0.5005847546268323},{"system":"data-client","similarity":0.38053771799895375}]}
   Check: {"id":"Terminal wildcard","system":"terminal-client","raw":"{\"offered\":[\"text/html\"]}","accept":"text/plain, text/*;q=0.8, text/html;q=0","offered":["text/html"],"selected":null,"candidates":[{"media":"text/html","matched":"text/html","specificity":2,"q":0}],"statusCode":406,"baseline":"text/html","disagreement":true,"reason":"No offered representation has positive effective quality. Expect a 406 in this constrained worksheet.","status":"ready"}

2. "Browser fallback" · ready
   Source: {"id":"Browser fallback","context":"The human document reader prefers a formatted HTML page in the web browser, then plain text.","raw":"{\"offered\":[\"application/json\",\"text/plain\"]}"}
   Review: {"id":"Browser fallback","system":"reader-client","raw":"{\"offered\":[\"application/json\",\"text/plain\"]}","decision":"approve","note":"","evidence":[{"system":"reader-client","similarity":0.74992470035783},{"system":"terminal-client","similarity":0.5117626016474359},{"system":"data-client","similarity":0.47760739398882596}]}
   Check: {"id":"Browser fallback","system":"reader-client","raw":"{\"offered\":[\"application/json\",\"text/plain\"]}","accept":"text/html, text/plain;q=0.6, application/json;q=0","offered":["application/json","text/plain"],"selected":"text/plain","candidates":[{"media":"application/json","matched":"application/json","specificity":2,"q":0},{"media":"text/plain","matched":"text/plain","specificity":2,"q":600}],"statusCode":200,"baseline":"application/json","disagreement":true,"reason":"Highest positive effective quality; offered order breaks equal-quality ties.","status":"ready"}

3. "Warehouse feed" · ready
   Source: {"id":"Warehouse feed","context":"The data pipeline consumes machine readable JSON records for an automated import.","raw":"{\"offered\":[\"text/plain\",\"application/json\"]}"}
   Review: {"id":"Warehouse feed","system":"data-client","raw":"{\"offered\":[\"text/plain\",\"application/json\"]}","decision":"approve","note":"","evidence":[{"system":"data-client","similarity":0.5805796947731199},{"system":"reader-client","similarity":0.2750964435780582},{"system":"terminal-client","similarity":0.2027105882239001}]}
   Check: {"id":"Warehouse feed","system":"data-client","raw":"{\"offered\":[\"text/plain\",\"application/json\"]}","accept":"application/json, text/plain;q=0.4, text/html;q=0","offered":["text/plain","application/json"],"selected":"application/json","candidates":[{"media":"text/plain","matched":"text/plain","specificity":2,"q":400},{"media":"application/json","matched":"application/json","specificity":2,"q":1000}],"statusCode":200,"baseline":"text/plain","disagreement":true,"reason":"Highest positive effective quality; offered order breaks equal-quality ties.","status":"ready"}

4. "Malformed case" · blocked
   Source: {"id":"Malformed case","context":"A terminal command line reader displays plain text, never HTML.","raw":"{\"offered\":[\"text/plain;charset=utf-8\"]}"}
   Review: {"id":"Malformed case","system":"terminal-client","raw":"{\"offered\":[\"text/plain;charset=utf-8\"]}","decision":"approve","note":"","evidence":[{"system":"terminal-client","similarity":0.8689732360648654},{"system":"reader-client","similarity":0.5699338801724299},{"system":"data-client","similarity":0.3549206997175024}]}
   Check: {"id":"Malformed case","system":"terminal-client","raw":"{\"offered\":[\"text/plain;charset=utf-8\"]}","status":"blocked","reason":"Use type/subtype tokens without parameters or whitespace."}

Computed counts: {"records":4,"ready":3,"held":0,"blocked":1,"unacceptable":1,"disagreements":3,"edited":1}

Baseline picks the first offered type ignoring Accept. Differences count reviewed valid cases only; not accuracy, time saved or server responses.