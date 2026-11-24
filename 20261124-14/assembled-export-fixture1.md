# Freshness Ledger

DRY RUN ONLY — no endpoint requests.

1. "Old photo" · ready
   Source: {"id":"Old photo","context":"Merchandise product pictures and catalog thumbnail photography.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":3590}"}
   Review: {"id":"Old photo","system":"images","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":3590}","decision":"approve","note":"","evidence":[{"system":"images","similarity":0.7254295919582936},{"system":"balance","similarity":0.1552269340800922},{"system":"news","similarity":0.10649264419799967}]}
   Check: {"id":"Old photo","system":"images","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":3590}","requestTime":1000,"responseTime":1010,"date":1005,"now":1020,"age":3590,"maxAge":3600,"noCache":false,"apparentAge":5,"responseDelay":10,"correctedAgeValue":3600,"correctedInitialAge":3600,"residentTime":10,"currentAge":3610,"remaining":0,"selected":"revalidate","baseline":"fresh","disagreement":true,"reason":"Current age meets or exceeds the supplied lifetime; equality is stale.","status":"ready"}

2. "Fresh headline" · ready
   Source: {"id":"Fresh headline","context":"Breaking newspaper headlines and editorial articles.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":0}"}
   Review: {"id":"Fresh headline","system":"news","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":0}","decision":"approve","note":"","evidence":[{"system":"news","similarity":0.6936370820287926},{"system":"images","similarity":0.03232813959803486},{"system":"balance","similarity":-0.09464491651583563}]}
   Check: {"id":"Fresh headline","system":"news","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":0}","requestTime":1000,"responseTime":1010,"date":1005,"now":1020,"age":0,"maxAge":300,"noCache":false,"apparentAge":5,"responseDelay":10,"correctedAgeValue":10,"correctedInitialAge":10,"residentTime":10,"currentAge":20,"remaining":280,"selected":"fresh","baseline":"fresh","disagreement":false,"reason":"Current age is strictly less than the supplied freshness lifetime.","status":"ready"}

3. "New statement" · ready
   Source: {"id":"New statement","context":"Personal bank account balance and private payment history.","raw":"{\"requestTime\":1000,\"responseTime\":1000,\"date\":1000,\"now\":1000,\"age\":0}"}
   Review: {"id":"New statement","system":"balance","raw":"{\"requestTime\":1000,\"responseTime\":1000,\"date\":1000,\"now\":1000,\"age\":0}","decision":"approve","note":"","evidence":[{"system":"balance","similarity":0.6625706142864402},{"system":"images","similarity":0.15044657080741708},{"system":"news","similarity":-0.035460914436774967}]}
   Check: {"id":"New statement","system":"balance","raw":"{\"requestTime\":1000,\"responseTime\":1000,\"date\":1000,\"now\":1000,\"age\":0}","requestTime":1000,"responseTime":1000,"date":1000,"now":1000,"age":0,"maxAge":600,"noCache":true,"apparentAge":0,"responseDelay":0,"correctedAgeValue":0,"correctedInitialAge":0,"residentTime":0,"currentAge":0,"remaining":600,"selected":"revalidate","baseline":"fresh","disagreement":true,"reason":"noCache requires origin validation even if lifetime remains.","status":"ready"}

4. "Impossible timeline" · blocked
   Source: {"id":"Impossible timeline","context":"Static product thumbnail images for the merchandise catalog.","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":-1}"}
   Review: {"id":"Impossible timeline","system":"images","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":-1}","decision":"approve","note":"","evidence":[{"system":"images","similarity":0.6845921150686318},{"system":"balance","similarity":0.08679389978632733},{"system":"news","similarity":0.07225636857988997}]}
   Check: {"id":"Impossible timeline","system":"images","raw":"{\"requestTime\":1000,\"responseTime\":1010,\"date\":1005,\"now\":1020,\"age\":-1}","status":"blocked","reason":"Exactly five nonnegative integer-second fields required, each ≤2 billion."}

Computed counts: {"records":4,"ready":3,"held":0,"blocked":1,"revalidate":2,"disagreements":2}

Baseline measures residence time only and ignores upstream age and noCache. Differences are computed fixture outcomes, not accuracy, time saved or observed server behavior.