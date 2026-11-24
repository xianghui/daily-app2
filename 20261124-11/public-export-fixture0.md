# Accept Atelier

DRY RUN ONLY — no endpoint contacted.

1. "Nightly ETL" · ready
   Source: {"id":"Nightly ETL","context":"A nightly data import reads structured JSON records rather than human web pages.","raw":"{\"offered\":[\"text/html\",\"application/json\",\"text/plain\"]}"}
   Review: {"id":"Nightly ETL","system":"data-client","raw":"{\"offered\":[\"text/html\",\"application/json\",\"text/plain\"]}","decision":"approve","note":"","evidence":[{"system":"data-client","similarity":0.7025381266691564},{"system":"reader-client","similarity":0.5220394694765426},{"system":"terminal-client","similarity":0.15914091634599384}]}
   Check: {"id":"Nightly ETL","system":"data-client","raw":"{\"offered\":[\"text/html\",\"application/json\",\"text/plain\"]}","accept":"application/json, text/plain;q=0.4, text/html;q=0","offered":["text/html","application/json","text/plain"],"selected":"application/json","candidates":[{"media":"text/html","matched":"text/html","specificity":2,"q":0},{"media":"application/json","matched":"application/json","specificity":2,"q":1000},{"media":"text/plain","matched":"text/plain","specificity":2,"q":400}],"statusCode":200,"baseline":"text/html","disagreement":true,"reason":"Highest positive effective quality; offered order breaks equal-quality ties.","status":"ready"}

2. "Help article" · ready
   Source: {"id":"Help article","context":"People opening this document in a browser need a formatted web page, with a simple text fallback.","raw":"{\"offered\":[\"application/json\",\"text/html\",\"text/plain\"]}"}
   Review: {"id":"Help article","system":"reader-client","raw":"{\"offered\":[\"application/json\",\"text/html\",\"text/plain\"]}","decision":"approve","note":"","evidence":[{"system":"reader-client","similarity":0.6890779563005158},{"system":"data-client","similarity":0.4103791669125423},{"system":"terminal-client","similarity":0.290807310049205}]}
   Check: {"id":"Help article","system":"reader-client","raw":"{\"offered\":[\"application/json\",\"text/html\",\"text/plain\"]}","accept":"text/html, text/plain;q=0.6, application/json;q=0","offered":["application/json","text/html","text/plain"],"selected":"text/html","candidates":[{"media":"application/json","matched":"application/json","specificity":2,"q":0},{"media":"text/html","matched":"text/html","specificity":2,"q":1000},{"media":"text/plain","matched":"text/plain","specificity":2,"q":600}],"statusCode":200,"baseline":"application/json","disagreement":true,"reason":"Highest positive effective quality; offered order breaks equal-quality ties.","status":"ready"}

3. "Shell report" · ready
   Source: {"id":"Shell report","context":"A command line terminal needs readable plain text. HTML output is forbidden.","raw":"{\"offered\":[\"text/html\",\"text/plain\"]}"}
   Review: {"id":"Shell report","system":"terminal-client","raw":"{\"offered\":[\"text/html\",\"text/plain\"]}","decision":"approve","note":"","evidence":[{"system":"terminal-client","similarity":0.8476484328368369},{"system":"reader-client","similarity":0.471848891418545},{"system":"data-client","similarity":0.23240111968203553}]}
   Check: {"id":"Shell report","system":"terminal-client","raw":"{\"offered\":[\"text/html\",\"text/plain\"]}","accept":"text/plain, text/*;q=0.8, text/html;q=0","offered":["text/html","text/plain"],"selected":"text/plain","candidates":[{"media":"text/html","matched":"text/html","specificity":2,"q":0},{"media":"text/plain","matched":"text/plain","specificity":2,"q":1000}],"statusCode":200,"baseline":"text/html","disagreement":true,"reason":"Highest positive effective quality; offered order breaks equal-quality ties.","status":"ready"}

4. "Missing API format" · ready
   Source: {"id":"Missing API format","context":"An automated data integration requires JSON records, not a web page.","raw":"{\"offered\":[\"text/html\"]}"}
   Review: {"id":"Missing API format","system":"data-client","raw":"{\"offered\":[\"text/html\"]}","decision":"approve","note":"","evidence":[{"system":"data-client","similarity":0.7803322099248919},{"system":"reader-client","similarity":0.5222429992671227},{"system":"terminal-client","similarity":0.2333261024265354}]}
   Check: {"id":"Missing API format","system":"data-client","raw":"{\"offered\":[\"text/html\"]}","accept":"application/json, text/plain;q=0.4, text/html;q=0","offered":["text/html"],"selected":null,"candidates":[{"media":"text/html","matched":"text/html","specificity":2,"q":0}],"statusCode":406,"baseline":"text/html","disagreement":true,"reason":"No offered representation has positive effective quality. Expect a 406 in this constrained worksheet.","status":"ready"}

Computed counts: {"records":4,"ready":4,"held":0,"blocked":0,"unacceptable":1,"disagreements":4,"edited":0}

Baseline picks the first offered type ignoring Accept. Differences count reviewed valid cases only; not accuracy, time saved or server responses.