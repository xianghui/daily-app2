# Basecamp Links

LOCAL REVIEW ONLY — no URLs fetched.

Original input: {"plans":[{"id":"handbook","description":"Employee handbook: staff leave, payroll, onboarding and internal workplace policies.","base":"https://staff.example.test/handbook/people/","allowCrossOrigin":false},{"id":"developers","description":"Developer documentation: API integration, authentication tokens, SDK setup and programming examples.","base":"https://dev.example.test/docs/api/index.html","allowCrossOrigin":false},{"id":"visitors","description":"Visitor information: museum opening hours, tickets, exhibitions and public access.","base":"https://visit.example.test/guide/","allowCrossOrigin":false}],"records":[{"id":"Annual leave","context":"The staff editor is adding a link about paid holiday entitlement for employees.","raw":"../leave?year=2027#allowance"},{"id":"Token guide","context":"The programmer needs a reference for authenticating an API integration.","raw":"./authentication#tokens"},{"id":"Ticket desk","context":"Museum visitors need the booking page and public admission details.","raw":"/tickets?type=family"}]}

1. "Annual leave" · ready
   Source: {"id":"Annual leave","context":"The staff editor is adding a link about paid holiday entitlement for employees.","raw":"../leave?year=2027#allowance"}
   Review: {"id":"Annual leave","system":"handbook","raw":"../leave?year=2027#allowance","decision":"approve","note":"","evidence":[{"system":"handbook","similarity":0.36522117170329715},{"system":"developers","similarity":0.16104277470537545},{"system":"visitors","similarity":0.14884138167203237}]}
   Check: {"id":"Annual leave","system":"handbook","raw":"../leave?year=2027#allowance","base":"https://staff.example.test/handbook/people/","resolved":"https://staff.example.test/handbook/leave?year=2027#allowance","external":false,"baseline":"https://staff.example.test/handbook/people/../leave?year=2027#allowance","disagreement":true,"kind":"path-relative","reason":"Same-origin destination resolved with the browser URL standard. No URL was requested.","status":"ready"}

2. "Token guide" · ready
   Source: {"id":"Token guide","context":"The programmer needs a reference for authenticating an API integration.","raw":"./authentication#tokens"}
   Review: {"id":"Token guide","system":"developers","raw":"./authentication#tokens","decision":"approve","note":"","evidence":[{"system":"developers","similarity":0.6692024908349694},{"system":"handbook","similarity":0.14218351212543},{"system":"visitors","similarity":0.06713933016537887}]}
   Check: {"id":"Token guide","system":"developers","raw":"./authentication#tokens","base":"https://dev.example.test/docs/api/index.html","resolved":"https://dev.example.test/docs/api/authentication#tokens","external":false,"baseline":"https://dev.example.test/docs/api/index.html./authentication#tokens","disagreement":true,"kind":"path-relative","reason":"Same-origin destination resolved with the browser URL standard. No URL was requested.","status":"ready"}

3. "Ticket desk" · ready
   Source: {"id":"Ticket desk","context":"Museum visitors need the booking page and public admission details.","raw":"/tickets?type=family"}
   Review: {"id":"Ticket desk","system":"visitors","raw":"/tickets?type=family","decision":"approve","note":"","evidence":[{"system":"visitors","similarity":0.7832068813825964},{"system":"developers","similarity":0.0934542905393172},{"system":"handbook","similarity":0.05271880733488896}]}
   Check: {"id":"Ticket desk","system":"visitors","raw":"/tickets?type=family","base":"https://visit.example.test/guide/","resolved":"https://visit.example.test/tickets?type=family","external":false,"baseline":"https://visit.example.test/guide//tickets?type=family","disagreement":true,"kind":"root-relative","reason":"Same-origin destination resolved with the browser URL standard. No URL was requested.","status":"ready"}

Computed counts: {"records":3,"ready":3,"held":0,"blocked":0,"external":0,"disagreements":3}

Baseline concatenates base + reference without URL resolution. Differences are concrete string disagreements, not measured accuracy or time saved. No reachability, access, SEO, or security certification.