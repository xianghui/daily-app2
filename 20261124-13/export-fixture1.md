# Range Relay

DRY RUN ONLY — no URL requests.

1. "Tiny trailer" · ready
   Source: {"id":"Tiny trailer","context":"Inspect the last eighty bytes of a file footer, including trailing metadata at the end.","raw":"{\"length\":12}"}
   Review: {"id":"Tiny trailer","system":"trailer-inspection","raw":"{\"length\":12}","decision":"approve","note":"","evidence":[{"system":"trailer-inspection","similarity":0.8781342760384209},{"system":"header-preview","similarity":0.5921394464244807},{"system":"resume-download","similarity":0.4287331745419816}]}
   Check: {"id":"Tiny trailer","system":"trailer-inspection","raw":"{\"length\":12}","range":"bytes=-80","length":12,"statusCode":206,"selected":"bytes 0-11/12","intervals":[[0,11]],"witnesses":[{"index":0,"request":{"kind":"suffix","count":80},"first":0,"last":11,"satisfiable":true}],"payloadBytes":12,"multipart":false,"contentRanges":["bytes 0-11/12"],"unsatisfiedContentRange":null,"baseline":12,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":0,"reason":"Satisfiable intervals clipped to the representation, sorted and coalesced. Disjoint intervals require multipart output; byte count excludes framing.","status":"ready"}

2. "Expired offset" · ready
   Source: {"id":"Expired offset","context":"Resume an interrupted download from byte offset 200, requesting the remaining file.","raw":"{\"length\":150}"}
   Review: {"id":"Expired offset","system":"resume-download","raw":"{\"length\":150}","decision":"approve","note":"","evidence":[{"system":"resume-download","similarity":0.9020352521607174},{"system":"header-preview","similarity":0.44947438377167725},{"system":"trailer-inspection","similarity":0.445195162690646}]}
   Check: {"id":"Expired offset","system":"resume-download","raw":"{\"length\":150}","range":"bytes=200-","length":150,"statusCode":416,"selected":"bytes */150","intervals":[],"witnesses":[{"index":0,"request":{"kind":"position","first":200,"last":null},"first":200,"last":149,"satisfiable":false}],"payloadBytes":0,"multipart":false,"contentRanges":[],"unsatisfiedContentRange":"bytes */150","baseline":150,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":150,"reason":"No satisfiable interval: expect 416 and an unsatisfied Content-Range in this worksheet.","status":"ready"}

3. "Opening probe" · ready
   Source: {"id":"Opening probe","context":"Read the opening file header and first 100 bytes for a magic signature preview.","raw":"{\"length\":500}"}
   Review: {"id":"Opening probe","system":"header-preview","raw":"{\"length\":500}","decision":"approve","note":"","evidence":[{"system":"header-preview","similarity":0.8815817825645859},{"system":"trailer-inspection","similarity":0.5091281686451893},{"system":"resume-download","similarity":0.3979660277980772}]}
   Check: {"id":"Opening probe","system":"header-preview","raw":"{\"length\":500}","range":"bytes=0-99","length":500,"statusCode":206,"selected":"bytes 0-99/500","intervals":[[0,99]],"witnesses":[{"index":0,"request":{"kind":"position","first":0,"last":99},"first":0,"last":99,"satisfiable":true}],"payloadBytes":100,"multipart":false,"contentRanges":["bytes 0-99/500"],"unsatisfiedContentRange":null,"baseline":500,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":400,"reason":"Satisfiable intervals clipped to the representation, sorted and coalesced. Disjoint intervals require multipart output; byte count excludes framing.","status":"ready"}

4. "Bad length" · blocked
   Source: {"id":"Bad length","context":"Continue an interrupted file download from offset 200 until the end.","raw":"{\"length\":-5}"}
   Review: {"id":"Bad length","system":"resume-download","raw":"{\"length\":-5}","decision":"approve","note":"","evidence":[{"system":"resume-download","similarity":0.8719603166879748},{"system":"trailer-inspection","similarity":0.40035743797401885},{"system":"header-preview","similarity":0.3608812376745468}]}
   Check: {"id":"Bad length","system":"resume-download","raw":"{\"length\":-5}","status":"blocked","reason":"Case must contain only integer length, 0–1,000,000,000 bytes."}

Computed counts: {"records":4,"ready":3,"held":0,"blocked":1,"unacceptable":1,"disagreements":3,"edited":0,"payloadBytes":112,"omittedPayloadBytes":550}

Baseline sends the complete representation with status 200. Byte differences exclude headers/framing; not measured bandwidth saved, AI accuracy or proof of server behavior.