# Selector Desk

LOCAL REVIEW ONLY — no website connected.

Original input: {"plans":[{"id":"search","description":"Library search field: type keywords to find books in the academic catalog.","tag":"input","elementId":"query","classes":["field","search"]},{"id":"reserve","description":"Book reservation button: borrow a library book and place a hold for pickup.","tag":"button","elementId":"hold","classes":["action","reserve"]},{"id":"hours","description":"Library opening hours: daily visitor schedule and building public access times.","tag":"aside","elementId":"hours","classes":["notice","schedule"]}],"rules":[{"selector":".field.search, #hold","property":"font-weight","value":"700","important":false},{"selector":"input","property":"font-weight","value":"400","important":false},{"selector":".reserve","property":"display","value":"inline-block","important":true},{"selector":"#hold","property":"display","value":"none","important":false},{"selector":"p","property":"font-size","value":"12px","important":false}],"records":[{"id":"Catalog keywords","context":"The academic book catalog keyword search input needs heavier text.","raw":"font-weight"},{"id":"Borrow action","context":"The library book pickup reservation button is unexpectedly hidden.","raw":"display"},{"id":"Visitor schedule","context":"The library daily opening hours panel needs a text size check.","raw":"font-size"}]}

1. "Catalog keywords" · ready
   Source: {"id":"Catalog keywords","context":"The academic book catalog keyword search input needs heavier text.","raw":"font-weight"}
   Review: {"id":"Catalog keywords","system":"search","raw":"font-weight","decision":"approve","note":"","evidence":[{"system":"search","similarity":0.7317854693142376},{"system":"reserve","similarity":0.253212411941824},{"system":"hours","similarity":0.24623379346670868}]}
   Check: {"id":"Catalog keywords","system":"search","raw":"font-weight","property":"font-weight","ruleIndex":0,"selector":".field.search, #hold","matchedBranch":".field.search","specificity":[0,2,0],"important":false,"value":"700","baseline":"400","disagreement":true,"matches":[{"ruleIndex":0,"selector":".field.search, #hold","matchedBranch":".field.search","specificity":[0,2,0],"important":false,"value":"700"},{"ruleIndex":1,"selector":"input","matchedBranch":"input","specificity":[0,0,1],"important":false,"value":"400"}],"reason":"Author-only, unlayered compound-selector cascade. Review all assumptions before using this expectation.","status":"ready"}

2. "Borrow action" · ready
   Source: {"id":"Borrow action","context":"The library book pickup reservation button is unexpectedly hidden.","raw":"display"}
   Review: {"id":"Borrow action","system":"reserve","raw":"display","decision":"approve","note":"","evidence":[{"system":"reserve","similarity":0.7139249094145128},{"system":"hours","similarity":0.27238173750706374},{"system":"search","similarity":0.270645999784464}]}
   Check: {"id":"Borrow action","system":"reserve","raw":"display","property":"display","ruleIndex":2,"selector":".reserve","matchedBranch":".reserve","specificity":[0,1,0],"important":true,"value":"inline-block","baseline":"none","disagreement":true,"matches":[{"ruleIndex":2,"selector":".reserve","matchedBranch":".reserve","specificity":[0,1,0],"important":true,"value":"inline-block"},{"ruleIndex":3,"selector":"#hold","matchedBranch":"#hold","specificity":[1,0,0],"important":false,"value":"none"}],"reason":"Author-only, unlayered compound-selector cascade. Review all assumptions before using this expectation.","status":"ready"}

3. "Visitor schedule" · blocked
   Source: {"id":"Visitor schedule","context":"The library daily opening hours panel needs a text size check.","raw":"font-size"}
   Review: {"id":"Visitor schedule","system":"hours","raw":"font-size","decision":"approve","note":"","evidence":[{"system":"hours","similarity":0.507711459700498},{"system":"reserve","similarity":0.25173610116527645},{"system":"search","similarity":0.22030989136418977}]}
   Check: {"id":"Visitor schedule","system":"hours","raw":"font-size","status":"blocked","reason":"No matching explicit declaration. Inherited/initial styles are outside this subset."}

Computed counts: {"records":3,"ready":2,"held":0,"blocked":1,"important":1,"disagreements":2}

Baseline uses the last matching declaration without specificity or important. Differences are concrete value disagreements, not measured accuracy or time saved. Author-only unlayered compound selector subset; no inheritance, browser style certification or changes.