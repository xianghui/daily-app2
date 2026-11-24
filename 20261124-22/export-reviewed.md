# Basecamp Links

LOCAL REVIEW ONLY — no URLs fetched.

Original input: {"plans":[{"id":"support","description":"Customer help center: product troubleshooting, refunds, warranty claims and returns.","base":"https://help.example.test/articles/returns/","allowCrossOrigin":false},{"id":"research","description":"Research library: scientific papers, academic citations, journal manuscripts and datasets.","base":"https://library.example.test/research/catalog.html","allowCrossOrigin":false},{"id":"events","description":"Community events: volunteer gatherings, workshop registration, venue access and festival schedules.","base":"https://events.example.test/calendar/","allowCrossOrigin":false}],"records":[{"id":"Refund article","context":"A customer needs the warranty return and refund troubleshooting instructions.","raw":"../refunds"},{"id":"Paper citation","context":"The scientist needs the academic journal manuscript citation and associated dataset.","raw":"?collection=climate#2026"},{"id":"Volunteer arrival","context":"Volunteers need the workshop gathering venue and community festival schedule.","raw":"//outside.example.test/map"}]}

1. "Refund article" · ready
   Source: {"id":"Refund article","context":"A customer needs the warranty return and refund troubleshooting instructions.","raw":"../refunds"}
   Review: {"id":"Refund article","system":"support","raw":"../refunds","decision":"approve","note":"","evidence":[{"system":"support","similarity":0.7426890589782418},{"system":"research","similarity":0.0474114292063298},{"system":"events","similarity":-0.018805810689049504}]}
   Check: {"id":"Refund article","system":"support","raw":"../refunds","base":"https://help.example.test/articles/returns/","resolved":"https://help.example.test/articles/refunds","external":false,"baseline":"https://help.example.test/articles/returns/../refunds","disagreement":true,"kind":"path-relative","reason":"Same-origin destination resolved with the browser URL standard. No URL was requested.","status":"ready"}

2. "Paper citation" · ready
   Source: {"id":"Paper citation","context":"The scientist needs the academic journal manuscript citation and associated dataset.","raw":"?collection=climate#2026"}
   Review: {"id":"Paper citation","system":"research","raw":"../papers?q=O%27Brien&name=%22draft%22#page","decision":"approve","note":"=SUM(1,2)\nReviewed \"paper\", exactly.","evidence":[{"system":"research","similarity":0.6825109954086416},{"system":"events","similarity":0.18004275955620008},{"system":"support","similarity":0.01650702972752664}]}
   Check: {"id":"Paper citation","system":"research","raw":"../papers?q=O%27Brien&name=%22draft%22#page","base":"https://library.example.test/research/catalog.html","resolved":"https://library.example.test/papers?q=O%27Brien&name=%22draft%22#page","external":false,"baseline":"https://library.example.test/research/catalog.html../papers?q=O%27Brien&name=%22draft%22#page","disagreement":true,"kind":"path-relative","reason":"Same-origin destination resolved with the browser URL standard. No URL was requested.","status":"ready"}

3. "Volunteer arrival" · blocked
   Source: {"id":"Volunteer arrival","context":"Volunteers need the workshop gathering venue and community festival schedule.","raw":"//outside.example.test/map"}
   Review: {"id":"Volunteer arrival","system":"events","raw":"//outside.example.test/map","decision":"approve","note":"","evidence":[{"system":"events","similarity":0.8072083533948405},{"system":"research","similarity":0.1834963960664564},{"system":"support","similarity":0.06581757027279829}]}
   Check: {"id":"Volunteer arrival","system":"events","raw":"//outside.example.test/map","status":"blocked","reason":"Cross-origin destination blocked by site policy: https://outside.example.test. Review the reference or explicitly change the site policy."}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"external":0,"disagreements":2}

Baseline concatenates base + reference without URL resolution. Differences are concrete string disagreements, not measured accuracy or time saved. No reachability, access, SEO, or security certification.