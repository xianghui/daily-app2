# Freshness Ledger

DRY RUN ONLY — no endpoint requests.

1. "Morning news" · ready
   Source: {"id":"Morning news","context":"Breaking newspaper headlines and editorial news stories.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":295}"}
   Review: {"id":"Morning news","system":"news","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":295}","decision":"approve","note":"","evidence":[{"system":"news","similarity":0.6948270762501598},{"system":"images","similarity":-0.012666018864982772},{"system":"balance","similarity":-0.11004585458402046}]}
   Check: {"id":"Morning news","system":"news","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":295}","requestTime":1000,"responseTime":1010,"date":1005,"now":1020,"age":295,"maxAge":300,"noCache":false,"apparentAge":5,"responseDelay":10,"correctedAgeValue":305,"correctedInitialAge":305,"residentTime":10,"currentAge":315,"remaining":0,"selected":"revalidate","baseline":"fresh","disagreement":true,"reason":"Current age meets or exceeds the supplied lifetime; equality is stale.","status":"ready"}

2. "Catalog photos" · ready
   Source: {"id":"Catalog photos","context":"Static product thumbnail photography for the merchandise catalog.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":20}"}
   Review: {"id":"Catalog photos","system":"images","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":20}","decision":"approve","note":"","evidence":[{"system":"images","similarity":0.7145293073955451},{"system":"news","similarity":0.08276536242868313},{"system":"balance","similarity":0.06349648217303326}]}
   Check: {"id":"Catalog photos","system":"images","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":20}","requestTime":1000,"responseTime":1010,"date":1005,"now":1020,"age":20,"maxAge":3600,"noCache":false,"apparentAge":5,"responseDelay":10,"correctedAgeValue":30,"correctedInitialAge":30,"residentTime":10,"currentAge":40,"remaining":3560,"selected":"fresh","baseline":"fresh","disagreement":false,"reason":"Current age is strictly less than the supplied freshness lifetime.","status":"ready"}

3. "My bank" · ready
   Source: {"id":"My bank","context":"Private bank account balance and payment transaction statement.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":0}"}
   Review: {"id":"My bank","system":"balance","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":0}","decision":"approve","note":"","evidence":[{"system":"balance","similarity":0.5867334020738436},{"system":"images","similarity":0.044514132759524705},{"system":"news","similarity":-0.02471085651436307}]}
   Check: {"id":"My bank","system":"balance","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":0}","requestTime":1000,"responseTime":1010,"date":1005,"now":1020,"age":0,"maxAge":600,"noCache":true,"apparentAge":5,"responseDelay":10,"correctedAgeValue":10,"correctedInitialAge":10,"residentTime":10,"currentAge":20,"remaining":580,"selected":"revalidate","baseline":"fresh","disagreement":true,"reason":"noCache requires origin validation even if lifetime remains.","status":"ready"}

4. "Clock skew" · ready
   Source: {"id":"Clock skew","context":"Public newspaper articles and breaking editorial headlines.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1050,\"now\":1300,\"age\":0}"}
   Review: {"id":"Clock skew","system":"news","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1050,\"now\":1300,\"age\":0}","decision":"approve","note":"","evidence":[{"system":"news","similarity":0.7592890275749693},{"system":"images","similarity":0.029768303876358343},{"system":"balance","similarity":-0.07385162714570659}]}
   Check: {"id":"Clock skew","system":"news","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1050,\"now\":1300,\"age\":0}","requestTime":1000,"responseTime":1010,"date":1050,"now":1300,"age":0,"maxAge":300,"noCache":false,"apparentAge":0,"responseDelay":10,"correctedAgeValue":10,"correctedInitialAge":10,"residentTime":290,"currentAge":300,"remaining":0,"selected":"revalidate","baseline":"fresh","disagreement":true,"reason":"Current age meets or exceeds the supplied lifetime; equality is stale.","status":"ready"}

Computed counts: {"records":4,"ready":4,"held":0,"blocked":0,"revalidate":3,"disagreements":3}

Baseline measures residence time only and ignores upstream age and noCache. Differences are computed fixture outcomes, not accuracy, time saved or observed server behavior.