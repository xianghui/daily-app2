# Range Relay

DRY RUN ONLY — no URL requests.

1. "Interrupted archive" · ready
   Source: {"id":"Interrupted archive","context":"Continue the interrupted file transfer from offset 200 through the end of the download.","raw":"{\"length\":250}"}
   Review: {"id":"Interrupted archive","system":"resume-download","raw":"{\"length\":250}","decision":"approve","note":"","evidence":[{"system":"resume-download","similarity":0.847349894487523},{"system":"header-preview","similarity":0.35141776116408774},{"system":"trailer-inspection","similarity":0.334649861984923}]}
   Check: {"id":"Interrupted archive","system":"resume-download","raw":"{\"length\":250}","range":"bytes=200-","length":250,"statusCode":206,"selected":"bytes 200-249/250","intervals":[[200,249]],"witnesses":[{"index":0,"request":{"kind":"position","first":200,"last":null},"first":200,"last":249,"satisfiable":true}],"payloadBytes":50,"multipart":false,"contentRanges":["bytes 200-249/250"],"unsatisfiedContentRange":null,"baseline":250,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":200,"reason":"Satisfiable intervals clipped to the representation, sorted and coalesced. Disjoint intervals require multipart output; byte count excludes framing.","status":"ready"}

2. "Magic signature" · ready
   Source: {"id":"Magic signature","context":"Read only the first 100 bytes at the beginning of the file to identify the header.","raw":"{\"length\":65}"}
   Review: {"id":"Magic signature","system":"header-preview","raw":"{\"length\":65}","decision":"approve","note":"","evidence":[{"system":"header-preview","similarity":0.7954361752716477},{"system":"trailer-inspection","similarity":0.5687686529712145},{"system":"resume-download","similarity":0.4718816069478133}]}
   Check: {"id":"Magic signature","system":"header-preview","raw":"{\"length\":65}","range":"bytes=0-99","length":65,"statusCode":206,"selected":"bytes 0-64/65","intervals":[[0,64]],"witnesses":[{"index":0,"request":{"kind":"position","first":0,"last":99},"first":0,"last":64,"satisfiable":true}],"payloadBytes":65,"multipart":false,"contentRanges":["bytes 0-64/65"],"unsatisfiedContentRange":null,"baseline":65,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":0,"reason":"Satisfiable intervals clipped to the representation, sorted and coalesced. Disjoint intervals require multipart output; byte count excludes framing.","status":"ready"}

3. "Footer metadata" · ready
   Source: {"id":"Footer metadata","context":"Read the last 80 bytes at the end of this binary file to inspect trailing metadata.","raw":"{\"length\":1000}"}
   Review: {"id":"Footer metadata","system":"trailer-inspection","raw":"{\"length\":1000}","decision":"approve","note":"","evidence":[{"system":"trailer-inspection","similarity":0.7291002092369813},{"system":"header-preview","similarity":0.6072158900822201},{"system":"resume-download","similarity":0.47678667304359457}]}
   Check: {"id":"Footer metadata","system":"trailer-inspection","raw":"{\"length\":1000}","range":"bytes=-80","length":1000,"statusCode":206,"selected":"bytes 920-999/1000","intervals":[[920,999]],"witnesses":[{"index":0,"request":{"kind":"suffix","count":80},"first":920,"last":999,"satisfiable":true}],"payloadBytes":80,"multipart":false,"contentRanges":["bytes 920-999/1000"],"unsatisfiedContentRange":null,"baseline":1000,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":920,"reason":"Satisfiable intervals clipped to the representation, sorted and coalesced. Disjoint intervals require multipart output; byte count excludes framing.","status":"ready"}

4. "Empty object" · ready
   Source: {"id":"Empty object","context":"Preview the beginning of this file and inspect its first header bytes.","raw":"{\"length\":0}"}
   Review: {"id":"Empty object","system":"header-preview","raw":"{\"length\":0}","decision":"approve","note":"","evidence":[{"system":"header-preview","similarity":0.849304164360538},{"system":"trailer-inspection","similarity":0.5847225025098645},{"system":"resume-download","similarity":0.43993441556706914}]}
   Check: {"id":"Empty object","system":"header-preview","raw":"{\"length\":0}","range":"bytes=0-99","length":0,"statusCode":416,"selected":"bytes */0","intervals":[],"witnesses":[{"index":0,"request":{"kind":"position","first":0,"last":99},"first":0,"last":-1,"satisfiable":false}],"payloadBytes":0,"multipart":false,"contentRanges":[],"unsatisfiedContentRange":"bytes */0","baseline":0,"baselineStatus":200,"disagreement":true,"omittedPayloadBytes":0,"reason":"No satisfiable interval: expect 416 and an unsatisfied Content-Range in this worksheet.","status":"ready"}

Computed counts: {"records":4,"ready":4,"held":0,"blocked":0,"unacceptable":1,"disagreements":4,"edited":0,"payloadBytes":195,"omittedPayloadBytes":1120}

Baseline sends the complete representation with status 200. Byte differences exclude headers/framing; not measured bandwidth saved, AI accuracy or proof of server behavior.